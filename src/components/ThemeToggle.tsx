"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "gfa-theme";

type ThemeMode = "light" | "dark";

type Props = {
  compact?: boolean;
};

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeToggle({ compact = false }: Props) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = getPreferredTheme();
    setMode(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-[rgb(var(--accent))] ${compact ? "w-full justify-center" : ""}`}
      aria-label="Toggle theme"
    >
      <span className="text-xs uppercase tracking-[0.14em] text-secondary">
        {mode === "dark" ? "Night" : "Day"}
      </span>
      <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" aria-hidden />
    </button>
  );
}
