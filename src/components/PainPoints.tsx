"use client";

import { RevealWrapper } from "./Features";

export default function PainPoints() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[720px]">
        <RevealWrapper>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold leading-[1.2] tracking-tight text-center mb-12">
            Sound <span className="accent-serif">familiar?</span>
          </h2>
        </RevealWrapper>

        <div className="flex flex-col gap-6">
          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">Monday 2pm</span> — you spend an hour with Claude Code refactoring the auth module. Great context, real progress, clean abstractions.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">Tuesday 10am</span> — your teammate needs that same context. Opens a fresh Claude session. Starts from scratch. Re-explains the entire codebase.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">Tuesday 3pm</span> — someone pastes a Claude output into Slack. Three people reply with their own Claude outputs. Context is fragmented. Decisions are invisible.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6 border-accent/10 bg-accent/[0.03]">
              <p className="text-[15px] leading-relaxed text-fg/80">
                Your team&apos;s best AI-assisted work disappears the moment a session ends. CodeCouncil fixes this — one session, full context, whole&nbsp;team.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
