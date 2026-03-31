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
    </>
  );
}
