import Link from 'next/link'

const articles = [
  {
    id: 1,
    category: 'COMMUNITY',
    categoryColor: 'bg-brand-primary',
    image: '/images/IMG_6080-scaled.jpg',
    title: 'God is Good All the Time!',
    excerpt: 'Reflecting on the countless blessings and testimonies shared during our recent thanksgiving service.',
    date: 'Jan 15, 2024',
    author: 'Admin',
  },
  {
    id: 2,
    category: 'OUTREACH',
    categoryColor: 'bg-banner',
    image: '/images/IMG_6043-600x600.jpg',
    title: 'New Families During National Adoption Month',
    excerpt: 'How our congregation is supporting foster and adoptive families in the local community.',
    date: 'Nov 03, 2023',
    author: 'Missions Team',
  },
  {
    id: 3,
    category: 'MINISTRY',
    categoryColor: 'bg-brand-primary',
    image: '/images/IMG_6221-1-700x450.jpg',
    title: 'Stitching Together A New Life',
    excerpt: "The inspiring story of our women's craft ministry and how it's providing skills and fellowship.",
    date: 'Oct 18, 2023',
    author: "Women's Ministry",
  },
]

export default function BlogSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
          Our Journal
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Latest News & Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`${article.categoryColor} text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide`}>
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {article.author}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <Link
                href={`/blogs/${article.id}`}
                className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                READ MORE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blogs"
          className="inline-block bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all"
        >
          View All Posts
        </Link>
      </div>
    </div>
  )
}
