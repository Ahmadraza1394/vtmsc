import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import BlogSection from "@/components/blog/BlogSection";
import FaithLoveBanner from "@/components/shared/FaithLoveBanner";
import Newsletter from "@/components/shared/Newsletter";

export const metadata = {
  title: "Blog - Voice Tabernacle",
  description: "Read our latest blog posts and articles",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="Insights & Inspiration"
        subtitle="Our Blog"
        image="/images/IMG_6080-scaled.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <Section className="bg-background-main">
        <BlogSection />
      </Section>

      <FaithLoveBanner />

      <Newsletter />
    </>
  );
}
