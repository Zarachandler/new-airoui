"use client";

import heroPerson from "@/assets/hero-person.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, BarChart3, Mail, PhoneCall, PlayCircle, Sparkles, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const words = ["Scale", "sales", "outreach", "with", "360Airo", "AI."];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.07,
        duration: 0.8,
        ease: "power3.out",
      });
      const signalNodes = gsap.utils.toArray(".signal-node");
      if (signalNodes.length > 0) {
        gsap.to(signalNodes, {
          y: -12,
          x: 6,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.16,
        });
      }

      const corePulse = gsap.utils.toArray(".core-pulse");
      if (corePulse.length > 0) {
        gsap.to(corePulse, {
          scale: 1.12,
          opacity: 0.28,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-[#051421] pt-6 pb-8 text-white sm:pt-10 sm:pb-10"
    >
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
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 505 C170 350 312 450 480 286 S804 158 958 246 1182 406 1440 210"
          fill="none"
          stroke="rgba(186,244,255,0.38)"
          strokeWidth="2"
          initial={{ pathLength: 0.35, opacity: 0.35 }}
          animate={{ pathLength: [0.35, 1, 0.35], opacity: [0.28, 0.7, 0.28] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 210 C182 120 338 262 520 206 S832 62 1018 124 1215 250 1440 130"
          fill="none"
          stroke="rgba(99,214,231,0.28)"
          strokeWidth="2"
          initial={{ pathLength: 0.4, opacity: 0.24 }}
          animate={{ pathLength: [0.4, 1, 0.4], opacity: [0.2, 0.58, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid min-h-[480px] items-center gap-10 lg:min-h-[540px] lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10 text-left lg:ml-14 xl:ml-24"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" /> AI outreach command center
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-3xl font-bold leading-[1.04] text-white sm:text-4xl lg:text-5xl">
              {words.map((word, index) => (
                <span key={`${word}-${index}`} className="mr-3 inline-block overflow-hidden pb-1">
                  <span className="hero-word inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
              className="mt-5 max-w-3xl text-sm leading-6 text-white-50/78"
            >
              360Airo unifies LinkedIn outreach, cold email, calls, inbox rotation, CRM sync, and
              analytics into one fast AI workflow.
              <br />
              Launch campaigns, protect deliverability, and convert replies into pipeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#cta"
                whileTap={{ scale: 0.96 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="btn-primary !border-white/20 !bg-white !text-[#08243a]"
              >
                Start scaling now <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#features"
                whileTap={{ scale: 0.96 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.14 }}
                className="btn-ghost !border-white/30 !bg-white/10 !text-white"
              >
                <PlayCircle className="h-4 w-4" /> Watch the platform
              </motion.a>
            </motion.div>
          </motion.div>

          <div
            className="relative min-h-[350px] overflow-visible [transform-style:preserve-3d]"
            style={{ perspective: 1200 }}
          >
            <div className="absolute left-[68%] top-[40%] z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-95 ring-2 ring-white md:h-[310px] md:w-[310px]">
              <Image
                src={heroPerson.src}
                alt=""
                width={640}
                height={640}
                aria-hidden="true"
                className="h-full w-full scale-105 object-cover object-top"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.55, delay: 0.65 },
                scale: { duration: 0.55, delay: 0.65 },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute left-[31%] top-[59%] z-30 w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/80 bg-white/95 p-1.5 text-[#061b2d] backdrop-blur-xl [zoom:0.86] md:w-[360px]"
            >
              <div className="absolute -right-3 top-14 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-violet-600 shadow-xl shadow-violet-100 md:flex">
                <Mail className="h-5 w-5" />
              </div>
              <div className="absolute -right-4 bottom-8 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-violet-600 shadow-xl shadow-violet-100 md:flex">
                <PhoneCall className="h-5 w-5" />
              </div>

              <div className="grid gap-1.5 md:grid-cols-[1fr_0.92fr]">
                <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-white p-2">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8f6ff_100%)]" />
                  <div className="relative flex h-full min-h-[244px] flex-col items-center justify-center">
                    <div className="relative mt-6 w-[112%] overflow-hidden rounded-2xl bg-white p-3">
                      <div className="absolute -right-2 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white ring-4 ring-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="flex items-center justify-between pr-9">
                        <p className="flex items-center gap-1.5 text-[10px] font-black">
                          <Mail className="h-3.5 w-3.5 text-violet-600" />
                          Email Campaign
                        </p>
                        <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[7px] font-black text-emerald-600">
                          Running
                        </span>
                      </div>
                      <div className="mt-4 rounded-md bg-slate-50 px-2 py-1 text-[8px] font-semibold text-[#061b2d]">
                        Subject: Quick idea to help {"{Company}"} grow
                      </div>
                      <div className="mt-4 grid grid-cols-4 gap-1.5 text-center">
                        {[
                          ["Sent", "12.4K"],
                          ["Open Rate", "48%"],
                          ["Reply Rate", "16%"],
                          ["Positive Reply", "112"],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <p className="text-[7px] font-bold text-[#061b2d]/70">{label}</p>
                            <p className="mt-1 text-[12px] font-black">{value}</p>
                          </div>
                        ))}
                      </div>
                      <svg
                        aria-hidden="true"
                        className="mt-5 h-12 w-full"
                        viewBox="0 0 220 48"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 38 C22 39 31 25 50 30 C70 36 80 17 101 22 C121 27 132 33 151 24 C172 14 191 20 220 12"
                          stroke="rgba(124,58,237,0.82)"
                          strokeWidth="2"
                        />
                        <path
                          d="M0 48 L0 38 C22 39 31 25 50 30 C70 36 80 17 101 22 C121 27 132 33 151 24 C172 14 191 20 220 12 L220 48 Z"
                          fill="url(#emailHeroGraph)"
                        />
                        <defs>
                          <linearGradient
                            id="emailHeroGraph"
                            x1="110"
                            x2="110"
                            y1="12"
                            y2="48"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="rgb(124,58,237)" stopOpacity="0.18" />
                            <stop offset="1" stopColor="rgb(124,58,237)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <div className="rounded-2xl bg-white p-2">
                    <p className="text-[10px] font-black">Outreach Success Rate</p>
                    <div className="mt-1.5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-[6px] border-violet-500 border-r-violet-100 text-xs font-black">
                        85%
                      </div>
                      <div>
                        <p className="text-xs font-black text-emerald-600">+ 12%</p>
                        <p className="text-[8px] font-semibold text-[#061b2d]">vs last month</p>
                      </div>
                    </div>
                    <div className="mt-1.5 h-3 rounded-b-xl bg-[linear-gradient(135deg,rgba(139,92,246,0.26),rgba(139,92,246,0.04))]" />
                  </div>

                  <div className="rounded-2xl bg-white p-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <p className="flex items-center justify-center gap-1.5 text-[10px] font-black">
                        <Mail className="h-3.5 w-3.5 text-violet-600" />
                        Email Campaign
                      </p>
                      <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[7px] font-black text-emerald-600">
                        Running
                      </span>
                    </div>
                    <div className="mt-1.5 rounded-md bg-slate-50 px-2 py-1 text-[8px] font-semibold text-[#061b2d]">
                      Subject: Quick idea to help {"{Company}"} grow
                    </div>
                    <div className="mt-1.5 grid grid-cols-4 gap-1.5 text-center">
                      {[
                        ["Sent", "8,725"],
                        ["Open Rate", "48%"],
                        ["Reply Rate", "16%"],
                        ["Positive Reply", "112"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <p className="text-[7px] font-bold text-[#061b2d]/70">{label}</p>
                          <p className="mt-0.5 text-[10px] font-black">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-1.5 h-3 rounded-b-xl bg-[linear-gradient(135deg,rgba(139,92,246,0.24),rgba(139,92,246,0.02))]" />
                  </div>

                  <div className="rounded-2xl bg-white p-2">
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1.5 text-[10px] font-black">
                        <PhoneCall className="h-3.5 w-3.5 text-violet-600" />
                        Calling Sequence
                      </p>
                      <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[7px] font-black text-emerald-600">
                        Active
                      </span>
                    </div>
                    <div className="mt-1.5 space-y-1 text-[8px] font-semibold text-[#061b2d]">
                      {[
                        ["Step 1: Call", "Completed"],
                        ["Step 2: Voicemail", "Completed"],
                        ["Step 3: Follow-up Call", "Pending"],
                      ].map(([label, status]) => (
                        <div key={label} className="flex items-center justify-center gap-2">
                          <span>{label}</span>
                          <span
                            className={
                              status === "Pending" ? "text-orange-500" : "text-emerald-600"
                            }
                          >
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="ui-button-motion mt-1.5 w-full rounded-md bg-violet-600 py-1 text-[8px] font-black text-white">
                      Log Call
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.9, ease: "easeOut" }}
              className="absolute left-1/2 top-[110%] z-20 grid w-[min(92vw,660px)] -translate-x-1/2 grid-cols-1 gap-2 rounded-2xl border border-violet-100 bg-white px-3 py-1 text-[#061b2d] sm:grid-cols-[1fr_auto_1fr_auto_1fr] lg:left-[47%] lg:top-[108%]"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <Target className="h-5 w-5" />
                </span>
                <p className="text-[9px] font-semibold leading-3 text-[#061b2d]">
                  <span className="block text-[10px] font-black text-[#061b2d]">Connect</span>
                  with the right prospects
                </p>
              </div>
              <span className="hidden text-sm font-black text-violet-400 sm:block">--&gt;</span>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <span className="text-lg leading-none">...</span>
                </span>
                <p className="text-[9px] font-semibold leading-3 text-[#061b2d]">
                  <span className="block text-[10px] font-black text-[#061b2d]">Engage</span>
                  across every channel
                </p>
              </div>
              <span className="hidden text-sm font-black text-violet-400 sm:block">--&gt;</span>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <p className="text-[9px] font-semibold leading-3 text-[#061b2d]">
                  <span className="block text-[10px] font-black text-[#061b2d]">Close</span>
                  more deals, faster
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
