"use client"

const dustSlots = Array.from({ length: 15 }, (_, index) => {
  const seed = index + 1

  return {
    left: `${(seed * 37) % 100}%`,
    animationDuration: `${15 + ((seed * 11) % 25)}s`,
    animationDelay: `${(seed * 7) % 20}s`,
  }
})

const rainSlots = Array.from({ length: 5 }, (_, index) => {
  const seed = index + 1

  return {
    left: `${10 + ((seed * 17) % 80)}%`,
    animationDuration: `${8 + ((seed * 5) % 12)}s`,
    animationDelay: `${(seed * 13) % 30}s`,
    opacity: 0.05 + ((seed * 3) % 5) * 0.01,
  }
})

export function AtmosphericEffects() {
  return (
    <>
      {/* Film grain overlay */}
      <div className="film-grain" aria-hidden="true" />
      
      {/* Vignette */}
      <div className="vignette" aria-hidden="true" />
      
      {/* Fog layer */}
      <div className="fog-layer" aria-hidden="true" />
      
      {/* Dust particles */}
      {dustSlots.map((slot, i) => (
        <div
          key={`dust-${i}`}
          className="dust-particle"
          aria-hidden="true"
          style={slot}
        />
      ))}
      
      {/* Occasional rain streaks */}
      {rainSlots.map((slot, i) => (
        <div
          key={`rain-${i}`}
          className="rain-streak"
          aria-hidden="true"
          style={slot}
        />
      ))}
    </>
  )
}
