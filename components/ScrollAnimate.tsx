'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimateProps {
  children: ReactNode
  variant?: 'fadeIn' | 'slideLeft' | 'slideRight' | 'slideUp' | 'scaleUp'
  delay?: number
  duration?: number
  className?: string
}

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0.3, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
  },
  slideRight: {
    hidden: { opacity: 0.3, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
  },
  slideUp: {
    hidden: { opacity: 0.3, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0.3, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
  },
}

export default function ScrollAnimate({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration,
  className = '',
}: ScrollAnimateProps) {
  const variantConfig = animationVariants[variant]

  // Override duration if provided
  const finalVariants = duration
    ? {
        ...variantConfig,
        visible: {
          ...variantConfig.visible,
          transition: {
            ...(variantConfig.visible as any).transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variantConfig,
        visible: {
          ...variantConfig.visible,
          transition: {
            ...(variantConfig.visible as any).transition,
            delay,
          },
        },
      }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
      variants={finalVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}


