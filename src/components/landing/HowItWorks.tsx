"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Bot,
  CalendarCheck,
  CheckCircle2,
  Database,
  Linkedin,
  Mail,
  Phone,
  Search,
  UploadCloud,
} from "lucide-react";

const steps = [
  {
    title: "Import or Find Leads Instantly",
    desc: "Upload your own data or discover verified contacts and companies using the built-in enrichment engine.",
    icons: [UploadCloud, Search, Database],
    badgeClass: "bg-sky-100 text-sky-600",
  },
  {
    title: "Create Multichannel Sequences",
    desc: "Design outreach flows that blend emails, LinkedIn messages, and calls - perfectly timed for every timezone.",
    icons: [Mail, Linkedin, Phone],
    badgeClass: "bg-blue-100 text-blue-600",
    featured: true,
  },
  {
    title: "Let AI Handle the Rest",
    desc: "AI manages follow-ups, tracks replies, pauses campaigns after meetings, and suggests the next best action automatically.",
    icons: [Bot, CalendarCheck, CheckCircle2],
    badgeClass: "bg-violet-100 text-violet-600",
  },
];

const infographicCards = [
  { left: "0%", top: "3%", width: "36%", height: "23%", radius: "24px", delay: 0 },
  { left: "40%", top: "5%", width: "47%", height: "25%", radius: "24px", delay: 0.12 },
  { left: "81%", top: "0%", width: "17%", height: "13%", radius: "16px", delay: 0.24 },
  { left: "8%", top: "37%", width: "62%", height: "26%", radius: "22px", delay: 0.36 },
  { left: "7%", top: "68%", width: "50%", height: "25%", radius: "22px", delay: 0.48 },
  { left: "61%", top: "68%", width: "30%", height: "27%", radius: "22px", delay: 0.6 },
  { left: "29%", top: "89%", width: "19%", height: "10%", radius: "14px", delay: 0.72 },
  { left: "89%", top: "80%", width: "10%", height: "18%", radius: "14px", delay: 0.84 },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-17">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-sky-50/70 to-white" />
      <div className="relative mx-auto max-w-7xl px-12">
        {/* Two-column layout: image left, heading right */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative w-full md:w-1/2 mt-8 md:mt-12">
            <div className="relative h-auto w-full max-w-lg mx-auto md:max-w-full">
              <Image
                src="/features/how-it-works-infographic.png"
                alt="How It Works - From Prospect to Pipeline"
                width={887}
                height={732}
                sizes="(min-width: 1024px) 500px, calc(100vw - 32px)"
                className="h-auto w-full rounded-[28px] object-contain scale-105"
                unoptimized
                priority
              />
              {infographicCards.map((card, idx) => (
                <motion.span
                  key={`${card.left}-${card.top}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute border border-white/80 shadow-[0_18px_48px_-30px_rgba(102,85,255,0.72)]"
                  style={{
                    left: card.left,
                    top: card.top,
                    width: card.width,
                    height: card.height,
                    borderRadius: card.radius,
                  }}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.18, 0.36, 0.18],
                    boxShadow: [
                      "0 18px 48px -34px rgba(102,85,255,0.28)",
                      "0 24px 58px -28px rgba(102,85,255,0.52)",
                      "0 18px 48px -34px rgba(102,85,255,0.28)",
                    ],
                  }}
                  transition={{
                    duration: 3.2,
                    delay: card.delay + idx * 0.05,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-left">
              <motion.div
                className="flex items-center gap-3 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="h-px w-8 bg-blue-600" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
                  How it works
                </p>
                <span className="h-px w-8 bg-blue-600" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-[#0f1f47]">From prospect to </span>
                <span className="text-[#0f1f47]">pipeline</span>
              </motion.h3>
              <motion.p
                className="mt-3 text-sm leading-relaxed text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                A consistently growing pipeline with less manual work.
              </motion.p>
              <motion.p
                className="mt-2 text-sm leading-relaxed text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Our AI-powered platform automates lead generation, multichannel outreach, and
                follow-ups so you can focus on closing deals.
              </motion.p>
              <motion.p
                className="mt-2 text-sm leading-relaxed text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Smart sequencing, timezone optimization, and real-time reply detection ensure every
                prospect gets the right message at the right time.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Three cards section */}
        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                y: -16,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className={`group relative z-0 flex min-h-[240px] flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-56px_rgba(15,42,86,0.45)] ${
                step.featured
                  ? "md:-translate-y-4 md:shadow-[0_38px_110px_-50px_rgba(37,99,235,0.42)]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className={`flex h-9 w-9 items-center justify-center ${step.badgeClass}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.icons.slice(0, 1).map((Icon) => (
                    <Icon key={step.title} className="h-4 w-4" />
                  ))}
                </motion.span>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="text-base font-bold leading-snug text-[#0f2a56]">{step.title}</h3>
                <p className="mt-4 text-xs leading-6 text-slate-600">{step.desc}</p>
              </div>

              <div className="mt-auto pt-6">
                <div className="mb-4 flex gap-2">
                  {step.icons.map((Icon, iconIndex) => (
                    <motion.span
                      key={`${step.title}-${iconIndex}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-[#535fb1]"
                      whileHover={{ y: -4, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  className="inline-flex cursor-pointer items-center rounded-lg border border-[#0f1f47] bg-[#0f1f47] px-4 py-2 text-xs font-semibold text-white shadow-[0_14px_28px_-18px_rgba(15,31,71,0.8)] transition duration-300 hover:border-[#172033] hover:bg-[#172033] hover:shadow-[0_18px_36px_-16px_rgba(15,31,71,0.9)]"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn more
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
