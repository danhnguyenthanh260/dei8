import * as React from 'react'
import { AirplaneModel } from './airplane-model'

export interface AirplaneTransLeftProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function AirplaneTransLeft(props: AirplaneTransLeftProps) {
  return <AirplaneModel view="trans-left" idPrefix="airplane-trans-left" {...props} />
}
