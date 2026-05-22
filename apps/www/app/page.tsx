import Link from 'next/link'
import { CATEGORIES, getByCategory } from '@/lib/registry'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
        UI Library
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">dei8</h1>
      <p className="text-[var(--muted)] text-base leading-relaxed mb-14 max-w-lg">
        Animated SVG components. Copy the source into your project — no package to install, no
        version to track.
      </p>

      <div className="flex flex-col gap-12">
        {CATEGORIES.map((cat) => {
          const items = getByCategory(cat.key)
          if (items.length === 0) return null

          return (
            <section key={cat.key}>
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-xs font-bold tracking-[0.18em] uppercase text-[var(--accent)]">
                  {cat.label}
                </h2>
                <span className="text-[11px] text-[var(--border)]">{cat.description}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/components/${c.slug}`}
                    className="group border border-[var(--border)] rounded-xl p-5 hover:border-[#333] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--muted)]">
                        {c.type}
                      </p>
                      <span className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors text-xs">
                        →
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-white mb-1">{c.name}</h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{c.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {c.files.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-mono bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] px-2 py-0.5 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
