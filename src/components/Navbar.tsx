"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

const primaryNav = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Hospitals", href: "/for-hospitals" },
  { label: "Impact", href: "/impact" },
];

const secondaryNav = [
  { label: "Business", href: "/business-model" },
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

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex rounded-lg px-2.5 py-2 text-sm font-medium transition ${
        active ? "bg-[rgba(var(--accent),0.14)] text-primary" : "text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 pt-2.5 transition-all duration-300 sm:pt-3 ${
        isScrolled
          ? "bg-[rgba(var(--bg),0.64)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(var(--bg),0.52)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`surface-card flex items-center justify-between rounded-[var(--radius-lg)] px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          isScrolled ? "shadow-soft border-[rgba(var(--border),0.96)]" : ""
        }`}
        aria-label="Primary"
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <Link
            href="/"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-soft"
          >
            <Image src="/logo.svg" alt="Gaze for All logo" width={23} height={23} priority />
          </Link>
          <div className="min-w-0">
            <Link href="/" className="block truncate text-sm font-semibold text-primary sm:text-base">
              Gaze for All
            </Link>
            <p className="hidden text-[0.72rem] text-secondary md:block">Clinical-grade communication. Consumer-level setup.</p>
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

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
          ))}

          <div className="relative ml-1" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-secondary transition hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
              aria-expanded={menuOpen}
              aria-label="Open more pages menu"
            >
              More
              <ChevronDown className={`h-4 w-4 transition ${menuOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {menuOpen ? (
              <div className="absolute right-0 top-11 w-56 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2 shadow-soft">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      pathname === item.href ? "bg-[rgba(var(--accent),0.12)] text-primary" : "text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-[rgb(var(--border))]" />
                {utilityLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary">
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <ThemeToggle iconOnly />
          <CTAButton href="/how-it-works#demo">Watch Demo</CTAButton>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="mt-2 rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-3 shadow-soft lg:hidden">
          <div className="mb-3 grid grid-cols-2 gap-2">
            <ThemeToggle compact />
            <CTAButton href="/how-it-works#demo">Watch Demo</CTAButton>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  pathname === item.href ? "bg-[rgba(var(--accent),0.12)] text-primary" : "border border-[rgb(var(--border))] text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <details className="mt-3 rounded-lg border border-[rgb(var(--border))] p-2.5">
            <summary className="cursor-pointer list-none text-sm font-semibold text-primary">More Pages</summary>
            <div className="mt-2.5 grid gap-1">
              {secondaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-2.5 py-2 text-sm text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary">
                  {item.label}
                </Link>
              ))}
              <div className="my-1 border-t border-[rgb(var(--border))]" />
              {utilityLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-2.5 py-2 text-sm text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary">
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
