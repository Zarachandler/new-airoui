import logo from "@/assets/logo.png";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
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
    <footer className="relative overflow-hidden bg-[#050b20] pt-12 pb-10">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src={logo.src}
              alt="360Airo"
              width={700}
              height={84}
              className="h-45 w-auto object-contain"
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
