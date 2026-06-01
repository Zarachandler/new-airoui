import { Footer } from "@/components/landing/Footer";
import { Nav } from "@/components/landing/Nav";
import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    title: "Cold email sequences that feel personal at scale",
    slug: "cold-email-sequences-that-feel-personal-at-scale",
    excerpt: "Turn account signals into simple, believable messages your prospects actually read.",
    category: "Cold Outreach",
    readTime: "6 min read",
    date: "May 18, 2026",
    author: "360Airo Team",
    image: "/features/email.png",
  },
  {
    title: "AI prospecting workflows for lean sales teams",
    slug: "ai-prospecting-workflows-for-lean-sales-teams",
    excerpt: "How small teams can research, enrich, and prioritize pipeline without adding manual drag.",
    category: "AI SDRs",
    readTime: "7 min read",
    date: "May 15, 2026",
    author: "Revenue Ops",
    image: "/features/linkedin-auto-prospecting.png",
  },
  {
    title: "The mailbox health checklist before launch day",
    slug: "mailbox-health-checklist-before-launch-day",
    excerpt: "DNS, sender limits, bounce risk, and inbox placement checks to run before campaigns go live.",
    category: "Email Deliverability",
    readTime: "5 min read",
    date: "May 12, 2026",
    author: "Deliverability Desk",
    image: "/features/analytics.png",
  },
  {
    title: "LinkedIn and email: when to use each touch",
    slug: "linkedin-and-email-when-to-use-each-touch",
    excerpt: "A simple framework for coordinating channels without overwhelming high-value accounts.",
    category: "B2B Lead Generation",
    readTime: "6 min read",
    date: "May 9, 2026",
    author: "Outbound Lab",
    image: "/features/linkedin.png",
  },
  {
    title: "What clean CRM data changes in outbound",
    slug: "what-clean-crm-data-changes-in-outbound",
    excerpt: "Better routing, safer personalization, and clearer follow-up paths start with the source data.",
    category: "Email Infrastructure",
    readTime: "4 min read",
    date: "May 6, 2026",
    author: "CRM Studio",
    image: "/features/crm.png",
  },
  {
    title: "Why reply quality matters more than raw volume",
    slug: "why-reply-quality-matters-more-than-raw-volume",
    excerpt: "The outreach metrics that reveal whether your AI-assisted campaigns are creating pipeline.",
    category: "Tools",
    readTime: "5 min read",
    date: "May 3, 2026",
    author: "360Airo Team",
    image: "/features/how-it-works-infographic.png",
  },
];

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | 360Airo Blog`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#061534]">
      <Nav />
      <main>
        <section className="relative isolate overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 text-center sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f7df6]"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Blog
            </Link>
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#061534]/12 bg-white px-4 py-2 text-xs font-bold text-[#2f7df6] shadow-xl shadow-[#061534]/8">
                <Sparkles className="h-4 w-4" />
                {post.category}
              </div>
              <h1 className="mt-6 bg-gradient-to-r from-[#061534] via-[#061534] to-[#2f7df6] bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#061534] sm:text-base">
                {post.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#536174]">
                <span>{post.author}</span>
                <span className="h-1 w-1 rounded-full bg-[#2f7df6]" />
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-[#2f7df6]" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[22px] bg-[#f5faff] shadow-2xl shadow-[#061534]/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 64rem, 100vw"
              />
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[22px] border border-[#2f7df6]/18 bg-[#f5faff] p-6 shadow-xl shadow-[#061534]/6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2f7df6]">TL;DR</p>
            <p className="mt-4 text-sm leading-7 text-[#061534]">{post.excerpt}</p>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#061534]">Why this matters</h2>
            <p className="mt-5 text-sm leading-7 text-[#536174]">
              Modern outbound breaks when teams scale volume without improving the system around
              it. The strongest teams treat prospecting as an operating workflow: clean data,
              thoughtful messaging, healthy inboxes, and fast reply handling all working together.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#061534]">What to do next</h2>
            <div className="mt-6 space-y-3">
              {[
                "Start with a clearly defined audience and one measurable outcome.",
                "Verify the data before it enters a campaign.",
                "Use conservative sending limits until inbox placement is stable.",
                "Review replies daily and route buying intent quickly.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[16px] border border-[#061534]/10 bg-white p-4 shadow-sm shadow-[#061534]/5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2f7df6]" />
                  <p className="text-sm font-bold leading-6 text-[#061534]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[22px] bg-[#061534] p-6 text-white">
            <p className="text-sm leading-7 text-white/76">
              Keep the system simple enough for the team to follow every week. Better outbound is
              usually less about adding more motion and more about making the right motion
              repeatable.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-[#061534] transition hover:bg-[#f5faff]"
            >
              Back to all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
