import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'dei8 — animated SVG components',
  description: 'Open-source animated SVG components. Copy-paste, no install, no lock-in.',
}

const NAV_ITEMS = [
  { href: '/components/airplane',   label: 'Airplane'     },
  { href: '/components/package-box', label: 'Package Box' },
  { href: '/components/jet',        label: 'Jet'          },
  { href: '/components/birds',      label: 'Birds'        },
  { href: '/components/clouds',     label: 'Clouds'       },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[var(--border)] px-6 h-12 flex items-center gap-8 shrink-0">
          <Link href="/" className="text-sm font-bold tracking-widest text-[var(--accent)]">
            dei8
          </Link>
          <nav className="flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://github.com/danhnguyenthanh260/dei8"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            GitHub ↗
          </a>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
