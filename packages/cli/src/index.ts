import fs from 'fs'
import path from 'path'
import https from 'https'
import pc from 'picocolors'
import { REGISTRY } from './registry'

const GITHUB_RAW = 'https://raw.githubusercontent.com/danhnguyenthanh260/dei8/master/registry/'
const VERSION = '0.1.0'

// ── helpers ──────────────────────────────────────────────────────────────────

function fetch(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        fetch(res.headers.location!).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
        return
      }
      let data = ''
      res.on('data', (chunk: string) => (data += chunk))
      res.on('end', () => resolve(data))
    }).on('error', reject)
  })
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function detectOutputDir(): string {
  const candidates = ['src/components', 'components', 'app/components']
  for (const c of candidates) {
    if (fs.existsSync(c)) return c
  }
  return 'src/components'
}

// ── commands ─────────────────────────────────────────────────────────────────

async function cmdAdd(name: string, flags: { out?: string; dir?: string }) {
  const entry = REGISTRY[name]
  if (!entry) {
    console.error(pc.red(`✖ Unknown component: "${name}"`))
    console.log(`\nRun ${pc.cyan('npx dei8 list')} to see available components.`)
    process.exit(1)
  }

  const outDir = flags.out ?? flags.dir ?? detectOutputDir()
  ensureDir(outDir)

  console.log(`\n${pc.bold('dei8')} — adding ${pc.cyan(name)}\n`)

  for (const file of entry.files) {
    const filename = path.basename(file)
    const dest = path.join(outDir, filename)

    if (fs.existsSync(dest)) {
      console.log(`  ${pc.yellow('~')} ${filename} ${pc.dim('(already exists, skipping)')}`)
      continue
    }

    process.stdout.write(`  ${pc.dim('↓')} ${filename} `)
    try {
      const content = await fetch(GITHUB_RAW + file)
      fs.writeFileSync(dest, content, 'utf-8')
      console.log(pc.green('✓'))
    } catch (err) {
      console.log(pc.red('✖'))
      console.error(pc.red(`    Failed: ${(err as Error).message}`))
      process.exit(1)
    }
  }

  console.log(`\n${pc.green('Done!')} ${entry.files.length} file(s) added to ${pc.dim(outDir)}\n`)
  console.log(pc.dim('Import example:'))
  const firstName = path.basename(entry.files[0]!, '.tsx').replace('.ts', '')
  console.log(`  ${pc.cyan(`import { ... } from '@/components/${firstName}'`)}\n`)
}

function cmdList() {
  console.log(`\n${pc.bold('dei8')} available components:\n`)
  const maxLen = Math.max(...Object.keys(REGISTRY).map((k) => k.length))
  for (const [name, entry] of Object.entries(REGISTRY)) {
    console.log(`  ${pc.cyan(name.padEnd(maxLen + 2))} ${pc.dim(entry.description)}`)
  }
  console.log()
}

function cmdHelp() {
  console.log(`
${pc.bold('dei8')} v${VERSION} — animated SVG components

${pc.bold('Usage:')}
  npx dei8 add <component>        Add a component to your project
  npx dei8 list                   List all available components
  npx dei8 help                   Show this help

${pc.bold('Options for add:')}
  --out <dir>                     Output directory (default: src/components)

${pc.bold('Examples:')}
  npx dei8 add cargo-package
  npx dei8 add jet
  npx dei8 add airplane
  npx dei8 add birds --out src/ui
`)
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2)
  const cmd = args[0]

  // parse --out / --dir flags
  const flags: { out?: string; dir?: string } = {}
  for (let i = 1; i < args.length; i++) {
    if ((args[i] === '--out' || args[i] === '--dir') && args[i + 1]) {
      flags.out = args[i + 1]
      i++
    }
  }

  switch (cmd) {
    case 'add': {
      const name = args[1]
      if (!name) {
        console.error(pc.red('✖ Specify a component name: npx dei8 add <name>'))
        process.exit(1)
      }
      await cmdAdd(name, flags)
      break
    }
    case 'list':
    case 'ls':
      cmdList()
      break
    case 'help':
    case '--help':
    case '-h':
    case undefined:
      cmdHelp()
      break
    default:
      console.error(pc.red(`✖ Unknown command: "${cmd}"`))
      cmdHelp()
      process.exit(1)
  }
}

main().catch((err) => {
  console.error(pc.red('✖ Unexpected error:'), err)
  process.exit(1)
})
