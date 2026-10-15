// Base styles for the extracted usage window: the shell variables the page's
// CSS needs (the inks the model colors paint from), plus the shared dialog
// chrome (scrim, wide dialog, close button, error line).
import { INKS } from './inks.js'

export const BASE_CSS = `
body{--bt-ink:#141414;--bt-ink-2:rgba(20,20,20,.6);--bt-ink-3:rgba(20,20,20,.36);--bt-sidebar:#f7f7f7;--bt-main:#fcfcfc;--bt-line:rgba(20,20,20,.08);--bt-line-2:rgba(20,20,20,.15);--bt-hover:rgba(119,119,119,.09);--bt-active:rgba(119,119,119,.17);--bt-card:#ffffff;--bt-accent:#4d6bfe;--bt-green:#00c972;--bt-star:#ff9800;--bt-tag-bg:rgba(20,20,20,.06)}
body[data-ds-dark-theme]{--bt-ink:#f2f2f2;--bt-ink-2:rgba(242,242,242,.6);--bt-ink-3:rgba(242,242,242,.36);--bt-sidebar:#1b1b1b;--bt-main:#141414;--bt-line:rgba(255,255,255,.08);--bt-line-2:rgba(255,255,255,.15);--bt-hover:rgba(160,160,160,.12);--bt-active:rgba(160,160,160,.2);--bt-card:#1f1f1f;--bt-tag-bg:rgba(255,255,255,.09)}
${Object.entries(INKS).map(([name, [light]]) => `body{--bt-ink-${name}:${light}}`).join('')}
${Object.entries(INKS).map(([name, [, dark]]) => `body[data-ds-dark-theme]{--bt-ink-${name}:${dark}}`).join('')}
`

export const DIALOG_CSS = `
@keyframes bt-fade{from{opacity:0}to{opacity:1}}
@keyframes bt-us-dialog-rise{from{transform:translateY(12px) scale(.96)}}
@keyframes bt-us-dialog-sink{to{opacity:0;transform:translateY(6px) scale(.975);filter:blur(3px)}}
@keyframes bt-veil-in{from{opacity:0;filter:blur(6px)}}
.btu-layer{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}
.btu-layer[data-leaving]{pointer-events:none}
.btu-layer[data-leaving] .btu-scrim{opacity:0;transition:opacity .16s ease-in}
.btu-layer[data-leaving]>.btu-dialog{animation:bt-us-dialog-sink .16s cubic-bezier(.4,0,1,1) forwards}
.btu-scrim{position:absolute;inset:0;background:rgba(0,0,0,.32);animation:bt-fade .22s ease-out}
body[data-ds-dark-theme] .btu-scrim{background:rgba(0,0,0,.5)}
.btu-dialog{--bt-us-w:min(1100px,calc(100vw - 48px));--bt-us-h:min(780px,calc(100vh - 2*max(32px,var(--dsh-frame-overlay-top,32px))));position:relative;width:var(--bt-us-w);height:var(--bt-us-h);background:var(--bt-main);border-radius:16px;border:.5px solid var(--bt-line-2);box-shadow:0 24px 80px rgba(0,0,0,.24);display:flex;flex-direction:column;overflow:hidden;color:var(--bt-ink);animation:bt-us-dialog-rise .45s cubic-bezier(.22,1,.36,1),bt-veil-in .2s ease-out}
@media (prefers-reduced-motion:reduce){.btu-dialog,.btu-scrim{animation:bt-fade .12s ease-out!important}}
.btu-head{display:flex;align-items:center;gap:6px;flex:none;padding:16px 56px 4px 20px}
.btu-head h2{margin:0;font-size:15px;line-height:24px;font-weight:600;animation:bt-veil-in .2s ease-out}
.btu-head .bt-icon-btn{animation:bt-veil-in .16s ease-out}
.btu-close{position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:50%;border:0;background:var(--bt-hover);color:var(--bt-ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}
.btu-close:hover{background:var(--bt-active);color:var(--bt-ink)}
.btu-scroll{flex:1;overflow-y:auto;padding:12px 20px 24px;display:flex;flex-direction:column;gap:20px;scrollbar-width:thin}
.btu-error{padding:0 14px 10px;color:#e02135;font-size:12px}
`
