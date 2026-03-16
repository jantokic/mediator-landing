import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div className="liquid-glass-mini" aria-hidden="true" />

      <div className="glow-section glow-section-left">
        <Features />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <div className="glow-section glow-section-right">
        <Models />
      </div>

      <div className="mx-auto max-w-[800px] divider-glow" />

      <div className="glow-section">
        <Quote />
      </div>

      <div className="liquid-glass-mini" aria-hidden="true" />

      <CTA />
      <Footer />
    </>
  );
}
