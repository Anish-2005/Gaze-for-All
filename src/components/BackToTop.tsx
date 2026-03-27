"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 inline-flex h-11 items-center justify-center rounded-xl border border-[rgba(var(--accent),0.35)] bg-[rgb(var(--surface))] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-primary shadow-soft transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.6)]"
      aria-label="Back to top"
    >
      Top
    </button>
  );
}

