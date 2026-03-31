const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

// Blog model schema (matching your existing model)
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  featuredImage: {
    url: { type: String, required: false },
    public_id: { type: String, required: false },
    alt: { type: String, default: "" },
  },
  category: {
    type: String,
    enum: [
      "sermon",
      "devotional",
      "testimony",
      "community",
      "youth",
      "missions",
      "announcement",
    ],
    required: true,
  },
  author: {
    name: { type: String, default: "Admin" },
    email: { type: String, default: "admin@voicetabernacle.com" },
    bio: { type: String, default: "Voice Tabernacle Ministry Team" },
  },
  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "published",
  },
  publishedAt: { type: Date, default: Date.now },
  readTime: { type: Number, default: 5 },
  views: { type: Number, default: 0 },
  createdBy: { type: String, default: "admin" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

// Professional blog posts data
const blogPosts = [
  {
    title: "Finding Hope in Times of Uncertainty",
    slug: "finding-hope-in-times-of-uncertainty",
    excerpt:
      "In a world filled with challenges and unpredictability, discover how faith can be your anchor and source of unwavering hope.",
    content: `
      <h2>Embracing Faith During Difficult Times</h2>
      <p>Life has a way of presenting us with unexpected challenges that can shake our very foundation. Whether it's personal struggles, global crises, or moments of deep uncertainty, we often find ourselves searching for something solid to hold onto.</p>
      
      <p>The scriptures remind us in Jeremiah 29:11, "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future." This powerful promise serves as a beacon of light in our darkest moments.</p>
      
      <h3>Practical Steps to Cultivate Hope</h3>
      <p><strong>1. Daily Prayer and Meditation</strong><br>
      Setting aside time each day to connect with God through prayer helps center our hearts and minds on His promises rather than our circumstances.</p>
      
      <p><strong>2. Community Fellowship</strong><br>
      Surrounding ourselves with fellow believers provides encouragement, support, and shared strength during challenging times.</p>
      
      <p><strong>3. Scripture Study</strong><br>
      Regular engagement with God's Word fills our hearts with His truth and reminds us of His faithfulness throughout history.</p>
      
      <h3>The Power of Perspective</h3>
      <p>When we shift our focus from our problems to God's promises, we begin to see our circumstances through the lens of eternity. What seems overwhelming today becomes manageable when we remember that our God is bigger than any challenge we face.</p>
      
      <p>Remember, hope is not wishful thinking—it's confident expectation based on God's character and promises. As we navigate uncertain times, let us hold fast to the hope that anchors our souls.</p>
      
      <blockquote>
      <p>"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." - Romans 15:13</p>
      </blockquote>
    `,
    category: "devotional",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      alt: "Sunrise over mountains symbolizing hope and new beginnings",
    },
    author: {
      name: "Pastor Michael Johnson",
      email: "pastor@voicetabernacle.com",
      bio: "Senior Pastor at Voice Tabernacle with over 15 years of ministry experience",
    },
    readTime: 6,
  },
  {
    title: "The Power of Community Service: Making a Difference Together",
    slug: "power-of-community-service-making-difference-together",
    excerpt:
      "Discover how serving others not only transforms communities but also enriches our own spiritual journey and strengthens our faith.",
    content: `
      <h2>Called to Serve</h2>
      <p>Jesus Christ set the ultimate example of service when He washed His disciples' feet, demonstrating that true leadership comes through serving others. As His followers, we are called to continue this legacy of love in action.</p>
      
      <p>At Voice Tabernacle, we believe that community service is not just an obligation—it's a privilege and an opportunity to be the hands and feet of Jesus in our world.</p>
      
      <h3>Our Recent Community Initiatives</h3>
      <p><strong>Monthly Food Drive</strong><br>
      Every third Saturday, our congregation comes together to collect and distribute food to local families in need. Last month alone, we served over 150 families in our community.</p>
      
      <p><strong>Youth Mentorship Program</strong><br>
      Our young adults volunteer as mentors for at-risk youth, providing guidance, support, and positive role models. This program has helped dozens of young people stay on track academically and personally.</p>
      
      <p><strong>Senior Care Ministry</strong><br>
      We regularly visit local nursing homes and senior centers, bringing joy through music, conversation, and companionship to our elderly community members.</p>
      
      <h3>The Ripple Effect of Service</h3>
      <p>When we serve others, something beautiful happens—not only do we meet immediate needs, but we also inspire others to join in. Service creates a ripple effect that extends far beyond our initial actions.</p>
      
      <p>One volunteer shared, "I started helping with the food drive to give back to the community. What I didn't expect was how much it would change my own heart and perspective on life."</p>
      
      <h3>How You Can Get Involved</h3>
      <p>Whether you have an hour a week or a day a month, there's a place for you in our community service efforts. Some ways to get started include:</p>
      
      <ul>
      <li>Joining our monthly food distribution</li>
      <li>Volunteering with our youth programs</li>
      <li>Participating in community clean-up events</li>
      <li>Supporting our back-to-school supply drives</li>
      <li>Helping with holiday meal preparations</li>
      </ul>
      
      <p>Remember, no act of service is too small. As Mother Teresa said, "We cannot all do great things, but we can do small things with great love."</p>
      
      <blockquote>
      <p>"Each of you should use whatever gift you have to serve others, as faithful stewards of God's grace in its various forms." - 1 Peter 4:10</p>
      </blockquote>
    `,
    category: "community",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      alt: "Volunteers serving food at a community event",
    },
    author: {
      name: "Sarah Williams",
      email: "outreach@voicetabernacle.com",
      bio: "Community Outreach Coordinator passionate about serving others",
    },
    readTime: 7,
  },
  {
    title: "Raising Children with Faith in a Modern World",
    slug: "raising-children-with-faith-modern-world",
    excerpt:
      "Navigate the challenges of parenting in today's society while instilling strong Christian values and faith in your children.",
    content: `
      <h2>The Challenge of Modern Parenting</h2>
      <p>Raising children in today's world presents unique challenges that previous generations never faced. With technology, social media, and rapidly changing cultural values, Christian parents often wonder how to effectively pass on their faith to the next generation.</p>
      
      <p>The good news is that God's principles for raising children remain constant, even as the world around us changes. Deuteronomy 6:6-7 reminds us: "These commandments that I give you today are to be on your hearts. Impress them on your children."</p>
      
      <h3>Creating a Foundation of Faith</h3>
      <p><strong>Family Devotions</strong><br>
      Establishing regular family devotion time, even if it's just 10-15 minutes each day, creates a rhythm of faith in your home. Use age-appropriate Bible stories, songs, and prayers to engage children at their level.</p>
      
      <p><strong>Modeling Faith in Daily Life</strong><br>
      Children learn more from what they observe than what they're told. When they see parents praying during difficult times, showing kindness to others, and living out Christian values, they internalize these behaviors.</p>
      
      <p><strong>Open Communication</strong><br>
      Create an environment where children feel safe asking questions about faith, life, and difficult topics. Be honest about your own struggles and show them how faith helps navigate life's challenges.</p>
      
      <h3>Addressing Modern Challenges</h3>
      <p><strong>Technology and Screen Time</strong><br>
      Rather than completely avoiding technology, teach children to use it wisely. Introduce Christian apps, worship music, and educational content that reinforces biblical values.</p>
      
      <p><strong>Peer Pressure and Cultural Influences</strong><br>
      Help children understand that being different is okay. Teach them to stand firm in their beliefs while showing love and respect to those who believe differently.</p>
      
      <p><strong>Building Critical Thinking</strong><br>
      Encourage children to think critically about what they see and hear. Help them develop the ability to filter information through a biblical worldview.</p>
      
      <h3>The Role of Church Community</h3>
      <p>Remember, you're not raising your children alone. The church community plays a vital role in supporting families and reinforcing the values taught at home. Our children's ministry, youth programs, and family events are designed to come alongside parents in this important task.</p>
      
      <h3>Practical Tips for Busy Families</h3>
      <ul>
      <li>Pray together before meals and bedtime</li>
      <li>Listen to Christian music during car rides</li>
      <li>Involve children in age-appropriate service projects</li>
      <li>Share your own faith journey and testimonies</li>
      <li>Celebrate Christian holidays with meaningful traditions</li>
      <li>Connect with other Christian families for support and fellowship</li>
      </ul>
      
      <p>Remember, perfect parenting doesn't exist, but faithful parenting does. Trust God to work in your children's hearts as you consistently point them toward Him.</p>
      
      <blockquote>
      <p>"Start children off on the way they should go, and even when they are old they will not turn from it." - Proverbs 22:6</p>
      </blockquote>
    `,
    category: "community",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      alt: "Family praying together at dinner table",
    },
    author: {
      name: "Jennifer Martinez",
      email: "family@voicetabernacle.com",
      bio: "Family Ministry Director and mother of three",
    },
    readTime: 8,
  },
  {
    title: "The Transformative Power of Forgiveness",
    slug: "transformative-power-of-forgiveness",
    excerpt:
      "Explore how forgiveness can heal wounds, restore relationships, and set us free from the burden of resentment and anger.",
    content: `
      <h2>Understanding True Forgiveness</h2>
      <p>Forgiveness is one of the most challenging yet liberating acts we can perform. It's not about excusing harmful behavior or pretending that wrongs didn't happen. Instead, forgiveness is a conscious choice to release resentment and the desire for revenge.</p>
      
      <p>Jesus taught us to pray, "Forgive us our debts, as we also have forgiven our debtors" (Matthew 6:12). This prayer reveals the intimate connection between receiving God's forgiveness and extending it to others.</p>
      
      <h3>The Weight of Unforgiveness</h3>
      <p>When we hold onto anger, bitterness, and resentment, we carry a heavy burden that affects every aspect of our lives. Unforgiveness can:</p>
      
      <ul>
      <li>Damage our physical and mental health</li>
      <li>Strain relationships with family and friends</li>
      <li>Hinder our spiritual growth and connection with God</li>
      <li>Keep us trapped in the past</li>
      <li>Rob us of joy and peace</li>
      </ul>
      
      <p>As someone once said, "Holding onto anger is like grasping a hot coal with the intent of throwing it at someone else—you are the one who gets burned."</p>
      
      <h3>The Process of Forgiveness</h3>
      <p><strong>1. Acknowledge the Hurt</strong><br>
      Don't minimize or dismiss your pain. God sees your wounds and cares about your suffering. It's okay to grieve what was lost or damaged.</p>
      
      <p><strong>2. Choose to Forgive</strong><br>
      Forgiveness is a decision, not a feeling. You may not feel like forgiving, but you can choose to begin the process. This choice may need to be made repeatedly.</p>
      
      <p><strong>3. Release the Right to Revenge</strong><br>
      Give up your desire to "get even" or see the other person suffer. Trust God to handle justice in His way and timing.</p>
      
      <p><strong>4. Pray for Your Offender</strong><br>
      This may seem impossible, but praying for those who have hurt us is one of the most powerful steps toward healing. Start small—even praying for their basic well-being is a beginning.</p>
      
      <h3>What Forgiveness Is Not</h3>
      <p>It's important to understand what forgiveness doesn't mean:</p>
      
      <ul>
      <li>It doesn't mean the offense was okay</li>
      <li>It doesn't require reconciliation (that requires repentance and change)</li>
      <li>It doesn't mean you have to trust the person again immediately</li>
      <li>It doesn't mean there shouldn't be consequences for actions</li>
      <li>It doesn't mean you have to forget what happened</li>
      </ul>
      
      <h3>The Freedom That Follows</h3>
      <p>When we choose to forgive, we experience a freedom that can only come from God. We're no longer controlled by our past hurts or the actions of others. We can move forward with hope, peace, and joy.</p>
      
      <p>One church member shared her testimony: "For years, I carried anger toward my father for abandoning our family. When I finally chose to forgive him, it was like a weight lifted off my shoulders. I didn't do it for him—I did it for me, and it changed everything."</p>
      
      <h3>Forgiving Ourselves</h3>
      <p>Sometimes the hardest person to forgive is ourselves. We replay our mistakes, hold onto guilt, and struggle to accept God's grace. Remember, if God forgives us, who are we to withhold forgiveness from ourselves?</p>
      
      <p>1 John 1:9 promises, "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."</p>
      
      <blockquote>
      <p>"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." - Ephesians 4:32</p>
      </blockquote>
    `,
    category: "sermon",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      alt: "Two people embracing in reconciliation and forgiveness",
    },
    author: {
      name: "Pastor David Thompson",
      email: "pastor@voicetabernacle.com",
      bio: "Associate Pastor specializing in counseling and restoration ministry",
    },
    readTime: 9,
  },
  {
    title: "Building Authentic Relationships in the Digital Age",
    slug: "building-authentic-relationships-digital-age",
    excerpt:
      "Learn how to cultivate meaningful, Christ-centered relationships while navigating the challenges and opportunities of our connected world.",
    content: `
      <h2>The Relationship Challenge of Our Time</h2>
      <p>We live in the most connected generation in human history, yet many people report feeling lonelier than ever. Social media, texting, and video calls have revolutionized how we communicate, but have they improved how we relate?</p>
      
      <p>As Christians, we're called to love one another deeply and authentically. Jesus said, "By this everyone will know that you are my disciples, if you love one another" (John 13:35). This calling remains the same, even as the landscape of relationships continues to evolve.</p>
      
      <h3>The Digital Dilemma</h3>
      <p>Technology offers incredible opportunities to connect with others, but it also presents unique challenges:</p>
      
      <p><strong>The Illusion of Connection</strong><br>
      Having hundreds of social media "friends" or followers doesn't necessarily translate to meaningful relationships. We can be surrounded by digital connections yet feel emotionally isolated.</p>
      
      <p><strong>Comparison and Competition</strong><br>
      Social media often presents curated versions of people's lives, leading to unhealthy comparisons and feelings of inadequacy. This can hinder authentic relationship building.</p>
      
      <p><strong>Reduced Face-to-Face Interaction</strong><br>
      The convenience of digital communication can sometimes replace in-person interactions, which are crucial for building deep, meaningful relationships.</p>
      
      <h3>Principles for Authentic Relationships</h3>
      <p><strong>1. Prioritize Presence Over Productivity</strong><br>
      When spending time with others, be fully present. Put away devices and give your undivided attention. This simple act communicates value and respect.</p>
      
      <p><strong>2. Practice Vulnerability</strong><br>
      Authentic relationships require vulnerability. Share your struggles, fears, and joys. When we're real about our imperfections, we create space for others to do the same.</p>
      
      <p><strong>3. Listen with Intent</strong><br>
      True listening involves more than waiting for your turn to speak. Listen to understand, not to respond. Ask follow-up questions and show genuine interest in others' experiences.</p>
      
      <p><strong>4. Invest in Long-term Growth</strong><br>
      Meaningful relationships take time to develop. Be patient with the process and committed to walking alongside others through various seasons of life.</p>
      
      <h3>Using Technology Wisely</h3>
      <p>Technology isn't inherently good or bad—it's a tool. Here's how we can use it to enhance rather than hinder relationships:</p>
      
      <ul>
      <li><strong>Supplement, Don't Replace:</strong> Use digital communication to supplement face-to-face interactions, not replace them</li>
      <li><strong>Share Meaningfully:</strong> When posting on social media, share content that encourages and uplifts others</li>
      <li><strong>Create Digital Boundaries:</strong> Establish times and spaces that are device-free to prioritize in-person connections</li>
      <li><strong>Use Video Calls:</strong> When distance prevents in-person meetings, video calls are more personal than text or voice alone</li>
      </ul>
      
      <h3>Building Community at Church</h3>
      <p>The local church provides an excellent environment for building authentic relationships. Here are ways to get more connected:</p>
      
      <ul>
      <li>Join a small group or Bible study</li>
      <li>Volunteer for church ministries and events</li>
      <li>Attend fellowship meals and social gatherings</li>
      <li>Participate in service projects</li>
      <li>Be intentional about greeting new people</li>
      </ul>
      
      <h3>The Fruit of Authentic Relationships</h3>
      <p>When we invest in genuine relationships, we experience:</p>
      
      <ul>
      <li>Deeper sense of belonging and community</li>
      <li>Increased emotional and spiritual support</li>
      <li>Opportunities for mutual growth and accountability</li>
      <li>Greater joy and fulfillment in life</li>
      <li>A clearer reflection of God's love to the world</li>
      </ul>
      
      <p>Remember, building authentic relationships is a skill that requires practice and intentionality. Start small, be patient with yourself and others, and trust God to bless your efforts to love well.</p>
      
      <blockquote>
      <p>"As iron sharpens iron, so one person sharpens another." - Proverbs 27:17</p>
      </blockquote>
    `,
    category: "community",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      alt: "Group of friends having meaningful conversation over coffee",
    },
    author: {
      name: "Rebecca Chen",
      email: "connections@voicetabernacle.com",
      bio: "Small Groups Coordinator focused on building authentic Christian community",
    },
    readTime: 7,
  },
  {
    title: "Discovering Your Purpose: God's Unique Plan for Your Life",
    slug: "discovering-your-purpose-gods-unique-plan",
    excerpt:
      "Uncover how to identify and pursue the unique calling God has placed on your life, finding fulfillment in His perfect plan.",
    content: `
      <h2>The Universal Question</h2>
      <p>"What is my purpose in life?" This question echoes in the hearts of people across all ages, backgrounds, and circumstances. It's a fundamental human need to understand why we exist and what we're meant to contribute to the world.</p>
      
      <p>The beautiful truth is that God has a unique purpose for each of us. Jeremiah 1:5 reminds us, "Before I formed you in the womb I knew you, before you were born I set you apart." You are not an accident—you are intentionally created with a specific purpose in mind.</p>
      
      <h3>Understanding God's General Purpose</h3>
      <p>While each person has a unique calling, there are some purposes that apply to all believers:</p>
      
      <p><strong>1. To Know and Love God</strong><br>
      Our primary purpose is to have a relationship with our Creator. Jesus summarized this in the greatest commandment: "Love the Lord your God with all your heart and with all your soul and with all your mind" (Matthew 22:37).</p>
      
      <p><strong>2. To Love Others</strong><br>
      The second greatest commandment follows: "Love your neighbor as yourself" (Matthew 22:39). We're called to love and serve others as an expression of our love for God.</p>
      
      <p><strong>3. To Make Disciples</strong><br>
      The Great Commission calls all believers to "go and make disciples of all nations" (Matthew 28:19). This doesn't mean everyone is called to be a missionary, but we're all called to share God's love in our spheres of influence.</p>
      
      <h3>Discovering Your Unique Calling</h3>
      <p><strong>Examine Your Gifts and Talents</strong><br>
      God has given you specific abilities for a reason. What comes naturally to you? What do others consistently compliment you on? These gifts are clues to your calling.</p>
      
      <p><strong>Consider Your Passions</strong><br>
      What breaks your heart? What issues or causes stir something deep within you? Often, God places passions in our hearts that align with His purposes for our lives.</p>
      
      <p><strong>Look at Your Experiences</strong><br>
      Both positive and negative experiences shape us for our calling. How has God used your background, struggles, and victories to prepare you for something specific?</p>
      
      <p><strong>Seek Wise Counsel</strong><br>
      Sometimes others can see our gifts and calling more clearly than we can. Seek advice from mature believers, mentors, and spiritual leaders who know you well.</p>
      
      <h3>Common Misconceptions About Purpose</h3>
      <p><strong>Purpose Must Be "Big" or Famous</strong><br>
      God's calling isn't always about platform or recognition. Some of the most significant kingdom work happens in everyday interactions, faithful parenting, or serving in seemingly small ways.</p>
      
      <p><strong>Purpose Is Only About Career</strong><br>
      While work is important, your purpose extends beyond your job. You can fulfill God's calling through your relationships, volunteer work, and daily interactions.</p>
      
      <p><strong>Purpose Is Found Once and Never Changes</strong><br>
      God may lead you through different seasons with varying emphases. Your core calling may remain consistent while the expression of it evolves.</p>
      
      <h3>Practical Steps to Pursue Your Purpose</h3>
      <p><strong>1. Pray Regularly</strong><br>
      Ask God to reveal His will for your life. Be patient and persistent in seeking His guidance through prayer and meditation on His Word.</p>
      
      <p><strong>2. Start Where You Are</strong><br>
      Don't wait for perfect clarity before taking action. Begin serving and using your gifts in small ways, and God will often provide direction through experience.</p>
      
      <p><strong>3. Develop Your Gifts</strong><br>
      Invest in growing the talents and abilities God has given you. Take classes, find mentors, and practice using your gifts in service to others.</p>
      
      <p><strong>4. Stay Open to God's Leading</strong><br>
      Be willing to step out of your comfort zone when God calls. His plans are often bigger and better than what we can imagine for ourselves.</p>
      
      <h3>Living with Purpose Daily</h3>
      <p>While discovering your ultimate calling is important, remember that you can live purposefully every day by:</p>
      
      <ul>
      <li>Treating every interaction as an opportunity to show God's love</li>
      <li>Approaching your current responsibilities with excellence and integrity</li>
      <li>Looking for ways to serve others in your community</li>
      <li>Using your gifts to bless those around you</li>
      <li>Staying connected to God through prayer and Scripture</li>
      </ul>
      
      <p>Remember, your purpose isn't just about what you do—it's about who you become in the process. As you seek God's will and serve others, you'll find the deep satisfaction that comes from living the life you were created to live.</p>
      
      <blockquote>
      <p>"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." - Ephesians 2:10</p>
      </blockquote>
    `,
    category: "devotional",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Person standing on mountain peak looking at sunrise, symbolizing purpose and direction",
    },
    author: {
      name: "Pastor Michael Johnson",
      email: "pastor@voicetabernacle.com",
      bio: "Senior Pastor at Voice Tabernacle with over 15 years of ministry experience",
    },
    readTime: 8,
  },
  {
    title: "Youth Ministry: Empowering the Next Generation",
    slug: "youth-ministry-empowering-next-generation",
    excerpt:
      "Explore how our youth ministry is shaping young hearts and minds for Christ, preparing them to be tomorrow's leaders.",
    content: `
      <h2>Investing in Tomorrow's Leaders</h2>
      <p>The youth of today will be the leaders of tomorrow's church and society. At Voice Tabernacle, we recognize the critical importance of investing in our young people, providing them with solid biblical foundation, mentorship, and opportunities to grow in their faith.</p>
      
      <p>Ecclesiastes 12:1 encourages us to "Remember your Creator in the days of your youth." This isn't just advice for young people—it's a reminder for all of us to prioritize youth ministry and discipleship.</p>
      
      <h3>Our Youth Ministry Approach</h3>
      <p><strong>Relevant Teaching</strong><br>
      We address real issues that young people face today—peer pressure, identity, relationships, future planning—through the lens of Scripture. Our teaching is both biblically sound and culturally relevant.</p>
      
      <p><strong>Mentorship and Discipleship</strong><br>
      Every young person in our ministry is paired with an adult mentor who provides guidance, accountability, and support. These relationships often last well beyond the teenage years.</p>
      
      <p><strong>Service Opportunities</strong><br>
      We believe young people grow in faith through serving others. Our youth regularly participate in community service projects, mission trips, and church ministries.</p>
      
      <h3>Programs That Make a Difference</h3>
      <p><strong>Wednesday Night Youth Group</strong><br>
      Our weekly gatherings include worship, relevant teaching, small group discussions, and fellowship activities. It's a safe space where young people can ask questions and grow together.</p>
      
      <p><strong>Summer Youth Camp</strong><br>
      Our annual summer camp provides an intensive week of spiritual growth, outdoor activities, and life-changing encounters with God. Many of our young people point to camp as a turning point in their faith journey.</p>
      
      <p><strong>Leadership Development</strong><br>
      We provide opportunities for mature youth to develop leadership skills by helping with children's ministry, leading worship, and organizing events.</p>
      
      <h3>Addressing Modern Challenges</h3>
      <p>Today's youth face unique pressures that require thoughtful, biblical responses:</p>
      
      <p><strong>Social Media and Identity</strong><br>
      We help young people understand their identity in Christ rather than seeking validation through likes, follows, and online popularity.</p>
      
      <p><strong>Mental Health Awareness</strong><br>
      We create open environments where youth can discuss anxiety, depression, and other mental health challenges while pointing them to both professional help and spiritual resources.</p>
      
      <p><strong>Future Planning</strong><br>
      We help young people discover their gifts and calling, providing guidance for college, career choices, and life decisions through a biblical worldview.</p>
      
      <h3>Parent Partnership</h3>
      <p>Youth ministry is most effective when it partners with parents rather than replacing them. We provide resources and support to help parents continue discipleship at home:</p>
      
      <ul>
      <li>Monthly parent meetings and updates</li>
      <li>Family devotional resources</li>
      <li>Parenting workshops and seminars</li>
      <li>Communication about youth activities and spiritual growth</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>We've seen incredible transformation in our young people:</p>
      
      <ul>
      <li>Former youth group members now serving in full-time ministry</li>
      <li>Students choosing Christian colleges and careers</li>
      <li>Young people leading Bible studies in their schools</li>
      <li>Teenagers bringing friends and family to church</li>
      <li>Youth overcoming addiction and destructive behaviors through faith</li>
      </ul>
      
      <h3>How You Can Support Youth Ministry</h3>
      <p>Whether you're a parent, grandparent, or simply someone who cares about the next generation, there are ways to get involved:</p>
      
      <ul>
      <li>Volunteer as a youth leader or mentor</li>
      <li>Pray regularly for our young people and their leaders</li>
      <li>Support youth events and activities financially</li>
      <li>Attend youth-led services and events</li>
      <li>Share your testimony and life experiences with youth</li>
      </ul>
      
      <p>The investment we make in young people today will impact generations to come. When we empower youth with biblical truth, loving relationships, and opportunities to serve, we're not just changing individual lives—we're shaping the future of the church and society.</p>
      
      <blockquote>
      <p>"Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity." - 1 Timothy 4:12</p>
      </blockquote>
    `,
    category: "youth",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
      alt: "Group of diverse young people in prayer circle",
    },
    author: {
      name: "Marcus Rodriguez",
      email: "youth@voicetabernacle.com",
      bio: "Youth Pastor dedicated to empowering the next generation for Christ",
    },
    readTime: 7,
  },
  {
    title: "The Heart of Worship: Beyond Sunday Morning",
    slug: "heart-of-worship-beyond-sunday-morning",
    excerpt:
      "Discover how worship extends far beyond singing songs on Sunday, encompassing every aspect of our daily lives as an offering to God.",
    content: `
      <h2>Redefining Worship</h2>
      <p>When many people think of worship, they picture singing hymns or contemporary songs in church on Sunday morning. While corporate worship is indeed important, true worship encompasses so much more than our weekly gatherings.</p>
      
      <p>Romans 12:1 calls us to "offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship." This verse reveals that worship is not just what we do for an hour on Sunday—it's how we live every moment of every day.</p>
      
      <h3>Worship as a Lifestyle</h3>
      <p><strong>Work as Worship</strong><br>
      Whether you're a teacher, mechanic, nurse, or stay-at-home parent, your work can be an act of worship when done with excellence and integrity for God's glory. Colossians 3:23 reminds us, "Whatever you do, work at it with all your heart, as working for the Lord."</p>
      
      <p><strong>Relationships as Worship</strong><br>
      How we treat our spouse, children, friends, and even strangers reflects our worship of God. When we love others sacrificially, we're demonstrating the love of Christ and offering worship through our actions.</p>
      
      <p><strong>Stewardship as Worship</strong><br>
      How we handle our finances, time, and resources is an act of worship. When we give generously, manage wisely, and use our blessings to help others, we're acknowledging that everything belongs to God.</p>
      
      <h3>The Elements of True Worship</h3>
      <p><strong>Gratitude and Thanksgiving</strong><br>
      A heart of worship is characterized by gratitude. Even in difficult circumstances, we can find reasons to thank God for His goodness, faithfulness, and love.</p>
      
      <p><strong>Surrender and Submission</strong><br>
      Worship involves yielding our will to God's will. It's saying, "Not my way, but Your way, Lord." This surrender is not defeat—it's victory, because God's plans are always better than our own.</p>
      
      <p><strong>Obedience and Service</strong><br>
      True worship results in obedience to God's commands and service to others. When we obey God's Word and serve His people, we're offering worship through our actions.</p>
      
      <h3>Worship in Different Seasons</h3>
      <p><strong>Worship in Joy</strong><br>
      When life is good, it's natural to praise God. But even in our celebrations, we must remember to give God the glory and not take credit for our blessings.</p>
      
      <p><strong>Worship in Sorrow</strong><br>
      Perhaps the most profound worship happens in our darkest moments. When we choose to trust God despite our pain, we're offering a sacrifice of praise that touches His heart deeply.</p>
      
      <p><strong>Worship in the Ordinary</strong><br>
      Most of life is made up of ordinary moments—washing dishes, commuting to work, helping with homework. These mundane activities become acts of worship when done with a heart focused on God.</p>
      
      <h3>Corporate Worship: Coming Together</h3>
      <p>While worship is a lifestyle, corporate worship remains vital to our spiritual health. When we gather as a community, several important things happen:</p>
      
      <ul>
      <li><strong>Unity:</strong> We're reminded that we're part of something bigger than ourselves</li>
      <li><strong>Encouragement:</strong> We strengthen and are strengthened by fellow believers</li>
      <li><strong>Teaching:</strong> We receive instruction and guidance from God's Word</li>
      <li><strong>Celebration:</strong> We celebrate God's goodness together as a family</li>
      <li><strong>Mission:</strong> We're inspired and equipped to serve in the world</li>
      </ul>
      
      <h3>Practical Ways to Live Worshipfully</h3>
      <p><strong>Morning Dedication</strong><br>
      Start each day by dedicating it to God. A simple prayer like "Lord, may my life today bring You glory" sets the tone for worshipful living.</p>
      
      <p><strong>Mindful Moments</strong><br>
      Throughout the day, take brief moments to acknowledge God's presence. Thank Him for a beautiful sunset, ask for wisdom before a difficult conversation, or praise Him for a small blessing.</p>
      
      <p><strong>Evening Reflection</strong><br>
      Before bed, reflect on how you saw God at work during the day. This practice cultivates a heart of gratitude and awareness of God's constant presence.</p>
      
      <h3>Overcoming Worship Obstacles</h3>
      <p><strong>Busyness:</strong> When life gets hectic, worship often feels like another item on our to-do list. Remember that worship isn't about adding more activities—it's about doing what you're already doing with a heart focused on God.</p>
      
      <p><strong>Distraction:</strong> Our minds naturally wander, especially during prayer or church services. Don't be discouraged—gently redirect your thoughts back to God and His goodness.</p>
      
      <p><strong>Dry Seasons:</strong> Sometimes worship feels mechanical or empty. These seasons are normal in the Christian life. Continue the disciplines of worship even when you don't feel like it—often, breakthrough comes through faithfulness in the desert.</p>
      
      <h3>The Fruit of a Worshipful Life</h3>
      <p>When worship becomes our lifestyle, we experience:</p>
      
      <ul>
      <li>Greater peace and contentment</li>
      <li>Increased awareness of God's presence</li>
      <li>More joy in everyday activities</li>
      <li>Stronger relationships with others</li>
      <li>Clearer sense of purpose and direction</li>
      <li>Deeper intimacy with God</li>
      </ul>
      
      <p>Worship is not about perfect performance—it's about a heart that seeks to honor God in all things. As you go through this week, look for opportunities to turn ordinary moments into acts of worship. You might be surprised at how this perspective transforms not just your relationship with God, but your entire outlook on life.</p>
      
      <blockquote>
      <p>"Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks." - John 4:23</p>
      </blockquote>
    `,
    category: "sermon",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=600&fit=crop",
      alt: "Person with raised hands in worship against beautiful sky",
    },
    author: {
      name: "Pastor Michael Johnson",
      email: "pastor@voicetabernacle.com",
      bio: "Senior Pastor at Voice Tabernacle with over 15 years of ministry experience",
    },
    readTime: 9,
  },
];

async function seedBlogs() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");

    // Clear existing blogs (optional - remove if you want to keep existing blogs)
    // await Blog.deleteMany({});
    // console.log('Cleared existing blogs');

    // Insert new blogs
    const insertedBlogs = await Blog.insertMany(blogPosts);
    console.log(`Successfully seeded ${insertedBlogs.length} blog posts`);

    // Display inserted blogs
    insertedBlogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title} (${blog.category})`);
    });
  } catch (error) {
    console.error("Error seeding blogs:", error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

// Run the seeding function
seedBlogs();
