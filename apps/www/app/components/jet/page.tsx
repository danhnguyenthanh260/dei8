import { CargoJet } from '@registry/svgs/jet/jet'
import { PreviewFrame } from '@/components/preview-frame'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'

export default function JetPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Jet"
        description="Night-sky scene with 3D jet airliner. Click to launch — 4-phase animation: engine spool-up → fly-out with shockwave → teleport → glide return through clouds."
        files={['jet.tsx', 'jet-defs.tsx', 'jet-clouds.tsx', 'jet-styles.ts']}
      />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Preview</h2>
        <p className="text-xs text-[var(--muted)] mb-3">Click the jet to launch.</p>
        <PreviewFrame>
          <CargoJet className="w-72 h-40 overflow-visible cursor-pointer select-none" />
        </PreviewFrame>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Usage</h2>
        <CodeBlock code={`// Copy all 4 files into the same folder:
// jet.tsx  jet-defs.tsx  jet-clouds.tsx  jet-styles.ts

import { CargoJet } from '@/components/jet/jet'

<CargoJet />

// Custom size
<CargoJet className="w-80 h-48 overflow-visible cursor-pointer select-none" />`} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Animation phases</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-2 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>State</span><span>Duration</span>
          </div>
          {[
            ['idle',           'Continuous float + cloud drift'],
            ['launching',      '280 ms — engine nudge + shockwave'],
            ['away',           '1400 ms — fly-out, clouds scatter'],
            ['prepare-return', '80 ms — teleport (invisible)'],
            ['returning',      '1900 ms — glide in from behind cloud'],
          ].map(([s, d]) => (
            <div key={s} className="grid grid-cols-2 px-4 py-2.5 border-b border-[var(--border)] last:border-0 text-[var(--text)]">
              <span>{s}</span><span className="text-[var(--muted)]">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Props</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>Prop</span><span>Type</span><span>Default</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3 text-[var(--text)]">
            <span>className</span><span className="text-[var(--muted)]">string?</span><span className="text-[var(--muted)]">'w-44 h-24 overflow-visible cursor-pointer select-none'</span>
          </div>
        </div>
      </section>
    </div>
  )
}
