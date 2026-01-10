import Link from "next/link";
import { ReactNode } from "react";

export type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
};

export function CTAButton({ href, children, variant = "primary", ariaLabel }: CTAButtonProps) {
  const base =
    "inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-[rgb(var(--surface))] sm:w-auto";
  const styles =
    variant === "primary"
      ? "bg-[rgb(var(--accent))] text-[rgb(12,18,32)] shadow-ring hover:brightness-105"
      : "border border-[rgb(var(--border))] text-primary hover:border-[rgb(var(--accent))] hover:text-primary";

  return (
    <Link className={`${base} ${styles}`} href={href} aria-label={ariaLabel}>
      {children}
      <span aria-hidden className="text-base">↗</span>
    </Link>
  );
}
