import { getBackgroundUrl } from "../utils/cover-generator.js";

const content = `
<p>Artificial Intelligence is revolutionizing industries across the globe, from healthcare and finance to retail and manufacturing. As we advance into an era of intelligent automation, understanding the potential and challenges of AI becomes crucial for businesses and individuals alike.</p>
<br/>

<p>Machine learning algorithms are now capable of processing vast amounts of data to identify patterns and make predictions with remarkable accuracy. This capability is transforming how companies make decisions and interact with their customers.</p>
<br/>

<p>However, with great power comes great responsibility. As AI systems become more sophisticated, we must ensure they are developed and deployed ethically, with proper consideration for privacy, fairness, and transparency.</p>
<br/>

<h4>The Future of AI in Business</h4>
<br/>

<p>Businesses that embrace AI early will have a significant competitive advantage. From automating routine tasks to providing personalized customer experiences, AI offers countless opportunities for innovation and growth.</p>
<br/>

<h4>Challenges and Considerations</h4>
<br/>

<p>While AI presents exciting opportunities, it also brings challenges such as data privacy concerns, the need for skilled professionals, and the importance of maintaining human oversight in critical decision-making processes.</p>
<br/>

<p>Organizations must carefully balance the benefits of AI with the need for responsible implementation and ongoing monitoring to ensure systems remain aligned with business objectives and ethical standards.</p>
`;

const blogTags = [
  "artificial-intelligence",
  "machine-learning",
  "automation",
  "technology",
  "business",
  "innovation",
  "data-science",
  "future-tech",
  "digital-transformation",
  "ai-ethics",
];

const categories = [
  "Artificial Intelligence",
  "Technology",
  "Business Innovation",
  "Machine Learning",
  "Digital Transformation",
];

const blogPosts = [
  {
    id: "ai-revolution-business",
    slug: "ai-revolution-transforming-business",
    title:
      "The AI Revolution: How Artificial Intelligence is Transforming Modern Business",
    description:
      "Explore how AI is reshaping industries and discover the opportunities and challenges that come with intelligent automation.",
    category: "Artificial Intelligence",
    tags: ["artificial-intelligence", "business", "automation"],
    readTime: "8 minutes read",
    publishedAt: "2024-01-15T10:00:00.000Z",
    coverUrl: getBackgroundUrl("ai-revolution-business"),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    content: content,
    author: {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      avatarUrl: "/assets/images/avatar/avatar_1.jpg",
      bio: "Leading expert in artificial intelligence with over 10 years of experience in machine learning and business automation.",
    },
    featured: true,
    favorited: false,
  },
  {
    id: "machine-learning-guide",
    slug: "machine-learning-practical-guide",
    title:
      "Machine Learning in Practice: A Comprehensive Guide for Business Leaders",
    description:
      "Learn how to implement machine learning solutions in your organization and drive data-driven decision making.",
    category: "Machine Learning",
    tags: ["machine-learning", "data-science", "business"],
    readTime: "12 minutes read",
    publishedAt: "2024-01-10T14:30:00.000Z",
    coverUrl: getBackgroundUrl("machine-learning-guide"),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    content: content,
    author: {
      name: "Michael Rodriguez",
      role: "Data Science Lead",
      avatarUrl: "/assets/images/avatar/avatar_2.jpg",
      bio: "Passionate data scientist helping businesses unlock the power of their data through advanced analytics and ML.",
    },
    featured: false,
    favorited: true,
  },
  {
    id: "future-automation",
    slug: "future-of-workplace-automation",
    title:
      "The Future of Work: How Automation is Reshaping the Modern Workplace",
    description:
      "Discover how intelligent automation is changing job roles and creating new opportunities in the digital economy.",
    category: "Digital Transformation",
    tags: ["automation", "future-tech", "digital-transformation"],
    readTime: "10 minutes read",
    publishedAt: "2024-01-05T09:15:00.000Z",
    coverUrl: getBackgroundUrl("future-automation"),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    content: content,
    author: {
      name: "Emma Thompson",
      role: "Digital Transformation Consultant",
      avatarUrl: "/assets/images/avatar/avatar_3.jpg",
      bio: "Helping organizations navigate digital transformation with a focus on human-centered technology adoption.",
    },
    featured: true,
    favorited: false,
  },
  {
    id: "ai-ethics-business",
    slug: "ai-ethics-responsible-implementation",
    title:
      "AI Ethics in Business: Building Responsible and Transparent AI Systems",
    description:
      "Explore the ethical considerations and best practices for implementing AI systems that are fair, transparent, and accountable.",
    category: "Artificial Intelligence",
    tags: ["ai-ethics", "artificial-intelligence", "business"],
    readTime: "9 minutes read",
    publishedAt: "2024-01-01T11:00:00.000Z",
    coverUrl: getBackgroundUrl("ai-ethics-business"),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    content: content,
    author: {
      name: "Dr. James Wilson",
      role: "AI Ethics Researcher",
      avatarUrl: "/assets/images/avatar/avatar_4.jpg",
      bio: "Research scientist focused on developing ethical frameworks for AI development and deployment in business contexts.",
    },
    featured: false,
    favorited: true,
  },
  {
    id: "data-driven-decisions",
    slug: "data-driven-decision-making-guide",
    title:
      "From Data to Decisions: Leveraging Analytics for Strategic Business Growth",
    description:
      "Learn how to build a data-driven culture and use analytics to make better business decisions and drive growth.",
    category: "Business Innovation",
    tags: ["data-science", "business", "innovation"],
    readTime: "7 minutes read",
    publishedAt: "2023-12-28T16:45:00.000Z",
    coverUrl: getBackgroundUrl("data-driven-decisions"),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    content: content,
    author: {
      name: "Lisa Anderson",
      role: "Business Intelligence Manager",
      avatarUrl: "/assets/images/avatar/avatar_5.jpg",
      bio: "Business intelligence expert with a track record of helping companies transform their data into actionable insights.",
    },
    featured: false,
    favorited: false,
  },
  {
    id: "emerging-tech-trends",
    slug: "emerging-technology-trends-2024",
    title:
      "Emerging Technology Trends Shaping 2024: What Businesses Need to Know",
    description:
      "Stay ahead of the curve with insights into the latest technology trends that will impact business operations in 2024.",
    category: "Technology",
    tags: ["technology", "innovation", "future-tech"],
    readTime: "11 minutes read",
    publishedAt: "2023-12-20T13:20:00.000Z",
    coverUrl: getBackgroundUrl("emerging-tech-trends"),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    content: content,
    author: {
      name: "Alex Kumar",
      role: "Technology Analyst",
      avatarUrl: "/assets/images/avatar/avatar_6.jpg",
      bio: "Technology strategist tracking emerging trends and their impact on business innovation and competitive advantage.",
    },
    featured: true,
    favorited: false,
  },
];

export { blogPosts, blogTags, categories };
export default blogPosts;
