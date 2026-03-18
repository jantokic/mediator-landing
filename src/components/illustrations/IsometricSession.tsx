"use client";

interface SessionProps {
  className?: string;
}

export function SessionIllustration({ className }: SessionProps) {
  return (
    <div className={className} aria-hidden="true">
      <style>{`
        @keyframes sessionFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes terminalCursor {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.15; }
        }
        @keyframes dataStream {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes panelGlow {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.14; }
        }
      `}</style>
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="ss-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="ss-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="ss-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="ss-sidebar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <filter id="ss-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint background grid */}
        <g opacity="0.025">
          {Array.from({ length: 16 }, (_, i) => (
            <line
              key={`sg-v-${i}`}
              x1={30 + i * 28}
              y1="10"
              x2={30 + i * 28}
              y2="350"
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={`sg-h-${i}`}
              x1="20"
              y1={20 + i * 28}
              x2="460"
              y2={20 + i * 28}
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* ===== MAIN TERMINAL WINDOW (back, largest) ===== */}
        <g
          transform="translate(40, 30) skewY(-4) skewX(8)"
          style={{ animation: "sessionFloat 10s ease-in-out infinite" }}
        >
          <rect
            width="340"
            height="230"
            rx="10"
            fill="url(#ss-bg)"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />

          {/* Titlebar */}
          <rect width="340" height="28" rx="10" fill="url(#ss-bar)" />
          <rect y="14" width="340" height="14" fill="url(#ss-bar)" />
          {/* Traffic light dots */}
          <circle cx="16" cy="14" r="3" fill="white" fillOpacity="0.08" />
          <circle cx="28" cy="14" r="3" fill="white" fillOpacity="0.06" />
          <circle cx="40" cy="14" r="3" fill="white" fillOpacity="0.06" />
          {/* Title */}
          <rect x="130" y="10" width="80" height="4" rx="2" fill="white" fillOpacity="0.06" />

          {/* Sidebar panel */}
          <rect x="0" y="28" width="80" height="202" fill="url(#ss-sidebar)" />
          <line x1="80" y1="28" x2="80" y2="230" stroke="white" strokeOpacity="0.04" strokeWidth="0.5" />

          {/* Sidebar items */}
          {[40, 56, 72, 88, 104].map((y, i) => (
            <g key={`si-${i}`}>
              <rect
                x="10"
                y={y}
                width="60"
                height="10"
                rx="3"
                fill={i === 0 ? "#8b7bf5" : "white"}
                fillOpacity={i === 0 ? 0.08 : 0.02}
                stroke={i === 0 ? "#8b7bf5" : "transparent"}
                strokeOpacity={i === 0 ? 0.15 : 0}
                strokeWidth="0.5"
              />
              <circle cx="18" cy={y + 5} r="2" fill={i === 0 ? "#8b7bf5" : "white"} fillOpacity={i === 0 ? 0.3 : 0.06} />
              <rect x="24" y={y + 3} width={28 + (i % 3) * 6} height="2.5" rx="1" fill="white" fillOpacity={i === 0 ? 0.08 : 0.04} />
            </g>
          ))}

          {/* Session status dot */}
          <circle cx="66" cy="42" r="2" fill="#34d399" fillOpacity="0.5" />

          {/* Main content area — terminal lines */}
          <g transform="translate(92, 40)">
            {/* Prompt line 1 */}
            <rect x="0" y="4" width="10" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.25" />
            <rect x="14" y="4" width="120" height="3" rx="1.5" fill="white" fillOpacity="0.06" />

            {/* Response block */}
            <rect x="0" y="16" width="200" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
            <rect x="0" y="24" width="180" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
            <rect x="0" y="32" width="220" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
            <rect x="0" y="40" width="160" height="3" rx="1.5" fill="white" fillOpacity="0.03" />

            {/* Code block highlight */}
            <rect x="0" y="52" width="230" height="40" rx="4" fill="#8b7bf5" fillOpacity="0.03" stroke="#8b7bf5" strokeOpacity="0.06" strokeWidth="0.5" />
            <rect x="8" y="58" width="140" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.08" />
            <rect x="8" y="66" width="180" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.06" />
            <rect x="8" y="74" width="120" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.08" />
            <rect x="8" y="82" width="100" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.05" />

            {/* More content */}
            <rect x="0" y="100" width="190" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
            <rect x="0" y="108" width="150" height="3" rx="1.5" fill="white" fillOpacity="0.03" />

            {/* Current prompt with blinking cursor */}
            <rect x="0" y="124" width="10" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.25" />
            <rect x="14" y="124" width="80" height="3" rx="1.5" fill="white" fillOpacity="0.06" />
            <rect
              x="98"
              y="122"
              width="2"
              height="8"
              rx="1"
              fill="#8b7bf5"
              fillOpacity="0.7"
              style={{ animation: "terminalCursor 1s ease-in-out infinite" }}
            />
          </g>

          {/* User avatars in the corner — live participants */}
          <g transform="translate(284, 38)">
            <circle cx="0" cy="0" r="8" fill="#60a5fa" fillOpacity="0.12" stroke="#60a5fa" strokeOpacity="0.25" strokeWidth="0.6" />
            <circle cx="18" cy="0" r="8" fill="#34d399" fillOpacity="0.12" stroke="#34d399" strokeOpacity="0.25" strokeWidth="0.6" />
            <circle cx="36" cy="0" r="8" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="0.6" />
            {/* Live indicator */}
            <circle cx="0" cy="-8" r="2" fill="#34d399" fillOpacity="0.6" />
            <circle cx="18" cy="-8" r="2" fill="#34d399" fillOpacity="0.6" />
            <circle cx="36" cy="-8" r="2" fill="#34d399" fillOpacity="0.4" />
          </g>
        </g>

        {/* ===== FLOATING CONTEXT PANEL (right, overlapping) ===== */}
        <g
          transform="translate(300, 100) skewY(-4) skewX(8)"
          style={{ animation: "sessionFloat 10s ease-in-out 1.5s infinite" }}
        >
          <rect
            width="150"
            height="160"
            rx="8"
            fill="url(#ss-accent)"
            stroke="#8b7bf5"
            strokeOpacity="0.1"
            strokeWidth="0.8"
          />

          {/* Header */}
          <rect width="150" height="22" rx="8" fill="#8b7bf5" fillOpacity="0.05" />
          <rect y="11" width="150" height="11" fill="#8b7bf5" fillOpacity="0.05" />
          <rect x="10" y="8" width="50" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.15" />

          {/* Context items */}
          {[30, 52, 74, 96, 118].map((y, i) => (
            <g key={`ctx-${i}`}>
              <rect x="10" y={y} width="130" height="16" rx="3" fill="white" fillOpacity={0.02 + (i === 1 ? 0.02 : 0)} stroke="white" strokeOpacity={i === 1 ? 0.06 : 0.03} strokeWidth="0.5" />
              <circle cx="20" cy={y + 8} r="3" fill={i === 1 ? "#8b7bf5" : "white"} fillOpacity={i === 1 ? 0.2 : 0.06} />
              <rect x="28" y={y + 4} width={50 + (i % 3) * 15} height="2.5" rx="1" fill="white" fillOpacity="0.06" />
              <rect x="28" y={y + 9} width={30 + (i % 2) * 20} height="2" rx="1" fill="white" fillOpacity="0.03" />
            </g>
          ))}

          {/* Glow effect on active item */}
          <rect
            x="9"
            y="51"
            width="132"
            height="18"
            rx="3.5"
            fill="transparent"
            stroke="#8b7bf5"
            strokeOpacity="0.12"
            strokeWidth="0.8"
            style={{ animation: "panelGlow 3s ease-in-out infinite" }}
          />
        </g>

        {/* ===== SMALL FLOATING CHAT BUBBLE (top right) ===== */}
        <g
          transform="translate(340, 40) skewY(-4) skewX(8)"
          style={{ animation: "sessionFloat 10s ease-in-out 3s infinite" }}
        >
          <rect
            width="100"
            height="50"
            rx="6"
            fill="white"
            fillOpacity="0.03"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="0.6"
          />
          <circle cx="14" cy="16" r="5" fill="#60a5fa" fillOpacity="0.12" stroke="#60a5fa" strokeOpacity="0.2" strokeWidth="0.5" />
          <rect x="24" y="12" width="60" height="3" rx="1.5" fill="white" fillOpacity="0.05" />
          <rect x="24" y="18" width="40" height="2" rx="1" fill="white" fillOpacity="0.03" />
          <circle cx="14" cy="36" r="5" fill="#34d399" fillOpacity="0.12" stroke="#34d399" strokeOpacity="0.2" strokeWidth="0.5" />
          <rect x="24" y="32" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.05" />
          <rect x="24" y="38" width="35" height="2" rx="1" fill="white" fillOpacity="0.03" />
        </g>

        {/* ===== DATA FLOW CONNECTIONS ===== */}
        <g>
          {/* Main window to context panel */}
          <path
            d="M370 180 Q 385 175, 395 165"
            stroke="#8b7bf5"
            strokeOpacity="0.1"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            style={{ animation: "dataStream 3s linear infinite" }}
            fill="none"
          />
          {/* Main window to chat */}
          <path
            d="M370 100 Q 380 80, 390 70"
            stroke="#8b7bf5"
            strokeOpacity="0.08"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            style={{ animation: "dataStream 3s linear 1s infinite" }}
            fill="none"
          />
          {/* Flow dots */}
          <circle cx="380" cy="170" r="1.5" fill="#8b7bf5" fillOpacity="0.2" />
          <circle cx="385" cy="80" r="1.5" fill="#8b7bf5" fillOpacity="0.15" />
        </g>

        {/* ===== BOTTOM ANNOTATION LABELS (Raycast-style) ===== */}
        <g transform="translate(0, 0)" opacity="0.35">
          {/* Session label */}
          <line x1="60" y1="270" x2="60" y2="285" stroke="#8b7bf5" strokeWidth="0.6" />
          <text x="60" y="296" fill="#8b7bf5" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">
            SESSION
          </text>

          {/* Context panel label */}
          <line x1="375" y1="270" x2="375" y2="285" stroke="#8b7bf5" strokeWidth="0.6" />
          <text x="375" y="296" fill="#8b7bf5" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">
            CONTEXT
          </text>

          {/* Activity label */}
          <line x1="390" y1="48" x2="420" y2="48" stroke="#8b7bf5" strokeWidth="0.6" />
          <text x="437" y="50" fill="#8b7bf5" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">
            LIVE
          </text>
        </g>
      </svg>
    </div>
  );
}
