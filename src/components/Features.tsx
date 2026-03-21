"use client";

import { useEffect, useRef, useState } from "react";
import { DiscussionWindow, HandoffWindow } from "./DemoWindow";

/* ── Reveal on scroll ──────────────────────────────────────── */

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
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
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

/* ── Section Header (Linear-style numbered) ────────────────── */

function SectionHeader({
  number,
  title,
  description,
  comingSoon,
}: {
  number: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end">
      {/* Left: number + title */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-mono text-muted-2 tracking-wide">{number}</span>
          {comingSoon && (
            <span className="rounded-full bg-accent/[0.08] border border-accent/[0.12] px-2.5 py-0.5 text-[10px] text-accent-light font-mono tracking-wide">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="text-[clamp(30px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.03em] text-fg">
          {title}
        </h3>
      </div>
      {/* Right: description */}
      <div className="flex flex-col gap-4">
        <p className="text-[15px] leading-[1.7] text-muted max-w-[520px]">
          {description}
        </p>
        <div className="flex items-center gap-2 text-accent-light text-sm font-medium group cursor-pointer w-fit">
          <span>Learn more</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-feature Links (Linear-style numbered grid) ────────── */

function SubFeatureLinks({
  items,
}: {
  items: { number: string; name: string; status?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
      {items.map((item) => (
        <div
          key={item.number}
          className="group flex items-center gap-3 rounded-xl bg-white/[0.02] border border-white/[0.06] px-4 py-3 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1] cursor-pointer"
        >
          <span className="text-[12px] font-mono text-muted-2 group-hover:text-accent-light transition-colors">
            {item.number}
          </span>
          <span className="text-[13px] text-fg/70 group-hover:text-fg/90 transition-colors font-medium">
            {item.name}
          </span>
          {item.status && (
            <span className={`ml-auto text-[9px] font-mono tracking-wide ${
              item.status === "Active" ? "text-green-400/70" : "text-amber-400/60"
            }`}>
              {item.status}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Section 1.0 — Shared Session Visual ───────────────────── */

function CollaborateVisual() {
  const [activeUser, setActiveUser] = useState(0);
  const users = [
    { name: "Jan T.", initials: "JT", color: "bg-blue-500", colorBg: "bg-blue-500/20", colorText: "text-blue-400", action: "Asked about auth refactor", tool: "claude-code" },
    { name: "Alex M.", initials: "AM", color: "bg-emerald-500", colorBg: "bg-emerald-500/20", colorText: "text-emerald-400", action: "Added Redis context", tool: "reviewing" },
    { name: "Sarah K.", initials: "SK", color: "bg-amber-500", colorBg: "bg-amber-500/20", colorText: "text-amber-400", action: "Requested TTL cleanup", tool: "shell" },
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveUser((p) => (p + 1) % users.length), 2800);
    return () => clearInterval(interval);
  }, [users.length]);

  return (
    <div className="glass-card-strong overflow-hidden rounded-2xl shadow-2xl shadow-accent/[0.06]">
      {/* Window chrome */}
      <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5 bg-white/[0.015]">
        <div className="flex gap-[6px] mr-4" aria-hidden="true">
          <div className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]/70" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#febc2e]/70" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#28c840]/70" />
        </div>
        <span className="text-[11px] font-medium text-fg/50 tracking-wide">CodeCouncil — Live Session</span>
        <div className="flex -space-x-1.5 ml-auto">
          {users.map((u) => (
            <div key={u.name} className={`h-[18px] w-[18px] rounded-full ${u.color} flex items-center justify-center text-[7px] font-bold text-white ring-1 ring-bg`}>
              {u.initials[0]}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Room badge */}
        <div className="flex items-center gap-2.5 rounded-lg bg-accent/[0.04] border border-accent/[0.08] px-3.5 py-2.5 mb-4">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-medium text-fg/75">Live Session</span>
          <span className="text-[10px] font-mono text-accent-light/70 ml-auto tracking-wider">ROOM c7f2</span>
        </div>

        {/* User list */}
        <div className="flex flex-col gap-2">
          {users.map((u, i) => (
            <div
              key={u.name}
              onMouseEnter={() => setActiveUser(i)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-400 cursor-pointer ${
                activeUser === i
                  ? "bg-white/[0.05] border border-white/[0.1] shadow-lg shadow-black/[0.1]"
                  : "bg-white/[0.015] border border-transparent"
              }`}
            >
              <div className={`h-[30px] w-[30px] rounded-lg ${u.colorBg} flex items-center justify-center text-[9px] font-bold ${u.colorText} transition-transform duration-300 ${
                activeUser === i ? "scale-110" : ""
              }`}>
                {u.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-fg/80">{u.name}</div>
                <div className={`text-[11px] transition-colors duration-400 ${
                  activeUser === i ? "text-muted" : "text-muted-2"
                }`}>
                  {u.action}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-[9px] font-mono ${
                  activeUser === i ? "text-muted" : "text-muted-2"
                } transition-colors`}>
                  {u.tool}
                </span>
                <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  activeUser === i ? "bg-green-400" : "bg-muted-3"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Context bar */}
        <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] px-3.5 py-2 mt-4">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light/50">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span className="text-[11px] text-muted-2">AI has full context from all 3 participants</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section 3.0 — Integrations Visual ─────────────────────── */

function IntegrationsVisual() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const integrations = [
    {
      name: "MCP Server",
      desc: "Expose session context to Claude Desktop, ChatGPT, or any MCP client.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" fill="currentColor" /><circle cx="6" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      status: "Active",
    },
    {
      name: "BYOK Models",
      desc: "Bring your own API keys — OpenRouter, Anthropic, OpenAI, or any provider.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
      status: "Active",
    },
    {
      name: "Git Integration",
      desc: "Sessions reference branches, PRs, and diffs. AI gets repo context automatically.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 012 2v7" /><path d="M6 9v12" />
        </svg>
      ),
      status: "Coming Soon",
    },
    {
      name: "Slack",
      desc: "Post session summaries to channels. Start sessions from Slack with /codecouncil.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
      status: "Coming Soon",
    },
  ];

  return (
    <div className="glass-card-strong overflow-hidden rounded-2xl shadow-2xl shadow-accent/[0.06]">
      {/* Window chrome */}
      <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5 bg-white/[0.015]">
        <div className="flex gap-[6px] mr-4" aria-hidden="true">
          <div className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]/70" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#febc2e]/70" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#28c840]/70" />
        </div>
        <span className="text-[11px] font-medium text-fg/50 tracking-wide">CodeCouncil — Integrations</span>
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-2">
          {integrations.map((t, i) => (
            <div
              key={t.name}
              onMouseEnter={() => setActiveItem(i)}
              onMouseLeave={() => setActiveItem(null)}
              className={`flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-300 cursor-pointer ${
                activeItem === i
                  ? "bg-white/[0.05] border border-white/[0.1]"
                  : "bg-white/[0.015] border border-white/[0.04]"
              }`}
            >
              <div className={`h-[34px] w-[34px] rounded-lg flex items-center justify-center transition-colors duration-300 ${
                activeItem === i ? "bg-accent/15 text-accent-light" : "bg-white/[0.04] text-fg/50"
              }`}>
                {t.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-[13px] font-medium text-fg/80">{t.name}</span>
                  <span className={`text-[9px] font-mono tracking-wide ${
                    t.status === "Active" ? "text-green-400/70" : "text-amber-400/60"
                  }`}>
                    {t.status}
                  </span>
                </div>
                <div className={`text-[11px] transition-colors duration-300 mt-0.5 ${
                  activeItem === i ? "text-muted" : "text-muted-2"
                }`}>
                  {t.desc}
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-300 ${
                  activeItem === i ? "text-accent-light opacity-100 translate-x-0" : "text-muted-2 opacity-0 -translate-x-1"
                }`}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Section Divider ───────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

/* ── Main Features Component ───────────────────────────────── */

export default function Features() {
  return (
    <section id="features" className="py-20">
      {/* ── 1.0 Collaborate ───────────────────────────────── */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <RevealWrapper>
            <SectionHeader
              number="1.0"
              title="One session, whole team."
              description="Multiple developers join the same AI coding session. Everyone sees the full conversation. The AI maintains context from all participants."
            />
          </RevealWrapper>

          <RevealWrapper className="mt-12">
            <CollaborateVisual />
          </RevealWrapper>
        </div>
      </div>

      <SectionDivider />

      {/* ── 2.0 Discuss ──────────────────────────────────── */}
      <div className="px-6 py-24" id="how">
        <div className="mx-auto max-w-[1200px]">
          <RevealWrapper>
            <SectionHeader
              number="2.0"
              title="Settle architecture debates with AI in the room."
              description="Spin up a Discussion within any session. AI personas with different perspectives debate in rounds. Auto-convergence tells you when there's alignment."
            />
          </RevealWrapper>

          <RevealWrapper className="mt-12">
            <DiscussionWindow />
          </RevealWrapper>
        </div>
      </div>

      <SectionDivider />

      {/* ── 3.0 Connect ──────────────────────────────────── */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <RevealWrapper>
            <SectionHeader
              number="3.0"
              title="Connects to your entire stack."
              description="Built-in MCP server, bring-your-own API keys, and upcoming Git and Slack integrations. Your shared sessions become the central hub your whole workflow plugs into."
            />
          </RevealWrapper>

          <RevealWrapper className="mt-12">
            <IntegrationsVisual />
          </RevealWrapper>

          <RevealWrapper>
            <SubFeatureLinks
              items={[
                { number: "3.1", name: "MCP Server", status: "Active" },
                { number: "3.2", name: "BYOK Models", status: "Active" },
                { number: "3.3", name: "Git", status: "Coming Soon" },
                { number: "3.4", name: "Slack", status: "Coming Soon" },
              ]}
            />
          </RevealWrapper>
        </div>
      </div>

      <SectionDivider />

      {/* ── 4.0 Persist ──────────────────────────────────── */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <RevealWrapper>
            <SectionHeader
              number="4.0"
              title="Pick up where anyone left off."
              description="Sessions persist locally. Developer A figures out the auth migration at 3pm. Developer B opens the session at 4pm — full conversation, full context, continues where A stopped. The AI remembers everything."
            />
          </RevealWrapper>

          <RevealWrapper className="mt-12">
            <HandoffWindow />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
