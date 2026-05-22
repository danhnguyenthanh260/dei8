import * as React from 'react'
import { AirplaneModel } from './airplane-model'

export interface AirplaneQuarterRightProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function AirplaneQuarterRight(props: AirplaneQuarterRightProps) {
  return <AirplaneModel view="quarter-right" idPrefix="airplane-quarter-right" {...props} />
}
