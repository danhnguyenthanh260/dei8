import Link from 'next/link'
import { getBySlug, type ComponentMeta } from '@/lib/registry'

interface ComponentMetaSectionProps {
  meta: ComponentMeta
}

export function ComponentMetaSection({ meta }: ComponentMetaSectionProps) {
  const related = meta.related
    ?.map((slug) => getBySlug(slug))
    .filter(Boolean) as ComponentMeta[]

  return (
    <>
      {/* Story */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-3">About</h2>
        <p className="text-sm text-(--muted) leading-relaxed max-w-2xl">{meta.story}</p>
      </section>

      {/* Best for */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-3">Best for</h2>
        <div className="flex flex-wrap gap-2">
          {meta.useCases.map((uc) => (
            <span
              key={uc}
              className="text-xs bg-(--surface) border border-(--border) text-(--text) px-3 py-1 rounded-full"
            >
              {uc}
            </span>
          ))}
        </div>
      </section>

      {/* Mood */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-3">Visual tone</h2>
        <div className="flex flex-wrap gap-2">
          {meta.mood.map((m) => (
            <span
              key={m}
              className="text-[11px] font-mono text-(--accent) border border-[#2a2000] bg-[#1a1400] px-2.5 py-0.5 rounded"
            >
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* Related */}
      {related && related.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-medium text-white mb-3">Pair with</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/components/${r.slug}`}
                className="text-xs border border-(--border) text-(--muted) hover:text-(--text) hover:border-[#333] px-3 py-1.5 rounded-lg transition-colors"
              >
                {r.name} →
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
