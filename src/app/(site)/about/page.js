import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import AboutFoundedSection from "@/components/about/AboutFoundedSection";
import GoalBanner from "@/components/about/GoalBanner";
import MissionSection from "@/components/about/MissionSection";
import MissionPillars from "@/components/about/MissionPillars";
import ParishBanner from "@/components/about/ParishBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "About Us - Voice Tabernacle Multi Services Center",
  description:
    "Learn about our community-based organization supporting underserved youth and families in Mattapan through comprehensive programs and services",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Who We Are"
        image="/images/IMG_6080-scaled.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section className="bg-background-main">
        <AboutFoundedSection />
      </Section>

      <GoalBanner />

      <Section className="bg-background-light">
        <MissionSection />
      </Section>

      <Section className="bg-background-main">
        <MissionPillars />
      </Section>

      <ParishBanner />

      <Newsletter />
    </>
  );
}
