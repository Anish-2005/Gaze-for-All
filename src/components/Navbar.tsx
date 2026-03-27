"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Hospitals", href: "/for-hospitals" },
  { label: "Impact", href: "/impact" },
  { label: "Business", href: "/business-model" },
  { label: "Roadmap", href: "/roadmap" },
];

const secondaryLinks = [
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "How To Use", href: "/how-to-use" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 pt-5 backdrop-blur-xl">
      <nav className="surface-card flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6" aria-label="Primary">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-soft">
            <Image src="/logo.svg" alt="Gaze for All logo" width={26} height={26} priority />
          </Link>
          <div className="min-w-0">
            <Link href="/" className="block text-base font-semibold text-primary sm:text-lg">
              Gaze for All
            </Link>
            <p className="truncate text-xs text-secondary">Webcam communication for clinical and home care.</p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-primary lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex items-center gap-1 text-sm">
            {navItems.map((item) => {
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
          <ThemeToggle />
          <CTAButton href="/how-it-works#demo">Watch Demo</CTAButton>
        </div>
      </nav>

      {open ? (
        <div className="mt-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 shadow-soft lg:hidden">
          <ul className="space-y-1.5 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 font-medium transition ${
                      active
                        ? "bg-[rgba(var(--accent),0.12)] text-primary"
                        : "text-secondary hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
            {secondaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-[rgb(var(--border))] px-3 py-2 text-center text-secondary hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-2">
            <CTAButton href="/how-it-works#demo">Watch Demo</CTAButton>
            <ThemeToggle compact />
          </div>
        </div>
      ) : null}
    </header>
  );
}
