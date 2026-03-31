import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactSection from "@/components/contact/ContactSection";
import MapSection from "@/components/contact/MapSection";
import ServiceTimes from "@/components/contact/ServiceTimes";
import PrayerBanner from "@/components/contact/PrayerBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "Contact Us - Voice Tabernacle",
  description: "Get in touch with Voice Tabernacle Multi Services Center",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Contact Us"
        image="/images/IMG_6080-scaled.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section className="bg-background-main">
        <ContactInfoCards />
        <ContactSection />
      </Section>

      <MapSection />

      <ServiceTimes />

      <PrayerBanner />

      <Newsletter />
    </>
  );
}
