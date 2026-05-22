import * as React from 'react'
import { AirplaneModel } from './airplane-model'

export interface AirplaneSideProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function AirplaneSide(props: AirplaneSideProps) {
  return <AirplaneModel view="side" idPrefix="airplane-side" {...props} />
}
