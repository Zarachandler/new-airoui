"use client";

import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Cloud, Home, Mail, Send, UsersRound, X, Zap } from "lucide-react";
import { type ReactNode } from "react";

function StaticWrap({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-[2px] shadow-xl shadow-sky-100/70">
      <div className="relative h-full rounded-[22px] bg-white">{children}</div>
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="brand-kicker">Integrations</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Your sales stack, <span className="text-gradient">working as one</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              360Airo connects the tools your team already uses, then keeps contacts, outreach,
              meetings, and CRM activity in sync automatically.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["No-code setup", "Live sync", "Clean handoff"].map((item) => (
                <span key={item} className="info-chip">
                  <span className="h-1.5 w-1.5 rounded-full data-dot" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <StaticWrap>
            <div className="relative overflow-hidden rounded-[30px] bg-white p-3 sm:p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(248,113,113,0.13),transparent_28%),radial-gradient(circle_at_72%_68%,rgba(99,102,241,0.15),transparent_34%)]" />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(6,21,52,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(6,21,52,0.09) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative grid gap-3">
                <div className="grid gap-3 md:grid-cols-[0.78fr_1fr]">
                  <StaticWrap>
                    <div className="rounded-[22px] bg-white/90 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-200">
                          <Zap className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-black leading-tight text-[#061b2d]">
                          The Problem with{" "}
                          <span className="text-rose-500">Traditional Outreach</span>
                        </h3>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          ["Too many tools.", "Juggling multiple platforms."],
                          ["Too many tabs.", "Constant switching, low focus."],
                          ["Too much wasted time.", "Manual work, slow results."],
                        ].map(([title, detail]) => (
                          <div key={title} className="flex gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                              <X className="h-3.5 w-3.5" />
                            </span>
                            <div>
                              <p className="text-xs font-black text-[#061b2d]">{title}</p>
                              <p className="text-[11px] font-semibold text-slate-500">{detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </StaticWrap>

                  <div className="relative min-h-[200px]">
                    {[
                      [
                        "left-[5%] top-0 -rotate-[-8deg]",
                        Mail,
                        "Emails",
                        "Manual follow-ups get missed.",
                      ],
                      [
                        "right-[4%] top-2 rotate-[8deg]",
                        UsersRound,
                        "LinkedIn Outreach",
                        "Disconnected conversations.",
                      ],
                      [
                        "left-0 bottom-5 rotate-[8deg]",
                        Cloud,
                        "CRM Syncing",
                        "Data scattered across systems.",
                      ],
                      [
                        "right-0 bottom-7 -rotate-[6deg]",
                        BarChart3,
                        "Analytics Tracking",
                        "No clear insights.",
                      ],
                    ].map(([position, Icon, title, detail]) => (
                      <motion.div
                        key={title as string}
                        className={`absolute ${position} w-[148px] rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl shadow-slate-200/80`}
                        whileHover={{ y: -3, scale: 1.02, borderColor: "#061534" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-rose-500 shadow-md">
                          <X className="h-3 w-3" />
                        </span>
                        <div className="flex gap-2">
                          <Icon className="h-7 w-7 shrink-0 text-brand" />
                          <div>
                            <p className="text-[10px] font-black text-[#061b2d]">
                              {title as string}
                            </p>
                            <p className="mt-1 text-[9px] font-semibold leading-3 text-slate-500">
                              {detail as string}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-rose-500 shadow-xl shadow-rose-100">
                      <UsersRound className="h-7 w-7" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#253a7d] shadow-xl shadow-[#253a7d]/20">
                    <motion.span
                      animate={{ x: [0, 10, 0], y: [0, -7, 0], opacity: [1, 0.72, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Send className="h-5 w-5 rotate-90" />
                    </motion.span>
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-[0.7fr_1.35fr_0.65fr]">
                  <StaticWrap>
                    <div className="rounded-[22px] bg-white/95 p-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#253a7d] text-white shadow-lg shadow-[#253a7d]/20">
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                        <h3 className="text-base font-black leading-tight text-[#061b2d]">
                          One Platform. <span className="text-[#253a7d]">One Workflow.</span>
                        </h3>
                      </div>
                      <p className="mt-3 text-xs font-semibold leading-5 text-slate-600">
                        Manage your entire outreach process with smarter automation and personalized
                        engagement.
                      </p>
                    </div>
                  </StaticWrap>

                  <StaticWrap>
                    <div className="overflow-hidden rounded-[22px] bg-white">
                      <div className="grid grid-cols-[48px_1fr]">
                        <div className="flex flex-col items-center gap-3 bg-[#253a7d] py-3 text-white">
                          {[Home, UsersRound, Send, Mail, BarChart3].map((Icon, index) => (
                            <Icon key={index} className="h-4 w-4" />
                          ))}
                        </div>
                        <div className="p-3">
                          <div className="grid grid-cols-4 gap-2 text-center">
                            {[
                              ["Discover", UsersRound],
                              ["Engage", Mail],
                              ["Automate", Send],
                              ["Close", CheckCircle2],
                            ].map(([label, Icon]) => (
                              <div
                                key={label as string}
                                className="rounded-xl border border-slate-100 p-2"
                              >
                                <Icon className="mx-auto h-4 w-4 text-[#253a7d]" />
                                <p className="mt-2 text-[10px] font-black text-[#061b2d]">
                                  {label as string}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                            {[
                              ["Emails Sent", "12.4K"],
                              ["Reply Rate", "32%"],
                              ["Meetings", "248"],
                              ["Revenue", "$2.4M"],
                            ].map(([label, value]) => (
                              <div key={label} className="rounded-xl bg-[#eaf1ff] p-2">
                                <p className="text-[9px] font-bold text-slate-500">{label}</p>
                                <p className="mt-1 text-sm font-black text-[#061b2d]">{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaticWrap>

                  <StaticWrap>
                    <div className="rounded-[22px] bg-white/95 p-3">
                      {["Save Time", "Stay Organized", "Drive Growth"].map((item) => (
                        <div key={item} className="mb-3 last:mb-0">
                          <p className="text-xs font-black text-[#061b2d]">{item}</p>
                          <p className="text-[10px] font-semibold leading-4 text-slate-500">
                            Clear alerts, cleaner handoffs, better insights.
                          </p>
                        </div>
                      ))}
                    </div>
                  </StaticWrap>
                </div>

                <StaticWrap>
                  <div className="rounded-full bg-white px-6 py-2.5 text-center text-sm font-black text-[#253a7d]">
                    Smarter Outreach. Better Conversations. More Revenue.
                  </div>
                </StaticWrap>
              </div>
            </div>
          </StaticWrap>
        </div>
      </div>
    </section>
  );
}
