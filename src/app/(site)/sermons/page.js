import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import SermonDetail from "@/components/sermons/SermonDetail";
import SermonSidebar from "@/components/sermons/SermonSidebar";
import SermonMedia from "@/components/sermons/SermonMedia";
import CallToAction from "@/components/shared/CallToAction";
import FaithBanner from "@/components/sermons/FaithBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "Sermons - Voice Tabernacle",
  description: "Watch and listen to our latest sermons",
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        title="Tabernacle Voix de l'Evangile"
        subtitle="Sermons"
        image="/images/churchwp_media_-36-700x450.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sermons", href: "/sermons" },
          { label: "Detail" },
        ]}
      />

      <Section className="bg-background-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SermonDetail />
          </div>
          <div>
            <SermonSidebar />
          </div>
        </div>
      </Section>

      <Section className="bg-background-light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SermonMedia />
          </div>
          <div className="space-y-6">
            <div className="bg-brand-primary text-white p-6 rounded-lg text-center">
              <p className="text-sm italic mb-4">
                &ldquo;The World is Our Parish&rdquo;
              </p>
              <p className="text-xs mb-4 uppercase tracking-wide">MARK 16:15</p>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-brand-primary transition-all"
              >
                Join Us
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Stay Updated
              </h4>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <button className="w-full bg-brand-primary text-white px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Section>

      <FaithBanner />

      <Newsletter />
    </>
  );
}
