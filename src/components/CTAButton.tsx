import Link from "next/link";
import { ReactNode } from "react";

export type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export function CTAButton({ href, children, variant = "primary", ariaLabel, onClick }: CTAButtonProps) {
  const base =
    "inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-[rgb(var(--surface))] sm:w-auto";
  const styles =
    variant === "primary"
      ? "accent-gradient text-white shadow-ring hover:-translate-y-0.5 hover:brightness-105"
      : "border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-primary hover:border-[rgba(var(--accent),0.45)] hover:bg-[rgba(var(--accent),0.08)]";

  return (
    <Link className={`${base} ${styles}`} href={href} aria-label={ariaLabel} onClick={onClick}>
      {children}
      <span aria-hidden className="text-base">-&gt;</span>
    </Link>
  );
}
