import Link from 'next/link'

interface PageHeaderProps {
  type: string
  name: string
  description: string
  files: string[]
}

export function PageHeader({ type, name, description, files }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <Link href="/" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-4 inline-block">
        ← All components
      </Link>
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-2">
        {type}
      </p>
      <h1 className="text-3xl font-semibold text-white mb-3">{name}</h1>
      <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {files.map((f) => (
          <span
            key={f}
            className="text-[10px] font-mono bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] px-2 py-0.5 rounded"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}
