import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import PrivacyTabs from "@/components/shared/PrivacyTabs";
import TransformationSection from "@/components/shared/TransformationSection";
import WorldParishBanner from "@/components/shared/WorldParishBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "Privacy Policy - Voice Tabernacle",
  description:
    "Privacy Policy and Terms of Use for Voice Tabernacle Multi Services Center",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy & Terms"
        subtitle="Our Commitment"
        image="/images/IMG_6080-scaled.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <Section className="bg-background-main">
        <PrivacyTabs />
      </Section>

      <TransformationSection />

      <WorldParishBanner />

      <Newsletter />
    </>
  );
}
