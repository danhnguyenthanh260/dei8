interface CodeBlockProps {
  code: string
  lang?: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 text-xs font-mono text-[var(--text)] overflow-x-auto leading-relaxed">
      {code.trim()}
    </pre>
  )
}
