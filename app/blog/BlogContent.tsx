"use client";

import { Footer } from "@/components/landing/Footer";
import { Nav } from "@/components/landing/Nav";
import logo from "@/assets/logo.png";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const filterCategories = [
  "All",
  "B2B Lead Generation",
  "Email Deliverability",
  "AI SDRs",
  "Email Infrastructure",
  "Cold Outreach",
  "News",
  "Tutorials & Guides",
  "Reviews",
  "Tools",
];

const posts = [
  {
    title: "How sales leaders scaled decision-maker prospecting from 10 to 100+ accounts: case study",
    slug: "case-study-scale-decision-maker-prospecting",
    excerpt:
      "Decision maker prospecting case study shows how sales leaders scaled from 10 to 100+ accounts using infrastructure over headcount.",
    category: "Cold Outreach",
    readTime: "14 min read",
    date: "May 25, 2026",
    author: "Hans Dekker",
    image: "/features/how-it-works-infographic.png",
  },
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

export function BlogContent() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest" | "nameAsc" | "nameDesc">(
    "recent",
  );
  const [isSortOpen, setIsSortOpen] = useState(false);
  const searchTerm = query.trim().toLowerCase();
  const sortLabels = {
    recent: "Most recent",
    oldest: "Oldest",
    nameAsc: "Name",
    nameDesc: "Name",
  };
  const filteredPosts = useMemo(
    () =>
      posts
        .filter((post) => {
          const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
          const matchesSearch =
            !searchTerm ||
            [post.title, post.excerpt, post.category, post.readTime, post.author].some((value) =>
              value.toLowerCase().includes(searchTerm),
            );

          return matchesCategory && matchesSearch;
        })
        .sort((firstPost, secondPost) => {
          const firstDate = new Date(firstPost.date).getTime();
          const secondDate = new Date(secondPost.date).getTime();

          if (sortOrder === "nameAsc") {
            return firstPost.title.localeCompare(secondPost.title);
          }

          if (sortOrder === "nameDesc") {
            return secondPost.title.localeCompare(firstPost.title);
          }

          return sortOrder === "recent" ? secondDate - firstDate : firstDate - secondDate;
        }),
    [searchTerm, selectedCategory, sortOrder],
  );

  return (
    <div className="min-h-screen bg-white text-[#061534]">
      <Nav />
      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-white text-[#061534]">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:min-h-[360px] lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#061534]/12 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f7df6] shadow-xl shadow-[#061534]/8">
                <Sparkles className="h-3.5 w-3.5" />
                360Airo Blog
              </div>
              <h1 className="mt-5 bg-gradient-to-r from-[#061534] via-[#061534] to-[#2f7df6] bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
                Field notes for smarter outbound teams
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#061534]">
                Practical essays, teardown lessons, and operating ideas for teams building cleaner
                prospecting systems, stronger inbox reputation, and more human AI-assisted outreach.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[18px] bg-white p-3 shadow-xl shadow-[#061534]/8">
              <div className="rounded-[17px] bg-white">
                <label className="flex items-center gap-3 rounded-xl bg-[#f8fbff] px-4 py-3 text-[#061534] shadow-sm transition focus-within:shadow-lg focus-within:shadow-[#2f7df6]/10">
                  <Image
                    src={logo}
                    alt="360Airo"
                    width={92}
                    height={34}
                    className="h-6 w-auto object-contain"
                  />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search Blog Posts"
                    className="w-full bg-transparent text-sm font-bold text-[#061534] outline-none placeholder:text-[#061534]/50"
                    type="search"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-nowrap items-center gap-x-4 overflow-x-auto whitespace-nowrap">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    className={`text-xs font-bold transition ${
                      selectedCategory === category
                        ? "rounded-lg bg-[#6d3fd9] px-3 py-2 text-white"
                        : "text-[#061534] hover:text-[#061534]"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative">
                <button
                  className="inline-flex w-[150px] items-center justify-between gap-3 rounded-md bg-white py-2 text-left text-xs font-bold text-[#061534] transition hover:text-[#061534]"
                  onClick={() => setIsSortOpen((isOpen) => !isOpen)}
                  type="button"
                >
                  {sortLabels[sortOrder]}
                  <ChevronDown
                    className={`h-4 w-4 text-[#061534] transition ${
                      isSortOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-[150px] rounded-lg border border-[#061534]/10 bg-white p-2 shadow-xl shadow-[#061534]/12">
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-bold text-[#536174] transition hover:bg-[#f5faff] hover:text-[#061534]"
                      onClick={() => {
                        setSortOrder("recent");
                        setIsSortOpen(false);
                      }}
                      type="button"
                    >
                      Most recent
                    </button>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-bold text-[#536174] transition hover:bg-[#f5faff] hover:text-[#061534]"
                      onClick={() => {
                        setSortOrder("oldest");
                        setIsSortOpen(false);
                      }}
                      type="button"
                    >
                      Oldest
                    </button>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-bold text-[#536174] transition hover:bg-[#f5faff] hover:text-[#061534]"
                      onClick={() => {
                        setSortOrder("nameAsc");
                        setIsSortOpen(false);
                      }}
                      type="button"
                    >
                      <span>Name</span>
                      <span className="text-[10px] leading-none">A Z</span>
                    </button>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-bold text-[#536174] transition hover:bg-[#f5faff] hover:text-[#061534]"
                      onClick={() => {
                        setSortOrder("nameDesc");
                        setIsSortOpen(false);
                      }}
                      type="button"
                    >
                      <span>Name</span>
                      <span className="text-[10px] leading-none">Z A</span>
                    </button>
                  </div>
                )}
              </div>
              </div>

            {filteredPosts.length > 0 ? (
              <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.title}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-[1.9/1] overflow-hidden rounded-[10px] bg-[#f5faff]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="pt-5">
                      <p className="text-[11px] font-bold text-[#6d3fd9]">{post.category}</p>
                      <div className="mt-2 flex items-start gap-4">
                        <h3 className="flex-1 text-base font-black leading-tight text-[#111827] transition group-hover:text-[#6d3fd9]">
                          {post.title}
                        </h3>
                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#111827] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6d3fd9]" />
                      </div>
                      <p className="mt-4 text-[11px] leading-5 text-[#536174]">{post.excerpt}</p>
                      <div className="mt-7 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#061534] to-[#6d3fd9] text-xs font-black text-white">
                          {post.author
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-[11px] font-black leading-tight text-[#111827]">{post.author}</p>
                          <p className="mt-1 text-[11px] leading-tight text-[#536174]">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-[20px] border border-[#2f7df6]/15 bg-[#f5faff] p-8 text-center">
                <p className="text-base font-black text-[#061534]">No matching posts found</p>
                <p className="mt-2 text-sm text-slate-600">
                  Try searching for cold outreach, deliverability, AI SDRs, or tools.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
