'use client'

import { ItalianHouse3D } from '@registry/svgs/house/italian-house-3d'

export function ItalianHousePreview() {
  return (
    <div className="w-full h-80 flex items-center justify-center bg-gradient-to-b from-sky-100 to-sky-200 rounded-lg overflow-hidden">
      <ItalianHouse3D width={400} height={300} variant="detailed" animated />
    </div>
  )
}