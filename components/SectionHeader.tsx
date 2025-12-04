import { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-4 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-crimson rounded-full -mb-1" />
      </h2>
      {subtitle && (
        <p className="text-xl text-text-gray/70 max-w-2xl mx-auto mt-6">{subtitle}</p>
      )}
    </div>
  )
}

