import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

export const metadata = {
  title: 'Ministries - Voice Tabernacle',
  description: 'Explore our various ministries and get involved',
}

export default function MinistriesPage() {
  return (
    <>
      <Section className="bg-background-light">
        <div className="text-center">
          <Heading level="h1" className="mb-6">
            Ministries
          </Heading>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {/* Hero section will be built later from Figma design */}
            Discover ways to serve and grow in faith
          </p>
        </div>
      </Section>

      <Section className="bg-background-main">
        <div>
          <Heading level="h2" className="mb-6">
            Our Ministries
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Future CMS content */}
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Youth Ministry</h3>
              <p className="text-gray-600">Ministry description placeholder</p>
            </div>
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Worship Ministry</h3>
              <p className="text-gray-600">Ministry description placeholder</p>
            </div>
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Children's Ministry</h3>
              <p className="text-gray-600">Ministry description placeholder</p>
            </div>
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Outreach Ministry</h3>
              <p className="text-gray-600">Ministry description placeholder</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-background-light">
        <div className="text-center">
          <Heading level="h2" className="mb-6">
            Get Involved
          </Heading>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            {/* Content section placeholder */}
            Information about joining ministries will be displayed here.
          </p>
          <button className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Join a Ministry
          </button>
        </div>
      </Section>
    </>
  )
}
