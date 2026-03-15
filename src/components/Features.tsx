"use client";

import { useEffect, useRef } from "react";

interface Feature {
  tag: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  reverse?: boolean;
  id?: string;
}

function PersonaList() {
  const personas = [
    { color: "bg-[#6366f1]", name: "Pragmatist", desc: "Evidence-focused, practical" },
    { color: "bg-accent", name: "Visionary", desc: "Forward-thinking, explores possibilities" },
    { color: "bg-[#f43f5e]", name: "Devil's Advocate", desc: "Stress-tests ideas, finds weaknesses" },
    { color: "bg-[#22d3ee]", name: "Technical Lead", desc: "Evaluates feasibility, trade-offs" },
  ];

  return (
    <div className="flex flex-col gap-2">
      {personas.map((p) => (
        <div key={p.name} className="flex items-center gap-3 border border-border px-3.5 py-2.5">
          <div className={`h-1.5 w-1.5 rounded-full ${p.color}`} />
          <span className="flex-1 font-mono text-sm text-fg">{p.name}</span>
          <span className="text-xs text-muted-2">{p.desc}</span>
        </div>
      ))}
    </div>
  );
}

function ConvergenceBars() {
  const rounds = [
    { label: "Round 1", pct: 22 },
    { label: "Round 2", pct: 45 },
    { label: "Round 3", pct: 68 },
    { label: "Round 4", pct: 87 },
  ];

  return (
    <div className="flex flex-col gap-3">
      {rounds.map((r) => (
        <div key={r.label} className="flex items-center gap-4">
          <span className="w-[60px] shrink-0 font-mono text-xs text-muted-2">{r.label}</span>
          <div className="h-0.5 flex-1 bg-border">
            <span
              className="block h-full bg-gradient-to-r from-accent-dark/60 to-accent/60"
              style={{ width: `${r.pct}%` }}
            />
          </div>
          <span className="w-9 text-right font-mono text-xs text-muted">{r.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function SummaryBlocks() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-border p-4">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-2">
          Agreement
        </div>
        <div className="text-sm leading-relaxed text-muted">
          Modular monolith is the right starting architecture for a team of 5.
        </div>
      </div>
      <div className="border border-border p-4">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-2">
          Recommendation
        </div>
        <div className="text-sm leading-relaxed text-muted">
          Enforce strict module boundaries now. Defer microservices extraction until scaling demands
          it.
        </div>
      </div>
    </div>
  );
}

function MenuBarVisual() {
  return (
    <div className="text-center">
      <div className="mb-5 inline-flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-sm text-muted">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        Mediator
      </div>
      <p className="text-sm leading-relaxed text-muted-2">
        Always one click away. Create sessions, add personas, start debates — all from a compact
        popup.
      </p>
      <div className="mt-4 flex justify-center gap-2">
        <span className="border border-border px-2.5 py-1 font-mono text-xs text-muted-2">
          ⌘ + N
        </span>
        <span className="border border-border px-2.5 py-1 font-mono text-xs text-muted-2">
          New session
        </span>
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    tag: "Structured Debate",
    title: "Two agents. One question. Real arguments.",
    description:
      "AI personas autonomously debate any topic with structured turns. No prompt engineering — just state the question and let them reason through it.",
    visual: <PersonaList />,
  },
  {
    tag: "Auto Convergence",
    title: "An independent judge scores agreement.",
    description:
      "After each round, a neutral LLM judge evaluates how closely the agents align. When convergence hits 85%, the debate ends automatically.",
    visual: <ConvergenceBars />,
    reverse: true,
  },
  {
    tag: "Actionable Output",
    title: "Every debate produces a structured verdict.",
    description:
      "Points of agreement and disagreement, strongest arguments from each side, and a clear recommendation. No more parsing raw chat logs.",
    visual: <SummaryBlocks />,
  },
  {
    tag: "Native Experience",
    title: "Lives in your menu bar.",
    description:
      "macOS-native Electron app. One click from your menu bar to launch a debate. No browser tabs, no context switching, no sign-up.",
    visual: <MenuBarVisual />,
    reverse: true,
    id: "how",
  },
];

function RevealWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}

export { RevealWrapper };

export default function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mt-20 flex flex-col gap-32">
          {features.map((f) => (
            <RevealWrapper key={f.tag}>
              <div
                id={f.id}
                className={`grid items-center gap-16 md:grid-cols-2 ${
                  f.reverse ? "" : ""
                }`}
              >
                <div className={`flex flex-col gap-4 ${f.reverse ? "md:order-2" : ""}`}>
                  <span className="font-mono text-xs uppercase tracking-[2px] text-muted-2">
                    {f.tag}
                  </span>
                  <h3 className="font-mono text-[clamp(24px,3vw,36px)] font-normal leading-[1.2] tracking-tight">
                    {f.title}
                  </h3>
                  <p className="max-w-[480px] text-base font-light leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
                <div
                  className={`flex min-h-[280px] flex-col justify-center border border-border bg-white/[0.015] p-8 ${
                    f.reverse ? "md:order-1" : ""
                  }`}
                >
                  {f.visual}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
