"use client";

import Link from "next/link";
import { RevealWrapper } from "./Features";

const DOWNLOAD_URL =
  "https://github.com/jantokic/codecouncil/releases/download/v0.3.0/codecouncil-0.3.0-arm64.dmg";

export default function CTA() {
  return (
    <section className="relative px-6 py-36 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Massive ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full bg-accent/[0.15] blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[600px] h-[300px] rounded-full bg-[#6366f1]/[0.2] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/[0.12] blur-[60px]" />
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <RevealWrapper>
        <div className="relative z-10 text-center">
          <h2 className="mx-auto max-w-[800px] text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-tight">
            Stop re-explaining your codebase{" "}
            <span className="accent-serif">to a fresh AI.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[540px] text-lg text-muted leading-relaxed">
            Give your whole team a shared AI coding session — with full context, persistent memory, and multiplayer collaboration from day one.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={DOWNLOAD_URL}
              className="btn-pill btn-accent text-base px-10 py-3.5 font-medium"
            >
              Download for macOS
              <svg
                width="18"
                height="18"
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
              href="#pricing"
              className="btn-pill btn-secondary text-base px-10 py-3.5 font-medium"
            >
              Join Pro Waitlist
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-2">
            Free forever for solo use and small teams. No credit card required.
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}
