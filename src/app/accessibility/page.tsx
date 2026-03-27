import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Accessibility | Gaze for All",
  description: "Accessibility commitments for Gaze for All.",
};

export default function AccessibilityPage() {
  return (
    <Section
      kicker="Accessibility"
      title="Designed for dignity and ease"
      subtitle="We aim for WCAG AA contrast, large targets, keyboard support, and dual light/dark modes for strain reduction."
    >
      <ul className="space-y-3 text-secondary text-sm">
        <li>â€¢ Dual themes for low-strain viewing</li>
        <li>â€¢ Large hit areas and focus-visible states</li>
        <li>â€¢ Screen reader-friendly landmarks and skip links</li>
        <li>â€¢ Feedback: accessibility@gaze-for-all.org</li>
      </ul>
    </Section>
  );
}

