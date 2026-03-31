import Link from 'next/link'

export default function FaithLoveBanner() {
  return (
    <div className="bg-brand-primary py-16 md:py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-4">
          Faith. Love. Community.
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Voice Tabernacle Multi Services Center
        </p>
        <Link
          href="/contact"
          className="inline-block bg-banner text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
        >
          GET INVOLVED
        </Link>
      </div>
    </div>
  )
}
