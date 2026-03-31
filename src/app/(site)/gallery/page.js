import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import GallerySection from "@/components/gallery/GallerySection";
import VideoGallery from "@/components/gallery/VideoGallery";
import AudioMessages from "@/components/gallery/AudioMessages";
import TestimonyBanner from "@/components/gallery/TestimonyBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "Gallery - Voice Tabernacle",
  description: "View photos from our church events and activities",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Moments of Faith & Community"
        subtitle="Our Gallery"
        image="/images/IMG_6080-scaled.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <Section className="bg-background-main">
        <GallerySection />
      </Section>

      <Section className="bg-background-light">
        <VideoGallery />
      </Section>

      <Section className="bg-background-main">
        <AudioMessages />
      </Section>

      <TestimonyBanner />

      <Newsletter />
    </>
  );
}
