"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  duration: number
}

export function AnimatedNumber({ value, duration }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setDisplayValue(Math.floor(progress * value))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
    controls.start({ scale: [1, 1.2, 1], transition: { duration: 0.5 } })
  }, [value, duration, controls])

  return (
    <motion.span animate={controls} className="font-bold text-4xl">
      {displayValue}
    </motion.span>
  )
}

