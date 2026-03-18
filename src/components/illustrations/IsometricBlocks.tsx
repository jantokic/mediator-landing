"use client";

interface BlockProps {
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Shared isometric transform helpers                                 */
/* ------------------------------------------------------------------ */

const ISO_STYLE = `
  @keyframes blockFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes gridPulse {
    0%, 100% { opacity: 0.04; }
    50% { opacity: 0.09; }
  }
`;

/* ------------------------------------------------------------------ */
/*  BlocksTeam — stacked user-card layers, representing team members   */
/* ------------------------------------------------------------------ */

export function BlocksTeam({ className }: BlockProps) {
  return (
    <div className={className} aria-hidden="true">
      <style>{ISO_STYLE}</style>
      <svg
        viewBox="0 0 280 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="bt-grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="bt-grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="bt-edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Grid lines (background) */}
        <g opacity="0.04" style={{ animation: "gridPulse 6s ease-in-out infinite" }}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line
              key={`gv-${i}`}
              x1={40 + i * 30}
              y1="20"
              x2={40 + i * 30}
              y2="220"
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`gh-${i}`}
              x1="30"
              y1={30 + i * 30}
              x2="260"
              y2={30 + i * 30}
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Bottom layer — largest block */}
        <g
          transform="translate(60, 130) skewY(-8) skewX(15)"
          style={{ animation: "blockFloat 7s ease-in-out infinite" }}
        >
          <rect
            width="160"
            height="48"
            rx="6"
            fill="url(#bt-grad2)"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
          {/* User dots */}
          <circle cx="24" cy="24" r="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
          <circle cx="48" cy="24" r="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
          <circle cx="72" cy="24" r="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
          {/* Connection lines */}
          <line x1="32" y1="24" x2="40" y2="24" stroke="white" strokeOpacity="0.08" strokeWidth="0.8" />
          <line x1="56" y1="24" x2="64" y2="24" stroke="white" strokeOpacity="0.08" strokeWidth="0.8" />
          {/* Label bar */}
          <rect x="92" y="18" width="50" height="4" rx="2" fill="white" fillOpacity="0.05" />
          <rect x="92" y="26" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
        </g>

        {/* Middle layer */}
        <g
          transform="translate(72, 94) skewY(-8) skewX(15)"
          style={{ animation: "blockFloat 7s ease-in-out 0.6s infinite" }}
        >
          <rect
            width="140"
            height="42"
            rx="6"
            fill="url(#bt-grad1)"
            stroke="#8b7bf5"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <circle cx="22" cy="21" r="7" fill="#8b7bf5" fillOpacity="0.12" stroke="#8b7bf5" strokeOpacity="0.2" strokeWidth="0.8" />
          <circle cx="44" cy="21" r="7" fill="#8b7bf5" fillOpacity="0.08" stroke="#8b7bf5" strokeOpacity="0.15" strokeWidth="0.8" />
          <line x1="30" y1="21" x2="37" y2="21" stroke="#8b7bf5" strokeOpacity="0.15" strokeWidth="0.8" />
          <rect x="64" y="15" width="56" height="4" rx="2" fill="#8b7bf5" fillOpacity="0.08" />
          <rect x="64" y="23" width="40" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.05" />
        </g>

        {/* Top layer — accent highlight */}
        <g
          transform="translate(84, 58) skewY(-8) skewX(15)"
          style={{ animation: "blockFloat 7s ease-in-out 1.2s infinite" }}
        >
          <rect
            width="120"
            height="38"
            rx="6"
            fill="url(#bt-grad1)"
            stroke="#8b7bf5"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          {/* Glowing accent circle */}
          <circle cx="20" cy="19" r="6" fill="#8b7bf5" fillOpacity="0.2" stroke="#8b7bf5" strokeOpacity="0.35" strokeWidth="0.8" />
          <rect x="36" y="13" width="68" height="4" rx="2" fill="#8b7bf5" fillOpacity="0.12" />
          <rect x="36" y="21" width="48" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.07" />
        </g>

        {/* Vertical connector lines between layers */}
        <g opacity="0.1">
          <line x1="125" y1="98" x2="135" y2="130" stroke="#8b7bf5" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="145" y1="62" x2="155" y2="94" stroke="#8b7bf5" strokeWidth="0.8" strokeDasharray="3 3" />
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BlocksAI — layered panels with circuit-like patterns               */
/* ------------------------------------------------------------------ */

export function BlocksAI({ className }: BlockProps) {
  return (
    <div className={className} aria-hidden="true">
      <style>{ISO_STYLE}</style>
      <svg
        viewBox="0 0 280 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="bai-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="bai-glow" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Subtle background grid */}
        <g opacity="0.03">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`ai-gv-${i}`} x1={30 + i * 28} y1="15" x2={30 + i * 28} y2="225" stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`ai-gh-${i}`} x1="25" y1={25 + i * 28} x2="260" y2={25 + i * 28} stroke="white" strokeWidth="0.5" />
          ))}
        </g>

        {/* Main isometric panel — the "brain" */}
        <g
          transform="translate(50, 60) skewY(-6) skewX(12)"
          style={{ animation: "blockFloat 8s ease-in-out infinite" }}
        >
          <rect
            width="170"
            height="110"
            rx="8"
            fill="url(#bai-grad)"
            stroke="#8b7bf5"
            strokeOpacity="0.1"
            strokeWidth="1"
          />

          {/* Neural network nodes */}
          {/* Input layer */}
          {[28, 50, 72].map((y, i) => (
            <circle key={`in-${i}`} cx="30" cy={y} r="4" fill="#8b7bf5" fillOpacity={0.1 + i * 0.05} stroke="#8b7bf5" strokeOpacity="0.2" strokeWidth="0.6" />
          ))}

          {/* Hidden layer */}
          {[22, 40, 58, 76].map((y, i) => (
            <circle key={`hid-${i}`} cx="75" cy={y} r="4.5" fill="#8b7bf5" fillOpacity={0.08 + i * 0.04} stroke="#8b7bf5" strokeOpacity="0.18" strokeWidth="0.6" />
          ))}

          {/* Output layer */}
          {[35, 55].map((y, i) => (
            <circle key={`out-${i}`} cx="120" cy={y} r="5" fill="#8b7bf5" fillOpacity={0.15 + i * 0.05} stroke="#8b7bf5" strokeOpacity="0.25" strokeWidth="0.6" />
          ))}

          {/* Connections — input to hidden */}
          {[28, 50, 72].map((fy) =>
            [22, 40, 58, 76].map((ty) => (
              <line key={`ih-${fy}-${ty}`} x1="34" y1={fy} x2="70" y2={ty} stroke="#8b7bf5" strokeOpacity="0.06" strokeWidth="0.5" />
            ))
          )}

          {/* Connections — hidden to output */}
          {[22, 40, 58, 76].map((fy) =>
            [35, 55].map((ty) => (
              <line key={`ho-${fy}-${ty}`} x1="80" y1={fy} x2="115" y2={ty} stroke="#8b7bf5" strokeOpacity="0.06" strokeWidth="0.5" />
            ))
          )}

          {/* Data readout lines */}
          <rect x="18" y="86" width="50" height="3" rx="1.5" fill="white" fillOpacity="0.05" />
          <rect x="18" y="93" width="35" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
          <rect x="80" y="86" width="70" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.07" />
          <rect x="80" y="93" width="50" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.04" />
        </g>

        {/* Small floating accent block — top right */}
        <g
          transform="translate(175, 34) skewY(-6) skewX(12)"
          style={{ animation: "blockFloat 8s ease-in-out 1.5s infinite" }}
        >
          <rect width="52" height="32" rx="5" fill="url(#bai-grad)" stroke="#8b7bf5" strokeOpacity="0.15" strokeWidth="0.8" />
          <circle cx="16" cy="16" r="4" fill="#8b7bf5" fillOpacity="0.15" />
          <rect x="26" y="12" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.06" />
          <rect x="26" y="18" width="12" height="2" rx="1" fill="white" fillOpacity="0.04" />
        </g>

        {/* Small floating block — bottom left */}
        <g
          transform="translate(30, 170) skewY(-6) skewX(12)"
          style={{ animation: "blockFloat 8s ease-in-out 2.8s infinite" }}
        >
          <rect width="60" height="28" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.06" strokeWidth="0.8" />
          <rect x="10" y="10" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.05" />
          <rect x="10" y="16" width="28" height="2" rx="1" fill="white" fillOpacity="0.03" />
        </g>

        {/* Dashed connector */}
        <line x1="92" y1="172" x2="68" y2="157" stroke="#8b7bf5" strokeOpacity="0.08" strokeWidth="0.8" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BlocksCollab — overlapping windows with live cursors               */
/* ------------------------------------------------------------------ */

export function BlocksCollab({ className }: BlockProps) {
  return (
    <div className={className} aria-hidden="true">
      <style>{`
        ${ISO_STYLE}
        @keyframes cursorBlink {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
        }
        @keyframes dataFlow {
          0% { stroke-dashoffset: 12; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg
        viewBox="0 0 280 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="bc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="bc-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="bc-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <g opacity="0.03">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`cg-v-${i}`} x1={35 + i * 30} y1="10" x2={35 + i * 30} y2="230" stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <line key={`cg-h-${i}`} x1="25" y1={30 + i * 30} x2="260" y2={30 + i * 30} stroke="white" strokeWidth="0.5" />
          ))}
        </g>

        {/* Window 1 — back (blue user) */}
        <g
          transform="translate(30, 50) skewY(-5) skewX(10)"
          style={{ animation: "blockFloat 9s ease-in-out 0.5s infinite" }}
        >
          <rect width="140" height="100" rx="6" fill="url(#bc-blue)" stroke="#60a5fa" strokeOpacity="0.1" strokeWidth="0.8" />
          {/* Titlebar */}
          <rect width="140" height="16" rx="6" fill="#60a5fa" fillOpacity="0.05" />
          <circle cx="10" cy="8" r="2" fill="#60a5fa" fillOpacity="0.25" />
          <rect x="20" y="5.5" width="40" height="3" rx="1.5" fill="#60a5fa" fillOpacity="0.1" />
          {/* Code lines */}
          <rect x="10" y="24" width="80" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
          <rect x="10" y="32" width="60" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
          <rect x="10" y="40" width="95" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
          <rect x="10" y="48" width="45" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
          <rect x="10" y="56" width="70" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
          {/* Blue cursor */}
          <rect x="82" y="39" width="2" height="8" rx="1" fill="#60a5fa" fillOpacity="0.6" style={{ animation: "cursorBlink 1.2s ease-in-out infinite" }} />
          {/* User avatar */}
          <circle cx="122" cy="8" r="4" fill="#60a5fa" fillOpacity="0.15" stroke="#60a5fa" strokeOpacity="0.3" strokeWidth="0.5" />
        </g>

        {/* Window 2 — front (green user, overlapping) */}
        <g
          transform="translate(100, 85) skewY(-5) skewX(10)"
          style={{ animation: "blockFloat 9s ease-in-out infinite" }}
        >
          <rect width="150" height="105" rx="6" fill="url(#bc-green)" stroke="#34d399" strokeOpacity="0.1" strokeWidth="0.8" />
          <rect width="150" height="16" rx="6" fill="#34d399" fillOpacity="0.05" />
          <circle cx="10" cy="8" r="2" fill="#34d399" fillOpacity="0.25" />
          <rect x="20" y="5.5" width="50" height="3" rx="1.5" fill="#34d399" fillOpacity="0.1" />
          {/* Code lines */}
          <rect x="10" y="24" width="90" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
          <rect x="10" y="32" width="65" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
          <rect x="10" y="40" width="110" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
          <rect x="10" y="48" width="50" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
          <rect x="10" y="56" width="85" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
          <rect x="10" y="64" width="70" height="3" rx="1.5" fill="white" fillOpacity="0.03" />
          {/* Green cursor */}
          <rect x="55" y="47" width="2" height="8" rx="1" fill="#34d399" fillOpacity="0.6" style={{ animation: "cursorBlink 1.2s ease-in-out 0.6s infinite" }} />
          {/* User avatar */}
          <circle cx="132" cy="8" r="4" fill="#34d399" fillOpacity="0.15" stroke="#34d399" strokeOpacity="0.3" strokeWidth="0.5" />
        </g>

        {/* Central accent hub — the shared session indicator */}
        <g
          transform="translate(62, 135) skewY(-5) skewX(10)"
          style={{ animation: "blockFloat 9s ease-in-out 1s infinite" }}
        >
          <rect width="56" height="28" rx="5" fill="url(#bc-grad)" stroke="#8b7bf5" strokeOpacity="0.2" strokeWidth="0.8" />
          <circle cx="14" cy="14" r="4" fill="#8b7bf5" fillOpacity="0.2" stroke="#8b7bf5" strokeOpacity="0.3" strokeWidth="0.5" />
          <rect x="24" y="10" width="24" height="3" rx="1.5" fill="#8b7bf5" fillOpacity="0.1" />
          <rect x="24" y="16" width="16" height="2" rx="1" fill="#8b7bf5" fillOpacity="0.06" />
        </g>

        {/* Data flow lines between windows */}
        <g>
          <line x1="100" y1="138" x2="125" y2="145" stroke="#8b7bf5" strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="4 4" style={{ animation: "dataFlow 2s linear infinite" }} />
          <line x1="120" y1="130" x2="145" y2="120" stroke="#8b7bf5" strokeOpacity="0.08" strokeWidth="0.8" strokeDasharray="4 4" style={{ animation: "dataFlow 2s linear 0.5s infinite" }} />
        </g>
      </svg>
    </div>
  );
}
