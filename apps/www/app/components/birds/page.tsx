import { Birds } from '@registry/svgs/birds/birds'
import { PreviewFrame } from '@/components/preview-frame'
import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'

export default function BirdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Birds"
        description="6 silhouette birds with individual flight paths and wing-flap cycles. Renders as a <g> element — place inside any SVG."
        files={['birds.tsx']}
      />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Preview</h2>
        <PreviewFrame>
          <svg viewBox="0 0 300 160" className="w-full max-w-lg" style={{ minHeight: 160 }}>
            <rect width="300" height="160" fill="#0a0a0a" />
            <Birds width={300} />
          </svg>
        </PreviewFrame>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          <code className="font-mono text-[var(--accent)]">Birds</code> renders a{' '}
          <code className="font-mono text-[var(--accent)]">&lt;g&gt;</code> — wrap it in an SVG and set{' '}
          <code className="font-mono text-[var(--accent)]">width</code> to match your viewBox.
        </p>
        <CodeBlock code={`import { Birds } from '@/components/birds'

<svg viewBox="0 0 300 160" className="w-full">
  <Birds width={300} />
</svg>

// Light background:
<svg viewBox="0 0 300 160" className="w-full">
  <Birds color="rgba(30, 20, 10, 0.6)" width={300} />
</svg>`} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">File</h2>
        <SourceViewer file="svgs/birds/birds.tsx" />
      </section>
    </div>
  )
}
