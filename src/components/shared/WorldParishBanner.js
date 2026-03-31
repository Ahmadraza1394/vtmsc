import Link from 'next/link'

export default function WorldParishBanner() {
  return (
    <div className="bg-brand-primary py-16 md:py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-4">
          &ldquo;The World is Our Parish&rdquo;
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Mark 16:15 — Proclaiming the message of faith and service.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-banner text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
        >
          JOIN OUR MISSION
        </Link>
      </div>
    </div>
  )
}
