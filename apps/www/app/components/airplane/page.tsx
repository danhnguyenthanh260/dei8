import { AirplaneSide } from '@registry/svgs/airplane/airplane-side'
import { AirplaneSideReverse } from '@registry/svgs/airplane/airplane-side-reverse'
import { AirplaneHeadon } from '@registry/svgs/airplane/airplane-headon'
import { AirplaneQuarterLeft } from '@registry/svgs/airplane/airplane-quarter-left'
import { AirplaneQuarterRight } from '@registry/svgs/airplane/airplane-quarter-right'
import { AirplaneTransLeft } from '@registry/svgs/airplane/airplane-trans-left'
import { PreviewFrame } from '@/components/preview-frame'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'

const VARIANTS = [
  { label: 'airplane-side',          component: <AirplaneSide className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-side-reverse',  component: <AirplaneSideReverse className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-headon',        component: <AirplaneHeadon className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-quarter-left',  component: <AirplaneQuarterLeft className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-quarter-right', component: <AirplaneQuarterRight className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-trans-left',    component: <AirplaneTransLeft className="w-36 h-16 overflow-visible" /> },
]

export default function AirplanePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG"
        name="Airplane"
        description="6-angle premium airplane SVG. All variants share the same fuselage geometry — metallic gradients, gold brand stripe, cockpit glass, navigation beacon."
        files={['airplane-side.tsx', 'airplane-side-reverse.tsx', 'airplane-headon.tsx', 'airplane-quarter-left.tsx', 'airplane-quarter-right.tsx', 'airplane-trans-left.tsx']}
      />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Variants</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {VARIANTS.map((v) => (
            <PreviewFrame key={v.label} label={v.label}>
              {v.component}
            </PreviewFrame>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Usage</h2>
        <CodeBlock code={`import { AirplaneSide } from '@/components/airplane-side'

// Default size (w-21 h-10)
<AirplaneSide />

// Custom size via className
<AirplaneSide className="w-40 h-20 overflow-visible" />

// All variants follow the same API:
// AirplaneSide | AirplaneSideReverse | AirplaneHeadon
// AirplaneQuarterLeft | AirplaneQuarterRight | AirplaneTransLeft`} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Props</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>Prop</span><span>Type</span><span>Default</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3 text-[var(--text)]">
            <span>className</span><span className="text-[var(--muted)]">string?</span><span className="text-[var(--muted)]">'w-21 h-10 overflow-visible'</span>
          </div>
        </div>
      </section>
    </div>
  )
}
