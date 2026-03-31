import Link from 'next/link'

export default function GoalBanner() {
  return (
    <div className="bg-brand-primary py-16 md:py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6">
          We Fight For Our Goal!
        </h2>
        <p className="text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
          Promoting cohesion between leaders, workers, local churches, and the community for the integral development of man. Together we can reach the unreached.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-brand-primary transition-all"
        >
          Join Us
        </Link>
      </div>
    </div>
  )
}
