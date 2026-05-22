import { DriftingClouds } from '@registry/svgs/clouds/drifting-clouds'
import { PreviewFrame } from '@/components/preview-frame'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'

export default function CloudsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Clouds"
        description="4 reusable cloud path shapes + multi-layer drifting animation. Each layer has a different drift speed and offset. Fully themeable via accentColor and fillColor props."
        files={['cloud-shapes.ts', 'drifting-clouds.tsx']}
      />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Preview</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <PreviewFrame label="default — dark / gold">
            <svg viewBox="0 0 300 200" className="w-full max-w-xs" style={{ minHeight: 140 }}>
              <rect width="300" height="200" fill="#040A15" />
              <DriftingClouds />
            </svg>
          </PreviewFrame>
          <PreviewFrame label="light — indigo accent">
            <svg viewBox="0 0 300 200" className="w-full max-w-xs" style={{ minHeight: 140 }}>
              <rect width="300" height="200" fill="#EFF6FF" />
              <DriftingClouds accentColor="#6366F1" fillColor="#E0E7FF" />
            </svg>
          </PreviewFrame>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Usage</h2>
        <CodeBlock code={`// Copy both files:
// cloud-shapes.ts      — path data only, no React
// drifting-clouds.tsx  — animated component

import { DriftingClouds } from '@/components/drifting-clouds'

// Inside an SVG:
<svg viewBox="0 0 300 200" className="w-full">
  <DriftingClouds />
</svg>

// Themed:
<svg viewBox="0 0 300 200" className="w-full">
  <DriftingClouds accentColor="#6366F1" fillColor="#E0E7FF" />
</svg>

// Use shapes standalone:
import { CLOUD_SHAPES } from '@/components/cloud-shapes'
// CLOUD_SHAPES[1 | 2 | 3 | 4] → { main, inner1, inner2, inner3 }`} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Props — DriftingClouds</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>Prop</span><span>Type</span><span>Default</span>
          </div>
          {[
            ['className',   'string?', '—'],
            ['opacity',     'number?', '1'],
            ['accentColor', 'string?', "'#EAA800'"],
            ['fillColor',   'string?', "'#0B0B0C'"],
          ].map(([p, t, d]) => (
            <div key={p} className="grid grid-cols-3 px-4 py-2.5 border-b border-[var(--border)] last:border-0 text-[var(--text)]">
              <span>{p}</span><span className="text-[var(--muted)]">{t}</span><span className="text-[var(--muted)]">{d}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
