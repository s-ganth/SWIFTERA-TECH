import React from 'react';
import type { NavLink, Service, TeamMember, Project, PricingPlan, BlogPost, Testimonial } from './types';
import { SeoIcon, SmmIcon, ContentIcon, AnalyticsIcon, AdsIcon, VideoIcon } from './components/icons/ServiceIcons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  { 
    id: 'seo-optimization',
    icon: SeoIcon, 
    title: 'SEO Optimization', 
    description: 'Enhance your visibility on search engines and drive organic traffic.',
    backgroundImageUrl: 'https://picsum.photos/seed/seo-hero/1920/1080',
    details: {
      overview: 'Our SEO Optimization service is designed to increase your website\'s visibility in search engine results pages (SERPs). We use a combination of on-page, off-page, and technical SEO techniques to improve your rankings for keywords relevant to your business, driving qualified organic traffic to your site.',
      keyBenefits: [
        'Increased Organic Traffic',
        'Higher Search Engine Rankings',
        'Improved User Experience',
        'Greater Brand Credibility and Trust',
        'Long-term, Sustainable Results'
      ],
      process: [
        { step: 1, title: 'Keyword Research & Strategy', description: 'We identify high-value keywords your target audience is searching for.' },
        { step: 2, title: 'Technical SEO Audit', description: 'We analyze and fix technical issues like site speed, mobile-friendliness, and crawlability.' },
        { step: 3, title: 'On-Page Optimization', description: 'We optimize content, meta tags, and internal linking to align with target keywords.' },
        { step: 4, title: 'Quality Link Building', description: 'We acquire high-authority backlinks to build your site\'s domain authority.' },
        { step: 5, title: 'Reporting & Analysis', description: 'We provide transparent monthly reports on rankings, traffic, and conversions.' },
      ]
    }
  },
  { 
    id: 'social-media-marketing',
    icon: SmmIcon, 
    title: 'Social Media Marketing', 
    description: 'Engage your audience and build your brand on social platforms.',
    backgroundImageUrl: 'https://picsum.photos/seed/social-hero/1920/1080',
    details: {
        overview: 'We create and manage high-performing social media campaigns for your business. Our service includes content creation, community management, and paid advertising to grow your audience, increase engagement, and drive leads and sales from platforms like Facebook, Instagram, LinkedIn, and Twitter.',
        keyBenefits: [
          'Increased Brand Awareness',
          'Higher Follower Engagement',
          'Lead Generation and Sales',
          'Audience and Market Insights',
          'Improved Customer Loyalty'
        ],
        process: [
          { step: 1, title: 'Platform & Audience Analysis', description: 'We determine the best social platforms to reach your target demographic.' },
          { step: 2, title: 'Content Strategy & Calendar', description: 'We plan and schedule engaging content that aligns with your brand voice.' },
          { step: 3, title: 'Community Management', description: 'We actively engage with your followers, responding to comments and messages.' },
          { step: 4, title: 'Paid Social Advertising', description: 'We run targeted ad campaigns to reach new audiences and achieve specific goals.' },
          { step: 5, title: 'Performance Tracking', description: 'We monitor key metrics and adjust the strategy for optimal results.' },
        ]
      }
  },
  { 
    id: 'content-marketing',
    icon: ContentIcon, 
    title: 'Content Marketing', 
    description: 'Create valuable content that attracts, informs, and converts your audience.',
    backgroundImageUrl: 'https://picsum.photos/seed/content-hero/1920/1080',
    details: {
        overview: 'Our content marketing service focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. From blog posts and articles to e-books and case studies, we produce content that drives profitable customer action.',
        keyBenefits: [
          'Improved SEO and Organic Traffic',
          'Established Industry Authority',
          'Higher Lead Quality',
          'Stronger Customer Relationships',
          'Increased Conversion Rates'
        ],
        process: [
          { step: 1, title: 'Content Strategy Development', description: 'We map out a content plan based on your business goals and audience needs.' },
          { step: 2, title: 'Content Creation', description: 'Our team of writers and designers creates high-quality content tailored to your brand.' },
          { step: 3, title: 'Content Optimization', description: 'We optimize every piece of content for search engines and user engagement.' },
          { step: 4, title: 'Content Distribution', description: 'We promote your content across various channels to maximize its reach.' },
          { step: 5, title: 'Performance Measurement', description: 'We track content performance and its impact on your marketing funnel.' },
        ]
      }
  },
  { 
    id: 'data-analytics',
    icon: AnalyticsIcon, 
    title: 'Data Analytics', 
    description: 'Leverage data to make informed decisions and measure your ROI.',
    backgroundImageUrl: 'https://picsum.photos/seed/analytics-hero/1920/1080',
    details: {
        overview: 'We turn your raw data into actionable insights. Our data analytics service helps you understand your customers, track marketing performance, and make smarter, data-driven decisions. We set up advanced tracking, create custom dashboards, and provide in-depth analysis to uncover growth opportunities.',
        keyBenefits: [
          'Clear ROI Measurement',
          'Actionable Business Insights',
          'Improved Customer Understanding',
          'Optimized Marketing Campaigns',
          'Data-driven Decision Making'
        ],
        process: [
          { step: 1, title: 'Goal & KPI Definition', description: 'We work with you to define what success looks like and which metrics matter most.' },
          { step: 2, title: 'Tracking Implementation', description: 'We set up and configure analytics tools like Google Analytics 4 and Tag Manager.' },
          { step: 3, title: 'Data Collection & Integration', description: 'We consolidate data from various sources into a single source of truth.' },
          { step: 4, title: 'Custom Dashboard Creation', description: 'We build easy-to-understand dashboards to visualize your key metrics.' },
          { step: 5, title: 'Insight & Recommendation Reporting', description: 'We provide regular analysis and strategic recommendations based on the data.' },
        ]
      }
  },
  { 
    id: 'paid-advertising',
    icon: AdsIcon, 
    title: 'Paid Advertising', 
    description: 'Run targeted ad campaigns on Google, Facebook, and more.',
    backgroundImageUrl: 'https://picsum.photos/seed/ads-hero/1920/1080',
    details: {
        overview: 'Our paid advertising service is designed to deliver immediate, targeted traffic to your website. We manage pay-per-click (PPC) campaigns across platforms like Google Ads and social media, focusing on maximizing your return on ad spend (ROAS) through expert targeting, compelling ad copy, and continuous optimization.',
        keyBenefits: [
          'Immediate, Targeted Traffic',
          'Measurable Return on Investment',
          'Precise Audience Targeting',
          'Increased Lead Generation',
          'Full Campaign Control & Flexibility'
        ],
        process: [
          { step: 1, title: 'Campaign Strategy', description: 'We define your campaign goals, budget, and target audience.' },
          { step: 2, title: 'Keyword & Audience Research', description: 'We identify the best keywords and demographics to target.' },
          { step: 3, title: 'Ad Creation & Copywriting', description: 'We write compelling ads and design eye-catching creatives.' },
          { step: 4, title: 'Campaign Launch & Management', description: 'We launch the campaigns and monitor performance closely.' },
          { step: 5, title: 'Optimization & Reporting', description: 'We continuously A/B test and optimize for performance, providing detailed reports.' },
        ]
      }
  },
  { 
    id: 'video-marketing',
    icon: VideoIcon, 
    title: 'Video Marketing', 
    description: 'Produce compelling video content that tells your brand’s story.',
    backgroundImageUrl: 'https://picsum.photos/seed/video-hero/1920/1080',
    details: {
        overview: 'Video is the most engaging form of content, and our video marketing service helps you leverage its power. From scriptwriting and production to distribution and promotion, we create professional videos that capture attention, explain your value proposition, and convert viewers into customers.',
        keyBenefits: [
          'Higher Audience Engagement',
          'Improved Conversion Rates',
          'Stronger Brand Storytelling',
          'Increased Social Media Reach',
          'Better Ad Performance'
        ],
        process: [
          { step: 1, title: 'Concept & Strategy', description: 'We develop a video concept that aligns with your marketing goals.' },
          { step: 2, title: 'Scriptwriting & Storyboarding', description: 'We craft a compelling narrative and plan the visual sequence.' },
          { step: 3, title: 'Production & Filming', description: 'Our professional team handles filming, sound, and lighting.' },
          { step: 4, title: 'Post-Production & Editing', description: 'We edit the footage, add graphics, music, and polish the final product.' },
          { step: 5, title: 'Distribution & Promotion', description: 'We help you get your video in front of the right audience.' },
        ]
      }
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Jane Doe', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/seed/jane/400/400' },
  { name: 'John Smith', role: 'Head of Marketing', imageUrl: 'https://picsum.photos/seed/john/400/400' },
  { name: 'Emily White', role: 'Lead SEO Strategist', imageUrl: 'https://picsum.photos/seed/emily/400/400' },
  { name: 'Michael Brown', role: 'Social Media Manager', imageUrl: 'https://picsum.photos/seed/michael/400/400' },
];

export const PROJECTS: Project[] = [
  { 
    id: 'saas-platform-launch',
    title: 'SaaS Platform Launch', 
    category: 'SEO & Content', 
    imageUrl: 'https://picsum.photos/seed/proj1/600/400',
    description: {
        challenge: 'A new SaaS startup needed to generate organic leads and establish market presence in a competitive industry. Their initial online visibility was nearly zero.',
        solution: 'We developed a comprehensive SEO and content strategy focusing on long-tail keywords and high-value blog content. This included technical SEO audits, on-page optimization, and a backlink building campaign targeting industry authorities.',
        result: 'Within 6 months, the platform ranked on the first page for 15+ key terms, organic traffic increased by 400%, and marketing-qualified leads from organic search grew by 150%.',
    },
  },
  { 
    id: 'ecommerce-brand-refresh',
    title: 'E-commerce Brand Refresh', 
    category: 'Social Media', 
    imageUrl: 'https://picsum.photos/seed/proj2/600/400',
    description: {
        challenge: 'An established e-commerce brand was struggling with low social media engagement and a declining youth demographic. They needed to reconnect with their audience.',
        solution: 'We launched a multi-platform social media campaign featuring user-generated content, influencer collaborations, and interactive Instagram Stories. The visual identity was updated to be more modern and vibrant.',
        result: 'The campaign resulted in a 70% increase in social media engagement, a 25% growth in followers under the age of 25, and a direct 15% uplift in sales attributed to social channels.',
    },
  },
  { 
    id: 'corporate-video-series',
    title: 'Corporate Video Series', 
    category: 'Video Marketing', 
    imageUrl: 'https://picsum.photos/seed/proj3/600/400',
    description: {
        challenge: 'A B2B tech company needed to explain its complex product in a simple, engaging way to attract enterprise clients. Their existing marketing materials were text-heavy and ineffective.',
        solution: 'We produced a series of high-quality animated explainer videos and client testimonial videos. The videos were distributed across their website, LinkedIn, and targeted email campaigns.',
        result: 'The video series improved the average time on page by 60%, increased lead conversion rates on the product page by 30%, and became the company\'s highest-performing content asset.',
    },
  },
  { 
    id: 'data-driven-b2b-campaign',
    title: 'Data-driven B2B Campaign', 
    category: 'Analytics & Ads', 
    imageUrl: 'https://picsum.photos/seed/proj4/600/400',
    description: {
        challenge: 'A B2B firm was spending heavily on paid ads with a low return on investment. They lacked the data insights to target their ideal customer profile effectively.',
        solution: 'We implemented an advanced analytics setup, integrated their CRM, and used the data to build highly targeted lookalike audiences for LinkedIn and Google Ads. Ad copy and landing pages were A/B tested continuously.',
        result: 'Ad spend was reduced by 20% while the number of qualified leads doubled. The cost per acquisition (CPA) was cut in half, delivering a 300% return on ad spend (ROAS).',
    },
  },
  { 
    id: 'influencer-marketing-campaign',
    title: 'Influencer Marketing Campaign', 
    category: 'Social Media', 
    imageUrl: 'https://picsum.photos/seed/proj5/600/400',
    description: {
        challenge: 'A new consumer lifestyle brand wanted to build awareness and trust quickly without a massive advertising budget.',
        solution: 'We identified and partnered with 50 micro-influencers in their niche for an authentic, content-focused campaign. The campaign was built around a compelling story that aligned with the brand\'s values.',
        result: 'The campaign generated over 2 million impressions, reached 500,000 unique users, and drove thousands of clicks to their website. The brand gained instant credibility and a loyal initial following.',
    },
  },
  { 
    id: 'local-business-seo-overhaul',
    title: 'Local Business SEO Overhaul', 
    category: 'SEO', 
    imageUrl: 'https://picsum.photos/seed/proj6/600/400',
    description: {
        challenge: 'A local service business was invisible in local search results and was losing customers to competitors who ranked higher on Google Maps.',
        solution: 'We performed a complete local SEO overhaul, including optimizing their Google Business Profile, building local citations, creating location-specific service pages, and launching a review generation campaign.',
        result: 'The business achieved a top-3 ranking in the local map pack for their main services, leading to a 75% increase in phone calls from their website and a 50% rise in foot traffic.',
    },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  { name: 'Starter', price: '49', period: '/mo', features: ['Basic SEO Audit', 'Weekly Social Post', 'Monthly Report', 'Email Support'], isFeatured: false },
  { name: 'Growth', price: '99', period: '/mo', features: ['Full SEO Optimization', 'Daily Social Posts', 'Bi-Weekly Strategy Calls', 'Content Creation (2 articles)', 'Priority Support'], isFeatured: true },
  { name: 'Scale', price: '199', period: '/mo', features: ['Everything in Growth', 'Paid Ad Campaign Mgmt.', 'Advanced Analytics', 'Dedicated Account Manager', 'Video Marketing Intro'], isFeatured: false },
];

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 'future-of-seo',
    title: 'The Future of SEO in a Post-AI World', 
    author: 'Jane Doe', 
    date: 'Oct 26, 2023', 
    excerpt: 'AI is changing the SEO landscape. Here’s how to stay ahead of the curve and adapt your strategy.', 
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    content: `
AI is rapidly transforming the digital marketing landscape, and SEO is no exception. Search engines are becoming more sophisticated, leveraging AI to understand user intent and deliver more relevant results. So, what does this mean for your SEO strategy?

### Key Changes to Expect

1.  **Semantic Search:** Search engines are moving beyond keywords to understand the context and meaning behind queries. This means content needs to be comprehensive and answer user questions thoroughly.
2.  **Voice Search Optimization:** With the rise of smart speakers, optimizing for conversational, long-tail keywords is crucial.
3.  **AI-Generated Content:** While AI can help create content, the focus must remain on quality, originality, and providing real value to the reader. Google's algorithms are designed to reward high-quality, human-centric content.

### How to Adapt Your Strategy

*   **Focus on Topical Authority:** Instead of targeting individual keywords, create clusters of content around broader topics. This demonstrates your expertise to search engines.
*   **Prioritize User Experience (UX):** Factors like page speed, mobile-friendliness, and intuitive navigation are more important than ever.
*   **Embrace Structured Data:** Use schema markup to help search engines understand your content and feature it in rich snippets.

The future of SEO isn't about outsmarting algorithms; it's about creating the best possible experience for your users. By focusing on high-quality content and a user-centric approach, you can thrive in the age of AI.
    `
  },
  { 
    id: 'viral-social-media-tactics',
    title: '5 Viral Social Media Tactics for 2024', 
    author: 'Michael Brown', 
    date: 'Oct 22, 2023', 
    excerpt: 'Discover the secrets behind viral marketing campaigns and how you can apply them to your own brand.', 
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    content: `
Everyone wants to go viral, but what's the secret sauce? While there's no guaranteed formula, there are several tactics that can significantly increase your chances of creating shareable content.

### 1. Leverage Short-Form Video
Platforms like TikTok, Instagram Reels, and YouTube Shorts are dominating social media. Create engaging, fast-paced videos that are entertaining or educational. Use trending audio and creative editing to capture attention quickly.

### 2. User-Generated Content (UGC) Campaigns
Encourage your audience to create content featuring your products. A branded hashtag challenge or a contest can generate a wealth of authentic content and build a strong community around your brand.

### 3. Tap into Niche Communities
Instead of trying to appeal to everyone, focus on a specific niche. Engage with relevant subreddits, Facebook groups, or online forums. Providing genuine value to a smaller, dedicated community can lead to powerful word-of-mouth marketing.

### 4. Interactive Content
Polls, quizzes, and "Ask Me Anything" (AMA) sessions are fantastic ways to boost engagement. They make your audience feel involved and give you valuable insights into their preferences.

### 5. Emotional Storytelling
Content that evokes strong emotions—whether it's humor, inspiration, or nostalgia—is far more likely to be shared. Tell authentic stories that resonate with your audience on a human level.

Remember, going viral is often a byproduct of consistently creating great content that your audience loves. Focus on providing value, and you'll be on the right track.
    `
  },
  { 
    id: 'why-you-need-video-content',
    title: 'Why Your Business Needs Video Content Now', 
    author: 'John Smith', 
    date: 'Oct 18, 2023', 
    excerpt: 'Video is no longer optional. We break down the ROI of video marketing and how to get started easily.', 
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    content: `
If a picture is worth a thousand words, then a video is worth a million. In today's fast-paced digital world, video content has become the most powerful tool in a marketer's arsenal. If you're not using video, you're falling behind.

### The Undeniable ROI of Video

-   **Increased Conversion Rates:** Including a video on a landing page can increase conversions by up to 80%.
-   **Improved SEO:** Websites with video are 53 times more likely to rank on the first page of Google.
-   **Higher Engagement:** Video content generates 1200% more shares than text and image content combined.
-   **Greater Trust and Credibility:** Videos allow you to connect with your audience on a more personal level, building trust and showcasing your brand's personality.

### How to Get Started with Video Marketing

You don't need a Hollywood budget to create effective video content. Here's how to start:

1.  **Define Your Goals:** What do you want to achieve with your videos? Brand awareness, lead generation, or customer education?
2.  **Know Your Audience:** What kind of content would they find valuable or entertaining?
3.  **Start Simple:** Use your smartphone to create behind-the-scenes content, tutorials, or customer testimonials.
4.  **Optimize for Each Platform:** Create vertical videos for mobile-first platforms like Instagram and TikTok, and horizontal videos for YouTube.
5.  **Include a Call-to-Action (CTA):** Tell your viewers what you want them to do next, whether it's visiting your website, subscribing to your channel, or making a purchase.

The message is clear: video marketing isn't just a trend; it's a fundamental shift in how businesses communicate with their customers. It's time to press play on your video strategy.
    `
  },
];

export const TESTIMONIALS: Testimonial[] = [
    { 
        quote: "Working with Swiftera Technology has been a game-changer for our business. Their team's expertise in digital marketing drove our traffic up by 200% in just six months!",
        author: "Sarah Johnson",
        role: "CEO, Tech Innovators",
        imageUrl: "https://picsum.photos/seed/sarah/100/100"
    },
    {
        quote: "The strategic insights and flawless execution from the Swiftera Technology team helped us dominate our niche. They are true partners in growth.",
        author: "David Lee",
        role: "Founder, Urban Style Co.",
        imageUrl: "https://picsum.photos/seed/david/100/100"
    },
    {
        quote: "I'm constantly impressed by their professionalism and the results they deliver. Our social media engagement has never been higher.",
        author: "Maria Garcia",
        role: "Marketing Director, Healthful Foods",
        imageUrl: "https://picsum.photos/seed/maria/100/100"
    }
];

export const COMPANY_STATS = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '250%', label: 'Average ROI Delivered' },
];