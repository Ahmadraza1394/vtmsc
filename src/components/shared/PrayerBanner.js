import Link from 'next/link'

export default function PrayerBanner() {
  return (
    <div className="bg-banner py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-2">
            &ldquo;Let&rsquo;s Pray for Our People&rdquo;
          </h2>
          <p className="text-sm md:text-base uppercase tracking-wider opacity-90">
            Faith. Love. Community.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-banner transition-all whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
