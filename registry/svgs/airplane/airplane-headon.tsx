import * as React from 'react'
import { AirplaneModel } from './airplane-model'

export interface AirplaneHeadonProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function AirplaneHeadon(props: AirplaneHeadonProps) {
  return <AirplaneModel view="headon" idPrefix="airplane-headon" {...props} />
}
