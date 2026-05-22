#!/usr/bin/env node
/**
 * Take a screenshot of a running local dev server for visual QA.
 *
 * Usage:
 *   node scripts/screenshot.mjs /components/italian-house
 *   node scripts/screenshot.mjs /components/airplane --fullpage
 *   node scripts/screenshot.mjs /components/jet --selector ".preview-frame-inner"
 *   node scripts/screenshot.mjs / --port 3001
 *
 * Output: prints the absolute path of the saved PNG to stdout.
 *         Agents can then Read the file to observe the visual.
 *
 * Requires: dev server running (npm run dev).
 */

import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')

// ── Arg parsing ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2)

const route    = args.find((a) => !a.startsWith('--')) ?? '/'
const fullPage = args.includes('--fullpage')

const selectorIdx = args.indexOf('--selector')
const selector    = selectorIdx !== -1 ? args[selectorIdx + 1] : null

const portIdx = args.indexOf('--port')
const port    = portIdx !== -1 ? args[portIdx + 1] : '3000'

const waitIdx = args.indexOf('--wait')
const waitMs  = waitIdx !== -1 ? parseInt(args[waitIdx + 1], 10) : 1200

// ── Paths ────────────────────────────────────────────────────────────────────
const url  = route.startsWith('http') ? route : `http://localhost:${port}${route}`
const slug = route.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home'
const ts   = Date.now()
const outDir  = join(ROOT, '.screenshots')
const outFile = join(outDir, `${slug}-${ts}.png`)

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  await mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    colorScheme: 'dark',
  })
  const page = await context.newPage()

  process.stderr.write(`→ ${url}\n`)

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 })
  } catch {
    // networkidle timeout is non-fatal for animated pages — continue
    process.stderr.write('  (networkidle timeout — proceeding)\n')
  }

  // Let animations settle
  await page.waitForTimeout(waitMs)

  if (selector) {
    const el = page.locator(selector).first()
    await el.screenshot({ path: outFile })
    process.stderr.write(`  selector: ${selector}\n`)
  } else {
    await page.screenshot({ path: outFile, fullPage })
  }

  await browser.close()

  // Stdout = path — agents Read this to locate the file
  process.stdout.write(outFile + '\n')
}

main().catch((err) => {
  process.stderr.write(`Screenshot failed: ${err.message}\n`)
  process.stderr.write('Is the dev server running? (npm run dev)\n')
  process.exit(1)
})
