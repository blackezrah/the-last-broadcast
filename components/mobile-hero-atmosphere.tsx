"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

export function MobileHeroAtmosphere() {
  const prefersReducedMotion = useReducedMotion()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sync = () => {
      const heroHeight = Math.max(window.innerHeight, 1)
      setScrollProgress(Math.min(window.scrollY / heroHeight, 1))
    }

    sync()
    window.addEventListener("scroll", sync, { passive: true })
    window.addEventListener("resize", sync)

    return () => {
      window.removeEventListener("scroll", sync)
      window.removeEventListener("resize", sync)
    }
  }, [])

  const y = prefersReducedMotion ? 0 : scrollProgress * -34
  const fade = prefersReducedMotion ? 1 : 1 - scrollProgress * 0.38

  return (
    <motion.div
      className="mobileHeroAtmosphere"
      aria-hidden="true"
      style={{ transform: `translate3d(0, ${y}px, 0)`, opacity: fade }}
    >
      <div className="mobileHeroBloom" />
      <div className="mobileHeroFog mobileHeroFogBack" />
      <div className="mobileHeroFog mobileHeroFogMid" />
      <div className="mobileHeroTransmission" />
      <div className="mobileHeroVignette" />
      <div className="mobileHeroGrain" />
      <div className="mobileHeroFrameLine mobileHeroFrameLineTop" />
      <div className="mobileHeroFrameLine mobileHeroFrameLineBottom" />
    </motion.div>
  )
}
