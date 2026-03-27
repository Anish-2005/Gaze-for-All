import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Accessibility | Gaze for All",
  description: "Accessibility commitments for Gaze for All.",
};

export default function AccessibilityPage() {
  return (
    <div className="page-shell">
      <Section
        kicker="Accessibility"
        title="Designed for dignity, clarity, and low-friction interaction"
        subtitle="The interface targets WCAG-aligned contrast, keyboard access, and readable interaction density across devices."
      >
        <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
          <ul className="space-y-2">
            <li>- Dual themes for low-strain viewing in clinical and home settings.</li>
            <li>- Large hit areas with visible focus states for keyboard navigation.</li>
            <li>- Landmark structure and semantic HTML for assistive technologies.</li>
            <li>- Feedback: accessibility@gaze-for-all.org</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
