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
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-crimson rounded-full mt-2" />
      </h2>
      {subtitle && (
        <p className="text-xl text-text-gray/70 max-w-2xl mx-auto mt-6">{subtitle}</p>
      )}
    </div>
  )
}

