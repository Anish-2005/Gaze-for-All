"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export type FeatureCardProps = {
  title: string;
  description: string;
  tag?: string;
  icon?: ReactNode;
};

export function FeatureCard({ title, description, tag, icon }: FeatureCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="surface-card card-hover h-full rounded-[var(--radius-lg)] p-4 sm:p-5"
      initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] text-base text-primary ring-1 ring-[rgba(var(--border),0.9)]">
          {icon ? icon : <span aria-hidden>*</span>}
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[clamp(1.02rem,0.98rem+0.34vw,1.26rem)] leading-tight text-primary">{title}</h3>
            {tag ? <span className="token-pill">{tag}</span> : null}
          </div>
          <p className="text-[0.93rem] leading-relaxed text-secondary sm:text-[0.98rem]">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}
