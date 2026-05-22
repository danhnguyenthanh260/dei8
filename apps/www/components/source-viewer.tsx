import fs from 'fs'
import path from 'path'
import { CopyButton } from './copy-button'

interface SourceViewerProps {
  /** Path relative to registry root, e.g. "svgs/airplane/airplane-side.tsx" */
  file: string
}

export function SourceViewer({ file }: SourceViewerProps) {
  const fullPath = path.join(process.cwd(), '..', '..', 'registry', file)
  const source = fs.readFileSync(fullPath, 'utf-8')

  const filename = path.basename(file)
  const githubUrl = `https://github.com/danhnguyenthanh260/dei8/blob/master/registry/${file}`

  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--surface)] border-b border-[var(--border)]">
        <span className="text-[10px] font-mono text-[var(--muted)]">{filename}</span>
        <div className="flex items-center gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            View on GitHub ↗
          </a>
          <CopyButton text={source} />
        </div>
      </div>
      <pre className="px-5 py-4 text-[11px] font-mono text-[var(--text)] overflow-x-auto leading-relaxed max-h-96 overflow-y-auto">
        {source}
      </pre>
    </div>
  )
}
