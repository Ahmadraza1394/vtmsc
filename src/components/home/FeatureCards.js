import Link from 'next/link'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    ),
    title: 'Our Causes Need You',
    description: 'Join our mission to spread love and support those in need within our community.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    title: 'We Care About Causes',
    description: 'Every act of kindness creates a ripple effect of hope and transformation.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    title: 'Our Church Is Growing',
    description: 'A vibrant community of believers dedicated to spiritual growth and fellowship.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Get Involved',
    description: 'Discover your purpose and serve alongside us in various ministries.',
  },
]

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 md:p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-brand-primary"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-primary">
            {feature.icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
