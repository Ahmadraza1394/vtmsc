import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-brand-primary py-16 md:py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Join us in creating positive change in our community through
          meaningful programs and collaborative partnerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get Support
          </Link>
          <Link
            href="/partners"
            className="inline-block bg-banner text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
