// Generated from src/client by `npm run build` (scripts/build-client.mjs). Do not edit by hand.
window.__ModuleLoader__.load({
  id: 'ds-usage',
  factory: (require) => {
const module = { exports: {} }
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.js
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// src/client/mark.css
var mark_default = `.bt-mark{display:inline-block;flex:none;position:relative;line-height:0}
.bt-mark svg{width:100%;height:100%;overflow:visible}
.bt-mark-img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;box-shadow:inset 0 0 0 1px var(--bt-line)}
.bt-mark .bt-b,.bt-mark .bt-eye,.bt-mark .bt-eyes,.bt-mark .bt-gaze{transform-box:fill-box}
.bt-mark .bt-b{transform-origin:50% 100%}
.bt-mark .bt-eye,.bt-mark .bt-eyes{transform-origin:center}
/* Motion levels (Settings → Bots → Animation) set body[data-bt-motion]: quiet moves a
   mark only for its state; normal, the default, adds petting, pokes and eyes that follow
   the pointer; lively adds blinks and fidgets at rest and a question riding on the head. */
body[data-bt-motion=lively] .bt-mark[data-live]:is([data-state=idle],[data-state=alert]) .bt-eye{animation:bt-blink-idle 5s linear infinite;animation-delay:var(--bt-delay,0s)}
body[data-bt-motion=lively] .bt-mark[data-live][data-state=idle]:is([data-fidget=hop],[data-fidget=sway],[data-fidget=stretch]) :is(.bt-b,.bt-mark-img){animation:var(--bt-fidget) 9s ease-in-out var(--bt-fidget-delay,0s) infinite}
body[data-bt-motion=lively] .bt-mark[data-live][data-state=idle][data-fidget=hop]{--bt-fidget:bt-fidget-hop}
body[data-bt-motion=lively] .bt-mark[data-live][data-state=idle][data-fidget=sway]{--bt-fidget:bt-fidget-sway}
body[data-bt-motion=lively] .bt-mark[data-live][data-state=idle][data-fidget=stretch]{--bt-fidget:bt-fidget-stretch}
body[data-bt-motion=lively] .bt-mark[data-live][data-state=idle][data-fidget=look] .bt-eyes{animation:bt-fidget-look 9s ease-in-out var(--bt-fidget-delay,0s) infinite}
@keyframes bt-fidget-hop{0%,8%,100%{transform:none}3%{transform:translateY(-10%) scale(.97,1.04)}5.5%{transform:translateY(0) scale(1.05,.95)}}
@keyframes bt-fidget-sway{0%,10%,100%{transform:none}2.5%{transform:rotate(-8deg)}5%{transform:rotate(7deg)}7.5%{transform:rotate(-3deg)}}
@keyframes bt-fidget-stretch{0%,9%,100%{transform:none}4%{transform:scale(.94,1.08)}7%{transform:scale(1.03,.97)}}
@keyframes bt-fidget-look{0%,22%,100%{transform:none}3%,9%{transform:translateX(-14%)}12%,19%{transform:translateX(14%)}}
body[data-bt-motion=lively] .bt-badge-alert{right:auto;bottom:auto;left:50%;top:calc(var(--bt-size,36px) * -.14);translate:-50% 0;animation:bt-q-ride 1.3s cubic-bezier(.3,.7,.4,1) infinite}
body[data-bt-motion=lively] :is(.bt-row,.bt-tile)>.bt-mark:hover .bt-badge-alert{animation:none}
@keyframes bt-q-ride{0%,55%,100%{transform:translateY(0)}20%{transform:translateY(calc(var(--bt-size,36px) * -.14))}40%{transform:translateY(0)}}
/* Petting: with the pointer on a sidebar avatar or just around it (a ring a fifth of its
   size wide), a resting mark leans into the pointer and keeps nuzzling it, its eyes
   closed in a happy arc, and springs back when the pointer leaves. */
:is(.bt-row,.bt-tile)>:is(.bt-mark,.bt-cluster)::before{content:'';position:absolute;inset:-20%;border-radius:50%}
.bt-mark[data-live] .bt-b,.bt-mark[data-live] .bt-mark-img{transition:rotate .5s cubic-bezier(.34,1.56,.64,1),translate .5s cubic-bezier(.34,1.56,.64,1),scale .3s ease-out}
.bt-mark[data-live] .bt-eye{transition:scale .14s ease-in}
.bt-mark[data-live] .bt-eye-happy{transition:opacity .12s ease-out}
body:not([data-bt-motion=quiet]) :is(.bt-row,.bt-tile)>:is(.bt-mark,.bt-cluster):hover .bt-mark[data-live]:is([data-state=idle],[data-state=alert]):not(.bt-mark-poke) :is(.bt-b,.bt-mark-img){rotate:8deg;translate:5% -1%;animation:bt-nuzzle .78s ease-in-out .32s infinite}
body:not([data-bt-motion=quiet]) :is(.bt-row,.bt-tile)>:is(.bt-mark,.bt-cluster):hover .bt-mark[data-live]:is([data-state=idle],[data-state=alert]) .bt-eye{scale:1 0;animation:none}
body:not([data-bt-motion=quiet]) :is(.bt-row,.bt-tile)>:is(.bt-mark,.bt-cluster):hover .bt-mark[data-live]:is([data-state=idle],[data-state=alert]) .bt-eye-happy{opacity:1;transition-delay:.1s}
@keyframes bt-nuzzle{50%{rotate:14deg;translate:8% -3%;scale:1.03 .97}}
.bt-mark[data-gaze] .bt-b{translate:calc(var(--bt-gx,0) * 5%) calc(var(--bt-gy,0) * 4%);transition:translate .18s ease-out}
.bt-mark[data-gaze] .bt-gaze{transform:translate(calc(var(--bt-gx,0) * 12%),calc(var(--bt-gy,0) * 11%));transition:transform .18s ease-out}
body[data-bt-motion=quiet] .bt-mark[data-gaze] .bt-b{translate:none}
body[data-bt-motion=quiet] .bt-mark[data-gaze] .bt-gaze{transform:none}
.bt-mark[data-state=thinking] .bt-b{animation:bt-ponder 2.2s ease-in-out infinite}
.bt-mark[data-state=thinking] .bt-eyes{animation:bt-squint 2.2s ease-in-out infinite}
.bt-mark[data-state=searching] .bt-b{animation:bt-seek 1s ease-in-out infinite}
.bt-mark[data-state=searching] .bt-eyes{animation:bt-scan 1.6s ease-in-out infinite}
.bt-mark[data-state=working] .bt-b{animation:bt-bob 1.6s ease-in-out infinite}
.bt-mark[data-state=working]:is([data-shape=star],[data-shape=hex],[data-shape=plus],[data-shape=gem],[data-shape=magnet],[data-shape=ring]) .bt-b{animation:bt-wiggle 1.4s ease-in-out infinite;transform-origin:50% 50%}
.bt-mark[data-state=working]:is([data-shape=gumdrop],[data-shape=peanut],[data-shape=cushion],[data-shape=squircle],[data-shape=moon],[data-shape=wave]) .bt-b{animation:bt-squash 1.2s ease-in-out infinite}
.bt-mark[data-state=working] .bt-eye{animation:bt-blink 2.4s ease-in-out infinite}
.bt-mark[data-state=sending] .bt-b{animation:bt-dash 1.1s cubic-bezier(.4,0,.2,1) infinite}
.bt-mark[data-state=orbit] .bt-b{animation:bt-sway 2.6s ease-in-out infinite;transform-origin:50% 50%}
.bt-mark[data-state=orbit] .bt-eyes{animation:bt-roll 2.6s linear infinite}
/* A question for you hops twice when it arrives and the badge keeps it in view after;
   a lively mark keeps hopping. */
.bt-mark[data-state=alert] .bt-b{animation:bt-hop 1.3s cubic-bezier(.3,.7,.4,1) 2}
.bt-mark[data-shape=image]:not([data-state=idle]) .bt-mark-img{animation:bt-bob 1.6s ease-in-out infinite}
.bt-mark[data-shape=image][data-state=alert] .bt-mark-img{animation:bt-hop 1.3s cubic-bezier(.3,.7,.4,1) 2}
body[data-bt-motion=lively] .bt-mark[data-state=alert] :is(.bt-b,.bt-mark-img){animation-iteration-count:infinite}
.bt-mark[data-state=done] .bt-b{animation:bt-done 1.8s linear 1}
.bt-mark[data-shape=image][data-state=done] .bt-mark-img{animation:bt-done 1.8s linear 1;transform-origin:50% 100%}
@keyframes bt-done{0%{transform:none;animation-timing-function:cubic-bezier(.4,0,.2,1)}13.3%{transform:scale(1.12,.88);animation-timing-function:cubic-bezier(.4,0,.2,1)}25.6%{transform:scale(.93,1.09);animation-timing-function:cubic-bezier(.4,0,.2,1)}37.8%{transform:scale(1.04,.97);animation-timing-function:cubic-bezier(.4,0,.2,1)}51.1%,100%{transform:none}}
.bt-mark-poke .bt-b{animation:bt-poke .8s cubic-bezier(.3,.7,.4,1) 1!important;transform-origin:50% 60%!important}
.bt-mark-poke .bt-mark-img{animation:bt-poke-img .6s ease-out 1!important}
.bt-mark[data-poke]{cursor:pointer}
body[data-bt-motion=quiet] .bt-mark-poke :is(.bt-b,.bt-mark-img){animation:none!important}
body[data-bt-motion=quiet] .bt-mark[data-poke]{cursor:default}
@keyframes bt-bob{0%,100%{transform:translateY(0) rotate(0)}30%{transform:translateY(-4%) rotate(-5deg)}65%{transform:translateY(0) rotate(4deg)}}
@keyframes bt-wiggle{0%,100%{transform:rotate(0) scale(1)}25%{transform:rotate(-12deg) scale(1.04)}75%{transform:rotate(12deg) scale(1.04)}}
@keyframes bt-squash{0%,100%{transform:scale(1,1)}30%{transform:scale(1.08,.9)}55%{transform:translateY(-4%) scale(.94,1.08)}80%{transform:scale(1.02,.98)}}
@keyframes bt-ponder{0%,100%{transform:translateY(0) rotate(4deg)}50%{transform:translateY(-3%) rotate(7deg)}}
@keyframes bt-squint{0%,100%{transform:translate(0,-4%) scaleY(.7)}50%{transform:translate(5%,-5%) scaleY(.78)}}
@keyframes bt-seek{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-5%) rotate(-1deg)}}
@keyframes bt-scan{0%,100%{transform:translateX(-12%)}50%{transform:translateX(12%)}}
@keyframes bt-dash{0%,100%{transform:translateX(0) rotate(0)}35%{transform:translateX(9%) rotate(7deg)}55%{transform:translateX(-2%) rotate(-3deg)}}
@keyframes bt-sway{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}
@keyframes bt-roll{0%,100%{transform:translate(12%,0)}25%{transform:translate(0,9%)}50%{transform:translate(-12%,0)}75%{transform:translate(0,-9%)}}
@keyframes bt-hop{0%,55%,100%{transform:translateY(0) scale(1,1)}20%{transform:translateY(-14%) scale(.96,1.05)}40%{transform:translateY(0) scale(1.06,.94)}}
@keyframes bt-poke{0%{transform:none}55%{transform:translateY(-16%) rotate(360deg)}78%{transform:translateY(0) scale(1.08,.92) rotate(360deg)}100%{transform:rotate(360deg)}}
@keyframes bt-poke-img{0%,100%{transform:scale(1)}40%{transform:scale(1.14) rotate(-6deg)}}
/* Idle clip: two .26s blinks (lid to 3%, then a 6% overshoot) at 1.48s and 3.46s. */
@keyframes bt-blink-idle{0%,29.6%,35%,69.2%,74.6%,100%{transform:scaleY(1)}32.2%,71.8%{transform:scaleY(.03)}33.8%,73.4%{transform:scaleY(1.06)}}
@keyframes bt-blink{0%,42%,50%,100%{transform:scaleY(1)}46%{transform:scaleY(.03)}48%{transform:scaleY(1.06)}}
@media (prefers-reduced-motion:reduce){.bt-mark *{animation:none!important;transition:none!important}}
.bt-badge{position:absolute;right:0;bottom:0;width:12px;height:12px;border-radius:50%;corner-shape:round;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 1.5px var(--bt-sidebar)}
.bt-badge-admin{background:color-mix(in srgb,var(--bt-star) 82%,var(--bt-sidebar))}
.bt-badge-admin svg{width:7px;height:7px}
.bt-badge-main{right:calc(var(--bt-size,36px) * -.07);bottom:calc(var(--bt-size,36px) * -.07);width:clamp(14px,calc(var(--bt-size,36px) * .36),22px);height:clamp(14px,calc(var(--bt-size,36px) * .36),22px);border-radius:0;box-shadow:none}
.bt-badge-main svg{width:100%;height:100%;overflow:visible}
.bt-badge-main path{fill:var(--bt-star);stroke:var(--bt-sidebar);stroke-width:2.6;stroke-linejoin:round;paint-order:stroke}
.bt-badge-alert{background:color-mix(in srgb,var(--bt-accent) 78%,var(--bt-sidebar));color:var(--bt-accent-ink,#fff);font-size:8.5px;line-height:12px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}
.bt-badge-working{background:color-mix(in srgb,var(--bt-green) 82%,var(--bt-sidebar));width:8px;height:8px;right:1px;bottom:1px}
.bt-cluster{position:relative;display:inline-block;flex:none;line-height:0}
.bt-cluster>*{position:absolute}
.bt-cluster-more,.bt-cluster-you{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:var(--bt-active);color:var(--bt-ink-3);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;font-weight:500;line-height:1;font-variant-numeric:tabular-nums}
.bt-cluster-you{background:color-mix(in srgb,var(--bt-ink) 12%,transparent)}
.bt-stack{display:inline-flex;align-items:center;flex:none;line-height:0}
.bt-stack>*+*{margin-left:calc(var(--bt-stack-size) * -.3)}
.bt-stack-more{font-size:11px;line-height:16px;color:var(--bt-ink-3);margin-left:3px!important}
.bt-icon-btn{width:28px;height:28px;border-radius:50%;border:0;background:none;color:var(--bt-ink-2);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:0}
.bt-icon-btn:hover{background:var(--bt-hover);color:var(--bt-ink)}
.bt-thumb{position:absolute;left:0;top:0;z-index:0;pointer-events:none;transition:opacity .14s ease}
.bt-thumb[data-hidden]{opacity:0}
.bt-error{padding:0 14px 10px;color:#e02135;font-size:12px}
`;

// src/client/api.js
var ROUTE = "api/usage";
var call = async (endpoint, payload, signal) => {
  let response;
  try {
    response = await fetch(ROUTE, {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ endpoint, payload: payload ?? null }),
      signal
    });
  } catch (error) {
    if (error?.name === "AbortError") throw error;
    throw Object.assign(new Error(`network error: ${error?.message ?? error}`), { code: "NETWORK" });
  }
  if (!response.ok) {
    throw Object.assign(new Error(`HTTP ${response.status}`), { code: `HTTP_${response.status}` });
  }
  const result = await response.json();
  if (!result.ok) {
    throw Object.assign(new Error(result.error?.message ?? "Request failed"), { code: result.error?.code ?? "usage/error" });
  }
  return result.value;
};
var usageApi = {
  usage: () => call("usage", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
};

// src/client/sources.js
function createSource(initial) {
  let value = initial;
  const listeners = /* @__PURE__ */ new Set();
  return {
    getSnapshot: () => value,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set(next) {
      const resolved = typeof next === "function" ? next(value) : next;
      if (resolved === value) return;
      value = resolved;
      for (const listener of [...listeners]) listener();
    }
  };
}

// src/client/inks.js
var INKS = {
  deepseek: ["#4D6BFE", "#6A84FF"],
  charcoal: ["#141416", "#F1F2F4"],
  graphite: ["#2D2D2D", "#D6D6DA"],
  rose: ["#EC2F6B", "#FF5A7A"],
  sky: ["#0AA8D6", "#2EE6E0"],
  tangerine: ["#FF6900", "#FF8A2E"],
  cobalt: ["#082DFF", "#5C78FF"],
  black: ["#000000", "#FFFFFF"],
  brown: ["#A27952", "#855C36"],
  red: ["#FF3E51", "#E02135"],
  orange: ["#FF781C", "#FF6700"],
  yellow: ["#FFAF38", "#FF9800"],
  green: ["#00C972", "#009957"],
  cyan: ["#1CC3B0", "#00A592"],
  blue: ["#2A92FE", "#0E74E0"],
  violet: ["#A97EFE", "#804EE0"],
  magenta: ["#FF5EB1", "#E02A88"],
  gray: ["#959595", "#777777"],
  aurora: ["#00B8D4", "#2EE6E0"]
};
var GRADIENTS = { aurora: [[0, "#A4FFB0"], [0.42, "#00F0E4"], [1, "#2E9EF7"]] };
var ACCENT_INKS = ["deepseek", "charcoal", "graphite", "rose", "sky", "tangerine", "cobalt"];
var LEGACY_INKS = { kimi: "charcoal", zai: "graphite", minimax: "rose", stepfun: "sky", mimo: "tangerine", qwen: "cobalt" };
var isHex = (color) => typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color);
var luminance = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
var inkName = (color) => INKS[color] ? color : INKS[LEGACY_INKS[color]] ? LEGACY_INKS[color] : "gray";
var inkFill = (color) => isHex(color) ? color : `var(--bt-ink-${inkName(color)})`;
var inkText = (color) => color === "black" ? "var(--bt-ink-gray)" : inkFill(color);
var paintCss = (color) => GRADIENTS[color] ? `linear-gradient(135deg,${GRADIENTS[color].map(([offset, value]) => `${value} ${offset * 100}%`).join(",")})` : inkFill(color);

// src/client/base-styles.js
var BASE_CSS = `
body{--bt-ink:#141414;--bt-ink-2:rgba(20,20,20,.6);--bt-ink-3:rgba(20,20,20,.36);--bt-sidebar:#f7f7f7;--bt-main:#fcfcfc;--bt-line:rgba(20,20,20,.08);--bt-line-2:rgba(20,20,20,.15);--bt-hover:rgba(119,119,119,.09);--bt-active:rgba(119,119,119,.17);--bt-card:#ffffff;--bt-accent:#4d6bfe;--bt-green:#00c972;--bt-star:#ff9800;--bt-tag-bg:rgba(20,20,20,.06)}
body[data-ds-dark-theme]{--bt-ink:#f2f2f2;--bt-ink-2:rgba(242,242,242,.6);--bt-ink-3:rgba(242,242,242,.36);--bt-sidebar:#1b1b1b;--bt-main:#141414;--bt-line:rgba(255,255,255,.08);--bt-line-2:rgba(255,255,255,.15);--bt-hover:rgba(160,160,160,.12);--bt-active:rgba(160,160,160,.2);--bt-card:#1f1f1f;--bt-tag-bg:rgba(255,255,255,.09)}
${Object.entries(INKS).map(([name, [light]]) => `body{--bt-ink-${name}:${light}}`).join("")}
${Object.entries(INKS).map(([name, [, dark]]) => `body[data-ds-dark-theme]{--bt-ink-${name}:${dark}}`).join("")}
`;
var DIALOG_CSS = `
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
`;

// src/client/icons.js
var import_react = require("react");
function PlusIcon() {
  return (0, import_react.createElement)("svg", { width: 18, height: 18, viewBox: "0 0 20 20", "aria-hidden": true }, (0, import_react.createElement)("path", { d: "M10 3.5v13M3.5 10h13", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }));
}
function SearchIcon() {
  return (0, import_react.createElement)("svg", { width: 16, height: 16, viewBox: "0 0 20 20", "aria-hidden": true }, (0, import_react.createElement)("circle", { cx: 8.5, cy: 8.5, r: 5.5, stroke: "currentColor", strokeWidth: 1.6, fill: "none" }), (0, import_react.createElement)("path", { d: "M13 13l4 4", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }));
}
function PeopleIcon() {
  return (0, import_react.createElement)(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", "aria-hidden": true },
    (0, import_react.createElement)("circle", { cx: 7.5, cy: 7, r: 3 }),
    (0, import_react.createElement)("path", { d: "M2 16.5c.6-2.8 2.8-4.5 5.5-4.5s4.9 1.7 5.5 4.5" }),
    (0, import_react.createElement)("path", { d: "M13 4.3a3 3 0 0 1 0 5.4M15 12.4c1.6.6 2.6 2 3 4.1" })
  );
}
function ArrowUpIcon() {
  return (0, import_react.createElement)("svg", { width: 16, height: 16, viewBox: "0 0 20 20", "aria-hidden": true }, (0, import_react.createElement)("path", { d: "M10 16V4M5 9l5-5 5 5", stroke: "currentColor", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function MicIcon({ size = 16 }) {
  return (0, import_react.createElement)(
    "svg",
    { width: size, height: size, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", "aria-hidden": true },
    (0, import_react.createElement)("rect", { x: 7, y: 2.5, width: 6, height: 10, rx: 3, fill: "currentColor", stroke: "none" }),
    (0, import_react.createElement)("path", { d: "M4.5 9.5a5.5 5.5 0 0 0 11 0M10 15v2.5" })
  );
}
function WaveIcon({ size = 16 }) {
  return (0, import_react.createElement)(
    "svg",
    { width: size, height: size, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": true },
    [[3, 7.5, 5], [6.5, 4.5, 11], [10, 2.5, 15], [13.5, 5.5, 9], [17, 8, 4]].map(([x, y, height]) => (0, import_react.createElement)("rect", { key: x, x: x - 1, y, width: 2, height, rx: 1 }))
  );
}
function ShareIcon() {
  return (0, import_react.createElement)(
    "svg",
    { width: 16, height: 16, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true },
    (0, import_react.createElement)("path", { d: "M10 12.5V3M6.5 6.5L10 3l3.5 3.5M4 11v4.5A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5V11" })
  );
}
function CloseIcon() {
  return (0, import_react.createElement)("svg", { width: 16, height: 16, viewBox: "0 0 20 20", "aria-hidden": true }, (0, import_react.createElement)("path", { d: "M5 5l10 10M15 5L5 15", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }));
}
var ChevronLeftIcon = () => (0, import_react.createElement)("svg", { width: 16, height: 16, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true }, (0, import_react.createElement)("path", { d: "M12.5 4.5L7 10l5.5 5.5" }));
var ChevronRightIcon = () => (0, import_react.createElement)("svg", { width: 14, height: 14, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true }, (0, import_react.createElement)("path", { d: "M7.5 4.5L13 10l-5.5 5.5" }));
var lineIcon = (paths) => function LineIcon() {
  return (0, import_react.createElement)(
    "svg",
    { width: 15, height: 15, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true },
    paths.map((d, index) => (0, import_react.createElement)("path", { key: index, d }))
  );
};
var CLOUD = "M6.5 15.25H5.75a3.25 3.25 0 0 1-.55-6.45 4.75 4.75 0 0 1 9.2-1.1 3.75 3.75 0 0 1 .1 7.55H13.5";
function CloudDownloadIcon({ done = false }) {
  return (0, import_react.createElement)(
    "svg",
    { width: 16, height: 16, viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true },
    (0, import_react.createElement)("path", { d: CLOUD }),
    done ? (0, import_react.createElement)("path", { d: "M7.75 13.25l1.75 1.75 3-3.25" }) : (0, import_react.createElement)("g", { className: "bt-cloud-arrow" }, (0, import_react.createElement)("path", { d: "M10 9.75v7" }), (0, import_react.createElement)("path", { d: "M7.75 14.5L10 16.75l2.25-2.25" }))
  );
}
var SmileIcon = lineIcon(["M10 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z", "M7.3 11.6a3.4 3.4 0 0 0 5.4 0", "M7.75 8.25h.01M12.25 8.25h.01"]);
var ReplyIcon = lineIcon(["M8 5L4 9l4 4", "M4 9h7.5a4.5 4.5 0 0 1 4.5 4.5V15"]);
var DotsIcon = lineIcon(["M5 10h.01M10 10h.01M15 10h.01"]);
var CheckIcon = lineIcon(["M4.5 10.5l3.5 3.5 7.5-8"]);
var ArrowDownIcon = lineIcon(["M10 4v12", "M5 11l5 5 5-5"]);
var DownloadIcon = lineIcon(["M10 3.5v9", "M6.5 9.5L10 13l3.5-3.5", "M4 16h12"]);
var GaugeIcon = lineIcon(["M3.5 13.5a6.5 6.5 0 1 1 13 0", "M10 13.5l3-4", "M10 13.5h.01"]);
var PlugIcon = lineIcon(["M7 3v4M13 3v4", "M5 7h10v2.5a5 5 0 0 1-10 0z", "M10 14.5V17"]);
var CalendarIcon = lineIcon(["M5.5 5h9A1.5 1.5 0 0 1 16 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-8A1.5 1.5 0 0 1 5.5 5z", "M4 8.75h12", "M7.25 3.5v3M12.75 3.5v3"]);
var ConnectorIcon = lineIcon(["M7 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z", "M18 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z", "M7 10h6"]);
var SwitchIcon = lineIcon(["M4 7h9.5M10.5 3.5L14 7l-3.5 3.5", "M16 13H6.5M9.5 9.5L6 13l3.5 3.5"]);
var PaperclipIcon = lineIcon(["M15.5 9.5l-5.6 5.6a3.4 3.4 0 0 1-4.8-4.8l6.1-6.1a2.25 2.25 0 0 1 3.2 3.2l-6 6a1.1 1.1 0 0 1-1.6-1.6l5.5-5.5"]);
var ClockIcon = lineIcon(["M10 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z", "M10 6.5V10l2.5 1.5"]);
var GearIcon = lineIcon(["M10 7.4a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2z", "M7.85 4.4l.29-1.87a7.7 7.7 0 0 1 3.72 0l.29 1.87a6 6 0 0 1 1.63.94l1.76-.69a7.7 7.7 0 0 1 1.86 3.23l-1.47 1.18a6 6 0 0 1 0 1.88l1.47 1.18a7.7 7.7 0 0 1-1.86 3.23l-1.76-.69a6 6 0 0 1-1.63.94l-.29 1.87a7.7 7.7 0 0 1-3.72 0l-.29-1.87a6 6 0 0 1-1.63-.94l-1.76.69a7.7 7.7 0 0 1-1.86-3.23l1.47-1.18a6 6 0 0 1 0-1.88L2.6 7.88a7.7 7.7 0 0 1 1.86-3.23l1.76.69a6 6 0 0 1 1.63-.94z"]);
var PinIcon = lineIcon(["M12.5 3l4.5 4.5-3 1.5-2.5 2.5.5 3.5-1.5 1.5L7 13 3.5 16.5", "M7 13l-3.5-3.5L5 8l3.5.5L11 6l1.5-3"]);
function PinMarkIcon() {
  return (0, import_react.createElement)(
    "svg",
    { width: 12, height: 12, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": true },
    (0, import_react.createElement)(
      "g",
      { transform: "rotate(45 10 10)" },
      (0, import_react.createElement)("path", { d: "M8 2.5h4a.9.9 0 0 1 0 1.8h-.4v4.1c0 1.4 1.1 2.6 2.6 3.1l.7.3v1.5H5.1v-1.5l.7-.3c1.5-.5 2.6-1.7 2.6-3.1V4.3H8a.9.9 0 0 1 0-1.8z" }),
      (0, import_react.createElement)("path", { d: "M9.35 13.3h1.3v3.6L10 18l-.65-1.1z" })
    )
  );
}
var UnreadIcon = lineIcon(["M10 3.5a4.5 4.5 0 0 0-4.5 4.5v3L4 13.5h12L14.5 11V8", "M8.3 16a1.8 1.8 0 0 0 3.4 0", "M15.5 3.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z"]);
var PencilIcon = lineIcon(["M9 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3", "M14.3 3.7a1.6 1.6 0 0 1 2.3 2.3L10.5 12l-3 .8.8-3z"]);
var InfoIcon = lineIcon(["M10 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z", "M10 9.25v4", "M10 6.6h.01"]);
var StarLineIcon = lineIcon(["M10 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7L10 13.8 5.8 16l.8-4.7L3.2 8l4.7-.7z"]);
var CopyIcon = lineIcon(["M8.5 7h6A1.5 1.5 0 0 1 16 8.5v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 7 14.5v-6A1.5 1.5 0 0 1 8.5 7z", "M4 12.5V5.5A1.5 1.5 0 0 1 5.5 4H13"]);
var HideIcon = lineIcon(["M3 3l14 14", "M8.6 5.2A7.6 7.6 0 0 1 10 5c4.5 0 7 5 7 5a12.6 12.6 0 0 1-2 2.6M12.2 14.5A6.8 6.8 0 0 1 10 15c-4.5 0-7-5-7-5a12.4 12.4 0 0 1 3-3.4", "M8.5 8.5a2 2 0 0 0 3 3"]);
var TrashIcon = lineIcon(["M3.5 5.5h13", "M8 5.5V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5", "M5 5.5l.7 10A1.5 1.5 0 0 0 7.2 17h5.6a1.5 1.5 0 0 0 1.5-1.5l.7-10", "M8.5 9v4.5M11.5 9v4.5"]);
var DuplicateIcon = lineIcon(["M7 7h8.5v9.5H7z", "M4.5 13V3.5H13", "M11.25 9.5v4.5M9 11.75h4.5"]);
var SlidersIcon = lineIcon(["M4 6.5h5M12.5 6.5H16M4 13.5h4M11.5 13.5H16", "M10.5 4.5v4M9.5 11.5v4"]);
var MemoryIcon = lineIcon(["M5.5 3.5h8A1.5 1.5 0 0 1 15 5v10a1.5 1.5 0 0 1-1.5 1.5h-8z", "M5.5 3.5v13", "M8.5 7.5h3.5M8.5 10.5h2.5", "M12 3.5v4l1-.8 1 .8"]);
var FolderIcon = lineIcon(["M3 6A1.5 1.5 0 0 1 4.5 4.5h3.2l1.8 2h6A1.5 1.5 0 0 1 17 8v6.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"]);
var ChatsIcon = lineIcon(["M3.5 5.5A1.5 1.5 0 0 1 5 4h7a1.5 1.5 0 0 1 1.5 1.5V10A1.5 1.5 0 0 1 12 11.5H8L5 14v-2.5A1.5 1.5 0 0 1 3.5 10z", "M13.5 7.5H15A1.5 1.5 0 0 1 16.5 9v4.5A1.5 1.5 0 0 1 15 15v2l-2.5-2h-3A1.5 1.5 0 0 1 8 13.5V13"]);
var SETTINGS_ICONS = { general: GearIcon, bots: PeopleIcon, groups: ChatsIcon, usage: GaugeIcon };

// src/client/motion.js
var import_react2 = require("react");
var reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
function springEasing(stiffness, damping) {
  const w0 = Math.sqrt(stiffness);
  const zeta = damping / (2 * w0);
  const at = (t2) => {
    if (zeta >= 1) return 1 - (1 + w0 * t2) * Math.exp(-w0 * t2);
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * w0 * t2) * (Math.cos(wd * t2) + zeta * w0 / wd * Math.sin(wd * t2));
  };
  let end = 0.05;
  while (end < 2 && Math.abs(1 - at(end)) > 1e-3) end += 0.01;
  const points = Array.from({ length: 25 }, (_, index) => (index === 24 ? 1 : at(end * index / 24)).toFixed(4));
  return { duration: Math.round(end * 1e3), easing: `linear(${points.join(",")})`, stiffness, damping };
}
var SPRING_SHAPE = springEasing(400, 31.2);
var SPRING_TAP = springEasing(900, 48);
var SPRING_LIST = springEasing(484, 35.2);
var SPRING_STRETCH = springEasing(320, 20);
var SPRING_POP = springEasing(500, 22);
var SPRING_LEAD = springEasing(784, 48.2);
var SPRING_TRAIL = springEasing(289, 29.2);
var QUICK_EDGES = { lead: springEasing(900, 51), trail: springEasing(400, 34) };
var spring = (curve, ...properties) => properties.map((property) => `${property} ${curve.duration}ms ${curve.easing}`).join(",");
function liveSprings(apply2) {
  const values = /* @__PURE__ */ new Map();
  let frame = 0;
  let last = 0;
  const read = () => Object.fromEntries([...values].map(([key, value]) => [key, value.x]));
  const step = (now) => {
    const dt = Math.min(0.5, Math.max(1e-3, (now - last) / 1e3));
    last = now;
    const steps = Math.ceil(dt * 240);
    const h5 = dt / steps;
    let moving = false;
    for (const value of values.values()) {
      for (let index = 0; index < steps; index += 1) {
        value.v += (-value.k * (value.x - value.to) - value.c * value.v) * h5;
        value.x += value.v * h5;
      }
      if (Math.abs(value.x - value.to) < 0.05 && Math.abs(value.v) < 1) {
        value.x = value.to;
        value.v = 0;
      } else moving = true;
    }
    apply2(read());
    frame = moving ? requestAnimationFrame(step) : 0;
  };
  return {
    target: () => values.size ? Object.fromEntries([...values].map(([key, value]) => [key, value.to])) : null,
    set(targets, curves, jump) {
      for (const [key, to] of Object.entries(targets)) {
        const value = values.get(key);
        const { stiffness: k, damping: c } = curves[key];
        if (!value || jump) values.set(key, { x: to, v: 0, to, k, c });
        else Object.assign(value, { to, k, c });
      }
      if (jump) {
        cancelAnimationFrame(frame);
        frame = 0;
        apply2(read());
        return;
      }
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    },
    stop: () => cancelAnimationFrame(frame)
  };
}
var CHOSEN = '[aria-pressed="true"],[aria-selected="true"],[aria-current="page"]';
function useGlide(key, { axis = "x", selector = CHOSEN, lead = SPRING_LEAD, trail = SPRING_TRAIL, box: given } = {}) {
  const ownBox = (0, import_react2.useRef)(null);
  const box = given ?? ownBox;
  const thumb = (0, import_react2.useRef)(null);
  const own = (0, import_react2.useRef)(null);
  if (own.current === null) {
    own.current = {
      key: void 0,
      node: null,
      observer: null,
      springs: liveSprings(({ start, end }) => {
        const knob = thumb.current;
        if (!knob) return;
        knob.style.transform = axis === "x" ? `translateX(${start}px)` : `translateY(${start}px)`;
        knob.style[axis === "x" ? "width" : "height"] = `${Math.max(0, end - start)}px`;
      })
    };
  }
  const place = (jump) => {
    const container = box.current;
    const knob = thumb.current;
    if (!container || !knob) return;
    const chosen = container.querySelector(selector);
    if (!chosen) {
      knob.dataset.hidden = "";
      return;
    }
    const start = axis === "x" ? chosen.offsetLeft : chosen.offsetTop;
    const end = start + (axis === "x" ? chosen.offsetWidth : chosen.offsetHeight);
    const { springs } = own.current;
    const before = springs.target();
    const hidden = knob.dataset.hidden !== void 0;
    if (jump && !hidden && before?.start === start && before?.end === end && container.dataset.glide !== void 0) return;
    delete knob.dataset.hidden;
    const forward = before === null || start >= before.start;
    springs.set({ start, end }, forward ? { start: trail, end: lead } : { start: lead, end: trail }, jump || hidden || before === null || reducedMotion());
    container.dataset.glide = "";
  };
  (0, import_react2.useLayoutEffect)(() => {
    const state = own.current;
    const node = box.current;
    if (node === state.node && key === state.key) return;
    const fresh = node !== state.node;
    state.key = key;
    if (fresh) {
      state.observer?.disconnect();
      state.node = node;
      state.observer = node && typeof ResizeObserver === "function" ? new ResizeObserver(() => place(true)) : null;
      state.observer?.observe(node);
    }
    place(fresh);
  });
  (0, import_react2.useEffect)(() => () => {
    own.current.observer?.disconnect();
    own.current.springs.stop();
  }, []);
  return { box, thumb };
}
function Segmented({ label, value, className, children }) {
  const glide = useGlide(value);
  return (0, import_react2.createElement)(
    "div",
    { ref: glide.box, className: className ? `bt-seg ${className}` : "bt-seg", role: "group", "aria-label": label },
    (0, import_react2.createElement)("span", { ref: glide.thumb, className: "bt-thumb", "aria-hidden": true }),
    children
  );
}
function useFlip(list, key, selector, id = (node) => node.dataset.flip) {
  const tops = (0, import_react2.useRef)(null);
  (0, import_react2.useLayoutEffect)(() => {
    const container = list.current;
    if (!container) return;
    const next = /* @__PURE__ */ new Map();
    const moving = tops.current !== null && !reducedMotion();
    for (const node of container.querySelectorAll(selector)) {
      const name = id(node);
      const top = node.offsetTop;
      next.set(name, top);
      if (!moving) continue;
      const before = tops.current.get(name);
      if (before === void 0) {
        node.animate([{ opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0)" }], { duration: 180, easing: "ease-out" });
      } else if (Math.abs(before - top) > 0.5) {
        node.animate([{ transform: `translateY(${before - top}px)` }, { transform: "none" }], { duration: SPRING_LIST.duration, easing: SPRING_LIST.easing });
      }
    }
    tops.current = next;
  }, [key]);
}
function useMorph(box, key) {
  const last = (0, import_react2.useRef)({ key, height: null });
  (0, import_react2.useLayoutEffect)(() => {
    const node = box.current;
    const state = last.current;
    if (!node) {
      last.current = { key, height: null };
      return;
    }
    const running = node.getAnimations().filter((animation2) => animation2.id === "bt-morph");
    if (key === state.key) {
      if (running.length === 0) state.height = node.offsetHeight;
      return;
    }
    const from = running.length ? node.offsetHeight : state.height;
    for (const animation2 of running) animation2.cancel();
    const to = node.offsetHeight;
    last.current = { key, height: to };
    if (from === null || Math.abs(from - to) < 1 || reducedMotion()) return;
    node.dataset.morph = "";
    const animation = node.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: SPRING_SHAPE.duration, easing: SPRING_SHAPE.easing, id: "bt-morph" });
    animation.onfinish = () => {
      delete node.dataset.morph;
    };
    animation.oncancel = () => {
      if (!node.getAnimations().some((other) => other.id === "bt-morph" && other !== animation)) delete node.dataset.morph;
    };
  });
}
function useLinger(value, ms) {
  const [kept, setKept] = (0, import_react2.useState)(value);
  (0, import_react2.useEffect)(() => {
    if (value) {
      setKept(value);
      return void 0;
    }
    const timer = setTimeout(() => setKept(value), reducedMotion() ? 0 : ms);
    return () => clearTimeout(timer);
  }, [value]);
  return [value || kept, !value && Boolean(kept)];
}

// src/client/i18n.js
var NAMESPACE = "ds-usage";
var ZH = {
  // Shared
  Settings: "设置",
  Conversations: "对话",
  "Group chats": "群聊",
  "Active on 1 day in the last year": "近一年有 1 天在用",
  "Active on {count} days in the last year": "近一年有 {count} 天在用",
  Usage: "用量",
  Cancel: "取消",
  Close: "关闭",
  "DS Usage": "用量",
  "Usage overview": "用量总览",
  "Open the usage window": "打开用量窗口",
  // Owner faces
  Other: "其他",
  "Compaction and handoff": "压缩与交接",
  "Image reading": "识图",
  Titles: "标题",
  Memory: "记忆",
  // Time and usage
  "Last {range}": "最近 {range}",
  tokens: "Token",
  "Compared with the {range} before": "与再往前 {range} 相比",
  "{share}% of all usage in the last {range}": "占最近 {range}全部用量的 {share}%",
  Calls: "调用次数",
  "Cache hit rate": "缓存命中率",
  "Tokens over time": "Token 走势",
  "{count} tokens": "{count} Token",
  "{tokens} tokens · {calls} calls": "{tokens} Token · {calls} 次调用",
  Light: "少",
  Heavy: "多",
  "Unknown model": "未知模型",
  "More models": "其余模型",
  "Reading your chats…": "正在读取聊天记录…",
  "No usage yet.": "还没有用量。",
  "Token usage shows up here after a model is called.": "调用模型之后，这里会显示 Token 用量。",
  "Nothing in this range.": "这段时间没有用量。",
  "What for": "用途",
  Activity: "活跃度",
  "Time range": "时间范围",
  "All usage": "全部用量",
  "By model": "按模型",
  "Still reading older chats; totals may grow.": "还在读取较早的聊天记录，数字可能还会变大。",
  Custom: "自定义",
  "Custom range": "自定义时间范围",
  "This month": "本月",
  "Last month": "上个月",
  "This year": "今年",
  "Previous month": "往前一个月",
  "Next month": "往后一个月",
  "Pick the first day": "选择开始日期",
  "Pick the last day": "选择结束日期",
  "1 day": "1 天",
  "{count} days": "{count} 天",
  "Compared with the day before": "与前一天相比",
  "Compared with the {count} days before": "与再往前 {count} 天相比",
  "{share}% of all usage from {span}": "占 {span} 全部用量的 {share}%",
  "24 hours": "24 小时",
  "7 days": "7 天",
  "30 days": "30 天",
  "12 weeks": "12 周",
  "12 months": "12 个月",
  "Per hour": "每小时",
  "Per day": "每天",
  "Per week": "每周",
  "Per month": "每月",
  Output: "输出",
  Input: "输入",
  "Cache hit": "缓存命中",
  Models: "模型",
  Bots: "Bot"
};
var fill = (text, params) => params ? text.replace(/\{(\w+)\}/g, (match, name) => name in params ? String(params[name]) : match) : text;
var service = null;
var bound = null;
var forced = null;
function installForcedLanguage(id) {
  forced = id === "zh" || id === "en" ? id : null;
}
function installLocale(locale) {
  if (!locale || typeof locale.register !== "function" || typeof locale.bind !== "function") return () => {
  };
  service = locale;
  bound = locale.bind(NAMESPACE);
  let off;
  try {
    off = locale.register(NAMESPACE, "zh", ZH);
  } catch {
    try {
      off = locale.register(NAMESPACE, { zh: ZH });
    } catch {
    }
  }
  return () => {
    if (service === locale) {
      service = null;
      bound = null;
    }
    if (typeof off === "function") {
      try {
        off();
      } catch {
      }
    }
  };
}
function t(key, params) {
  if (forced === "zh") return fill(ZH[key] ?? key, params);
  if (forced === "en") return fill(key, params);
  return bound ? bound(key, params) : fill(key, params);
}
var hostText = (message) => message;
var language = () => {
  if (forced) return forced;
  const active = service?.getLocale?.().active;
  return typeof active === "string" ? active : "en";
};
var dateLocale = () => language().startsWith("zh") ? "zh-CN" : "en-US";
var DICTIONARY = { zh: ZH };

// src/client/usage-data.js
var HOUR = 0;
var OWNER = 1;
var MODEL = 2;
var KIND = 3;
var HOUR_MS = 36e5;
var DAY_MS = 864e5;
var RANGES = [
  { id: "24h", unit: "hour", count: 24, stride: 6 },
  { id: "7d", unit: "day", count: 7, stride: 1 },
  { id: "30d", unit: "day", count: 30, stride: 5 },
  { id: "12w", unit: "week", count: 12, stride: 2 },
  { id: "12m", unit: "month", count: 12, stride: 1 }
];
var hourMs = (key) => Date.UTC(Number(key.slice(0, 4)), Number(key.slice(5, 7)) - 1, Number(key.slice(8, 10)), Number(key.slice(11, 13)) || 0);
var dayKey = (ms) => new Date(ms).toISOString().slice(0, 10);
var hourKey = (ms) => new Date(ms).toISOString().slice(0, 13).replace("T", " ");
var mondayOf = (ms) => ms - (new Date(ms).getUTCDay() + 6) % 7 * DAY_MS;
function spanRange(from, to) {
  if (to < from) [from, to] = [to, from];
  const days = Math.round((hourMs(to) - hourMs(from)) / DAY_MS) + 1;
  const unit = days <= 2 ? "hour" : days <= 62 ? "day" : days <= 182 ? "week" : "month";
  const range = { id: "custom", unit, from, to, days };
  const count = spanBuckets(range).length;
  const stride = unit === "hour" ? 6 : [1, 2, 3, 5, 7, 10, 14].find((step) => count / step <= 12) ?? Math.ceil(count / 12);
  return { ...range, count, stride };
}
function spanBuckets(range) {
  const first = hourMs(range.from);
  const end = hourMs(range.to) + DAY_MS;
  const buckets = [];
  if (range.unit === "hour" || range.unit === "day") {
    const step = range.unit === "hour" ? HOUR_MS : DAY_MS;
    for (let start = first; start < end; start += step) buckets.push({ start, end: start + step, key: range.unit === "hour" ? hourKey(start) : dayKey(start) });
  } else if (range.unit === "week") {
    for (let monday = mondayOf(first); monday < end; monday += 7 * DAY_MS) {
      buckets.push({ start: Math.max(monday, first), end: Math.min(monday + 7 * DAY_MS, end), key: dayKey(monday) });
    }
  } else {
    const year = new Date(first).getUTCFullYear();
    for (let month = new Date(first).getUTCMonth(); Date.UTC(year, month, 1) < end; month += 1) {
      const start = Date.UTC(year, month, 1);
      buckets.push({ start: Math.max(start, first), end: Math.min(Date.UTC(year, month + 1, 1), end), key: dayKey(start).slice(0, 7) });
    }
  }
  return buckets;
}
function spanOf(range, now) {
  if (range.from) {
    return { buckets: spanBuckets(range), from: `${range.from} 00`, to: `${range.to} 23`, before: hourKey(hourMs(range.from) - range.days * DAY_MS) };
  }
  const buckets = bucketsOf(range, now);
  return { buckets: buckets.slice(range.count), from: hourKey(buckets[range.count].start), to: now, before: hourKey(buckets[0].start) };
}
function bucketsOf(range, now) {
  const end = hourMs(now);
  const today = end - end % DAY_MS;
  const buckets = [];
  for (let back = range.count * 2 - 1; back >= 0; back -= 1) {
    let start;
    if (range.unit === "hour") start = end - back * HOUR_MS;
    else if (range.unit === "day") start = today - back * DAY_MS;
    else if (range.unit === "week") start = mondayOf(today) - back * 7 * DAY_MS;
    else start = Date.UTC(new Date(end).getUTCFullYear(), new Date(end).getUTCMonth() - back, 1);
    buckets.push({ start, key: range.unit === "hour" ? hourKey(start) : range.unit === "month" ? dayKey(start).slice(0, 7) : dayKey(start) });
  }
  return buckets;
}
var tokensOf = (row) => row[4] + row[5] + row[6] + row[7];
var blank = () => ({ input: 0, cacheRead: 0, output: 0, calls: 0, total: 0 });
function addRow(sum, row) {
  sum.input += row[4] + row[6];
  sum.cacheRead += row[5];
  sum.output += row[7];
  sum.calls += row[8];
  sum.total += tokensOf(row);
  return sum;
}
function addTo(map, key, row) {
  map.set(key, addRow(map.get(key) ?? blank(), row));
}
function summarize(view, range, keep = () => true, seriesOf = () => "all") {
  const { buckets, from, to, before } = spanOf(range, view.now);
  const index = new Map(buckets.map((bucket, at) => [bucket.key, at]));
  const weeks = /* @__PURE__ */ new Map();
  const keyOf = (hour) => {
    if (range.unit === "hour") return hour;
    if (range.unit === "day") return hour.slice(0, 10);
    if (range.unit === "month") return hour.slice(0, 7);
    const day = hour.slice(0, 10);
    let week = weeks.get(day);
    if (week === void 0) weeks.set(day, week = dayKey(mondayOf(hourMs(day))));
    return week;
  };
  const current = buckets.map((bucket) => ({ ...bucket, sum: blank(), stacks: /* @__PURE__ */ new Map() }));
  const result = { buckets: current, total: blank(), previous: 0, owners: /* @__PURE__ */ new Map(), models: /* @__PURE__ */ new Map(), kinds: /* @__PURE__ */ new Map() };
  for (const row of view.rows) {
    const hour = row[HOUR];
    if (hour < before || hour > to || !keep(row)) continue;
    if (hour < from) {
      result.previous += tokensOf(row);
      continue;
    }
    const at = index.get(keyOf(hour));
    if (at === void 0) continue;
    const bucket = current[at];
    addRow(bucket.sum, row);
    addRow(result.total, row);
    const series = seriesOf(row);
    bucket.stacks.set(series, (bucket.stacks.get(series) ?? 0) + tokensOf(row));
    addTo(result.owners, row[OWNER], row);
    addTo(result.models, row[MODEL], row);
    addTo(result.kinds, row[KIND], row);
  }
  return result;
}
function trimmed(value) {
  const text = value >= 100 ? value.toFixed(0) : value >= 10 ? value.toFixed(1) : value.toFixed(2);
  return text.includes(".") ? text.replace(/\.?0+$/, "") : text;
}
function compact(count) {
  for (const [size, unit] of [[1e9, "B"], [1e6, "M"], [1e3, "K"]]) {
    if (count >= size * 0.9995) return `${trimmed(count / size)}${unit}`;
  }
  return String(Math.round(count));
}
function percent(part, whole) {
  if (!(whole > 0) || !(part > 0)) return "0";
  const value = part / whole * 100;
  return value < 1 ? "<1" : String(Math.round(value));
}

// src/client/usage-page.js
var import_react3 = require("react");
var HEAT_WEEKS = 53;
var TOP_SERIES = 7;
var RING_R = 42;
var RING = 2 * Math.PI * RING_R;
var rangeLabel = (id) => ({ "24h": t("24 hours"), "7d": t("7 days"), "30d": t("30 days"), "12w": t("12 weeks"), "12m": t("12 months") })[id];
var unitLabel = (unit) => ({ hour: t("Per hour"), day: t("Per day"), week: t("Per week"), month: t("Per month") })[unit];
var MODEL_INKS = ["deepseek", "tangerine", "green", "violet", "sky", "rose", "yellow", "cyan", "magenta", "brown"];
var PARTS = [["output", 1], ["input", 0.6], ["cacheRead", 0.32]];
var partLabel = (part) => ({ output: t("Output"), input: t("Input"), cacheRead: t("Cache hit") })[part];
var soften = (paint, strength = 1) => {
  const mix = (color) => `color-mix(in srgb, ${color} ${Math.round(88 * strength)}%, var(--bt-card))`;
  return paint.startsWith("linear-gradient(") ? paint.replace(/#[0-9a-f]{6}/gi, mix) : mix(paint);
};
var full = (count) => new Intl.NumberFormat(dateLocale()).format(Math.round(count));
var hitRate = (sum) => percent(sum.cacheRead, sum.input + sum.cacheRead);
var dates = (options) => new Intl.DateTimeFormat(dateLocale(), { timeZone: "UTC", ...options });
var hourText = (ms) => `${String(new Date(ms).getUTCHours()).padStart(2, "0")}:00`;
var yearOf = (ms) => new Date(ms).getUTCFullYear();
function spanText(from, to) {
  const start = hourMs(from);
  const end = hourMs(to);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const format = dates(yearOf(start) !== year || yearOf(end) !== year ? { year: "numeric", month: "short", day: "numeric" } : { month: "short", day: "numeric" });
  return from === to ? format.format(start) : `${format.format(start)} – ${format.format(end)}`;
}
var daysText = (count) => count === 1 ? t("1 day") : t("{count} days", { count });
var lastText = (range) => range.from ? spanText(range.from, range.to) : t("Last {range}", { range: rangeLabel(range.id) });
function compareText(range) {
  if (!range.from) return t("Compared with the {range} before", { range: rangeLabel(range.id) });
  return range.days === 1 ? t("Compared with the day before") : t("Compared with the {count} days before", { count: range.days });
}
function tickOf(range, bucket) {
  if (range.unit === "hour") {
    return range.days > 1 && new Date(bucket.start).getUTCHours() === 0 ? dates({ month: "numeric", day: "numeric" }).format(bucket.start) : hourText(bucket.start);
  }
  if (range.unit === "month") return dates({ month: "short" }).format(bucket.start);
  return dates({ month: "numeric", day: "numeric" }).format(bucket.start);
}
function titleOf(range, bucket) {
  if (range.unit === "hour") return `${dates({ month: "short", day: "numeric" }).format(bucket.start)} ${hourText(bucket.start)}–${hourText(bucket.start + HOUR_MS)}`;
  if (range.unit === "day") return dates({ month: "long", day: "numeric", weekday: "short" }).format(bucket.start);
  if (range.unit === "week") return spanText(dayKey(bucket.start), dayKey((bucket.end ?? bucket.start + 7 * DAY_MS) - DAY_MS));
  if (bucket.end && (new Date(bucket.start).getUTCDate() !== 1 || new Date(bucket.end).getUTCDate() !== 1)) return spanText(dayKey(bucket.start), dayKey(bucket.end - DAY_MS));
  return dates({ year: "numeric", month: "long" }).format(bucket.start);
}
function useTween(value) {
  const [shown, setShown] = (0, import_react3.useState)(0);
  const from = (0, import_react3.useRef)(0);
  (0, import_react3.useEffect)(() => {
    if (reducedMotion() || typeof requestAnimationFrame !== "function") {
      from.current = value;
      setShown(value);
      return void 0;
    }
    const begin = from.current;
    const started = performance.now();
    let frame;
    const step = (now) => {
      const progress = Math.min(1, (now - started) / 650);
      from.current = begin + (value - begin) * (1 - (1 - progress) ** 3);
      setShown(from.current);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return shown;
}
function ModelGlyph({ name, paint, size }) {
  return (0, import_react3.createElement)("span", {
    className: "bt-us-model",
    "aria-hidden": true,
    style: { width: size, height: size, fontSize: Math.round(size * 0.42), background: `color-mix(in srgb, ${paint} 20%, var(--bt-card))`, color: `color-mix(in srgb, ${paint} 72%, var(--bt-ink))` }
  }, (name.match(/[\p{L}\p{N}]/u)?.[0] ?? "?").toUpperCase());
}
function kindLabel(kind) {
  const labels = { chat: t("Conversations"), group: t("Group chats"), compaction: t("Compaction and handoff"), image: t("Image reading"), memory: t("Memory"), "session-title": t("Titles"), other: t("Other") };
  return labels[kind] ?? kind;
}
function Tabs({ label, value, options, onChange, boxRef }) {
  const names = options.map(([, text]) => text).join("\n");
  const glide = useGlide(`${value}
${names}`, { box: boxRef });
  return (0, import_react3.createElement)(
    "div",
    { ref: glide.box, className: "bt-us-tabs", role: "group", "aria-label": label },
    (0, import_react3.createElement)("span", { ref: glide.thumb, className: "bt-thumb", "aria-hidden": true }),
    options.map(([id, text, icon]) => (0, import_react3.createElement)("button", { key: id, type: "button", "aria-pressed": value === id, onClick: () => onChange(id) }, icon ? (0, import_react3.createElement)(icon) : null, text))
  );
}
function Stats({ range, total, previous }) {
  const shown = useTween(total.total);
  const change = previous > 0 ? Math.round((total.total - previous) / previous * 100) : null;
  const cell = (label, value) => (0, import_react3.createElement)("div", { className: "bt-us-stat" }, (0, import_react3.createElement)("span", { className: "bt-us-stat-label" }, label), (0, import_react3.createElement)("span", { className: "bt-us-stat-value" }, value));
  return (0, import_react3.createElement)(
    "section",
    { className: "bt-us-stats", style: { "--i": 0 } },
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-stat bt-us-stat-main" },
      (0, import_react3.createElement)("span", { className: "bt-us-stat-label" }, lastText(range)),
      (0, import_react3.createElement)(
        "span",
        { className: "bt-us-stat-value" },
        compact(shown),
        (0, import_react3.createElement)("small", null, t("tokens")),
        change === null ? null : (0, import_react3.createElement)(
          "span",
          { className: "bt-us-delta", title: compareText(range) },
          `${change >= 0 ? "↑" : "↓"} ${Math.abs(change)}%`
        )
      )
    ),
    cell(t("Cache hit rate"), `${hitRate(total)}%`),
    cell(t("Output"), compact(total.output)),
    cell(t("Calls"), full(total.calls))
  );
}
function niceTop(max) {
  if (!(max > 0)) return 1;
  const step = 10 ** Math.floor(Math.log10(max));
  return [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].map((scale) => scale * step).find((value) => value >= max);
}
function Chart({ range, columns, series, tipSeries, onPick }) {
  const [hover, setHover] = (0, import_react3.useState)(null);
  const top = niceTop(Math.max(0, ...columns.map((column) => column.total)));
  const count = columns.length;
  const fillOf = new Map(series.map((entry) => [entry.key, entry.fill]));
  const tipOf = new Map(tipSeries.map((entry) => [entry.key, entry]));
  const tip = hover === null ? null : columns[hover];
  const tipSide = hover !== null && hover >= count / 2 ? { right: `calc(${(count - hover) / count * 100}% + 8px)` } : { left: `calc(${(hover + 1) / count * 100}% + 8px)` };
  return (0, import_react3.createElement)(
    "section",
    { className: "bt-us-card bt-us-chart", style: { "--i": 1 } },
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-card-head" },
      (0, import_react3.createElement)("h3", null, t("Tokens over time"), (0, import_react3.createElement)("span", null, unitLabel(range.unit)))
    ),
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-chart-body" },
      (0, import_react3.createElement)(
        "div",
        { className: "bt-us-plot", "data-hover": hover === null ? void 0 : "", onMouseLeave: () => setHover(null) },
        [1, 0.5].map((level) => (0, import_react3.createElement)("div", { key: level, className: "bt-us-grid", style: { bottom: `${level * 100}%` } }, (0, import_react3.createElement)("span", null, compact(top * level)))),
        (0, import_react3.createElement)("div", { className: "bt-us-grid bt-us-base", style: { bottom: 0 } }, (0, import_react3.createElement)("span", null, "0")),
        (0, import_react3.createElement)(
          "div",
          { className: "bt-us-cols" },
          columns.map((column, at) => (0, import_react3.createElement)("div", {
            key: `${range.from ? `${range.from}~${range.to}` : range.id}:${column.key}`,
            className: "bt-us-col",
            "data-on": hover === at ? "" : void 0,
            onMouseEnter: () => setHover(at)
          }, column.total > 0 ? (0, import_react3.createElement)(
            "div",
            { className: "bt-us-stack", style: { height: `${column.total / top * 100}%`, "--i": at } },
            column.parts.map(([key, value]) => value > 0 ? (0, import_react3.createElement)("i", { key, style: { flexGrow: value, background: fillOf.get(key) } }) : null)
          ) : (0, import_react3.createElement)("div", { className: "bt-us-stub" })))
        ),
        tip ? (0, import_react3.createElement)(
          "div",
          { className: "bt-us-tip", style: tipSide },
          (0, import_react3.createElement)("div", { className: "bt-us-tip-title" }, tip.title),
          (0, import_react3.createElement)("div", { className: "bt-us-tip-total" }, t("{count} tokens", { count: full(tip.total) })),
          tip.tip.filter(([, value]) => value > 0).sort((a, b) => b[1] - a[1]).map(([key, value]) => (0, import_react3.createElement)(
            "div",
            { key, className: "bt-us-tip-row" },
            (0, import_react3.createElement)("i", { className: "bt-us-dot", style: { background: tipOf.get(key)?.fill } }),
            (0, import_react3.createElement)("span", null, tipOf.get(key)?.name),
            (0, import_react3.createElement)("b", null, compact(value))
          ))
        ) : null
      ),
      (0, import_react3.createElement)(
        "div",
        { className: "bt-us-ticks", "aria-hidden": true },
        // A preset counts its labels back from now; a picked span forward from its first day.
        columns.map((column, at) => (0, import_react3.createElement)(
          "span",
          { key: column.key, "data-now": at === count - 1 && range.ends !== false ? "" : void 0 },
          (range.from ? at : count - 1 - at) % range.stride === 0 ? column.tick : ""
        ))
      )
    ),
    series.length > 1 || series[0]?.pick ? (0, import_react3.createElement)(
      "div",
      { className: "bt-us-legend" },
      series.map((entry) => (0, import_react3.createElement)(entry.pick ? "button" : "span", {
        key: entry.key,
        className: "bt-us-key",
        ...entry.pick ? { type: "button", onClick: () => onPick(entry.pick) } : {}
      }, (0, import_react3.createElement)("i", { className: "bt-us-dot", style: { background: entry.fill } }), entry.name))
    ) : null
  );
}
function Row({ kind, glyph, name, sub, sum, whole, fill: fill2, index, onClick }) {
  const width = whole > 0 ? Math.max(sum.total > 0 ? 2 : 0, sum.total / whole * 100) : 0;
  return (0, import_react3.createElement)(
    onClick ? "button" : "div",
    {
      className: "bt-us-row",
      "data-kind": kind,
      style: { "--i": index },
      title: t("{tokens} tokens · {calls} calls", { tokens: full(sum.total), calls: full(sum.calls) }),
      ...onClick ? { type: "button", onClick } : {}
    },
    glyph ? (0, import_react3.createElement)("span", { className: "bt-us-row-glyph" }, glyph) : null,
    (0, import_react3.createElement)(
      "span",
      { className: "bt-us-row-body" },
      (0, import_react3.createElement)(
        "span",
        { className: "bt-us-row-line" },
        (0, import_react3.createElement)("span", { className: "bt-us-row-name" }, name),
        sub ? (0, import_react3.createElement)("span", { className: "bt-us-row-sub" }, sub) : null
      ),
      (0, import_react3.createElement)("span", { className: "bt-us-track" }, (0, import_react3.createElement)("span", { style: { width: `${width}%`, background: fill2 } }))
    ),
    (0, import_react3.createElement)("span", { className: "bt-us-row-num" }, (0, import_react3.createElement)("b", null, compact(sum.total)), (0, import_react3.createElement)("small", null, `${percent(sum.total, whole)}%`))
  );
}
function ListCard({ title, count, index, children }) {
  return (0, import_react3.createElement)(
    "section",
    { className: "bt-us-card", style: { "--i": index } },
    (0, import_react3.createElement)("div", { className: "bt-us-card-head" }, (0, import_react3.createElement)("h3", null, title, count === void 0 ? null : (0, import_react3.createElement)("span", null, count))),
    (0, import_react3.createElement)("div", { className: "bt-us-rows" }, children)
  );
}
function Profile({ face, share, range }) {
  const arc = Math.max(0, Math.min(1, share)) * RING;
  return (0, import_react3.createElement)(
    "section",
    { className: "bt-us-profile" },
    (0, import_react3.createElement)(
      "span",
      { className: "bt-us-ring" },
      (0, import_react3.createElement)(
        "svg",
        { viewBox: "0 0 96 96", "aria-hidden": true },
        face.stops ? (0, import_react3.createElement)("defs", null, (0, import_react3.createElement)(
          "linearGradient",
          { id: "bt-us-ring-paint", x1: 0, y1: 1, x2: 1, y2: 0 },
          face.stops.map(([offset, color]) => (0, import_react3.createElement)("stop", { key: offset, offset, stopColor: color }))
        )) : null,
        (0, import_react3.createElement)("circle", { className: "bt-us-ring-track", cx: 48, cy: 48, r: RING_R }),
        arc > 0 ? (0, import_react3.createElement)("circle", { className: "bt-us-ring-arc", cx: 48, cy: 48, r: RING_R, style: { stroke: face.stops ? "url(#bt-us-ring-paint)" : face.paint, strokeDasharray: `${arc} ${RING}` } }) : null
      ),
      (0, import_react3.createElement)("span", { className: "bt-us-ring-face" }, face.glyph(64))
    ),
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-profile-copy" },
      (0, import_react3.createElement)("h3", null, face.name),
      face.sub ? (0, import_react3.createElement)("span", { className: "bt-us-profile-sub" }, face.sub) : null,
      (0, import_react3.createElement)("span", { className: "bt-us-profile-share" }, range.from ? t("{share}% of all usage from {span}", { share: percent(share, 1), span: spanText(range.from, range.to) }) : t("{share}% of all usage in the last {range}", { share: percent(share, 1), range: rangeLabel(range.id) }))
    )
  );
}
var monthOf = (ms) => Date.UTC(yearOf(ms), new Date(ms).getUTCMonth(), 1);
var addMonths = (ms, count) => Date.UTC(yearOf(ms), new Date(ms).getUTCMonth() + count, 1);
function SpanPicker({ span, today, oldest, active, near, onPick, onClose }) {
  const box = (0, import_react3.useRef)(null);
  const todayMs = hourMs(today);
  const thisMonth = monthOf(todayMs);
  const [right, setRight] = (0, import_react3.useState)(() => Math.max(addMonths(oldest, 1), monthOf(hourMs(span?.to ?? today))));
  const [anchor, setAnchor] = (0, import_react3.useState)(null);
  const [hover, setHover] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    const onDown = (event) => {
      if (![box, near].some((ref) => ref.current?.contains(event.target))) onClose();
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey, true);
    };
  }, []);
  const [low, high] = anchor ? [anchor, hover ?? anchor].sort() : span ? [span.from, span.to] : [null, null];
  const press = (key) => {
    if (!anchor) {
      setAnchor(key);
      return;
    }
    const [from, to] = [anchor, key].sort();
    onPick(from, to);
  };
  const weekdays = (0, import_react3.useMemo)(() => Array.from({ length: 7 }, (_, at) => dates({ weekday: "narrow" }).format(Date.UTC(2024, 0, 1 + at))), []);
  const month = (start, side) => {
    const length = new Date(addMonths(start, 1) - DAY_MS).getUTCDate();
    const lead = (new Date(start).getUTCDay() + 6) % 7;
    const cells = Array.from({ length: lead }, (_, at) => (0, import_react3.createElement)("span", { key: `b${at}` }));
    for (let day = 1; day <= length; day += 1) {
      const ms = start + (day - 1) * DAY_MS;
      const key = dayKey(ms);
      const weekday = (lead + day - 1) % 7;
      const flag = (on) => on ? "" : void 0;
      cells.push((0, import_react3.createElement)("button", {
        key,
        type: "button",
        className: "bt-us-day",
        disabled: ms > todayMs,
        "aria-label": dates({ year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(ms),
        "aria-pressed": key === low || key === high,
        "data-in": flag(low !== null && key >= low && key <= high),
        "data-start": flag(key === low),
        "data-end": flag(key === high),
        "data-l": flag(weekday === 0 || day === 1),
        "data-r": flag(weekday === 6 || day === length),
        "data-today": flag(key === today),
        "data-has": flag(active.has(key)),
        onMouseEnter: () => setHover(key),
        onClick: () => press(key)
      }, (0, import_react3.createElement)("b", null, day)));
    }
    const nav = side === "left" ? (0, import_react3.createElement)("button", { type: "button", className: "bt-us-month-nav", "data-side": "left", "aria-label": t("Previous month"), disabled: start <= oldest, onClick: () => setRight(addMonths(right, -1)) }, (0, import_react3.createElement)(ChevronLeftIcon)) : (0, import_react3.createElement)("button", { type: "button", className: "bt-us-month-nav", "data-side": "right", "aria-label": t("Next month"), disabled: start >= thisMonth, onClick: () => setRight(addMonths(right, 1)) }, (0, import_react3.createElement)(ChevronRightIcon));
    return (0, import_react3.createElement)(
      "div",
      { key: start, className: "bt-us-month" },
      (0, import_react3.createElement)("div", { className: "bt-us-month-head" }, nav, (0, import_react3.createElement)("span", null, dates({ year: "numeric", month: "long" }).format(start))),
      (0, import_react3.createElement)("div", { className: "bt-us-weekdays", "aria-hidden": true }, weekdays.map((name, at) => (0, import_react3.createElement)("span", { key: at }, name))),
      (0, import_react3.createElement)("div", { className: "bt-us-days", onMouseLeave: () => setHover(null) }, cells)
    );
  };
  const shortcuts = [
    ["month", t("This month"), dayKey(thisMonth), today],
    ["last", t("Last month"), dayKey(addMonths(thisMonth, -1)), dayKey(thisMonth - DAY_MS)],
    ["year", t("This year"), `${today.slice(0, 4)}-01-01`, today]
  ];
  const count = low === null ? 0 : Math.round((hourMs(high) - hourMs(low)) / DAY_MS) + 1;
  return (0, import_react3.createElement)(
    "div",
    { ref: box, className: "bt-us-pick", role: "dialog", "aria-label": t("Custom range") },
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-pick-quick" },
      shortcuts.map(([id, label, from, to]) => (0, import_react3.createElement)("button", {
        key: id,
        type: "button",
        "aria-pressed": span?.from === from && span?.to === to,
        onClick: () => onPick(from, to)
      }, label))
    ),
    (0, import_react3.createElement)("div", { className: "bt-us-pick-months" }, month(addMonths(right, -1), "left"), month(right, "right")),
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-pick-foot", role: "status" },
      (0, import_react3.createElement)("span", null, anchor ? t("Pick the last day") : t("Pick the first day")),
      low === null ? null : (0, import_react3.createElement)("span", null, (0, import_react3.createElement)("b", null, spanText(low, high)), ` · ${daysText(count)}`)
    )
  );
}
function Heat({ view, keep, paint, index }) {
  const [hover, setHover] = (0, import_react3.useState)(null);
  const today = hourMs(`${view.now.slice(0, 10)} 00`);
  const first = mondayOf(today) - (HEAT_WEEKS - 1) * 7 * DAY_MS;
  const from = dayKey(first);
  const daily = /* @__PURE__ */ new Map();
  for (const row of view.rows) {
    const day = row[HOUR].slice(0, 10);
    if (day >= from && keep(row)) daily.set(day, (daily.get(day) ?? 0) + tokensOf(row));
  }
  const most = Math.max(0, ...daily.values());
  const levels = [0.3, 0.52, 0.76, 1];
  const months = [];
  const cells = [];
  for (let week = 0; week < HEAT_WEEKS; week += 1) {
    const monday = first + week * 7 * DAY_MS;
    if (week > 0 && new Date(monday).getUTCMonth() !== new Date(monday - 7 * DAY_MS).getUTCMonth()) {
      months.push((0, import_react3.createElement)("span", { key: week, style: { gridColumn: week + 1 } }, dates({ month: "short" }).format(monday)));
    }
    for (let day = 0; day < 7; day += 1) {
      const ms = monday + day * DAY_MS;
      const value = daily.get(dayKey(ms)) ?? 0;
      const level = value > 0 ? Math.max(1, Math.ceil(4 * Math.sqrt(value / most))) : 0;
      cells.push((0, import_react3.createElement)("span", {
        key: ms,
        className: "bt-us-cell",
        style: { "--w": week },
        "data-on": hover?.ms === ms ? "" : void 0,
        "data-future": ms > today ? "" : void 0,
        "data-today": ms === today ? "" : void 0,
        onMouseEnter: ms > today ? void 0 : () => setHover({ ms, week, day })
      }, level > 0 ? (0, import_react3.createElement)("i", { style: { background: soften(paint, levels[level - 1]) } }) : null));
    }
  }
  const tipSide = hover ? {
    ...hover.week >= HEAT_WEEKS / 2 ? { right: `calc(${(HEAT_WEEKS - hover.week) / HEAT_WEEKS * 100}% + 8px)` } : { left: `calc(${(hover.week + 1) / HEAT_WEEKS * 100}% + 8px)` },
    ...hover.day < 4 ? { top: `calc(${hover.day / 7 * 100}% - 2px)` } : { top: "auto", bottom: `calc(${(6 - hover.day) / 7 * 100}% - 2px)` }
  } : null;
  const active = [...daily.values()].filter((value) => value > 0).length;
  const summary = active === 1 ? t("Active on 1 day in the last year") : t("Active on {count} days in the last year", { count: active });
  return (0, import_react3.createElement)(
    "section",
    { className: "bt-us-card bt-us-heat", style: { "--i": index } },
    (0, import_react3.createElement)("div", { className: "bt-us-card-head" }, (0, import_react3.createElement)("h3", null, t("Activity")), (0, import_react3.createElement)("span", { className: "bt-us-head-note" }, summary)),
    (0, import_react3.createElement)("div", { className: "bt-us-heat-months", "aria-hidden": true }, months),
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-heat-plot", onMouseLeave: () => setHover(null) },
      (0, import_react3.createElement)("div", { className: "bt-us-heat-grid", role: "img", "aria-label": summary }, cells),
      hover ? (0, import_react3.createElement)(
        "div",
        { className: "bt-us-tip bt-us-heat-tip", style: tipSide },
        (0, import_react3.createElement)("div", { className: "bt-us-tip-title" }, dates({ month: "long", day: "numeric", weekday: "short" }).format(hover.ms)),
        (0, import_react3.createElement)("div", { className: "bt-us-tip-total" }, t("{count} tokens", { count: full(daily.get(dayKey(hover.ms)) ?? 0) }))
      ) : null
    ),
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-heat-scale", "aria-hidden": true },
      t("Light"),
      levels.map((level) => (0, import_react3.createElement)("span", { key: level, className: "bt-us-cell" }, (0, import_react3.createElement)("i", { style: { background: soften(paint, level) } }))),
      t("Heavy")
    )
  );
}
function Skeleton() {
  return (0, import_react3.createElement)(
    "div",
    { className: "bt-us", "aria-busy": true },
    (0, import_react3.createElement)("div", { className: "bt-us-skel", style: { height: 32, width: 320, borderRadius: 999 } }),
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-sheet bt-us-skel-sheet" },
      (0, import_react3.createElement)("div", { className: "bt-us-skel", style: { height: 94 } }),
      (0, import_react3.createElement)("div", { className: "bt-us-skel", style: { height: 318 } }),
      (0, import_react3.createElement)(
        "div",
        { className: "bt-us-pair" },
        (0, import_react3.createElement)("div", { className: "bt-us-skel", style: { height: 200 } }),
        (0, import_react3.createElement)("div", { className: "bt-us-skel", style: { height: 200 } })
      )
    )
  );
}
var focusOf = (id) => typeof id !== "string" ? null : id.startsWith("model:") ? { kind: "model", key: id.slice("model:".length) } : null;
function UsagePage({ actions, focusId }) {
  const [view, setView] = (0, import_react3.useState)(null);
  const [error, setError] = (0, import_react3.useState)("");
  const [rangeId, setRangeId] = (0, import_react3.useState)("7d");
  const [span, setSpan] = (0, import_react3.useState)(null);
  const [picking, setPicking] = (0, import_react3.useState)(false);
  const tabs = (0, import_react3.useRef)(null);
  const focus = focusOf(focusId);
  (0, import_react3.useEffect)(() => {
    let stopped = false;
    let timer;
    const resized = Promise.all((document.querySelector(".bt-settings")?.getAnimations() ?? []).filter((animation) => animation.transitionProperty === "width" || animation.transitionProperty === "height").map((animation) => animation.finished.catch(() => {
    })));
    const load = async () => {
      try {
        const value = await actions.usage();
        await resized;
        if (stopped) return;
        (0, import_react3.startTransition)(() => setView(value));
        setError("");
        timer = setTimeout(load, value.scanning ? 3e3 : 2e4);
      } catch (failure) {
        if (stopped) return;
        setError(failure?.message ?? String(failure));
        timer = setTimeout(load, 1e4);
      }
    };
    void load();
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, []);
  const today = view?.now.slice(0, 10);
  const range = rangeId === "custom" && span ? { ...spanRange(span.from, span.to), ends: span.to >= today } : RANGES.find((item) => item.id === rangeId);
  const shaped = (0, import_react3.useMemo)(() => {
    if (!view) return null;
    const lifetime = /* @__PURE__ */ new Map();
    for (const row of view.rows) lifetime.set(row[MODEL], (lifetime.get(row[MODEL]) ?? 0) + tokensOf(row));
    const modelPaint = new Map([...lifetime].sort((a, b) => b[1] - a[1]).map(([model], rank) => [model, `var(--bt-ink-${MODEL_INKS[rank % MODEL_INKS.length]})`]));
    const models2 = view.models.map((model, at) => {
      const name = model.name || model.model || t("Unknown model");
      const paint = modelPaint.get(at) ?? "var(--bt-us-rest)";
      return { kind: "model", name, sub: model.providerName ?? model.provider, paint, glyph: (size) => (0, import_react3.createElement)(ModelGlyph, { name, paint, size }) };
    });
    const modelAt2 = focus?.kind === "model" ? view.models.findIndex((model) => model.key === focus.key) : -1;
    const all2 = summarize(view, range, void 0, (row) => `m${row[MODEL]}`);
    const keep2 = modelAt2 >= 0 ? (row) => row[MODEL] === modelAt2 : () => true;
    const face2 = modelAt2 >= 0 ? models2[modelAt2] : null;
    const part2 = face2 ? summarize(view, range, keep2) : all2;
    const activeDays2 = /* @__PURE__ */ new Set();
    let first = view.now;
    for (const row of view.rows) {
      if (row[HOUR] < first) first = row[HOUR];
      if (keep2(row) && tokensOf(row) > 0) activeDays2.add(row[HOUR].slice(0, 10));
    }
    const oldest2 = Math.min(monthOf(hourMs(first)), addMonths(monthOf(hourMs(view.now)), -12));
    const ranked2 = (map) => [...map].filter(([, sum]) => sum.total > 0).sort((a, b) => b[1].total - a[1].total);
    let series2;
    if (face2) {
      series2 = [{ key: "all", name: face2.name, fill: soften(face2.paint) }];
    } else {
      const used = ranked2(all2.models);
      series2 = used.slice(0, TOP_SERIES).map(([at]) => ({ key: `m${at}`, name: models2[at].name, paint: models2[at].paint, pick: { kind: "model", key: view.models[at].key } }));
      if (used.length > TOP_SERIES) series2.push({ key: "more", name: t("More models"), paint: "var(--bt-us-more)" });
      const repeats = /* @__PURE__ */ new Map();
      for (const entry of series2) {
        const seen = repeats.get(entry.paint) ?? 0;
        repeats.set(entry.paint, seen + 1);
        entry.fill = soften(entry.paint, [1, 0.6, 0.36][seen % 3]);
      }
    }
    const tipSeries2 = face2 ? PARTS.map(([key, strength]) => ({ key, name: partLabel(key), fill: soften(face2.paint, strength) })) : series2;
    const fillOf2 = new Map(series2.map((entry) => [entry.key, entry.fill]));
    const shownKeys = new Set(series2.map((entry) => entry.key));
    const columns2 = part2.buckets.map((bucket) => {
      const parts = face2 ? [["all", bucket.sum.total]] : series2.map((entry) => [entry.key, entry.key === "more" ? [...bucket.stacks].filter(([key]) => key !== "rest" && !shownKeys.has(key)).reduce((sum, [, value]) => sum + value, 0) : bucket.stacks.get(entry.key) ?? 0]);
      const tip = face2 ? PARTS.map(([key]) => [key, bucket.sum[key]]) : parts;
      return { key: bucket.key, tick: tickOf(range, bucket), title: titleOf(range, bucket), total: bucket.sum.total, parts, tip };
    });
    return { models: models2, modelAt: modelAt2, face: face2, keep: keep2, all: all2, part: part2, series: series2, tipSeries: tipSeries2, fillOf: fillOf2, columns: columns2, ranked: ranked2, activeDays: activeDays2, oldest: oldest2 };
  }, [view, rangeId, span, focusId]);
  const root = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    root.current?.closest(".bt-settings-scroll")?.scrollTo?.({ top: 0 });
  }, [focusId]);
  if (!view) {
    return error ? (0, import_react3.createElement)("div", { className: "bt-error", role: "alert", style: { padding: 0 } }, error) : (0, import_react3.createElement)(Skeleton);
  }
  if (view.rows.length === 0) {
    return (0, import_react3.createElement)(
      "div",
      { className: "bt-us" },
      (0, import_react3.createElement)(
        "div",
        { className: "bt-us-empty" },
        (0, import_react3.createElement)(ModelGlyph, { name: "DS", paint: "var(--bt-accent)", size: 56 }),
        (0, import_react3.createElement)("b", null, view.scanning ? t("Reading your chats…") : t("No usage yet.")),
        (0, import_react3.createElement)("span", null, t("Token usage shows up here after a model is called."))
      )
    );
  }
  const { models, modelAt, face, keep, all, part, series, tipSeries, fillOf, columns, ranked, activeDays, oldest } = shaped;
  const pick = (next) => actions.openUsage(`${next.kind}:${next.key}`);
  const chooseRange = (id) => {
    if (id !== "custom") {
      setRangeId(id);
      setPicking(false);
      return;
    }
    if (span) setRangeId("custom");
    setPicking((open) => !open);
  };
  const pickSpan = (from, to) => {
    setSpan({ from, to });
    setRangeId("custom");
    setPicking(false);
  };
  const rangeOptions = [
    ...RANGES.map((item) => [item.id, rangeLabel(item.id)]),
    ["custom", rangeId === "custom" && span ? spanText(span.from, span.to) : t("Custom"), CalendarIcon]
  ];
  const whole = part.total.total;
  const modelRow = ([at, sum], index) => (0, import_react3.createElement)(Row, {
    key: `m${at}`,
    kind: "model",
    glyph: models[at].glyph(32),
    name: models[at].name,
    sub: models[at].sub,
    sum,
    whole,
    index,
    fill: face ? soften(face.paint, 0.8) : fillOf.get(`m${at}`) ?? soften(models[at].paint),
    onClick: () => pick({ kind: "model", key: view.models[at].key })
  });
  const nothing = (0, import_react3.createElement)("div", { className: "bt-us-none" }, t("Nothing in this range."));
  let body;
  if (face) {
    const kinds = ranked(part.kinds);
    const usedModels = ranked(part.models);
    body = [
      (0, import_react3.createElement)(Profile, { key: "profile", face, range, share: all.total.total > 0 ? whole / all.total.total : 0 }),
      (0, import_react3.createElement)(
        "div",
        { key: "sheet", className: "bt-us-sheet" },
        (0, import_react3.createElement)(Stats, { key: "stats", range, total: part.total, previous: part.previous }),
        (0, import_react3.createElement)(Chart, { key: "chart", range, columns, series, tipSeries, onPick: pick }),
        (0, import_react3.createElement)(
          "div",
          { key: "pair", className: "bt-us-pair" },
          (0, import_react3.createElement)(ListCard, { title: t("Models"), count: usedModels.length, index: 2 }, usedModels.length > 0 ? usedModels.map(modelRow) : nothing),
          (0, import_react3.createElement)(
            ListCard,
            { title: t("What for"), index: 3 },
            kinds.length > 0 ? kinds.map(([at, sum], index) => (0, import_react3.createElement)(Row, { key: at, name: kindLabel(view.kinds[at]), sum, whole, index, fill: soften(face.paint, 0.8) })) : nothing
          )
        ),
        (0, import_react3.createElement)(Heat, { key: "heat", view, keep, paint: face.paint, index: 4 })
      )
    ];
  } else {
    const usedModels = ranked(all.models);
    body = [
      (0, import_react3.createElement)(
        "div",
        { key: "sheet", className: "bt-us-sheet" },
        (0, import_react3.createElement)(Stats, { key: "stats", range, total: all.total, previous: all.previous }),
        (0, import_react3.createElement)(Chart, { key: "chart", range, columns, series, tipSeries, onPick: pick }),
        (0, import_react3.createElement)(ListCard, { key: "models", title: t("Models"), count: usedModels.length, index: 2 }, usedModels.length > 0 ? usedModels.map(modelRow) : nothing),
        (0, import_react3.createElement)(Heat, { key: "heat", view, keep, paint: "var(--bt-accent)", index: 4 })
      )
    ];
  }
  return (0, import_react3.createElement)(
    "div",
    { ref: root, className: "bt-us", key: focusId ?? "all" },
    (0, import_react3.createElement)(
      "div",
      { className: "bt-us-top" },
      (0, import_react3.createElement)(Tabs, { label: t("Time range"), value: rangeId, onChange: chooseRange, options: rangeOptions, boxRef: tabs }),
      view.scanning ? (0, import_react3.createElement)("span", { className: "bt-us-note", role: "status" }, t("Still reading older chats; totals may grow.")) : null,
      picking ? (0, import_react3.createElement)(SpanPicker, { span, today, oldest, active: activeDays, near: tabs, onPick: pickSpan, onClose: () => setPicking(false) }) : null
    ),
    error ? (0, import_react3.createElement)("div", { className: "bt-error", role: "alert", style: { padding: 0 } }, error) : null,
    body
  );
}
var USAGE_CSS = `
.bt-us{--bt-us-ease:cubic-bezier(.22,1,.36,1);--bt-us-rest:color-mix(in srgb,var(--bt-ink) 30%,var(--bt-card));--bt-us-more:color-mix(in srgb,var(--bt-ink) 16%,var(--bt-card));display:flex;flex-direction:column;gap:14px;padding-bottom:4px}
.bt-us-top{position:relative;z-index:4;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.bt-us-tabs{position:relative;display:inline-flex;flex:none;padding:3px;border-radius:999px;background:var(--bt-hover)}
.bt-us-tabs button{position:relative;z-index:1;display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 12px;border:0;border-radius:999px;background:none;color:var(--bt-ink-2);font:inherit;font-size:12px;line-height:26px;white-space:nowrap;cursor:pointer;transition:color .15s ease}
.bt-us-tabs button svg{flex:none;width:13px;height:13px;margin-left:-2px}
.bt-us-pick{position:absolute;top:calc(100% + 8px);left:0;max-width:100%;box-sizing:border-box;padding:14px 16px 12px;border-radius:18px;border:.5px solid var(--bt-line-2);background:var(--bt-card);box-shadow:0 22px 50px -18px rgba(0,0,0,.32),0 2px 8px rgba(0,0,0,.05);transform-origin:24px 0;animation:bt-us-drop .2s var(--bt-us-ease)}
.bt-us-pick-quick{display:flex;gap:6px;margin-bottom:12px}
.bt-us-pick-quick button{height:26px;padding:0 11px;border:0;border-radius:999px;background:var(--bt-hover);color:var(--bt-ink-2);font:inherit;font-size:12px;cursor:pointer;transition:background-color .12s ease,color .12s ease}
.bt-us-pick-quick button:hover{background:var(--bt-active);color:var(--bt-ink)}
.bt-us-pick-quick button[aria-pressed=true]{background:color-mix(in srgb,var(--bt-accent) 14%,transparent);color:var(--bt-accent)}
.bt-us-pick-months{display:flex;flex-wrap:wrap;gap:8px 28px}
.bt-us-month{width:252px;animation:bt-us-fade .22s ease}
.bt-us-month-head{position:relative;display:flex;align-items:center;justify-content:center;height:28px;margin-bottom:4px;font-size:13px;line-height:18px;font-weight:600}
.bt-us-month-nav{position:absolute;top:0;width:28px;height:28px;padding:0;border:0;border-radius:9px;background:none;color:var(--bt-ink-2);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background-color .12s ease}
.bt-us-month-nav[data-side=left]{left:0}
.bt-us-month-nav[data-side=right]{right:0}
.bt-us-month-nav:hover:not(:disabled){background:var(--bt-hover);color:var(--bt-ink)}
.bt-us-month-nav:disabled{opacity:.3;cursor:default}
.bt-us-weekdays,.bt-us-days{display:grid;grid-template-columns:repeat(7,36px)}
.bt-us-weekdays span{height:24px;font-size:11px;line-height:24px;text-align:center;color:var(--bt-ink-3)}
.bt-us-day{position:relative;height:36px;padding:0;border:0;background:none;color:var(--bt-ink);font:inherit;font-size:12px;font-variant-numeric:tabular-nums;cursor:pointer}
.bt-us-day::before{content:'';position:absolute;top:4px;bottom:4px;left:0;right:0;transition:background-color .12s ease}
.bt-us-day>b{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;font-weight:400;transition:background-color .12s ease,color .12s ease}
.bt-us-day:hover:not(:disabled)>b{background:var(--bt-hover)}
.bt-us-day[data-today]>b{color:var(--bt-accent);font-weight:600}
.bt-us-day[data-has]::after{content:'';position:absolute;z-index:2;left:50%;bottom:6px;width:3px;height:3px;margin-left:-1.5px;border-radius:50%;background:var(--bt-ink-3)}
.bt-us-day[data-in]::before{background:color-mix(in srgb,var(--bt-accent) 13%,transparent)}
.bt-us-day[data-in][data-l]::before{left:4px;border-radius:14px 0 0 14px}
.bt-us-day[data-in][data-r]::before{right:4px;border-radius:0 14px 14px 0}
.bt-us-day[data-in][data-l][data-r]::before{border-radius:14px}
.bt-us-day[data-in][data-start]::before{left:50%;border-radius:0}
.bt-us-day[data-in][data-end]::before{right:50%;border-radius:0}
.bt-us-day[data-in][data-start][data-r]::before,.bt-us-day[data-in][data-end][data-l]::before,.bt-us-day[data-in][data-start][data-end]::before{display:none}
.bt-us-day[data-start]>b,.bt-us-day[data-end]>b,.bt-us-day[data-start]:hover>b,.bt-us-day[data-end]:hover>b{background:var(--bt-accent);color:var(--bt-accent-ink,#fff);font-weight:600}
.bt-us-day[data-start][data-has]::after,.bt-us-day[data-end][data-has]::after{background:color-mix(in srgb,var(--bt-accent-ink,#fff) 75%,transparent)}
.bt-us-day:disabled{color:var(--bt-ink-3);opacity:.45;cursor:default}
.bt-us-pick-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:8px;padding-top:10px;border-top:1px solid var(--bt-line);font-size:12px;line-height:16px;color:var(--bt-ink-3);white-space:nowrap}
.bt-us-pick-foot b{color:var(--bt-ink);font-weight:500}
.bt-us-tabs button:hover,.bt-us-tabs button[aria-pressed=true]{color:var(--bt-ink)}
.bt-us-tabs:not([data-glide]) button[aria-pressed=true]{background:var(--bt-card)}
.bt-us-tabs>.bt-thumb{top:3px;bottom:3px;border-radius:999px;background:var(--bt-card);box-shadow:0 1px 3px rgba(0,0,0,.08),0 0 0 .5px var(--bt-line-2)}
.bt-us-note{display:inline-flex;align-items:center;gap:8px;font-size:12px;line-height:16px;color:var(--bt-ink-3)}
.bt-us-note::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--bt-accent);animation:bt-us-pulse 1.4s ease-in-out infinite}
.bt-us-sheet{display:flex;flex-direction:column;gap:4px}
.bt-us-sheet>.bt-us-stats,.bt-us-sheet>.bt-us-card,.bt-us-sheet>.bt-us-pair>.bt-us-card{border-radius:0}
.bt-us-sheet>:first-child{border-radius:16px 16px 0 0}
.bt-us-sheet>:last-child{border-radius:0 0 16px 16px}
.bt-us-stats{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;border-radius:16px;border:1px solid var(--bt-line);background:var(--bt-card);animation:bt-us-in .45s var(--bt-us-ease) backwards}
.bt-us-stat{display:flex;flex-direction:column;justify-content:flex-end;gap:6px;min-width:0;padding:16px 18px}
.bt-us-stat+.bt-us-stat{border-left:1px solid var(--bt-line)}
.bt-us-stat-label{overflow:hidden;font-size:12px;line-height:16px;color:var(--bt-ink-3);white-space:nowrap;text-overflow:ellipsis}
.bt-us-stat-value{display:flex;align-items:baseline;gap:6px;min-width:0;font-size:22px;line-height:28px;font-weight:600;letter-spacing:-.01em;font-variant-numeric:tabular-nums;white-space:nowrap}
.bt-us-stat-main .bt-us-stat-value{font-size:34px;line-height:40px;letter-spacing:-.025em}
.bt-us-stat-value small{font-size:13px;font-weight:400;letter-spacing:0;color:var(--bt-ink-3)}
.bt-us-delta{align-self:center;margin-left:2px;padding:0 8px;border-radius:999px;background:var(--bt-tag-bg);color:var(--bt-ink-2);font-size:11px;line-height:20px;font-weight:500;letter-spacing:0}
.bt-us-card{display:flex;flex-direction:column;gap:12px;min-width:0;padding:14px 18px 16px;border-radius:16px;border:1px solid var(--bt-line);background:var(--bt-card);animation:bt-us-in .45s var(--bt-us-ease) backwards;animation-delay:calc(var(--i,0) * 45ms)}
.bt-us-card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:32px}
.bt-us-card-head h3{display:flex;align-items:baseline;gap:8px;min-width:0;margin:0;font-size:13px;line-height:18px;font-weight:600}
.bt-us-card-head h3 span,.bt-us-head-note{font-size:12px;font-weight:400;color:var(--bt-ink-3)}
.bt-us-chart-body{display:flex;flex-direction:column;gap:8px;padding-top:6px}
.bt-us-plot{position:relative;height:200px;margin-left:40px}
.bt-us-grid{position:absolute;left:0;right:0;border-top:1px dashed var(--bt-line-2);pointer-events:none}
.bt-us-grid.bt-us-base{border-top:1px solid var(--bt-line-2)}
.bt-us-grid span{position:absolute;right:calc(100% + 8px);top:-8px;font-size:10px;line-height:16px;color:var(--bt-ink-3);font-variant-numeric:tabular-nums;white-space:nowrap}
.bt-us-cols{position:absolute;inset:0;display:flex;align-items:flex-end}
.bt-us-col{position:relative;flex:1 1 0;min-width:0;height:100%;display:flex;align-items:flex-end;justify-content:center}
.bt-us-stack{display:flex;flex-direction:column-reverse;gap:2px;width:56%;min-width:4px;max-width:28px;transform-origin:50% 100%;animation:bt-us-grow .6s var(--bt-us-ease) backwards;animation-delay:calc(var(--i,0) * 14ms);transition:height .45s var(--bt-us-ease),opacity .18s ease}
.bt-us-stack>i{flex:1 1 0;min-height:2px;border-radius:5px;transition:flex-grow .45s var(--bt-us-ease)}
.bt-us-plot[data-hover] .bt-us-col:not([data-on]) .bt-us-stack{opacity:.3}
.bt-us-stub{width:4px;height:4px;margin-bottom:-2px;border-radius:50%;background:var(--bt-line-2)}
.bt-us-ticks{display:flex;margin-left:40px;font-size:11px;line-height:14px;color:var(--bt-ink-3);font-variant-numeric:tabular-nums}
.bt-us-ticks span{flex:1 1 0;min-width:0;text-align:center;white-space:nowrap}
.bt-us-ticks span[data-now]{color:var(--bt-ink);font-weight:500}
.bt-us-tip{position:absolute;top:6px;z-index:3;min-width:160px;max-width:240px;padding:10px 12px;border-radius:12px;border:.5px solid var(--bt-line-2);background:color-mix(in srgb,var(--bt-card) 90%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 14px 34px -12px rgba(0,0,0,.28);font-size:12px;line-height:16px;pointer-events:none;animation:bt-us-pop .16s var(--bt-us-ease)}
.bt-us-tip-title{color:var(--bt-ink-3)}
.bt-us-tip-total{margin:2px 0 8px;font-size:15px;line-height:20px;font-weight:600;font-variant-numeric:tabular-nums}
.bt-us-tip-total:last-child{margin-bottom:0}
.bt-us-tip-row{display:flex;align-items:center;gap:8px;color:var(--bt-ink-2)}
.bt-us-tip-row+.bt-us-tip-row{margin-top:5px}
.bt-us-tip-row span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bt-us-tip-row b{font-weight:500;color:var(--bt-ink);font-variant-numeric:tabular-nums}
.bt-us-legend{display:flex;flex-wrap:wrap;gap:6px}
.bt-us-key{display:inline-flex;align-items:center;gap:6px;min-width:0;height:24px;padding:0 10px 0 8px;border:0;border-radius:999px;background:var(--bt-hover);color:var(--bt-ink-2);font:inherit;font-size:12px;line-height:24px}
button.bt-us-key{cursor:pointer;transition:background-color .12s ease,color .12s ease}
button.bt-us-key:hover{background:var(--bt-active);color:var(--bt-ink)}
.bt-us-dot{flex:none;width:8px;height:8px;border-radius:50%}
.bt-us-pair{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:4px}
.bt-us-rows{display:flex;flex-direction:column;margin:0 -8px}
.bt-us-row{display:flex;align-items:center;gap:12px;width:100%;box-sizing:border-box;padding:8px;border:0;border-radius:12px;background:none;color:var(--bt-ink);font:inherit;text-align:left;animation:bt-us-in .4s var(--bt-us-ease) backwards;animation-delay:calc(var(--i,0) * 35ms + 90ms)}
button.bt-us-row{cursor:pointer;transition:background-color .12s ease}
button.bt-us-row:hover{background:var(--bt-hover)}
.bt-us-row-glyph{flex:none;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px}
.bt-us-row-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:7px}
.bt-us-row-line{display:flex;align-items:baseline;gap:8px;min-width:0;font-size:13px;line-height:18px}
.bt-us-row-name{flex:0 1 auto;min-width:0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}
.bt-us-row-sub{flex:0 1 auto;min-width:0;overflow:hidden;font-size:12px;color:var(--bt-ink-3);text-overflow:ellipsis;white-space:nowrap}
.bt-us-track{display:block;height:4px;border-radius:999px;background:var(--bt-hover);overflow:hidden}
.bt-us-track>span{display:block;height:100%;border-radius:inherit;transform-origin:0 50%;animation:bt-us-fill .7s var(--bt-us-ease) backwards;animation-delay:calc(var(--i,0) * 35ms + 140ms);transition:width .45s var(--bt-us-ease)}
.bt-us-row-num{flex:none;display:flex;flex-direction:column;align-items:flex-end;gap:1px;min-width:52px;font-variant-numeric:tabular-nums}
.bt-us-row-num b{font-size:13px;line-height:18px;font-weight:600}
.bt-us-row-num small{font-size:11px;line-height:14px;color:var(--bt-ink-3)}
.bt-us-split{height:1px;margin:6px 8px;background:var(--bt-line)}
.bt-us-none{padding:18px 8px;font-size:12px;color:var(--bt-ink-3);text-align:center}
.bt-us-glyph{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:var(--bt-hover);color:var(--bt-ink-2)}
.bt-us-model{display:inline-flex;align-items:center;justify-content:center;border-radius:30%;font-weight:600;line-height:1}
.bt-us-profile{display:flex;align-items:center;gap:20px;padding:6px 4px 2px;animation:bt-us-in .45s var(--bt-us-ease) backwards}
.bt-us-ring{position:relative;flex:none;width:96px;height:96px}
.bt-us-ring>svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.bt-us-ring>svg circle{fill:none;stroke-width:4}
.bt-us-ring-track{stroke:var(--bt-line)}
.bt-us-ring-arc{stroke-linecap:round;transition:stroke-dasharray .6s var(--bt-us-ease);animation:bt-us-ring 1s var(--bt-us-ease) .1s backwards}
.bt-us-ring-face{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.bt-us-profile-copy{display:flex;flex-direction:column;gap:3px;min-width:0}
.bt-us-profile-copy h3{margin:0;overflow:hidden;font-size:22px;line-height:28px;font-weight:600;letter-spacing:-.01em;text-overflow:ellipsis;white-space:nowrap}
.bt-us-profile-sub{font-size:13px;line-height:18px;color:var(--bt-ink-2)}
.bt-us-profile-share{font-size:12px;line-height:16px;color:var(--bt-ink-3)}
.bt-us-heat{gap:8px}
.bt-us-heat-months,.bt-us-heat-grid{display:grid;grid-template-columns:repeat(${HEAT_WEEKS},1fr);gap:3px}
.bt-us-heat-months{height:14px;font-size:10px;line-height:14px;color:var(--bt-ink-3)}
.bt-us-heat-months span{white-space:nowrap}
.bt-us-heat-plot{position:relative}
.bt-us-heat-grid{grid-template-rows:repeat(7,auto);grid-auto-flow:column}
.bt-us-heat-grid .bt-us-cell[data-on]{outline:1.5px solid var(--bt-ink-2);outline-offset:1px}
.bt-us-heat-tip{min-width:0;white-space:nowrap}
.bt-us-cell{position:relative;aspect-ratio:1;border-radius:3px;background:var(--bt-hover);overflow:hidden}
.bt-us-heat-grid .bt-us-cell{animation:bt-us-cell .5s var(--bt-us-ease) backwards;animation-delay:calc(var(--w,0) * 7ms + 120ms)}
.bt-us-cell>i{position:absolute;inset:0}
.bt-us-cell[data-today]{outline:1.5px solid var(--bt-ink-3);outline-offset:1px}
.bt-us-cell[data-future]{visibility:hidden}
.bt-us-heat-scale{display:flex;align-items:center;justify-content:flex-end;gap:4px;font-size:11px;line-height:14px;color:var(--bt-ink-3)}
.bt-us-heat-scale .bt-us-cell{width:10px}
.bt-us-skel{border-radius:16px;background:linear-gradient(90deg,var(--bt-hover) 0%,var(--bt-active) 50%,var(--bt-hover) 100%);background-size:200% 100%;animation:bt-us-shine 1.4s ease-in-out infinite}
.bt-us-skel-sheet>.bt-us-skel:first-child{border-radius:16px 16px 0 0}
.bt-us-skel-sheet>.bt-us-skel:not(:first-child){border-radius:0}
.bt-us-skel-sheet>.bt-us-pair>.bt-us-skel:first-child{border-radius:0 0 0 16px}
.bt-us-skel-sheet>.bt-us-pair>.bt-us-skel:last-child{border-radius:0 0 16px 0}
.bt-us-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:72px 16px;text-align:center;font-size:13px;line-height:18px;color:var(--bt-ink-3)}
.bt-us-empty b{margin-top:6px;font-size:15px;font-weight:600;color:var(--bt-ink)}
@keyframes bt-us-in{from{opacity:0;transform:translateY(6px)}}
@keyframes bt-us-grow{from{transform:scaleY(0)}}
@keyframes bt-us-fill{from{transform:scaleX(0)}}
@keyframes bt-us-pop{from{opacity:0;transform:translateY(3px) scale(.97)}}
@keyframes bt-us-drop{from{opacity:0;transform:translateY(-4px) scale(.96)}}
@keyframes bt-us-fade{from{opacity:0}}
@keyframes bt-us-cell{from{opacity:0;transform:scale(.5)}}
@keyframes bt-us-ring{from{stroke-dasharray:0 ${Math.ceil(RING)}}}
@keyframes bt-us-pulse{50%{opacity:.25}}
@keyframes bt-us-shine{from{background-position:200% 0}to{background-position:-200% 0}}
@media (prefers-reduced-motion:reduce){.bt-us *,.bt-us *::before{animation:none!important;transition:none!important}}
`;

// src/client/overlay-hooks.js
var import_react4 = require("react");
var escapeLayers = [];
var onEscapeKey = (event) => {
  if (event.key === "Escape") escapeLayers.at(-1)?.current();
};
function useEscape(onClose) {
  const ref = (0, import_react4.useRef)(onClose);
  ref.current = onClose;
  (0, import_react4.useEffect)(() => {
    if (escapeLayers.length === 0) window.addEventListener("keydown", onEscapeKey);
    escapeLayers.push(ref);
    return () => {
      escapeLayers.splice(escapeLayers.indexOf(ref), 1);
      if (escapeLayers.length === 0) window.removeEventListener("keydown", onEscapeKey);
    };
  }, []);
}
function usePaneLeft() {
  const [paneLeft, setPaneLeft] = (0, import_react4.useState)(280);
  (0, import_react4.useLayoutEffect)(() => {
    const column = document.querySelector('[class*="_footArea"]')?.parentElement;
    if (column) setPaneLeft(Math.round(column.getBoundingClientRect().right));
  }, []);
  return paneLeft;
}

// src/client/usage-dialog.js
var import_react5 = require("react");
var import_react_dom = require("react-dom");
var PageBoundary = class extends import_react5.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) return (0, import_react5.createElement)("div", { className: "btu-error", role: "alert" }, String(error?.message ?? error));
    return this.props.children;
  }
};
var DIALOG_EXIT_MS = 160;
var focusOf2 = (id) => typeof id !== "string" ? null : id.startsWith("model:") ? { kind: "model", key: id.slice("model:".length) } : null;
var focusLabel = (face) => face.key;
function UsageDialog({ focusId, actions, leaving = false }) {
  const close = (0, import_react5.useCallback)(() => actions.closeUsage(), [actions]);
  useEscape(close);
  const face = focusOf2(focusId);
  const label = face ? focusLabel(face) : t("Usage overview");
  const root = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    root.current?.querySelector(".btu-scroll")?.scrollTo?.({ top: 0 });
  }, [focusId]);
  return (0, import_react5.createElement)(
    "div",
    { className: "btu-layer", "data-leaving": leaving || void 0 },
    (0, import_react5.createElement)("div", { className: "btu-scrim", onMouseDown: close }),
    (0, import_react5.createElement)(
      "div",
      { ref: root, className: "btu-dialog", role: "dialog", "aria-modal": true, "aria-label": t("Usage overview") },
      (0, import_react5.createElement)(
        "div",
        { className: "btu-head" },
        face ? (0, import_react5.createElement)("button", { type: "button", className: "bt-icon-btn", "aria-label": t("All usage"), title: t("All usage"), onClick: () => actions.openUsage() }, (0, import_react5.createElement)(ChevronLeftIcon)) : null,
        (0, import_react5.createElement)("h2", { key: focusId ?? "all" }, label)
      ),
      (0, import_react5.createElement)(
        "div",
        { className: "btu-scroll" },
        (0, import_react5.createElement)(PageBoundary, null, (0, import_react5.createElement)(UsagePage, { actions, focusId }))
      ),
      (0, import_react5.createElement)("button", { type: "button", className: "btu-close", "aria-label": t("Close"), onClick: close }, (0, import_react5.createElement)(CloseIcon))
    )
  );
}
function UsageOverlay({ useUi, actions }) {
  const ui = useUi((value) => value);
  const open = ui.usage ? { focusId: ui.usage.focusId ?? null } : null;
  const [kept, setKept] = (0, import_react5.useState)(open);
  (0, import_react5.useEffect)(() => {
    if (open) {
      setKept(open);
      return void 0;
    }
    const timer = setTimeout(() => setKept(null), DIALOG_EXIT_MS);
    return () => clearTimeout(timer);
  }, [ui.usage]);
  const shown = open ?? kept;
  return (0, import_react5.createElement)(
    "span",
    { style: { display: "contents" } },
    shown ? (0, import_react_dom.createPortal)((0, import_react5.createElement)(UsageDialog, { focusId: shown.focusId, actions, leaving: open === null }), document.body) : null
  );
}
function UsageFooterButton({ actions }) {
  return (0, import_react5.createElement)(
    "button",
    { type: "button", className: "btu-open", onClick: () => actions.openUsage(), "aria-label": t("Usage"), title: t("Usage") },
    (0, import_react5.createElement)(GaugeIcon),
    (0, import_react5.createElement)("span", null, t("Usage"))
  );
}

// src/client/index.js
var inject = ["slots"];
var MARK_CSS = mark_default;
var FOOTER_CSS = `
.btu-open{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px;border:0;border-radius:999px;background:none;color:var(--bt-ink-2);font:inherit;font-size:13px;line-height:20px;cursor:pointer;transition:background-color .12s ease,color .12s ease}
.btu-open:hover{background:var(--bt-hover);color:var(--bt-ink)}
.btu-open svg{flex:none}
`;
function apply(ctx, config) {
  let locale;
  try {
    locale = ctx.get("locale");
  } catch {
    locale = void 0;
  }
  ctx.effect(() => installLocale(locale), "ds-usage: interface copy");
  let wanted = "zh";
  try {
    wanted = String(localStorage.getItem("ds-usage.language") ?? config?.language ?? "zh").trim().toLowerCase();
  } catch {
  }
  installForcedLanguage(wanted === "auto" ? null : wanted);
  const ui = createSource({ usage: null });
  const actions = {
    usage: () => usageApi.usage(),
    openUsage: (focusId = null) => ui.set((state) => ({ ...state, usage: { focusId } })),
    closeUsage: () => ui.set((state) => state.usage ? { ...state, usage: null } : state)
  };
  const installStyles = () => {
    const sheet = document.createElement("style");
    sheet.dataset.dsUsage = "base";
    sheet.textContent = BASE_CSS + MARK_CSS;
    document.head.appendChild(sheet);
    const usageSheet = document.createElement("style");
    usageSheet.dataset.dsUsage = "page";
    usageSheet.textContent = USAGE_CSS + DIALOG_CSS + FOOTER_CSS;
    document.head.appendChild(usageSheet);
    return () => {
      sheet.remove();
      usageSheet.remove();
    };
  };
  ctx.effect(() => installStyles(), "ds-usage: styles");
  const face = () => ({ actions, hooks: { ui } });
  const shadow = (name, options, component) => ctx.slots.inject(name, () => ctx.slots.register({ name, ...options, inject: face }, component));
  ctx.effect(() => [
    // The footer button beside the sidebar's own actions.
    shadow("sidebar.footer.action", { id: "ds-usage", order: -50 }, UsageFooterButton),
    // The dialog itself, above the app.
    shadow("shell.overlay", { id: "ds-usage", order: 70 }, UsageOverlay)
  ], "ds-usage: slots");
}
return Object.defineProperty({ ...module.exports }, Symbol.toStringTag, { value: 'Module' })
  },
})
