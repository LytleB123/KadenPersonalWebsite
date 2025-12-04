'use client'

import Image from 'next/image'

interface HeadshotProps {
  className?: string
}

export default function Headshot({ className = '' }: HeadshotProps) {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-crimson/30">
        <Image
          src="/headshot.jpg"
          alt="Kaden Lytle"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

