"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const categories = ["All", "Faith", "Mission", "Community", "Sermons"];

const blogPosts = [
  {
    id: 1,
    title: "God Is Good All the Time!",
    category: "Faith",
    date: "Dec 15, 2023",
    author: "Pastor Smith",
    excerpt:
      "Reflecting on the miracles we&apos;ve witnessed this month through our community outreach and the faithful...",
    image: "/images/IMG_6080-scaled.jpg",
    slug: "god-is-good-all-the-time",
  },
  {
    id: 2,
    title: "New Families During National Adoption Month",
    category: "Community",
    date: "Nov 22, 2023",
    author: "Sarah Mitchell",
    excerpt:
      "Celebrating the beautiful addition of three new families to our congregation this month as we honor the gift of adoption...",
    image: "/images/IMG_6043-600x600.jpg",
    slug: "new-families-adoption-month",
  },
  {
    id: 3,
    title: "Stitching Together A New Life",
    category: "Mission",
    date: "Oct 8, 2023",
    author: "James Davis",
    excerpt:
      "Our vocational training program is local communities is helping individuals gain skills and restore dignity through craftsmanship...",
    image: "/images/IMG_6221-1-700x450.jpg",
    slug: "stitching-together-new-life",
  },
  {
    id: 4,
    title: "Sunday Service Highlights",
    category: "Sermons",
    date: "Dec 10, 2023",
    author: "Bishop Nicolas Homicil",
    excerpt:
      "Key takeaways from this week&apos;s powerful sermon on faith, hope, and community transformation...",
    image: "/images/churchwp_media_-36-700x450.jpg",
    slug: "sunday-service-highlights",
  },
  {
    id: 5,
    title: "Youth Ministry Growth",
    category: "Community",
    date: "Nov 28, 2023",
    author: "Maria Rodriguez",
    excerpt:
      "Our youth programs continue to expand, reaching more young people with mentorship and spiritual guidance...",
    image: "/images/2f6d15cb-25e1-4aef-b890-05583e4b5278.jpg",
    slug: "youth-ministry-growth",
  },
  {
    id: 6,
    title: "Haiti Mission Update",
    category: "Mission",
    date: "Dec 1, 2023",
    author: "Rev. Johnson",
    excerpt:
      "Updates from our recent mission trip to Haiti and the ongoing community development projects...",
    image: "/images/4e45d363-fbb0-442f-9d25-2eb784ad0ec5.jpg",
    slug: "haiti-mission-update",
  },
];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 rounded-full w-20"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-brand-primary text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Featured Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-brand-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read More Button */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors text-sm font-medium"
              >
                READ MORE
                <svg
                  className="w-4 h-4 ml-1"
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
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {filteredPosts.length >= 6 && (
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all">
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
}
