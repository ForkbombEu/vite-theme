import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const read = (path) => readFileSync(new URL(path, root), 'utf8')
const installer = fileURLToPath(new URL('../install.sh', import.meta.url))

test('package exposes narrow Vite and VitePress entry points', () => {
  const pkg = JSON.parse(read('package.json'))

  assert.equal(pkg.name, '@forkbomb/vite-theme')
  assert.equal(pkg.exports['./style.css'], './src/theme/index.css')
  assert.equal(pkg.exports['./tokens.css'], './src/theme/tokens.css')
  assert.equal(pkg.exports['./vitepress'], './src/vitepress/index.ts')
  assert.equal(pkg.sideEffects[0], '**/*.css')
})

test('tokens preserve the observed Forkbomb palette and typography', () => {
  const tokens = read('src/theme/tokens.css')

  for (const expected of [
    '--fb-color-navy: #050d30',
    '--fb-color-blue: #0f237c',
    '--fb-color-mint: #2dd8a3',
    "--fb-font-display: 'Barlow Semi Condensed'",
    "--fb-font-body: 'Public Sans'",
  ]) {
    assert.match(tokens, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('VitePress extension preserves DefaultTheme and registers the section component', () => {
  const source = read('src/vitepress/index.ts')

  assert.match(source, /vitepress\/theme-without-fonts/)
  assert.match(source, /extends: DefaultTheme/)
  assert.match(source, /nav-bar-title-before/)
  assert.match(source, /layout-bottom/)
  assert.match(source, /app\.component\('ForkbombSection'/)
})

test('responsive and state styles preserve accessible square controls', () => {
  const html = read('index.html')
  const components = read('src/theme/components.css')
  const vitepress = read('src/vitepress/style.css')

  assert.match(html, /<details class="fb-nav__menu">/)
  assert.match(html, /Toggle primary navigation/)
  assert.match(components, /details\[open\] summary \{ color: var\(--fb-color-navy\); \}/)
  assert.match(vitepress, /\.VPHomeHero \.VPButton\.VPButton/)
  assert.match(vitepress, /\.VPFeature\.VPFeature/)
})

test('installer preserves existing files unless force is explicit', () => {
  const target = mkdtempSync(join(tmpdir(), 'forkbomb-theme-'))
  const configDir = join(target, '.vitepress')
  mkdirSync(configDir, { recursive: true })
  writeFileSync(join(configDir, 'config.mts'), 'keep-me\n')

  execFileSync(installer, [target], { stdio: 'pipe' })
  assert.equal(readFileSync(join(configDir, 'config.mts'), 'utf8'), 'keep-me\n')
  assert.match(readFileSync(join(configDir, 'theme/index.ts'), 'utf8'), /@forkbomb\/vite-theme\/vitepress/)

  execFileSync(installer, ['--force', target], { stdio: 'pipe' })
  assert.match(readFileSync(join(configDir, 'config.mts'), 'utf8'), /defineConfigWithTheme/)
})

test('installer dry-run produces no target directory', () => {
  const parent = mkdtempSync(join(tmpdir(), 'forkbomb-theme-dry-'))
  const target = join(parent, 'docs')
  const output = execFileSync(installer, ['--dry-run', target], { encoding: 'utf8' })

  assert.match(output, /would write/)
  assert.throws(() => readFileSync(join(target, 'package.json')))
})
