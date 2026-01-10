import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy | Gaze for All",
  description: "Privacy principles for Gaze for All: local-first processing and HIPAA-aligned handling.",
};

export default function PrivacyPage() {
  return (
    <Section
      kicker="Privacy"
      title="We start with local-first processing"
      subtitle="We minimize data collection, keep processing local by default, and provide exportable logs for compliance reviews."
    >
      <ul className="space-y-3 text-secondary text-sm">
        <li>• Local-first inference; optional sync for preferences and vocab</li>
        <li>• Role-based access for clinical deployments</li>
        <li>• Exportable logs to support audits and reimbursement documentation</li>
        <li>• Contact: privacy@gaze-for-all.org</li>
      </ul>
    </Section>
  );
}
