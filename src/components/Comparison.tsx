"use client";

import { RevealWrapper } from "./Features";

const competitors = [
  {
    name: "GitHub Copilot Business",
    price: "$19/user/mo",
    detail: "Centralized billing. Admin dashboard. Zero shared sessions.",
  },
  {
    name: "Cursor Teams",
    price: "$40/user/mo",
    detail: "Centralized billing. Admin dashboard. Zero shared sessions.",
  },
  {
    name: "Windsurf Teams",
    price: "$30/user/mo",
    detail: "Centralized billing. Usage management. Zero shared sessions.",
  },
];

const codecouncil = {
  name: "CodeCouncil Pro",
  price: "$15/user/mo",
  features: [
    "Shared AI sessions",
    "Async handoff",
    "Persistent history",
    "Decision audit trail",
    "Real collaboration — not just shared billing",
  ],
};

export default function Comparison() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1100px]">
        <RevealWrapper>
          <div className="text-center mb-16">
            <span className="badge mx-auto">Compare</span>
            <h2 className="mt-6 text-[clamp(30px,5vw,48px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Finally, a team plan that&apos;s actually{" "}
              <span className="accent-serif">for teams</span>
            </h2>
            <p className="mt-5 text-lg text-muted max-w-[560px] mx-auto leading-relaxed">
              Every AI coding tool sells a &ldquo;team plan.&rdquo; Here&apos;s
              what you actually get.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="flex flex-col gap-3 mb-4">
            {competitors.map((c) => (
              <div
                key={c.name}
                className="glass-card flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5"
              >
                <div className="flex items-center gap-4 sm:w-[280px] shrink-0">
                  <span className="text-sm font-semibold text-fg/70">
                    {c.name}
                  </span>
                  <span className="text-xs font-mono text-muted-2">
                    {c.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-2">
                  <span className="text-sm text-muted-2/80">→</span>
                  <span className="text-sm">{c.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/[0.08] rounded-full blur-[80px] pointer-events-none" />

            <div className="glass-card-strong px-6 py-6 sm:px-8 sm:py-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className="flex items-center gap-4 sm:w-[280px] shrink-0">
                  <span className="text-sm font-semibold text-fg/90">
                    {codecouncil.name}
                  </span>
                  <span className="text-xs font-mono text-accent-light">
                    {codecouncil.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {codecouncil.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-muted">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
