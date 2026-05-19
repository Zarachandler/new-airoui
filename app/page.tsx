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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
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
