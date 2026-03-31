import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import PageHero from "@/components/shared/PageHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";

export const metadata = {
  title: "Events - Voice Tabernacle",
  description: "Join us for upcoming church events and activities",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Join Our Community"
        subtitle="Events"
        image="/images/IMG_6080-scaled.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <UpcomingEvents />

      <Section className="bg-background-light">
        <div>
          <Heading level="h2" className="mb-6">
            Past Events
          </Heading>
          <p className="text-gray-600">
            {/* Content section placeholder */}
            Past event highlights and photos will be displayed here.
          </p>
        </div>
      </Section>
    </>
  );
}
