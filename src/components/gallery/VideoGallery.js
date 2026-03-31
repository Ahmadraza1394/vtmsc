import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "Culte du Dimanche 21 Aout 2022",
    date: "August 21, 2022",
    thumbnail: "/images/IMG_6080-scaled.jpg",
    duration: "1:23:45",
  },
  {
    id: 2,
    title: "Christmas Gift for Your Soul",
    date: "December 25, 2022",
    thumbnail: "/images/IMG_6043-600x600.jpg",
    duration: "45:30",
  },
  {
    id: 3,
    title: "God's Gift to You",
    date: "January 15, 2023",
    thumbnail: "/images/IMG_6221-1-700x450.jpg",
    duration: "52:18",
  },
];

export default function VideoGallery() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Video Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
          >
            <div className="relative aspect-[16/9] h-64">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-primary rounded-full group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500">{video.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/gallery"
          className="inline-block bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all"
        >
          View All Videos
        </Link>
      </div>
    </div>
  );
}
