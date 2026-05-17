"use client"

import { useEffect, useState } from 'react'

export function AtmosphericEffects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Film grain overlay */}
      <div className="film-grain" aria-hidden="true" />
      
      {/* Vignette */}
      <div className="vignette" aria-hidden="true" />
      
      {/* Fog layer */}
      <div className="fog-layer" aria-hidden="true" />
      
      {/* Dust particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`dust-${i}`}
          className="dust-particle"
          aria-hidden="true"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 25}s`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        />
      ))}
      
      {/* Occasional rain streaks */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`rain-${i}`}
          className="rain-streak"
          aria-hidden="true"
          style={{
            left: `${10 + Math.random() * 80}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 30}s`,
            opacity: 0.05 + Math.random() * 0.05,
          }}
        />
      ))}
    </>
  )
}
