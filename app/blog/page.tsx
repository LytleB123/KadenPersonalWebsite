import SectionHeader from '@/components/SectionHeader'
import BlogCard from '@/components/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog - Kaden Lytle",
  description: "Thoughts on entrepreneurship, business strategy, innovation, and leadership from Kaden Lytle.",
}

// In a real app, this would be fetched from a CMS or file system
const blogPosts = [
  {
    title: "Why I'm a Strong Candidate for Business, Sales, and Tech-Innovation Roles",
    excerpt:
      'Exploring my unique combination of entrepreneurial experience, technical innovation, and proven leadership in business development.',
    slug: 'why-strong-candidate',
    date: '2024-01-15',
  },
  // Add more blog posts here as they're created
]

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-primary-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Blog"
          subtitle="Thoughts on entrepreneurship, innovation, and business leadership"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
            />
          ))}
        </div>
        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-gray/70 text-lg">
              More blog posts coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

