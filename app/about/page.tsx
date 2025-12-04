import SectionHeader from '@/components/SectionHeader'
import CTAButton from '@/components/CTAButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Kaden Lytle',
  description: 'Learn about Kaden Lytle\'s journey, values, and philosophy as an entrepreneur and business leader.',
}

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-primary-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-black to-secondary-dark">
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='15' cy='15' r='4'/%3E%3Cpath d='M15 0c8.284 0 15 6.716 15 15s-6.716 15-15 15S0 23.284 0 15 6.716 0 15 0zm0 4c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11S21.075 4 15 4z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="absolute inset-0 bg-primary-black/50" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text-gray mb-6">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-text-gray/70">
            Building businesses, creating systems, and helping people have
            unforgettable experiences
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="My Story"
            subtitle="From wake sports to AI automation"
          />
          <div className="space-y-6 text-text-gray/80 text-lg leading-relaxed">
            <p>
              I'm Kaden Lytle, a Management major at Texas State University
              who's passionate about building businesses that solve real
              problems. My journey started with a love for wake sports and the
              outdoors, which led me to found Board Bound Wake—a Lake Travis
              wakesurf charter and youth program that combines adventure with
              community impact.
            </p>
            <p>
              Through Board Bound Wake, I learned the fundamentals of customer
              experience, operations, and creating memorable moments. This
              experience sparked my interest in automation and efficiency,
              ultimately leading me to found Inlit AI—an AI voice receptionist
              platform that helps service businesses never miss a call.
            </p>
            <p>
              As President of the Texas State Wake Team, I've developed my
              leadership skills while building community and fostering excellence.
              My role as an Advisor at the TXST Center for Innovation &
              Entrepreneurship allows me to mentor aspiring entrepreneurs and
              contribute to the innovation ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Crimson Divider */}
      <div className="border-t border-crimson/30" />

      {/* Values Section */}
      <section className="py-20 bg-secondary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="My Values"
            subtitle="What drives me every day"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-black/50 rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-2xl font-bold text-text-gray mb-4 flex items-center">
                <span className="w-1 h-8 bg-crimson mr-4" />
                Leadership
              </h3>
              <p className="text-text-gray/80 leading-relaxed">
                Leading by example, building strong teams, and creating cultures
                where people can thrive and do their best work.
              </p>
            </div>
            <div className="bg-primary-black/50 rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-2xl font-bold text-text-gray mb-4 flex items-center">
                <span className="w-1 h-8 bg-crimson mr-4" />
                Building
              </h3>
              <p className="text-text-gray/80 leading-relaxed">
                Creating something from nothing, whether it's a business, a
                system, or a community. Building is in my DNA.
              </p>
            </div>
            <div className="bg-primary-black/50 rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-2xl font-bold text-text-gray mb-4 flex items-center">
                <span className="w-1 h-8 bg-crimson mr-4" />
                Growth
              </h3>
              <p className="text-text-gray/80 leading-relaxed">
                Constantly learning, adapting, and pushing boundaries. Growth
                happens when you step outside your comfort zone.
              </p>
            </div>
            <div className="bg-primary-black/50 rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-2xl font-bold text-text-gray mb-4 flex items-center">
                <span className="w-1 h-8 bg-crimson mr-4" />
                Innovation
              </h3>
              <p className="text-text-gray/80 leading-relaxed">
                Using technology and automation to solve problems better, faster,
                and more efficiently than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crimson Divider */}
      <div className="border-t border-crimson/30" />

      {/* Philosophy Section */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="My Philosophy"
            subtitle="How I approach business and life"
          />
          <div className="space-y-12">
            {/* Building Systems */}
            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-4">
                Building Systems
              </h3>
              <div className="w-24 h-1 bg-crimson mb-6 rounded-full" />
              <p className="text-text-gray/80 text-lg leading-relaxed">
                Success comes from building systems that work without you. I
                focus on creating processes, automations, and structures that
                scale and deliver consistent results. Whether it's an AI
                receptionist handling calls 24/7 or streamlined booking flows for
                a charter business, systems are the foundation of sustainable
                growth.
              </p>
            </div>

            {/* Serving People */}
            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-4">
                Serving People
              </h3>
              <div className="w-24 h-1 bg-crimson mb-6 rounded-full" />
              <p className="text-text-gray/80 text-lg leading-relaxed">
                Business is about serving people. Every product, service, or
                experience I create is designed to solve real problems and make
                people's lives better. From helping service businesses never miss
                a call to providing youth with confidence-building experiences on
                the water, it all comes back to serving people.
              </p>
            </div>

            {/* Learning Fast */}
            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-4">
                Learning Fast
              </h3>
              <div className="w-24 h-1 bg-crimson mb-6 rounded-full" />
              <p className="text-text-gray/80 text-lg leading-relaxed">
                The best entrepreneurs are fast learners. I embrace the unknown,
                experiment quickly, learn from failures, and iterate. This
                mindset has allowed me to build two companies while still in
                college, each in completely different industries, by learning
                what works and what doesn't as fast as possible.
              </p>
            </div>

            {/* Creating Exceptional Experiences */}
            <div className="bg-secondary-dark rounded-xl p-8 border border-secondary-dark hover:border-crimson/30 transition-colors">
              <h3 className="text-3xl font-bold text-text-gray mb-4">
                Creating Exceptional Experiences
              </h3>
              <div className="w-24 h-1 bg-crimson mb-6 rounded-full" />
              <p className="text-text-gray/80 text-lg leading-relaxed">
                Whether it's a customer's first call to a business or a young
                person's first time wakesurfing, I believe in creating
                exceptional experiences that people remember. It's the details,
                the care, and the intention that turn good into great.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crimson Divider */}
      <div className="border-t border-crimson/30" />

      {/* TXST & Entrepreneurship */}
      <section className="py-20 bg-secondary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Entrepreneurship & TXST"
            subtitle="Building while learning"
          />
          <div className="space-y-6 text-text-gray/80 text-lg leading-relaxed">
            <p>
              Being a student entrepreneur at Texas State University has given me
              a unique perspective. I'm building real businesses while learning
              the theory and frameworks that support successful ventures. My
              Management major provides the foundation, while my real-world
              experience as a founder gives context and depth to everything I
              learn.
            </p>
            <p>
              As an Advisor at the TXST Center for Innovation & Entrepreneurship,
              I get to pay it forward by mentoring other student entrepreneurs.
              There's nothing more rewarding than helping someone else bring
              their idea to life and watching them succeed.
            </p>
            <p>
              My involvement with FMA (Financial Management Association) and the
              San Marcos Chamber of Commerce keeps me connected to the business
              community and provides opportunities to learn from experienced
              professionals across industries.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-gray mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-text-gray/70 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a business partner, advisor, or someone
            to bring innovative ideas to life, I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="crimson">
              Get In Touch
            </CTAButton>
            <a
              href="https://www.linkedin.com/in/kaden-lytle-504a04307/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-secondary text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

