"use client";

import { Footer } from "@/components/landing/Footer";
import { Nav } from "@/components/landing/Nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowRight,
  BarChart3,
  Check,
  MailCheck,
  MessagesSquare,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const warmupTimeline = [
  {
    range: "Day 0-5",
    title: "Cold Start",
    detail: "Domain begins with zero reputation",
    state: "done",
  },
  {
    range: "Day 6-15",
    title: "Gradual Sending",
    detail: "2-5 emails per day with engagement",
    state: "done",
  },
  {
    range: "Day 16-25",
    title: "Building Trust",
    detail: "Increased volume, better reputation",
    state: "active",
  },
  {
    range: "Day 26-30",
    title: "Inbox Ready",
    detail: "High deliverability achieved",
    state: "next",
  },
];

const reputationSteps = [
  {
    title: "A Safe, Gradual Ramp Up",
    text: "We start small and increase your sending volume only when your domain shows positive engagement. This protects your reputation and keeps your domain aligned with what inbox providers expect.",
    icon: TrendingUp,
  },
  {
    title: "Real Interactions That Count",
    text: "Warmup emails are opened, replied to, and even marked as important by real verified accounts. These interactions look authentic and help inbox providers trust your domain faster.",
    icon: MessagesSquare,
  },
  {
    title: "Full Visibility and Control",
    text: "Monitor every stage of your warmup inside the Email campaign analytics panel. Track deliverability score, domain reputation, spam signals, and email health - all transparent and understandable.",
    icon: BarChart3,
  },
  {
    title: "Long Term Protection",
    text: "Instead of warming your domain once, 360Airo keeps watching for spam traps, bounce issues, and blacklist risks. Use warmup insights directly inside your Email Sequences to improve timing and conversions.",
    icon: ShieldCheck,
  },
];

const businessStats = [
  ["+85%", "Higher opens", "because your emails are actually seen in the inbox."],
  ["+70%", "Higher replies", "because your messages are actually delivered to recipients."],
  ["95+", "Stronger sender score", "built through natural and trusted activity."],
  ["-90%", "Lower spam rates", "because your domain behaves exactly as inbox providers expect."],
  ["3x", "Better ROI", "since every campaign starts with healthy deliverability from day one."],
  ["10x", "Faster scaling", "when combined with AI email automation for large outbound activity."],
];

const proofStats = [
  ["98%", "Inbox Delivery Rate"],
  ["30 Days", "Proven Warmup Process"],
  ["10,000+", "Domains Successfully Warmed"],
  ["99.9%", "Uptime & Reliability"],
];

const audiences = [
  {
    title: "Founders & Growth Teams",
    text: "When revenue depends on email, warmup is non-negotiable. Build trust from day one.",
    icon: Zap,
  },
  {
    title: "SDRs & Sales Teams",
    text: "If inboxing is your goal, warmup is your first step to successful cold outreach.",
    icon: Target,
  },
  {
    title: "Agencies & Marketing",
    text: "Manage multiple client domains with reliable deliverability and transparent reporting.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "What is an email warmup, and why is it necessary for cold email outreach?",
    a: "Email warmup is the process of gradually increasing sending volume to build sender reputation. It is necessary because new or inactive inboxes are more likely to trigger spam filters without proper warmup.",
  },
  {
    q: "How long should you warm up an email domain before sending campaigns?",
    a: "Most teams should warm up for about 30 days before scaling outreach. 360Airo gradually builds trust during that period so your domain can move from cold start to inbox ready.",
  },
  {
    q: "How does the 360Airo email warmup process work?",
    a: "360Airo sends low-volume warmup emails, creates positive engagement, tracks sender health, and increases activity only when your domain reputation is ready.",
  },
  {
    q: "What happens if I send cold emails without warming up my inbox first?",
    a: "You risk low deliverability, spam placement, bounce issues, and long-term domain reputation damage. Warmup gives inbox providers a safer trust signal first.",
  },
  {
    q: "How many emails can I safely send during the warmup phase?",
    a: "Start small. The first stage should stay around 2-5 emails per day, then increase gradually as reputation and engagement improve.",
  },
  {
    q: "What are the key features of 360Airo's email warmup tool?",
    a: "Automated ramp-up, real engagement, deliverability score tracking, spam signal monitoring, bounce protection, blacklist risk checks, and campaign-ready insights.",
  },
  {
    q: "Why should I choose 360Airo's email warmup tool over other warmup tools?",
    a: "360Airo combines warmup, analytics, domain health, email sequences, and AI automation in one outreach platform, so deliverability stays connected to campaign performance.",
  },
  {
    q: "What is the best email warm-up tool in 2026?",
    a: "For teams that want automated warmup, transparent reporting, domain protection, and outbound automation in one place, 360Airo is built to be a serious best email warmup tool choice.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export function EmailWarmupPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".warmup-gsap-card", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.to(".warmup-pulse", {
        scale: 1.08,
        opacity: 0.7,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-white text-[#061534]">
      <Nav />
      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden border-b border-[#6981c5]/20 bg-[#051421] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_28%,rgba(124,58,237,0.36),transparent_28%),radial-gradient(circle_at_12%_14%,rgba(79,70,229,0.34),transparent_26%),linear-gradient(115deg,#020617_0%,#071a3d_48%,#3b0764_100%)]" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(rgba(155,232,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(155,232,255,0.12) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 392 C170 270 312 348 480 222 S804 122 958 190 1182 316 1440 162"
              fill="none"
              stroke="rgba(186,244,255,0.38)"
              strokeWidth="2"
              initial={{ pathLength: 0.35, opacity: 0.35 }}
              animate={{ pathLength: [0.35, 1, 0.35], opacity: [0.28, 0.7, 0.28] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 164 C182 92 338 204 520 160 S832 48 1018 96 1215 194 1440 100"
              fill="none"
              stroke="rgba(99,214,231,0.28)"
              strokeWidth="2"
              initial={{ pathLength: 0.4, opacity: 0.24 }}
              animate={{ pathLength: [0.4, 1, 0.4], opacity: [0.2, 0.58, 0.2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:pb-18">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <Badge className="mb-5 border border-white/15 bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
                Best Email Warmup Tool
              </Badge>
              <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]">
                Get Your Emails Warmup Into the Inbox, Not Spam.
              </h1>
              <p className="mt-5 max-w-lg text-base font-semibold leading-7 text-white/82">
                If your emails are not landing in the inbox, everything else fails.
              </p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/72">
                Your outreach, your sales, your follow ups, your marketing. Nothing works if people
                never see your message. This is exactly where 360Airo's email warmup tool becomes
                your advantage.
              </p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/72">
                We help you turn a cold, unknown domain into a trusted sender that inbox providers
                recognise and allow inside. Thousands of teams rely on this process, and it is the
                reason 360Airo is known as one of the best email warmup tools for serious outreach.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-lg bg-white px-6 text-[#061534] hover:bg-white/90"
                >
                  <Link href="#start-warmup">
                    Get Started with Email Warmup
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-lg border-white/25 bg-white/10 px-6 text-white hover:bg-white/15"
                >
                  <Link href="#process">See warmup process</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              className="relative mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center lg:min-h-[420px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-12 top-8 h-40 rounded-full bg-cyan-300/25 blur-3xl"
              />
              <div className="relative aspect-square w-[min(78vw,380px)] overflow-hidden rounded-full border border-white/20 bg-white/8 p-4 shadow-2xl shadow-black/25 backdrop-blur-sm">
                <Image
                  src="/features/email-warmup-hero.png"
                  alt="360Airo email warmup dashboard sending trusted messages into the inbox"
                  width={1536}
                  height={1024}
                  priority
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="process" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              <span className="brand-kicker">Understanding Email Warmup</span>
              <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
                What Email Warmup Actually Does
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                When you start sending emails from a new or inactive domain, inbox providers
                instantly become cautious. Too many new emails at once can make your domain look
                risky, which often leads to spam or low deliverability.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Email warmup fixes this by slowly building trust between your domain and inbox
                providers. With 360Airo, everything is automated so the warmup feels natural, safe,
                and consistent.
              </p>
              <p className="mt-4 rounded-lg border border-[#6981c5]/25 bg-[#6981c5]/8 p-4 text-sm font-semibold leading-6 text-[#252830]">
                Before you begin, connect and authenticate your domain through Domains & Emails to
                create a strong base for your warmup.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {warmupTimeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="warmup-gsap-card"
                >
                  <Card className="h-full rounded-lg border-[#6981c5]/25 bg-white shadow-xl shadow-[#6981c5]/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-bold text-[#535fb1]">{item.range}</span>
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            item.state === "done"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.state === "active"
                                ? "bg-[#535fb1] text-white warmup-pulse"
                                : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {item.state === "done" ? (
                            <Check className="h-4 w-4" />
                          ) : item.state === "active" ? (
                            <span className="h-2.5 w-2.5 rounded-full bg-white" />
                          ) : (
                            <span className="h-2.5 w-2.5 rounded-full border border-current" />
                          )}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-[#061534]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-panel py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="brand-kicker">How 360Airo Builds Your Sender Reputation</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Four Steps to Inbox Success</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This careful build up is one of the reasons 360Airo stands out among the best email
                warmup tools today.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {reputationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="warmup-gsap-card"
                  >
                    <Card className="h-full rounded-lg border-[#6981c5]/25 bg-white shadow-lg shadow-[#6981c5]/10">
                      <CardContent className="p-7">
                        <div className="flex items-start gap-5">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#061534] text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-[#535fb1]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#061534] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9fb3ff]">
                  Why Email Warmup Matters for Your Business
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  When warmup is done correctly, everything improves
                </h2>
                <p className="mt-5 text-base leading-8 text-white/72">
                  Most campaigns fail because emails never reach the inbox. This is the foundation
                  of successful cold outreach.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {proofStats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur"
                    >
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="mt-1 text-xs font-semibold text-white/62">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {businessStats.map(([value, title, text], index) => (
                  <motion.div
                    key={title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-lg border border-white/12 bg-white p-5 text-[#061534] shadow-2xl shadow-black/10"
                  >
                    <div className="text-3xl font-bold text-[#535fb1]">{value}</div>
                    <h3 className="mt-3 text-base font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="brand-kicker">Who Benefits the Most</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Built for teams that mean business
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                360Airo's email warmup tool is used by founders, growth teams, agencies, SDRs,
                marketing departments, and anyone who sends cold emails at scale. Our process is
                simple, safe, and proven to work.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {audiences.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <motion.div
                    key={audience.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-120px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="warmup-gsap-card"
                  >
                    <Card className="h-full rounded-lg border-[#6981c5]/25 bg-white shadow-xl shadow-[#6981c5]/10">
                      <CardContent className="p-7">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#6981c5]/12 text-[#061534]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">{audience.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{audience.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-panel py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="brand-kicker">Common Questions</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Email Warmup FAQs</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Everything you need to know about warming up your email domain for successful
                outreach.
              </p>
            </div>
            <Card className="rounded-lg border-[#6981c5]/25 bg-white shadow-xl shadow-[#6981c5]/10">
              <CardContent className="p-2 sm:p-5">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.q}
                      value={`item-${index}`}
                      className="border-[#6981c5]/20"
                    >
                      <AccordionTrigger className="gap-4 px-3 text-left text-base font-bold text-[#061534] hover:no-underline">
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#061534] text-xs font-bold text-white">
                            Q
                          </span>
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-14 text-sm leading-7 text-slate-600">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="start-warmup" className="bg-[#061534] py-20 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <Badge className="mb-5 border border-white/15 bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
              Start Your Warmup With Confidence
            </Badge>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Don't let spam filters decide your campaign's fate.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72">
              Your team puts effort, time, and money into every campaign. 360Airo helps you reach
              the inbox, build a trusted sender reputation, and protect your domain for long term
              success.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/72">
              Everything is automated and designed to give you reliable deliverability from day one.
              That is why businesses choose us when they want guaranteed improvements in
              deliverability.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-lg bg-white px-7 text-[#061534] hover:bg-white/90"
              >
                <Link href="#start-warmup">
                  Get Started with Email Warmup
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/72">
                <MailCheck className="h-4 w-4 text-emerald-300" />
                Transform cold domains into trusted senders
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
