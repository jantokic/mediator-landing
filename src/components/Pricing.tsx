"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealWrapper } from "./Features";

const DOWNLOAD_URL =
  "https://github.com/jantokic/codecouncil/releases/download/v0.3.0/codecouncil-0.3.0-arm64.dmg";

const check = (
  <svg
    className="w-4 h-4 text-emerald-400 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const checkMuted = (
  <svg
    className="w-4 h-4 text-muted-2 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const freeFeatures = [
  "Unlimited solo sessions",
  "All 100+ AI models (BYOK)",
  "4 built-in personas + custom",
  "MCP integration",
  "Discussion mode with auto-convergence",
  "Up to 3 team members",
  "Local session history (7 days)",
  "Menu bar app",
];

const proFeatures = [
  { text: "Everything in Free, plus:", bold: true },
  { text: "Unlimited team members" },
  { text: "Cloud-synced persistent sessions" },
  { text: "Session handoff between members" },
  { text: "Full session history + search" },
  { text: "Role-based access (execute / observe / suggest)" },
  { text: "Decision audit trail" },
  { text: "Web & mobile access", soon: true },
  { text: "Priority support" },
];

export default function Pricing() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="pricing" className="relative px-6 py-32">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <RevealWrapper>
          <div className="text-center mb-20">
            <span className="badge mx-auto">Pricing</span>
            <h2 className="mt-6 text-[clamp(34px,5.5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Start free, scale with{" "}
              <span className="accent-serif">your team</span>
            </h2>
            <p className="mt-5 text-lg text-muted max-w-[520px] mx-auto leading-relaxed">
              Everything you need for solo use. Upgrade when your team is ready.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="grid md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
            {/* Free tier */}
            <div className="glass-card p-10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-fg/70 mb-3">Free</h3>
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-5xl font-light text-fg hero-heading tracking-tight">
                    $0
                  </span>
                  <span className="text-sm text-muted-2 ml-1">forever</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Everything you need to get started with multiplayer AI coding.
                </p>
              </div>

              <div className="flex flex-col gap-3.5 flex-1 mb-10">
                {freeFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="mt-0.5">{checkMuted}</div>
                    <span className="text-sm text-muted leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href={DOWNLOAD_URL}
                className="btn-pill btn-secondary w-full justify-center py-3 text-sm font-medium"
              >
                Download Free
              </Link>
            </div>

            {/* Pro tier */}
            <div className="relative flex flex-col overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-10" />

              {/* Ambient glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/[0.08] rounded-full blur-[80px] pointer-events-none" />

              <div className="glass-card-strong p-10 flex flex-col flex-1 relative">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-fg/90">Pro</h3>
                    <span className="rounded-full bg-accent/15 border border-accent/25 px-3 py-1 text-[11px] font-semibold text-accent-light uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-5xl font-light text-fg hero-heading tracking-tight">
                      $19
                    </span>
                    <span className="text-sm text-muted-2 ml-1">per user / mo</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    For teams that need persistent sessions, handoff, and full
                    control.
                  </p>
                </div>

                <div className="flex flex-col gap-3.5 flex-1 mb-10">
                  {proFeatures.map((f) => (
                    <div key={f.text} className="flex items-start gap-3">
                      <div className="mt-0.5">{check}</div>
                      <span
                        className={`text-sm leading-relaxed ${
                          f.bold ? "text-fg/90 font-medium" : "text-muted"
                        }`}
                      >
                        {f.text}
                      </span>
                      {f.soon && (
                        <span className="rounded-full bg-white/[0.06] border border-white/[0.06] px-2 py-0.5 text-[10px] text-muted-2 shrink-0">
                          Soon
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Waitlist form */}
                {submitted ? (
                  <div className="flex items-center justify-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 py-3 text-sm font-medium">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    You&apos;re on the list
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) setSubmitted(true);
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="flex-1 rounded-full bg-white/[0.03] border border-white/[0.08] px-5 py-3 text-sm text-fg placeholder:text-muted-2 outline-none focus:border-accent/30 focus:bg-white/[0.04] transition-all"
                    />
                    <button
                      type="submit"
                      className="btn-pill btn-accent shrink-0 py-3 px-6 text-sm font-medium"
                    >
                      Join Waitlist
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
