import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'crimson'
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'crimson',
  className = '',
}: CTAButtonProps) {
  const baseStyles =
    'inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2'
  
  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-blue-700 focus:ring-primary shadow-lg hover:shadow-xl',
    secondary:
      'bg-secondary text-white hover:bg-slate-800 focus:ring-secondary shadow-lg hover:shadow-xl',
    crimson:
      'bg-crimson text-white hover:bg-crimson-soft focus:ring-crimson shadow-lg hover:shadow-xl',
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

