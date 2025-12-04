import Link from 'next/link'
import { ReactNode } from 'react'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date?: string
  className?: string
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  className = '',
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`block bg-secondary-dark rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-secondary-dark hover:border-crimson/30 ${className}`}
    >
      <h3 className="text-2xl font-bold text-text-gray mb-3">{title}</h3>
      {date && (
        <p className="text-sm text-text-gray/50 mb-3">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      )}
      <p className="text-text-gray/80 leading-relaxed">{excerpt}</p>
      <div className="mt-4 text-crimson font-semibold hover:text-crimson-soft transition-colors">
        Read more →
      </div>
    </Link>
  )
}

