'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/photos', label: 'Photos' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-secondary-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden border-l border-primary-black/50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-gray text-2xl hover:text-crimson transition-colors"
          >
            ×
          </button>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-xl font-semibold text-text-gray hover:text-crimson transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto mb-8">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center px-6 py-3 bg-crimson text-white font-semibold rounded-lg hover:bg-crimson-soft transition-colors"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

