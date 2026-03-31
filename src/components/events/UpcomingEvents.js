"use client";

import { useState, useEffect } from "react";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/events?status=published&limit=10");
      const data = await response.json();

      if (data.success) {
        // Sort events by date (upcoming first)
        const sortedEvents = data.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date),
        );
        setEvents(sortedEvents);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date
      .toLocaleDateString("en-US", { month: "short" })
      .toUpperCase();
    const day = date.getDate().toString().padStart(2, "0");
    return { month, day };
  };

  const formatCategory = (category) => {
    return category.toUpperCase();
  };

  if (!mounted || loading) {
    return (
      <div className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>
          <div className="grid gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gray-200 p-6 text-center md:min-w-[120px] flex flex-col justify-center">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No upcoming events
              </h3>
              <p className="text-gray-500">
                No events have been scheduled yet. Check back soon for updates!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {events.map((event) => {
              const { month, day } = formatDate(event.date);
              return (
                <div
                  key={event._id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Date Card */}
                    <div className="bg-brand-primary text-white p-6 text-center md:min-w-[120px] flex flex-col justify-center">
                      <div className="text-sm font-medium uppercase tracking-wide mb-1">
                        {month}
                      </div>
                      <div className="text-3xl font-bold">{day}</div>
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="inline-block bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                              {formatCategory(event.category)}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-brand-primary transition-colors">
                            <a href={`/events/${event._id}`}>{event.title}</a>
                          </h3>
                          <p className="text-gray-600 mb-4 lg:mb-0">
                            {event.description}
                          </p>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500 mt-3">
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-brand-primary"
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
                              <span>{event.location}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-brand-primary"
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
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>

                        {/* Event Image and Action Button */}
                        <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end gap-4">
                          {event.image?.url && (
                            <img
                              src={event.image.url}
                              alt={event.image.alt || event.title}
                              className="w-full lg:w-48 h-32 object-cover rounded-lg"
                            />
                          )}

                          <a
                            href={`/events/${event._id}`}
                            className="bg-brand-primary text-white px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity rounded inline-block"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
