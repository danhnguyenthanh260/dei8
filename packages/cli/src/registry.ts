export interface RegistryEntry {
  description: string
  files: string[]
  /** Files that must also be copied (internal deps) */
  deps?: string[]
}

export const REGISTRY: Record<string, RegistryEntry> = {
  // ── Airplane variants ─────────────────────────────────────────────────────
  'airplane-side': {
    description: 'Side-view airplane SVG (flying right)',
    files: ['svgs/airplane/airplane-side.tsx'],
  },
  'airplane-side-reverse': {
    description: 'Side-view airplane SVG (flying left)',
    files: ['svgs/airplane/airplane-side-reverse.tsx'],
  },
  'airplane-headon': {
    description: 'Head-on airplane SVG',
    files: ['svgs/airplane/airplane-headon.tsx'],
  },
  'airplane-quarter-left': {
    description: 'Quarter-angle airplane SVG (left)',
    files: ['svgs/airplane/airplane-quarter-left.tsx'],
  },
  'airplane-quarter-right': {
    description: 'Quarter-angle airplane SVG (right)',
    files: ['svgs/airplane/airplane-quarter-right.tsx'],
  },
  'airplane-trans-left': {
    description: 'Transitional-angle airplane SVG (left)',
    files: ['svgs/airplane/airplane-trans-left.tsx'],
  },
  airplane: {
    description: 'All 6 airplane angle variants',
    files: [
      'svgs/airplane/airplane-side.tsx',
      'svgs/airplane/airplane-side-reverse.tsx',
      'svgs/airplane/airplane-headon.tsx',
      'svgs/airplane/airplane-quarter-left.tsx',
      'svgs/airplane/airplane-quarter-right.tsx',
      'svgs/airplane/airplane-trans-left.tsx',
    ],
  },

  // ── Cargo package ─────────────────────────────────────────────────────────
  'cargo-package': {
    description: 'Animated 3D shipping box — click to open (butterfly-flap)',
    files: [
      'svgs/package-box/cargo-package.tsx',
      'svgs/package-box/cargo-package-bg.tsx',
    ],
  },

  // ── Jet ───────────────────────────────────────────────────────────────────
  jet: {
    description: 'Night-sky jet scene — click to launch (4-phase animation)',
    files: [
      'svgs/jet/jet.tsx',
      'svgs/jet/jet-defs.tsx',
      'svgs/jet/jet-clouds.tsx',
      'svgs/jet/jet-styles.ts',
    ],
  },

  // ── Birds ─────────────────────────────────────────────────────────────────
  birds: {
    description: 'Animated bird flock — 6 birds with individual flight paths',
    files: ['svgs/birds/birds.tsx'],
  },

  // ── Clouds ────────────────────────────────────────────────────────────────
  clouds: {
    description: 'Multi-layer drifting cloud animation — themeable colors',
    files: [
      'svgs/clouds/cloud-shapes.ts',
      'svgs/clouds/drifting-clouds.tsx',
    ],
  },
  'cloud-shapes': {
    description: '4 reusable SVG cloud path shapes (data only, no React)',
    files: ['svgs/clouds/cloud-shapes.ts'],
  },

  // ── World map ─────────────────────────────────────────────────────────────
  'world-map': {
    description: 'Animated world map with glowing flight routes — configurable locations, routes, stats, panel text',
    files: [
      'svgs/world-map/world-map.tsx',
      'svgs/world-map/world-map-path.ts',
    ],
  },

  // ── Flight journey ────────────────────────────────────────────────────────
  'flight-journey': {
    description: 'Full animated flight journey section — day/night sky, aircraft, clouds, birds, sun',
    files: [
      'svgs/flight/flight-journey.tsx',
      'svgs/flight/flight-visual-panel.tsx',
      'svgs/flight/flight-clouds.tsx',
      'svgs/flight/flight-clouds-extra.tsx',
      'svgs/flight/flight-birds.tsx',
      'svgs/flight/flight-plants.tsx',
      'svgs/flight/flight-sky-decor.tsx',
      'svgs/flight/flight-svg-defs.tsx',
      'svgs/flight/cloud-wisps.tsx',
      'svgs/flight/aircraft-image.tsx',
      'svgs/flight/flight-constants.ts',
      'svgs/flight/flight-utils.ts',
      'svgs/airplane/airplane-side.tsx',
      'svgs/airplane/airplane-side-reverse.tsx',
      'svgs/airplane/airplane-headon.tsx',
      'svgs/airplane/airplane-trans-left.tsx',
      'svgs/airplane/airplane-quarter-right.tsx',
      'svgs/airplane/airplane-quarter-left.tsx',
    ],
  },

  // ── Italian House 3D ──────────────────────────────────────────────────────
  'italian-house': {
    description: 'Charming 3D-style Italian two-floor house with terracotta roof, stucco walls, green shutters, and decorative details',
    files: ['svgs/house/italian-house-3d.tsx'],
  },
}
