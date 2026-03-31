export default function ContactInfoCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {/* Our Address */}
      <div className="bg-white p-8 text-center shadow-sm rounded-lg border-t-4 border-brand-primary">
        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">Our Address</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          47-49 Edgewater Drive<br />
          Mattapan MA 02126
        </p>
      </div>

      {/* Call Us */}
      <div className="bg-white p-8 text-center shadow-sm rounded-lg border-t-4 border-brand-primary">
        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">Call Us</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          +857-312-6663<br />
          Available Mon-Fri
        </p>
      </div>

      {/* Email Us */}
      <div className="bg-white p-8 text-center shadow-sm rounded-lg border-t-4 border-brand-primary">
        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">Email Us</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          nhomicil@yahoo.com<br />
          info@voicetabernacle.org
        </p>
      </div>
    </div>
  )
}
