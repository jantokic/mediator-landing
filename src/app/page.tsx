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
      <div className="h-20" />
      <div className="mx-auto h-px max-w-[1280px] bg-border" />
      <Features />
      <div className="mx-auto h-px max-w-[1280px] bg-border" />
      <Models />
      <div className="mx-auto h-px max-w-[1280px] bg-border" />
      <Quote />
      <div className="mx-auto h-px max-w-[1280px] bg-border" />
      <CTA />
      <Footer />
    </>
  );
}
