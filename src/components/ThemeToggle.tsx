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
      className={`inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary transition-colors hover:border-[rgba(var(--accent),0.45)] hover:text-primary ${compact ? "w-full justify-center" : ""}`}
      aria-label="Toggle theme"
    >
      <span>{mode === "dark" ? "Dark" : "Light"}</span>
      <span className={`h-2.5 w-2.5 rounded-full ${mode === "dark" ? "bg-[rgb(var(--accent))]" : "bg-[rgb(var(--success))]"}`} aria-hidden />
    </button>
  );
}
