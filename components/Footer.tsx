import Link from 'next/link'
import CTAButton from './CTAButton'

export default function Footer() {
  return (
    <footer className="bg-primary-black border-t border-secondary-dark mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-gray">Kaden Lytle</h3>
            <p className="text-text-gray/70 leading-relaxed">
              Entrepreneur, Innovator & Business Builder. Management major at
              Texas State University, building the future through innovation and
              leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-gray">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/photos"
                  className="text-text-gray/70 hover:text-crimson transition-colors"
                >
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-gray/70 hover:text-crimson transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-gray/70 hover:text-crimson transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-gray">Let's Connect</h3>
            <p className="text-text-gray/70 mb-4">
              Interested in collaboration or have a question? Get in touch!
            </p>
            <CTAButton href="/contact" variant="crimson">
              Contact Me
            </CTAButton>
          </div>
        </div>

        <div className="border-t border-secondary-dark pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-gray/50 text-sm">
              © {new Date().getFullYear()} Kaden Lytle. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/kaden-lytle-504a04307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray/50 hover:text-crimson transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-text-gray/50 hover:text-crimson transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

