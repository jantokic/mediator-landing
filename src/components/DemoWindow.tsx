"use client";

const messages = [
  {
    avatar: "P",
    name: "Pragmatist",
    tag: "Turn 1",
    text: "Microservices add operational overhead a team of 5 can't sustain. Start monolith, extract later when you hit real scaling pain.",
    delay: "0.6s",
  },
  {
    avatar: "V",
    name: "Visionary",
    tag: "Turn 2",
    text: "Fair point on team size. But domain boundaries are clear — auth, billing, core product. Modular monolith with clean interfaces sets you up without the infra tax.",
    delay: "1.4s",
  },
  {
    avatar: "P",
    name: "Pragmatist",
    tag: "Turn 3",
    text: "Agreed. Modular monolith with well-defined module boundaries. One deploy target, shared DB, strict interface contracts.",
    delay: "2.2s",
  },
  {
    avatar: "✓",
    name: "Verdict",
    tag: null,
    text: "Both agents converged: start with a modular monolith, enforce clean module boundaries, defer microservices until team and scale warrant it.",
    delay: "3.0s",
    isVerdict: true,
  },
];

export default function DemoWindow() {
  return (
    <div className="mx-auto max-w-[960px] border border-border bg-white/[0.02] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-2 w-2 rounded-full bg-[rgba(255,95,87,0.5)]" />
        <div className="h-2 w-2 rounded-full bg-[rgba(254,188,46,0.5)]" />
        <div className="h-2 w-2 rounded-full bg-[rgba(40,200,64,0.5)]" />
        <span className="flex-1 text-center font-mono text-xs text-muted-2">
          mediator — architecture debate
        </span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-4 p-7">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="animate-msg flex items-start gap-3"
            style={{ animationDelay: msg.delay }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-border font-mono text-xs font-medium text-muted">
              {msg.avatar}
            </div>
            <div className="flex-1">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="text-xs font-medium text-muted">
                  {msg.name}
                </span>
                {msg.tag && (
                  <span className="border border-border px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-muted-2">
                    {msg.tag}
                  </span>
                )}
              </div>
              <div
                className={`text-sm leading-relaxed text-muted ${
                  msg.isVerdict
                    ? "border-l-2 border-accent/40 pl-3 text-fg"
                    : ""
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {/* Convergence bar */}
        <div
          className="animate-msg mt-2 flex items-center gap-3 border-t border-border pt-3"
          style={{ animationDelay: "3.6s" }}
        >
          <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-muted-2">
            Convergence
          </span>
          <div className="h-0.5 flex-1 overflow-hidden bg-border">
            <div className="animate-fill h-full bg-gradient-to-r from-accent-dark to-accent" />
          </div>
          <span className="animate-fade-in font-mono text-sm font-medium text-accent">
            87%
          </span>
        </div>
      </div>
    </div>
  );
}
