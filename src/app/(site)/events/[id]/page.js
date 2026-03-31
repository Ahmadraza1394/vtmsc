import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import Newsletter from "@/components/shared/Newsletter";

export default async function EventDetailPage({ params }) {
  const resolvedParams = await params;
  let event = null;

  // Try to fetch from database first
  try {
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/events/${resolvedParams.id}`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        event = data.data;
      }
    }
  } catch (error) {
    console.error("Error fetching event:", error);
  }

  if (!event) {
    notFound();
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    return timeString;
  };

  return (
    <>
      <PageHero
        title={event.title}
        subtitle={event.category}
        image={event.image?.url || "/images/default-event.jpg"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />

      <Section className="bg-background-main">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            {/* Event Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                  {event.category}
                </span>
                <span>•</span>
                <span>{formatDate(event.date)}</span>
                <span>•</span>
                <span>{formatTime(event.time)}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    <strong>Location:</strong> {event.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Time:</strong> {event.time}
                  </span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {event.image?.url && (
              <div className="mb-8 overflow-hidden rounded-lg">
                <img
                  src={event.image.url}
                  alt={event.image.alt || event.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Event Content */}
            <div
              className="prose prose-lg prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: event.content }}
            />

            {/* Event Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    Share this event:
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(event.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <a
                  href="/events"
                  className="bg-brand-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
                >
                  ← Back to Events
                </a>
              </div>
            </footer>
          </article>
        </div>
      </Section>

      <Newsletter />
    </>
  );
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  let event = null;

  try {
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/events/${resolvedParams.id}`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        event = data.data;
      }
    }
  } catch (error) {
    console.error("Error fetching event for metadata:", error);
  }

  if (!event) {
    return {
      title: "Event Not Found - Voice Tabernacle",
    };
  }

  return {
    title: `${event.title} - Voice Tabernacle Events`,
    description: event.description,
  };
}
