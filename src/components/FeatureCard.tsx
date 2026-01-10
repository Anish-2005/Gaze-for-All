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
      className="glass card-hover h-full rounded-2xl border border-[rgb(var(--border))] p-4 sm:p-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] text-lg text-primary ring-1 ring-[rgb(var(--border))]">
          {icon ? icon : <span aria-hidden>✦</span>}
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3
              className="text-lg text-primary sm:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>
            {tag ? (
              <span className="rounded-full bg-[rgba(var(--accent),0.12)] px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary">
                {tag}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-secondary sm:text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
