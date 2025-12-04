import SectionHeader from '@/components/SectionHeader'
import CTAButton from '@/components/CTAButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact - Kaden Lytle",
  description: "Get in touch with Kaden Lytle for business opportunities, collaborations, or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-primary-black relative">
      {/* Dark Blurred Lake Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Placeholder lake background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-blue-900/30 to-secondary-dark">
          {/* Water pattern overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary-black/80" />
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get In Touch"
            subtitle="Let's connect and explore opportunities together"
          />

          <div className="mb-8 p-6 bg-secondary-dark/80 backdrop-blur-sm rounded-xl border border-crimson/20">
            <p className="text-text-gray text-lg text-center">
              <span className="text-crimson font-semibold">I respond fast</span> — let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="bg-secondary-dark/80 backdrop-blur-sm rounded-xl p-8 border border-secondary-dark">
              <h2 className="text-2xl font-bold text-text-gray mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-gray/70 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:kadenlytle@gmail.com"
                    className="text-crimson hover:text-crimson-soft transition-colors text-lg font-medium"
                  >
                    kadenlytle@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-gray/70 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+18329166514"
                    className="text-crimson hover:text-crimson-soft transition-colors text-lg font-medium"
                  >
                    832-916-6514
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-gray/70 mb-2">
                    Location
                  </h3>
                  <p className="text-text-gray/80 text-lg">
                    San Marcos, Texas
                    <br />
                    Texas State University
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-secondary-dark/80 backdrop-blur-sm rounded-xl p-8 border border-secondary-dark">
              <h2 className="text-2xl font-bold text-text-gray mb-6">
                Quick Links
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-gray/70 mb-2">
                    View My Work
                  </h3>
                  <p className="text-text-gray/60 mb-3">
                    Explore my projects and achievements
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kaden-lytle-504a04307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-secondary text-white hover:bg-slate-800 shadow-lg hover:shadow-xl"
                  >
                    View Work
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-gray/70 mb-2">
                    Read My Blog
                  </h3>
                  <p className="text-text-gray/60 mb-3">
                    Check out my latest thoughts and insights
                  </p>
                  <CTAButton href="/blog" variant="secondary" className="text-base">
                    Read Blog
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary-dark/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-secondary-dark">
            <h2 className="text-2xl font-bold text-text-gray mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text-gray/70 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-primary-black/50 border border-secondary-dark rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-all text-text-gray placeholder-text-gray/40"
                  placeholder="Your name"
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text-gray/70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-primary-black/50 border border-secondary-dark rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-all text-text-gray placeholder-text-gray/40"
                  placeholder="your.email@example.com"
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-text-gray/70 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-primary-black/50 border border-secondary-dark rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-all text-text-gray placeholder-text-gray/40"
                  placeholder="What's this about?"
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text-gray/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-black/50 border border-secondary-dark rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson outline-none transition-all resize-none text-text-gray placeholder-text-gray/40"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  disabled
                />
              </div>
              <div className="bg-crimson/10 border border-crimson/30 rounded-lg p-4">
                <p className="text-sm text-text-gray/70">
                  <strong className="text-crimson">Note:</strong> This is a placeholder form. To enable
                  form submission, integrate with a service like Formspree,
                  SendGrid, or your own backend API.
                </p>
              </div>
              <button
                type="button"
                disabled
                className="w-full px-8 py-4 bg-gray-800 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
              >
                Send Message (Placeholder)
              </button>
            </form>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-secondary-dark/80 backdrop-blur-sm rounded-xl p-8 text-center border border-secondary-dark">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-text-gray/70 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a business partner, advisor, or someone
              to bring innovative ideas to life, I'm always open to new
              opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/kaden-lytle-504a04307/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-secondary text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="mailto:kadenlytle@gmail.com"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-crimson text-white hover:bg-crimson-soft shadow-lg hover:shadow-xl"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
