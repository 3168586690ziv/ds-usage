// The usage window: the usage page framed in its own dialog.
import { Component, createElement as h, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { UsagePage } from './usage-page.js'
import { CloseIcon, ChevronLeftIcon, GaugeIcon } from './icons.js'
import { useEscape } from './overlay-hooks.js'
import { t } from './i18n.js'

// A page crash shows as a readable line inside the dialog, never a silent blank.
class PageBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    const { error } = this.state
    if (error) return h('div', { className: 'btu-error', role: 'alert' }, String(error?.message ?? error))
    return this.props.children
  }
}

// How long a closing dialog stays for its exit animation.
const DIALOG_EXIT_MS = 160

const focusOf = id => (typeof id !== 'string' ? null
  : id.startsWith('model:') ? { kind: 'model', key: id.slice('model:'.length) }
  : null)

const focusLabel = face => face.key

export function UsageDialog({ focusId, actions, leaving = false }) {
  const close = useCallback(() => actions.closeUsage(), [actions])
  useEscape(close)
  const face = focusOf(focusId)
  const label = face ? focusLabel(face) : t('Usage overview')
  const root = useRef(null)
  useEffect(() => { root.current?.querySelector('.btu-scroll')?.scrollTo?.({ top: 0 }) }, [focusId])
  return h('div', { className: 'btu-layer', 'data-leaving': leaving || undefined },
    h('div', { className: 'btu-scrim', onMouseDown: close }),
    h('div', { ref: root, className: 'btu-dialog', role: 'dialog', 'aria-modal': true, 'aria-label': t('Usage overview') },
      h('div', { className: 'btu-head' },
        face ? h('button', { type: 'button', className: 'bt-icon-btn', 'aria-label': t('All usage'), title: t('All usage'), onClick: () => actions.openUsage() }, h(ChevronLeftIcon)) : null,
        h('h2', { key: focusId ?? 'all' }, label)),
      h('div', { className: 'btu-scroll' },
        h(PageBoundary, null, h(UsagePage, { actions, focusId }))),
      h('button', { type: 'button', className: 'btu-close', 'aria-label': t('Close'), onClick: close }, h(CloseIcon))))
}

// Mounted once in the shell.overlay list; the portal keeps the dialog on top.
export function UsageOverlay({ useUi, actions }) {
  const ui = useUi(value => value)
  const open = ui.usage ? { focusId: ui.usage.focusId ?? null } : null
  // A closing layer lingers for its exit animation, as overlays.js did.
  const [kept, setKept] = useState(open)
  useEffect(() => {
    if (open) { setKept(open); return undefined }
    const timer = setTimeout(() => setKept(null), DIALOG_EXIT_MS)
    return () => clearTimeout(timer)
  }, [ui.usage])
  const shown = open ?? kept
  return h('span', { style: { display: 'contents' } },
    shown ? createPortal(h(UsageDialog, { focusId: shown.focusId, actions, leaving: open === null }), document.body) : null)
}

// The sidebar footer entry that opens the window.
export function UsageFooterButton({ actions }) {
  return h('button', { type: 'button', className: 'btu-open', onClick: () => actions.openUsage(), 'aria-label': t('Usage'), title: t('Usage') },
    h(GaugeIcon), h('span', null, t('Usage')))
}
