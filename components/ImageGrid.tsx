'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageItem {
  src: string
  alt: string
  caption?: string
}

interface ImageGridProps {
  images: ImageItem[]
  className?: string
}

export default function ImageGrid({ images, className = '' }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-square bg-secondary-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-secondary-dark hover:border-crimson">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {image.caption && (
              <p className="mt-2 text-sm text-text-gray/70 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                sizes="100vw"
              />
            </div>
            {images[selectedImage].caption && (
              <p className="mt-4 text-white text-center text-lg">
                {images[selectedImage].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

