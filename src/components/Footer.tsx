import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Impact", href: "/impact" },
  { label: "For Hospitals", href: "/for-hospitals" },
];

const policyLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="mt-14 border-t border-[rgba(var(--border),0.85)] pt-10 text-sm text-secondary">
      <div className="surface-card rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-soft">
                <Image src="/logo.svg" alt="Gaze for All logo" width={24} height={24} />
              </div>
              <p className="text-lg font-semibold text-primary">Gaze for All</p>
            </div>
            <p className="max-w-xl text-secondary">
              Accessible gaze communication for patients, hospitals, and partners who need secure, rapid deployment without specialized hardware.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="token-pill">Local First</span>
              <span className="token-pill">HIPAA Aligned</span>
              <span className="token-pill">Webcam Native</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Navigate</p>
            <ul className="space-y-1.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Contact</p>
            <div className="space-y-1.5">
              <p>hello@gaze-for-all.org</p>
              <p>+1 (555) 011-2040</p>
              <p>Boston, MA</p>
            </div>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Policy</p>
              <div className="mt-1.5 flex flex-col gap-1.5">
                {policyLinks.map((link) => (
                  <Link key={link.href} className="hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[rgba(var(--border),0.8)] pt-4 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Gaze for All. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:text-primary" href="/business-model">
              Partnerships
            </Link>
            <Link className="hover:text-primary" href="/roadmap">
              Roadmap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
