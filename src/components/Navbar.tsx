"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Business", href: "/business-model" },
  { label: "Impact", href: "/impact" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "How to use", href: "/how-to-use" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md">
      <nav className="glass mt-6 flex items-center justify-between rounded-2xl px-5 py-4 sm:px-7" aria-label="Primary">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[rgb(var(--surface))] ring-1 ring-[rgb(var(--border))] shadow-ring flex items-center justify-center">
            <Image src="/logo.svg" alt="Gaze for All logo" width={32} height={32} priority />
          </div>
          <div>
            <Link href="/" className="text-lg font-semibold leading-tight text-primary">
              Gaze for All
            </Link>
            <p className="text-xs text-secondary">Restore speech with any webcam.</p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--border))] text-primary lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[rgb(var(--text))]" />
            <span className="block h-0.5 w-6 bg-[rgb(var(--text))]" />
            <span className="block h-0.5 w-6 bg-[rgb(var(--text))]" />
          </div>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-4 text-sm text-secondary">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="rounded-md px-2 py-1 transition-colors hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <CTAButton href="/how-it-works#demo">Watch demo</CTAButton>
          </div>
        </div>
      </nav>

      {open ? (
        <div className="lg:hidden">
          <div className="mt-2 space-y-1 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm text-secondary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-2 py-2 hover:bg-[rgba(var(--accent),0.08)] hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <CTAButton href="/how-it-works#demo" variant="primary">
                Watch demo
              </CTAButton>
            </div>
            <div className="pt-1">
              <ThemeToggle compact />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
