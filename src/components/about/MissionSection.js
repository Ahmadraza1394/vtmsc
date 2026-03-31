import Link from 'next/link'

export default function MissionSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div>
        <p className="text-sm text-banner uppercase tracking-wider mb-4 font-semibold">
          Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Take Part of Our Mission
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The Tabernacle aims at the spiritual and social transformation of leaders and workers in the vineyard of the Lord for a real change within their community. We provide support, guidance, and resources to help every individual fulfill their God-given potential.
        </p>
        
        <Link
          href="/give"
          className="inline-block bg-banner text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          Donate Now
        </Link>
      </div>

      <div className="relative">
        <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-brand-primary rounded-lg -z-10" />
        <img
          src="/images/IMG_6221-1-700x450.jpg"
          alt="Church mission"
          className="w-full h-auto rounded-lg shadow-lg relative z-10"
        />
      </div>
    </div>
  )
}
