"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 items-center justify-center rounded-full bg-[rgb(var(--accent))] px-4 text-sm font-semibold text-white shadow-ring transition-transform hover:-translate-y-0.5"
      aria-label="Back to top"
    >
      Back to top
    </button>
  );
}
