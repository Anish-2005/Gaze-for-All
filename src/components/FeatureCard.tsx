"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type FeatureCardProps = {
  title: string;
  description: string;
  tag?: string;
  icon?: ReactNode;
};

export function FeatureCard({ title, description, tag, icon }: FeatureCardProps) {
  return (
    <motion.div
      className="glass card-hover h-full rounded-2xl border border-white/10 p-4 sm:p-6"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg text-white ring-1 ring-white/10">
          {icon ? icon : <span aria-hidden>★</span>}
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3
              className="text-lg text-white sm:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>
            {tag ? (
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {tag}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
