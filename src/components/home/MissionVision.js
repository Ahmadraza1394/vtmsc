import Link from 'next/link'

export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="bg-white p-8 md:p-10 border-l-4 border-brand-primary shadow-sm">
        <div className="mb-4">
          <span className="text-brand-primary text-xs font-semibold uppercase tracking-wider">
            Our Mission
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Empowering Lives Through Faith and Service
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Voice Tabernacle Multi Services Center, our mission is to provide a
          spiritual home where individuals can encounter God, grow in their faith, and
          discover their God-given purpose. We are committed to serving our
          community with compassion, addressing both spiritual and practical needs.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3 text-gray-700">
            <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Preaching the uncompromised Word of God</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Fostering a loving and inclusive community</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Equipping believers for ministry and leadership</span>
          </li>
        </ul>
        <Link
          href="/about"
          className="inline-block bg-brand-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          Learn More
        </Link>
      </div>

      <div className="bg-white p-8 md:p-10 border-l-4 border-banner shadow-sm">
        <div className="mb-4">
          <span className="text-banner text-xs font-semibold uppercase tracking-wider">
            Our Vision
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          A Beacon of Hope in Mattapan and Beyond
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We envision a transformed city where the love of Christ is evident in
          every neighborhood. Our goal is to expand our multi-services center to
          become a hub of holistic healing—spiritual, emotional, and physical—for
          families and individuals from all walks of life.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-banner mb-2">500+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Weekly Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-banner mb-2">15+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Active Ministries</div>
          </div>
        </div>
        <Link
          href="/about"
          className="inline-block bg-transparent border-2 border-banner text-banner px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-banner hover:text-white transition-all"
        >
          Join Our Journey
        </Link>
      </div>
    </div>
  )
}
