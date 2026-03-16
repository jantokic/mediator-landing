"use client";

import { RevealWrapper } from "./Features";

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
    title: "Context resets daily",
    desc: "Every new AI session starts from zero. Yesterday's breakthroughs? Gone.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="7" height="7" rx="1" />
        <rect x="15" y="3" width="7" height="7" rx="1" />
        <rect x="8" y="14" width="7" height="7" rx="1" />
        <path d="M5.5 10v2.5a1 1 0 001 1h3M18.5 10v2.5a1 1 0 01-1 1h-3" />
      </svg>
    ),
    title: "Fragmented outputs",
    desc: "Claude responses scattered across Slack, docs, and DMs. No single source of truth.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20v-1a7 7 0 0114 0v1" opacity="0.3" />
        <path d="M12 12v8" />
      </svg>
    ),
    title: "Single-player only",
    desc: "One person, one session. No way to collaborate with AI in real-time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3v4m-4-4v4M9 3v4" />
        <rect x="4" y="7" width="16" height="14" rx="2" />
        <path d="M4 11h16" />
        <path d="M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01" />
      </svg>
    ),
    title: "Repeated explanations",
    desc: "Each teammate re-explains the same codebase to a fresh AI, every single time.",
  },
];

export default function PainPoints() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[900px]">
        <RevealWrapper>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold leading-[1.2] tracking-tight text-center mb-4">
            Sound <span className="accent-serif">familiar?</span>
          </h2>
          <p className="text-center text-muted text-base mb-14 max-w-[480px] mx-auto">
            AI coding tools are powerful solo. But teams hit the same walls every day.
          </p>
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((point) => (
            <RevealWrapper key={point.title}>
              <div className="glass-card p-6 flex items-start gap-4 h-full group">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center text-accent-light transition-all duration-300 group-hover:bg-accent/[0.14] group-hover:scale-105">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-fg/90 mb-1.5">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{point.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper>
          <div className="mt-8 glass-card p-6 border-accent/10 bg-accent/[0.03] text-center">
            <p className="text-xl text-fg/80 font-medium">
              CodeCouncil fixes this — <span className="accent-serif">one session, full context, whole team.</span>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
