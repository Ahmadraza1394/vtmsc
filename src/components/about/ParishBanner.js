import Link from 'next/link'

export default function ParishBanner() {
  return (
    <div className="bg-banner py-16 md:py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6">
          &ldquo;The World is Our Parish&rdquo;
        </h2>
        <p className="text-base md:text-lg mb-8 leading-relaxed">
          And he said unto them, Go ye into all the world, and preach the gospel to every creature.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-banner transition-all"
        >
          Get Involved
        </Link>
      </div>
    </div>
  )
}
