import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import PageHero from "@/components/shared/PageHero";
import BlogPost from "@/components/blog/BlogPost";
import Newsletter from "@/components/shared/Newsletter";

// Sample blog posts data (in real app, this would come from CMS/database)
const blogPosts = {
  "god-is-good-all-the-time": {
    id: 1,
    title: "God Is Good All the Time!",
    category: "Faith",
    date: "Dec 15, 2023",
    author: "Pastor Smith",
    excerpt:
      "Reflecting on the miracles we've witnessed this month through our community outreach and the faithful...",
    image: "/images/IMG_6080-scaled.jpg",
    content: `
      <p>As we reflect on this past month, we are overwhelmed by the goodness of God and the miracles we've witnessed in our community. From unexpected healings to restored relationships, God's hand has been evident in every aspect of our ministry.</p>
      
      <h3>Miracles in Our Midst</h3>
      <p>This month alone, we've seen three families reunited, two individuals find stable employment through our job training program, and countless hearts touched by the power of prayer. Each story reminds us that God is indeed good all the time.</p>
      
      <h3>Community Outreach Impact</h3>
      <p>Our weekly food distribution has grown to serve over 200 families, and our after-school tutoring program now supports 45 children in their educational journey. These are not just numbers—they represent lives being transformed by God's love through our collective efforts.</p>
      
      <h3>Moving Forward in Faith</h3>
      <p>As we look ahead, we're reminded that every blessing comes with responsibility. We're called to be good stewards of what God has entrusted to us and to continue spreading His love throughout our community and beyond.</p>
      
      <blockquote>
        <p>"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." - Romans 8:28</p>
      </blockquote>
    `,
  },
  "new-families-adoption-month": {
    id: 2,
    title: "New Families During National Adoption Month",
    category: "Community",
    date: "Nov 22, 2023",
    author: "Sarah Mitchell",
    excerpt:
      "Celebrating the beautiful addition of three new families to our congregation this month as we honor the gift of adoption...",
    image: "/images/IMG_6043-600x600.jpg",
    content: `
      <p>November marks National Adoption Month, and we are blessed to celebrate the addition of three beautiful families to our Voice Tabernacle community. Each family brings their unique story of love, hope, and God's perfect timing.</p>
      
      <h3>Stories of Love and Hope</h3>
      <p>The Johnson family welcomed their daughter Emma after a two-year adoption journey. The Martinez family expanded with twin boys from foster care. The Williams family adopted their teenage son, completing a family that began through mentorship in our youth program.</p>
      
      <h3>Supporting Adoptive Families</h3>
      <p>Our church family has rallied around these new additions with practical support, prayer, and ongoing encouragement. We've organized meal trains, provided childcare during transition periods, and created support groups for adoptive parents.</p>
      
      <h3>The Heart of Adoption</h3>
      <p>Adoption reflects God's heart for us—choosing us, loving us unconditionally, and bringing us into His family. As we celebrate these earthly adoptions, we're reminded of our own adoption as children of God.</p>
      
      <blockquote>
        <p>"But when the set time had fully come, God sent his Son... to redeem those under the law, that we might receive adoption to sonship." - Galatians 4:4-5</p>
      </blockquote>
    `,
  },
  "stitching-together-new-life": {
    id: 3,
    title: "Stitching Together A New Life",
    category: "Mission",
    date: "Oct 8, 2023",
    author: "James Davis",
    excerpt:
      "Our vocational training program in local communities is helping individuals gain skills and restore dignity through craftsmanship...",
    image: "/images/IMG_6221-1-700x450.jpg",
    content: `
      <p>In the heart of our community, something beautiful is happening. Our vocational training program is not just teaching skills—it's weaving together new possibilities for individuals who had lost hope in their future.</p>
      
      <h3>More Than Just Skills</h3>
      <p>Maria, a single mother of three, joined our sewing program six months ago. Today, she runs her own small tailoring business from home, providing for her family with dignity and pride. Her story represents the transformation happening in dozens of lives.</p>
      
      <h3>Building Community Through Craft</h3>
      <p>Our workshop has become more than a training center—it's a place of fellowship, encouragement, and mutual support. Participants pray together, share meals, and celebrate each other's successes.</p>
      
      <h3>Expanding Our Reach</h3>
      <p>What started with 10 participants has grown to over 50 individuals learning various trades including sewing, carpentry, and small business management. We're planning to expand into culinary arts and computer literacy in the coming year.</p>
      
      <blockquote>
        <p>"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." - Ephesians 2:10</p>
      </blockquote>
    `,
  },
  "sunday-service-highlights": {
    id: 4,
    title: "Sunday Service Highlights",
    category: "Sermons",
    date: "Dec 10, 2023",
    author: "Bishop Nicolas Homicil",
    excerpt:
      "Key takeaways from this week&apos;s powerful sermon on faith, hope, and community transformation...",
    image: "/images/churchwp_media_-36-700x450.jpg",
    content: `
      <p>This Sunday's service was filled with powerful moments of worship, teaching, and community connection. Bishop Nicolas Homicil delivered a transformative message on the intersection of faith, hope, and community transformation.</p>
      
      <h3>Key Message: Faith as a Catalyst</h3>
      <p>The central theme focused on how personal faith becomes the catalyst for broader community change. When individuals are transformed by God's love, they naturally become agents of positive change in their neighborhoods, workplaces, and families.</p>
      
      <h3>Hope in Action</h3>
      <p>We explored practical ways to live out our hope, including:</p>
      <ul>
        <li>Volunteering in community outreach programs</li>
        <li>Mentoring young people in our neighborhood</li>
        <li>Supporting local businesses and initiatives</li>
        <li>Praying for and with our neighbors</li>
      </ul>
      
      <h3>Community Transformation Stories</h3>
      <p>Several congregation members shared testimonies of how their faith has led to positive changes in their communities. From starting food pantries to organizing neighborhood clean-up efforts, these stories demonstrate the ripple effect of transformed lives.</p>
      
      <blockquote>
        <p>"Be the change you wish to see in the world, grounded in the love of Christ." - Bishop Nicolas Homicil</p>
      </blockquote>
    `,
  },
  "youth-ministry-growth": {
    id: 5,
    title: "Youth Ministry Growth",
    category: "Community",
    date: "Nov 28, 2023",
    author: "Maria Rodriguez",
    excerpt:
      "Our youth programs continue to expand, reaching more young people with mentorship and spiritual guidance...",
    image: "/images/2f6d15cb-25e1-4aef-b890-05583e4b5278.jpg",
    content: `
      <p>Our youth ministry has experienced remarkable growth this year, expanding from 25 regular attendees to over 60 young people actively participating in our programs. This growth reflects not just numbers, but transformed lives and strengthened community connections.</p>
      
      <h3>Program Expansion</h3>
      <p>We've launched several new initiatives this year:</p>
      <ul>
        <li><strong>Leadership Academy:</strong> Training young leaders for future ministry roles</li>
        <li><strong>Community Service Teams:</strong> Monthly service projects in the neighborhood</li>
        <li><strong>Mentorship Program:</strong> Pairing teens with adult mentors from the congregation</li>
        <li><strong>Arts & Music Ministry:</strong> Creative expression through worship and performance</li>
      </ul>
      
      <h3>Impact Stories</h3>
      <p>Seventeen-year-old Marcus joined our program struggling with direction after high school. Through our mentorship program, he's now enrolled in community college and serves as a peer leader for younger teens. His story represents the transformation happening in dozens of young lives.</p>
      
      <h3>Looking Ahead</h3>
      <p>Plans for 2024 include expanding our tutoring services, launching a youth entrepreneurship program, and establishing partnerships with local schools to provide additional support for at-risk students.</p>
      
      <blockquote>
        <p>"Train up a child in the way he should go; even when he is old he will not depart from it." - Proverbs 22:6</p>
      </blockquote>
    `,
  },
  "haiti-mission-update": {
    id: 6,
    title: "Haiti Mission Update",
    category: "Mission",
    date: "Dec 1, 2023",
    author: "Rev. Johnson",
    excerpt:
      "Updates from our recent mission trip to Haiti and the ongoing community development projects...",
    image: "/images/4e45d363-fbb0-442f-9d25-2eb784ad0ec5.jpg",
    content: `
      <p>Our recent mission trip to Haiti was both challenging and deeply rewarding. Over two weeks, our team of 12 volunteers worked alongside local communities to advance several ongoing development projects that are making a real difference in people's lives.</p>
      
      <h3>Clean Water Initiative</h3>
      <p>We completed the installation of two new water filtration systems, providing clean drinking water to over 300 families in rural communities. The impact was immediate—children no longer miss school due to waterborne illnesses, and families can focus their energy on education and economic development rather than searching for clean water.</p>
      
      <h3>Educational Support</h3>
      <p>Our partnership with local schools has resulted in:</p>
      <ul>
        <li>Renovation of three classrooms serving 150 students</li>
        <li>Donation of educational materials and supplies</li>
        <li>Training for 8 local teachers in new teaching methodologies</li>
        <li>Establishment of a small library with over 200 books</li>
      </ul>
      
      <h3>Economic Empowerment</h3>
      <p>We launched a micro-loan program that has already helped 15 families start small businesses, from farming cooperatives to craft production. These initiatives provide sustainable income and build local economic resilience.</p>
      
      <h3>Ongoing Commitment</h3>
      <p>This work continues year-round through our local partners. We're planning our next trip for March 2024, with a focus on expanding healthcare access and continuing our educational initiatives.</p>
      
      <blockquote>
        <p>"Go therefore and make disciples of all nations..." - Matthew 28:19</p>
      </blockquote>
    `,
  },
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Post Not Found - Voice Tabernacle",
    };
  }

  return {
    title: `${post.title} - Voice Tabernacle Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.category}
        image={post.image}
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
