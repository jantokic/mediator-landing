import Link from "next/link";
import DemoWindow from "./DemoWindow";
import LiquidGlass from "./LiquidGlass";
import Crystal from "./Crystal";

const DOWNLOAD_URL = "https://github.com/jantokic/codecouncil/releases/download/v0.3.0/codecouncil-0.3.0-arm64.dmg";

export default function Hero() {
  return (
    <section className="glow-hero overflow-x-clip text-center relative">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-36 pb-8">
        {/* Extra crystals in hero */}
        <Crystal className="left-0 top-[15%] max-md:hidden" scale={0.9} rotate={20} delay="1s" />
        <Crystal className="left-[8%] top-[75%] max-lg:hidden" scale={0.55} rotate={-30} delay="3s" sparkle={false} />
        <Crystal className="right-0 top-[5%] max-md:hidden" scale={0.65} rotate={10} delay="2s" sparkle={false} />
        <div className="mb-6">
          <span className="badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Open Beta
          </span>
        </div>

        <h1 className="hero-heading text-[clamp(36px,6.5vw,72px)] font-light leading-[1] tracking-[-1.5px] mb-6 text-[#DFDFF2]">
          Claude Code, but
          <br />
          <span className="accent-serif text-[1.2em] tracking-[-1.5px]">multiplayer</span>
        </h1>

        <p className="mx-auto mb-10 max-w-[540px] text-[clamp(16px,1.8vw,19px)] font-normal leading-relaxed text-muted">
          Shared AI coding sessions where your whole team sees the same context.
          No more isolated sessions. No more pasting outputs into&nbsp;Slack.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:mx-auto max-sm:max-w-[320px]">
          <Link
            href={DOWNLOAD_URL}
            className="btn-pill btn-primary"
          >
            Download for macOS
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </Link>
          <Link
            href="https://github.com/jantokic/codecouncil"
            className="btn-pill btn-secondary"
          >
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-muted-2">
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            Open source
          </span>
          <span className="h-3 w-px bg-white/[0.1]" />
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
            Built for teams
          </span>
          <span className="h-3 w-px bg-white/[0.1]" />
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
            macOS native
          </span>
        </div>
      </div>

      <LiquidGlass />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 -mt-20 pb-8">
        <DemoWindow />
      </div>
    </section>
  );
}
