import Link from 'next/link'

const moreSermons = [
  {
    id: 1,
    title: 'Christmas Gift for Your Soul',
    date: 'Dec 14, 2016',
    image: '/images/IMG_6080-scaled.jpg',
  },
  {
    id: 2,
    title: "God's Gift to You",
    date: 'Dec 14, 2016',
    image: '/images/IMG_6043-600x600.jpg',
  },
  {
    id: 3,
    title: 'A Message From Our Creator',
    date: 'Dec 14, 2016',
    image: '/images/IMG_6221-1-700x450.jpg',
  },
]

export default function SermonSidebar() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">More Sermons</h3>
        <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="space-y-4 mb-6">
        {moreSermons.map((sermon) => (
          <Link
            key={sermon.id}
            href={`/sermons/${sermon.id}`}
            className="flex gap-4 group"
          >
            <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
              <img
                src={sermon.image}
                alt={sermon.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">
                {sermon.title}
              </h4>
              <p className="text-xs text-gray-500">{sermon.date}</p>
              <div className="flex items-center gap-1 text-brand-primary text-xs mt-1">
                <span>Read more</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/sermons"
        className="block w-full text-center bg-transparent border-2 border-brand-primary text-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all"
      >
        View All Sermons
      </Link>
    </div>
  )
}
