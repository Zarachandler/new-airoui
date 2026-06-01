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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Gauge,
  Globe2,
  Inbox,
  MailCheck,
  Radar,
  RefreshCw,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const painPoints = [
  {
    title: "Sending to unverified leads",
    text: "Bad lists and spam traps hurt trust fast.",
    icon: SearchCheck,
  },
  {
    title: "Poor sending practices",
    text: "Fast volume can make a good domain look risky.",
    icon: CircleAlert,
  },
  {
    title: "No regular monitoring",
    text: "DNS, blacklist, and placement issues are easy to miss.",
    icon: Radar,
  },
];

const featureTabs = [
  {
    value: "warmup",
    label: "Email Warm Up",
    title: "Warm every mailbox with AI conversations",
    text: "360Airo builds trusted inbox activity before campaigns launch.",
    icon: MailCheck,
    image: "/features/email-warmup-hero.png",
    bullets: ["Gradual ramp-up", "Reply and open signals", "Always-on protection"],
  },
  {
    value: "health",
    label: "Health Checks",
    title: "Monitor signals that affect inbox placement",
    text: "View mailbox, domain, and risk status in one place.",
    icon: ShieldCheck,
    image: "/features/analytics.png",
    bullets: ["DNS and MX status", "Blacklist risk checks", "Mailbox health alerts"],
  },
  {
    value: "placement",
    label: "Placement Tests",
    title: "Know where your emails land",
    text: "Check primary, promotions, and spam placement across providers.",
    icon: Inbox,
    image: "/features/email.png",
    bullets: ["Provider-level visibility", "Inbox vs spam tracking", "Campaign readiness checks"],
  },
  {
    value: "boost",
    label: "Deliverability Boost",
    title: "Recover trust before spam habits form",
    text: "Keep warmup clean and reputation visible for outreach teams.",
    icon: TrendingUp,
    image: "/features/email-warmup-deliverability-infographic.svg",
    bullets: ["Spam signal reduction", "Better sender behavior", "Safer scaling"],
  },
  {
    value: "always",
    label: "Always-On Warm Up",
    title: "Keep protection always on",
    text: "Keep inboxes active, monitored, and trusted as campaigns scale.",
    icon: RefreshCw,
    image: "/features/how-it-works-infographic.png",
    bullets: ["Ongoing activity", "Mailbox-level control", "Long-term reputation support"],
  },
];

const poolCards = [
  {
    title: "Premium by default",
    text: "Every mailbox gets high-quality warmup by default.",
    icon: BadgeCheck,
  },
  {
    title: "Curated warm-up pool",
    text: "Active inboxes keep interactions stable and safer.",
    icon: Users,
  },
  {
    title: "Quality warmup traffic",
    text: "Natural business activity creates stronger trust signals.",
    icon: Globe2,
  },
];

const workflow = [
  "Connect domains and mailboxes",
  "Verify SPF, DKIM, DMARC, DNS, and MX",
  "Start AI warmup at safe volume",
  "Track mailbox health and Heat Score",
  "Run inbox placement tests",
  "Scale outreach with safer limits",
  "Protect deliverability continuously",
];

const comparisonRows = [
  ["Verify lead quality", true, false],
  ["Set up domains and mailboxes", true, false],
  ["Boost deliverability", true, false],
  ["Monitor domain reputation", true, false],
  ["Maximize mailbox Heat Score", true, false],
  ["Launch sequences when ready", true, true],
  ["Track replies and performance", true, true],
];

const stats = [
  ["98%", "Inbox delivery focus"],
  ["30 days", "Guided warmup path"],
  ["24/7", "Mailbox monitoring"],
  ["1 click", "Warmup activation"],
];

const faqs = [
  {
    q: "What is 360Airo email warmup?",
    a: "It creates safe, gradual mailbox activity to build sender trust before outreach scales.",
  },
  {
    q: "How long should I warm up an inbox?",
    a: "Warm up for at least two weeks, then keep it running as volume grows.",
  },
  {
    q: "Does warmup replace proper domain setup?",
    a: "No. You still need SPF, DKIM, DMARC, MX, clean lists, and sensible limits.",
  },
  {
    q: "Can I monitor deliverability from the same page?",
    a: "Yes. Warmup, health checks, placement tests, and reputation monitoring are grouped together.",
  },
  {
    q: "Who should use email warmup?",
    a: "Founders, SDRs, agencies, growth teams, and marketers using cold email.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionHeading({
  kicker,
  title,
  text,
  align = "left",
}: {
  kicker: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#2f7df6]">{kicker}</span>
      <h2 className="mt-4 text-2xl font-black leading-tight text-[#061534] sm:text-3xl">{title}</h2>
      {text && <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[16px] border border-[#b7dfff] bg-white p-4 text-[#061534] shadow-[0_0_0_4px_rgba(183,223,255,0.28),0_22px_55px_rgba(47,125,246,0.18)]">
      <div className="flex items-center justify-between border-b border-[#2f7df6]/10 pb-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f7df6]">
            Deliverability Center
          </p>
          <h3 className="mt-1 text-base font-black text-[#061534]">Mailbox Heat Score</h3>
        </div>
        <div className="rounded-lg bg-[#eaf6ff] px-3 py-2 text-sm font-black text-[#061534]">
          96
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Warmup", "Active", "text-[#2f7df6]"],
          ["DNS", "Healthy", "text-[#061534]"],
          ["Spam risk", "Low", "text-[#6d3cff]"],
        ].map(([label, value, color]) => (
          <div key={label} className="rounded-lg border border-[#2f7df6]/12 bg-[#f5faff] p-3">
            <p className="text-[11px] font-semibold text-slate-500">{label}</p>
            <p className={`mt-1 text-sm font-black ${color}`}>{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["Primary inbox", "88%"],
          ["Promotions", "9%"],
          ["Spam", "3%"],
        ].map(([label, value], index) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-xs font-bold text-slate-600">
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={
                  index === 0
                    ? "h-full rounded-full bg-[#2f7df6]"
                    : index === 1
                      ? "h-full rounded-full bg-[#8fbfff]"
                      : "h-full rounded-full bg-[#6d3cff]"
                }
                style={{ width: value }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg bg-[#f5faff] p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#061534] text-[#b7dfff]">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-xs font-semibold leading-5 text-slate-600">
            AI warmup active. Limit: 25 emails per inbox today.
          </p>
        </div>
      </div>
    </div>
  );
}

export function EmailWarmupPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".warmup-reveal", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-white text-[#061534]">
      <Nav />
      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-[#020711] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(240,27,200,0.28),transparent_24%),radial-gradient(circle_at_76%_16%,rgba(47,125,246,0.42),transparent_30%),linear-gradient(135deg,#020711_0%,#061534_44%,#2f7df6_100%)]" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-35"
            animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <Badge className="mb-5 border border-[#b7dfff]/25 bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
                Premium Email Warmup & Deliverability Center
              </Badge>
              <h1 className="max-w-2xl text-2xl font-black leading-tight sm:text-3xl lg:text-[42px]">
                Reach inboxes without hurting scale
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                Warm up mailboxes, monitor health, and protect reputation before campaigns go live.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-lg bg-white px-7 font-bold text-[#061534] hover:bg-[#eaf6ff]"
                >
                  <Link href="#audit">
                    Get free warm up
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-lg border-white/25 bg-white/10 px-7 font-bold text-white hover:bg-white/15"
                >
                  <Link href="#features">Explore features</Link>
                </Button>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(([value, label], index) => (
                  <div
                    key={label}
                    className="group relative overflow-hidden rounded-lg border border-[#b7dfff]/40 bg-white px-3 py-2 text-[#061534] shadow-lg shadow-black/10"
                  >
                    <div
                      className={
                        index === 0
                          ? "absolute left-0 top-0 h-full w-full origin-top scale-y-0 bg-[#2f7df6] transition-transform duration-300 group-hover:scale-y-100"
                          : index === 1
                            ? "absolute left-0 top-0 h-full w-full origin-top scale-y-0 bg-[#6d3cff] transition-transform duration-300 group-hover:scale-y-100"
                            : index === 2
                              ? "absolute left-0 top-0 h-full w-full origin-top scale-y-0 bg-[#b7dfff] transition-transform duration-300 group-hover:scale-y-100"
                              : "absolute left-0 top-0 h-full w-full origin-top scale-y-0 bg-[#061534] transition-transform duration-300 group-hover:scale-y-100"
                      }
                    />
                    <div
                      className={
                        index === 0
                          ? "absolute left-0 top-0 z-10 h-1 w-full bg-[#2f7df6]"
                          : index === 1
                            ? "absolute left-0 top-0 z-10 h-1 w-full bg-[#6d3cff]"
                            : index === 2
                              ? "absolute left-0 top-0 z-10 h-1 w-full bg-[#b7dfff]"
                              : "absolute left-0 top-0 z-10 h-1 w-full bg-[#061534]"
                      }
                    />
                    <div
                      className={
                        index === 2
                          ? "relative z-10 mt-0.5 text-base font-black transition-colors duration-300"
                          : "relative z-10 mt-0.5 text-base font-black transition-colors duration-300 group-hover:text-white"
                      }
                    >
                      {value}
                    </div>
                    <div
                      className={
                        index === 2
                          ? "relative z-10 mt-0.5 text-[10px] font-semibold leading-3 text-[#061534] transition-colors duration-300"
                          : "relative z-10 mt-0.5 text-[10px] font-semibold leading-3 text-[#061534] transition-colors duration-300 group-hover:text-white"
                      }
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative mx-auto w-full max-w-md">
              <MiniDashboard />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-[18px] border border-white/12 bg-white p-4 text-[#061534] shadow-xl shadow-black/15">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2f7df6] text-white">
                      <Gauge className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500">Warmup volume</p>
                      <p className="text-sm font-black">+5/day</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/12 bg-white p-4 text-[#061534] shadow-xl shadow-black/15">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6d3cff] text-white">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500">Reputation</p>
                      <p className="text-sm font-black">Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5faff] py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mx-auto max-w-xl text-center">
              <p className="brand-kicker">Why Emails Miss The Inbox</p>
              <h2 className="mt-4 text-2xl font-bold md:text-4xl">Deliverability breaks early</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Warmup works best with clear infrastructure visibility.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="warmup-reveal group relative min-h-[220px] overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative flex min-h-[220px] flex-col overflow-hidden rounded-md bg-white/85 p-5 transition-all duration-300 group-hover:bg-white">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#081028] via-[#253a7d] to-[#253a7d] text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="pr-8 text-base font-semibold leading-snug text-slate-900">
                        {point.title}
                      </h3>
                      <p className="mt-3 line-clamp-1 text-xs leading-5 text-slate-600">
                        {point.text}
                      </p>
                      <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100">
                        <p className="text-xs leading-6 text-slate-600">{point.text}</p>
                      </div>
                      <div className="mt-auto flex items-center gap-2 pt-6">
                        <span className="h-2 w-2 rounded-full bg-[#253a7d]" />
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#eaf1ff]">
                          <div
                            className="h-full rounded-full bg-[#253a7d]"
                            style={{ width: `${62 + index * 10}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              kicker="Key Features"
              title="Email warmup command center"
              text="Deliverability tools shaped for the 360Airo workflow."
            />

            <Tabs defaultValue="warmup" className="mt-10">
              <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 rounded-lg bg-[#edf6ff] p-2">
                {featureTabs.map((feature) => {
                  const Icon = feature.icon;
                   return (
                    <TabsTrigger
                      key={feature.value}
                      value={feature.value}
                      className="h-11 gap-2 rounded-lg px-4 text-[#061534] data-[state=active]:bg-[#061534] data-[state=active]:text-[#b7dfff]"
                    >
                      <Icon className="h-4 w-4" />
                      {feature.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {featureTabs.map((feature) => {
                const Icon = feature.icon;
                return (
                  <TabsContent key={feature.value} value={feature.value} className="mt-8">
                    <div className="grid items-center gap-10 rounded-[20px] border border-[#2f7df6]/15 bg-[#f8fcff] p-5 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#061534] text-[#b7dfff]">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 text-2xl font-black leading-tight text-[#061534]">
                          {feature.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          {feature.bullets.map((bullet) => (
                            <div
                              key={bullet}
                              className="flex items-center gap-2 rounded-lg border border-[#2f7df6]/15 bg-white px-3 py-3 text-xs font-bold text-[#061534]"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2f7df6]" />
                              {bullet}
                            </div>
                          ))} 
                        </div>
                        <Button
                          asChild
                          className="mt-7 h-12 rounded-lg bg-[#061534] px-7 text-white hover:bg-[#102b67]"
                        >
                          <Link href="#audit">
                            Try 360Airo warmup
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className="relative overflow-hidden rounded-[18px] border border-[#2f7df6]/15 bg-white p-4 shadow-2xl shadow-[#061534]/10">
                        <Image
                          src={feature.image}
                          alt={`${feature.label} dashboard preview`}
                          width={1200}
                          height={760}
                          className="h-auto w-full rounded-[14px] object-contain"
                        />
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>

        <section className="bg-[#020711] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#b7dfff]">
                  Premium Warm-Up Pool
                </span>
                <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
                  Built for reputation quality
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  360Airo keeps warmup stable, business-like, and ready for outbound teams.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {poolCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeUp}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="rounded-lg border border-[#b7dfff]/14 bg-white/8 p-6 backdrop-blur"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#b7dfff] text-[#061534]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-base font-black">{card.title}</h3>
                      <p className="mt-3 text-xs leading-6 text-white/68">{card.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div> 
          </div>
        </section>

        <section id="audit" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="group relative overflow-hidden rounded-[20px] bg-[#020711] p-7 text-white md:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#061534_0%,#12346f_58%,#2f7df6_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-[#b7dfff] text-[#061534]">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h2 className="relative mt-6 text-2xl font-black leading-tight">
                Get a free email deliverability audit
              </h2>
              <p className="relative mt-3 text-sm leading-7 text-white/72">
                Check DNS, MX, mailbox health, and blacklist risk before launch.
              </p>
              <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="h-12 flex-1 rounded-lg border border-white/15 bg-white px-4 text-sm font-semibold text-[#061534] outline-none placeholder:text-slate-400"
                />
                <Button className="h-12 rounded-lg bg-[#b7dfff] px-6 font-black text-[#061534] hover:bg-[#d7ecff]">
                  Run audit
                </Button>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#2f7df6]/15 bg-[#f5faff] p-7 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#061534] text-[#b7dfff]">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-black leading-tight text-[#061534]">
                Get the right outbound strategy
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use warmup, health checks, and limits before serious sequences.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="h-12 flex-1 rounded-lg border border-[#2f7df6]/20 bg-white px-4 text-sm font-semibold text-[#061534] outline-none placeholder:text-slate-400"
                />
                <Button className="h-12 rounded-lg bg-[#061534] px-6 font-black text-white hover:bg-[#102b67]">
                  Build plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5faff] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="center"
              kicker="Every Step Covered"
              title="From setup to campaign scale"
              text="A warmup workflow built into the outbound system."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-7">
              {workflow.map((step, index) => (
                <motion.div
                  key={step}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-lg border border-[#2f7df6]/15 bg-white p-4 shadow-lg shadow-[#061534]/5 md:min-h-[150px]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#061534] text-sm font-black text-[#b7dfff]">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-xs font-black leading-5 text-[#061534]">{step}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-[20px] border border-[#2f7df6]/15 bg-white shadow-xl shadow-[#061534]/8">
              <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr] border-b border-[#2f7df6]/12 bg-[#061534] px-4 py-4 text-xs font-black text-white sm:px-6">
                <div>Successful outreach task</div>
                <div className="text-center">With 360Airo</div>
                <div className="text-center">Without warmup</div>
              </div>
              {comparisonRows.map(([label, withAiro, without]) => (
                <div
                  key={label as string}
                  className="grid grid-cols-[1.2fr_0.9fr_0.9fr] items-center border-b border-[#2f7df6]/10 px-4 py-4 text-xs last:border-b-0 sm:px-6"
                >
                  <div className="font-bold text-[#061534]">{label}</div>
                  <div className="flex justify-center">
                    {withAiro ? (
                      <Check className="h-5 w-5 text-[#2f7df6]" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {without ? (
                      <Check className="h-5 w-5 text-[#2f7df6]" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 rounded-[24px] bg-[radial-gradient(circle_at_10%_100%,rgba(240,27,200,0.20),transparent_28%),linear-gradient(135deg,#020711_0%,#061534_58%,#2f7df6_100%)] p-7 text-white md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <Badge className="border border-white/15 bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
                  100 Free Credits
                </Badge>
                <h2 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
                  Start warming before spam filters decide
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Connect, verify, and improve your shot at the primary inbox.
                </p>
                <Button
                  asChild
                  className="mt-7 h-12 rounded-lg bg-white px-7 font-black text-[#061534] hover:bg-[#eaf6ff]"
                >
                  <Link href="#audit">
                    Get free warm up
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Automated AI email warmup", Zap],
                  ["Monthly placement visibility", Inbox],
                  ["Health checks for mailboxes", ServerCog],
                  ["Deliverability monitoring", BarChart3],
                ].map(([label, Icon]) => {
                  const TypedIcon = Icon as typeof Zap;
                  return (
                    <div key={label as string} className="rounded-lg bg-white/8 p-5">
                      <TypedIcon className="h-6 w-6 text-[#b7dfff]" />
                      <p className="mt-4 text-xs font-black">{label as string}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5faff] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <SectionHeading
              kicker="Frequently Asked Questions"
              title="Email warmup FAQs"
              text="Quick answers before scaling cold outreach."
            />
            <Card className="rounded-lg border-[#2f7df6]/15 bg-white shadow-xl shadow-[#061534]/8">
              <CardContent className="p-2 sm:p-5">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.q}
                      value={`item-${index}`}
                      className="border-[#2f7df6]/12"
                    >
                      <AccordionTrigger className="gap-4 px-3 text-left text-sm font-black text-[#061534] hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-3 text-xs leading-6 text-slate-600 sm:px-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
