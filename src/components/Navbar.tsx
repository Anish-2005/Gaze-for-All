"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

const quickNav = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Hospitals", href: "/for-hospitals" },
];

const menuNav = [
  { label: "Product", href: "/product" },
  { label: "Impact", href: "/impact" },
  { label: "Business Model", href: "/business-model" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "How To Use", href: "/how-to-use" },
];

const utilityLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-5 backdrop-blur-xl">
      <nav className="surface-card flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5" aria-label="Primary">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-soft"
          >
            <Image src="/logo.svg" alt="Gaze for All logo" width={24} height={24} priority />
          </Link>
          <div className="min-w-0">
            <Link href="/" className="block text-base font-semibold text-primary sm:text-lg">
              Gaze for All
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-primary lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1 text-sm">
            {quickNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    className={`inline-flex rounded-lg px-3 py-2 font-medium transition ${
                      active
                        ? "bg-[rgba(var(--accent),0.14)] text-primary"
                        : "text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-secondary transition hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
              aria-expanded={moreOpen}
              aria-label="More pages"
            >
              Menu
              <ChevronDown className={`h-4 w-4 transition ${moreOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-11 w-56 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2 shadow-soft">
                {menuNav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        active
                          ? "bg-[rgba(var(--accent),0.12)] text-primary"
                          : "text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="my-2 border-t border-[rgb(var(--border))]" />
                {utilityLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-secondary transition hover:bg-[rgba(var(--accent),0.08)] hover:text-primary">
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <CTAButton href="/how-it-works#demo">Watch Demo</CTAButton>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="mt-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 shadow-soft lg:hidden">
          <div className="mb-3 grid grid-cols-2 gap-2">
            <CTAButton href="/how-it-works#demo">Watch Demo</CTAButton>
            <ThemeToggle compact />
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary">Main</p>
          <div className="grid grid-cols-2 gap-2">
            {quickNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-[rgba(var(--accent),0.12)] text-primary"
                      : "border border-[rgb(var(--border))] text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <details className="mt-4 rounded-xl border border-[rgb(var(--border))] p-3">
            <summary className="cursor-pointer list-none text-sm font-semibold text-primary">More Pages</summary>
            <div className="mt-3 grid grid-cols-1 gap-1">
              {menuNav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-2.5 py-2 text-sm text-secondary transition hover:bg-[rgba(var(--accent),0.08)] hover:text-primary">
                  {item.label}
                </Link>
              ))}
              <div className="my-1 border-t border-[rgb(var(--border))]" />
              {utilityLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-2.5 py-2 text-sm text-secondary transition hover:bg-[rgba(var(--accent),0.08)] hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      ) : null}
    </header>
  );
}
