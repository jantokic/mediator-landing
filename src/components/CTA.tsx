"use client";

import Link from "next/link";
import { RevealWrapper } from "./Features";

const DOWNLOAD_URL = "https://github.com/jantokic/hivemind/releases/download/v0.1.4/mediator-0.1.4-arm64.dmg";

export default function CTA() {
  return (
    <RevealWrapper>
      <div className="relative px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[400px] h-[200px] rounded-full bg-[#6366f1]/[0.08] blur-[80px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

        <div className="relative z-10">
          <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-semibold tracking-tight">
            Stop re-explaining your codebase <span className="accent-serif">to a fresh AI.</span>
          </h2>
          <p className="mb-8 text-muted text-lg max-w-[500px] mx-auto">
            Download CodeCouncil and give your whole team a shared AI coding session — with full context, from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={DOWNLOAD_URL} className="btn-pill btn-accent text-base px-8 py-3">
              Download for macOS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Link>
            <Link href="#pricing" className="btn-pill btn-secondary text-base px-8 py-3">
              Join Pro Waitlist
            </Link>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}
