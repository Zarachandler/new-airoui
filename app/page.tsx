import { Audience } from "@/components/landing/Audience";
// import { CTA } from "@/components/landing/CTA";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Integrations } from "@/components/landing/Integrations";
import { Logos } from "@/components/landing/Logos";
import { Nav } from "@/components/landing/Nav";
import { Pricing } from "@/components/landing/Pricing";
import { Stats } from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030711] text-foreground">
      <div className="absolute inset-0 bg-[#030711]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(81,104,255,0.26),transparent_36%),radial-gradient(circle_at_72%_58%,rgba(14,165,233,0.18),transparent_40%)]" />
      <Nav />
      <main className="relative">{/* relative for proper z-index stacking */}
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Stats />
        <Audience />
        <Integrations />
        <Testimonials />
        <Pricing />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
