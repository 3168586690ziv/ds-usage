// DS Usage client entry: installs the styles, the sidebar footer button, and the
// overlay that hosts the usage window.
import markCss from './mark.css'
import { usageApi } from './api.js'
import { createSource } from './sources.js'
import { BASE_CSS, DIALOG_CSS } from './base-styles.js'
import { USAGE_CSS } from './usage-page.js'
import { UsageOverlay, UsageFooterButton } from './usage-dialog.js'
import { installForcedLanguage, installLocale } from './i18n.js'

// `locale` stays out of inject: this client activates after dsh-client-locale
// provides the service, so ctx.get('locale') resolves at apply time.
// The default pins Chinese: the user's window reads Chinese even where the app's
// own language stays English. Set `language` in the host config to override, or
// `auto` to follow the app.
export const inject = ['slots']

const MARK_CSS = markCss
const FOOTER_CSS = `
.btu-open{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px;border:0;border-radius:999px;background:none;color:var(--bt-ink-2);font:inherit;font-size:13px;line-height:20px;cursor:pointer;transition:background-color .12s ease,color .12s ease}
.btu-open:hover{background:var(--bt-hover);color:var(--bt-ink)}
.btu-open svg{flex:none}
`

export function apply(ctx, config) {
  // The copy rides DSH's own locale service. A service not yet present (or absent
  // in a bare shell) leaves the standing copy below.
  let locale
  try { locale = ctx.get('locale') } catch { locale = undefined }
  ctx.effect(() => installLocale(locale), 'ds-usage: interface copy')
  // Language: `zh` (default) or `en` pins this window's copy; `auto` follows the
  // app's own language setting. localStorage['ds-usage.language'] overrides.
  let wanted = 'zh'
  try {
    wanted = String(localStorage.getItem('ds-usage.language') ?? config?.language ?? 'zh').trim().toLowerCase()
  } catch { /* no localStorage */ }
  installForcedLanguage(wanted === 'auto' ? null : wanted)

  const ui = createSource({ usage: null })

  const actions = {
    usage: () => usageApi.usage(),
    openUsage: (focusId = null) => ui.set(state => ({ ...state, usage: { focusId } })),
    closeUsage: () => ui.set(state => (state.usage ? { ...state, usage: null } : state)),
  }

  const installStyles = () => {
    const sheet = document.createElement('style')
    sheet.dataset.dsUsage = 'base'
    sheet.textContent = BASE_CSS + MARK_CSS
    document.head.appendChild(sheet)
    const usageSheet = document.createElement('style')
    usageSheet.dataset.dsUsage = 'page'
    usageSheet.textContent = USAGE_CSS + DIALOG_CSS + FOOTER_CSS
    document.head.appendChild(usageSheet)
    return () => { sheet.remove(); usageSheet.remove() }
  }
  ctx.effect(() => installStyles(), 'ds-usage: styles')

  // The footer button and the dialog, injected through `face`: its `hooks`
  // become useUi props, `actions` arrives as a plain prop.
  const face = () => ({ actions, hooks: { ui } })
  const shadow = (name, options, component) => ctx.slots.inject(name, () => ctx.slots.register({ name, ...options, inject: face }, component))

  ctx.effect(() => [
    // The footer button beside the sidebar's own actions.
    shadow('sidebar.footer.action', { id: 'ds-usage', order: -50 }, UsageFooterButton),
    // The dialog itself, above the app.
    shadow('shell.overlay', { id: 'ds-usage', order: 70 }, UsageOverlay),
  ], 'ds-usage: slots')
}
