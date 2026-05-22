import * as React from 'react'
import { AirplaneModel } from './airplane-model'

export interface AirplaneQuarterLeftProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function AirplaneQuarterLeft(props: AirplaneQuarterLeftProps) {
  return <AirplaneModel view="quarter-left" idPrefix="airplane-quarter-left" {...props} />
}
