import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Impact | Voice Tabernacle Multi Services Center",
  description:
    "See the measurable impact we're making in the Mattapan community through our programs and services.",
};

export default function ImpactPage() {
  const stats = [
    {
      number: "2,500+",
      label: "Community Members Served",
      description: "Individuals and families supported annually",
    },
    {
      number: "150+",
      label: "Youth in Programs",
      description: "Young people engaged in development activities",
    },
    {
      number: "85%",
      label: "Program Completion Rate",
      description: "Participants successfully completing programs",
    },
    {
      number: "40+",
      label: "Community Partners",
      description: "Organizations working together for change",
    },
  ];

  const stories = [
    {
      id: 1,
      title: "Youth Leadership Success",
      description:
        "Our youth development program has helped over 150 young people develop leadership skills, with 90% going on to higher education or meaningful employment.",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
      outcome: "90% college/employment rate",
    },
    {
      id: 2,
      title: "Family Stability Initiative",
      description:
        "Through our family support services, we've helped 200+ families achieve greater stability and self-sufficiency over the past year.",
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=250&fit=crop",
      outcome: "200+ families stabilized",
    },
    {
      id: 3,
      title: "Community Health Improvement",
      description:
        "Our health and wellness programs have reached over 800 community members, improving access to healthcare and health education.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      outcome: "800+ health screenings",
    },
  ];

  const outcomes = [
    {
      category: "Education",
      achievements: [
        "95% high school graduation rate for program participants",
        "300+ adults completed literacy programs",
        "150+ individuals gained new job skills",
      ],
    },
    {
      category: "Health & Wellness",
      achievements: [
        "40% reduction in emergency room visits",
        "800+ health screenings conducted",
        "200+ individuals enrolled in fitness programs",
      ],
    },
    {
      category: "Economic Development",
      achievements: [
        "120+ individuals found employment",
        "$2.5M in economic impact generated",
        "50+ small businesses supported",
      ],
    },
    {
      category: "Community Building",
      achievements: [
        "25+ community events organized",
        "1,000+ volunteer hours contributed",
        "40+ partnerships established",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <PageHero
          title="Measuring Our Impact"
          subtitle="Community Results"
          image="/images/IMG_3306.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
        />

        {/* Statistics Section */}
        <div className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-gray-600">
                Quantifiable results from our community programs and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 mb-4">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold">{stat.label}</div>
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Success Stories */}
        <div className="py-20">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real stories of transformation and positive change
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg font-semibold text-sm">
                      {story.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Detailed Outcomes */}
        <div className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Program Outcomes
              </h2>
              <p className="text-xl text-gray-600">
                Detailed results across our key program areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {outcome.category}
                  </h3>
                  <ul className="space-y-4">
                    {outcome.achievements.map(
                      (achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-green-500 mr-3 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 text-lg">
                            {achievement}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 text-white py-16">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Be Part of Our Impact
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in creating positive change in the Mattapan community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programs"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/give"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Support Our Work
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
