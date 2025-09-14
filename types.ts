import React from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  id: string; // Add unique ID for routing
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  backgroundImageUrl: string; // Add background image for detail page hero
  details: { // Add detailed information object
    overview: string;
    keyBenefits: string[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Project {
  id: string; // Add unique ID for routing
  title: string;
  category: string;
  imageUrl: string;
  description: { // Add detailed description object
    challenge: string;
    solution: string;
    result: string;
  };
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
}

export interface BlogPost {
  id: string; // Add unique ID for routing
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string; // Full content of the blog post in Markdown
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    imageUrl: string;
}