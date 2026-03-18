"use client";

import { useEffect, useState, useRef } from "react";

/* ── Window Chrome ─────────────────────────────────────────── */

function WindowChrome({ title, shortcut }: { title: string; shortcut?: string }) {
  return (
    <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5 bg-white/[0.015]">
      <div className="flex gap-[6px] mr-4" aria-hidden="true">
        <div className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]/70 transition-colors hover:bg-[#ff5f57]" />
        <div className="h-[11px] w-[11px] rounded-full bg-[#febc2e]/70 transition-colors hover:bg-[#febc2e]" />
        <div className="h-[11px] w-[11px] rounded-full bg-[#28c840]/70 transition-colors hover:bg-[#28c840]" />
      </div>
      <span className="text-[11px] font-medium text-fg/50 flex-1 tracking-wide">{title}</span>
      {shortcut && (
        <span className="text-[10px] text-muted-2 bg-white/[0.04] px-2 py-0.5 rounded-md font-mono max-sm:hidden">{shortcut}</span>
      )}
    </div>
  );
}

/* ── Animated typing terminal — LOOPS continuously ─────────── */

const TERMINAL_LINES = [
  { type: "prompt" as const, user: "jan", color: "text-blue-400", text: "Can we refactor the auth middleware to use JWT validation?" },
  { type: "response" as const, text: "I'll analyze the auth middleware. The race condition is in middleware/auth.ts:47 — the token refresh isn't atomic." },
  { type: "file" as const, text: "  auth-service/middleware/auth.ts" },
  { type: "diff" as const, text: "+ const refreshLock = await redis.set(" },
  { type: "diff" as const, text: "+   `refresh:${userId}`, 'locked', 'NX', 'EX', 10" },
  { type: "diff" as const, text: "+ );" },
  { type: "diff" as const, text: "+ if (!refreshLock) return existing;" },
  { type: "status" as const, text: "Applied fix to middleware/auth.ts" },
  { type: "status" as const, text: "Added Redis session rotation" },
  { type: "prompt" as const, user: "alex", color: "text-emerald-400", text: "Nice. Can you also add a TTL refresh on successful validation?" },
  { type: "response" as const, text: "Good idea. I'll add automatic TTL extension when tokens validate successfully." },
  { type: "diff" as const, text: "+ await redis.expire(`refresh:${userId}`, 3600);" },
  { type: "diff" as const, text: "+ logger.info('Token TTL refreshed', { userId });" },
  { type: "status" as const, text: "Updated middleware/auth.ts with TTL refresh" },
  { type: "prompt" as const, user: "sarah", color: "text-amber-400", text: "Should we add monitoring for refresh lock failures?" },
];

function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const showNext = () => {
      if (visibleLines < TERMINAL_LINES.length) {
        setIsTyping(true);
        const line = TERMINAL_LINES[visibleLines];
        const delay = line.type === "prompt" ? 1200 : line.type === "response" ? 800 : line.type === "diff" ? 200 : 400;
        timeout = setTimeout(() => {
          setVisibleLines(v => v + 1);
          setIsTyping(false);
        }, delay);
      } else {
        // Loop — reset after pause
        timeout = setTimeout(() => {
          setVisibleLines(0);
        }, 3000);
      }
    };
    showNext();
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div ref={containerRef} className="flex-1 bg-[#09090b] p-4 font-mono text-[11px] leading-[1.7] overflow-hidden">
      {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
        <div
          key={`${i}-${visibleLines > TERMINAL_LINES.length / 2 ? 'b' : 'a'}`}
          className="animate-[message-in_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ marginTop: i > 0 && (line.type === "prompt" || line.type === "response") ? "10px" : line.type === "diff" && TERMINAL_LINES[i-1]?.type !== "diff" ? "8px" : "1px" }}
        >
          {line.type === "prompt" && (
            <>
              <span className={line.color}>{line.user}</span>
              <span className="text-muted-2"> ~ </span>
              <span className="text-accent-light">{">"}</span>{" "}
              <span className="text-fg/70">{line.text}</span>
            </>
          )}
          {line.type === "response" && (
            <span className="text-fg/55">{line.text}</span>
          )}
          {line.type === "file" && (
            <span className="text-muted-2 text-[10px]">{line.text}</span>
          )}
          {line.type === "diff" && (
            <span className="text-green-400/80">{line.text}</span>
          )}
          {line.type === "status" && (
            <>
              <span className="text-green-400/80">  ok</span>{" "}
              <span className="text-fg/50">{line.text}</span>
            </>
          )}
        </div>
      ))}
      {/* Blinking cursor */}
      <div className="mt-2.5">
        {isTyping ? (
          <span className="text-muted-2">
            <span className="inline-block animate-pulse">●●●</span>
          </span>
        ) : (
          <>
            <span className={visibleLines < TERMINAL_LINES.length ? TERMINAL_LINES[visibleLines]?.color || "text-fg/50" : "text-fg/50"}>
              {visibleLines < TERMINAL_LINES.length ? TERMINAL_LINES[visibleLines]?.user || ">" : ">"}
            </span>
            <span className="text-muted-2"> ~ </span>
            <span className="text-accent-light">{">"}</span>{" "}
            <span className="inline-block w-[6px] h-[14px] bg-fg/60 animate-pulse align-text-bottom" />
          </>
        )}
      </div>
    </div>
  );
}

/* ── Left Sidebar ──────────────────────────────────────────── */

function LeftSidebar() {
  return (
    <div className="w-[172px] shrink-0 border-r border-white/[0.06] bg-white/[0.01] flex flex-col max-md:hidden">
      <div className="px-3 pt-3 pb-2">
        <span className="text-[9px] font-mono text-muted-2 uppercase tracking-[0.15em]">Workspaces</span>
      </div>
      <div className="flex-1 px-2 flex flex-col gap-0.5">
        <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-white/[0.05] border-l-2 border-accent transition-colors">
          <div className="h-[22px] w-[22px] rounded-md bg-blue-500/20 flex items-center justify-center text-[8px] font-bold text-blue-400">AS</div>
          <div className="min-w-0">
            <div className="text-[11px] font-medium text-fg/80 truncate">auth-service</div>
            <div className="text-[9px] font-mono text-muted-2">main</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.02] transition-colors">
          <div className="h-[22px] w-[22px] rounded-md bg-emerald-500/20 flex items-center justify-center text-[8px] font-bold text-emerald-400">AP</div>
          <div className="min-w-0">
            <div className="text-[11px] text-fg/45 truncate">api-gateway</div>
            <div className="text-[9px] font-mono text-muted-2">feat/v2</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.02] transition-colors">
          <div className="h-[22px] w-[22px] rounded-md bg-amber-500/20 flex items-center justify-center text-[8px] font-bold text-amber-400">FE</div>
          <div className="min-w-0">
            <div className="text-[11px] text-fg/45 truncate">frontend</div>
            <div className="text-[9px] font-mono text-muted-2">main</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Animated Team Sidebar — users appear with activity ────── */

function TeamSidebar() {
  const [activeIdx, setActiveIdx] = useState(0);
  const users = [
    { initials: "JT", name: "Jan T.", tool: "claude-code", color: "bg-blue-500/25", textColor: "text-blue-400" },
    { initials: "AM", name: "Alex M.", tool: "reviewing", color: "bg-emerald-500/25", textColor: "text-emerald-400" },
    { initials: "SK", name: "Sarah K.", tool: "shell", color: "bg-amber-500/25", textColor: "text-amber-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveIdx(p => (p + 1) % users.length), 3000);
    return () => clearInterval(interval);
  }, [users.length]);

  return (
    <div className="w-[160px] shrink-0 border-l border-white/[0.06] bg-white/[0.01] flex flex-col max-lg:hidden">
      <div className="flex border-b border-white/[0.06]">
        <div className="flex-1 text-center py-2 text-[10px] font-medium text-fg/70 border-b border-accent">Team</div>
        <div className="flex-1 text-center py-2 text-[10px] text-muted-2 cursor-pointer">Activity</div>
      </div>

      <div className="flex-1 px-2 pt-3">
        <div className="text-[9px] uppercase tracking-[0.15em] text-muted-2 px-1.5 mb-2 font-mono">Online &mdash; 3</div>
        {users.map((u, i) => (
          <div key={u.name} className={`flex items-center gap-2.5 px-1.5 py-1.5 rounded-lg transition-all duration-500 ${activeIdx === i ? "bg-white/[0.04]" : ""}`}>
            <div className="relative">
              <div className={`h-[22px] w-[22px] rounded-md ${u.color} flex items-center justify-center text-[8px] font-bold ${u.textColor} transition-transform duration-500 ${activeIdx === i ? "scale-110" : ""}`}>{u.initials}</div>
              <div className={`absolute -bottom-0.5 -right-0.5 h-[6px] w-[6px] rounded-full ring-[1.5px] ring-[#09090b] transition-colors duration-300 ${activeIdx === i ? "bg-green-400" : "bg-green-400/50"}`} />
            </div>
            <div>
              <div className="text-[10px] text-fg/75 font-medium">{u.name}</div>
              <div className={`text-[8px] font-mono transition-colors duration-300 ${activeIdx === i ? "text-accent-light/60" : "text-muted-2"}`}>{u.tool}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-2 border-t border-white/[0.06]">
        <div className="flex items-center gap-1 rounded-lg bg-white/[0.03] border border-white/[0.06] px-2.5 py-1.5">
          <span className="text-[9px] text-muted-2 flex-1">Message team...</span>
          <div className="h-[18px] w-[18px] rounded-md bg-accent/20 flex items-center justify-center text-[9px] text-accent-light font-medium">{"^"}</div>
        </div>
      </div>
    </div>
  );
}

export function SharedSessionView() {
  return (
    <div className="flex h-full">
      <LeftSidebar />
      <AnimatedTerminal />
      <TeamSidebar />
    </div>
  );
}

/* ── Animated Discussion Mode ─────────────────────────────── */

const DISCUSSION_MSGS = [
  { persona: "Pragmatist", letter: "P", color: "bg-accent/20", textColor: "text-accent-light", model: "Claude 3.5", text: "For a team of 5, microservices add operational overhead you can't sustain. Start with a monolith, extract services when you hit actual scaling bottlenecks.", time: "14:32" },
  { persona: "Visionary", letter: "V", color: "bg-[#6366f1]/20", textColor: "text-[#818cf8]", model: "GPT-4", text: "Fair counterpoint. A modular monolith with clean module boundaries gives you the best of both — enforce interfaces now, defer extraction until scale demands it.", time: "14:33" },
  { persona: "Devil's Advocate", letter: "D", color: "bg-[#f43f5e]/20", textColor: "text-[#f472b6]", model: "Claude 3.5", text: 'But "clean boundaries" in a monolith is a promise no one keeps under deadline pressure. Without infra-level separation, you end up with a distributed monolith.', time: "14:34" },
];

export function DiscussionView() {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [showVerdict, setShowVerdict] = useState(false);
  const [convergence, setConvergence] = useState(0);

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (visibleMsgs < DISCUSSION_MSGS.length) {
      t = setTimeout(() => setVisibleMsgs(v => v + 1), 1500);
    } else if (!showVerdict) {
      t = setTimeout(() => setShowVerdict(true), 1200);
    } else if (convergence < 87) {
      t = setTimeout(() => setConvergence(c => Math.min(c + 3, 87)), 30);
    } else {
      // Reset loop
      t = setTimeout(() => {
        setVisibleMsgs(0);
        setShowVerdict(false);
        setConvergence(0);
      }, 4000);
    }
    return () => clearTimeout(t);
  }, [visibleMsgs, showVerdict, convergence]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-accent/[0.04] border-b border-accent/[0.08]">
        <div className="h-5 w-5 rounded-md bg-accent/15 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <span className="text-[11px] font-medium text-fg/80">Microservices vs Monolith</span>
        <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[8px] font-mono text-accent-light uppercase tracking-wider">Round Robin</span>
        <span className="ml-auto text-[10px] text-muted-2 font-mono">Turn {Math.min(visibleMsgs + 1, 3)} / 3</span>
      </div>

      <div className="flex-1 overflow-hidden px-5 py-4 flex flex-col gap-4">
        {DISCUSSION_MSGS.slice(0, visibleMsgs).map((msg, i) => (
          <div key={i} className="animate-[message-in_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="flex items-center gap-2 mb-1.5">
              <div className={`h-[18px] w-[18px] rounded-md ${msg.color} flex items-center justify-center`}>
                <span className={`text-[8px] font-bold ${msg.textColor}`}>{msg.letter}</span>
              </div>
              <span className={`text-[11px] font-medium ${msg.textColor}`}>{msg.persona}</span>
              <span className={`rounded ${msg.color} px-1.5 py-0.5 text-[8px] ${msg.textColor}/60 font-mono`}>{msg.model}</span>
              <span className="text-[9px] text-muted-2 ml-auto font-mono">{msg.time}</span>
            </div>
            <div className="text-[12px] text-fg/60 leading-[1.7] pl-[26px]">{msg.text}</div>
          </div>
        ))}

        {/* Typing indicator while waiting */}
        {visibleMsgs < DISCUSSION_MSGS.length && visibleMsgs > 0 && (
          <div className="flex items-center gap-2 pl-[26px] animate-pulse">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-2/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-muted-2/50 animation-delay-150" />
              <div className="w-1.5 h-1.5 rounded-full bg-muted-2/50 animation-delay-300" />
            </div>
            <span className="text-[10px] text-muted-2">{DISCUSSION_MSGS[visibleMsgs].persona} is thinking...</span>
          </div>
        )}

        {showVerdict && (
          <div className="animate-[message-in_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] rounded-xl bg-green-500/[0.04] border border-green-500/[0.08] p-4 mt-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-[18px] w-[18px] items-center justify-center rounded-md bg-green-500/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[11px] font-medium text-fg/80">Verdict</span>
              <span className="rounded-full bg-green-500/10 border border-green-500/[0.15] px-2 py-0.5 text-[9px] text-green-400 font-mono">{convergence}% Converged</span>
            </div>
            <div className="text-[12px] text-fg/70 leading-[1.7] pl-[26px]">
              Modular monolith with enforced module boundaries via build-time checks. Extract to services only when a module needs independent scaling.
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 px-4 py-2.5 border-t border-white/[0.06] bg-white/[0.01]">
        <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.15em] text-muted-2 font-medium font-mono">Convergence</span>
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-green-400 transition-all duration-100"
            style={{ width: `${convergence}%` }}
          />
        </div>
        <span className={`text-[12px] font-semibold font-mono transition-colors ${convergence > 0 ? "text-green-400" : "text-muted-2"}`}>
          {convergence > 0 ? `${convergence}%` : "—"}
        </span>
      </div>
    </div>
  );
}

/* ── Animated Handoff Visual ────────────────────────────────── */

export function HandoffView() {
  const [phase, setPhase] = useState<"paused" | "syncing" | "resumed">("paused");

  useEffect(() => {
    const loop = () => {
      setPhase("paused");
      setTimeout(() => setPhase("syncing"), 2000);
      setTimeout(() => setPhase("resumed"), 3500);
      setTimeout(loop, 7000);
    };
    loop();
    return () => { /* cleanup handled by unmount */ };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.01] border-b border-white/[0.06]">
        <div className="h-5 w-5 rounded-md bg-accent/15 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>
        <span className="text-[11px] font-medium text-fg/80">auth-service refactor</span>
        <span className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[8px] font-mono text-muted-2 uppercase tracking-wider">Persistent Session</span>
      </div>

      <div className="flex-1 px-5 py-5 flex flex-col gap-3">
        {/* Jan's session */}
        <div className={`rounded-xl border p-4 transition-all duration-700 ${phase === "paused" ? "bg-white/[0.04] border-white/[0.1] shadow-lg shadow-black/20" : "bg-white/[0.025] border-white/[0.06]"}`}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[22px] w-[22px] rounded-md bg-blue-500/25 flex items-center justify-center text-[8px] font-bold text-blue-400">JT</div>
            <div className="flex-1">
              <span className="text-[11px] text-fg/75 font-medium">Jan T.</span>
              <span className="text-[10px] text-muted-2 ml-2">3:00 PM</span>
            </div>
            <span className={`rounded-md px-2 py-0.5 text-[9px] font-mono transition-all duration-500 ${phase === "paused" ? "bg-amber-400/15 border border-amber-400/15 text-amber-400" : "bg-white/[0.04] border border-white/[0.06] text-muted-2"}`}>
              {phase === "paused" ? "Active" : "Paused"}
            </span>
          </div>
          <div className="text-[12px] text-fg/50 leading-[1.7]">
            Deep session on auth middleware. 47 messages, 12 files touched, 3 decisions made.
          </div>
          <div className="flex gap-4 mt-3">
            <div className="text-[10px] text-muted-2"><span className="font-mono text-fg/40">47</span> messages</div>
            <div className="text-[10px] text-muted-2"><span className="font-mono text-fg/40">12</span> files</div>
            <div className="text-[10px] text-muted-2"><span className="font-mono text-fg/40">3</span> decisions</div>
          </div>
        </div>

        {/* Connector — animated */}
        <div className="flex items-center gap-3 py-1 px-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className={`flex items-center gap-2 transition-all duration-500 ${phase === "syncing" ? "text-accent-light scale-110" : "text-muted-2"}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-700 ${phase === "syncing" ? "animate-spin" : ""}`}>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            <span className="text-[10px] font-mono tracking-wide">{phase === "syncing" ? "Syncing..." : "Cloud Sync"}</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>

        {/* Alex's session */}
        <div className={`rounded-xl border p-4 transition-all duration-700 ${phase === "resumed" ? "bg-accent/[0.05] border-accent/[0.15] shadow-lg shadow-accent/[0.05]" : "bg-white/[0.015] border-white/[0.04] opacity-60"}`}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`h-[22px] w-[22px] rounded-md bg-emerald-500/25 flex items-center justify-center text-[8px] font-bold text-emerald-400 transition-transform duration-500 ${phase === "resumed" ? "scale-110" : ""}`}>AM</div>
            <div className="flex-1">
              <span className="text-[11px] text-fg/75 font-medium">Alex M.</span>
              <span className="text-[10px] text-muted-2 ml-2">4:00 PM</span>
            </div>
            <span className={`rounded-md px-2 py-0.5 text-[9px] font-mono transition-all duration-500 ${phase === "resumed" ? "bg-green-400/15 border border-green-400/15 text-green-400" : "bg-white/[0.04] border border-white/[0.06] text-muted-2"}`}>
              {phase === "resumed" ? "Resumed" : "Waiting"}
            </span>
          </div>
          <div className="text-[12px] text-fg/70 leading-[1.7]">
            Full context intact. Picks up exactly where Jan left off — no re-explaining, no lost decisions.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Demo (for Hero) ──────────────────────────────────── */

export default function DemoWindow() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.08] rounded-2xl">
        <WindowChrome title="CodeCouncil — auth-service" shortcut="Room c7f2" />
        <div className="h-[480px]">
          <SharedSessionView />
        </div>
      </div>
    </div>
  );
}

/* ── Standalone exports for Features sections ──────────────── */

export function DiscussionWindow() {
  return (
    <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.08] rounded-2xl">
      <WindowChrome title="CodeCouncil — Discussion" shortcut="Cmd+D" />
      <div className="h-[460px]">
        <DiscussionView />
      </div>
    </div>
  );
}

export function HandoffWindow() {
  return (
    <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.08] rounded-2xl">
      <WindowChrome title="CodeCouncil — Session Handoff" />
      <div className="h-[420px]">
        <HandoffView />
      </div>
    </div>
  );
}
