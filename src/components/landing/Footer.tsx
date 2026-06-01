"use client";

import logo from "@/assets/logo.png";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales Teams", href: "#" },
      { label: "Marketing Teams", href: "#" },
      { label: "Agencies", href: "#" },
      { label: "Founders", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help center", href: "#" },
      { label: "API docs", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="hero-section-bg relative overflow-hidden pt-12 pb-10">
      <div className="absolute inset-0 bg-[#030711]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(81,104,255,0.26),transparent_36%),radial-gradient(circle_at_72%_58%,rgba(14,165,233,0.18),transparent_40%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
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

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src={logo}
              alt="360Airo"
              width={700}
              height={84}
              className="h-45 w-auto object-contain"
              style={{ width: "auto" }}
            />
            <p className="mt-2 max-w-xs text-sm text-slate-300">
              The all-in-one AI outreach platform for LinkedIn, email, and calls. Smarter
              conversations, higher conversions.
            </p>
            <div className="mt-3 flex items-center gap-2">
              {[Linkedin, Twitter, Github, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="glass flex h-8 w-8 items-center justify-center rounded-full transition hover:text-brand"
                  aria-label="social link"
                >
                  <Icon className="h-2 w-2" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4 md:col-span-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {col.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base font-medium text-white transition hover:text-white/80"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 md:flex-row">
          <p className="text-xs text-slate-400">
            Copyright {new Date().getFullYear()} 360Airo. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-300">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              GDPR
            </a>
            <a href="#" className="transition hover:text-white">
              CAN-SPAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
