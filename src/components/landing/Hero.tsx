"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const headlineLines = ["Supercharge", "Your Sales Outreach"];
const stats = [
  {
    value: "3.2x",
    label: "Average Reply Rate Lift",
  },
  {
    value: "4,200+",
    label: "Campaigns Launched",
  },
  {
    value: "89%",
    label: "Customer Retention",
  },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line-reveal",
        {
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".hero-copy-fade",
        {
          y: 18,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.35,
        },
      );

      gsap.to(".headline-shimmer", {
        backgroundPositionX: "200%",
        duration: 6,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[640px] overflow-hidden bg-[#030711] px-4 pt-12 pb-20 text-white sm:min-h-[680px] sm:pt-14 lg:min-h-[720px]"
    >
      <div className="absolute inset-0 bg-[#030711]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(81,104,255,0.26),transparent_36%),radial-gradient(circle_at_72%_58%,rgba(14,165,233,0.18),transparent_40%)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-3d-lines absolute left-[-18%] top-[-16%] h-[112%] w-[72%] -skew-x-[34deg] bg-[linear-gradient(125deg,rgba(58,78,178,0.62),rgba(28,45,112,0.36)_46%,rgba(8,17,43,0.16))] shadow-[54px_0_120px_rgba(4,12,34,0.46)]" />
        <div className="hero-3d-lines absolute left-[20%] top-[-10%] h-[116%] w-[42%] -skew-x-[34deg] bg-[linear-gradient(125deg,rgba(55,73,170,0.54),rgba(23,42,107,0.32)_58%,rgba(7,15,37,0.12))] shadow-[48px_0_130px_rgba(70,105,255,0.2)]" />
        <div className="hero-3d-lines absolute right-[-18%] top-[4%] h-[105%] w-[58%] -skew-x-[34deg] bg-[linear-gradient(125deg,rgba(24,53,119,0.28),rgba(56,86,172,0.52)_42%,rgba(7,16,40,0.48))] shadow-[-58px_0_130px_rgba(12,22,55,0.56)]" />
        <div className="hero-3d-lines absolute bottom-[-30%] left-[38%] h-[58%] w-[64%] -skew-x-[34deg] bg-[linear-gradient(125deg,rgba(70,92,196,0.3),rgba(27,55,125,0.42),rgba(6,13,31,0.42))] shadow-[-42px_-42px_100px_rgba(72,106,255,0.2)]" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.18),transparent_30%,transparent_65%,rgba(2,6,23,0.38))]" />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        animate={{ backgroundPosition: ["0px 0px", "160px 0px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.7) 0, transparent 18%, transparent 82%, rgba(255,255,255,0.7) 100%)",
          backgroundSize: "220px 100%",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="hero-copy-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_14px_40px_rgba(8,15,30,0.45)] backdrop-blur-xl"
        >
          <Zap className="h-3.5 w-3.5 text-[#7dd3fc]" />
          AI-Powered Sales Outreach Platform
        </motion.div>

        <div className="mt-8">
          {headlineLines.map((line, lineIndex) => (
            <div
              key={line}
              className="hero-line-reveal overflow-hidden pb-3"
              style={{ opacity: 0 }}
            >
              <h1
                className={`text-balance text-[clamp(2.5rem,6vw,4.6rem)] font-black leading-[0.9] tracking-[-0.05em] ${
                  lineIndex === 0 ? "text-white/95" : "text-white"
                }`}
              >
                <span
                  className={`headline-shimmer inline-block bg-[length:200%_100%] bg-clip-text text-transparent ${
                    lineIndex === 0
                      ? "bg-[linear-gradient(90deg,#ffffff_0%,#9bd7ff_22%,#c4b5fd_48%,#ffffff_74%,#9bd7ff_100%)]"
                      : "bg-[linear-gradient(90deg,#dbeafe_0%,#ffffff_30%,#ffffff_56%,#c4b5fd_78%,#dbeafe_100%)]"
                  }`}
                >
                  {line}
                </span>
              </h1>
            </div>
          ))}
        </div>

        <p className="hero-copy-fade mt-5 max-w-2xl text-sm leading-7 text-white/290 sm:text-base">
          AI-powered multichannel outreach across email, LinkedIn, and calls
          <br className="hidden sm:block" /> all in one intelligent platform.
        </p>

        <div className="hero-copy-fade mt-10 flex w-full max-w-[360px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#8fb4ff]/20 bg-white px-7 text-sm font-bold text-[#07111f] shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7fbff]"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#cta"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] px-7 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
          >
            Book Demo
          </a>
        </div>

        <div className="hero-copy-fade mt-16 grid w-full max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-5 text-center">
              <div className="text-2xl font-black leading-none text-white sm:text-3xl">
                {stat.value}
              </div>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
