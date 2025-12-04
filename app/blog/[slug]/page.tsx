import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Simple MDX content loader
async function getPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    return { data, content }
  } catch (error) {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: `${post.data.title} - Kaden Lytle`,
    description: post.data.excerpt || '',
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="w-full min-h-screen bg-primary-black py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-gray mb-4">
            {post.data.title}
          </h1>
          {post.data.date && (
            <p className="text-text-gray/60 text-lg">
              {new Date(post.data.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </header>

        <div className="prose prose-lg max-w-none 
          prose-headings:text-text-gray prose-headings:relative prose-headings:pb-2
          prose-h1:border-b-2 prose-h1:border-crimson prose-h1:pb-4
          prose-h2:border-b-2 prose-h2:border-crimson prose-h2:pb-3 prose-h2:mb-6 prose-h2:mt-8
          prose-h3:text-text-gray prose-h3:mb-4 prose-h3:mt-6
          prose-p:text-text-gray/80 prose-p:leading-relaxed
          prose-a:text-crimson prose-a:hover:text-crimson-soft
          prose-strong:text-text-gray
          prose-code:text-crimson prose-code:bg-secondary-dark prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-ul:text-text-gray/80 prose-li:text-text-gray/80
          prose-blockquote:border-crimson prose-blockquote:text-text-gray/70">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-dark">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <CTAButton href="/blog" variant="secondary">
              ← Back to Blog
            </CTAButton>
            <CTAButton href="/contact">
              Let's Connect
            </CTAButton>
          </div>
        </div>
      </article>
    </div>
  )
}

