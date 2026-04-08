import Section from "@/components/ui/Section";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeatureCards from "@/components/home/FeatureCards";
import MissionVision from "@/components/home/MissionVision";
import CallToAction from "@/components/shared/CallToAction";
import BlogSection from "@/components/home/BlogSection";
import Newsletter from "@/components/shared/Newsletter";
import Container from "@/components/layout/Container";
import Link from "next/link";

export const metadata = {
  title: "Home - Voice Tabernacle Multi Services Center",
  description:
    "Community-based service organization providing youth development, housing support, workforce access, and integration services in Mattapan, MA",
};

const stats = [
  { number: "2,500+", label: "Community Members Served" },
  { number: "150+", label: "Youth in Programs" },
  { number: "85%", label: "Program Success Rate" },
  { number: "40+", label: "Community Partners" },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <Section className="section-light py-16 md:py-20">
        <FeatureCards />
      </Section>

      {/* Stats Section */}
      <Section className="section-primary py-16 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto px-4">
              Real results from our community programs and services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="h-full">
                <div className="gradient-primary text-light rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center items-center text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-lg font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-light py-16 md:py-20">
        <MissionVision />
      </Section>

      {/* Program Overview Section */}
      <Section className="section-light py-16 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Our Core Programs
            </h2>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto px-4">
              Comprehensive services designed to support youth and families with
              real pathways to success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="h-full">
              <div className="card text-center h-full flex flex-col">
                <div className="gradient-primary rounded-2xl p-4 sm:p-6 mb-4 hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-light mb-2 min-h-[2.5rem] flex items-center justify-center">
                    Youth Development
                  </h3>
                </div>
                <p className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed flex-grow min-h-[4rem] flex items-center justify-center">
                  Mentorship, leadership training, and educational support for
                  young people ages 14-24
                </p>
              </div>
            </div>

            <div className="h-full">
              <div className="card text-center h-full flex flex-col">
                <div className="gradient-primary rounded-2xl p-4 sm:p-6 mb-4 hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-light mb-2 min-h-[2.5rem] flex items-center justify-center">
                    Housing & Stability
                  </h3>
                </div>
                <p className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed flex-grow min-h-[4rem] flex items-center justify-center">
                  Housing assistance, homelessness prevention, and stability
                  support for individuals and families
                </p>
              </div>
            </div>

            <div className="h-full">
              <div className="card text-center h-full flex flex-col">
                <div className="gradient-primary rounded-2xl p-4 sm:p-6 mb-4 hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-light mb-2 min-h-[2.5rem] flex items-center justify-center">
                    Workforce Access
                  </h3>
                </div>
                <p className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed flex-grow min-h-[4rem] flex items-center justify-center">
                  Job training, employment placement, and career development
                  opportunities
                </p>
              </div>
            </div>

            <div className="h-full">
              <div className="card text-center h-full flex flex-col">
                <div className="gradient-primary rounded-2xl p-4 sm:p-6 mb-4 hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-light mb-2 min-h-[2.5rem] flex items-center justify-center">
                    Newcomer Integration
                  </h3>
                </div>
                <p className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed flex-grow min-h-[4rem] flex items-center justify-center">
                  Support services for new community members including language,
                  cultural, and civic integration
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Programs Section */}
      <Section className="section-secondary py-16 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4 md:mb-6">
              Featured Programs
            </h2>
            <p className="text-lg md:text-xl text-light opacity-90 max-w-3xl mx-auto px-4">
              Specialized initiatives making real impact in our community
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Youth Violence Prevention */}
            <div className="h-full">
              <div className="card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/IMG_3306.jpg"
                    alt="Youth Violence Prevention Program"
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-brand-secondary">
                        DCF Partnership
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">
                    Youth Violence Prevention
                  </h3>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    Partnership with DCF providing intervention and prevention
                    services for at-risk youth through comprehensive support
                    programs.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Prevention
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* empowerME */}
            <div className="h-full">
              <div className="card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/IMG_3310.jpg"
                    alt="empowerME Housing Program"
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-brand-secondary">
                        Housing Focus
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">
                    empowerME
                  </h3>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    Comprehensive support program addressing youth homelessness
                    with housing assistance and essential life skills
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Housing
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Life Skills
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Youth Jobs */}
            <div className="h-full">
              <div className="card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/IMG_3311.jpg"
                    alt="Youth Jobs Program"
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-brand-secondary">
                        City Partnership
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">
                    Youth Jobs
                  </h3>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    City YOU Program partnership providing employment
                    opportunities and comprehensive job training for youth
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Employment
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Training
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="h-full">
              <div className="card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/IMG_3312.jpg"
                    alt="Youth Ministry Program"
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-brand-secondary">
                        Mentorship
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">
                    Youth Ministry
                  </h3>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    Mentorship and guidance program providing positive role
                    models and life direction for young people in our community.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Mentorship
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Guidance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* InterGREAT - Flagship Program */}
            <div className="sm:col-span-2 lg:col-span-3 h-full">
              <div className="card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col lg:flex-row">
                <div className="relative overflow-hidden lg:w-1/2">
                  <img
                    src="/images/IMG_6080-scaled.jpg"
                    alt="InterGREAT Integration Program"
                    className="w-full h-48 sm:h-56 lg:h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                      <span className="text-sm font-bold text-brand-primary">
                        Flagship Program
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex-grow flex flex-col lg:w-1/2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-4">
                    InterGREAT
                  </h3>
                  <p className="text-secondary text-sm sm:text-base lg:text-lg leading-relaxed flex-grow mb-6">
                    Our flagship integration program helping newcomers navigate
                    civic systems, build community connections, and access
                    essential services. Participants learn about local resources
                    while earning rewards through community engagement and
                    preparing for future technology integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Flagship Program
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Civic Integration
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Future Tech Ready
                    </span>
                    <span className="bg-background-light px-3 py-1 rounded-full text-xs font-medium text-brand-secondary">
                      Community Building
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CallToAction />

      <Section className="section-light py-16 md:py-20">
        <BlogSection />
      </Section>

      <Newsletter />
    </>
  );
}
