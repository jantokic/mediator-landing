"use client";

import { RevealWrapper } from "./Features";

const models = [
  {
    name: "Claude",
    provider: "Anthropic",
    color: "bg-[#d4a574]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 46 32" fill="currentColor">
        <path d="M33.6 0H26L37.5 32h7.6L33.6 0zM12.4 0L.9 32h7.8l2.3-6.5h12.1L25.4 32h7.8L20.7 0h-8.3zm1 19.5L18 7.8l4.5 11.7h-9.1z" />
      </svg>
    ),
  },
  {
    name: "GPT-4",
    provider: "OpenAI",
    color: "bg-[#10a37f]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.04 6.04 0 0 0 6.51 2.9A5.99 5.99 0 0 0 13.275 24a6.04 6.04 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.762-7.073zM13.275 22.43a4.485 4.485 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.613 18.292a4.49 4.49 0 0 1-.535-3.014l.142.085 4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.127-1.658zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    provider: "Google",
    color: "bg-[#4285f4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 3.4 1.4 6.5 3.7 8.6L12 12V0z" opacity="0.4" />
        <path d="M12 0v12l8.3 8.6C22.6 18.5 24 15.4 24 12c0-6.6-5.4-12-12-12z" opacity="0.6" />
        <path d="M3.7 20.6C5.8 22.7 8.7 24 12 24s6.2-1.3 8.3-3.4L12 12 3.7 20.6z" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: "Llama",
    provider: "Meta",
    color: "bg-accent-dark",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.2 14.5H7.6V7.5h3.2c2.5 0 4.2 1.4 4.2 4.5s-1.7 4.5-4.2 4.5zm.1-7h-1.3v5h1.3c1.5 0 2.3-.9 2.3-2.5s-.8-2.5-2.3-2.5z" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "Mistral",
    provider: "Mistral AI",
    color: "bg-[#f97316]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect x="1" y="1" width="5" height="5" /><rect x="18" y="1" width="5" height="5" />
        <rect x="1" y="6" width="5" height="5" opacity="0.7" /><rect x="9.5" y="6" width="5" height="5" /><rect x="18" y="6" width="5" height="5" opacity="0.7" />
        <rect x="1" y="11" width="5" height="5" /><rect x="5.5" y="11" width="5" height="5" opacity="0.5" /><rect x="9.5" y="11" width="5" height="5" /><rect x="14" y="11" width="5" height="5" opacity="0.5" /><rect x="18" y="11" width="5" height="5" />
        <rect x="1" y="16" width="5" height="5" opacity="0.7" /><rect x="9.5" y="16" width="5" height="5" /><rect x="18" y="16" width="5" height="5" opacity="0.7" />
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
            100+ models via OpenRouter. Mix and match for any part of your workflow.
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
