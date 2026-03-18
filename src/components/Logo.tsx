/**
 * Abstract logo mark — three converging planes.
 * Represents multiplayer perspectives coming together.
 */
export function LogoMark({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path d="M16 3L28 12L16 21L4 12Z" fill="#8b7bf5" opacity="0.9" />
      <path d="M16 8L28 17L16 26L4 17Z" fill="#a78bfa" opacity="0.55" />
      <path d="M16 13L28 22L16 31L4 22Z" fill="#c4b5fd" opacity="0.3" />
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={22} />
      <span className="text-[15px] font-semibold tracking-tight text-fg">
        CodeCouncil
      </span>
    </span>
  );
}
