"use client";

import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="hero-section-bg relative overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="text-xs font-semibold text-white/80">Pricing</span>
          </div>

          <h2 className="text-4xl font-bold text-white md:text-2xl lg:text-3xl">
            {/* CHANGED: Moved "With" to this top line */}
            <span className="mb-1 block">Unlock The Power Of AI </span>

            {/* CHANGED: Only the Logo and "Airo" are on this bottom line */}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span
                aria-hidden="true"
                className="relative inline-flex h-12 w-12 shrink-0 overflow-hidden md:h-14 md:w-14"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={2048}
                  height={1152}
                  className="absolute -left-9 -top-12 h-auto w-[240px] max-w-none "
                />
              </span>
            </span>
          </h2>

          <p className="mt-3 text-base text-white/70">
            Get started now to access exclusive templates and elevate your projects to the next
            level.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <motion.a
              href="#cta"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#061534] transition-all hover:bg-white/90"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#pricing"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.14 }}
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/20"
            >
              See Pricing
            </motion.a>
          </div>
        </div>

        {/* Subheading */}

        {/* Pricing Cards */}
      </div>
    </section>
  );
}
