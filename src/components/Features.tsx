"use client";

import { useEffect, useRef, useState } from "react";

interface Feature {
  tag: string;
  title: string;
  titleAccent?: string;
  description: string;
  visual: React.ReactNode;
  reverse?: boolean;
  id?: string;
}

function PersonaList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const personas = [
    { color: "bg-accent", name: "Pragmatist", desc: "Evidence-focused, practical", icon: "🎯" },
    { color: "bg-[#6366f1]", name: "Visionary", desc: "Forward-thinking, explores possibilities", icon: "🔮" },
    { color: "bg-[#f43f5e]", name: "Devil's Advocate", desc: "Stress-tests ideas, finds weaknesses", icon: "⚡" },
    { color: "bg-[#22d3ee]", name: "Technical Lead", desc: "Evaluates feasibility, trade-offs", icon: "🛠" },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {personas.map((p, i) => (
        <div
          key={p.name}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={`flex items-center gap-3 rounded-xl bg-white/[0.03] border px-4 py-3 transition-all duration-300 cursor-pointer ${
            hovered === i
              ? "bg-white/[0.06] border-white/[0.12] translate-x-1 shadow-lg shadow-black/10"
              : "border-white/[0.06]"
          }`}
        >
          <span className="text-sm">{p.icon}</span>
          <span className="flex-1 text-sm font-medium text-fg/90">{p.name}</span>
          <span className={`text-xs transition-colors duration-300 ${hovered === i ? "text-muted" : "text-muted-2"}`}>
            {p.desc}
          </span>
          <svg
            className={`w-3.5 h-3.5 text-muted-2 transition-all duration-300 ${hovered === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      ))}
      <div className="text-[11px] text-muted-2 mt-1 pl-1">+ Create custom personas with any system prompt</div>
    </div>
  );
}

function TeamCollabVisual() {
  const [activeUser, setActiveUser] = useState(0);
  const users = [
    { name: "Jan T.", avatar: "J", color: "bg-blue-500", status: "Reviewing verdict" },
    { name: "Alex M.", avatar: "A", color: "bg-emerald-500", status: "Shared architecture RFC" },
    { name: "Sarah K.", avatar: "S", color: "bg-amber-500", status: "Started a debate" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUser((prev) => (prev + 1) % users.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [users.length]);

  return (
    <div className="flex flex-col gap-3">
      {/* Live session indicator */}
      <div className="flex items-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-medium text-fg/80">Live Session</span>
        <span className="text-xs text-muted-2 ml-auto">3 participants</span>
      </div>

      {/* Users with activity */}
      {users.map((u, i) => (
        <div
          key={u.name}
          onMouseEnter={() => setActiveUser(i)}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-500 cursor-pointer ${
            activeUser === i
              ? "bg-white/[0.05] border border-white/[0.1]"
              : "bg-white/[0.02] border border-transparent"
          }`}
        >
          <div className={`h-8 w-8 rounded-full ${u.color} flex items-center justify-center text-xs font-semibold text-white transition-transform duration-300 ${activeUser === i ? "scale-110" : ""}`}>
            {u.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-fg/80">{u.name}</div>
            <div className={`text-xs transition-all duration-500 ${activeUser === i ? "text-muted" : "text-muted-2"}`}>
              {u.status}
            </div>
          </div>
          <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${activeUser === i ? "bg-green-400" : "bg-muted-3"}`} />
        </div>
      ))}

      {/* Shared context */}
      <div className="flex items-center gap-2 rounded-lg bg-white/[0.02] px-3 py-2 text-xs text-muted-2">
        <span>📄</span>
        <span>2 shared documents</span>
        <span className="mx-1 text-white/10">·</span>
        <span>🔗</span>
        <span>MCP connected</span>
      </div>
    </div>
  );
}

function ConvergenceVisual() {
  const [activeRound, setActiveRound] = useState<number | null>(null);
  const rounds = [
    { label: "Round 1", pct: 22, detail: "Initial positions established" },
    { label: "Round 2", pct: 45, detail: "Finding common ground on architecture" },
    { label: "Round 3", pct: 68, detail: "Narrowing on modular monolith" },
    { label: "Round 4", pct: 87, detail: "Converged — generating verdict" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {rounds.map((r, i) => (
        <div
          key={r.label}
          onMouseEnter={() => setActiveRound(i)}
          onMouseLeave={() => setActiveRound(null)}
          className="group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <span className={`w-[60px] shrink-0 text-xs font-medium transition-colors duration-200 ${activeRound === i ? "text-fg/70" : "text-muted-2"}`}>
              {r.label}
            </span>
            <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
              <span
                className={`block h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light transition-all duration-700 ${activeRound === i ? "brightness-125" : ""}`}
                style={{ width: `${r.pct}%` }}
              />
            </div>
            <span className={`w-9 text-right text-xs font-semibold transition-colors ${r.pct >= 85 ? "text-green-400" : "text-muted"}`}>
              {r.pct}%
            </span>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${activeRound === i ? "max-h-8 opacity-100 mt-1.5" : "max-h-0 opacity-0"}`}>
            <span className="text-[11px] text-muted-2 pl-[76px]">{r.detail}</span>
          </div>
        </div>
      ))}

      <div className="mt-1 flex items-center gap-2 rounded-lg bg-green-500/[0.06] border border-green-500/10 px-3 py-2">
        <span className="text-xs">✓</span>
        <span className="text-xs text-green-400/80 font-medium">Threshold reached at 87% — debate complete</span>
      </div>
    </div>
  );
}

function MCPVisual() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const tools = [
    { name: "get_session_info", desc: "Session overview, participants, stats", icon: "📊" },
    { name: "list_shared_documents", desc: "Browse all shared docs", icon: "📁" },
    { name: "send_message", desc: "Post to session on behalf of AI", icon: "💬" },
    { name: "read_document", desc: "Read full content of shared docs", icon: "📄" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase tracking-widest text-accent-light font-medium">MCP Server</span>
        <span className="text-[10px] text-green-400/70 flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-green-400/70" />
          Active
        </span>
      </div>

      {tools.map((t, i) => (
        <div
          key={t.name}
          onMouseEnter={() => setActiveItem(i)}
          onMouseLeave={() => setActiveItem(null)}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer ${
            activeItem === i
              ? "bg-white/[0.06] border border-white/[0.1]"
              : "bg-white/[0.02] border border-white/[0.06]"
          }`}
        >
          <span className="text-sm">{t.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-mono text-fg/80">{t.name}</div>
            <div className={`text-[11px] transition-all duration-300 ${activeItem === i ? "text-muted" : "text-muted-2"}`}>{t.desc}</div>
          </div>
          <svg
            className={`w-3.5 h-3.5 text-accent-light transition-all duration-300 ${activeItem === i ? "opacity-100" : "opacity-0"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      ))}

      <div className="text-[11px] text-muted-2 mt-1 pl-1">
        Connect Claude Desktop, ChatGPT, or any MCP client
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    tag: "AI Personas",
    title: "Built-in experts that",
    titleAccent: "think differently.",
    description:
      "Four built-in AI personas with distinct perspectives. Create custom ones with any system prompt. Each persona can use a different model and temperature.",
    visual: <PersonaList />,
  },
  {
    tag: "Team Collaboration",
    title: "Real-time sessions with",
    titleAccent: "your whole team.",
    description:
      "Invite team members to shared sessions. Debate together, share documents, and let AI agents work alongside your team in real-time.",
    visual: <TeamCollabVisual />,
    reverse: true,
  },
  {
    tag: "Auto Convergence",
    title: "An independent judge scores",
    titleAccent: "agreement.",
    description:
      "After each round, a neutral LLM judge evaluates alignment. When convergence hits 85%, the debate ends and a structured verdict is generated automatically.",
    visual: <ConvergenceVisual />,
  },
  {
    tag: "MCP Integration",
    title: "Connects to",
    titleAccent: "any AI tool.",
    description:
      "Built-in MCP server exposes session context to external AI tools. Claude Desktop, ChatGPT, or any MCP-compatible client can join as a participant.",
    visual: <MCPVisual />,
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
      <div className="mx-auto max-w-[1200px]">
        <div className="mt-12 flex flex-col gap-32">
          {features.map((f) => (
            <RevealWrapper key={f.tag}>
              <div
                id={f.id}
                className="grid items-center gap-12 md:gap-16 md:grid-cols-2"
              >
                <div className={`flex flex-col gap-5 ${f.reverse ? "md:order-2" : ""}`}>
                  <span className="badge w-fit">
                    {f.tag}
                  </span>
                  <h3 className="text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.15] tracking-tight">
                    {f.title}
                    {f.titleAccent && (
                      <>
                        {" "}<span className="accent-serif">{f.titleAccent}</span>
                      </>
                    )}
                  </h3>
                  <p className="max-w-[460px] text-base leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
                <div
                  className={`glass-card flex min-h-[320px] flex-col justify-center p-6 ${
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
