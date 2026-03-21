import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Comparison from "@/components/Comparison";
import OpenSource from "@/components/OpenSource";
import Pricing from "@/components/Pricing";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PainPoints />

      {/* Gradient divider into features */}
      <div className="mx-auto max-w-[800px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <Features />

      {/* Section glow between features and models */}
      <div className="relative h-32 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-accent/[0.08] blur-[100px]" />
      </div>

      <Models />
      <Comparison />
      <OpenSource />
      <Pricing />
      <Quote />
      <CTA />
      <Footer />
    </>
  );
}
