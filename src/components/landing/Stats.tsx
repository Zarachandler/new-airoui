const stats = [
  { v: "5,000+", l: "Businesses growing pipeline daily" },
  { v: "12M+", l: "Outreach actions automated" },
  { v: "40%", l: "Increase in qualified meetings" },
  { v: "3x", l: "Faster lead response rate" },
];

export function Stats() {
  return (
    <section className="bg-white py-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.v}
              className="text-center md:border-r md:border-white/20 md:last:border-r-0"
            >
              <div className="text-2xl font-bold text-white md:text-3xl">{stat.v}</div>
              <div className="mx-auto mt-2 max-w-36 text-xs text-white/75 sm:text-sm">{stat.l}</div>
              <div className="mx-auto mt-3 flex w-16 justify-center gap-1">
                {[0, 1, 2].map((item) => (
                  <span key={item} className="h-1 w-1 rounded-full bg-white/60" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
