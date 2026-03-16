"use client";

import { useState } from "react";

const tabs = [
  { id: "debate", label: "Architecture Debate", icon: "💬" },
  { id: "collab", label: "Team Session", icon: "👥" },
  { id: "terminal", label: "Terminal", icon: "⌘" },
];

const personas = [
  { avatar: "P", name: "Pragmatist", color: "bg-accent" },
  { avatar: "V", name: "Visionary", color: "bg-[#6366f1]" },
];

const messages = [
  {
    persona: 0,
    tag: "Turn 1",
    text: "Microservices add operational overhead a team of 5 can't sustain. Start monolith, extract later when you hit real scaling pain.",
    delay: "0.6s",
  },
  {
    persona: 1,
    tag: "Turn 2",
    text: "Fair point on team size. But domain boundaries are clear — auth, billing, core product. Modular monolith with clean interfaces sets you up without the infra tax.",
    delay: "1.4s",
  },
  {
    persona: 0,
    tag: "Turn 3",
    text: "Agreed. Modular monolith with well-defined module boundaries. One deploy target, shared DB, strict interface contracts.",
    delay: "2.2s",
  },
];

const teamMembers = [
  { name: "Jan T.", status: "online", role: "Host" },
  { name: "Alex M.", status: "online", role: "Member" },
  { name: "Sarah K.", status: "busy", role: "Member" },
];

const sharedDocs = [
  { name: "Architecture RFC", type: "doc", by: "Jan T." },
  { name: "system-design.md", type: "file", by: "Alex M." },
];

const terminalLines = [
  { prompt: true, text: "codecouncil session start --topic \"API gateway pattern\"" },
  { prompt: false, text: "✓ Session created: #a8f2c1" },
  { prompt: false, text: "✓ Pragmatist agent connected (Claude 3.5 Sonnet)" },
  { prompt: false, text: "✓ Technical Lead agent connected (GPT-4)" },
  { prompt: false, text: "⟳ Debate in progress... Round 1/10" },
  { prompt: false, text: "⟳ Convergence: 45% → 68% → 87%" },
  { prompt: false, text: "✓ Agents converged at 87%. Generating verdict..." },
  { prompt: false, text: "✓ Verdict saved to ./verdicts/api-gateway.md" },
];

function DebateView() {
  return (
    <div className="flex flex-col gap-3 p-5">
      {messages.map((msg, i) => (
        <div
          key={i}
          className="animate-msg group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02]"
          style={{ animationDelay: msg.delay }}
        >
          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white transition-transform group-hover:scale-110 ${personas[msg.persona].color}`}>
            {personas[msg.persona].avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs font-medium text-fg/80">{personas[msg.persona].name}</span>
              <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-muted-2">
                {msg.tag}
              </span>
            </div>
            <div className="text-sm leading-relaxed text-muted">{msg.text}</div>
          </div>
        </div>
      ))}

      {/* Verdict */}
      <div
        className="animate-msg rounded-lg bg-accent/[0.06] border border-accent/10 p-3 transition-all hover:bg-accent/[0.08] hover:border-accent/20"
        style={{ animationDelay: "3.0s" }}
      >
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white font-bold">✓</div>
          <span className="text-xs font-medium text-fg/80">Verdict</span>
          <span className="rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-[10px] font-medium text-green-400">Converged</span>
        </div>
        <div className="text-sm leading-relaxed text-fg/90">
          Start with a modular monolith, enforce clean module boundaries, defer microservices until team and scale warrant it.
        </div>
      </div>

      {/* Convergence bar */}
      <div
        className="animate-msg mt-1 flex items-center gap-3 border-t border-white/[0.06] pt-3"
        style={{ animationDelay: "3.6s" }}
      >
        <span className="whitespace-nowrap text-[11px] uppercase tracking-widest text-muted-2 font-medium">
          Convergence
        </span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="animate-fill h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light" />
        </div>
        <span className="animate-fade-in text-sm font-semibold text-accent-light">87%</span>
      </div>
    </div>
  );
}

function CollabView() {
  return (
    <div className="flex h-full">
      {/* Main chat area */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex-1 flex flex-col gap-3">
          <div className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02] stagger-1">
            <div className="h-7 w-7 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-[11px] font-semibold text-white transition-transform group-hover:scale-110">J</div>
            <div>
              <div className="text-xs font-medium text-fg/80 mb-1">Jan T. <span className="text-muted-2 font-normal">just now</span></div>
              <div className="text-sm text-muted">What do you all think about the gateway pattern for our API?</div>
            </div>
          </div>
          <div className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02] stagger-2">
            <div className="h-7 w-7 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-[11px] font-semibold text-white transition-transform group-hover:scale-110">A</div>
            <div>
              <div className="text-xs font-medium text-fg/80 mb-1">Alex M. <span className="text-muted-2 font-normal">1m ago</span></div>
              <div className="text-sm text-muted">Let&apos;s spin up a debate session — Pragmatist vs Technical Lead?</div>
            </div>
          </div>
          <div className="group flex items-start gap-2.5 rounded-lg border border-accent/10 bg-accent/[0.04] p-3 transition-all hover:bg-accent/[0.06] stagger-3">
            <div className="h-6 w-6 shrink-0 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold text-white">⚡</div>
            <div>
              <div className="text-xs font-medium text-accent-light mb-0.5">Debate Started</div>
              <div className="text-xs text-muted-2">API Gateway Pattern — Pragmatist vs Technical Lead — Round 1/10</div>
            </div>
          </div>
        </div>
        {/* Input */}
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 transition-colors hover:border-white/[0.1]">
          <span className="text-sm text-muted-2 flex-1">Type a message...</span>
          <div className="flex items-center gap-1.5">
            <div className="h-6 w-6 rounded-md bg-white/[0.04] flex items-center justify-center text-muted-2 text-xs transition-colors hover:bg-white/[0.08] cursor-pointer">📎</div>
            <div className="h-6 w-6 rounded-md bg-accent/20 flex items-center justify-center text-accent-light text-xs transition-colors hover:bg-accent/30 cursor-pointer">↑</div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-[180px] border-l border-white/[0.06] p-4 flex flex-col gap-4 max-sm:hidden">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-2 font-medium">Team</div>
          <div className="flex flex-col gap-2">
            {teamMembers.map((m) => (
              <div key={m.name} className="group flex items-center gap-2 cursor-pointer transition-colors hover:bg-white/[0.03] rounded-md px-1.5 py-1 -mx-1.5">
                <div className={`h-1.5 w-1.5 rounded-full ${m.status === "online" ? "bg-green-400" : "bg-yellow-400"}`} />
                <span className="text-xs text-fg/70 group-hover:text-fg/90 transition-colors">{m.name}</span>
                {m.role === "Host" && <span className="text-[9px] text-accent-light bg-accent/10 px-1 rounded">Host</span>}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-2 font-medium">Shared Docs</div>
          <div className="flex flex-col gap-1.5">
            {sharedDocs.map((d) => (
              <div key={d.name} className="group flex items-center gap-2 cursor-pointer rounded-md px-1.5 py-1 -mx-1.5 transition-colors hover:bg-white/[0.03]">
                <span className="text-[10px]">{d.type === "doc" ? "📄" : "📁"}</span>
                <span className="text-xs text-muted truncate group-hover:text-fg/80 transition-colors">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalView() {
  return (
    <div className="p-5 font-mono text-[13px]">
      {terminalLines.map((line, i) => (
        <div
          key={i}
          className="animate-msg leading-relaxed"
          style={{ animationDelay: `${0.3 + i * 0.4}s` }}
        >
          {line.prompt ? (
            <span>
              <span className="text-accent-light">❯</span>{" "}
              <span className="text-fg/80">{line.text}</span>
            </span>
          ) : (
            <span className={`${line.text.startsWith("✓") ? "text-green-400/80" : line.text.startsWith("⟳") ? "text-yellow-400/70" : "text-muted-2"}`}>
              {"  "}{line.text}
            </span>
          )}
        </div>
      ))}
      <div
        className="animate-msg mt-2"
        style={{ animationDelay: `${0.3 + terminalLines.length * 0.4}s` }}
      >
        <span className="text-accent-light">❯</span>{" "}
        <span className="inline-block w-2 h-4 bg-fg/60 animate-pulse align-text-bottom" />
      </div>
    </div>
  );
}

export default function DemoWindow() {
  const [activeTab, setActiveTab] = useState("debate");

  return (
    <div className="mx-auto max-w-[920px] glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.04]">
      {/* Title bar */}
      <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5 mr-4">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60 transition-colors hover:bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60 transition-colors hover:bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60 transition-colors hover:bg-[#28c840]" />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0.5 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white/[0.08] text-fg/90"
                  : "text-muted-2 hover:text-muted hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-[11px]">{tab.icon}</span>
              <span className="max-sm:hidden">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 max-sm:hidden">
          <span className="text-[10px] text-muted-2 bg-white/[0.04] px-2 py-0.5 rounded-md">⌘N</span>
          <span className="text-[10px] text-green-400/70 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
            Connected
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[380px]">
        {activeTab === "debate" && <DebateView />}
        {activeTab === "collab" && <CollabView />}
        {activeTab === "terminal" && <TerminalView />}
      </div>
    </div>
  );
}
