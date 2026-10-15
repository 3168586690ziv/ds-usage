// The usage i18n: keys are the English text, `zh` maps them — the same copy in
// both languages, so the page reads naturally either way.
export const NAMESPACE = 'ds-usage'

const ZH = {
  // Shared
  Settings: '设置',
  Conversations: '对话',
  'Group chats': '群聊',
  'Active on 1 day in the last year': '近一年有 1 天在用',
  'Active on {count} days in the last year': '近一年有 {count} 天在用',
  Usage: '用量',
  Cancel: '取消',
  Close: '关闭',
  'DS Usage': '用量',
  'Usage overview': '用量总览',
  'Open the usage window': '打开用量窗口',

  // Owner faces
  Other: '其他',
  'Compaction and handoff': '压缩与交接',
  'Image reading': '识图',
  Titles: '标题',
  Memory: '记忆',

  // Time and usage
  'Last {range}': '最近 {range}',
  tokens: 'Token',
  'Compared with the {range} before': '与再往前 {range} 相比',
  '{share}% of all usage in the last {range}': '占最近 {range}全部用量的 {share}%',
  Calls: '调用次数',
  'Cache hit rate': '缓存命中率',
  'Tokens over time': 'Token 走势',
  '{count} tokens': '{count} Token',
  '{tokens} tokens · {calls} calls': '{tokens} Token · {calls} 次调用',
  Light: '少',
  Heavy: '多',
  'Unknown model': '未知模型',
  'More models': '其余模型',
  'Reading your chats…': '正在读取聊天记录…',
  'No usage yet.': '还没有用量。',
  'Token usage shows up here after a model is called.': '调用模型之后，这里会显示 Token 用量。',
  'Nothing in this range.': '这段时间没有用量。',
  'What for': '用途',
  Activity: '活跃度',
  'Time range': '时间范围',
  'All usage': '全部用量',
  'By model': '按模型',
  'Still reading older chats; totals may grow.': '还在读取较早的聊天记录，数字可能还会变大。',
  Custom: '自定义',
  'Custom range': '自定义时间范围',
  'This month': '本月',
  'Last month': '上个月',
  'This year': '今年',
  'Previous month': '往前一个月',
  'Next month': '往后一个月',
  'Pick the first day': '选择开始日期',
  'Pick the last day': '选择结束日期',
  '1 day': '1 天',
  '{count} days': '{count} 天',
  'Compared with the day before': '与前一天相比',
  'Compared with the {count} days before': '与再往前 {count} 天相比',
  '{share}% of all usage from {span}': '占 {span} 全部用量的 {share}%',
  '24 hours': '24 小时',
  '7 days': '7 天',
  '30 days': '30 天',
  '12 weeks': '12 周',
  '12 months': '12 个月',
  'Per hour': '每小时',
  'Per day': '每天',
  'Per week': '每周',
  'Per month': '每月',
  Output: '输出',
  Input: '输入',
  'Cache hit': '缓存命中',
  Models: '模型',
  Bots: 'Bot',
}

const fill = (text, params) => (params
  ? text.replace(/\{(\w+)\}/g, (match, name) => (name in params ? String(params[name]) : match))
  : text)

let service = null
let bound = null
let forced = null

// `forced` pins this window's language, ignoring the app's own setting.
export function installForcedLanguage(id) {
  forced = (id === 'zh' || id === 'en') ? id : null
}

// `locale` is the DSH locale service; without one, copy stays English.
export function installLocale(locale) {
  if (!locale || typeof locale.register !== 'function' || typeof locale.bind !== 'function') return () => {}
  service = locale
  bound = locale.bind(NAMESPACE)
  // The service accepts both register(ns, 'zh', dict) and register(ns, { zh }).
  let off
  try {
    off = locale.register(NAMESPACE, 'zh', ZH)
  } catch {
    try { off = locale.register(NAMESPACE, { zh: ZH }) } catch { /* already registered */ }
  }
  return () => {
    if (service === locale) { service = null; bound = null }
    if (typeof off === 'function') {
      try { off() } catch { /* already disposed */ }
    }
  }
}

export function t(key, params) {
  if (forced === 'zh') return fill(ZH[key] ?? key, params)
  if (forced === 'en') return fill(key, params)
  return bound ? bound(key, params) : fill(key, params)
}

export const hostText = message => message

export const language = () => {
  if (forced) return forced
  const active = service?.getLocale?.().active
  return typeof active === 'string' ? active : 'en'
}

export const dateLocale = () => (language().startsWith('zh') ? 'zh-CN' : 'en-US')

export const DICTIONARY = { zh: ZH }
