export default function ServiceTimes() {
  return (
    <div className="bg-background-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Us for Services
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sunday Service */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sunday Service</h3>
            <p className="text-brand-primary font-semibold">9:00 AM</p>
          </div>

          {/* Midweek Service */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Midweek Service</h3>
            <p className="text-brand-primary font-semibold">Wednesday 6:00 PM</p>
          </div>

          {/* Prayer Meeting */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Prayer Meeting</h3>
            <p className="text-brand-primary font-semibold">Friday 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
