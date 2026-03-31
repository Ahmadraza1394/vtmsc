export default function MapSection() {
  return (
    <div className="relative bg-gray-900 h-64 md:h-80 overflow-hidden">
      {/* Background map-like pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
          {/* Map-like lines and paths */}
          <path
            d="M0 200 Q300 100 600 200 T1200 200"
            stroke="#4a5568"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M0 150 Q400 50 800 150 T1200 150"
            stroke="#4a5568"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M0 250 Q200 350 400 250 T800 250 Q1000 150 1200 250"
            stroke="#4a5568"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M200 0 L200 400"
            stroke="#4a5568"
            strokeWidth="1"
            opacity="0.2"
          />
          <path
            d="M400 0 L400 400"
            stroke="#4a5568"
            strokeWidth="1"
            opacity="0.2"
          />
          <path
            d="M600 0 L600 400"
            stroke="#4a5568"
            strokeWidth="1"
            opacity="0.2"
          />
          <path
            d="M800 0 L800 400"
            stroke="#4a5568"
            strokeWidth="1"
            opacity="0.2"
          />
          <path
            d="M1000 0 L1000 400"
            stroke="#4a5568"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Map content - perfectly centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Marker pin */}
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center relative mb-1">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          {/* Marker point */}
          <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-brand-primary"></div>
        </div>
      </div>

      {/* Location info box - positioned below center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg px-6 py-4 border border-gray-700">
          <h3 className="text-white font-semibold text-base mb-1 text-center">
            Voice Tabernacle
          </h3>
          <p className="text-gray-300 text-sm text-center">
            47-49 Edgewater Drive, Mattapan MA 02126
          </p>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}
