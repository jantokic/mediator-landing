export default function LiquidGlass() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* === BOLD diagonal light beams — the main visual === */}

      {/* Beam 1 — wide, bright, left-to-right */}
      <div
        className="absolute animate-beam-drift"
        style={{
          top: "-40%",
          left: "-20%",
          width: "80%",
          height: "250%",
          background:
            "linear-gradient(135deg, transparent 35%, rgba(139,123,245,0.18) 43%, rgba(167,139,250,0.35) 48%, rgba(200,180,255,0.4) 50%, rgba(167,139,250,0.35) 52%, rgba(139,123,245,0.18) 57%, transparent 65%)",
          transform: "rotate(-20deg)",
          filter: "blur(30px)",
        }}
      />

      {/* Beam 2 — narrower, offset, from top-right */}
      <div
        className="absolute animate-beam-drift-reverse"
        style={{
          top: "-30%",
          right: "-10%",
          width: "60%",
          height: "220%",
          background:
            "linear-gradient(225deg, transparent 38%, rgba(108,92,231,0.15) 44%, rgba(139,123,245,0.3) 48%, rgba(180,170,255,0.35) 50%, rgba(139,123,245,0.3) 52%, rgba(108,92,231,0.15) 56%, transparent 62%)",
          transform: "rotate(12deg)",
          filter: "blur(35px)",
        }}
      />

      {/* Beam 3 — thin sharp accent streak */}
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "-5%",
          width: "110%",
          height: "3px",
          background:
            "linear-gradient(90deg, transparent 5%, rgba(167,139,250,0.0) 15%, rgba(167,139,250,0.5) 35%, rgba(200,185,255,0.8) 50%, rgba(167,139,250,0.5) 65%, rgba(167,139,250,0.0) 85%, transparent 95%)",
          filter: "blur(1.5px)",
          transform: "rotate(-3deg)",
        }}
      />

      {/* Beam 4 — second thin streak */}
      <div
        className="absolute"
        style={{
          top: "55%",
          left: "-10%",
          width: "120%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 10%, rgba(139,123,245,0.4) 30%, rgba(180,170,255,0.6) 50%, rgba(139,123,245,0.4) 70%, transparent 90%)",
          filter: "blur(1px)",
          transform: "rotate(1.5deg)",
        }}
      />

      {/* Central aurora glow — big and bright */}
      <div
        className="absolute"
        style={{
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "90%",
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(139,123,245,0.25) 0%, rgba(108,92,231,0.1) 35%, transparent 65%)",
        }}
      />

      {/* Floating orb — left, big and visible */}
      <div
        className="absolute rounded-full animate-orb-float"
        style={{
          top: "15%",
          left: "5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139,123,245,0.25) 0%, rgba(108,92,231,0.08) 40%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Floating orb — right */}
      <div
        className="absolute rounded-full animate-orb-float-delayed"
        style={{
          top: "30%",
          right: "0%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.2) 0%, rgba(139,123,245,0.06) 40%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Hot spot — concentrated bright glow */}
      <div
        className="absolute rounded-full animate-orb-pulse"
        style={{
          top: "20%",
          left: "45%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(200,185,255,0.35) 0%, rgba(167,139,250,0.12) 35%, transparent 60%)",
          filter: "blur(25px)",
        }}
      />

      {/* Bottom horizon glow */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: "-10%",
          width: "120%",
          height: "35%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(100,90,220,0.2) 0%, rgba(80,70,200,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Top vignette — blends into dark bg */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(180deg, var(--color-bg) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
