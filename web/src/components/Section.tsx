"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type SectionProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
};

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export function Section({ kicker, title, subtitle, children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`mb-14 flex flex-col gap-5 rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 p-6 sm:p-8 ${className}`}
      {...fadeIn}
    >
      <div className="space-y-3">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {kicker}
          </p>
        ) : null}
        <h2
          className="text-2xl leading-tight text-white sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>
        {subtitle ? <p className="max-w-3xl text-base text-slate-300 sm:text-lg">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
