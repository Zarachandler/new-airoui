"use client";

import { featurePages, type FeaturePage } from "@/Features/featurePages";
import {
  Brain,
  ChevronDown,
  Database,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  "Email Warmup": <Zap className="h-5 w-5" />,
  "Domains & Emails": <Database className="h-5 w-5" />,
  "Email Campaigns": <Target className="h-5 w-5" />,
  "AI Email Generator": <Sparkles className="h-5 w-5" />,
  "Prospect CRM": <Users className="h-5 w-5" />,
  "Unified Inbox": <MessageSquare className="h-5 w-5" />,
  "Email Sequences": <Mail className="h-5 w-5" />,
  "AI Email Automation": <Brain className="h-5 w-5" />,
  "LinkedIn Automation": <Linkedin className="h-5 w-5" />,
};

export function FeaturesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="ui-button-motion group inline-flex items-center gap-1 rounded-lg px-4 py-2 text-center transition hover:bg-white/10 hover:text-white/90"
      >
        Features
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="fixed left-1/2 top-[82px] z-50 h-[650px] max-h-[calc(100vh-100px)] w-[calc(100vw-180px)] max-w-[1540px] -translate-x-1/2 overflow-y-auto rounded-b-2xl border border-slate-200 bg-white px-8 py-10 shadow-2xl shadow-slate-950/20">
          <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featurePages.map((feature: FeaturePage) => (
              <Link
                key={feature.slug}
                href={`/features/${feature.slug}`}
                onClick={() => setIsOpen(false)}
                className="group/item flex min-w-0 items-start gap-5 rounded-xl bg-white p-2 transition hover:bg-slate-50"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition group-hover/item:text-[#3b0764]">
                  {iconMap[feature.title] || <Sparkles className="h-5 w-5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start gap-2">
                    <span className="text-base font-bold leading-6 text-slate-900 transition group-hover/item:text-[#061534]">
                      {feature.title}
                    </span>
                    {feature.badge && (
                      <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-600 transition group-hover/item:border-[#061534]/20 group-hover/item:text-[#061534]">
                        {feature.badge}
                      </span>
                    )}
                  </span>
                  <span className="mt-2 block line-clamp-2 text-sm font-semibold leading-5 text-slate-500 transition group-hover/item:text-[#061534]">
                    {feature.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
