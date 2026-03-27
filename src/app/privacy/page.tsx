import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy | Gaze for All",
  description: "Privacy principles for Gaze for All: local-first processing and HIPAA-aligned handling.",
};

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Section
        kicker="Privacy"
        title="Local-first data handling with clear governance controls"
        subtitle="Data collection is minimized, processing remains local by default, and exports support clinical compliance workflows."
      >
        <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
          <ul className="space-y-2">
            <li>- Local-first inference with optional sync for preferences and vocabulary.</li>
            <li>- Role-based access controls for institutional deployments.</li>
            <li>- Exportable logs for audit and reimbursement support.</li>
            <li>- Contact: privacy@gaze-for-all.org</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
