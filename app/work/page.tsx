import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import CTAButton from '@/components/CTAButton'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Work & Projects - Kaden Lytle",
  description:
    "Explore Kaden Lytle's work including Inlit AI, Board Bound Wake, TXST Wake Team leadership, and advisory roles.",
}

export default function WorkPage() {
  return (
    <div className="w-full min-h-screen bg-primary-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Work & Projects"
          subtitle="Building innovative solutions and leading impactful initiatives"
        />

        <div className="space-y-16 mb-16">
          {/* Inlit AI - Expanded Section */}
          <div className="bg-secondary-dark rounded-xl p-8 md:p-12 border border-secondary-dark hover:border-crimson/30 transition-colors">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-3">Inlit AI</h2>
              <p className="text-crimson font-semibold text-xl">Founder, Builder, Systems Designer</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Purpose
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Inlit AI is an AI voice receptionist and automation platform designed for service businesses that can't afford to miss calls. We help businesses never lose a potential customer by answering every call, 24/7, with intelligent automation that handles booking flows, routing, and customer inquiries instantly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    What the Product Does
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Inlit AI serves as an intelligent phone system that answers calls instantly, understands customer intent, books appointments automatically, routes calls to the right person or department, and provides 24/7 availability. The platform integrates seamlessly with existing CRMs and booking systems to create a complete automation solution.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Who It Serves
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Service businesses that rely on phone calls for bookings and customer inquiries—fitness studios, salons, medical practices, professional services, and any business where missing a call means losing a customer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    My Role
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed mb-4">
                    As founder, I'm involved in every aspect of the business:
                  </p>
                  <ul className="space-y-2 text-text-gray/70 list-disc list-inside">
                    <li>Product vision and strategy</li>
                    <li>Systems design and automation architecture</li>
                    <li>Sales and customer acquisition</li>
                    <li>CRM design and implementation</li>
                    <li>Building the automation workflows</li>
                    <li>Team building and operations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Tech Stack
                  </h3>
                  <ul className="space-y-2 text-text-gray/70">
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> AI Agents & Voice AI</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Automation Systems</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> CRM Integration</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Booking Flow Automation</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> API Integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Board Bound Wake - Expanded Section */}
          <div className="bg-secondary-dark rounded-xl p-8 md:p-12 border border-secondary-dark hover:border-crimson/30 transition-colors">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-3">Board Bound Wake</h2>
              <p className="text-crimson font-semibold text-xl">Founder & Operator</p>
            </div>

            {/* Boat Image Placeholder */}
            <div className="mb-8 rounded-lg overflow-hidden">
              {/* TODO: Replace with real boat image */}
              <div className="relative w-full h-64 md:h-96 bg-primary-black/50 flex items-center justify-center">
                <div className="text-center text-text-gray/40">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Boat Image Placeholder</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Wakesurf Program
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Board Bound Wake offers premier wakesurf experiences on Lake Travis, combining professional instruction with the natural beauty of one of Texas's most beautiful lakes. Our program focuses on skill development, safety, and creating unforgettable moments on the water.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Customer Experience Focus
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Every detail matters. From the moment a customer books until they're back on shore, we focus on creating exceptional experiences. This includes clear communication, safety briefings, personalized instruction, and making sure every moment on the water is memorable.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Safety & Operations
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Safety is our top priority. We maintain strict safety protocols, use well-maintained equipment, and ensure all participants understand water safety. Our operations are streamlined for efficiency while never compromising on safety or quality.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Youth Program
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed mb-4">
                    Our youth development program combines wakesurfing with leadership and confidence building:
                  </p>
                  <ul className="space-y-2 text-text-gray/70 list-disc list-inside">
                    <li>Building confidence through skill development</li>
                    <li>Teaching teamwork and communication</li>
                    <li>Creating leadership opportunities</li>
                    <li>Connecting youth with outdoor recreation</li>
                    <li>Mentorship and positive role modeling</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Why It's Unique
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Board Bound Wake stands out by combining commercial charter services with genuine community impact through our youth program. We're not just a business—we're building something that serves both paying customers and the next generation of leaders, all while promoting a love for water sports and outdoor recreation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Roles - Expanded */}
          <div className="space-y-8">
            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-3">Texas State Wake Team</h3>
              <p className="text-crimson font-semibold text-lg mb-4">President</p>
              <p className="text-text-gray/80 leading-relaxed mb-4">
                As President, I lead all aspects of the organization including recruitment, partnerships with local businesses and wake sports companies, team culture development, event planning and coordination, and representing Texas State University in competitive wake sports events.
              </p>
              <ul className="space-y-2 text-text-gray/70">
                <li>• Organizing team events and competitions</li>
                <li>• Building partnerships with sponsors</li>
                <li>• Recruiting new members</li>
                <li>• Fostering a positive team culture</li>
              </ul>
            </div>

            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-3">TXST Center for Innovation & Entrepreneurship</h3>
              <p className="text-crimson font-semibold text-lg mb-4">Advisor</p>
              <p className="text-text-gray/80 leading-relaxed mb-4">
                I mentor aspiring student entrepreneurs, providing guidance on business development, strategic thinking, execution, and navigating the challenges of building a business while in school. I help connect students with resources and share lessons learned from my own entrepreneurial journey.
              </p>
              <ul className="space-y-2 text-text-gray/70">
                <li>• One-on-one mentorship sessions</li>
                <li>• Strategic business guidance</li>
                <li>• Resource connections</li>
                <li>• Supporting innovation initiatives</li>
              </ul>
            </div>

            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-3">Financial Management Association (FMA)</h3>
              <p className="text-crimson font-semibold text-lg mb-4">Member</p>
              <p className="text-text-gray/80 leading-relaxed">
                Active participation in FMA provides ongoing education in financial management, business financial literacy, and staying current with industry trends and best practices in financial strategy for growing businesses.
              </p>
            </div>

            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-3">San Marcos Chamber of Commerce</h3>
              <p className="text-crimson font-semibold text-lg mb-4">Member</p>
              <p className="text-text-gray/80 leading-relaxed">
                Active involvement in the local business community through networking events, supporting local economic development, and building relationships with other entrepreneurs and business leaders in the San Marcos area.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary-dark rounded-xl p-12 text-center border border-secondary-dark">
          <h2 className="text-3xl md:text-4xl font-bold text-text-gray mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-xl text-text-gray/70 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, partnerships, or
            projects. Let's connect and explore how we can work together.
          </p>
          <CTAButton href="/contact">Get In Touch</CTAButton>
        </div>
      </div>
    </div>
  )
}
