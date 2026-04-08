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
          name: "Boys & Girls Club of Boston",
          type: "Youth Services",
          description: "After-school programs and youth development",
        },
        {
          name: "Codman Square Health Center",
          type: "Community Health",
          description: "Healthcare services and wellness programs",
        },
        {
          name: "Greater Boston Food Bank",
          type: "Food Security",
          description: "Food distribution and hunger relief programs",
        },
        {
          name: "United Way of Massachusetts Bay",
          type: "Community Support",
          description: "Coordinated community services and funding",
        },
        {
          name: "Mattapan Square Main Streets",
          type: "Economic Development",
          description: "Local business support and community revitalization",
        },
      ],
    },
    {
      title: "Government & Civic Partners",
      description: "Public sector partnerships for community development",
      partners: [
        {
          name: "Department of Children & Families",
          type: "Child Welfare",
          description: "Family support services and child protection programs",
        },
        {
          name: "City of Boston YOU Program",
          type: "Youth Opportunities",
          description: "Youth employment and development opportunities",
        },
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
      ],
    },
  ];

  const collaborationAreas = [
    {
      title: "Community Health Initiatives",
      description: "Joint health programs addressing local health disparities",
      impact: "800+ residents reached annually",
      image: "/images/IMG_6043-600x600.jpg",
    },
    {
      title: "Youth Development Programs",
      description: "Collaborative youth services and mentorship opportunities",
      impact: "150+ youth engaged yearly",
      image: "/images/IMG_3306.jpg",
    },
    {
      title: "Economic Development",
      description:
        "Small business support and workforce development initiatives",
      impact: "$2.5M economic impact generated",
      image: "/images/IMG_3310.jpg",
    },
    {
      title: "Educational Support",
      description: "Tutoring, adult education, and skill-building programs",
      impact: "300+ students supported",
      image: "/images/IMG_6221-1-700x450.jpg",
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

        {/* Partners Introduction */}
        <div className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Community Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Working together with local organizations, government agencies,
                and community groups to create lasting positive change in
                Mattapan and surrounding neighborhoods.
              </p>
            </div>
          </Container>
        </div>

        {/* Partner Categories */}
        <div className="py-16 bg-background-light">
          <Container>
            <div className="space-y-16">
              {partnerCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-primary/20 transform hover:-translate-y-1"
                      >
                        {/* Card Header */}
                        <div className="bg-brand-primary p-6 text-white relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                {partner.type}
                              </span>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold leading-tight">
                              {partner.name}
                            </h4>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                            {partner.description}
                          </p>

                          {/* Hover Effect Indicator */}
                          <div className="mt-4 flex items-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-medium">
                              Learn More
                            </span>
                            <svg
                              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Collaboration Areas */}
        <div className="py-16 bg-background-main">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Areas of Collaboration
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key focus areas where our partnerships create measurable impact
                in the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collaborationAreas.map((area, index) => (
                <div key={index} className="flex">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-brand-primary/30 flex flex-col w-full">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-center mb-4 flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">
                          {area.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed min-h-[4rem] flex items-center justify-center">
                          {area.description}
                        </p>
                      </div>

                      {/* Impact Section */}
                      <div className="bg-background-light rounded-lg p-4 border border-gray-200 mt-auto">
                        <div className="text-center">
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-2">
                            Impact Achieved
                          </p>
                          <p className="text-brand-primary font-bold text-xl">
                            {area.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Partnership CTA */}
        <div className="py-16 bg-brand-primary text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Partner
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our network of community partners working to strengthen
                Mattapan through collaborative programs and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
}
