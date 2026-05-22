import Link from 'next/link'
import { CATEGORIES, RECIPES, getByCategory, getBySlug } from '@/lib/registry'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-(--accent) mb-3">
        Visual Component Library
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">dei8</h1>
      <p className="text-(--muted) text-base leading-relaxed mb-4 max-w-xl">
        Ready-to-use animated SVG components and UI sections. Drop them into any React project —
        no package to install, no version to track.
      </p>
      <p className="text-(--muted) text-sm leading-relaxed mb-14 max-w-xl">
        Copy the source, own the code. Built for travel, logistics, e-commerce, and beyond.
      </p>

      {/* What can you build */}
      <section className="mb-16">
        <div className="flex items-baseline gap-3 mb-5">
          <h2 className="text-xs font-bold tracking-[0.18em] uppercase text-(--accent)">
            What can you build?
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {RECIPES.map((recipe) => {
            const components = recipe.components
              .map((slug) => getBySlug(slug))
              .filter(Boolean)
            return (
              <div
                key={recipe.goal}
                className="border border-(--border) rounded-xl px-5 py-4"
              >
                <p className="text-sm text-white font-medium mb-3">{recipe.goal}</p>
                <div className="flex flex-wrap gap-2">
                  {components.map((c) => c && (
                    <Link
                      key={c.slug}
                      href={`/components/${c.slug}`}
                      className="text-[11px] font-mono border border-(--border) text-(--muted) hover:text-(--text) hover:border-[#333] px-2.5 py-1 rounded transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Component browser */}
      <div className="flex flex-col gap-12">
        {CATEGORIES.map((cat) => {
          const items = getByCategory(cat.key)
          if (items.length === 0) return null

          return (
            <section key={cat.key}>
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-xs font-bold tracking-[0.18em] uppercase text-(--accent)">
                  {cat.label}
                </h2>
                <span className="text-[11px] text-(--border)">{cat.description}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/components/${c.slug}`}
                    className="group border border-(--border) rounded-xl p-5 hover:border-[#333] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-(--muted)">
                        {c.type}
                      </p>
                      <span className="text-(--muted) group-hover:text-(--text) transition-colors text-xs">
                        →
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-white mb-1">{c.name}</h3>
                    <p className="text-xs text-(--muted) leading-relaxed mb-3">{c.description}</p>
                    {/* Use case peek */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {c.useCases.slice(0, 3).map((uc) => (
                        <span
                          key={uc}
                          className="text-[10px] text-(--muted) border border-(--border) px-2 py-0.5 rounded-full"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {c.files.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-mono bg-(--surface) border border-(--border) text-(--muted) px-2 py-0.5 rounded"
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
