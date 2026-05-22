import { AirplaneSide } from '../airplane/airplane-side'
import { AirplaneSideReverse } from '../airplane/airplane-side-reverse'
import { AirplaneHeadon } from '../airplane/airplane-headon'
import { AirplaneTransLeft } from '../airplane/airplane-trans-left'
import { AirplaneQuarterRight } from '../airplane/airplane-quarter-right'
import { AirplaneQuarterLeft } from '../airplane/airplane-quarter-left'

interface AircraftImageProps {
  viewMode?:
    | 'right'
    | 'quarter-right'
    | 'headon'
    | 'quarter-left'
    | 'transleft'
    | 'transright'
    | 'left'
}

export function AircraftImage({ viewMode = 'right' }: AircraftImageProps) {
  return (
    <div className="pointer-events-none select-none">
      {viewMode === 'headon' && <AirplaneHeadon />}
      {viewMode === 'quarter-right' && <AirplaneQuarterRight />}
      {viewMode === 'quarter-left' && <AirplaneQuarterLeft />}
      {viewMode === 'transleft' && <AirplaneTransLeft />}
      {viewMode === 'transright' && (
        <div style={{ transform: 'scaleX(-1)' }}>
          <AirplaneTransLeft />
        </div>
      )}
      {viewMode === 'left' && <AirplaneSideReverse />}
      {viewMode === 'right' && <AirplaneSide />}
    </div>
  )
}
