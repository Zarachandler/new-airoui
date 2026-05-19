import { featurePages, type FeaturePageSlug, getFeaturePage } from "@/Features/page";
import { Footer } from "@/components/landing/Footer";
import { Nav } from "@/components/landing/Nav";
import Link from "next/link";
import { notFound } from "next/navigation";

export function FeaturePageShell({ slug }: { slug: FeaturePageSlug }) {
  const feature = getFeaturePage(slug);

  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#061534]">
      <Nav />
      <main className="mx-auto max-w-5xl px-4 py-20">
        <Link href="/#features" className="text-sm font-semibold text-sky-600">
          Features
        </Link>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
          {feature.badge && (
            <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              {feature.badge}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-bold">{feature.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{feature.description}</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featurePages.map((item) => (
            <Link
              key={item.slug}
              href={`/features/${item.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
