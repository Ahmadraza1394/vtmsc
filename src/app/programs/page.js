import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Programs & Services | Voice Tabernacle Multi Services Center",
  description:
    "Comprehensive community programs including youth development, housing support, workforce access, and integration services in Mattapan, MA.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen">
        <PageHero
          title="Our Programs"
          subtitle="Community Services"
          image="/images/IMG_6080-scaled.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]}
        />

        {/* Youth Violence Prevention Program */}
        <Section className="section-light py-16 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/IMG_3306.jpg"
                  alt="Youth Violence Prevention Program"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    DCF Partnership
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Youth Violence Prevention
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    What it is
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A comprehensive intervention and prevention program
                    developed in partnership with the Department of Children and
                    Families (DCF) to address youth violence through
                    evidence-based strategies and community support.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Who it serves
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    At-risk youth ages 12-18 who have been identified through
                    the juvenile justice system, schools, or community referrals
                    as needing intervention and support services.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    What participants receive
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Individual and group counseling sessions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Conflict resolution and anger management training
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Educational support and tutoring
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Family engagement and support services
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Expected outcomes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Participants develop healthy coping mechanisms, improve
                    academic performance, reduce involvement in violent
                    behaviors, and build positive relationships with family and
                    community members.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Learn More About This Program
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* empowerME Program */}
        <Section className="section-secondary py-16 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="relative">
                  <img
                    src="/images/IMG_3310.jpg"
                    alt="empowerME Housing Program"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-banner text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Housing Focus
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
                  empowerME
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    What it is
                  </h3>
                  <p className="text-light opacity-90 leading-relaxed">
                    A comprehensive support program specifically designed to
                    address youth homelessness through housing assistance, life
                    skills development, and wraparound services that promote
                    long-term stability.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    Who it serves
                  </h3>
                  <p className="text-light opacity-90 leading-relaxed">
                    Homeless and housing-insecure youth ages 18-24, including
                    those aging out of foster care, LGBTQ+ youth, and young
                    adults experiencing family conflict or economic hardship.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    What participants receive
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Emergency and transitional housing assistance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Life skills training and financial literacy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Employment readiness and job placement support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Mental health and substance abuse counseling
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    Expected outcomes
                  </h3>
                  <p className="text-light opacity-90 leading-relaxed">
                    Participants achieve stable housing, develop independent
                    living skills, secure sustainable employment, and build
                    support networks that prevent future homelessness.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More About This Program
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Youth Jobs Program */}
        <Section className="section-light py-16 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/IMG_3311.jpg"
                  alt="Youth Jobs Program"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    City Partnership
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Youth Jobs Program
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    What it is
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A workforce development initiative in partnership with the
                    City YOU Program that provides comprehensive employment
                    opportunities, job training, and career development for
                    young people in our community.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Who it serves
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Youth and young adults ages 16-24 who are seeking employment
                    opportunities, career guidance, and professional
                    development, particularly those facing barriers to
                    employment.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    What participants receive
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Paid work experience and internship opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Professional skills training and certification programs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Resume building and interview preparation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Career counseling and pathway planning
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Expected outcomes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Participants gain valuable work experience, develop
                    professional skills, secure sustainable employment, and
                    establish career pathways that lead to economic stability
                    and growth.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Learn More About This Program
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Youth Ministry Program */}
        <Section className="section-secondary py-16 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="relative">
                  <img
                    src="/images/IMG_3312.jpg"
                    alt="Youth Ministry Program"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-banner text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mentorship Focus
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
                  Youth Ministry Program
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    What it is
                  </h3>
                  <p className="text-light opacity-90 leading-relaxed">
                    A mentorship and guidance program that provides positive
                    role models and life direction for young people through
                    structured activities, leadership development, and community
                    engagement opportunities.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    Who it serves
                  </h3>
                  <p className="text-light opacity-90 leading-relaxed">
                    Youth ages 13-21 seeking positive mentorship, leadership
                    development, and community connection, particularly those
                    who may lack strong adult role models in their lives.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    What participants receive
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        One-on-one mentoring relationships
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Leadership development workshops
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Community service and volunteer opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-banner mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-light opacity-90">
                        Character development and values-based guidance
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-light mb-3">
                    Expected outcomes
                  </h3>
                  <p className="text-light opacity-90 leading-relaxed">
                    Participants develop strong character, leadership skills,
                    positive relationships, and a sense of purpose while
                    contributing meaningfully to their community.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More About This Program
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* InterGREAT Flagship Program */}
        <Section className="section-light py-16 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/IMG_6080-scaled.jpg"
                  alt="InterGREAT Integration Program"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Flagship Program
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  InterGREAT
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    What it is
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our flagship integration program designed to help newcomers
                    and community members navigate civic systems, build
                    meaningful community connections, and access essential
                    services while preparing for future technology integration.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Who it serves
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Newcomers to the United States, immigrants, refugees, and
                    long-term community members seeking to better understand and
                    engage with local civic systems and community resources.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    What participants receive
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Civic education and system navigation training
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Community resource mapping and access support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Rewards and incentives for community engagement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Technology readiness and digital literacy training
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Expected outcomes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Participants become confident community members who can
                    effectively navigate local systems, access needed resources,
                    engage in civic participation, and are prepared for future
                    technological advancements.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Learn More About This Program
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Call to Action */}
        <Section className=" bg-brand-primary py-16 md:py-20">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
                Ready to Get Involved?
              </h2>
              <p className="text-xl text-light opacity-90 mb-8">
                Join our community programs and make a positive impact in
                Mattapan. Whether you need support or want to help others, we
                have opportunities for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Support Today
                </Link>
                <Link
                  href="/partners"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Footer />
    </>
  );
}
