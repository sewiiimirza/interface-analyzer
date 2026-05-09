import { Link } from "@tanstack/react-router";

export function Logo({ size = 32, withWordmark = true, to = "/" }: { size?: number; withWordmark?: boolean; to?: string }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2.5 group">
      <span
        aria-hidden
        className="relative inline-flex items-center justify-center rounded-xl shadow-glow transition-transform group-hover:scale-105"
        style={{ width: size, height: size, background: "var(--gradient-1)" }}
      >
        <svg viewBox="0 0 24 24" width={size * 0.55} height={size * 0.55} fill="none">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="white" />
        </svg>
      </span>
      {withWordmark && (
        <span className="font-extrabold tracking-tight text-foreground" style={{ fontSize: size * 0.6 }}>
          SAS<span className="text-gradient-brand">Viral</span>
        </span>
      )}
    </Link>
  );
}
