"use client";

function WindowChrome({ title, shortcut }: { title: string; shortcut?: string }) {
  return (
    <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5">
      <div className="flex gap-1.5 mr-4" aria-hidden="true">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60 transition-colors hover:bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60 transition-colors hover:bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60 transition-colors hover:bg-[#28c840]" />
      </div>
      <span className="text-xs font-medium text-fg/60 flex-1">{title}</span>
      {shortcut && (
        <span className="text-[10px] text-muted-2 bg-white/[0.04] px-2 py-0.5 rounded-md max-sm:hidden">{shortcut}</span>
      )}
    </div>
  );
}

/* ── Shared Session Window ─────────────────────────────────── */

function LeftSidebar() {
  return (
    <div className="w-[160px] shrink-0 border-r border-white/[0.06] bg-white/[0.01] flex flex-col max-md:hidden">
      <div className="px-3 pt-3 pb-2">
        <span className="text-[10px] font-mono text-muted-2 uppercase tracking-widest">Workspaces</span>
      </div>
      <div className="flex-1 px-2 flex flex-col gap-1">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/[0.04] border-l-2 border-accent">
          <div className="h-5 w-5 rounded bg-blue-500/20 flex items-center justify-center text-[8px] font-bold text-blue-400">AS</div>
          <div className="min-w-0">
            <div className="text-[11px] font-medium text-fg/80 truncate">auth-service</div>
            <div className="text-[9px] font-mono text-muted-2">main</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] transition-colors">
          <div className="h-5 w-5 rounded bg-emerald-500/20 flex items-center justify-center text-[8px] font-bold text-emerald-400">AP</div>
          <div className="min-w-0">
            <div className="text-[11px] text-fg/50 truncate">api-gateway</div>
            <div className="text-[9px] font-mono text-muted-2">feat/v2</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] transition-colors">
          <div className="h-5 w-5 rounded bg-amber-500/20 flex items-center justify-center text-[8px] font-bold text-amber-400">FE</div>
          <div className="min-w-0">
            <div className="text-[11px] text-fg/50 truncate">frontend</div>
            <div className="text-[9px] font-mono text-muted-2">main</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalArea() {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Tab bar */}
      <div className="flex items-center border-b border-white/[0.06] px-2 py-1 gap-1">
        <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded text-[10px] text-fg/80">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          claude-code
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] text-muted-2 hover:bg-white/[0.02] transition-colors">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-3" />
          shell
        </div>
        <div className="ml-auto text-[10px] text-muted-2 hover:text-muted transition-colors cursor-pointer">+ Terminal</div>
      </div>

      {/* Room bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/[0.06] bg-white/[0.01]">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        <span className="text-[10px] text-muted-2">Connected</span>
        <span className="text-[10px] font-mono text-accent-light tracking-wider">ROOM c7f2</span>
        <div className="flex -space-x-1 ml-auto">
          <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-[7px] font-bold text-white ring-1 ring-bg">J</div>
          <div className="h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center text-[7px] font-bold text-white ring-1 ring-bg">A</div>
          <div className="h-4 w-4 rounded-full bg-amber-500 flex items-center justify-center text-[7px] font-bold text-white ring-1 ring-bg">S</div>
        </div>
      </div>

      {/* Terminal content */}
      <div className="flex-1 bg-[#0a0a0a] p-3 font-mono text-[11px] leading-relaxed overflow-hidden">
        <div className="animate-msg text-muted-2" style={{ animationDelay: "0.3s" }}>
          <span className="text-accent-light">❯</span> <span className="text-fg/70">Can we refactor the auth middleware to use JWT validation?</span>
        </div>
        <div className="animate-msg mt-2 text-fg/60" style={{ animationDelay: "0.8s" }}>
          I&apos;ll analyze the auth middleware. The race condition is in{" "}
          <span className="text-accent-light">middleware/auth.ts:47</span> — the token refresh isn&apos;t atomic.
        </div>
        <div className="animate-msg mt-2" style={{ animationDelay: "1.4s" }}>
          <span className="text-muted-2">  auth-service/middleware/auth.ts</span>
        </div>
        <div className="animate-msg mt-1" style={{ animationDelay: "1.8s" }}>
          <span className="text-green-400/70">+ const refreshLock = await redis.set(</span>
        </div>
        <div className="animate-msg" style={{ animationDelay: "2.0s" }}>
          <span className="text-green-400/70">+   `refresh:$&#123;userId&#125;`, &apos;locked&apos;, &apos;NX&apos;, &apos;EX&apos;, 10</span>
        </div>
        <div className="animate-msg" style={{ animationDelay: "2.2s" }}>
          <span className="text-green-400/70">+ );</span>
        </div>
        <div className="animate-msg" style={{ animationDelay: "2.4s" }}>
          <span className="text-green-400/70">+ if (!refreshLock) return existing;</span>
        </div>
        <div className="animate-msg mt-2 text-fg/60" style={{ animationDelay: "3.0s" }}>
          <span className="text-green-400/80">✓</span> Applied fix to <span className="text-accent-light">middleware/auth.ts</span>
        </div>
        <div className="animate-msg mt-1 text-fg/60" style={{ animationDelay: "3.4s" }}>
          <span className="text-green-400/80">✓</span> Added Redis session rotation
        </div>
        <div className="animate-msg mt-2" style={{ animationDelay: "4.0s" }}>
          <span className="text-accent-light">❯</span> <span className="inline-block w-1.5 h-3 bg-fg/60 animate-pulse align-text-bottom" />
        </div>
      </div>
    </div>
  );
}

function TeamSidebar() {
  return (
    <div className="w-[150px] shrink-0 border-l border-white/[0.06] bg-white/[0.01] flex flex-col max-lg:hidden">
      {/* Tabs */}
      <div className="flex border-b border-white/[0.06]">
        <div className="flex-1 text-center py-1.5 text-[10px] font-medium text-fg/70 border-b border-accent">Team</div>
        <div className="flex-1 text-center py-1.5 text-[10px] text-muted-2">Activity</div>
      </div>

      <div className="flex-1 px-2 pt-2">
        <div className="text-[9px] uppercase tracking-widest text-muted-2 px-1 mb-1.5">Online — 3</div>

        <div className="flex items-center gap-2 px-1 py-1">
          <div className="relative">
            <div className="h-5 w-5 rounded bg-blue-500/30 flex items-center justify-center text-[8px] font-bold text-blue-400">JT</div>
            <div className="absolute -bottom-0.5 -right-0.5 h-[6px] w-[6px] rounded-full bg-green-400 ring-1 ring-[#0a0a0a]" />
          </div>
          <div>
            <div className="text-[10px] text-fg/80">Jan T.</div>
            <div className="text-[8px] font-mono text-muted-2">claude-code</div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-1 py-1">
          <div className="relative">
            <div className="h-5 w-5 rounded bg-emerald-500/30 flex items-center justify-center text-[8px] font-bold text-emerald-400">AM</div>
            <div className="absolute -bottom-0.5 -right-0.5 h-[6px] w-[6px] rounded-full bg-green-400 ring-1 ring-[#0a0a0a]" />
          </div>
          <div>
            <div className="text-[10px] text-fg/80">Alex M.</div>
            <div className="text-[8px] font-mono text-muted-2">reviewing</div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-1 py-1">
          <div className="relative">
            <div className="h-5 w-5 rounded bg-amber-500/30 flex items-center justify-center text-[8px] font-bold text-amber-400">SK</div>
            <div className="absolute -bottom-0.5 -right-0.5 h-[6px] w-[6px] rounded-full bg-green-400 ring-1 ring-[#0a0a0a]" />
          </div>
          <div>
            <div className="text-[10px] text-fg/80">Sarah K.</div>
            <div className="text-[8px] font-mono text-muted-2">shell</div>
          </div>
        </div>
      </div>

      {/* Chat input */}
      <div className="p-2 border-t border-white/[0.06]">
        <div className="flex items-center gap-1 rounded bg-white/[0.03] border border-white/[0.06] px-2 py-1">
          <span className="text-[9px] text-muted-2 flex-1">Message team...</span>
          <div className="h-4 w-4 rounded bg-accent-dark/40 flex items-center justify-center text-[8px] text-accent-light">↑</div>
        </div>
      </div>
    </div>
  );
}

function SharedSessionView() {
  return (
    <div className="flex h-full">
      <LeftSidebar />
      <TerminalArea />
      <TeamSidebar />
    </div>
  );
}

/* ── Discussion Mode Window ────────────────────────────────── */

function DiscussionView() {
  return (
    <div className="flex flex-col h-full">
      {/* Discussion banner */}
      <div className="flex items-center gap-2 px-4 py-2 bg-accent/[0.06] border-b border-accent/10">
        <span className="text-[10px] font-medium text-fg/80">Microservices vs Monolith</span>
        <span className="rounded bg-accent-dark/30 px-1.5 py-0.5 text-[8px] font-mono text-accent-light uppercase tracking-wider">Round Robin</span>
        <span className="ml-auto text-[10px] text-muted-2">Turn 3 of 4</span>
      </div>

      {/* Discussion thread */}
      <div className="flex-1 overflow-hidden px-4 py-3 flex flex-col gap-3">
        <div className="animate-msg" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-medium text-accent-light">Pragmatist</span>
            <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[8px] text-accent-light">Claude 3.5</span>
            <span className="text-[9px] text-muted-2 font-mono">#1</span>
            <span className="text-[9px] text-muted-2 ml-auto">14:32</span>
          </div>
          <div className="text-[12px] text-fg/70 leading-relaxed pl-0.5">
            For a team of 5, microservices add operational overhead you can&apos;t sustain. Start with a monolith, extract services when you hit actual scaling bottlenecks. Premature decomposition is the root of all evil here.
          </div>
        </div>

        <div className="animate-msg" style={{ animationDelay: "1.0s" }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-medium text-[#818cf8]">Visionary</span>
            <span className="rounded bg-[#6366f1]/10 px-1.5 py-0.5 text-[8px] text-[#818cf8]">GPT-4</span>
            <span className="text-[9px] text-muted-2 font-mono">#2</span>
            <span className="text-[9px] text-muted-2 ml-auto">14:33</span>
          </div>
          <div className="text-[12px] text-fg/70 leading-relaxed pl-0.5">
            Fair counterpoint. A modular monolith with clean module boundaries gives you the best of both — enforce interfaces now, defer infrastructure extraction until scale demands it.
          </div>
        </div>

        <div className="animate-msg" style={{ animationDelay: "1.8s" }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-medium text-[#f472b6]">Devil&apos;s Advocate</span>
            <span className="rounded bg-[#f43f5e]/10 px-1.5 py-0.5 text-[8px] text-[#f472b6]">Claude 3.5</span>
            <span className="text-[9px] text-muted-2 font-mono">#3</span>
            <span className="text-[9px] text-muted-2 ml-auto">14:34</span>
          </div>
          <div className="text-[12px] text-fg/70 leading-relaxed pl-0.5">
            But &quot;clean boundaries&quot; in a monolith is a promise no one keeps under deadline pressure. If you don&apos;t enforce separation at the infra level, you&apos;ll end up with a distributed monolith anyway — the worst of both worlds.
          </div>
        </div>

        {/* Convergence verdict */}
        <div className="animate-msg rounded-lg bg-accent/[0.04] border border-accent/10 p-3 mt-1" style={{ animationDelay: "2.8s" }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[8px] text-white font-bold">✓</div>
            <span className="text-[11px] font-medium text-fg/80">Verdict</span>
            <span className="rounded-full bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 text-[9px] text-green-400">87% Converged</span>
          </div>
          <div className="text-[12px] text-fg/80 leading-relaxed">
            Modular monolith with enforced module boundaries via build-time checks. Extract to services only when a module needs independent scaling or deployment.
          </div>
        </div>
      </div>

      {/* Convergence bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-t border-white/[0.06]">
        <span className="whitespace-nowrap text-[9px] uppercase tracking-widest text-muted-2 font-medium font-mono">Convergence</span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="animate-fill h-full rounded-full bg-gradient-to-r from-accent-dark to-green-400" />
        </div>
        <span className="animate-fade-in text-[12px] font-semibold text-green-400 font-mono">87%</span>
      </div>
    </div>
  );
}

export default function DemoWindow() {
  return (
    <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-5">
      <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.04]">
        <WindowChrome title="CodeCouncil — auth-service" shortcut="⌘N" />
        <div className="h-[460px]">
          <SharedSessionView />
        </div>
      </div>

      <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.04]">
        <WindowChrome title="CodeCouncil — Discussion" shortcut="⌘D" />
        <div className="h-[460px]">
          <DiscussionView />
        </div>
      </div>
    </div>
  );
}
