import Link from 'next/link'

export default function BlogPostDetail({ post }) {
  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Share this article:</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <Link
              href="/blogs"
              className="bg-brand-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
            >
              ← Back to Blog
            </Link>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/new-families-adoption-month" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/IMG_6043-600x600.jpg"
                  alt="New Families During National Adoption Month"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">Community</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-brand-primary transition-colors">
                  New Families During National Adoption Month
                </h4>
                <p className="text-sm text-gray-600 mt-2">Nov 22, 2023 • Sarah Mitchell</p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/stitching-together-new-life" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/IMG_6221-1-700x450.jpg"
                  alt="Stitching Together A New Life"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">Mission</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-brand-primary transition-colors">
                  Stitching Together A New Life
                </h4>
                <p className="text-sm text-gray-600 mt-2">Oct 8, 2023 • James Davis</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
