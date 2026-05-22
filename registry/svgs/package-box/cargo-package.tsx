'use client'

import React, { useState } from 'react'

import { CargoPackageBg } from './cargo-package-bg'

type PackagePhase = 'closed' | 'cutting' | 'open'

const LEFT_FLAP_CLOSED = 'M 47 42 L 85 20 L 104 31 L 66 53 Z'
const LEFT_FLAP_OPEN = 'M 47 42 L 85 20 L 92 9 L 54 31 Z'
const RIGHT_FLAP_CLOSED = 'M 66 53 L 104 31 L 123 42 L 85 64 Z'
const RIGHT_FLAP_OPEN = 'M 78 31 L 116 9 L 123 42 L 85 64 Z'
const LEFT_TAPE_CLOSED = 'M 59 49 L 78 38 L 97 27 L 104 31 L 66 53 Z'
const LEFT_TAPE_OPEN = 'M 51 35 L 70 24 L 89 13 L 92 9 L 54 31 Z'
const RIGHT_TAPE_CLOSED = 'M 104 31 L 111 35 L 92 46 L 73 57 L 66 53 Z'
const RIGHT_TAPE_OPEN = 'M 116 9 L 119 21 L 100 32 L 81 43 L 78 31 Z'

interface CargoPackageProps {
  className?: string
}

export function CargoPackage({ className }: CargoPackageProps) {
  const [phase, setPhase] = useState<PackagePhase>('closed')

  const handleClick = (): void => {
    if (phase === 'cutting') return
    if (phase === 'open') {
      setPhase('closed')
      return
    }
    setPhase('cutting')
    setTimeout(() => setPhase('open'), 380)
  }

  const isOpen = phase === 'open'
  const isCutting = phase === 'cutting'

  const cutLineStyle: React.CSSProperties = isCutting
    ? {
        animation: 'tapeCutDraw 0.30s ease-out forwards',
        filter:
          'drop-shadow(0 0 3px rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(200,220,255,0.55))',
      }
    : isOpen
      ? { opacity: 0, strokeDashoffset: 0, transition: 'opacity 0.2s ease' }
      : { opacity: 0, strokeDashoffset: 44 }

  return (
    <svg
      viewBox="0 0 220 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'w-44 h-24 overflow-visible cursor-pointer select-none'}
      aria-hidden="true"
      onClick={handleClick}
    >
      <defs>
        <style>{`
          @keyframes tapeCutDraw {
            0%   { stroke-dashoffset: 44; opacity: 0; }
            14%  { opacity: 1; }
            88%  { stroke-dashoffset: 0; opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0.85; }
          }
          @keyframes boxShakeCut {
            0%, 100% { transform: translate(0px, 0px); }
            20%  { transform: translate(-1.5px,  0.8px); }
            42%  { transform: translate( 2.0px, -0.5px); }
            64%  { transform: translate(-1.0px,  0.7px); }
            85%  { transform: translate( 0.7px, -0.3px); }
          }
          @keyframes boxOpenGlow {
            0%   { opacity: 0; }
            28%  { opacity: 1; }
            55%  { opacity: 0.95; }
            100% { opacity: 0; }
          }
        `}</style>

        <radialGradient id="package-shadow-3d" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#141414" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#141414" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="box-light-beam" x1="85" y1="42" x2="85" y2="-17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDE0" stopOpacity="0.72" />
          <stop offset="22%" stopColor="#FAE080" stopOpacity="0.50" />
          <stop offset="60%" stopColor="#EAA800" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="box-inside-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="35%" stopColor="#EAA800" />
          <stop offset="100%" stopColor="#6B4724" />
        </radialGradient>
        <radialGradient id="particle-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#EAA800" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="motion-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EAA800" stopOpacity="0" />
          <stop offset="20%" stopColor="#EAA800" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#EAA800" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="motion-dark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#141414" stopOpacity="0" />
          <stop offset="30%" stopColor="#141414" stopOpacity="0.18" />
          <stop offset="80%" stopColor="#141414" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#141414" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="atmo-depth" cx="110" cy="-15" r="145" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A1610" stopOpacity="0.50" />
          <stop offset="55%" stopColor="#1A1610" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#1A1610" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="floor-ambient-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#141414" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#141414" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#141414" stopOpacity="0" />
        </radialGradient>
        <filter id="depth-blur-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.85" />
        </filter>
        <filter id="depth-blur-far" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter id="shadow-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
        <filter id="shadow-blur-hard" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id="light-beam-blur" x="-25%" y="-20%" width="150%" height="140%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>
        <linearGradient id="puddle-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8AAABB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4A7080" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <CargoPackageBg />

      {/* Contact shadows */}
      <path d="M 58 88 L 96 110 L 134 88 L 96 66 Z" fill="#141414" opacity="0.28" filter="url(#shadow-blur-soft)" />
      <path d="M 47 82 L 85 104 L 123 82 L 85 60 Z" fill="#141414" opacity="0.55" filter="url(#shadow-blur-hard)" />

      {/* 3D kraft box */}
      <g style={{ animation: isCutting ? 'boxShakeCut 0.22s ease-in-out 1' : 'none' }}>
        <path d="M 47 42 L 85 64 L 123 42 L 85 20 Z" fill="url(#box-inside-glow)" />

        <g
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(-18px)' : 'translateY(0)',
            transformOrigin: '85px 42px',
          }}
        >
          <circle cx="85" cy="42" r="12" fill="url(#particle-glow)" />
          <path d="M 85 22 L 85 62" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" strokeLinecap="round" />
          <path d="M 65 42 L 105 42" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" strokeLinecap="round" />
        </g>

        {/* Right face (shadow) */}
        <path d="M 85 64 L 123 42 L 123 82 L 85 104 Z" fill="#B88A5A" stroke="#A4794B" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Left face (lit) */}
        <path d="M 47 42 L 85 64 L 85 104 L 47 82 Z" fill="#E0C282" stroke="#CDB070" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Left face tape stripe */}
        <path d="M 59 49 L 73 57 L 73 97 L 59 89 Z" fill="#4A2E1B" stroke="#3D2516" strokeWidth="1.2" strokeLinejoin="round" />

        {/* Light column visible when open */}
        {isOpen && (
          <path
            d="M 47 42 L 47 -2 L 85 -17 L 123 -2 L 123 42 Z"
            fill="url(#box-light-beam)"
            filter="url(#light-beam-blur)"
            className="pointer-events-none"
            style={{ animation: 'boxOpenGlow 5s ease-in-out infinite' }}
          />
        )}

        {/* Top flaps + tape */}
        <g>
          <path
            d={isOpen ? LEFT_FLAP_OPEN : LEFT_FLAP_CLOSED}
            fill="#EAD2AC"
            stroke="#D8BA94"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-all duration-700 ease-in-out"
          />
          <path
            d={isOpen ? LEFT_TAPE_OPEN : LEFT_TAPE_CLOSED}
            fill="#4A2E1B"
            stroke="#3D2516"
            strokeWidth="1.2"
            strokeLinejoin="round"
            className="transition-all duration-700 ease-in-out"
          />
          <path
            d={isOpen ? RIGHT_FLAP_OPEN : RIGHT_FLAP_CLOSED}
            fill="#EAD2AC"
            stroke="#D8BA94"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-all duration-700 ease-in-out"
          />
          <path
            d={isOpen ? RIGHT_TAPE_OPEN : RIGHT_TAPE_CLOSED}
            fill="#4A2E1B"
            stroke="#3D2516"
            strokeWidth="1.2"
            strokeLinejoin="round"
            className="transition-all duration-700 ease-in-out"
          />
        </g>

        {/* Cut line */}
        <path
          d="M 66 53 L 104 31"
          stroke="#F0F8FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="44"
          style={cutLineStyle}
        />

        {/* Shipping invoice label */}
        <g transform="matrix(0.866, 0.5, 0, 1, 49, 54)">
          <rect x="0" y="0" width="8" height="10" rx="0.5" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="0.5" />
          <line x1="1" y1="2" x2="7" y2="2" stroke="#27272A" strokeWidth="0.6" />
          <line x1="1" y1="5" x2="5" y2="5" stroke="#27272A" strokeWidth="0.6" />
          <line x1="1" y1="8" x2="6" y2="8" stroke="#27272A" strokeWidth="0.6" />
        </g>

        {/* Fragile arrows */}
        <g transform="matrix(0.866, 0.5, 0, 1, 49, 68)" stroke="#27272A" strokeWidth="0.6" fill="none" opacity="0.9">
          <path d="M 1 4 L 1 1 M 1 1 L 0 2 M 1 1 L 2 2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 3.5 4 L 3.5 1 M 3.5 1 L 2.5 2 M 3.5 1 L 4.5 2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="0" y1="5" x2="4.5" y2="5" strokeLinecap="round" />
          <path d="M 6 1 L 8 1 L 8 2.5 C 8 3.5, 7.2 3.8, 7 3.8 L 7 5 M 6 5 L 8 5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Recycling mark */}
        <g transform="matrix(0.866, -0.5, 0, 1, 98, 70)" stroke="#27272A" strokeWidth="0.6" fill="none" opacity="0.8">
          <path d="M 3 0.5 C 4 0.5, 5 1, 5.5 2 L 4.5 2 M 5.5 2 L 6 1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 6 4 C 6 5, 5 5.5, 4 6 L 4 5 M 4 6 L 5 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 1.5 5 C 1 4.5, 1 3.5, 1.5 2.5 L 2.2 3 M 1.5 2.5 L 1 3.3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* Floor details */}
      <g fill="none" stroke="#9A8E80" strokeWidth="0.8" strokeLinecap="round">
        <path d="M 12 106 L 19 102 L 24 107 L 30 104" />
        <path d="M 145 90 L 151 86 L 157 91" />
      </g>
      <ellipse cx="28" cy="115" rx="11" ry="3.5" fill="url(#puddle-water)" />
      <ellipse cx="26" cy="113" rx="4" ry="1.2" fill="#FFFFFF" fillOpacity="0.35" />
    </svg>
  )
}
