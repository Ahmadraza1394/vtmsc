import Link from 'next/link'

export default function AboutFoundedSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="order-2 lg:order-1">
        <img
          src="/images/IMG_6043-600x600.jpg"
          alt="Church congregation"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="order-1 lg:order-2">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Founded in 2001
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The Voice Of The Gospel Tabernacle Church is a global ministry reaching out to millions globally, responding to the command of Jesus. We believe in the transformative power of faith and the strength of a united community.
        </p>
        
        <div className="border-l-4 border-brand-primary pl-6 mb-8 italic text-gray-700">
          &ldquo;Go ye into all the world and preach the gospel&rdquo; — Mark 16:15
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block bg-banner text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity text-center"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="inline-block bg-transparent border-2 border-brand-primary text-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
