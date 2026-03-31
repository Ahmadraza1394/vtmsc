import Link from "next/link";

const sermons = [
  {
    id: 1,
    category: "HOLIDAY",
    categoryColor: "bg-brand-primary",
    image: "/images/IMG_6080-scaled.jpg",
    title: "Christmas Gift for Your Soul",
    date: "Dec 24, 2023",
    author: "Pastor Smith",
  },
  {
    id: 2,
    category: "GRACE",
    categoryColor: "bg-brand-primary",
    image: "/images/IMG_6043-600x600.jpg",
    title: "God's Gift to You",
    date: "Dec 17, 2023",
    author: "Rev. Johnson",
  },
  {
    id: 3,
    category: "SCRIPTURE",
    categoryColor: "bg-brand-primary",
    image: "/images/IMG_6221-1-700x450.jpg",
    title: "Book of Psalms",
    date: "Dec 10, 2023",
    author: "Pastor Smith",
  },
  {
    id: 4,
    category: "SERIES",
    categoryColor: "bg-brand-primary",
    image: "/images/churchwp_media_-36-700x450.jpg",
    title: "Sunday Sermons",
    date: "Dec 03, 2023",
    author: "Pastor Smith",
  },
  {
    id: 5,
    category: "TEACHING",
    categoryColor: "bg-brand-primary",
    image: "/images/2f6d15cb-25e1-4aef-b890-05583e4b5278.jpg",
    title: "Bible Study",
    date: "Nov 29, 2023",
    author: "Rev. Johnson",
  },
  {
    id: 6,
    category: "FAITH",
    categoryColor: "bg-brand-primary",
    image: "/images/4e45d363-fbb0-442f-9d25-2eb784ad0ec5.jpg",
    title: "A Message From Our Creator",
    date: "Nov 26, 2023",
    author: "Pastor Smith",
  },
];

export default function SermonsSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
          Latest Messages
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Watch Our Recent Sermons
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nourish your soul with powerful teachings and inspiring messages from
          our pastoral team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {sermons.map((sermon) => (
          <div
            key={sermon.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={sermon.image}
                alt={sermon.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`${sermon.categoryColor} text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide`}
                >
                  {sermon.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {sermon.date}
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {sermon.author}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                {sermon.title}
              </h3>

              <Link
                href={`/sermons/${sermon.id}`}
                className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                WATCH NOW
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/sermons"
          className="inline-block bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all"
        >
          View All Sermons
        </Link>
      </div>
    </div>
  );
}
