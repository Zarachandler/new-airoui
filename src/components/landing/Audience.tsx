"use client";

import { motion } from "framer-motion";
import { Mail, TrendingUp } from "lucide-react";
import { type ReactNode } from "react";

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
              <div className="flex items-center gap-2 rounded-2xl border border-violet-100 bg-white px-3 py-2 shadow-xl shadow-violet-100/70">
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
                <div className="rounded-xl bg-violet-50 p-2 text-center">
                  <p className="text-xl font-black text-violet-600">0%</p>
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
              <div className="mt-3 rounded-lg bg-gradient-to-r from-cyan-50 to-violet-50 p-2">
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
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#e0f2fe_0%,#ffffff_46%,#f3e8ff_100%)] py-24 sm:py-28">
      {/* Grid Background */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-16">
          {sections.map((section) => (
            <div key={section.visual} className="rounded-[28px] px-0 py-2">
              <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
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
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-6 w-fit rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-800"
                >
                  Start For Free
                </motion.a>
              </div>
              <div className="mt-6">
                <CardVisual type={section.visual} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
