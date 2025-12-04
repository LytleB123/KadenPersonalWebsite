import { ReactNode } from 'react'
import CTAButton from './CTAButton'

interface ProjectCardProps {
  title: string
  role: string
  description: string
  highlights?: string[]
  children?: ReactNode
  className?: string
}

export default function ProjectCard({
  title,
  role,
  description,
  highlights,
  children,
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`bg-secondary-dark rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-secondary-dark hover:border-crimson/30 ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-text-gray mb-2">{title}</h3>
        <p className="text-crimson font-semibold">{role}</p>
      </div>
      <p className="text-text-gray/80 mb-4 leading-relaxed">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="list-disc list-inside mb-6 space-y-2 text-text-gray/70">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
      {children}
    </div>
  )
}

