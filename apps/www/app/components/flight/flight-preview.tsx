'use client'

import { FlightJourneySection } from '@registry/svgs/flight/flight-journey'

const DEMO_NODES = [
  {
    id: 'pickup',
    label: 'Pickup',
    eyebrow: 'Step 1',
    headline: 'Package collected from sender',
    body: 'Driver arrives at origin address, scans the parcel and confirms weight and dimensions.',
    keyword: 'Origin scan',
    image: '',
    imageAlt: '',
    ctaLabel: 'Track shipment',
    ctaHref: '#',
    progress: 0,
  },
  {
    id: 'sorting',
    label: 'Sorting',
    eyebrow: 'Step 2',
    headline: 'Processed at hub facility',
    body: 'Package is sorted by destination region at the regional distribution centre.',
    keyword: 'Hub sorted',
    image: '',
    imageAlt: '',
    ctaLabel: 'View details',
    ctaHref: '#',
    progress: 0.25,
  },
  {
    id: 'transit',
    label: 'In Transit',
    eyebrow: 'Step 3',
    headline: 'En route to destination country',
    body: 'Cargo loaded onto international flight. Estimated flight time 6–10 hours.',
    keyword: 'Airborne',
    image: '',
    imageAlt: '',
    ctaLabel: 'Flight status',
    ctaHref: '#',
    progress: 0.5,
  },
  {
    id: 'customs',
    label: 'Customs',
    eyebrow: 'Step 4',
    headline: 'Cleared customs & duties',
    body: 'Import declaration filed. Duties paid. Package released for final-mile delivery.',
    keyword: 'Cleared',
    image: '',
    imageAlt: '',
    ctaLabel: 'Duty receipt',
    ctaHref: '#',
    progress: 0.75,
  },
  {
    id: 'delivered',
    label: 'Delivered',
    eyebrow: 'Step 5',
    headline: 'Package delivered to door',
    body: 'Recipient signed on delivery. Proof of delivery photo captured and uploaded.',
    keyword: 'Signed off',
    image: '',
    imageAlt: '',
    ctaLabel: 'Rate delivery',
    ctaHref: '#',
    progress: 1,
  },
]

export function FlightPreview() {
  return (
    <FlightJourneySection
      nodes={DEMO_NODES}
      ariaLabel="Flight journey demo"
    />
  )
}
