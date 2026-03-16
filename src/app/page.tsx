import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Pricing from "@/components/Pricing";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div className="liquid-glass-mini" aria-hidden="true" />

      <div className="liquid-glass-section liquid-glass-section-top">
        <PainPoints />
      </div>

      <div className="mx-auto max-w-[800px] divider-glow" />

      <div className="glow-section glow-section-left liquid-glass-section">
        <Features />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <div className="glow-section glow-section-right liquid-glass-section liquid-glass-section-bottom">
        <Models />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <div className="glow-section liquid-glass-section liquid-glass-section-top">
        <Pricing />
      </div>

      <div className="mx-auto max-w-[800px] divider-glow" />

      <div className="glow-section liquid-glass-section">
        <Quote />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <CTA />
      <Footer />
    </>
  );
}
