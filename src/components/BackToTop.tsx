"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(var(--accent),0.35)] bg-[rgb(var(--surface))] text-primary shadow-soft transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.58)] sm:bottom-6 sm:right-6"
      aria-label="Back to top"
    >
      <ChevronUp className="h-4 w-4" aria-hidden />
    </button>
  );
}
