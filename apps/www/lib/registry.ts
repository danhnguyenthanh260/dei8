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
  /** 1-2 sentence visual identity + mood — who this component IS */
  story: string
  /** What to build with this component — shown as use-case tags */
  useCases: string[]
  /** Emotional tone / visual mood words */
  mood: string[]
  /** Slugs of components that pair well with this one */
  related?: string[]
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
    story:
      'A premium metallic airplane in 6 viewing angles — side, head-on, quarter, and transparent. Gold brand stripe, cockpit glass, and navigation beacon. A flexible visual for aviation, travel, logistics, and shipping.',
    useCases: [
      'travel hero section',
      'flight booking UI',
      'shipping tracker',
      'logistics dashboard',
      'airline brand page',
      'delivery confirmation',
    ],
    mood: ['professional', 'fast', 'global', 'premium', 'trustworthy'],
    related: ['flight', 'world-map'],
  },

  // ── Animated SVG ─────────────────────────────────────────────────────────
  {
    slug: 'package-box',
    name: 'Package Box',
    type: 'SVG · Animated',
    category: 'animated',
    description: 'Shipping box with butterfly-flap open animation. Click to open.',
    files: ['cargo-package.tsx', 'cargo-package-bg.tsx'],
    story:
      'A 3D cardboard shipping box with a satisfying butterfly-flap open animation. Click to trigger. Great for confirming delivery, showcasing unboxing, or celebrating a completed order.',
    useCases: [
      'order confirmation',
      'delivery success screen',
      'unboxing reveal',
      'checkout celebration',
      'e-commerce onboarding',
      'shipping status page',
    ],
    mood: ['friendly', 'celebratory', 'delightful', 'satisfying', 'e-commerce'],
    related: ['jet', 'world-map'],
  },
  {
    slug: 'jet',
    name: 'Jet',
    type: 'SVG · Animated',
    category: 'animated',
    description: '4-phase launch animation — engine spool-up, fly-out, teleport, glide return.',
    files: ['jet.tsx', 'jet-defs.tsx', 'jet-clouds.tsx', 'jet-styles.ts'],
    story:
      'A sleek night-sky jet with a dramatic 4-phase launch sequence — engine spool-up, fly-out, teleport return, glide in. Stars, clouds, and afterburner glow create a cinematic atmosphere.',
    useCases: [
      'private aviation landing page',
      'premium travel hero',
      'feature launch moment',
      'product reveal animation',
      'onboarding flow accent',
      'SaaS speed marketing',
    ],
    mood: ['dramatic', 'premium', 'cinematic', 'nighttime', 'speed', 'excitement'],
    related: ['airplane', 'flight', 'clouds'],
  },
  {
    slug: 'birds',
    name: 'Birds',
    type: 'SVG · Animated',
    category: 'animated',
    description: '6 birds with individual flight paths and flap cycles.',
    files: ['birds.tsx'],
    story:
      'Six graceful birds with individual flight paths and wing-flap cycles. A natural, living accent that brings life to backgrounds, nature brands, and peaceful outdoor scenes.',
    useCases: [
      'nature brand hero',
      'ambient sky background',
      'travel & outdoors section',
      'real estate header',
      'wellness or spa site',
      'peaceful section accent',
    ],
    mood: ['peaceful', 'natural', 'organic', 'free', 'calming', 'alive'],
    related: ['clouds', 'flight'],
  },
  {
    slug: 'clouds',
    name: 'Clouds',
    type: 'SVG · Animated',
    category: 'animated',
    description: '4 cloud shapes + multi-layer drifting animation. Themeable colors.',
    files: ['cloud-shapes.ts', 'drifting-clouds.tsx'],
    story:
      'Four cloud shapes — elongated, puffy, mountain-peak, wispy — with layered parallax drifting. Themeable colors for light, dark, and branded backgrounds. A soft, ambient layer for any sky scene.',
    useCases: [
      'sky background layer',
      'weather app UI',
      'travel landing page',
      'dreamy hero section',
      'ambient section decoration',
      'children\'s app background',
    ],
    mood: ['dreamy', 'soft', 'airy', 'natural', 'ambient', 'light'],
    related: ['birds', 'jet', 'flight'],
  },

  // ── Full sections ─────────────────────────────────────────────────────────
  {
    slug: 'flight',
    name: 'Flight Journey',
    type: 'Section · Animated',
    category: 'section',
    description: 'Full hero section — aircraft flight path, day/night sky, fog clouds, constellation, birds, sun rise, grass.',
    files: ['flight-journey.tsx', '+ 17 files'],
    story:
      'A complete animated hero section — an aircraft follows a curved path through a day-to-night sky. Interactive node cards, flock of birds, fog clouds, constellations, sunrise, and ground vegetation. The flagship visual experience in the library.',
    useCases: [
      'airline landing page',
      'travel booking hero',
      'journey or timeline section',
      'multi-step product demo',
      'logistics company hero',
      'international service homepage',
    ],
    mood: ['epic', 'cinematic', 'journey', 'aspirational', 'dynamic', 'immersive'],
    related: ['airplane', 'birds', 'clouds', 'world-map'],
  },
  {
    slug: 'world-map',
    name: 'World Map',
    type: 'Section · Animated',
    category: 'section',
    description: 'Animated world map with glowing flight routes. Configurable locations, routes, stats, panel text.',
    files: ['world-map.tsx', 'world-map-path.ts'],
    story:
      'Animated world map with glowing flight routes, configurable city markers, and a stats panel. Real lat/lon coordinate support via latLonToXY(). For global services, delivery networks, and international reach.',
    useCases: [
      'global reach section',
      'international shipping network',
      'SaaS coverage map',
      'airline route visualization',
      'logistics network overview',
      'remote team showcase',
    ],
    mood: ['global', 'trustworthy', 'professional', 'data-driven', 'connected', 'expansive'],
    related: ['airplane', 'flight', 'package-box'],
  },

  // ── Italian House ─────────────────────────────────────────────────────────
  {
    slug: 'italian-house',
    name: 'Italian House',
    type: 'SVG · Animated',
    category: 'animated',
    description: 'Charming 3D-style Italian two-floor house with terracotta roof, stucco walls, green shutters, wooden door, and decorative flower pots.',
    files: ['italian-house-3d.tsx'],
    story:
      'A warm two-floor Italian house with terracotta roof tiles, creamy stucco walls, green shutters, and flower pots in the window sills. A storybook illustration with cozy Mediterranean charm — hover for a gentle float.',
    useCases: [
      'real estate hero section',
      'travel or hospitality page',
      'vacation rental platform',
      'property listing illustration',
      'cozy lifestyle landing page',
      'Mediterranean brand visual',
    ],
    mood: ['cozy', 'warm', 'Mediterranean', 'charming', 'residential', 'friendly'],
    related: ['birds', 'clouds'],
  },
]

export const CATEGORIES: { key: ComponentCategory; label: string; description: string }[] = [
  { key: 'svg',      label: 'SVG',      description: 'Static vector components' },
  { key: 'animated', label: 'Animated', description: 'Interactive animated SVGs' },
  { key: 'section',  label: 'Sections', description: 'Full-width page sections' },
]

/** Use-case recipes — groups components by what you can build */
export const RECIPES = [
  {
    goal: 'Travel or airline landing page',
    components: ['flight', 'airplane', 'world-map', 'birds'],
  },
  {
    goal: 'Logistics or shipping homepage',
    components: ['world-map', 'package-box', 'airplane', 'jet'],
  },
  {
    goal: 'Real estate or hospitality site',
    components: ['italian-house', 'birds', 'clouds'],
  },
  {
    goal: 'Premium / private aviation brand',
    components: ['jet', 'airplane', 'world-map'],
  },
  {
    goal: 'E-commerce order & delivery flow',
    components: ['package-box', 'world-map', 'airplane'],
  },
]

export function getBySlug(slug: string): ComponentMeta | undefined {
  return COMPONENT_REGISTRY.find((c) => c.slug === slug)
}

export function getByCategory(category: ComponentCategory): ComponentMeta[] {
  return COMPONENT_REGISTRY.filter((c) => c.category === category)
}
