'use client'

import { useState } from 'react'

interface ItalianHouse3DProps {
  className?: string
  width?: number | string
  height?: number | string
  variant?: 'simple' | 'detailed'
  animated?: boolean
}

/**
 * ItalianHouse3D - A charming 3D-style Italian two-floor house
 * 
 * Visual concept (for 5-year-olds):
 * A warm little house under the sun with two floors like two stacked toy boxes.
 * The bottom floor is where people walk in. The top floor has small windows.
 * The roof is made of red-orange clay tiles like small curved cookies.
 * The walls are creamy beige like vanilla ice cream.
 * Green shutters like little doors for windows.
 * A brown wooden door rounded at the top like a storybook door.
 * Little flower pots with red flowers near the windows.
 */
export function ItalianHouse3D({
  className,
  width = 480,
  height = 360,
  variant = 'detailed',
  animated = false,
}: ItalianHouse3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Colors
  const wallColor = '#F5E6D3' // Creamy beige
  const wallShadow = '#E8D4BE'
  const wallDark = '#D4C4A8'
  const roofColor = '#C45C3E' // Terracotta
  const roofLight = '#D9725A'
  const roofDark = '#A34830'
  const shutterColor = '#2D5A3D' // Green
  const shutterDark = '#1E3D29'
  const doorColor = '#6B4423' // Brown wood
  const doorLight = '#8B5A33'
  const windowColor = '#87CEEB' // Sky blue glass
  const windowGlow = '#B8E0F0'
  const flowerRed = '#E53935'
  const flowerGreen = '#388E3C'
  const stonePath = '#A89880'

  const showDetails = variant === 'detailed'

  return (
    <svg
      viewBox="0 0 480 360"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'w-full h-auto'}
      role="img"
      aria-label="Italian two-floor house with terracotta roof"
      onMouseEnter={() => animated && setIsHovered(true)}
      onMouseLeave={() => animated && setIsHovered(false)}
      style={{
        ...(animated && {
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.4s ease-out',
        }),
      }}
    >
      <defs>
        {/* Wall gradient - warm stucco look */}
        <linearGradient id="wallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={wallColor} />
          <stop offset="100%" stopColor={wallShadow} />
        </linearGradient>
        
        {/* Wall side gradient for 3D effect */}
        <linearGradient id="wallSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={wallShadow} />
          <stop offset="100%" stopColor={wallDark} />
        </linearGradient>

        {/* Roof gradient - terracotta tiles */}
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={roofLight} />
          <stop offset="50%" stopColor={roofColor} />
          <stop offset="100%" stopColor={roofDark} />
        </linearGradient>

        {/* Roof front gradient */}
        <linearGradient id="roofFrontGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={roofColor} />
          <stop offset="100%" stopColor={roofDark} />
        </linearGradient>

        {/* Shutter gradient */}
        <linearGradient id="shutterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={shutterColor} />
          <stop offset="100%" stopColor={shutterDark} />
        </linearGradient>

        {/* Door gradient - wood */}
        <linearGradient id="doorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={doorLight} />
          <stop offset="50%" stopColor={doorColor} />
          <stop offset="100%" stopColor="#4A2C15" />
        </linearGradient>

        {/* Window glass gradient */}
        <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={windowColor} />
          <stop offset="100%" stopColor={windowGlow} />
        </linearGradient>

        {/* Ground shadow */}
        <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        {/* Sun glow */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFE082" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="240" cy="335" rx="180" ry="20" fill="url(#groundShadow)" />

      {/* Stone path */}
      <path
        d="M 200 340 
           Q 220 330, 240 340 
           Q 260 350, 280 340
           L 280 360 L 200 360 Z"
        fill={stonePath}
        opacity={showDetails ? 0.7 : 0.5}
      />
      <path
        d="M 210 345 
           Q 225 338, 240 345 
           Q 255 352, 270 345"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />

      {/* House main structure - back wall (left side for 3D) */}
      <path
        d="M 80 140 L 80 280 L 240 280 L 240 140 Z"
        fill={wallDark}
      />

      {/* House main structure - front wall */}
      <path
        d="M 100 120 L 100 280 L 380 280 L 380 120 Z"
        fill="url(#wallGradient)"
      />

      {/* House right side wall (3D perspective) */}
      <path
        d="M 380 120 L 400 140 L 400 280 L 380 280 Z"
        fill="url(#wallSideGradient)"
      />

      {/* Roof - main */}
      <path
        d="M 70 130 L 250 30 L 410 130 L 390 130 L 250 50 L 90 130 Z"
        fill="url(#roofGradient)"
      />

      {/* Roof - front slope */}
      <path
        d="M 85 130 L 250 40 L 395 130 L 380 130 L 250 55 L 100 130 Z"
        fill="url(#roofFrontGradient)"
      />

      {/* Roof tiles - horizontal lines */}
      {showDetails && (
        <>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path
              key={`roof-line-${i}`}
              d={`M ${95 + i * 12} ${125 - i * 4} L ${385 - i * 5} ${125 - i * 4}`}
              stroke={roofDark}
              strokeWidth="1"
              opacity={0.5}
            />
          ))}
          {/* Roof tile pattern - curved shapes */}
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((col) => (
              <path
                key={`tile-${row}-${col}`}
                d={`M ${110 + col * 18 + row * 2} ${115 - row * 5} 
                   Q ${117 + col * 18 + row * 2} ${113 - row * 5}, ${124 + col * 18 + row * 2} ${115 - row * 5}`}
                stroke={roofDark}
                strokeWidth="1.5"
                fill="none"
                opacity={0.4}
              />
            ))
          )}
        </>
      )}

      {/* Roof edge detail */}
      <path
        d="M 85 130 L 395 130"
        stroke={roofDark}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Chimney */}
      <rect x="320" y="50" width="25" height="50" fill={wallShadow} />
      <rect x="318" y="45" width="30" height="8" fill={roofDark} />
      
      {/* Chimney details */}
      {showDetails && (
        <>
          {/* Chimney bricks */}
          <line x1="320" y1="60" x2="345" y2="60" stroke="#C4A882" strokeWidth="1" opacity="0.5" />
          <line x1="320" y1="70" x2="345" y2="70" stroke="#C4A882" strokeWidth="1" opacity="0.5" />
          <line x1="320" y1="80" x2="345" y2="80" stroke="#C4A882" strokeWidth="1" opacity="0.5" />
          {/* Smoke */}
          <circle cx="335" cy="35" r="4" fill="#E8E8E8" opacity="0.6" className={animated ? 'animate-pulse' : ''} />
          <circle cx="340" cy="25" r="3" fill="#E8E8E8" opacity="0.4" className={animated ? 'animate-pulse' : ''} style={{ animationDelay: '0.5s' }} />
        </>
      )}

      {/* Second floor windows */}
      {/* Window 1 - left top */}
      <g>
        <rect x="130" y="155" width="35" height="45" fill="url(#windowGradient)" stroke={wallDark} strokeWidth="2" />
        {/* Window frame */}
        <rect x="127" y="152" width="41" height="51" fill="none" stroke={doorColor} strokeWidth="2" />
        {/* Window cross */}
        <line x1="147.5" y1="155" x2="147.5" y2="200" stroke={doorColor} strokeWidth="2" />
        <line x1="130" y1="177.5" x2="165" y2="177.5" stroke={doorColor} strokeWidth="2" />
        {/* Left shutter */}
        <rect x="110" y="155" width="18" height="45" fill="url(#shutterGradient)" rx="1" />
        {showDetails && (
          <>
            <line x1="115" y1="160" x2="115" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
            <line x1="122" y1="160" x2="122" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
          </>
        )}
        {/* Right shutter */}
        <rect x="167" y="155" width="18" height="45" fill="url(#shutterGradient)" rx="1" />
        {showDetails && (
          <>
            <line x1="172" y1="160" x2="172" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
            <line x1="179" y1="160" x2="179" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
          </>
        )}
      </g>

      {/* Window 2 - center top */}
      <g>
        <rect x="222" y="155" width="35" height="45" fill="url(#windowGradient)" stroke={wallDark} strokeWidth="2" />
        <rect x="219" y="152" width="41" height="51" fill="none" stroke={doorColor} strokeWidth="2" />
        <line x1="239.5" y1="155" x2="239.5" y2="200" stroke={doorColor} strokeWidth="2" />
        <line x1="222" y1="177.5" x2="257" y2="177.5" stroke={doorColor} strokeWidth="2" />
        {/* Left shutter */}
        <rect x="202" y="155" width="18" height="45" fill="url(#shutterGradient)" rx="1" />
        {showDetails && (
          <>
            <line x1="207" y1="160" x2="207" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
            <line x1="214" y1="160" x2="214" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
          </>
        )}
        {/* Right shutter */}
        <rect x="259" y="155" width="18" height="45" fill="url(#shutterGradient)" rx="1" />
        {showDetails && (
          <>
            <line x1="264" y1="160" x2="264" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
            <line x1="271" y1="160" x2="271" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
          </>
        )}
      </g>

      {/* Window 3 - right top */}
      <g>
        <rect x="314" y="155" width="35" height="45" fill="url(#windowGradient)" stroke={wallDark} strokeWidth="2" />
        <rect x="311" y="152" width="41" height="51" fill="none" stroke={doorColor} strokeWidth="2" />
        <line x1="331.5" y1="155" x2="331.5" y2="200" stroke={doorColor} strokeWidth="2" />
        <line x1="314" y1="177.5" x2="349" y2="177.5" stroke={doorColor} strokeWidth="2" />
        {/* Left shutter */}
        <rect x="294" y="155" width="18" height="45" fill="url(#shutterGradient)" rx="1" />
        {showDetails && (
          <>
            <line x1="299" y1="160" x2="299" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
            <line x1="306" y1="160" x2="306" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
          </>
        )}
        {/* Right shutter */}
        <rect x="351" y="155" width="18" height="45" fill="url(#shutterGradient)" rx="1" />
        {showDetails && (
          <>
            <line x1="356" y1="160" x2="356" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
            <line x1="363" y1="160" x2="363" y2="195" stroke={shutterDark} strokeWidth="1" opacity="0.5" />
          </>
        )}
      </g>

      {/* Balcony - second floor center (detailed only) */}
      {showDetails && (
        <g>
          {/* Balcony floor */}
          <rect x="215" y="200" width="50" height="4" fill={doorColor} rx="1" />
          {/* Balcony rail */}
          <rect x="215" y="185" width="50" height="2" fill={doorColor} />
          <rect x="215" y="192" width="50" height="2" fill={doorColor} />
          {/* Balcony posts */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`post-${i}`} x={217 + i * 11} y="185" width="2" height="19" fill={doorColor} />
          ))}
          {/* Flower pot on balcony */}
          <rect x="235" y="175" width="10" height="12" fill="#8B4513" rx="1" />
          <ellipse cx="240" cy="175" rx="6" ry="3" fill={flowerGreen} />
          <circle cx="237" cy="172" r="3" fill={flowerRed} />
          <circle cx="243" cy="173" r="2.5" fill={flowerRed} />
          <circle cx="240" cy="170" r="2" fill={flowerRed} />
        </g>
      )}

      {/* First floor - Door */}
      <g>
        {/* Door frame */}
        <path
          d="M 210 280 L 210 225 Q 210 210, 225 210 L 255 210 Q 270 210, 270 225 L 270 280 Z"
          fill="url(#doorGradient)"
          stroke="#4A2C15"
          strokeWidth="3"
        />
        {/* Door panels */}
        <path
          d="M 220 280 L 220 225 Q 220 218, 230 218 L 240 218 Q 245 218, 245 225 L 245 280 Z"
          fill="#5A3A1D"
          opacity="0.3"
        />
        <path
          d="M 250 280 L 250 225 Q 250 218, 260 218 L 260 225 L 260 280 Z"
          fill="#5A3A1D"
          opacity="0.3"
        />
        {/* Door handle */}
        <circle cx="258" cy="245" r="3" fill="#FFD700" />
        <circle cx="258" cy="245" r="1.5" fill="#B8860B" />
        {/* Door arch detail */}
        <path
          d="M 215 225 Q 215 215, 225 215 L 255 215 Q 265 215, 265 225"
          fill="none"
          stroke="#4A2C15"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>

      {/* First floor windows */}
      {/* Window 4 - left bottom */}
      <g>
        <rect x="130" y="230" width="35" height="40" fill="url(#windowGradient)" stroke={wallDark} strokeWidth="2" />
        <rect x="127" y="227" width="41" height="46" fill="none" stroke={doorColor} strokeWidth="2" />
        <line x1="147.5" y1="230" x2="147.5" y2="270" stroke={doorColor} strokeWidth="2" />
        <line x1="130" y1="250" x2="165" y2="250" stroke={doorColor} strokeWidth="2" />
        {/* Shutter left */}
        <rect x="110" y="230" width="18" height="40" fill="url(#shutterGradient)" rx="1" />
        {/* Shutter right */}
        <rect x="167" y="230" width="18" height="40" fill="url(#shutterGradient)" rx="1" />
      </g>

      {/* Window 5 - right bottom */}
      <g>
        <rect x="314" y="230" width="35" height="40" fill="url(#windowGradient)" stroke={wallDark} strokeWidth="2" />
        <rect x="311" y="227" width="41" height="46" fill="none" stroke={doorColor} strokeWidth="2" />
        <line x1="331.5" y1="230" x2="331.5" y2="270" stroke={doorColor} strokeWidth="2" />
        <line x1="314" y1="250" x2="349" y2="250" stroke={doorColor} strokeWidth="2" />
        {/* Shutter left */}
        <rect x="294" y="230" width="18" height="40" fill="url(#shutterGradient)" rx="1" />
        {/* Shutter right */}
        <rect x="351" y="230" width="18" height="40" fill="url(#shutterGradient)" rx="1" />
      </g>

      {/* Decorative elements - flower pots */}
      {showDetails && (
        <>
          {/* Flower pot left */}
          <g>
            <path d="M 125 280 L 130 260 L 145 260 L 150 280 Z" fill="#8B4513" />
            <ellipse cx="137.5" cy="260" rx="10" ry="4" fill={flowerGreen} />
            <circle cx="133" cy="255" r="4" fill={flowerRed} />
            <circle cx="137" cy="252" r="3.5" fill={flowerRed} />
            <circle cx="142" cy="254" r="3" fill={flowerRed} />
            <circle cx="140" cy="258" r="2" fill="#FFEB3B" />
          </g>
          
          {/* Flower pot right */}
          <g>
            <path d="M 330 280 L 335 260 L 350 260 L 355 280 Z" fill="#8B4513" />
            <ellipse cx="342.5" cy="260" rx="10" ry="4" fill={flowerGreen} />
            <circle cx="338" cy="255" r="4" fill={flowerRed} />
            <circle cx="342" cy="252" r="3.5" fill={flowerRed} />
            <circle cx="347" cy="254" r="3" fill={flowerRed} />
            <circle cx="345" cy="258" r="2" fill="#FFEB3B" />
          </g>

          {/* Wall lamp */}
          <g>
            <rect x="195" y="235" width="5" height="15" fill="#4A4A4A" />
            <rect x="190" y="230" width="15" height="8" fill="#4A4A4A" rx="2" />
            <rect x="193" y="232" width="9" height="4" fill="#FFF8E1" />
            {/* Lamp glow */}
            <circle cx="197.5" cy="234" r="8" fill="url(#sunGlow)" opacity="0.5" />
          </g>

          {/* Wooden beam decoration */}
          <rect x="95" y="140" width="15" height="8" fill={doorColor} rx="1" />
          <rect x="370" y="140" width="15" height="8" fill={doorColor} rx="1" />

          {/* Window boxes */}
          <rect x="125" y="200" width="45" height="8" fill="#8B4513" rx="1" />
          <rect x="127" y="195" width="41" height="6" fill={flowerGreen} rx="1" />
          <circle cx="135" cy="193" r="3" fill={flowerRed} />
          <circle cx="150" cy="194" r="2.5" fill={flowerRed} />
          <circle cx="160" cy="192" r="2" fill={flowerRed} />

          <rect x="309" y="200" width="45" height="8" fill="#8B4513" rx="1" />
          <rect x="311" y="195" width="41" height="6" fill={flowerGreen} rx="1" />
          <circle cx="319" cy="193" r="3" fill={flowerRed} />
          <circle cx="334" cy="194" r="2.5" fill={flowerRed} />
          <circle cx="344" cy="192" r="2" fill={flowerRed} />
        </>
      )}

      {/* Sun decoration */}
      {showDetails && (
        <g>
          <circle cx="420" cy="50" r="20" fill="#FFE082" opacity="0.8" />
          <circle cx="420" cy="50" r="15" fill="#FFD54F" />
          {/* Sun rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={`ray-${angle}`}
              x1={420 + Math.cos((angle * Math.PI) / 180) * 18}
              y1={50 + Math.sin((angle * Math.PI) / 180) * 18}
              x2={420 + Math.cos((angle * Math.PI) / 180) * 25}
              y2={50 + Math.sin((angle * Math.PI) / 180) * 25}
              stroke="#FFD54F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>
      )}

      {/* Wall texture (stucco effect) */}
      {showDetails && (
        <g opacity="0.1">
          {[...Array(20)].map((_, i) => (
            <circle
              key={`texture-${i}`}
              cx={110 + Math.random() * 250}
              cy={150 + Math.random() * 100}
              r={1 + Math.random()}
              fill="#8B7355"
            />
          ))}
        </g>
      )}
    </svg>
  )
}