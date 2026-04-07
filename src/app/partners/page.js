import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Partners & Collaborations | Voice Tabernacle Multi Services Center",
  description:
    "Meet our community partners and learn about collaborative efforts to strengthen the Mattapan community.",
};

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: "Healthcare Partners",
      description:
        "Medical and health service providers ensuring community wellness",
      partners: [
        {
          name: "Boston Medical Center",
          type: "Primary Healthcare",
          description: "Comprehensive medical services and emergency care",
        },
        {
          name: "Mattapan Community Health Center",
          type: "Community Health",
          description: "Local healthcare access and preventive services",
        },
        {
          name: "Mental Health Coalition",
          type: "Mental Health",
          description: "Counseling and psychological support services",
        },
        {
          name: "Wellness Network MA",
          type: "Wellness Programs",
          description: "Fitness and nutrition education initiatives",
        },
      ],
    },
    {
      title: "Educational Partners",
      description:
        "Schools and educational institutions supporting learning initiatives",
      partners: [
        {
          name: "Boston Public Schools",
          type: "K-12 Education",
          description: "After-school programs and educational support",
        },
        {
          name: "Roxbury Community College",
          type: "Higher Education",
          description: "Adult education and workforce development",
        },
        {
          name: "Boston Public Library",
          type: "Literacy",
          description: "Reading programs and digital literacy training",
        },
        {
          name: "Skills for Success",
          type: "Job Training",
          description: "Professional development and career services",
        },
      ],
    },
    {
      title: "Community Organizations",
      description: "Local nonprofits and community groups working together",
      partners: [
        {
          name: "Mattapan Food Pantry",
          type: "Food Security",
          description: "Emergency food assistance and nutrition programs",
        },
        {
          name: "Youth Development Alliance",
          type: "Youth Services",
          description: "Mentorship and leadership development",
        },
        {
          name: "Senior Services Network",
          type: "Elder Care",
          description: "Support services for older adults",
        },
        {
          name: "Housing Assistance Coalition",
          type: "Housing",
          description: "Affordable housing and homelessness prevention",
        },
      ],
    },
    {
      title: "Government & Civic Partners",
      description: "Public sector partnerships for community development",
      partners: [
        {
          name: "City of Boston",
          type: "Municipal Services",
          description: "Public services and community development funding",
        },
        {
          name: "Massachusetts Department of Health",
          type: "State Health",
          description: "Public health initiatives and resources",
        },
        {
          name: "Mattapan Neighborhood Council",
          type: "Civic Engagement",
          description: "Community advocacy and local governance",
        },
        {
          name: "Boston Planning Department",
          type: "Urban Planning",
          description: "Community development and infrastructure",
        },
      ],
    },
  ];

  const collaborationAreas = [
    {
      title: "Community Health Initiatives",
      description: "Joint health programs addressing local health disparities",
      impact: "800+ residents reached annually",
      icon: "🏥",
    },
    {
      title: "Youth Development Programs",
      description: "Collaborative youth services and mentorship opportunities",
      impact: "150+ youth engaged yearly",
      icon: "👥",
    },
    {
      title: "Economic Development",
      description:
        "Small business support and workforce development initiatives",
      impact: "$2.5M economic impact generated",
      icon: "💼",
    },
    {
      title: "Educational Support",
      description: "Tutoring, adult education, and skill-building programs",
      impact: "300+ students supported",
      icon: "📚",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <PageHero
          title="Partners & Collaborations"
          subtitle="Community Partnerships"
          image="/images/IMG_3311.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
        />
      </div>

      <Footer />
    </>
  );
}
