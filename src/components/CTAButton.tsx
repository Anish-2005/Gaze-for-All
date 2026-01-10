import Link from "next/link";
import { ReactNode } from "react";

export type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-[rgb(var(--bg))]";
  const styles =
    variant === "primary"
      ? "bg-[rgb(var(--accent))] text-white shadow-ring hover:brightness-105"
      : "border border-[rgb(var(--border))] text-primary hover:border-[rgb(var(--accent))] hover:text-primary";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
      <span aria-hidden className="text-base">↗</span>
    </Link>
  );
}
