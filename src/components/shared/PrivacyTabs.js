"use client";

import { useState } from "react";

const tabs = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Use" },
  { id: "mission", label: "Our Mission" },
  { id: "vision", label: "Our Vision" },
];

export default function PrivacyTabs() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-brand-primary text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        {activeTab === "privacy" && (
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                PRIVACY
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-primary pl-4">
                Privacy Policy
              </h2>
            </div>

            {/* Collection of Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                Collection of Personal Information
              </h3>
              <p className="text-gray-600 mb-4">
                We don&apos;t sell, trade, or otherwise transfer your personal
                information directly to us when you register for events,
                subscribe to our newsletter, or make a donation. This may
                include your name, email address, phone number, and payment
                details.
              </p>
            </div>

            {/* Use of Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                Use of Personal Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">→</span>
                  To provide and maintain our services to the community.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">→</span>
                  To notify you about changes to our events or services.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">→</span>
                  To process your donations securely.
                </li>
              </ul>
            </div>

            {/* Use of Cookies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                Use of Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                Our website uses cookies to enhance your browsing experience.
                Cookies are small files placed on your device that help us:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">→</span>
                  Analyze web traffic and improve site functionality.
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Questions?</strong> Contact us at{" "}
                <a
                  href="mailto:info@voicetabernacle.org"
                  className="text-brand-primary hover:underline"
                >
                  info@voicetabernacle.org
                </a>
              </p>
            </div>

            {/* Navigation Arrow */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setActiveTab("terms")}
                className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {activeTab === "terms" && (
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                LEGAL
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-primary pl-4">
                Terms of Use
              </h2>
            </div>

            {/* User Conduct */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                User Conduct
              </h3>
              <p className="text-gray-600 mb-4">
                As a user of the Voice Tabernacle website, you agree to use our
                services for lawful purposes only. You are prohibited from:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Posting or transmitting any unlawful, threatening, or
                  defamatory material.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Attempting to interfere with the proper working of the site.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Using the site for any unauthorized commercial purposes.
                </li>
              </ul>
            </div>

            {/* Disclaimer & Liability */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                Disclaimer & Liability
              </h3>
              <p className="text-gray-600 mb-4">
                Voice Tabernacle Multi Services Center provides this website on
                an &ldquo;as is&rdquo; basis. We do not warrant that the website
                will be uninterrupted or error-free.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Voice Tabernacle reserves the right to modify these
                  terms at any time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mission" && (
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                PURPOSE
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-primary pl-4">
                Our Mission
              </h2>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6 text-lg">
                To serve as a beacon of hope and transformation in our community
                through the love of Christ, providing spiritual guidance, social
                services, and educational opportunities that empower individuals
                and families to reach their full potential.
              </p>

              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                Core Values
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <strong>Faith:</strong> Grounding all our actions in biblical
                  principles and Christian love.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <strong>Community:</strong> Building strong relationships and
                  supporting one another.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <strong>Service:</strong> Actively serving those in need
                  within our community and beyond.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <strong>Excellence:</strong> Striving for excellence in all
                  our ministries and programs.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "vision" && (
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                FUTURE
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-primary pl-4">
                Our Vision
              </h2>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6 text-lg">
                To be a thriving, multicultural church community that transforms
                lives and communities through the power of God&apos;s love,
                creating lasting positive change that extends far beyond our
                walls.
              </p>

              <h3 className="text-lg font-semibold text-brand-primary mb-4">
                Vision Goals
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Spiritual Growth
                  </h4>
                  <p className="text-sm text-gray-600">
                    Nurturing mature disciples who live out their faith
                    authentically in daily life.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Community Impact
                  </h4>
                  <p className="text-sm text-gray-600">
                    Creating measurable positive change in education, health,
                    and social welfare.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Global Outreach
                  </h4>
                  <p className="text-sm text-gray-600">
                    Expanding our mission to serve communities in Haiti and
                    other nations.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Youth Development
                  </h4>
                  <p className="text-sm text-gray-600">
                    Empowering the next generation with leadership skills and
                    strong values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
