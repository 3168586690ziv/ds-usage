// The ledger's own tests, so a change cannot silently break the counting.
import assert from 'node:assert/strict'
import { mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import { apply } from '../src/host/index.js'
import { foldCalls } from '../src/host/usage.js'
import { fakeContext } from './fake-ctx.js'

const header = (provider, model) => ({ type: 'request/header', data: { header: { config: { provider, model } }, reason: 'change' } })
const message = (turn, step, usage, time = 0) => ({ type: 'assistant/message', time, data: { turn, step, message: { role: 'assistant', content: [] }, stream: [], usage } })
const streamed = (type, turn, step, usage, time = 0) => ({ type, time, data: { turn, step, stream: [{ type: 'chunk', chunk: { type: 'usage', usage } }] } })
const usage = (inputTokens, outputTokens, cacheReadTokens = 0) => ({ inputTokens, outputTokens, cacheReadTokens })
const tokens = row => [row.model, row.input, row.cacheRead, row.output]

test('each billed attempt is one row, on the model its request named', () => {
  const { rows, state } = foldCalls([
    header('deepseek', 'v4-flash'),
    streamed('assistant/attempt', 1, 0, usage(10, 0)),
    { type: 'llm/retry-started', data: { turn: 1, step: 0 } },
    message(1, 0, usage(20, 3, 5)),
    streamed('assistant/message', 1, 1, usage(30, 1)),
    message(1, 1, usage(30, 4, 2)),
    header('deepseek', 'v4-pro'),
    streamed('assistant/message', 2, 0, usage(7, 7)),
    message(2, 1, undefined),
  ])
  assert.deepEqual(rows.map(tokens), [['v4-flash', 10, 0, 0], ['v4-flash', 20, 5, 3], ['v4-flash', 30, 2, 4], ['v4-pro', 7, 0, 7]])
  assert.deepEqual(state, { provider: 'deepseek', model: 'v4-pro', retry: { turn: 1, step: 0, count: 1 } })
})

const HOUR = 3_600_000
const LONG_AGO = 1_000

function start(home) {
  home ??= mkdtempSync(join(tmpdir(), 'ds-usage-'))
  const logs = {
    'b1': [header('deepseek', 'v4-flash'), message(1, 0, usage(100, 10, 50), 0)],
    's-b1': [header('deepseek', 'v4-flash'), message(1, 0, usage(200, 20), HOUR)],
    's-x': [header('kimi', 'k3'), message(1, 0, usage(40, 4), 2 * HOUR)],
  }
  for (const log of Object.values(logs)) log.forEach((event, seq) => { event.seq = seq })
  const pages = []
  const ctx = fakeContext()
  ctx.logger.warn = (template, ...args) => { if (!String(template).includes('%s')) console.error(template, ...args) }
  ctx.sessionController = {
    list: async () => ({ items: [
      { sessionId: 'b1', projections: { kind: 'cached', asOfSeq: 1, values: {} } },
      { sessionId: 's-b1', projections: { kind: 'cached', asOfSeq: 1, values: {} } },
      { sessionId: 's-x', projections: { kind: 'cached', asOfSeq: 1, values: {} } },
    ] }),
    projections: async ({ sessionId }) => (logs[sessionId] ? { asOfSeq: logs[sessionId].length - 1, values: {} } : null),
    page: async ({ address, throughSeq, beforeSeq }) => {
      const sessionId = address.kind === 'session' ? address.sessionId : address.childSessionId
      if (logs[sessionId] === undefined) throw new Error(`no log for ${sessionId}`)
      pages.push(sessionId)
      const events = logs[sessionId].filter(event => event.seq <= throughSeq && (beforeSeq === undefined || event.seq < beforeSeq))
      return { records: events.map(event => ({ event })), hasMore: false }
    },
  }
  let route
  ctx.connection.fetch.register = (options) => { route = options; return () => {} }
  apply(ctx, { home })
  const call = async (endpoint, payload) => {
    const response = await route.fetch(new Request('http://localhost/api/usage', { method: 'POST', body: JSON.stringify({ endpoint, payload }) }))
    return response.json()
  }
  const stop = async () => {
    await ctx.dispose()
    rmSync(home, { recursive: true, force: true, maxRetries: 5 })
  }
  return { call, ctx, home, pages, stop }
}

const totals = (view) => {
  const sums = {}
  for (const [, owner, , kind, input, cacheRead, cacheWrite, output] of view.rows) {
    const name = view.owners[owner].name ?? view.owners[owner].key
    const key = `${name}/${view.kinds[kind]}`
    sums[key] = (sums[key] ?? 0) + input + cacheRead + cacheWrite + output
  }
  return sums
}

test('the usage view counts every Session under its owner', async (t) => {
  const { call, stop } = start()
  t.after(stop)
  const view = (await call('usage', { timeZone: 'Asia/Shanghai' })).value
  assert.deepEqual(totals(view), { 'other/chat': 160 + 220 + 44 })
  assert.equal(view.scanning, false)
})

test('no state.json is read; nothing outside the ledger home is touched', async (t) => {
  const { call, home, stop } = start()
  t.after(stop)
  // Every Session folds into the plain 'other' owner: no team state anywhere.
  const view = (await call('usage', { timeZone: 'Asia/Shanghai' })).value
  assert.deepEqual(view.owners.map(owner => owner.kind), ['other'])
  // And the data lives under the plugin's own home only.
  const files = readdirSync(home)
  assert.equal(files.includes('state.json'), false)
  assert.equal(files.includes('state.lock'), false)
  assert.equal(files.includes('usage.sqlite'), true)
})



async function drain(stream) {
  const chunks = []
  for await (const chunk of stream) chunks.push(chunk)
  return chunks
}

test('a call outside every log is metered, once', async (t) => {
  const { call, ctx, stop } = start()
  t.after(stop)
  const meter = ctx.listeners.get('llm/stream').at(-1)
  const chunk = { type: 'usage', usage: usage(1000, 100) }
  await drain(meter({ sessionId: 's-b1', purpose: 'compaction', provider: 'deepseek', model: 'v4-flash', messages: [] }, async function* () { yield chunk }))
  await drain(meter({ sessionId: 's-b1', purpose: 'compaction', provider: 'deepseek', model: 'v4-flash', messages: [] }, async function* () { yield chunk }))
  // The ledger opens behind the meter; give it a moment before reading.
  await new Promise(resolve => setTimeout(resolve, 300))
  const view = (await call('usage', { timeZone: 'Asia/Shanghai' })).value
  assert.equal(totals(view)['other/compaction'], 1100)
})
