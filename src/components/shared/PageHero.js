import Link from "next/link";

export default function PageHero({ title, subtitle, breadcrumbs, image }) {
  return (
    <div
      className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4">
        {subtitle && (
          <p className="text-xs md:text-sm text-brand-primary uppercase tracking-wider mb-3 opacity-90">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-white/60">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-brand-primary transition-colors uppercase tracking-wide"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80 uppercase tracking-wide">
                    {crumb.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
