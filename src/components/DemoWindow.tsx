"use client";

const participants = [
  { initials: "JT", color: "bg-blue-500", name: "Jan" },
  { initials: "AM", color: "bg-emerald-500", name: "Alex" },
  { initials: "SK", color: "bg-amber-500", name: "Sarah" },
];

function WindowChrome({ title, shortcut }: { title: string; shortcut?: string }) {
  return (
    <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5">
      <div className="flex gap-1.5 mr-4">
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

function SharedSessionView() {
  return (
    <div className="flex flex-col gap-3 p-5">
      {/* Participant bar */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex -space-x-1.5">
          {participants.map((p) => (
            <div key={p.initials} className={`h-6 w-6 rounded-full ${p.color} flex items-center justify-center text-[9px] font-semibold text-white ring-2 ring-bg`}>
              {p.initials}
            </div>
          ))}
        </div>
        <span className="text-[10px] text-muted-2">3 in session</span>
        <span className="text-[10px] text-green-400/70 flex items-center gap-1 ml-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
          Live
        </span>
      </div>

      <div className="animate-msg group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02]" style={{ animationDelay: "0.4s" }}>
        <div className="h-7 w-7 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-[11px] font-semibold text-white transition-transform group-hover:scale-110">J</div>
        <div>
          <div className="text-xs font-medium text-fg/80 mb-1">Jan <span className="text-muted-2 font-normal">just now</span></div>
          <div className="text-sm text-muted">Can we refactor the auth middleware to use the new JWT validation? The current implementation has a race condition on token refresh.</div>
        </div>
      </div>

      <div className="animate-msg group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02]" style={{ animationDelay: "1.2s" }}>
        <div className="h-7 w-7 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-[11px] font-semibold text-white transition-transform group-hover:scale-110">A</div>
        <div>
          <div className="text-xs font-medium text-fg/80 mb-1">Alex <span className="text-muted-2 font-normal">just now</span></div>
          <div className="text-sm text-muted">Yeah, I hit that bug yesterday. Also — can we make sure the refresh token rotation works with the Redis session store?</div>
        </div>
      </div>

      {/* AI response */}
      <div className="animate-msg flex items-start gap-3 rounded-lg bg-accent/[0.04] border border-accent/8 p-3 transition-all hover:bg-accent/[0.06]" style={{ animationDelay: "2.0s" }}>
        <div className="h-7 w-7 shrink-0 rounded-full bg-accent flex items-center justify-center text-[11px] font-bold text-white">AI</div>
        <div className="flex-1">
          <div className="text-xs font-medium text-accent-light mb-1">CodeCouncil AI</div>
          <div className="text-sm text-fg/80 leading-relaxed">
            I can see both issues. The race condition is in <code className="text-xs bg-white/[0.06] px-1 py-0.5 rounded">middleware/auth.ts:47</code> — the token refresh isn&apos;t atomic. Here&apos;s a fix that also handles Redis session rotation:
          </div>
          <div className="mt-2 rounded-md bg-white/[0.03] border border-white/[0.06] p-2.5 font-mono text-[11px] text-fg/60 leading-relaxed">
            <span className="text-green-400/70">+ const refreshLock = await redis.set(</span><br />
            <span className="text-green-400/70">+   `refresh:$&#123;userId&#125;`, &apos;locked&apos;, &apos;NX&apos;, &apos;EX&apos;, 10</span><br />
            <span className="text-green-400/70">+ );</span><br />
            <span className="text-green-400/70">+ if (!refreshLock) return existing;</span>
          </div>
        </div>
      </div>

      {/* Sarah jumping in */}
      <div className="animate-msg group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02]" style={{ animationDelay: "3.0s" }}>
        <div className="h-7 w-7 shrink-0 rounded-full bg-amber-500 flex items-center justify-center text-[11px] font-semibold text-white transition-transform group-hover:scale-110">S</div>
        <div>
          <div className="text-xs font-medium text-fg/80 mb-1">Sarah <span className="text-muted-2 font-normal">just now</span></div>
          <div className="text-sm text-muted">Nice — can you also add the TTL cleanup for expired sessions? We&apos;re leaking Redis keys.</div>
        </div>
      </div>

      {/* Input */}
      <div className="animate-msg mt-1 flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 transition-colors hover:border-white/[0.1]" style={{ animationDelay: "3.6s" }}>
        <span className="text-sm text-muted-2 flex-1">Ask the AI anything — your whole team sees&nbsp;it...</span>
        <div className="h-6 w-6 rounded-md bg-accent/20 flex items-center justify-center text-accent-light text-xs">↑</div>
      </div>
    </div>
  );
}

function DiscussionView() {
  const personas = [
    { avatar: "P", name: "Pragmatist", color: "bg-accent" },
    { avatar: "V", name: "Visionary", color: "bg-[#6366f1]" },
  ];

  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase tracking-widest text-muted-2 font-medium">Architecture Decision</span>
        <span className="rounded-full bg-accent/10 border border-accent/15 px-2 py-0.5 text-[10px] text-accent-light">Discussion Mode</span>
      </div>

      <div className="animate-msg group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02]" style={{ animationDelay: "0.4s" }}>
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${personas[0].color}`}>{personas[0].avatar}</div>
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-xs font-medium text-fg/80">{personas[0].name}</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-muted-2">Turn 1</span>
          </div>
          <div className="text-sm text-muted">Microservices add operational overhead a team of 5 can&apos;t sustain. Start monolith, extract later.</div>
        </div>
      </div>

      <div className="animate-msg group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.02]" style={{ animationDelay: "1.2s" }}>
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${personas[1].color}`}>{personas[1].avatar}</div>
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-xs font-medium text-fg/80">{personas[1].name}</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-muted-2">Turn 2</span>
          </div>
          <div className="text-sm text-muted">Fair point. Modular monolith with clean interfaces — you get the boundaries without the infra tax.</div>
        </div>
      </div>

      <div className="animate-msg rounded-lg bg-accent/[0.06] border border-accent/10 p-3" style={{ animationDelay: "2.0s" }}>
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white font-bold">✓</div>
          <span className="text-xs font-medium text-fg/80">Verdict</span>
          <span className="rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-[10px] text-green-400">Converged</span>
        </div>
        <div className="text-sm text-fg/90">Start with a modular monolith. Enforce module boundaries now, defer extraction until scale demands it.</div>
      </div>

      <div className="animate-msg flex items-center gap-3 border-t border-white/[0.06] pt-3" style={{ animationDelay: "2.6s" }}>
        <span className="whitespace-nowrap text-[11px] uppercase tracking-widest text-muted-2 font-medium">Convergence</span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="animate-fill h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light" />
        </div>
        <span className="animate-fade-in text-sm font-semibold text-accent-light">87%</span>
      </div>
    </div>
  );
}

export default function DemoWindow() {
  return (
    <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-5">
      <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.04]">
        <WindowChrome title="codecouncil — shared session" shortcut="⌘N" />
        <div className="min-h-[440px]">
          <SharedSessionView />
        </div>
      </div>

      <div className="glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.04]">
        <WindowChrome title="codecouncil — discussion mode" shortcut="⌘D" />
        <div className="min-h-[440px]">
          <DiscussionView />
        </div>
      </div>
    </div>
  );
}
