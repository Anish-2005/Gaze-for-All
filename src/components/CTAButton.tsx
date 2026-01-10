import Link from "next/link";
import { ReactNode } from "react";

export type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-[color:var(--bg)]";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--accent)] text-slate-900 shadow-ring hover:brightness-105"
      : "border border-white/20 text-slate-100 hover:border-[color:var(--accent)] hover:text-white";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
      <span aria-hidden className="text-base">↗</span>
    </Link>
  );
}
