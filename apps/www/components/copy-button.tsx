'use client'

import { useState } from 'react'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      onClick={handleCopy}
      className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[#333] transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
