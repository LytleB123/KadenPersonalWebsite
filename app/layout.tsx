import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kaden Lytle - Entrepreneur, Innovator & Business Builder',
  description:
    'Management major at Texas State University, President of TXST Wake Team, Advisor at Center for Innovation & Entrepreneurship, and Founder of Inlit AI and Board Bound Wake.',
  keywords: [
    'Kaden Lytle',
    'Entrepreneur',
    'Texas State University',
    'Inlit AI',
    'Board Bound Wake',
    'Business Strategy',
    'Sales',
    'Innovation',
  ],
  authors: [{ name: 'Kaden Lytle' }],
  openGraph: {
    title: 'Kaden Lytle - Entrepreneur, Innovator & Business Builder',
    description:
      'Management major at Texas State University building innovative businesses and leading teams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

