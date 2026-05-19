export type FeaturePageSlug =
  | "email-warmup"
  | "domains-and-emails"
  | "email-campaigns"
  | "ai-email-generator"
  | "prospect-crm"
  | "unified-inbox"
  | "email-sequences"
  | "ai-email-automation"
  | "linkedin-automation";

export type FeaturePage = {
  slug: FeaturePageSlug;
  title: string;
  badge?: string;
  description: string;
};

export const featurePages: readonly FeaturePage[] = [
  {
    slug: "email-warmup",
    title: "Email Warmup",
    badge: "Popular",
    description: "Boost deliverability rates with AI-powered warmup.",
  },
  {
    slug: "domains-and-emails",
    title: "Domains & Emails",
    description: "Manage unlimited domains and email accounts.",
  },
  {
    slug: "email-campaigns",
    title: "Email Campaigns",
    badge: "New",
    description: "Plan, execute, and optimize email campaigns.",
  },
  {
    slug: "ai-email-generator",
    title: "AI Email Generator",
    badge: "AI Powered",
    description: "Generate personalized, high-converting emails.",
  },
  {
    slug: "prospect-crm",
    title: "Prospect CRM",
    badge: "New",
    description: "Manage, track, and nurture every lead.",
  },
  {
    slug: "unified-inbox",
    title: "Unified Inbox",
    badge: "Team",
    description: "Centralized inbox for team collaboration.",
  },
  {
    slug: "email-sequences",
    title: "Email Sequences",
    badge: "Automation",
    description: "Automated multi-step email campaigns.",
  },
  {
    slug: "ai-email-automation",
    title: "AI Email Automation",
    badge: "AI Powered",
    description: "Intelligent workflow automation powered by AI.",
  },
  {
    slug: "linkedin-automation",
    title: "LinkedIn Automation",
    badge: "Social",
    description: "Automate LinkedIn outreach and connection workflows.",
  },
];

export function getFeaturePage(slug: FeaturePageSlug) {
  return featurePages.find((feature) => feature.slug === slug);
}
