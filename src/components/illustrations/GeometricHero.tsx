"use client";

interface GeometricProps {
  className?: string;
}

export function GeometricDecoration({ className }: GeometricProps) {
  return (
    <div
      className={`pointer-events-none select-none ${className ?? ""}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes geoFloat1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(3deg); }
          66% { transform: translateY(6px) rotate(-2deg); }
        }
        @keyframes geoFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        @keyframes geoFloat3 {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          40% { transform: translateY(-10px) rotate(5deg) scale(1.02); }
          80% { transform: translateY(4px) rotate(-3deg) scale(0.98); }
        }
        @keyframes geoSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes geoPulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        @keyframes geoDrift {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(6px) translateY(-4px); }
          50% { transform: translateX(-3px) translateY(-8px); }
          75% { transform: translateX(-6px) translateY(3px); }
        }
      `}</style>
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="geo-purp1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="geo-purp2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b7bf5" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#8b7bf5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="geo-white" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* ===== LARGE HEXAGON — left side ===== */}
        <g
          transform="translate(120, 200)"
          style={{ animation: "geoFloat1 18s ease-in-out infinite" }}
        >
          <polygon
            points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
            fill="url(#geo-purp1)"
            stroke="#8b7bf5"
            strokeOpacity="0.06"
            strokeWidth="0.8"
          />
          {/* Inner hexagon */}
          <polygon
            points="0,-35 30,-17.5 30,17.5 0,35 -30,17.5 -30,-17.5"
            fill="none"
            stroke="#8b7bf5"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
        </g>

        {/* ===== MEDIUM HEXAGON — right side ===== */}
        <g
          transform="translate(1050, 140)"
          style={{ animation: "geoFloat2 22s ease-in-out infinite" }}
        >
          <polygon
            points="0,-45 39,-22.5 39,22.5 0,45 -39,22.5 -39,-22.5"
            fill="url(#geo-purp2)"
            stroke="#8b7bf5"
            strokeOpacity="0.05"
            strokeWidth="0.7"
          />
        </g>

        {/* ===== SMALL HEXAGON — top center ===== */}
        <g
          transform="translate(650, 60)"
          style={{ animation: "geoFloat3 15s ease-in-out 2s infinite" }}
        >
          <polygon
            points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11"
            fill="#8b7bf5"
            fillOpacity="0.04"
            stroke="#8b7bf5"
            strokeOpacity="0.06"
            strokeWidth="0.5"
          />
        </g>

        {/* ===== DIAMOND — left upper ===== */}
        <g
          transform="translate(320, 90)"
          style={{ animation: "geoDrift 20s ease-in-out infinite" }}
        >
          <polygon
            points="0,-30 25,0 0,30 -25,0"
            fill="url(#geo-white)"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="0.6"
          />
        </g>

        {/* ===== DIAMOND — right lower ===== */}
        <g
          transform="translate(920, 420)"
          style={{ animation: "geoDrift 24s ease-in-out 3s infinite" }}
        >
          <polygon
            points="0,-24 20,0 0,24 -20,0"
            fill="#8b7bf5"
            fillOpacity="0.03"
            stroke="#8b7bf5"
            strokeOpacity="0.05"
            strokeWidth="0.5"
          />
        </g>

        {/* ===== SMALL DIAMOND — center right ===== */}
        <g
          transform="translate(850, 180)"
          style={{ animation: "geoFloat1 16s ease-in-out 5s infinite" }}
        >
          <polygon
            points="0,-14 12,0 0,14 -12,0"
            fill="white"
            fillOpacity="0.03"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="0.4"
          />
        </g>

        {/* ===== CIRCLES — various positions ===== */}

        {/* Large circle — right */}
        <g
          transform="translate(1100, 380)"
          style={{ animation: "geoFloat2 19s ease-in-out 1s infinite" }}
        >
          <circle r="40" fill="none" stroke="#8b7bf5" strokeOpacity="0.04" strokeWidth="0.7" />
          <circle r="25" fill="#8b7bf5" fillOpacity="0.02" stroke="#8b7bf5" strokeOpacity="0.03" strokeWidth="0.5" />
        </g>

        {/* Medium circle — upper left */}
        <g
          transform="translate(250, 80)"
          style={{ animation: "geoFloat3 25s ease-in-out 4s infinite" }}
        >
          <circle r="28" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="0.6" />
          <circle r="4" fill="white" fillOpacity="0.04" />
        </g>

        {/* Small circle — center */}
        <circle
          cx="580"
          cy="320"
          r="16"
          fill="none"
          stroke="#8b7bf5"
          strokeOpacity="0.03"
          strokeWidth="0.5"
          style={{ animation: "geoPulse 6s ease-in-out infinite" }}
        />

        {/* Tiny circles — scattered as dots */}
        <circle cx="460" cy="160" r="3" fill="#8b7bf5" fillOpacity="0.06" style={{ animation: "geoPulse 5s ease-in-out infinite" }} />
        <circle cx="740" cy="100" r="2" fill="white" fillOpacity="0.05" style={{ animation: "geoPulse 7s ease-in-out 1s infinite" }} />
        <circle cx="200" cy="400" r="2.5" fill="#8b7bf5" fillOpacity="0.05" style={{ animation: "geoPulse 4s ease-in-out 2s infinite" }} />
        <circle cx="990" cy="250" r="2" fill="white" fillOpacity="0.04" style={{ animation: "geoPulse 8s ease-in-out 3s infinite" }} />
        <circle cx="380" cy="500" r="1.5" fill="#8b7bf5" fillOpacity="0.05" style={{ animation: "geoPulse 6s ease-in-out 1.5s infinite" }} />
        <circle cx="700" cy="480" r="2" fill="white" fillOpacity="0.03" style={{ animation: "geoPulse 5s ease-in-out 4s infinite" }} />

        {/* ===== ROTATING THIN RING — very subtle ===== */}
        <g
          transform="translate(600, 300)"
          style={{ animation: "geoSpin 120s linear infinite" }}
        >
          <ellipse rx="180" ry="60" fill="none" stroke="#8b7bf5" strokeOpacity="0.015" strokeWidth="0.5" />
        </g>

        {/* ===== WIREFRAME CUBE OUTLINE — top right, very faint ===== */}
        <g
          transform="translate(980, 80)"
          style={{ animation: "geoFloat1 20s ease-in-out 6s infinite" }}
          opacity="0.6"
        >
          {/* Front face */}
          <polygon
            points="0,0 28,0 28,28 0,28"
            fill="none"
            stroke="white"
            strokeOpacity="0.025"
            strokeWidth="0.5"
          />
          {/* Back face (offset for 3D) */}
          <polygon
            points="10,-10 38,-10 38,18 10,18"
            fill="none"
            stroke="white"
            strokeOpacity="0.02"
            strokeWidth="0.5"
          />
          {/* Connecting edges */}
          <line x1="0" y1="0" x2="10" y2="-10" stroke="white" strokeOpacity="0.02" strokeWidth="0.5" />
          <line x1="28" y1="0" x2="38" y2="-10" stroke="white" strokeOpacity="0.02" strokeWidth="0.5" />
          <line x1="28" y1="28" x2="38" y2="18" stroke="white" strokeOpacity="0.02" strokeWidth="0.5" />
          <line x1="0" y1="28" x2="10" y2="18" stroke="white" strokeOpacity="0.02" strokeWidth="0.5" />
        </g>

        {/* ===== WIREFRAME CUBE — bottom left ===== */}
        <g
          transform="translate(60, 450)"
          style={{ animation: "geoFloat2 17s ease-in-out 2s infinite" }}
          opacity="0.5"
        >
          <polygon
            points="0,0 22,0 22,22 0,22"
            fill="none"
            stroke="#8b7bf5"
            strokeOpacity="0.03"
            strokeWidth="0.5"
          />
          <polygon
            points="8,-8 30,-8 30,14 8,14"
            fill="none"
            stroke="#8b7bf5"
            strokeOpacity="0.02"
            strokeWidth="0.5"
          />
          <line x1="0" y1="0" x2="8" y2="-8" stroke="#8b7bf5" strokeOpacity="0.02" strokeWidth="0.5" />
          <line x1="22" y1="0" x2="30" y2="-8" stroke="#8b7bf5" strokeOpacity="0.02" strokeWidth="0.5" />
          <line x1="22" y1="22" x2="30" y2="14" stroke="#8b7bf5" strokeOpacity="0.02" strokeWidth="0.5" />
          <line x1="0" y1="22" x2="8" y2="14" stroke="#8b7bf5" strokeOpacity="0.02" strokeWidth="0.5" />
        </g>

        {/* ===== DASHED ORBITAL ARCS ===== */}
        <ellipse
          cx="600"
          cy="300"
          rx="350"
          ry="120"
          fill="none"
          stroke="#8b7bf5"
          strokeOpacity="0.015"
          strokeWidth="0.5"
          strokeDasharray="6 12"
          transform="rotate(-8 600 300)"
        />
        <ellipse
          cx="600"
          cy="300"
          rx="480"
          ry="200"
          fill="none"
          stroke="white"
          strokeOpacity="0.01"
          strokeWidth="0.5"
          strokeDasharray="4 16"
          transform="rotate(5 600 300)"
        />
      </svg>
    </div>
  );
}
