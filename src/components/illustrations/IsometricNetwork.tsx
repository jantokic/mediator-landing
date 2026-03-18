"use client";

interface NetworkProps {
  className?: string;
}

export function NetworkIllustration({ className }: NetworkProps) {
  return (
    <div className={className} aria-hidden="true">
      <style>{`
        @keyframes netPulse {
          0%, 100% { opacity: 0.08; r: 2; }
          50% { opacity: 0.3; r: 3; }
        }
        @keyframes netPulse2 {
          0%, 100% { opacity: 0.06; r: 1.5; }
          50% { opacity: 0.2; r: 2.5; }
        }
        @keyframes connectionFlow {
          0% { stroke-dashoffset: 16; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes hubGlow {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.18; }
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes ringPulse {
          0% { r: 28; opacity: 0.08; }
          100% { r: 48; opacity: 0; }
        }
      `}</style>
      <svg
        viewBox="0 0 480 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="nn-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="nn-node" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="nn-nodePurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.02" />
          </linearGradient>
          <filter id="nn-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nn-softglow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Background grid — very subtle */}
        <g opacity="0.02">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={`ng-v-${i}`} x1={30 + i * 28} y1="5" x2={30 + i * 28} y2="335" stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`ng-h-${i}`} x1="20" y1={15 + i * 28} x2="460" y2={15 + i * 28} stroke="white" strokeWidth="0.5" />
          ))}
        </g>

        {/* ===== CONNECTIONS (drawn first, behind nodes) ===== */}
        {(() => {
          const hub = { x: 240, y: 170 };
          const nodes = [
            { x: 95, y: 65 },   // Git
            { x: 370, y: 55 },   // Slack
            { x: 75, y: 175 },   // VSCode
            { x: 400, y: 170 },  // Terminal
            { x: 110, y: 280 },  // CI/CD
            { x: 380, y: 275 },  // Cloud
            { x: 240, y: 45 },   // API
            { x: 240, y: 295 },  // DB
          ];

          return nodes.map((node, i) => {
            // Compute a slight curve via midpoint offset
            const mx = (hub.x + node.x) / 2 + (i % 2 === 0 ? 8 : -8);
            const my = (hub.y + node.y) / 2 + (i % 3 === 0 ? 6 : -6);
            return (
              <g key={`conn-${i}`}>
                {/* Faint static line */}
                <path
                  d={`M ${hub.x} ${hub.y} Q ${mx} ${my}, ${node.x} ${node.y}`}
                  stroke="#8b7bf5"
                  strokeOpacity="0.06"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Animated flowing line on top */}
                <path
                  d={`M ${hub.x} ${hub.y} Q ${mx} ${my}, ${node.x} ${node.y}`}
                  stroke="#8b7bf5"
                  strokeOpacity="0.15"
                  strokeWidth="0.8"
                  fill="none"
                  strokeDasharray="4 12"
                  style={{
                    animation: `connectionFlow ${2.5 + i * 0.3}s linear infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
                {/* Pulse dot at midpoint */}
                <circle
                  cx={mx}
                  cy={my}
                  r="2"
                  fill="#8b7bf5"
                  style={{
                    animation: `netPulse2 ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              </g>
            );
          });
        })()}

        {/* ===== CENTRAL HUB — CodeCouncil ===== */}
        <g transform="translate(240, 170)">
          {/* Radiating ring pulse */}
          <circle cx="0" cy="0" r="28" fill="none" stroke="#8b7bf5" strokeWidth="0.6" style={{ animation: "ringPulse 3s ease-out infinite" }} />
          <circle cx="0" cy="0" r="28" fill="none" stroke="#8b7bf5" strokeWidth="0.5" style={{ animation: "ringPulse 3s ease-out 1.5s infinite" }} />

          {/* Glow backdrop */}
          <circle cx="0" cy="0" r="32" fill="#8b7bf5" fillOpacity="0.04" filter="url(#nn-softglow)" style={{ animation: "hubGlow 4s ease-in-out infinite" }} />

          {/* Main hub hexagon shape */}
          <polygon
            points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14"
            fill="url(#nn-hub)"
            stroke="#8b7bf5"
            strokeOpacity="0.25"
            strokeWidth="1"
          />

          {/* Inner hexagon */}
          <polygon
            points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8"
            fill="#8b7bf5"
            fillOpacity="0.06"
            stroke="#8b7bf5"
            strokeOpacity="0.15"
            strokeWidth="0.5"
          />

          {/* Center dot */}
          <circle cx="0" cy="0" r="4" fill="#8b7bf5" fillOpacity="0.3" />
          <circle cx="0" cy="0" r="2" fill="#8b7bf5" fillOpacity="0.5" />

          {/* Label */}
          <text y="44" fill="#8b7bf5" fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.4">
            CODECOUNCIL
          </text>
        </g>

        {/* ===== OUTER NODES ===== */}
        {(() => {
          const nodeData = [
            { x: 95, y: 65, label: "GIT", icon: "branch" },
            { x: 370, y: 55, label: "SLACK", icon: "chat" },
            { x: 75, y: 175, label: "VSCODE", icon: "editor" },
            { x: 400, y: 170, label: "CLI", icon: "terminal" },
            { x: 110, y: 280, label: "CI/CD", icon: "deploy" },
            { x: 380, y: 275, label: "CLOUD", icon: "cloud" },
            { x: 240, y: 45, label: "API", icon: "api" },
            { x: 240, y: 295, label: "DB", icon: "data" },
          ];

          return nodeData.map((node, i) => {
            const isAccent = i % 3 === 0;
            return (
              <g
                key={`node-${i}`}
                transform={`translate(${node.x}, ${node.y})`}
                style={{
                  animation: `nodeFloat ${6 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              >
                {/* 3D isometric cube effect */}
                {/* Top face */}
                <polygon
                  points="0,-14 14,-7 0,0 -14,-7"
                  fill={isAccent ? "#8b7bf5" : "white"}
                  fillOpacity={isAccent ? 0.08 : 0.04}
                  stroke={isAccent ? "#8b7bf5" : "white"}
                  strokeOpacity={isAccent ? 0.2 : 0.08}
                  strokeWidth="0.6"
                />
                {/* Right face */}
                <polygon
                  points="14,-7 14,5 0,12 0,0"
                  fill={isAccent ? "#8b7bf5" : "white"}
                  fillOpacity={isAccent ? 0.05 : 0.02}
                  stroke={isAccent ? "#8b7bf5" : "white"}
                  strokeOpacity={isAccent ? 0.12 : 0.05}
                  strokeWidth="0.6"
                />
                {/* Left face */}
                <polygon
                  points="-14,-7 0,0 0,12 -14,5"
                  fill={isAccent ? "#8b7bf5" : "white"}
                  fillOpacity={isAccent ? 0.03 : 0.015}
                  stroke={isAccent ? "#8b7bf5" : "white"}
                  strokeOpacity={isAccent ? 0.1 : 0.04}
                  strokeWidth="0.6"
                />
                {/* Highlight dot on top */}
                <circle
                  cx="0"
                  cy="-7"
                  r="2"
                  fill={isAccent ? "#8b7bf5" : "white"}
                  fillOpacity={isAccent ? 0.3 : 0.1}
                />
                {/* Label */}
                <text
                  y="24"
                  fill={isAccent ? "#8b7bf5" : "white"}
                  fontSize="6.5"
                  fontFamily="monospace"
                  textAnchor="middle"
                  fillOpacity={isAccent ? 0.4 : 0.2}
                >
                  {node.label}
                </text>
              </g>
            );
          });
        })()}

        {/* ===== SECONDARY CONNECTIONS (between some outer nodes) ===== */}
        <g opacity="0.04">
          <line x1="95" y1="65" x2="240" y2="45" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="370" y1="55" x2="400" y2="170" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="75" y1="175" x2="110" y2="280" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="380" y1="275" x2="240" y2="295" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
        </g>

        {/* ===== CORNER ANNOTATIONS (Raycast-style) ===== */}
        <g opacity="0.3">
          <line x1="36" y1="20" x2="36" y2="10" stroke="#8b7bf5" strokeWidth="0.5" />
          <line x1="36" y1="10" x2="56" y2="10" stroke="#8b7bf5" strokeWidth="0.5" />
          <text x="60" y="13" fill="#8b7bf5" fontSize="6" fontFamily="monospace" fillOpacity="0.7">HUB-SPOKE</text>

          <line x1="444" y1="320" x2="444" y2="330" stroke="#8b7bf5" strokeWidth="0.5" />
          <line x1="444" y1="330" x2="424" y2="330" stroke="#8b7bf5" strokeWidth="0.5" />
          <text x="420" y="333" fill="#8b7bf5" fontSize="6" fontFamily="monospace" fillOpacity="0.7" textAnchor="end">8 NODES</text>
        </g>
      </svg>
    </div>
  );
}
