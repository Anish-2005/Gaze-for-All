import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Product | Gaze for All",
  description:
    "Core and Pro features for gaze-based communication: AI prediction, voice continuity, cloud sync, and clinician-grade controls.",
};

export default function ProductPage() {
  const free = [
    {
      title: "Webcam gaze control",
      description: "Accurate eye tracking on standard webcams with adaptive calibration.",
      tag: "Free",
    },
    {
      title: "On-device privacy",
      description: "Local processing by default with optional secure sync for preferences.",
      tag: "Free",
    },
    {
      title: "Large target interface",
      description: "High-contrast controls and dwell interactions designed to reduce fatigue.",
      tag: "Free",
    },
    {
      title: "Multilingual speech output",
      description: "Clear voice output for patient reassurance and clinician confirmation.",
      tag: "Free",
    },
  ];

  const pro = [
    {
      title: "AI intent prediction",
      description: "Predict likely words and phrases to reduce dwell time for frequent communication.",
      tag: "Pro",
    },
    {
      title: "Voice continuity",
      description: "Optional personalized voice capability to preserve communication identity.",
      tag: "Pro",
    },
    {
      title: "Cross-device sync",
      description: "Sync vocabulary, notes, and access controls between care settings.",
      tag: "Pro",
    },
    {
      title: "Analytics and exports",
      description: "Generate outcomes reports for quality workflows and reimbursement support.",
      tag: "Pro",
    },
  ];

  const enterprise = [
    {
      title: "Administrative controls",
      description: "SSO, policy enforcement, and role-based governance for healthcare sites.",
      tag: "Enterprise",
    },
    {
      title: "Support and SLA coverage",
      description: "Operational support for high-availability clinical deployments.",
      tag: "Enterprise",
    },
    {
      title: "Data residency options",
      description: "Regional storage and retention flexibility for compliance needs.",
      tag: "Enterprise",
    },
  ];

  return (
    <div className="page-shell">
      <Section
        kicker="Product tiers"
        title="Choose the capability level that fits your care setting"
        subtitle="Start free, scale to clinical workflows, and add enterprise controls when needed."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {free.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Pro capabilities"
        title="Advanced workflows for clinicians and partners"
        subtitle="Designed for teams that need personalization, reporting, and continuity across devices."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {pro.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Enterprise"
        title="Controls for hospitals, agencies, and payer-aligned programs"
        subtitle="Operational governance and service levels for long-running deployment environments."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {enterprise.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section kicker="Comparison" title="Free vs Pro" subtitle="A quick side-by-side for decision support.">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">Free</p>
            <ul className="mt-3 space-y-2">
              <li>- Webcam gaze and local processing</li>
              <li>- Large target interaction and voice output</li>
              <li>- Built for individual and family use</li>
            </ul>
          </div>
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">Pro</p>
            <ul className="mt-3 space-y-2">
              <li>- Includes all Free capabilities</li>
              <li>- Intent prediction and personalization</li>
              <li>- Reporting and team-level operations</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <CTAButton href="/for-hospitals">Evaluate Hospital Fit</CTAButton>
          <CTAButton href="/how-it-works" variant="ghost">
            Review Technical Flow
          </CTAButton>
        </div>
      </Section>
    </div>
  );
}
