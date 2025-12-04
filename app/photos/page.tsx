import SectionHeader from '@/components/SectionHeader'
import ImageGrid from '@/components/ImageGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photos - Kaden Lytle',
  description: 'Photos from Kaden Lytle\'s journey in business, wake sports, and community leadership.',
}

export default function PhotosPage() {
  const images = [
    {
      src: '/headshot.jpg',
      alt: 'Kaden Lytle Professional Headshot',
      caption: 'Professional headshot',
    },
    {
      src: '/Podcast picture.jpg',
      alt: 'Kaden Lytle Podcast Appearance',
      caption: 'Podcast appearance',
    },
    {
      src: '/inlitlogo.png',
      alt: 'Inlit AI Logo',
      caption: 'Inlit AI - AI voice receptionist platform',
    },
    {
      src: '/bbwlogo.png',
      alt: 'Board Bound Wake Logo',
      caption: 'Board Bound Wake - Lake Travis wakesurf charter',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-primary-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Photos"
          subtitle="Capturing moments from my journey in business, sports, and leadership"
        />
        <ImageGrid images={images} />
      </div>
    </div>
  )
}

