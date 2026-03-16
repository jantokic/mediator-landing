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

function SharedSessionVisual() {
  const [activeUser, setActiveUser] = useState(0);
  const users = [
    { name: "Jan T.", avatar: "J", color: "bg-blue-500", action: "Asked about auth refactor" },
    { name: "Alex M.", avatar: "A", color: "bg-emerald-500", action: "Added Redis context" },
    { name: "Sarah K.", avatar: "S", color: "bg-amber-500", action: "Requested TTL cleanup" },
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveUser((p) => (p + 1) % users.length), 2500);
    return () => clearInterval(interval);
  }, [users.length]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-medium text-fg/80">Live Session</span>
        <span className="text-xs text-muted-2 ml-auto">auth-service refactor</span>
      </div>
      {users.map((u, i) => (
        <div
          key={u.name}
          onMouseEnter={() => setActiveUser(i)}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-500 cursor-pointer ${
            activeUser === i ? "bg-white/[0.05] border border-white/[0.1]" : "bg-white/[0.02] border border-transparent"
          }`}
        >
          <div className={`h-8 w-8 rounded-full ${u.color} flex items-center justify-center text-xs font-semibold text-white transition-transform duration-300 ${activeUser === i ? "scale-110" : ""}`}>{u.avatar}</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-fg/80">{u.name}</div>
            <div className={`text-xs transition-all duration-500 ${activeUser === i ? "text-muted" : "text-muted-2"}`}>{u.action}</div>
          </div>
          <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${activeUser === i ? "bg-green-400" : "bg-muted-3"}`} />
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-lg bg-white/[0.02] px-3 py-2 text-xs text-muted-2">
        <span>🤖</span><span>AI has full context from all 3 participants</span>
      </div>
    </div>
  );
}

function HandoffVisual() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-semibold text-white">J</div>
          <span className="text-xs text-fg/70">Jan — 3:00pm</span>
          <span className="text-[10px] text-yellow-400/70 ml-auto">Paused</span>
        </div>
        <div className="text-sm text-muted">Deep session on auth middleware. 47 messages, 12 files touched, 3 decisions made.</div>
      </div>
      <div className="flex items-center justify-center gap-2 text-muted-2">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="text-xs">Session persists in cloud</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>
      <div className="rounded-xl bg-accent/[0.04] border border-accent/10 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] font-semibold text-white">A</div>
          <span className="text-xs text-fg/70">Alex — 4:00pm</span>
          <span className="text-[10px] text-green-400/70 ml-auto">Resumed</span>
        </div>
        <div className="text-sm text-fg/80">Full context intact. Picks up exactly where Jan left off — no re-explaining, no lost decisions.</div>
      </div>
    </div>
  );
}

function DiscussionVisual() {
  const [hovered, setHovered] = useState<number | null>(null);
  const personas = [
    { color: "bg-accent", name: "Pragmatist", desc: "Evidence-focused, practical", icon: "🎯" },
    { color: "bg-[#6366f1]", name: "Visionary", desc: "Explores possibilities", icon: "🔮" },
    { color: "bg-[#f43f5e]", name: "Devil's Advocate", desc: "Stress-tests ideas", icon: "⚡" },
    { color: "bg-[#22d3ee]", name: "Technical Lead", desc: "Evaluates trade-offs", icon: "🛠" },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {personas.map((p, i) => (
        <div key={p.name} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
          className={`flex items-center gap-3 rounded-xl bg-white/[0.03] border px-4 py-3 transition-all duration-300 cursor-pointer ${
            hovered === i ? "bg-white/[0.06] border-white/[0.12] translate-x-1" : "border-white/[0.06]"
          }`}>
          <span className="text-sm">{p.icon}</span>
          <span className="flex-1 text-sm font-medium text-fg/90">{p.name}</span>
          <span className={`text-xs transition-colors duration-300 ${hovered === i ? "text-muted" : "text-muted-2"}`}>{p.desc}</span>
        </div>
      ))}
      <div className="mt-1 flex items-center gap-2 rounded-lg bg-green-500/[0.06] border border-green-500/10 px-3 py-2">
        <span className="text-xs">✓</span>
        <span className="text-xs text-green-400/80 font-medium">Auto-convergence scores alignment after each round</span>
      </div>
    </div>
  );
}

function MCPVisual() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const tools = [
    { name: "get_session_info", desc: "Session overview + all participant context", icon: "📊" },
    { name: "send_message", desc: "Post to session on behalf of any AI tool", icon: "💬" },
    { name: "read_document", desc: "Access shared docs and code context", icon: "📄" },
    { name: "list_participants", desc: "See who's in the session right now", icon: "👥" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase tracking-widest text-accent-light font-medium">MCP Server</span>
        <span className="text-[10px] text-green-400/70 flex items-center gap-1"><span className="h-1 w-1 rounded-full bg-green-400/70" />Active</span>
      </div>
      {tools.map((t, i) => (
        <div key={t.name} onMouseEnter={() => setActiveItem(i)} onMouseLeave={() => setActiveItem(null)}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer ${
            activeItem === i ? "bg-white/[0.06] border border-white/[0.1]" : "bg-white/[0.02] border border-white/[0.06]"
          }`}>
          <span className="text-sm">{t.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-mono text-fg/80">{t.name}</div>
            <div className={`text-[11px] transition-all duration-300 ${activeItem === i ? "text-muted" : "text-muted-2"}`}>{t.desc}</div>
          </div>
        </div>
      ))}
      <div className="text-[11px] text-muted-2 mt-1 pl-1">Claude Desktop, ChatGPT, or any MCP client can join your sessions</div>
    </div>
  );
}

const features: Feature[] = [
  {
    tag: "Core Feature",
    title: "One session.",
    titleAccent: "Whole team.",
    description:
      "Multiple developers join the same AI coding session in real-time. Everyone sees the full conversation. The AI maintains context from all participants — no more fragmented knowledge across isolated sessions.",
    visual: <SharedSessionVisual />,
  },
  {
    tag: "Pro",
    title: "Pick up where",
    titleAccent: "anyone left off.",
    description:
      "Sessions persist in the cloud and survive app restarts. Developer A starts a deep session at 3pm, Developer B picks it up at 4pm with full context intact. Your team's AI-assisted knowledge never dies.",
    visual: <HandoffVisual />,
    reverse: true,
  },
  {
    tag: "Discussion Mode",
    title: "Settle architecture debates",
    titleAccent: "with AI in the room.",
    description:
      "When your team faces a big decision, spin up a Discussion. AI personas with different perspectives debate the options. Auto-convergence tells you when there's alignment. Get a structured verdict instead of a 200-message Slack thread.",
    visual: <DiscussionVisual />,
    id: "how",
  },
  {
    tag: "Integrations",
    title: "Connects to your",
    titleAccent: "entire stack.",
    description:
      "Built-in MCP server exposes session context to external tools. Your team's shared sessions become the central hub that other AI tools plug into.",
    visual: <MCPVisual />,
    reverse: true,
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
              <div id={f.id} className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
                <div className={`flex flex-col gap-5 ${f.reverse ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="badge w-fit">{f.tag}</span>
                    {f.tag === "Pro" && (
                      <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-muted-2">Coming Soon</span>
                    )}
                  </div>
                  <h3 className="text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.15] tracking-tight">
                    {f.title}
                    {f.titleAccent && (
                      <>{" "}<span className="accent-serif">{f.titleAccent}</span></>
                    )}
                  </h3>
                  <p className="max-w-[460px] text-base leading-relaxed text-muted">{f.description}</p>
                </div>
                <div className={`glass-card flex min-h-[320px] flex-col justify-center p-6 ${f.reverse ? "md:order-1" : ""}`}>
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
