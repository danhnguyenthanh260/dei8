'use client'

import { WorldMapSection, latLonToXY } from '@registry/svgs/world-map/world-map'

const DEMO_LOCATIONS = [
  { id: 'sgn', name: 'HO CHI MINH', ...latLonToXY(10.8, 106.7), labelOffsetX: 8,  labelOffsetY: 6,  labelAnchor: 'start' as const },
  { id: 'nrt', name: 'TOKYO',       ...latLonToXY(35.7, 139.7), labelOffsetX: 8,  labelOffsetY: 6,  labelAnchor: 'start' as const },
  { id: 'icn', name: 'SEOUL',       ...latLonToXY(37.5, 126.9), labelOffsetX: -8, labelOffsetY: -6, labelAnchor: 'end'   as const },
  { id: 'jkt', name: 'JAKARTA',     ...latLonToXY(-6.2, 106.8), labelOffsetX: 8,  labelOffsetY: 6,  labelAnchor: 'start' as const },
  { id: 'lax', name: 'LOS ANGELES', ...latLonToXY(34.1, -118.2),labelOffsetX: 0,  labelOffsetY: 16, labelAnchor: 'middle' as const },
]

const DEMO_ROUTES = [
  { from: 'sgn', to: 'nrt', duration: '6.5s' },
  { from: 'sgn', to: 'icn', duration: '6s'   },
  { from: 'sgn', to: 'jkt', duration: '4.5s' },
  { from: 'sgn', to: 'lax', duration: '13s'  },
]

export function WorldMapPreview() {
  return (
    <WorldMapSection
      eyebrow="Global Network"
      headline="Worldwide shipping coverage"
      body="Real-time routes connecting major logistics hubs across every continent."
      stats={[
        { value: '200+', label: 'Countries' },
        { value: '24/7', label: 'Operations' },
        { value: '99.9%', label: 'On-time' },
      ]}
      locations={DEMO_LOCATIONS}
      routes={DEMO_ROUTES}
    />
  )
}
