"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { type ReactNode } from "react";

const features = [
  {
    icon: "/features/linkedin.png",
    title: "LinkedIn Outreach That Converts",
    teaser: "Personalized LinkedIn touchpoints built to start better conversations.",
    desc: "Send personalized connection requests, follow-up messages, and InMails automatically. AI identifies the best times to send and crafts unique intros for every prospect.",
  },
  {
    icon: "/features/email.png",
    title: "Cold Email Campaigns at Scale",
    teaser: "Verified, personalized outbound that protects your sending reputation.",
    desc: "Run personalized campaigns with verified leads, inbox rotation, and messaging that protects your domain reputation.",
  },
  {
    icon: "/features/crm.png",
    title: "Smart Calling and CRM Sync",
    teaser: "Call tracking and CRM updates in one clean customer timeline.",
    desc: "Place and track calls from your dashboard while every touchpoint syncs to your CRM for a complete customer journey.",
  },
  {
    icon: "/features/data-enrichment.webp",
    title: "Data Enrichment Built In",
    teaser: "Verified contact and company data ready when leads need qualifying.",
    desc: "Discover verified business emails, phone numbers, and company data instantly - everything you need to qualify leads.",
  },
  {
    icon: "/features/analytics.png",
    title: "Real-Time Analytics",
    teaser: "Live campaign insight across every channel and sequence.",
    desc: "Measure performance across every campaign and channel. Optimize subject lines, timing, and sequences with live AI insights.",
  },
  {
    title: "AI That Never Sleeps",
    teaser: "Always-on assistance for writing, prospecting, analysis, and follow-up.",
    desc: "An assistant that writes emails, finds leads, analyzes engagement, and follows up automatically - turning data into opportunity.",
  },
];

function AnimatedBorder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg p-[2px] outline-none ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-[55%] bg-[conic-gradient(from_0deg,#061534,rgba(56,189,248,0.9),#101a42,rgba(56,189,248,0.9),#061534)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative h-full rounded-md bg-white">{children}</div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="section-panel pt-14 pb-24 sm:pt-16 sm:pb-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <p className="brand-kicker">What makes us different</p>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">
            Connect, engage, and <span className="text-gradient">close smarter</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Reach prospects where they are most active - LinkedIn, email, and phone - while every
            message stays personal, timely, and authentic.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedBorder
              key={feature.title}
              className="min-h-[220px] shadow-xl transition-all duration-300 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              <div className="relative flex min-h-[220px] flex-col overflow-hidden rounded-md bg-white/85 p-5 transition-all duration-300 group-hover:bg-white">
                <div className="absolute right-6 top-6 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-violet-600" />
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                  {"icon" in feature ? (
                    <img
                      src={feature.icon}
                      alt=""
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#8b5cf6] text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <h3 className="pr-8 text-base font-semibold leading-snug text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 line-clamp-1 text-xs leading-5 text-slate-600">
                  {feature.teaser}
                </p>
                <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-36 group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:max-h-36 group-focus-visible:opacity-100">
                  <p className="text-xs leading-6 text-slate-600">{feature.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-violet-100">
                    <div
                      className="h-full rounded-full bg-violet-500"
                      style={{ width: `${62 + index * 6}%` }}
                    />
                  </div>
                </div>
              </div>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
