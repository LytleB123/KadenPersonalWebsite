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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
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
      viewport={{ once: true, amount: 0.2 }}
      variants={finalVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}


