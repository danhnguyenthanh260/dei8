import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES, getByCategory } from '@/lib/registry'
import './globals.css'

export const metadata: Metadata = {
  title: 'dei8 — animated SVG components',
  description: 'Open-source animated SVG components. Copy-paste, no install, no lock-in.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[var(--border)] px-6 shrink-0">
          <div className="h-12 flex items-center gap-8">
            <Link href="/" className="text-sm font-bold tracking-widest text-[var(--accent)]">
              dei8
            </Link>

            {/* Category groups */}
            <nav className="flex items-center gap-6">
              {CATEGORIES.map((cat) => {
                const items = getByCategory(cat.key)
                return (
                  <div key={cat.key} className="flex items-center gap-1">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--border)] mr-1 hidden sm:inline">
                      {cat.label}
                    </span>
                    {items.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/components/${c.slug}`}
                        className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors px-1.5 py-0.5 rounded hover:bg-[var(--surface)]"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )
              })}
            </nav>

            <a
              href="https://github.com/danhnguyenthanh260/dei8"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
