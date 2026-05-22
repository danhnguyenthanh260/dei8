import { DriftingClouds } from '@registry/svgs/clouds/drifting-clouds'
import { PreviewFrame } from '@/components/preview-frame'
import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { ComponentMetaSection } from '@/components/component-meta-section'
import { getBySlug } from '@/lib/registry'

const meta = getBySlug('clouds')!

export default function CloudsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Clouds"
        description="4 reusable cloud path shapes + multi-layer drifting animation. Fully themeable via accentColor and fillColor props."
        files={['cloud-shapes.ts', 'drifting-clouds.tsx']}
      />

      <ComponentMetaSection meta={meta} />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Preview</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <PreviewFrame label="dark / gold (default)">
            <svg viewBox="0 0 300 200" className="w-full max-w-xs" style={{ minHeight: 140 }}>
              <rect width="300" height="200" fill="#040A15" />
              <DriftingClouds />
            </svg>
          </PreviewFrame>
          <PreviewFrame label="light / indigo">
            <svg viewBox="0 0 300 200" className="w-full max-w-xs" style={{ minHeight: 140 }}>
              <rect width="300" height="200" fill="#EFF6FF" />
              <DriftingClouds accentColor="#6366F1" fillColor="#E0E7FF" />
            </svg>
          </PreviewFrame>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-(--muted) mb-4">
          Copy both files.{' '}
          <code className="font-mono text-(--accent)">drifting-clouds.tsx</code> imports{' '}
          <code className="font-mono text-(--accent)">cloud-shapes.ts</code>.
          Use <code className="font-mono text-(--accent)">cloud-shapes.ts</code> standalone
          if you only need the path data.
        </p>
        <CodeBlock code={`import { DriftingClouds } from '@/components/drifting-clouds'

<svg viewBox="0 0 300 200" className="w-full">
  <DriftingClouds />
</svg>

// Themed:
<svg viewBox="0 0 300 200" className="w-full">
  <DriftingClouds accentColor="#6366F1" fillColor="#E0E7FF" />
</svg>

// Path data only:
import { CLOUD_SHAPES } from '@/components/cloud-shapes'
// CLOUD_SHAPES[1 | 2 | 3 | 4] → { main, inner1, inner2, inner3 }`} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Files — copy both</h2>
        <div className="flex flex-col gap-3">
          <SourceViewer file="svgs/clouds/cloud-shapes.ts" />
          <SourceViewer file="svgs/clouds/drifting-clouds.tsx" />
        </div>
      </section>
    </div>
  )
}
