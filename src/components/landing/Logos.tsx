export function Logos() {
  const items = [
    { name: "HubSpot", src: "https://cdn.simpleicons.org/hubspot/FF7A59" },
    { name: "Salesforce", src: "/integrations/salesforce-logo.png", logoClass: "h-10 max-w-20" },
    { name: "Pipedrive", src: "/integrations/pipedrive-logo.png", logoClass: "h-9 max-w-28" },
    { name: "Zoho", src: "/integrations/zoho-logo.png", logoClass: "h-10 max-w-28" },
    { name: "Slack", src: "/integrations/slack-logo.png", logoClass: "h-10 max-w-14" },
    { name: "Gmail", src: "/integrations/gmail-logo.png", logoClass: "h-10 max-w-16" },
    { name: "Outlook", src: "/integrations/outlook-logo.png", logoClass: "h-10 max-w-16" },
    { name: "Zapier", src: "https://cdn.simpleicons.org/zapier/FF4A00" },
  ];
  const row = [...items, ...items];

  return (
    <section className="hero-surface-bg border-y border-slate-100 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white">
          Integrate with the tools you already use
        </p>
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-4 gap-3 sm:grid-cols-8">
          {items.map((item) => (
            <span
              key={item.name}
              className="flex h-14 items-center justify-center rounded-xl border border-slate-100 bg-white p-2"
              title={item.name}
            >
              <img
                src={item.src}
                alt={`${item.name} logo`}
                className={`${item.logoClass ?? "h-9 max-w-9"} w-auto object-contain`}
              />
            </span>
          ))}
        </div>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex w-max gap-6" style={{ animation: "marquee 30s linear infinite" }}>
            {row.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex h-16 w-28 items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 transition hover:-translate-y-0.5"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={`${item.name} logo`}
                  className={`${item.logoClass ?? "h-10 max-w-10"} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
