import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

export const metadata = {
  title: 'Privacy Policy - Church Name',
  description: 'Our privacy policy and terms of use',
}

export default function PolicyPage() {
  return (
    <>
      <Section className="bg-background-light">
        <div className="text-center">
          <Heading level="h1" className="mb-6">
            Privacy Policy
          </Heading>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {/* Hero section will be built later from Figma design */}
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Section>

      <Section className="bg-background-main">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Content section placeholder */}
          <Heading level="h2" className="mb-4">
            Introduction
          </Heading>
          <p className="text-gray-600 mb-6">
            Privacy policy content will be added here. This section will outline how we collect, use, and protect your personal information.
          </p>

          <Heading level="h2" className="mb-4">
            Information We Collect
          </Heading>
          <p className="text-gray-600 mb-6">
            Details about information collection will be added here.
          </p>

          <Heading level="h2" className="mb-4">
            How We Use Your Information
          </Heading>
          <p className="text-gray-600 mb-6">
            Information usage details will be added here.
          </p>

          <Heading level="h2" className="mb-4">
            Data Security
          </Heading>
          <p className="text-gray-600 mb-6">
            Security measures and practices will be outlined here.
          </p>

          <Heading level="h2" className="mb-4">
            Contact Us
          </Heading>
          <p className="text-gray-600">
            If you have any questions about this privacy policy, please contact us at privacy@church.com
          </p>
        </div>
      </Section>
    </>
  )
}
