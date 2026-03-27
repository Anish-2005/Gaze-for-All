"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export type SectionProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ kicker, title, subtitle, children, className = "", id }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`surface-card mb-6 flex flex-col gap-[var(--space-stack)] rounded-[var(--radius-xl)] p-[var(--space-section)] sm:mb-8 lg:mb-10 ${className}`}
      initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <div className="space-y-2 sm:space-y-3">
        {kicker ? (
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-secondary sm:text-[0.7rem]">{kicker}</p>
        ) : null}
        <h2 className="text-[clamp(1.35rem,1.18rem+1vw,2.3rem)] leading-[1.15] text-primary">{title}</h2>
        {subtitle ? (
          <p className="max-w-3xl text-[clamp(0.95rem,0.9rem+0.25vw,1.1rem)] text-secondary">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
