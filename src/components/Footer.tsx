import Link from "next/link";

const footerLinks = [
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Impact", href: "/impact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgb(var(--border))] pt-10 text-sm text-secondary">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold text-primary">Gaze for All</p>
          <p className="max-w-md text-secondary">
            Accessible gaze communication for patients, hospitals, and partners who need secure, rapid deployment without specialized hardware.
          </p>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-secondary">Pages</p>
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-secondary">Contact</p>
            <div className="space-y-1">
              <p>hello@gaze-for-all.org</p>
              <p>+1 (555) 011-2040</p>
              <p>Boston | Remote-first</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-secondary">Language</p>
            <div className="space-y-1 text-sm text-secondary">
              <p>English (US)</p>
              <p>Español (coming soon)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gaze for All. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="hover:text-primary" href="/business-model">
            Partnerships
          </Link>
          <Link className="hover:text-primary" href="/impact">
            Impact
          </Link>
        </div>
      </div>
    </footer>
  );
}
