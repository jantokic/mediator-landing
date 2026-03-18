"use client";

import { RevealWrapper } from "./Features";

const models = [
  {
    name: "Claude 4",
    provider: "Anthropic",
    color: "#d4a574",
    icon: (
      <svg width="28" height="28" viewBox="0 0 46 32" fill="currentColor">
        <path d="M33.6 0H26L37.5 32h7.6L33.6 0zM12.4 0L.9 32h7.8l2.3-6.5h12.1L25.4 32h7.8L20.7 0h-8.3zm1 19.5L18 7.8l4.5 11.7h-9.1z" />
      </svg>
    ),
  },
  {
    name: "GPT-4o",
    provider: "OpenAI",
    color: "#10a37f",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.04 6.04 0 0 0 6.51 2.9A5.99 5.99 0 0 0 13.275 24a6.04 6.04 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.762-7.073zM13.275 22.43a4.485 4.485 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.613 18.292a4.49 4.49 0 0 1-.535-3.014l.142.085 4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.127-1.658zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Gemini Pro",
    provider: "Google",
    color: "#4285f4",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
      </svg>
    ),
  },
  {
    name: "Llama 3",
    provider: "Meta",
    color: "#6c5ce7",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
      </svg>
    ),
  },
  {
    name: "Mistral Large",
    provider: "Mistral AI",
    color: "#f97316",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
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
    <section id="models" className="relative px-6 py-32 overflow-hidden">
      {/* Ambient glow behind cards */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-accent/[0.12] blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#6366f1]/[0.12] blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-accent/[0.08] blur-[80px]" />
      </div>

      <div className="mx-auto max-w-[1200px] text-center relative z-10">
        <RevealWrapper>
          <span className="badge mx-auto">Bring Your Own Key</span>
          <h2 className="mx-auto mt-6 text-[clamp(34px,5.5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
            Works with <span className="accent-serif">any model</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-lg text-muted leading-relaxed">
            Use your own API keys. Mix and match models for different personas in the same session.
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-16">
          <div className="flex flex-wrap justify-center gap-5 max-w-[1000px] mx-auto">
            {models.map((m) => (
              <div
                key={m.name}
                className="group relative glass-card-strong flex flex-col items-center gap-4 p-8 w-[170px] transition-all duration-500 hover:border-accent/20 cursor-pointer hover:-translate-y-1"
              >
                {/* Colored glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${m.color}10 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="relative h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${m.color}12`,
                    border: `1px solid ${m.color}20`,
                  }}
                >
                  <div className="text-fg/60 transition-colors duration-300 group-hover:text-fg/90">
                    {m.icon}
                  </div>
                </div>
                <div className="relative">
                  <div className="text-[15px] font-semibold text-fg/90">{m.name}</div>
                  <div className="text-xs text-muted-2 mt-1">{m.provider}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-12">
          <p className="text-lg font-medium">
            <span className="gradient-text">100+ models via OpenRouter</span>
          </p>
          <p className="text-sm text-muted-2 mt-2">
            Use any model with any persona — your keys, your choice
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
