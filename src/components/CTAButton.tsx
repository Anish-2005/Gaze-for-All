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
    "inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--surface))] sm:w-auto";
  const styles =
    variant === "primary"
      ? "accent-gradient text-white shadow-ring hover:-translate-y-0.5 hover:brightness-105"
      : "border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-primary hover:border-[rgba(var(--accent),0.42)] hover:bg-[rgba(var(--accent),0.08)]";

  return (
    <Link className={`${base} ${styles}`} href={href} aria-label={ariaLabel} onClick={onClick}>
      {children}
      <span aria-hidden className="text-[0.95rem]">
        -&gt;
      </span>
    </Link>
  );
}
