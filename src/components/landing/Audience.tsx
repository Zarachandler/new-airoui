"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Mail, TrendingUp } from "lucide-react";
import { type ReactNode, useRef } from "react";

const sections = [
  {
    title: "Cold Emailing",
    desc: "Add smart email follow-ups to your LinkedIn outreach so more prospects see, remember, and reply to 360Airo campaigns. Build one connected journey from the first connection request to the final booked meeting, with every touchpoint timed to feel natural and relevant.",
    points: [],
    tag: "LinkedIn + Email",
    visual: "cold",
  },
  {
    title: "Smart LinkedIn Inbox",
    desc: "Keep every reply organized with saved responses, scheduling, lead context, and next-step reminders built into one 360Airo inbox. Never miss a follow-up or let warm leads go cold again.",
    points: [],
    tag: "Reply Center",
    visual: "inbox",
  },
  {
    title: "LinkedIn Auto-Prospecting",
    desc: "Build and launch automated outreach campaigns directly from real, up-to-date LinkedIn profiles with AI-assisted targeting.",

    tag: "Live Profiles",
    visual: "prospecting",
  },
  {
    title: "Email Warmup",
    desc: "Enrich prospects with verified professional emails when LinkedIn is not enough, with a guaranteed 61%+ match rate.",
    points: [],
    tag: "Verified Emails",
    visual: "email",
  },
];

const scrollPalette = [
  { glow: "rgba(14,165,233,0.26)", accent: "#0ea5e9", label: "01" },
  { glow: "rgba(37,58,125,0.24)", accent: "#253a7d", label: "02" },
  { glow: "rgba(16,185,129,0.2)", accent: "#10b981", label: "03" },
  { glow: "rgba(245,158,11,0.2)", accent: "#f59e0b", label: "04" },
];

function AnimatedBorder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-[28px] p-[2px] ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-[45%] bg-[conic-gradient(from_0deg,#061534,rgba(56,189,248,0.9),#101a42,rgba(56,189,248,0.9),#061534)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative h-full rounded-[26px] bg-white">{children}</div>
    </motion.div>
  );
}

function ScrollSignalBackdrop() {
  const railRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 75%", "end 25%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  });
  const beamY = useTransform(progress, [0, 1], ["4%", "82%"]);
  const beamOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const gridShift = useTransform(progress, [0, 1], ["0px 0px", "80px 140px"]);
  const cyanGlowScale = useTransform(progress, [0, 0.5, 1], [0.9, 1.25, 0.95]);
  const cyanGlowOpacity = useTransform(progress, [0, 0.35, 0.8, 1], [0.12, 0.42, 0.24, 0.08]);
  const violetGlowScale = useTransform(progress, [0, 0.55, 1], [0.8, 1.18, 1.35]);
  const violetGlowOpacity = useTransform(progress, [0, 0.2, 0.7, 1], [0.08, 0.28, 0.38, 0.12]);

  return (
    <div ref={railRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(14,165,233,0.32) 0 1px, transparent 1px 120px), linear-gradient(65deg, rgba(124,58,237,0.22) 0 1px, transparent 1px 96px)",
          backgroundSize: "180px 180px",
          backgroundPosition: shouldReduceMotion ? "0px 0px" : gridShift,
        }}
      />
      <div className="absolute left-1/2 top-24 hidden h-[calc(100%-12rem)] w-px -translate-x-1/2 bg-slate-200 lg:block" />
      <motion.div
        className="absolute left-1/2 top-24 hidden h-36 w-[3px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,transparent,#38bdf8,#a78bfa,transparent)] shadow-[0_0_42px_rgba(56,189,248,0.75)] lg:block"
        style={{
          y: shouldReduceMotion ? 0 : beamY,
          opacity: shouldReduceMotion ? 0.45 : beamOpacity,
        }}
      />
      <motion.div
        className="absolute left-[12%] top-[18%] h-52 w-52 rounded-full bg-cyan-200/30 blur-3xl"
        style={{
          scale: shouldReduceMotion ? 1 : cyanGlowScale,
          opacity: shouldReduceMotion ? 0.16 : cyanGlowOpacity,
        }}
      />
      <motion.div
        className="absolute right-[8%] top-[46%] h-64 w-64 rounded-full bg-[#253a7d]/20 blur-3xl"
        style={{
          scale: shouldReduceMotion ? 1 : violetGlowScale,
          opacity: shouldReduceMotion ? 0.14 : violetGlowOpacity,
        }}
      />
    </div>
  );
}

function FeatureScrollBlock({
  section,
  index,
}: {
  section: (typeof sections)[number];
  index: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start 82%", "end 24%"],
  });

  const easedProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.35,
  });
  const lift = useTransform(easedProgress, [0, 0.52, 1], [70, 0, -34]);
  const rotate = useTransform(
    easedProgress,
    [0, 0.45, 1],
    index % 2 === 0 ? [-5, 0, 2.6] : [5, 0, -2.6],
  );
  const textX = useTransform(
    easedProgress,
    [0, 0.5, 1],
    index % 2 === 0 ? [-36, 0, 20] : [36, 0, -20],
  );
  const visualX = useTransform(
    easedProgress,
    [0, 0.5, 1],
    index % 2 === 0 ? [38, 0, -18] : [-38, 0, 18],
  );
  const textOpacity = useTransform(easedProgress, [0, 0.18, 0.86, 1], [0.35, 1, 1, 0.6]);
  const lineScale = useTransform(easedProgress, [0.12, 0.82], [0, 1]);
  const haloScale = useTransform(easedProgress, [0, 0.48, 1], [0.7, 1, 1.22]);
  const haloOpacity = useTransform(easedProgress, [0, 0.4, 1], [0, 0.34, 0.12]);
  const pulseScale = useTransform(easedProgress, [0.2, 0.72], [0.8, 1.28]);
  const pulseOpacity = useTransform(easedProgress, [0.2, 0.72], [0.55, 0]);
  const visualGlowOpacity = useTransform(easedProgress, [0, 0.48, 1], [0.05, 0.34, 0.1]);
  const visualScale = useTransform(easedProgress, [0, 0.52, 1], [0.94, 1, 0.98]);
  const palette = scrollPalette[index % scrollPalette.length];
  const isCold = section.visual === "cold";
  const isInbox = section.visual === "inbox";
  const isEmail = section.visual === "email";
  const isDirectPair = isCold || isInbox || isEmail;

  return (
    <div ref={blockRef} className="relative py-10 md:py-14">
      {!isDirectPair && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-10 hidden h-16 w-16 -translate-x-1/2 rounded-full border border-white bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] lg:flex"
            style={{
              scale: shouldReduceMotion ? 1 : haloScale,
              opacity: shouldReduceMotion ? 0.18 : haloOpacity,
              backgroundColor: palette.glow,
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-16 hidden h-[calc(100%-4rem)] w-px origin-top -translate-x-1/2 bg-[linear-gradient(180deg,#081028,#253a7d)] lg:block"
            style={{ scaleY: shouldReduceMotion ? 1 : lineScale }}
          />
        </>
      )}

      <div
        className={`relative grid items-start gap-8 ${
          isDirectPair
            ? `lg:grid-cols-2 ${isCold || isInbox || isEmail ? "lg:gap-16" : "lg:gap-10"}`
            : "lg:grid-cols-[minmax(0,0.92fr)_120px_minmax(0,1.08fr)]"
        } ${
          isInbox || isEmail
            ? "lg:[&_.feature-copy]:col-start-2 lg:[&_.feature-copy]:row-start-1 lg:[&_.feature-visual]:col-start-1 lg:[&_.feature-visual]:row-start-1"
            : ""
        } ${
          !isDirectPair && index % 2 === 1
            ? "lg:[&_.feature-copy]:col-start-3 lg:[&_.feature-visual]:col-start-1"
            : ""
        }`}
      >
        <motion.div
          className="feature-copy mx-auto flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left"
          style={{
            x: shouldReduceMotion ? 0 : textX,
            opacity: shouldReduceMotion ? 1 : textOpacity,
          }}
        >
          <div className="mb-5 inline-flex h-9 items-center gap-3 rounded-full border border-slate-200 bg-white px-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#061b2d] shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-black text-white"
              style={{ backgroundColor: palette.accent }}
            >
              {palette.label}
            </span>
            {section.tag}
          </div>
          <h3 className="text-3xl font-bold leading-tight text-[#061b2d] md:text-4xl">
            {section.title}
          </h3>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-[#1e2a3a] md:text-base">
            {section.desc}
          </p>
          {section.points && section.points.length > 0 && (
            <div className="mt-5 grid max-w-3xl gap-3 text-left md:grid-cols-3">
              {section.points.map((point) => (
                <p
                  key={point}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-xs font-semibold leading-5 text-slate-600"
                >
                  {point}
                </p>
              ))}
            </div>
          )}
          <motion.a
            href="#cta"
            animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 w-fit rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-800"
          >
            Start For Free
          </motion.a>
        </motion.div>

        {!isDirectPair && (
          <div className="pointer-events-none relative z-10 hidden h-full min-h-24 items-center justify-center lg:flex">
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
              style={{
                y: shouldReduceMotion ? 0 : lift,
                rotate: shouldReduceMotion ? 0 : rotate,
              }}
            >
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: palette.accent }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl border"
                style={{
                  borderColor: palette.accent,
                  scale: shouldReduceMotion ? 1 : pulseScale,
                  opacity: shouldReduceMotion ? 0 : pulseOpacity,
                }}
              />
            </motion.div>
          </div>
        )}

        <motion.div
          className="feature-visual relative mt-2 lg:mt-0"
          style={{
            x: shouldReduceMotion ? 0 : visualX,
            y: shouldReduceMotion ? 0 : lift,
            rotate: shouldReduceMotion ? 0 : rotate,
          }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[36px] blur-3xl"
            style={{
              backgroundColor: palette.glow,
              opacity: shouldReduceMotion ? 0.14 : visualGlowOpacity,
            }}
          />
          <motion.div
            className="relative"
            style={{
              scale: shouldReduceMotion ? 1 : visualScale,
            }}
          >
            <CardVisual type={section.visual} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function CardVisual({ type }: { type: string }) {
  if (type === "cold") {
    return (
      <AnimatedBorder className="mx-auto h-full min-h-[240px] w-full max-w-6xl md:min-h-[260px]">
        <div className="relative h-full overflow-hidden rounded-[26px] bg-[#f7fbff] p-4 md:p-5">
          <div className="relative mx-auto w-full max-w-2xl">
            <img
              src="/features/cold-emailing-infographic.png"
              alt="Create multichannel sequences infographic"
              className="h-auto w-full rounded-[22px] object-contain scale-90"
            />
            <div className="absolute right-0 top-0 flex h-[24%] w-[26%] items-center justify-center bg-[#f7fbff]">
              <div className="flex items-center gap-2 rounded-2xl border border-[#dfe7f4] bg-white px-3 py-2 shadow-xl shadow-[#253a7d]/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-black text-[#061b2d]">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    16%
                  </div>
                  <p className="text-[9px] font-bold text-slate-500">Reply rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBorder>
    );
  }

  if (type === "inbox") {
    return (
      <AnimatedBorder className="mx-auto h-full min-h-[340px] w-full max-w-5xl md:min-h-[380px]">
        <div className="relative h-full overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#f6fbff_0%,#eef7ff_50%,#f7f0ff_100%)] p-4 md:p-6">
          <div className="relative mx-auto grid max-w-4xl gap-3 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-[#061b2d] bg-[#061b2d] p-4 text-white">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-cyan-100">360Airo Inbox</p>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  12 new
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { name: "Sarah Johnson", msg: "Demo booked for Tuesday" },
                  { name: "Michael Chen", msg: "Asked for pricing" },
                  { name: "David Williams", msg: "Follow up Friday" },
                  { name: "Emma Davis", msg: "Interested in enterprise" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl bg-white/10 p-2 ring-1 ring-sky-200/30 transition-all hover:bg-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold">{item.name}</p>
                      <span className="text-[8px] text-cyan-300/60">2min ago</span>
                    </div>
                    <p className="mt-1 text-[10px] text-cyan-50/70">{item.msg}</p>
                    <div className="mt-1 flex gap-2">
                      <span className="rounded-full bg-cyan-500/20 px-1.5 py-0.5 text-[8px] font-medium text-cyan-300">
                        Saved reply ready
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#061b2d] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-500">Response quality</p>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-black text-emerald-700">
                  +42%
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-emerald-50 p-2 text-center">
                  <p className="text-xl font-black text-emerald-600">2.3x</p>
                  <p className="text-[9px] font-bold text-slate-500">Faster replies</p>
                </div>
                <div className="rounded-xl bg-[#eaf1ff] p-2 text-center">
                  <p className="text-xl font-black text-[#253a7d]">0%</p>
                  <p className="text-[9px] font-bold text-slate-500">Missed chats</p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { name: "Save", icon: "💾" },
                  { name: "Schedule", icon: "📅" },
                  { name: "Sync", icon: "🔄" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-[#061b2d]/20 bg-slate-50 p-2 text-center transition-all hover:bg-slate-100"
                  >
                    <div className="mx-auto text-lg">{item.icon}</div>
                    <p className="text-[10px] font-black text-[#061b2d]">{item.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-gradient-to-r from-cyan-50 to-[#eaf1ff] p-2">
                <p className="text-center text-[9px] font-semibold text-slate-600">
                  ⚡ AI suggests best reply times
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBorder>
    );
  }

  if (type === "prospecting") {
    return (
      <AnimatedBorder className="mx-auto h-full min-h-[280px] w-full max-w-5xl md:min-h-[340px]">
        <div className="relative h-full overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#eef9ff_0%,#ffffff_46%,#f2ecff_100%)] p-3 md:p-4">
          <img
            src="/features/linkedin-auto-prospecting.png"
            alt="LinkedIn auto-prospecting profile research and email finder dashboard"
            className="relative mx-auto h-auto max-h-[500px] w-full max-w-[1000px] object-contain"
          />
        </div>
      </AnimatedBorder>
    );
  }

  if (type === "email") {
    return (
      <AnimatedBorder className="mx-auto h-full min-h-[280px] w-full max-w-4xl md:min-h-[320px]">
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#edf8ff_0%,#ffffff_48%,#f0eaff_100%)] p-4 md:p-6">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] p-2">
            <img
              src="/features/email-finder-infographic.png"
              alt="Email Finder: Name, Pro email, 85% success rate, 422 pro emails found"
              className="h-auto w-2/3 max-w-lg rounded-[18px] object-contain mx-auto"
            />
          </div>
        </div>
      </AnimatedBorder>
    );
  }

  return null;
}

export function Audience() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-10 sm:pb-28 sm:pt-12">
      {/* Grid Background */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />
      
      <div className="relative h-full w-full">
        <ScrollSignalBackdrop />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-3 md:gap-6">
          {sections.map((section, index) => (
            <FeatureScrollBlock key={section.visual} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

