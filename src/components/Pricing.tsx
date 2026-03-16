"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealWrapper } from "./Features";

const DOWNLOAD_URL = "https://github.com/jantokic/hivemind/releases/download/v0.1.4/mediator-0.1.4-arm64.dmg";

const check = (
  <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const checkMuted = (
  <svg className="w-4 h-4 text-muted-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const freePlan = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Everything you need to get started with AI-powered collaboration.",
  cta: "Download Free",
  href: DOWNLOAD_URL,
  features: [
    { text: "Unlimited solo sessions", included: true },
    { text: "All 100+ AI models", included: true },
    { text: "4 built-in personas + custom", included: true },
    { text: "MCP integration", included: true },
    { text: "Menu bar app", included: true },
    { text: "Up to 3 team members", included: true },
    { text: "Basic session history", included: true },
  ],
};

const proPlan = {
  name: "Pro",
  price: "$15",
  period: "per user/mo",
  description: "For teams that need real-time collaboration, cloud access, and full control.",
  cta: "Get CodeCouncil Pro",
  href: "#",
  features: [
    { text: "Everything in Free, plus:", included: true, bold: true },
    { text: "Unlimited team members", included: true },
    { text: "Real-time team collaboration", included: true },
    { text: "Task management", included: true },
    { text: "Cloud sessions", included: true },
    { text: "Role-based permissions", included: true },
    { text: "Mobile app", included: true, soon: true },
    { text: "Priority support", included: true },
    { text: "Session analytics", included: true },
  ],
};

const proFeatures = [
  {
    id: "collab",
    icon: "👥",
    label: "Team Collaboration",
    description: "Invite your team to shared sessions. See real-time updates, sync configurations, and manage team access across agents.",
    visual: <CollabPreview />,
  },
  {
    id: "tasks",
    icon: "📋",
    label: "Tasks",
    description: "Assign and track tasks across your team. AI agents can create, update, and resolve tasks during sessions.",
    visual: <TasksPreview />,
  },
  {
    id: "cloud",
    icon: "☁️",
    label: "Cloud Sessions",
    description: "Access your sessions from anywhere with cloud-hosted environments. Sync across desktop, web, and mobile.",
    visual: <CloudPreview />,
    soon: true,
  },
  {
    id: "mobile",
    icon: "📱",
    label: "Mobile App",
    description: "Review verdicts, monitor debates, and collaborate on the go. Available for iOS and Android.",
    visual: <MobilePreview />,
    soon: true,
  },
];

function CollabPreview() {
  const members = [
    { initials: "JT", color: "bg-blue-500" },
    { initials: "AM", color: "bg-emerald-500" },
    { initials: "SK", color: "bg-amber-500" },
    { initials: "LR", color: "bg-pink-500" },
  ];
  const activity = [
    { name: "Sarah", action: "started a debate", time: "2m" },
    { name: "Alex", action: "shared architecture RFC", time: "5m" },
    { name: "Jan", action: "approved verdict", time: "12m" },
  ];

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 mb-3">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]/60" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]/60" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]/60" />
        </div>
        <span className="text-xs text-muted-2 ml-2">Team</span>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-2">Online Now</div>
      <div className="flex gap-1.5 mb-4">
        {members.map((m) => (
          <div key={m.initials} className={`h-8 w-8 rounded-full ${m.color} flex items-center justify-center text-[10px] font-semibold text-white`}>
            {m.initials}
          </div>
        ))}
        <div className="h-8 w-8 rounded-full bg-white/[0.06] flex items-center justify-center text-[10px] text-muted-2">+3</div>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-2">Recent Activity</div>
      <div className="flex flex-col gap-1.5">
        {activity.map((a) => (
          <div key={a.name} className="flex items-center gap-2 text-xs">
            <span className="text-green-400/70">✓</span>
            <span className="text-fg/70"><span className="font-medium">{a.name}</span> {a.action}</span>
            <span className="text-muted-2 ml-auto text-[10px]">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksPreview() {
  const tasks = [
    { title: "Review API gateway verdict", status: "done", assignee: "JT" },
    { title: "Share performance benchmarks", status: "progress", assignee: "AM" },
    { title: "Run auth architecture debate", status: "todo", assignee: "SK" },
  ];
  const statusColors: Record<string, string> = {
    done: "bg-green-400",
    progress: "bg-yellow-400",
    todo: "bg-white/20",
  };
  const statusLabels: Record<string, string> = {
    done: "Done",
    progress: "In Progress",
    todo: "To Do",
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 mb-3">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]/60" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]/60" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]/60" />
        </div>
        <span className="text-xs text-muted-2 ml-2">Tasks</span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((t) => (
          <div key={t.title} className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-white/[0.04] px-3 py-2.5 transition-colors hover:bg-white/[0.04]">
            <div className={`h-2 w-2 rounded-full ${statusColors[t.status]}`} />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-fg/80 truncate">{t.title}</div>
              <div className="text-[10px] text-muted-2">{statusLabels[t.status]}</div>
            </div>
            <div className="h-6 w-6 rounded-full bg-white/[0.06] flex items-center justify-center text-[9px] text-muted-2 font-medium">{t.assignee}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudPreview() {
  const devices = [
    { icon: "🖥", label: "Desktop", active: true },
    { icon: "☁️", label: "Cloud", active: true, primary: true },
    { icon: "📱", label: "Mobile", active: false },
  ];
  const workspaces = [
    { name: "codecouncil-app", branch: "main", synced: true },
    { name: "api-server", branch: "feature/auth", synced: true },
    { name: "mobile-app", branch: "dev", synced: true },
  ];

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 mb-3">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]/60" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]/60" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]/60" />
        </div>
        <span className="text-xs text-muted-2 ml-2">Cloud</span>
      </div>
      <div className="flex items-center justify-center gap-6 mb-4 py-2">
        {devices.map((d) => (
          <div key={d.label} className="flex flex-col items-center gap-1.5">
            <div className={`text-xl ${d.primary ? "scale-125" : ""} ${d.active ? "" : "opacity-40"}`}>{d.icon}</div>
            {d.primary && (
              <div className="flex gap-0.5">
                <div className="h-0.5 w-4 rounded-full bg-muted-2" />
                <div className="h-0.5 w-4 rounded-full bg-muted-2" />
              </div>
            )}
            <span className="text-[10px] text-muted-2">{d.label}</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-2">Synced Sessions</div>
      <div className="flex flex-col gap-1.5">
        {workspaces.map((w) => (
          <div key={w.name} className="flex items-center gap-2 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-fg/70">{w.name}</span>
            <span className="text-muted-2 ml-auto text-[10px]">{w.branch}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 mb-3">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]/60" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]/60" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]/60" />
        </div>
        <span className="text-xs text-muted-2 ml-2">Mobile</span>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-[140px] h-[220px] rounded-2xl border border-white/[0.08] bg-white/[0.02] flex flex-col overflow-hidden">
          {/* Phone status bar */}
          <div className="flex items-center justify-between px-3 py-1.5">
            <span className="text-[8px] text-muted-2">9:41</span>
            <div className="w-12 h-1.5 rounded-full bg-white/[0.15]" />
            <span className="text-[8px] text-muted-2">⚡</span>
          </div>
          {/* Content */}
          <div className="flex-1 px-2.5 py-2 flex flex-col gap-1.5">
            <div className="text-[9px] font-medium text-fg/80">Active Sessions</div>
            <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-1.5">
              <div className="text-[8px] text-fg/70">API Gateway Debate</div>
              <div className="text-[7px] text-green-400/70">Converged — 87%</div>
            </div>
            <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-1.5">
              <div className="text-[8px] text-fg/70">Auth Architecture</div>
              <div className="text-[7px] text-yellow-400/70">Round 3/10</div>
            </div>
            <div className="rounded-md bg-accent/[0.08] border border-accent/10 p-1.5">
              <div className="text-[8px] text-accent-light">+ New Session</div>
            </div>
          </div>
          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-white/[0.06] py-1.5 px-2">
            <span className="text-[8px] text-accent-light">💬</span>
            <span className="text-[8px] text-muted-2">📋</span>
            <span className="text-[8px] text-muted-2">👥</span>
            <span className="text-[8px] text-muted-2">⚙️</span>
          </div>
        </div>
      </div>
      <div className="text-center text-[10px] text-muted-2 mt-1">iOS & Android</div>
    </div>
  );
}

export default function Pricing() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="pricing" className="relative px-6 py-28">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <RevealWrapper>
          <div className="text-center mb-16">
            <span className="badge mx-auto">Pricing</span>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.1] tracking-tight">
              Start free, scale with <span className="accent-serif">your team</span>
            </h2>
            <p className="mt-4 text-[17px] text-muted max-w-[500px] mx-auto">
              Everything you need for solo use. Upgrade when your team is ready.
            </p>
          </div>
        </RevealWrapper>

        {/* Pricing cards */}
        <RevealWrapper>
          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-24">
            {/* Free */}
            <div className="glass-card p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{freePlan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-light text-[#DFDFF2] hero-heading">{freePlan.price}</span>
                  <span className="text-sm text-muted-2">{freePlan.period}</span>
                </div>
                <p className="text-sm text-muted">{freePlan.description}</p>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {freePlan.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    {checkMuted}
                    <span className="text-sm text-muted">{f.text}</span>
                  </div>
                ))}
              </div>

              <Link href={freePlan.href} className="btn-pill btn-secondary w-full justify-center">
                {freePlan.cta}
              </Link>
            </div>

            {/* Pro */}
            <div className="glass-card-strong p-8 flex flex-col relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-semibold">{proPlan.name}</h3>
                  <span className="rounded-full bg-accent/15 border border-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-light uppercase tracking-wide">Popular</span>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-light text-[#DFDFF2] hero-heading">{proPlan.price}</span>
                  <span className="text-sm text-muted-2">{proPlan.period}</span>
                </div>
                <p className="text-sm text-muted">{proPlan.description}</p>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {proPlan.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    {check}
                    <span className={`text-sm ${f.bold ? "text-fg/90 font-medium" : "text-muted"}`}>
                      {f.text}
                    </span>
                    {f.soon && (
                      <span className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-muted-2">Soon</span>
                    )}
                  </div>
                ))}
              </div>

              <Link href={proPlan.href} className="btn-pill btn-accent w-full justify-center">
                {proPlan.cta}
              </Link>
            </div>
          </div>
        </RevealWrapper>

        {/* Pro feature showcase */}
        <RevealWrapper>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold tracking-tight">
              What&apos;s in <span className="accent-serif">Pro</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 max-w-[900px] mx-auto">
            {/* Feature tabs */}
            <div className="flex flex-col gap-1">
              {proFeatures.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                    activeFeature === i
                      ? "bg-white/[0.06] border border-white/[0.08]"
                      : "border border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="text-lg">{f.icon}</span>
                  <div>
                    <div className={`text-sm font-medium transition-colors ${activeFeature === i ? "text-fg" : "text-muted"}`}>
                      {f.label}
                    </div>
                    {f.soon && (
                      <span className="text-[10px] text-muted-2">(Coming Soon)</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Feature preview */}
            <div>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-1">
                  {proFeatures[activeFeature].label}
                  {proFeatures[activeFeature].soon && (
                    <span className="ml-2 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-muted-2 font-normal align-middle">Coming Soon</span>
                  )}
                </h4>
                <p className="text-sm text-muted">{proFeatures[activeFeature].description}</p>
              </div>
              {proFeatures[activeFeature].visual}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
