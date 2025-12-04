'use client'

import Image from 'next/image'
import CTAButton from './CTAButton'
import ScrollAnimate from './ScrollAnimate'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder-wakesurf.JPG"
          alt="Board Bound Wake Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Blur effect for depth */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Dark Overlay (70% opacity) */}
      <div className="absolute inset-0 z-10 bg-primary-black/70" />

      {/* Haze White Overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
      />

      {/* Gradient from top to bottom for readability */}
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-transparent via-transparent to-primary-black/40" />

      {/* Content Container */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0">
          {/* Left Side - Podcast Photo */}
          <ScrollAnimate variant="slideLeft" className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <div className="bg-secondary-dark/50 backdrop-blur-sm rounded-lg overflow-hidden border border-crimson/20 shadow-xl">
                <Image
                  src="/Podcast picture.jpg"
                  alt="Kaden Lytle Podcast Appearance"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollAnimate>

          {/* Right Side - Intro Text */}
          <ScrollAnimate variant="slideRight" delay={0.2} className="text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-gray leading-relaxed">
                I'm <span className="text-crimson font-semibold">Kaden Lytle</span> — entrepreneur, founder of{' '}
                <span className="text-crimson-soft">Inlit AI</span> and{' '}
                <span className="text-crimson-soft">Board Bound Wake</span>, and President of the Texas State Wake Team. I build businesses, create automations, and help people have unforgettable experiences. Welcome to my website.
              </p>
              
              {/* Crimson Accent Underline */}
              <div className="flex justify-center lg:justify-start">
                <div className="h-1 w-24 bg-crimson rounded-full" />
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <CTAButton href="/contact" variant="crimson">
                  Let's Connect
                </CTAButton>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {/* Subtle blur effect for depth */}
      <div className="absolute inset-0 z-[15] backdrop-blur-[1px]" />
    </section>
  )
}

