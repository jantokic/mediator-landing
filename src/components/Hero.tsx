import Link from "next/link";
import DemoWindow from "./DemoWindow";
import LiquidGlass from "./LiquidGlass";

const DOWNLOAD_URL =
  "https://github.com/jantokic/codecouncil/releases/download/v0.3.0/codecouncil-0.3.0-arm64.dmg";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip">
      {/* Abstract generative background */}
      <LiquidGlass />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 pt-44 pb-12 text-center">
        {/* Open Beta badge */}
        <div className="mb-10 flex justify-center">
          <span className="badge">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-glow" />
            Open Beta
          </span>
        </div>

        {/* MASSIVE heading — the visual anchor */}
        <h1
          className="hero-heading mx-auto max-w-[950px] text-[clamp(44px,8vw,88px)] font-bold leading-[0.92] tracking-[-0.04em] mb-8"
          style={{ color: "#EEEEF2" }}
        >
          Claude Code, but{" "}
          <br className="max-sm:hidden" />
          <span className="accent-serif text-[1.1em] tracking-[-0.02em]">
            multiplayer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-[500px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-muted">
          Shared AI coding sessions where your whole team sees the same
          context, in real time. No more isolated sessions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:mx-auto max-sm:max-w-[300px]">
          <Link href={DOWNLOAD_URL} className="btn-pill btn-primary text-[15px] px-7 py-3">
            Download for macOS
            <svg
              width="15"
              height="15"
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
            className="btn-pill btn-secondary text-[15px] px-7 py-3"
          >
            View on GitHub
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex items-center justify-center gap-5 text-[13px] text-muted-2">
          <span className="flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            Open source
          </span>
          <span className="h-3 w-px bg-white/[0.1]" />
          <span className="flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
            Built for teams
          </span>
          <span className="h-3 w-px bg-white/[0.1]" />
          <span className="flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
            macOS native
          </span>
        </div>
      </div>

      {/* Demo window — the visual proof */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 mt-8 pb-16">
        <DemoWindow />
      </div>
    </section>
  );
}
