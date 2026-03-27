import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms | Gaze for All",
  description: "Terms of use overview for Gaze for All.",
};

export default function TermsPage() {
  return (
    <div className="page-shell">
      <Section
        kicker="Terms"
        title="Plain-language usage expectations"
        subtitle="A practical summary of acceptable use and deployment responsibilities."
      >
        <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
          <ul className="space-y-2">
            <li>- Clinical deployments require appropriate consent and governance processes.</li>
            <li>- The platform supports communication and does not replace emergency medical advice.</li>
            <li>- Data handling follows HIPAA-aligned practices where applicable.</li>
            <li>- Contact: legal@gaze-for-all.org</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
