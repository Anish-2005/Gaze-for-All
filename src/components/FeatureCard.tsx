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
      className="surface-card card-hover h-full rounded-2xl p-5 sm:p-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] text-base text-primary ring-1 ring-[rgba(var(--border),0.9)]">
          {icon ? icon : <span aria-hidden>*</span>}
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg text-primary sm:text-xl">{title}</h3>
            {tag ? (
              <span className="token-pill">
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
