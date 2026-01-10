import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms | Gaze for All",
  description: "Terms of use overview for Gaze for All.",
};

export default function TermsPage() {
  return (
    <Section
      kicker="Terms"
      title="Plain-language terms"
      subtitle="Summary of acceptable use and responsibilities. Full legal terms available on request."
    >
      <ul className="space-y-3 text-secondary text-sm">
        <li>• Clinical deployments require appropriate consent and governance</li>
        <li>• Do not use to provide emergency medical advice; tool supports communication</li>
        <li>• Data handling follows HIPAA-aligned practices where applicable</li>
        <li>• Contact: legal@gaze-for-all.org</li>
      </ul>
    </Section>
  );
}
