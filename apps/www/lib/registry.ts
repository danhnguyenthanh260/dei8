export type ComponentCategory = 'svg' | 'animated' | 'section'

export interface ComponentMeta {
  slug: string
  name: string
  /** Short display type shown in card eyebrow and PageHeader */
  type: string
  category: ComponentCategory
  description: string
  /** File chips shown on cards and PageHeader — display only, not full paths */
  files: string[]
}

export const COMPONENT_REGISTRY: ComponentMeta[] = [
  // ── SVG ──────────────────────────────────────────────────────────────────
  {
    slug: 'airplane',
    name: 'Airplane',
    type: 'SVG',
    category: 'svg',
    description: '6 angle variants — head-on, quarter, side, reverse, transparent.',
    files: ['airplane-side.tsx', 'airplane-headon.tsx', '+ 4 more'],
  },

  // ── Animated SVG ─────────────────────────────────────────────────────────
  {
    slug: 'package-box',
    name: 'Package Box',
    type: 'SVG · Animated',
    category: 'animated',
    description: 'Shipping box with butterfly-flap open animation. Click to open.',
    files: ['cargo-package.tsx', 'cargo-package-bg.tsx'],
  },
  {
    slug: 'jet',
    name: 'Jet',
    type: 'SVG · Animated',
    category: 'animated',
    description: '4-phase launch animation — engine spool-up, fly-out, teleport, glide return.',
    files: ['jet.tsx', 'jet-defs.tsx', 'jet-clouds.tsx', 'jet-styles.ts'],
  },
  {
    slug: 'birds',
    name: 'Birds',
    type: 'SVG · Animated',
    category: 'animated',
    description: '6 birds with individual flight paths and flap cycles.',
    files: ['birds.tsx'],
  },
  {
    slug: 'clouds',
    name: 'Clouds',
    type: 'SVG · Animated',
    category: 'animated',
    description: '4 cloud shapes + multi-layer drifting animation. Themeable colors.',
    files: ['cloud-shapes.ts', 'drifting-clouds.tsx'],
  },

  // ── Full sections ─────────────────────────────────────────────────────────
  {
    slug: 'flight',
    name: 'Flight Journey',
    type: 'Section · Animated',
    category: 'section',
    description: 'Full hero section — aircraft flight path, day/night sky, fog clouds, constellation, birds, sun rise, grass.',
    files: ['flight-journey.tsx', '+ 17 files'],
  },
  {
    slug: 'world-map',
    name: 'World Map',
    type: 'Section · Animated',
    category: 'section',
    description: 'Animated world map with glowing flight routes. Configurable locations, routes, stats, panel text.',
    files: ['world-map.tsx', 'world-map-path.ts'],
  },

  // ── Italian House ─────────────────────────────────────────────────────────
  {
    slug: 'italian-house',
    name: 'Italian House',
    type: 'SVG · Animated',
    category: 'animated',
    description: 'Charming 3D-style Italian two-floor house with terracotta roof, stucco walls, green shutters, and flower pots.',
    files: ['italian-house-3d.tsx'],
  },
]

export const CATEGORIES: { key: ComponentCategory; label: string; description: string }[] = [
  { key: 'svg',      label: 'SVG',      description: 'Static vector components' },
  { key: 'animated', label: 'Animated', description: 'Interactive animated SVGs' },
  { key: 'section',  label: 'Sections', description: 'Full-width page sections' },
]

export function getBySlug(slug: string): ComponentMeta | undefined {
  return COMPONENT_REGISTRY.find((c) => c.slug === slug)
}

export function getByCategory(category: ComponentCategory): ComponentMeta[] {
  return COMPONENT_REGISTRY.filter((c) => c.category === category)
}
