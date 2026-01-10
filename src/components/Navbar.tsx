"use client";

import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "./CTAButton";

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
          <div className="h-10 w-10 rounded-xl bg-[color:var(--surface)] ring-1 ring-white/10 shadow-ring flex items-center justify-center text-lg font-bold text-white">G</div>
          <div>
            <Link href="/" className="text-lg font-semibold leading-tight text-white">
              Gaze for All
            </Link>
            <p className="text-xs text-slate-300">Voice through gaze — anywhere</p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-slate-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="rounded-md px-2 py-1 transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton href="/how-it-works#demo">Watch demo</CTAButton>
        </div>
      </nav>

      {open ? (
        <div className="lg:hidden">
          <div className="mt-2 space-y-1 rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white"
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
          </div>
        </div>
      ) : null}
    </header>
  );
}
