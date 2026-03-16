"use client";

import { RevealWrapper } from "./Features";

const models = [
  {
    name: "Claude",
    provider: "Anthropic",
    color: "bg-[#d4a574]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "GPT-4",
    provider: "OpenAI",
    color: "bg-[#10a37f]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    provider: "Google",
    color: "bg-[#4285f4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "Llama",
    provider: "Meta",
    color: "bg-accent-dark",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    name: "Mistral",
    provider: "Mistral AI",
    color: "bg-[#f97316]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Models() {
  return (
    <section id="models" className="relative px-6 py-28">
      <div className="mx-auto max-w-[1200px] text-center relative z-10">
        <RevealWrapper>
          <span className="badge mx-auto">
            Integrations
          </span>
          <h2 className="mx-auto mt-6 text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.1] tracking-tight">
            Works with <span className="accent-serif">any model</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[17px] text-muted">
            100+ models via OpenRouter. Mix and match for different debate styles.
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[900px] mx-auto">
            {models.map((m) => (
              <div
                key={m.name}
                className="group glass-card flex flex-col items-center gap-3 p-6 transition-all duration-300 hover:border-accent/15 cursor-pointer"
              >
                <div className={`h-10 w-10 rounded-xl ${m.color}/10 border border-white/[0.06] flex items-center justify-center text-fg/60 transition-all duration-300 group-hover:text-fg/90 group-hover:scale-110`}>
                  {m.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-fg/90">{m.name}</div>
                  <div className="text-[11px] text-muted-2 mt-0.5">{m.provider}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-2">
            + 100 more via OpenRouter — use any model with any persona
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
