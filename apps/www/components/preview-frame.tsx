interface PreviewFrameProps {
  children: React.ReactNode
  label?: string
  /** Extra classes on the outer card */
  className?: string
}

export function PreviewFrame({ children, label, className }: PreviewFrameProps) {
  return (
    <div className={`border border-[var(--border)] rounded-xl overflow-hidden ${className ?? ''}`}>
      {label && (
        <div className="px-4 py-2 border-b border-[var(--border)] bg-[var(--surface)]">
          <p className="text-[10px] font-mono text-[var(--muted)]">{label}</p>
        </div>
      )}
      <div className="flex items-center justify-center bg-[var(--surface)] min-h-40 p-8">
        {children}
      </div>
    </div>
  )
}
