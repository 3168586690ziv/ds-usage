// DS Usage host: an independent usage ledger for DeepSeek Harness.
//
// The ledger (src/host/usage.js) scans
// Session logs, meters the calls outside every log, and keeps its own
// usage.sqlite under $DSH_HOME/ds-usage. Sessions are counted from the Session
// logs alone; with no team state, every Session reads as its own owner, which the
// model-oriented page does not show.
import { homedir } from 'node:os'
import { join } from 'node:path'
import { install as installUsage } from './usage.js'

const ROUTE = '/api/usage'

const dshHomeOf = value => {
  const home = typeof value === 'string' && value.trim() !== '' ? value : join(homedir(), '.dsh')
  return home.startsWith('~/') ? join(homedir(), home.slice(2)) : home
}

export const name = 'ds-usage'
export const inject = ['llm', 'sessionController', 'connection']

// A warn that needs no ctx: to stderr, so a boot-time failure is never silent.
const warn = (template, ...args) => {
  let at = 0
  const line = template.replace(/%[sdijoO]/g, () => (at < args.length ? String(args[at++]) : ''))
  try { ctxRef?.logger?.warn?.('%s', line) } catch { /* no logger */ }
  console.error(`[ds-usage] ${line}`)
}
let ctxRef = null

export function apply(ctx, config = {}) {
  ctxRef = ctx
  const dshHome = dshHomeOf(process.env.DSH_HOME)
  // This plugin's own data: $DSH_HOME/ds-usage.
  const home = config.home ?? join(dshHome, 'ds-usage')

  const rt = {
    ctx,
    config,
    dshHome,
    home,
    // No team state: the ledger scans Session logs only. `state` stays the
    // empty team, so liveOwners() maps every Session to the plain 'other'
    // owner, which the model-oriented page never displays.
    state: { version: 1, mainBotIds: [], bots: {}, rooms: {}, agents: {}, revision: 0 },
    warn,
  }
  rt.load = async () => undefined
  rt.refresh = rt.load

  // The model catalog, from DSH's own llm service, as models.js served it.
  let catalogCache = { at: 0, value: [] }
  rt.catalog = async ({ fresh = false } = {}) => {
    const TTL = 60_000
    if (!fresh && Date.now() - catalogCache.at < TTL && catalogCache.value.length > 0) return catalogCache.value
    const entries = []
    for (const provider of ctx.llm.listProviders()) {
      let models = []
      try { models = await ctx.llm.listModels(provider.id) } catch { continue }
      for (const model of models) {
        entries.push({
          ref: `${provider.id}/${model.id}`,
          provider: provider.id,
          providerName: provider.name ?? provider.id,
          id: model.id,
          name: model.name ?? model.id,
          ...(model.inputModalities ? { input: [...model.inputModalities] } : {}),
        })
      }
    }
    catalogCache = { at: Date.now(), value: entries }
    return entries
  }
  rt.cachedCatalog = () => catalogCache.value

  // The team lookups the ledger and its view call.
  rt.botOf = id => (id === undefined ? undefined : rt.state.bots[id])
  rt.roomOf = id => (id === undefined ? undefined : rt.state.rooms[id])
  rt.chatOf = botId => rt.botOf(botId)?.sessionId ?? botId

  // The usage ledger itself, whole.
  rt.peerLedgerLive = () => false
  installUsage(rt)

  const ok = value => ({ ok: true, value })
  const fail = (message, code = 'usage/error') => ({ ok: false, error: { code, message } })

  const handle = async (endpoint, payload) => {
    try {
      if (endpoint !== 'usage') return fail(`Unknown endpoint ${endpoint}`, 'usage/not-found')
      return ok(await rt.usageView({ timeZone: typeof (payload ?? {}).timeZone === 'string' ? payload.timeZone.slice(0, 64) : undefined }))
    } catch (error) {
      return fail(error?.message ?? String(error), 'usage/internal')
    }
  }

  // An exact Fetch route on the shared /api channel.
  ctx.effect(() => ctx.connection.fetch.register({
    path: ROUTE,
    methods: ['POST'],
    requestBody: 'buffered',
    fetch: async (request) => {
      let body
      try { body = await request.json() } catch { body = {} }
      const result = await handle(String(body?.endpoint ?? ''), body?.payload)
      return new Response(JSON.stringify(result), { status: 200, headers: { 'content-type': 'application/json' } })
    },
  }), 'ds-usage: api route')

}
