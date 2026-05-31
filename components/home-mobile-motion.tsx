"use client"

import { ReactNode, useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

type HomeMobileRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function HomeMobileReveal({
  children,
  className,
  delay = 0,
}: HomeMobileRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")
    const sync = () => setIsMobile(media.matches)

    sync()
    media.addEventListener("change", sync)

    return () => media.removeEventListener("change", sync)
  }, [])

  if (!isMobile || prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
