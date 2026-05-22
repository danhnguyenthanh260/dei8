import * as React from 'react'
import { AirplaneModel } from './airplane-model'

export interface AirplaneSideReverseProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function AirplaneSideReverse(props: AirplaneSideReverseProps) {
  return <AirplaneModel view="side-reverse" idPrefix="airplane-side-reverse" {...props} />
}
