import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import BlogPost from "@/components/blog/BlogPost";
import Newsletter from "@/components/shared/Newsletter";

export default async function BlogPostPage({ params }) {
  let post = null;
  
  // Try to fetch from database first
  try {
    const baseUrl = 'http://localhost:3001';
    const response = await fetch(`${baseUrl}/api/blogs/slug/${params.slug}`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        post = data.data;
      }
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  // Fallback to static data if database fetch fails
  if (!post) {
    const fallbackBlogPosts = {
      "god-is-good-all-the-time": {
        id: 1,
        title: "God Is Good All the Time!",
        category: "Faith",
        date: "Dec 15, 2023",
        author: { name: "Pastor Smith" },
        excerpt: "Reflecting on the miracles we've witnessed this month through our community outreach and the faithful...",
        image: "/images/IMG_6080-scaled.jpg",
        content: `<p>As we reflect on this past month, we are overwhelmed by the goodness of God and the miracles we've witnessed in our community.</p>`,
      },
      "new-families-adoption-month": {
        id: 2,
        title: "New Families During National Adoption Month",
        category: "Community",
        date: "Nov 22, 2023",
        author: { name: "Sarah Mitchell" },
        excerpt: "Celebrating the beautiful addition of three new families to our congregation this month...",
        image: "/images/IMG_6043-600x600.jpg",
        content: `<p>November marks National Adoption Month, and we are blessed to celebrate the addition of three beautiful families.</p>`,
      }
    };
    
    post = fallbackBlogPosts[params.slug];
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.category}
        image={post.featuredImage?.url || post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: post.title },
        ]}
      />

      <Section className="bg-background-main">
        <BlogPost post={post} />
      </Section>

      <Newsletter />
    </>
  );
}

export async function generateMetadata({ params }) {
  let post = null;
  
  try {
    const baseUrl = 'http://localhost:3001';
    const response = await fetch(`${baseUrl}/api/blogs/slug/${params.slug}`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        post = data.data;
      }
    }
  } catch (error) {
    console.error("Error fetching blog for metadata:", error);
  }

  if (!post) {
    return {
      title: "Post Not Found - Voice Tabernacle",
    };
  }

  return {
    title: `${post.title} - Voice Tabernacle Blog`,
    description: post.excerpt || post.seo?.metaDescription,
    keywords: post.seo?.keywords?.join(", "),
  };
}
