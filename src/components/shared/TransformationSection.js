import Link from "next/link";

export default function TransformationSection() {
  return (
    <div className="bg-background-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Transformation Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/IMG_6043-600x600.jpg"
                alt="Community gathering and prayer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              OUR MISSION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Spiritual & Social Transformation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Tabernacle aims at the spiritual and social transformation of
              leaders and workers in the vineyard of the Lord for a real change
              within their community.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-brand-primary pl-4 mb-8">
              <p className="text-lg italic text-gray-700">
                &ldquo;Go ye into all the world — Mark 16:15&rdquo;
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-brand-primary text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity text-center"
              >
                GET INVOLVED
              </Link>
              <Link
                href="/give"
                className="bg-banner text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity text-center"
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Preach the Gospel */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Preach the Gospel
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Spreading the message of hope and salvation to every corner of the
              community.
            </p>
          </div>

          {/* Serve the Community */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Serve the Community
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing essential services and support to those in need within
              our neighborhood.
            </p>
          </div>

          {/* Global Outreach */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Global Outreach
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Extending our mission beyond local borders to impact lives
              internationally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
