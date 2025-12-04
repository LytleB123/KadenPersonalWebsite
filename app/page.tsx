import CTAButton from '@/components/CTAButton'
import Headshot from '@/components/Headshot'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import ScrollAnimate from '@/components/ScrollAnimate'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-primary-black">
      {/* Headshot Section at Top */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-black to-secondary-dark">
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M10 10h10v10H10V10zM0 0h10v10H0V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="absolute inset-0 bg-primary-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Name and Description */}
            <ScrollAnimate variant="slideLeft" className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-gray mb-6">
                Kaden Lytle
              </h1>
              <p className="text-xl md:text-2xl text-text-gray/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Entrepreneur, Innovator & Business Builder. Management major at Texas State University, President of TXST Wake Team, and Founder of Inlit AI & Board Bound Wake.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="h-1 w-24 bg-crimson rounded-full" />
              </div>
            </ScrollAnimate>
            {/* Right Side - Headshot */}
            <ScrollAnimate variant="slideRight" className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Headshot className="w-auto" />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Business Hero Section */}
      <HeroSection />

      {/* Who I Am Section */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate variant="fadeIn">
            <SectionHeader
              title="Who I Am"
              subtitle="Entrepreneur, leader, and builder"
            />
          </ScrollAnimate>
          <ScrollAnimate variant="slideUp" delay={0.2}>
            <div className="space-y-6 text-text-gray/80 text-lg leading-relaxed">
            <p>
              I'm Kaden Lytle, a driven entrepreneur and business leader
              currently pursuing a Management degree at Texas State University.
              My passion lies in building innovative solutions, leading teams,
              and creating value through strategic thinking and execution.
            </p>
            <p>
              I'm the founder of{' '}
              <span className="text-crimson font-semibold">Inlit AI</span>, an AI voice
              receptionist platform that's revolutionizing customer experience
              through automation. Additionally, I founded{' '}
              <span className="text-crimson font-semibold">Board Bound Wake</span>, a Lake
              Travis wake-surf charter and youth program that combines my love
              for water sports with community impact.
            </p>
            <p>
              My expertise spans sales, business strategy, customer experience,
              and automation systems. I'm an active member of the Financial
              Management Association (FMA) and the San Marcos Chamber of
              Commerce, continuously expanding my network and contributing to the
              business community.
            </p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate variant="scaleUp" delay={0.4}>
            <div className="mt-10 text-center">
              <CTAButton href="/about">Learn More About Me</CTAButton>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Inlit AI Section */}
      <section className="relative py-20 bg-secondary-dark overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-purple-900/20 to-secondary-dark">
            {/* Inlit Logo as background pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("/inlitlogo.png")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '400px 400px',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-primary-black/60" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-black/50 rounded-xl p-8 md:p-12 border border-crimson/20 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <ScrollAnimate variant="slideLeft">
                <div>
                  <Image
                    src="/inlitlogo.png"
                    alt="Inlit AI Logo"
                    width={200}
                    height={200}
                    className="w-auto h-auto mb-6"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-3">Inlit AI</h2>
                  <p className="text-crimson font-semibold text-xl mb-6">AI Voice Receptionist Platform</p>
                  <p className="text-text-gray/80 leading-relaxed mb-6">
                    An AI-powered voice receptionist and automation platform for service businesses that can't afford to miss calls. We help businesses never lose a potential customer by answering every call, 24/7, with intelligent automation that handles booking flows, routing, and customer inquiries instantly.
                  </p>
                  <a
                    href="https://www.inlit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-crimson text-white hover:bg-crimson-soft shadow-lg hover:shadow-xl"
                  >
                    Visit Inlit AI →
                  </a>
                </div>
              </ScrollAnimate>
              <ScrollAnimate variant="slideRight" delay={0.2}>
                <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    What It Does
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Serves as an intelligent phone system that answers calls instantly, understands customer intent, books appointments automatically, routes calls to the right person or department, and provides 24/7 availability. The platform integrates seamlessly with existing CRMs and booking systems.
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
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-text-gray/70">
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> AI Agents & Voice AI</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> 24/7 Instant Call Answering</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Automated Booking Flows</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> CRM Integration</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Intelligent Call Routing</li>
                  </ul>
                </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* Board Bound Wake Section */}
      <section className="relative py-20 bg-primary-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder-wake-team.jpg"
            alt="Board Bound Wake Team Background"
            fill
            className="object-cover"
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary-black/70" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-dark/80 rounded-xl p-8 md:p-12 border border-crimson/20 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <ScrollAnimate variant="slideRight">
                <div>
                  <Image
                    src="/bbwlogo.png"
                    alt="Board Bound Wake Logo"
                    width={200}
                    height={200}
                    className="w-auto h-auto mb-6"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-3">Board Bound Wake</h2>
                  <p className="text-crimson font-semibold text-xl mb-6">Lake Travis Wakesurf Charter + Youth Program</p>
                  <p className="text-text-gray/80 leading-relaxed mb-6">
                    A premier wakesurf charter on Lake Travis combined with a youth development program. We offer unforgettable experiences on the water while building confidence, leadership skills, and connecting youth with outdoor recreation.
                  </p>
                  <a
                    href="https://www.boardboundwakeco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-crimson text-white hover:bg-crimson-soft shadow-lg hover:shadow-xl"
                  >
                    Visit Board Bound Wake →
                  </a>
                </div>
              </ScrollAnimate>
              <ScrollAnimate variant="slideLeft" delay={0.2}>
                <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Wakesurf Charters
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Professional wakesurf experiences on Lake Travis, combining expert instruction with the natural beauty of one of Texas's most beautiful lakes. Every session focuses on skill development, safety, and creating unforgettable moments on the water.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Youth Development Program
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed mb-4">
                    Our youth program combines wakesurfing with leadership and confidence building:
                  </p>
                  <ul className="space-y-2 text-text-gray/70">
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Building confidence through skill development</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Teaching teamwork and communication</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Creating leadership opportunities</li>
                    <li className="flex items-center"><span className="text-crimson mr-2">•</span> Mentorship and positive role modeling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-gray mb-3 flex items-center">
                    <span className="w-1 h-8 bg-crimson mr-3" />
                    Safety & Excellence
                  </h3>
                  <p className="text-text-gray/80 leading-relaxed">
                    Safety is our top priority. We maintain strict safety protocols, use well-maintained equipment, and ensure all participants understand water safety. Our operations are streamlined for efficiency while never compromising on safety or quality.
                  </p>
                </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Roles Section */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate variant="fadeIn">
            <SectionHeader
              title="Leadership Roles"
              subtitle="Leading teams and building community"
            />
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimate variant="fadeIn" delay={0.1}>
              <div className="bg-secondary-dark rounded-xl p-6 border border-secondary-dark hover:border-crimson/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-text-gray mb-2">TXST Wake Team</h3>
                <p className="text-crimson font-semibold mb-4">President</p>
                <p className="text-text-gray/70 text-sm">
                  Leading recruitment, partnerships, and team culture
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate variant="fadeIn" delay={0.2}>
              <div className="bg-secondary-dark rounded-xl p-6 border border-secondary-dark hover:border-crimson/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-text-gray mb-2">Center for Innovation</h3>
                <p className="text-crimson font-semibold mb-4">Advisor</p>
                <p className="text-text-gray/70 text-sm">
                  Mentoring student entrepreneurs and providing business guidance
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate variant="fadeIn" delay={0.3}>
              <div className="bg-secondary-dark rounded-xl p-6 border border-secondary-dark hover:border-crimson/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-text-gray mb-2">FMA</h3>
                <p className="text-crimson font-semibold mb-4">Member</p>
                <p className="text-text-gray/70 text-sm">
                  Financial Management Association membership
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate variant="fadeIn" delay={0.4}>
              <div className="bg-secondary-dark rounded-xl p-6 border border-secondary-dark hover:border-crimson/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-text-gray mb-2">Chamber of Commerce</h3>
                <p className="text-crimson font-semibold mb-4">Member</p>
                <p className="text-text-gray/70 text-sm">
                  San Marcos Chamber of Commerce involvement
                </p>
              </div>
            </ScrollAnimate>
          </div>
          <ScrollAnimate variant="scaleUp" delay={0.5}>
            <div className="mt-10 text-center">
              <a
                href="https://www.linkedin.com/in/kaden-lytle-504a04307/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-crimson text-white hover:bg-crimson-soft focus:outline-none focus:ring-4 focus:ring-crimson focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                View All Leadership Roles
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate variant="fadeIn">
            <SectionHeader
              title="Explore"
              subtitle="Discover more about my work and journey"
            />
          </ScrollAnimate>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <ScrollAnimate variant="slideUp" delay={0.1}>
              <Link
                href="/about"
                className="bg-primary-black/50 rounded-xl p-6 border border-secondary-dark hover:border-crimson transition-colors text-center group"
              >
                <h3 className="text-lg font-bold text-text-gray group-hover:text-crimson transition-colors mb-2">About</h3>
                <p className="text-text-gray/60 text-sm">My story & philosophy</p>
              </Link>
            </ScrollAnimate>
            <ScrollAnimate variant="slideUp" delay={0.2}>
              <Link
                href="/photos"
                className="bg-primary-black/50 rounded-xl p-6 border border-secondary-dark hover:border-crimson transition-colors text-center group"
              >
                <h3 className="text-lg font-bold text-text-gray group-hover:text-crimson transition-colors mb-2">Photos</h3>
                <p className="text-text-gray/60 text-sm">Visual journey</p>
              </Link>
            </ScrollAnimate>
            <ScrollAnimate variant="slideUp" delay={0.3}>
              <Link
                href="/blog"
                className="bg-primary-black/50 rounded-xl p-6 border border-secondary-dark hover:border-crimson transition-colors text-center group"
              >
                <h3 className="text-lg font-bold text-text-gray group-hover:text-crimson transition-colors mb-2">Blog</h3>
                <p className="text-text-gray/60 text-sm">Thoughts & insights</p>
              </Link>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimate variant="scaleUp">
            <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-6">
              Ready to Collaborate?
            </h2>
          </ScrollAnimate>
          <ScrollAnimate variant="fadeIn" delay={0.2}>
            <p className="text-xl mb-8 text-text-gray/70">
              Whether you're looking for a business partner, advisor, or someone
              to bring innovative ideas to life, I'd love to connect.
            </p>
          </ScrollAnimate>
          <ScrollAnimate variant="scaleUp" delay={0.4}>
            <CTAButton href="/contact">Get In Touch</CTAButton>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  )
}
