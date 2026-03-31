const pillars = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.25-.94-6-4.27-6-8.5V8.3l6-3.11v15.31z"/>
      </svg>
    ),
    title: 'Preach The Gospel',
    description: 'Spreading the word of hope and salvation to every corner of the world through our dedicated global outreach programs.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    title: 'Serve The Community',
    description: 'Providing essential local services and spiritual support to uplift those in need within our local neighborhoods.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Global Outreach',
    description: 'Connecting with international partners to foster global cohesion and integrated human development.',
  },
]

export default function MissionPillars() {
  return (
    <div className="relative py-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((pillar, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-brand-primary">
              {pillar.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
