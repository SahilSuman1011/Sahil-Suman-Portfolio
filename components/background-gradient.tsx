"use client"

import type React from "react"
import { motion } from "framer-motion"

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#0ea5e9] via-[#22d3ee] to-[#0ea5e9] opacity-100 blur-sm transition duration-1000 group-hover:opacity-100 ${
          animate ? "bg-[length:400%_400%]" : ""
        }`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#0ea5e9] via-[#22d3ee] to-[#0ea5e9] ${
          animate ? "bg-[length:400%_400%]" : ""
        }`}
      />
      <div className={`relative ${className}`}>{children}</div>
    </div>
  )
}

