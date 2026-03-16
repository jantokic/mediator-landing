"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealWrapper } from "./Features";

const DOWNLOAD_URL = "https://github.com/jantokic/hivemind/releases/download/v0.1.4/mediator-0.1.4-arm64.dmg";

const check = (
  <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const checkMuted = (
  <svg className="w-4 h-4 text-muted-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="pricing" className="relative px-6 py-28">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <RevealWrapper>
          <div className="text-center mb-16">
            <span className="badge mx-auto">Pricing</span>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.1] tracking-tight">
              Start free, scale with <span className="accent-serif">your team</span>
            </h2>
            <p className="mt-4 text-[17px] text-muted max-w-[500px] mx-auto">
              Everything you need for solo use. Upgrade when your team is ready.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {/* Free */}
            <div className="glass-card p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Free</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-light text-[#DFDFF2] hero-heading">$0</span>
                  <span className="text-sm text-muted-2">forever</span>
                </div>
                <p className="text-sm text-muted">Everything you need to get started with multiplayer AI coding.</p>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {freeFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    {checkMuted}
                    <span className="text-sm text-muted">{f}</span>
                  </div>
                ))}
              </div>

              <Link href={DOWNLOAD_URL} className="btn-pill btn-secondary w-full justify-center">
                Download Free
              </Link>
            </div>

            {/* Pro */}
            <div className="glass-card-strong p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <span className="rounded-full bg-accent/15 border border-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-light uppercase tracking-wide">Coming Soon</span>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-light text-[#DFDFF2] hero-heading">$19</span>
                  <span className="text-sm text-muted-2">per user/mo</span>
                </div>
                <p className="text-sm text-muted">For teams that need persistent sessions, handoff, and full control.</p>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {proFeatures.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    {check}
                    <span className={`text-sm ${f.bold ? "text-fg/90 font-medium" : "text-muted"}`}>
                      {f.text}
                    </span>
                    {f.soon && (
                      <span className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-muted-2">Soon</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Waitlist */}
              {submitted ? (
                <div className="btn-pill bg-green-500/10 border border-green-500/20 text-green-400 w-full justify-center cursor-default">
                  You&apos;re on the list ✓
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
                    className="flex-1 rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-fg placeholder:text-muted-2 outline-none focus:border-accent/30 transition-colors"
                  />
                  <button type="submit" className="btn-pill btn-accent shrink-0">
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
