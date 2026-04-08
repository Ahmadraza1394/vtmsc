const pillars = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
    ),
    title: "Youth Development",
    description:
      "Empowering young people through mentorship, leadership training, and educational support to build brighter futures.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "Family Support",
    description:
      "Providing comprehensive services including housing assistance, stability support, and resources for families in need.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
      </svg>
    ),
    title: "Community Integration",
    description:
      "Building bridges through partnerships, workforce development, and programs that strengthen our community connections.",
  },
];

export default function MissionPillars() {
  return (
    <div className="relative py-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((pillar, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-brand-primary">
              {pillar.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
