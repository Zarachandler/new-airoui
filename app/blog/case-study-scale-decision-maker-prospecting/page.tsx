import { Footer } from "@/components/landing/Footer";
import { Nav } from "@/components/landing/Nav";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Decision Maker Prospecting Case Study | 360Airo Blog",
  description:
    "A long-form case study on scaling decision-maker prospecting from 10 to 100+ accounts with stronger data, sending, deliverability, and reply workflows.",
};

const toc = [
  { label: "Overview", href: "#overview" },
  { label: "Customer story: scaling outreach without adding headcount", href: "#customer-story" },
  { label: "The challenge: manual prospecting at 10 accounts", href: "#challenge" },
  { label: "Time spent on initial 10 accounts", href: "#time-spent", child: true },
  { label: "Inaccurate contact information", href: "#bad-data", child: true },
  { label: "Rep workflow bottlenecks", href: "#workflow-bottlenecks", child: true },
  { label: "Limitations of initial prospecting strategies", href: "#limitations" },
  { label: "Achieving monthly meeting targets", href: "#meeting-targets", child: true },
  { label: "Uncovering coverage gaps", href: "#coverage-gaps", child: true },
  { label: "Initial rep throughput challenges", href: "#throughput", child: true },
  { label: "Strategy: new tools and optimized workflows", href: "#strategy" },
  { label: "Optimizing your prospecting tech stack", href: "#tech-stack", child: true },
  { label: "Crafting repeatable prospecting flows", href: "#flows", child: true },
  { label: "Preventing email deliverability drops", href: "#deliverability", child: true },
  { label: "Ensuring consistent prospecting playbooks", href: "#playbooks" },
  { label: "Reducing rep ramp time to productivity", href: "#ramp" },
  { label: "Optimizing outreach for 100+ accounts", href: "#optimize" },
  { label: "Key learnings for future prospecting", href: "#learnings" },
  { label: "FAQs", href: "#faqs" },
  { label: "Key terms glossary", href: "#glossary" },
  { label: "Read next", href: "#read-next" },
];

const comparisonRows = [
  ["Buying committee size", "2-4 stakeholders", "5-8 contacts across 3+ roles"],
  ["Sales cycle", "30-90 days", "Up to 18 months"],
  ["Data sourcing", "Title matching, primary owner", "Technical, finance, and operational coverage"],
  ["Personalization", "Role-based messaging", "Role-specific by committee position"],
  ["Required touchpoints", "8+ touches", "Coordinated touches per stakeholder"],
];

const checklist = [
  "Secondary domains registered and verified with SPF, DKIM, and DMARC",
  "2-5 inboxes connected per domain with warmup active",
  "Inbox placement test passed before first campaign launch",
  "Contacts verified and bounce rate target set below 2%",
  "Sequence templates approved by the team lead",
  "A/B test variants prepared for subject lines and opening lines",
  "Reply inbox configured for centralized management",
  "CRM integration connected and tested with a dummy lead",
  "Send cap set at 30 per inbox per day",
  "Placement test schedule configured",
];

const faqItems = [
  {
    question: "How long does it take to scale from 10 to 100+ accounts?",
    answer:
      "Plan for at least four weeks before full-volume sending on new domains. Week one is authentication and warmup, weeks two and three are phased tests, and week four is where volume can increase while performance is monitored closely.",
  },
  {
    question: "What tools do sales leaders need to scale decision maker outreach?",
    answer:
      "The core stack is verified lead data, a multi-inbox sending system with warmup, and a unified reply inbox. The goal is to keep list quality, sending health, and reply routing inside one repeatable workflow.",
  },
  {
    question: "How do you ensure consistent primary inbox placement at scale?",
    answer:
      "Authenticate every domain, keep warmup running, cap sends per inbox, verify contacts before upload, and run inbox placement tests weekly. If spam placement rises, reduce volume and clean the list before resuming.",
  },
  {
    question: "What team structure works best for scaling decision maker prospecting?",
    answer:
      "A small SDR team can cover far more accounts when each rep has warmed sending capacity, shared rules for deliverability, and a centralized process for routing positive replies.",
  },
];

const glossary = [
  ["Enterprise prospecting", "Identifying and engaging large-company buyers across multi-stakeholder buying committees."],
  ["Domain health", "Inbox-provider trust signals shaped by engagement, bounce rates, authentication, and spam complaints."],
  ["Primary inbox", "The main inbox placement area where messages are most likely to be seen and answered."],
  ["Unified inbox", "A shared view of replies from connected sending accounts, campaigns, and workspaces."],
];

function Section({
  id,
  title,
  children,
}: Readonly<{ id: string; title: string; children: React.ReactNode }>) {
  return (
    <section id={id} className="mt-10 scroll-mt-8">
      <h2 className="text-xl font-bold leading-tight text-[#061534]">{title}</h2>
      <div className="mt-4 space-y-4 text-[13px] leading-7 text-black">{children}</div>
    </section>
  );
}

function Subsection({
  id,
  title,
  children,
}: Readonly<{ id: string; title: string; children: React.ReactNode }>) {
  return (
    <section id={id} className="mt-7 scroll-mt-8">
      <h3 className="text-base font-bold leading-tight text-black">{title}</h3>
      <div className="mt-3 space-y-4 text-[13px] leading-7 text-black">{children}</div>
    </section>
  );
}

export default function DecisionMakerProspectingPage() {
  return (
    <div className="min-h-screen bg-white text-[#061534]">
      <Nav />
      <main>
        <section className="bg-white px-4 pb-8 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#2f7df6]"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Blog
            </Link>
            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wide text-[#5f6978]">
                Decision Maker Prospecting Case Study
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#061534]/12 bg-white px-3 py-1.5 text-[11px] font-bold text-[#2f7df6]">
                <Sparkles className="h-3.5 w-3.5" />
                Cold Email
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#5f6978]">
                Title
              </p>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-[#061534] sm:text-4xl">
                How sales leaders scaled decision-maker prospecting from 10 to 100+ accounts: case study
              </h1>
              <p className="mt-5 text-[13px] leading-7 text-black">
                Decision maker prospecting case study shows how sales leaders scaled from 10 to
                100+ accounts using infrastructure over headcount. You will see the warmup plans,
                sending limits, and reply triage systems that reduce manual drag while improving
                meeting economics.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#5f6978]">
                <span>Author: Hans Dekker</span>
                <span className="h-1 w-1 rounded-full bg-[#2f7df6]" />
                <span>Date: May 25, 2026</span>
                <span className="h-1 w-1 rounded-full bg-[#2f7df6]" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" />
                  Read time: 14 min read
                </span>
              </div>
            </div>
            <div className="relative mt-9 aspect-[16/7] overflow-hidden rounded-[18px] bg-[#f5faff]">
              <Image
                src="/features/how-it-works-infographic.png"
                alt="Decision maker prospecting case study"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 64rem, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[280px_minmax(0,720px)]">
            <aside className="block">
              <div className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto lg:pr-4">
                <p className="text-xs font-medium uppercase tracking-wide text-[#6b7280]">
                  Table of Contents
                </p>
                <nav className="mt-6 space-y-5">
                  {toc.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`block border-l text-[13px] leading-5 transition hover:text-[#061534] ${
                        item.child
                          ? "ml-0 border-[#e5e7eb] py-0 pl-6 text-[#6a6a6a]"
                          : "border-transparent pl-0 font-medium text-[#666]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0">
              <p className="text-xs font-medium text-[#6b7280]">Updated May 25, 2026</p>
              <h2 id="overview" className="mt-5 scroll-mt-8 text-xl font-bold leading-tight text-[#061534]">
                Overview
              </h2>

              <div className="mt-5 border-l-2 border-[#2f7df6] bg-[#f8fbff] px-5 py-4">
                <p className="text-sm font-bold text-black">TL;DR:</p>
                <p className="mt-3 text-[13px] leading-7 text-black">
                  Scaling decision maker prospecting past 10 accounts breaks manual workflows
                  quickly. Teams that reach 100+ accounts without burning domains stop adding
                  headcount as the only answer and start building infrastructure: warmed sending
                  accounts, verified contact data, dedicated warmup, and centralized reply triage.
                </p>
              </div>

              <p className="mt-6 text-[13px] leading-7 text-black">
                Adding more SDRs is often the most expensive way to scale decision-maker
                prospecting. Domain health, list quality, and sending infrastructure determine
                success at scale far more than raw activity. The sections below break down the
                workflows, ramp plans, and deliverability systems that help sales leaders multiply
                pipeline without multiplying manual work.
              </p>

              <Section id="customer-story" title="Customer story: scaling outreach without adding headcount">
                <p>
                  Before consolidating outreach into a multi-inbox workflow, reps were managing
                  sends manually across separate tools with no centralized reply view. Ramp times
                  were slow, follow-up was inconsistent, and leaders could not reliably see per-rep
                  output.
                </p>
                <blockquote className="border-l-2 border-[#061534] pl-4 text-[13px] italic leading-7 text-black">
                  "Cold outreach becomes operationally simple at scale when campaign setup,
                  warmup, sending limits, and reply management live in the same workflow."
                </blockquote>
                <p>
                  This pattern, operationally simple outreach at scale with inbox placement
                  protected at higher volumes, is the model this playbook is built on.
                </p>
              </Section> 

              <Section id="challenge" title="The challenge: manual prospecting at 10 accounts">
                <p>
                  Enterprise prospecting is structurally different from SMB prospecting. The same
                  rep workflow that works at 10 accounts breaks down as account count grows.
                </p>
                <div className="overflow-hidden rounded-lg border border-[#e5e7eb]">
                  <table className="w-full text-left text-[12px]">
                    <thead className="bg-[#f8fafc] text-black">
                      <tr>
                        <th className="px-4 py-3 font-bold">Dimension</th>
                        <th className="px-4 py-3 font-bold">SMB prospecting</th>
                        <th className="px-4 py-3 font-bold">Enterprise prospecting</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb]">
                      {comparisonRows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell) => (
                            <td key={cell} className="px-4 py-3 text-black">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  Manual management works at low volume. Once account count grows past what a rep
                  can track without a system, volume only scales by adding warmed inboxes and
                  stronger process, not more hours.
                </p>
              </Section>

              <Subsection id="time-spent" title="Time spent on initial 10 accounts">
                <p>
                  Manual lead research consumes a large share of each rep's week, covering LinkedIn
                  searches, email verification, CRM entry, and sequence setup. Every hour spent on
                  research is an hour not spent on live conversations.
                </p>
              </Subsection>

              <Subsection id="bad-data" title="Inaccurate contact information">
                <p>
                  Unverified contact lists damage sender reputation through bounces. At scale, that
                  damage is cumulative, and recovery takes weeks once a domain earns poor standing
                  with inbox providers.
                </p>
              </Subsection>

              <Subsection id="workflow-bottlenecks" title="Rep workflow bottlenecks">
                <p>
                  Context switching between a lead database, a sequencing tool, and a CRM fragments
                  rep focus. A unified workflow changes the output equation by reducing wasted
                  motion before a single email goes out.
                </p>
              </Subsection>

              <Section id="limitations" title="Limitations of initial prospecting strategies">
                <p>
                  Manual prospecting works until volume breaks it. The limitations below compound
                  as account count climbs and point to the same fix: infrastructure that scales
                  independently of headcount.
                </p>  
              </Section>

              <Subsection id="meeting-targets" title="Achieving monthly meeting targets">
                <p>
                  At 2-4 qualified meetings per rep per month, a team of five books roughly 10-20
                  meetings. If the target is 30-50 SQLs per quarter, manual methods put the team
                  structurally behind from day one.
                </p>
              </Subsection>

              <Subsection id="coverage-gaps" title="Uncovering coverage gaps">
                <p>
                  Most reps reach one or two stakeholders because database tools return contacts by
                  title filter. That misses operational leaders, technical evaluators, and finance
                  stakeholders who influence the final decision.
                </p>
              </Subsection>

              <Subsection id="throughput" title="Initial rep throughput challenges">
                <p>
                  Per-seat software models can penalize scale. Adding another rep may add cost,
                  onboarding delay, and another period where the team is not yet productive.
                </p>
              </Subsection>

              <Section id="strategy" title="Strategy: new tools and optimized workflows">
                <p>
                  New tools alone will not fix broken workflows. The shift from manual to scaled
                  prospecting requires the right infrastructure and the processes to run it
                  consistently.
                </p>
              </Section>

              <Subsection id="tech-stack" title="Optimizing your prospecting tech stack">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Data layer:</strong> verified contact data at volume so reps start with
                    clean contacts instead of raw exports.
                  </li>
                  <li>
                    <strong>Sending layer:</strong> warmed email accounts with clear sending limits
                    to distribute volume and protect domain reputation.
                  </li>
                  <li>
                    <strong>Reply layer:</strong> centralized reply triage so no qualified response
                    gets missed.
                  </li>
                </ul>
              </Subsection>

              <Subsection id="flows" title="Crafting repeatable prospecting flows">
                <p>
                  Repeatable flows beat individual rep creativity at scale. The strongest sequences
                  use one specific pain point, one proof point, and one low-friction ask.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Multi-thread outreach across 3-5 stakeholders per account.</li>
                  <li>Signal-based targeting from hiring, funding, or tech-stack changes.</li>
                  <li>Subject line and opening line tests before scaling.</li>
                  <li>Secondary sending domains to protect the primary brand domain.</li>
                  <li>Automated follow-up sequences so interest is not lost after the first touch.</li>
                </ul>
              </Subsection>

              <Subsection id="deliverability" title="Preventing email deliverability drops">
                <p>
                  Scaling outreach volume without scaling warmup infrastructure causes
                  deliverability to drop fast. Lost leads, damaged reputation, and spam placement
                  can erase the gains from better copy.
                </p>
                <p>
                  The practical fix is disciplined sending: cap each inbox, add warmed inboxes to
                  increase total volume, keep warmup running, authenticate every domain, and verify
                  every contact before launch.
                </p>
              </Subsection>

              <Section id="playbooks" title="Ensuring consistent prospecting playbooks">
                <p>
                  Consistency breaks down when reps improvise at scale. Playbooks get adopted when
                  they reduce decision fatigue: pre-approved subject lines, message templates by
                  persona, objection handling scripts, and clear quality checks.
                </p>
                <Subsection id="ramp" title="Reducing rep ramp time to productivity">
                  <p>
                    A structured ramp protects inbox placement and shortens time to first meeting.
                    Week one is infrastructure, weeks two and three are phased test sequences, and
                    week four moves toward scaled production output.
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Week 1: authenticate domains, connect inboxes, activate warmup.</li>
                    <li>Weeks 2-3: launch small tests and monitor placement daily.</li>
                    <li>Week 4: increase volume while keeping bounce and placement thresholds tight.</li>
                  </ul>
                </Subsection>
              </Section>

              <Section id="optimize" title="Optimizing outreach for 100+ accounts"> 
                <p>
                  At 100+ accounts, volume is no longer the only constraint. The bottleneck shifts
                  to conversion efficiency, clean handoffs between SDRs and AEs, and transparent
                  cost-per-meeting economics.
                </p>
                <div className="overflow-hidden rounded-lg border border-[#e5e7eb]">
                  <table className="w-full text-left text-[12px]">
                    <thead className="bg-[#f8fafc] text-black">
                      <tr>
                        <th className="px-4 py-3 font-bold">Metric</th>
                        <th className="px-4 py-3 font-bold">Headcount scaling</th>
                        <th className="px-4 py-3 font-bold">Infrastructure scaling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb]">
                      {[
                        ["Annual tool cost", "Compounds by seat", "Predictable system cost"],
                        ["Meetings booked", "Limited by manual throughput", "Grows with warmed capacity"],
                        ["Cost per meeting", "Often rises with headcount", "Falls as workflow repeats"],
                      ].map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell) => (
                            <td key={cell} className="px-4 py-3 text-black">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section id="learnings" title="Key learnings for future prospecting">
                <p>
                  Teams that sustain 100+ account programs verify every contact, optimize send
                  timing, and invest in enablement before reps send at scale. These habits separate
                  programs that grow pipeline consistently from those that stall after launch.
                </p>
                <h3 className="mt-6 text-base font-bold text-black">Pre-launch prospecting checklist</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-7 text-black">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="faqs" title="FAQs">
                {faqItems.map((item) => (
                  <div key={item.question} className="mt-6">
                    <h3 className="text-base font-bold text-black">{item.question}</h3>
                    <p className="mt-3 text-[13px] leading-7 text-black">{item.answer}</p>
                  </div>
                ))}
              </Section>

              <Section id="glossary" title="Key terms glossary">
                <div className="space-y-4">
                  {glossary.map(([term, definition]) => (
                    <p key={term}>
                      <strong>{term}:</strong> {definition}
                    </p>
                  ))}
                </div>
              </Section>

              <Section id="read-next" title="Read next">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Lead Generation Guide: How to Build High-Quality B2B Lead Lists",
                    "Best Email Tracking Services for Agencies",
                    "AI integrations: connect, automate, scale your outreach",
                  ].map((title) => (
                    <Link
                      key={title}
                      href="/blog"
                      className="rounded-lg border border-[#e5e7eb] p-4 text-[12px] font-bold leading-5 text-[#061534] transition hover:border-[#2f7df6]"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </Section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
