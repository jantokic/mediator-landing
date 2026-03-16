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

        <RevealWrapper className="mt-12">
          <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:items-center">
            {models.map((m) => (
              <div
                key={m.name}
                className="group flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.06] px-5 py-3 text-sm text-fg/90 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent/15 hover:shadow-[0_0_20px_rgba(139,123,245,0.06)] max-sm:w-full max-sm:max-w-[280px] max-sm:rounded-xl cursor-pointer"
              >
                <div className={`h-2 w-2 rounded-full ${m.color} transition-transform duration-300 group-hover:scale-125`} />
                <span className="font-medium">{m.name}</span>
                <span className="text-xs text-muted-2">{m.provider}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-2">
            + 100 more via OpenRouter — use any model with any persona
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
