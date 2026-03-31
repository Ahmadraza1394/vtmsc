export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      month: 'MAR',
      day: '31',
      category: 'SERVICE',
      title: 'Sunday Worship',
      description: 'Join us for our weekly Sunday worship service with inspiring messages and community fellowship.',
      location: 'Main Sanctuary',
      time: '10:00 AM - 12:00 PM'
    },
    {
      id: 2,
      month: 'APR',
      day: '07',
      category: 'COMMUNITY',
      title: 'Youth Ministry Meeting',
      description: 'Monthly gathering for our youth ministry with activities, discussions, and spiritual growth.',
      location: 'Youth Hall',
      time: '6:00 PM - 8:00 PM'
    },
    {
      id: 3,
      month: 'APR',
      day: '14',
      category: 'OUTREACH',
      title: 'Community Food Drive',
      description: 'Help us serve our community by participating in our monthly food drive and distribution.',
      location: 'Community Center',
      time: '9:00 AM - 3:00 PM'
    },
    {
      id: 4,
      month: 'APR',
      day: '21',
      category: 'PRAYER',
      title: 'Prayer & Fasting',
      description: 'Join our congregation for a day of prayer and fasting for our community and global missions.',
      location: 'Main Sanctuary',
      time: '6:00 AM - 6:00 PM'
    },
    {
      id: 5,
      month: 'APR',
      day: '28',
      category: 'SPECIAL',
      title: 'Easter Celebration',
      description: 'Celebrate the resurrection of Jesus Christ with special music, testimonies, and fellowship.',
      location: 'Main Sanctuary',
      time: '9:00 AM - 12:00 PM'
    },
    {
      id: 6,
      month: 'MAY',
      day: '05',
      category: 'MISSION',
      title: 'Mission Trip Preparation',
      description: 'Preparation meeting for our upcoming mission trip to Haiti. All volunteers welcome.',
      location: 'Conference Room',
      time: '7:00 PM - 9:00 PM'
    }
  ]

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
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Date Card */}
                <div className="bg-brand-primary text-white p-6 text-center md:min-w-[120px] flex flex-col justify-center">
                  <div className="text-sm font-medium uppercase tracking-wide mb-1">
                    {event.month}
                  </div>
                  <div className="text-3xl font-bold">
                    {event.day}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-banner text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4 lg:mb-0">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500 mt-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="w-full lg:w-auto border-2 border-banner text-banner px-6 py-2 rounded hover:bg-banner hover:text-white transition-colors font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-brand-primary text-white px-8 py-3 rounded hover:opacity-90 transition-opacity font-medium">
            View All Events
          </button>
        </div>
      </div>
    </div>
  )
}
