import React from 'react'

export type FlyState = 'idle' | 'launching' | 'away' | 'prepare-return' | 'returning'

const PLANE_ORIGIN = '125px 58px'

export const getPlaneStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return {
        transform: 'translate3d(0,-5px,0) scale(1.04)',
        opacity: 1,
        transformOrigin: PLANE_ORIGIN,
        willChange: 'transform, opacity',
        transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1)',
      }
    case 'away':
      return {
        transform: 'translate3d(420px,-180px,0) scale(0) rotate(14deg)',
        opacity: 0,
        transformOrigin: PLANE_ORIGIN,
        willChange: 'transform, opacity',
        transition: 'transform 1.4s cubic-bezier(0.4,0,1,1), opacity 1.1s cubic-bezier(0.4,0,1,1)',
      }
    case 'prepare-return':
      return {
        transform: 'translate3d(-130px,55px,0) scale(0.05) rotate(-8deg)',
        opacity: 0,
        transformOrigin: PLANE_ORIGIN,
        transition: 'none',
      }
    case 'returning':
      return {
        transform: 'translate3d(0,0,0) scale(1) rotate(0deg)',
        opacity: 1,
        transformOrigin: PLANE_ORIGIN,
        willChange: 'transform, opacity',
        transition: 'transform 1.9s cubic-bezier(0.05,0.9,0.25,1), opacity 1.4s cubic-bezier(0.05,0.9,0.25,1)',
      }
    default:
      return {
        transform: 'translate3d(0,0,0) scale(1)',
        opacity: 1,
        transformOrigin: PLANE_ORIGIN,
        willChange: 'transform, opacity',
        animation: 'floatPlane 5s ease-in-out infinite',
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
      }
  }
}

export const getContrailStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { opacity: 1, transform: 'translate3d(0,0,0) scale(1.12)', transformOrigin: PLANE_ORIGIN, willChange: 'transform, opacity', transition: 'transform 0.28s ease' }
    case 'away':
      return { opacity: 0, transform: 'translate3d(200px,-80px,0) scale(0.1)', transformOrigin: PLANE_ORIGIN, willChange: 'transform, opacity', transition: 'opacity 0.7s cubic-bezier(0.4,0,1,1), transform 1.3s cubic-bezier(0.4,0,1,1)' }
    case 'prepare-return':
      return { opacity: 0, transform: 'translate3d(-130px,55px,0) scale(0)', transformOrigin: PLANE_ORIGIN, transition: 'none' }
    case 'returning':
      return { opacity: 0.9, transform: 'translate3d(0,0,0) scale(1)', transformOrigin: PLANE_ORIGIN, willChange: 'transform, opacity', transition: 'opacity 1.5s cubic-bezier(0.05,0.9,0.25,1), transform 1.9s cubic-bezier(0.05,0.9,0.25,1)' }
    default:
      return { opacity: 0.9, transform: 'translate3d(0,0,0) scale(1)', transformOrigin: PLANE_ORIGIN, willChange: 'transform, opacity', transition: 'opacity 0.5s ease, transform 0.5s ease' }
  }
}

export const getMistStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { opacity: 0.88, transition: 'opacity 0.28s ease' }
    case 'away':
    case 'prepare-return':
      return { transform: 'translate3d(-15px,6px,0)', opacity: 0.45, willChange: 'transform, opacity', transition: 'transform 1.4s cubic-bezier(0.4,0,1,1), opacity 1.2s ease' }
    case 'returning':
      return { transform: 'translate3d(0,0,0)', opacity: 0.95, willChange: 'transform, opacity', transition: 'transform 1.9s cubic-bezier(0.05,0.9,0.25,1), opacity 1.6s ease' }
    default:
      return { opacity: 0.95, animation: 'mistDrift 10s ease-in-out infinite', transition: 'transform 0.8s ease, opacity 0.8s ease' }
  }
}

export const getCloudForegroundStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { transform: 'translate3d(145px,16px,0) scale(1.02)', opacity: 0.92, transition: 'transform 0.28s ease, opacity 0.28s ease' }
    case 'away':
      return { transform: 'translate3d(195px,22px,0) scale(1.08)', opacity: 0.72, willChange: 'transform, opacity', transition: 'transform 1.3s cubic-bezier(0.4,0,1,1), opacity 1.3s ease' }
    case 'prepare-return':
      return { transform: 'translate3d(115px,20px,0) scale(1)', opacity: 0.92, transition: 'none' }
    case 'returning':
      return { transform: 'translate3d(135px,18px,0) scale(1)', opacity: 0.95, willChange: 'transform, opacity', transition: 'transform 1.8s cubic-bezier(0.05,0.9,0.25,1) 0.2s, opacity 1.5s ease 0.2s' }
    default:
      return { opacity: 0.95, animation: 'foregroundCloudFloat 6s ease-in-out infinite', transition: 'transform 0.8s ease, opacity 0.8s ease' }
  }
}

export const getCirrusStyle = (flyState: FlyState): React.CSSProperties => {
  if (flyState === 'idle') return { opacity: 0.85, animation: 'cirrusDrift 22s ease-in-out infinite' }
  if (flyState === 'launching') return { opacity: 0.7, transition: 'opacity 0.28s ease' }
  if (flyState === 'away' || flyState === 'prepare-return') return { opacity: 0.22, transition: 'opacity 0.9s ease' }
  return { opacity: 0.85, transition: 'opacity 1.5s ease 0.8s' }
}

export const getHighAltoAStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { transform: 'translate3d(-4px,2px,0)', opacity: 0.88, transition: 'transform 0.28s ease, opacity 0.28s ease' }
    case 'away':
    case 'prepare-return':
      return { transform: 'translate3d(-88px,22px,0) scale(0.72)', opacity: 0.1, transition: 'transform 1.3s cubic-bezier(0.4,0,1,1) 0.06s, opacity 1.0s ease 0.06s' }
    case 'returning':
      return { transform: 'translate3d(0,0,0) scale(1)', opacity: 1, transition: 'transform 1.9s cubic-bezier(0.05,0.9,0.25,1) 0.55s, opacity 1.4s ease 0.55s' }
    default:
      return { opacity: 1, animation: 'cloudDriftFront 15s ease-in-out infinite', transition: 'transform 0.5s ease, opacity 0.5s ease' }
  }
}

export const getHighAltoBStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { transform: 'translate3d(4px,-1px,0)', opacity: 0.88, transition: 'transform 0.28s ease, opacity 0.28s ease' }
    case 'away':
    case 'prepare-return':
      return { transform: 'translate3d(68px,-12px,0) scale(0.62)', opacity: 0.08, transition: 'transform 1.3s cubic-bezier(0.4,0,1,1) 0.08s, opacity 1.0s ease 0.08s' }
    case 'returning':
      return { transform: 'translate3d(0,0,0) scale(1)', opacity: 1, transition: 'transform 1.9s cubic-bezier(0.05,0.9,0.25,1) 0.48s, opacity 1.4s ease 0.48s' }
    default:
      return { opacity: 1, animation: 'cloudDriftBack 18s ease-in-out infinite 1s', transition: 'transform 0.5s ease, opacity 0.5s ease' }
  }
}

export const getMainCumulusLStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { transform: 'translate3d(-6px,3px,0) scale(1.03)', opacity: 0.9, willChange: 'transform, opacity', transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease' }
    case 'away':
    case 'prepare-return':
      return { transform: 'translate3d(-128px,32px,0) scale(0.58)', opacity: 0.09, willChange: 'transform, opacity', transition: 'transform 1.3s cubic-bezier(0.4,0,1,1), opacity 0.9s ease' }
    case 'returning':
      return { transform: 'translate3d(0,0,0) scale(1)', opacity: 1, willChange: 'transform, opacity', transition: 'transform 2.0s cubic-bezier(0.05,0.9,0.25,1) 0.38s, opacity 1.5s ease 0.38s' }
    default:
      return { opacity: 1, willChange: 'transform, opacity', animation: 'cloudDriftFront 12s ease-in-out infinite', transition: 'transform 0.6s ease, opacity 0.6s ease' }
  }
}

export const getMainCumulusRStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { transform: 'translate3d(8px,-2px,0)', opacity: 0.9, transition: 'transform 0.28s ease, opacity 0.28s ease' }
    case 'away':
    case 'prepare-return':
      return { transform: 'translate3d(95px,-16px,0) scale(0.56)', opacity: 0.09, willChange: 'transform, opacity', transition: 'transform 1.3s cubic-bezier(0.4,0,1,1) 0.10s, opacity 0.9s ease 0.10s' }
    case 'returning':
      return { transform: 'translate3d(0,0,0) scale(1)', opacity: 1, willChange: 'transform, opacity', transition: 'transform 1.9s cubic-bezier(0.05,0.9,0.25,1) 0.25s, opacity 1.4s ease 0.25s' }
    default:
      return { opacity: 1, animation: 'cloudDriftMid 16s ease-in-out infinite', transition: 'transform 0.6s ease, opacity 0.6s ease' }
  }
}

export const getFarCumulusStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { transform: 'translate3d(-2px,1px,0)', opacity: 0.95, transition: 'transform 0.28s ease' }
    case 'away':
    case 'prepare-return':
      return { transform: 'translate3d(-42px,8px,0) scale(0.80)', opacity: 0.18, transition: 'transform 1.3s cubic-bezier(0.4,0,1,1) 0.18s, opacity 1.0s ease 0.18s' }
    case 'returning':
      return { transform: 'translate3d(0,0,0) scale(1)', opacity: 1, transition: 'transform 1.8s cubic-bezier(0.05,0.9,0.25,1) 0.08s, opacity 1.3s ease 0.08s' }
    default:
      return { opacity: 1, animation: 'cloudDriftBack 20s ease-in-out infinite 3s', transition: 'transform 0.6s ease, opacity 0.6s ease' }
  }
}

export const getSpeedLinesStyle = (flyState: FlyState): React.CSSProperties => {
  switch (flyState) {
    case 'launching':
      return { opacity: 1, transition: 'opacity 0.2s ease' }
    case 'away':
      return { opacity: 0, transform: 'translate3d(50px,-20px,0)', willChange: 'transform, opacity', transition: 'opacity 0.35s ease, transform 0.6s ease' }
    case 'prepare-return':
      return { opacity: 0, transition: 'none' }
    case 'returning':
      return { opacity: 1, transform: 'translate3d(0,0,0)', transition: 'opacity 0.9s ease 1.1s, transform 1.8s ease' }
    default:
      return { opacity: 1, transition: 'opacity 0.5s ease' }
  }
}

export const getShockwaveStyle = (flyState: FlyState): React.CSSProperties => {
  if (flyState === 'launching') {
    return { animation: 'shockwaveExpand 0.65s ease-out forwards', transformBox: 'fill-box', transformOrigin: 'center' }
  }
  return { opacity: 0 }
}
