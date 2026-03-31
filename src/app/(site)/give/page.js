import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

export const metadata = {
  title: 'Give - Church Name',
  description: 'Support our church through giving',
}

export default function GivePage() {
  return (
    <>
      <Section className="bg-background-light">
        <div className="text-center">
          <Heading level="h1" className="mb-6">
            Give
          </Heading>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {/* Hero section will be built later from Figma design */}
            Your generosity helps us serve our community
          </p>
        </div>
      </Section>

      <Section className="bg-background-main">
        <div className="max-w-2xl mx-auto text-center">
          <Heading level="h2" className="mb-6">
            Ways to Give
          </Heading>
          <p className="text-gray-600 mb-8">
            {/* Content section placeholder */}
            Information about different giving options will be displayed here.
          </p>
          <button className="bg-brand-primary text-white px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
            Give Now
          </button>
        </div>
      </Section>

      <Section className="bg-background-light">
        <div>
          <Heading level="h2" className="mb-6 text-center">
            Why We Give
          </Heading>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            {/* Content section placeholder */}
            Biblical teaching on giving and stewardship will be displayed here.
          </p>
        </div>
      </Section>

      <Section className="bg-background-main">
        <div>
          <Heading level="h2" className="mb-6 text-center">
            Impact Stories
          </Heading>
          <p className="text-gray-600 text-center">
            {/* Future CMS content */}
            Stories of how giving has impacted the community will be displayed here.
          </p>
        </div>
      </Section>
    </>
  )
}
