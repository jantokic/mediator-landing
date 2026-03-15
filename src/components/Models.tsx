"use client";

import { RevealWrapper } from "./Features";

const models = [
  { name: "Claude", provider: "Anthropic", color: "bg-[#d4a574]" },
  { name: "GPT-4", provider: "OpenAI", color: "bg-[#10a37f]" },
  { name: "Gemini", provider: "Google", color: "bg-[#4285f4]" },
  { name: "Llama", provider: "Meta", color: "bg-accent-dark" },
  { name: "Mistral", provider: "Mistral AI", color: "bg-[#f97316]" },
];

export default function Models() {
  return (
    <section id="models" className="px-6 py-28">
      <div className="mx-auto max-w-[1280px] text-center">
        <RevealWrapper>
          <div className="font-mono text-xs uppercase tracking-[2px] text-muted-2 text-center">
            Integrations
          </div>
          <h2 className="mx-auto mt-4 font-mono text-[clamp(28px,4vw,44px)] font-normal leading-[1.2] tracking-tight">
            Works with any model.
          </h2>
          <p className="mx-auto mt-4 text-[17px] font-light text-muted">
            100+ models via OpenRouter. Mix and match for different debate styles.
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-12">
          <div className="flex flex-wrap justify-center gap-2 max-sm:flex-col max-sm:items-center">
            {models.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-2.5 border border-border px-4 py-2.5 text-sm text-fg transition-colors hover:border-white/15 max-sm:w-full max-sm:max-w-[280px]"
              >
                <div className={`h-1.5 w-1.5 rounded-full ${m.color}`} />
                {m.name}
                <span className="ml-auto font-mono text-xs text-muted-2">{m.provider}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
