import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { ComponentMetaSection } from '@/components/component-meta-section'
import { getBySlug } from '@/lib/registry'
import { ItalianHousePreview } from './italian-house-preview'

const meta = getBySlug('italian-house')!

const FILES = [
  'svgs/house/italian-house-3d.tsx',
]

export default function ItalianHousePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Italian House"
        description="A charming 3D-style Italian two-floor house with terracotta roof, warm stucco walls, green shutters, wooden door, and decorative flower pots. Simple and detailed variants available."
        files={['italian-house-3d.tsx']}
      />

      <ComponentMetaSection meta={meta} />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Preview</h2>
        <p className="text-xs text-(--muted) mb-4">
          Hover over the house for a subtle floating animation.
        </p>
        <div className="rounded-xl overflow-hidden border border-(--border)">
          <ItalianHousePreview />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Install</h2>
        <CodeBlock code={`npx @dei8withnpm/dei8 add italian-house`} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-(--muted) mb-4">
          Copy the component file into your project. Import <code className="text-(--accent)">ItalianHouse3D</code> and use it.
        </p>
        <CodeBlock code={`import { ItalianHouse3D } from '@/components/italian-house-3d'

// Simple usage
<ItalianHouse3D />

// With options
<ItalianHouse3D
  width={480}
  height={360}
  variant="detailed"
  animated
/>`} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Props</h2>
        <div className="border border-(--border) rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-(--surface) text-(--muted) border-b border-(--border)">
            <span>Prop</span><span>Type</span><span>Description</span>
          </div>
          {[
            ['className', 'string?', 'Additional CSS classes'],
            ['width', 'number | string', 'SVG width (default: 480)'],
            ['height', 'number | string', 'SVG height (default: 360)'],
            ['variant', '"simple" | "detailed"', 'Show more or fewer details (default: "detailed")'],
            ['animated', 'boolean', 'Enable hover animation (default: false)'],
          ].map(([p, t, d]) => (
            <div key={p} className="grid grid-cols-3 px-4 py-2.5 border-b border-(--border) last:border-0 text-(--text)">
              <span className="text-(--accent)">{p}</span>
              <span className="text-(--muted)">{t}</span>
              <span className="text-(--muted)">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Files — copy 1</h2>
        <div className="flex flex-col gap-3">
          {FILES.map((f) => (
            <SourceViewer key={f} file={f} />
          ))}
        </div>
      </section>
    </div>
  )
}
