import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Hospitals", href: "/for-hospitals" },
  { label: "Impact", href: "/impact" },
];

const companyLinks = [
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "Business Model", href: "/business-model" },
  { label: "Roadmap", href: "/roadmap" },
];

const policyLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-[rgba(var(--border),0.8)] pt-8 text-sm text-secondary sm:mt-12 sm:pt-10">
      <div className="surface-card rounded-[var(--radius-xl)] p-5 sm:p-7">
        <div className="grid gap-6 sm:gap-7 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-soft">
                <Image src="/logo.svg" alt="Gaze for All logo" width={23} height={23} />
              </div>
              <div>
                <p className="text-base font-semibold text-primary sm:text-lg">Gaze for All</p>
                <p className="text-xs text-secondary">Inclusive communication across care settings.</p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-secondary sm:text-[0.96rem]">
              Software-only gaze communication for patients, clinicians, and care teams that need secure deployment without specialized hardware.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="token-pill">Local First</span>
              <span className="token-pill">HIPAA Aligned</span>
              <span className="token-pill">Webcam Native</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Product</p>
              <ul className="space-y-1.5">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-primary" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Company</p>
              <ul className="space-y-1.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-primary" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Policy</p>
              <ul className="space-y-1.5">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-primary" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[rgba(var(--border),0.8)] pt-4 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Gaze for All. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>hello@gaze-for-all.org</span>
            <span className="hidden sm:inline">+1 (555) 011-2040</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
