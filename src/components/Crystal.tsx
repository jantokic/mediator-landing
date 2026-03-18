interface CrystalProps {
  className?: string;
  scale?: number;
  rotate?: number;
  delay?: string;
  sparkle?: boolean;
}

/**
 * Minimal floating particle accent — lightweight decorative element.
 * The main visual punch now comes from LiquidGlass.
 */
export default function Crystal({
  className = "",
  scale = 1,
  rotate = 0,
  delay = "0s",
  sparkle = true,
}: CrystalProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft glowing dot */}
      <div
        className="rounded-full animate-crystal-dot-float"
        style={{
          width: `${8 * scale}px`,
          height: `${8 * scale}px`,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.6) 0%, rgba(139,123,245,0.2) 50%, transparent 70%)",
          boxShadow: "0 0 12px 4px rgba(139,123,245,0.15)",
          transform: `rotate(${rotate}deg)`,
          animationDelay: delay,
        }}
      />

      {/* Optional sparkle cross */}
      {sparkle && (
        <div
          className="absolute animate-crystal-dot-sparkle"
          style={{
            top: `${-2 * scale}px`,
            left: `${-2 * scale}px`,
            width: `${12 * scale}px`,
            height: `${12 * scale}px`,
            animationDelay: delay,
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              top: "50%",
              left: "0",
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              transform: "translateY(-50%)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "0",
              height: "100%",
              width: "1px",
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      )}
    </div>
  );
}
