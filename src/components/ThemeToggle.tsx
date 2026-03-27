"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { MouseEvent, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "gfa-theme";

const THEME_ORDER = ["light", "dark", "ocean", "graphite"] as const;
type ThemeMode = (typeof THEME_ORDER)[number];

type ThemeConfig = {
  id: ThemeMode;
  label: string;
  previewClass: string;
};

type Props = {
  compact?: boolean;
  iconOnly?: boolean;
};

type ThemeTransitionApi = {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

const THEMES: ThemeConfig[] = [
  { id: "light", label: "Light", previewClass: "bg-[linear-gradient(120deg,#f8fbff,#e4edf9)]" },
  { id: "dark", label: "Dark", previewClass: "bg-[linear-gradient(120deg,#102338,#1f3c63)]" },
  { id: "ocean", label: "Ocean", previewClass: "bg-[linear-gradient(120deg,#dff6fb,#46b6cc)]" },
  { id: "graphite", label: "Graphite", previewClass: "bg-[linear-gradient(120deg,#353f52,#d8a458)]" },
];

function isTheme(value: string | null): value is ThemeMode {
  return value !== null && THEME_ORDER.includes(value as ThemeMode);
}

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isTheme(stored)) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.dataset.theme = mode;
  if (mode === "dark" || mode === "graphite") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getNextTheme(current: ThemeMode): ThemeMode {
  const idx = THEME_ORDER.indexOf(current);
  const next = (idx + 1) % THEME_ORDER.length;
  return THEME_ORDER[next];
}

function setThemeSwitchOrigin(event: MouseEvent<HTMLButtonElement>) {
  const root = document.documentElement;
  root.style.setProperty("--theme-switch-x", `${event.clientX}px`);
  root.style.setProperty("--theme-switch-y", `${event.clientY}px`);
}

export function ThemeToggle({ compact = false, iconOnly = false }: Props) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = getPreferredTheme();
    setMode(initial);
    applyTheme(initial);
  }, []);

  const activeTheme = useMemo(() => THEMES.find((theme) => theme.id === mode) ?? THEMES[0], [mode]);

  const performThemeChange = (next: ThemeMode) => {
    setMode(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next = getNextTheme(mode);
    setThemeSwitchOrigin(event);

    const doc = document as Document & ThemeTransitionApi;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    if (!doc.startViewTransition || reduceMotion) {
      performThemeChange(next);
      return;
    }

    root.classList.add("theme-transitioning");

    const transition = doc.startViewTransition(() => {
      performThemeChange(next);
    });

    transition.finished.finally(() => {
      root.classList.remove("theme-transitioning");
    });
  };

  const icon =
    mode === "light" ? (
      <Sun className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" aria-hidden />
    ) : mode === "dark" ? (
      <Moon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-rotate-12" aria-hidden />
    ) : (
      <Palette className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" aria-hidden />
    );

  return (
    <button
      type="button"
      onClick={toggle}
      className={`group inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-xs font-semibold uppercase tracking-[0.1em] text-secondary transition-colors hover:border-[rgba(var(--accent),0.45)] hover:text-primary ${iconOnly ? "h-10 w-10 justify-center p-0" : "px-3 py-2"} ${compact ? "w-full justify-center" : ""}`}
      aria-label={`Change theme. Current: ${activeTheme.label}`}
      title={`Theme: ${activeTheme.label}`}
    >
      {iconOnly ? (
        icon
      ) : (
        <>
          <span>{activeTheme.label}</span>
          <span className={`h-2.5 w-7 rounded-full border border-[rgb(var(--border))] ${activeTheme.previewClass}`} aria-hidden />
        </>
      )}
    </button>
  );
}
