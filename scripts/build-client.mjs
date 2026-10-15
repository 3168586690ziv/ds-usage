// Builds client.js, the browser half, from the modules in src/client.
//
//   node scripts/build-client.mjs           writes client.js
//
// dsh loads it as a classic script, as ds-bot's own build does: `require`
// resolves the shell-seeded platform modules (react, react-dom), which stay
// external.
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const PLUGIN = dirname(dirname(fileURLToPath(import.meta.url)))
const OUTPUT = join(PLUGIN, 'client.js')
const PLATFORM_MODULES = ['react', 'react-dom']

export async function bundleClient() {
  const result = await build({
    absWorkingDir: PLUGIN,
    entryPoints: [join(PLUGIN, 'src/client/index.js')],
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: 'es2022',
    external: PLATFORM_MODULES,
    // Every source declaration ships, used or not, as in ds-bot's own bundle.
    treeShaking: false,
    // Readable for debugging in the browser: no minification, Chinese stays text.
    charset: 'utf8',
    loader: { '.css': 'text' },
    write: false,
    logLevel: 'silent',
  })
  if (result.warnings.length > 0) throw new Error(`esbuild warnings:\n${result.warnings.map(warning => warning.text).join('\n')}`)
  return [
    '// Generated from src/client by `npm run build` (scripts/build-client.mjs). Do not edit by hand.',
    'window.__ModuleLoader__.load({',
    '  id: \'ds-usage\',',
    '  factory: (require) => {',
    'const module = { exports: {} }',
    result.outputFiles[0].text.trimEnd(),
    'return Object.defineProperty({ ...module.exports }, Symbol.toStringTag, { value: \'Module\' })',
    '  },',
    '})',
    '',
  ].join('\n')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const next = await bundleClient()
  writeFileSync(OUTPUT, next, 'utf8')
  console.log(`wrote ${OUTPUT} (${next.length} bytes)`)
}
