import Section from "@/components/ui/Section";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeatureCards from "@/components/home/FeatureCards";
import MissionVision from "@/components/home/MissionVision";
import SermonsSection from "@/components/home/SermonsSection";
import CallToAction from "@/components/shared/CallToAction";
import BlogSection from "@/components/home/BlogSection";
import PrayerBanner from "@/components/shared/PrayerBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "Home - Voice Tabernacle",
  description: "Welcome to Voice Tabernacle Multi Services Center",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <Section className="bg-background-light">
        <FeatureCards />
      </Section>

      <Section className="bg-background-light">
        <MissionVision />
      </Section>

      <Section className="bg-background-main">
        <SermonsSection />
      </Section>

      <CallToAction />

      <Section className="bg-background-light">
        <BlogSection />
      </Section>

      <PrayerBanner />

      <Newsletter />
    </>
  );
}
