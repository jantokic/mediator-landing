interface CrystalProps {
  className?: string;
  scale?: number;
  rotate?: number;
  delay?: string;
  sparkle?: boolean;
}

export default function Crystal({
  className = "",
  scale = 1,
  rotate = -15,
  delay = "0s",
  sparkle = true,
}: CrystalProps) {
  return (
    <div
      className={`crystal-standalone ${className}`}
      aria-hidden="true"
      style={{
        "--crystal-rotate": `${rotate}deg`,
        transform: `rotate(${rotate}deg) scale(${scale})`,
        animationDelay: delay,
        width: 120,
        height: 160,
      } as React.CSSProperties}
    >
      <div className="crystal-facet crystal-facet-1" />
      <div className="crystal-facet crystal-facet-2" />
      <div className="crystal-facet crystal-facet-3" />
      {sparkle && <div className="crystal-sparkle" />}
    </div>
  );
}
