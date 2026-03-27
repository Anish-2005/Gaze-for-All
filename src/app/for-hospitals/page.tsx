import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "For hospitals | Gaze for All",
  description: "Purpose-built overview for hospital leaders, clinicians, and IT teams evaluating bedside communication workflows.",
};

const stakeholders = [
  {
    title: "Clinical leadership",
    description: "Faster patient communication, clearer intent, and reliable usage in ICU and rehab contexts.",
    tag: "Care",
  },
  {
    title: "Nursing and therapy",
    description: "Guided setup and low training burden for staff rotating across shifts.",
    tag: "Workflow",
  },
  {
    title: "IT and security",
    description: "Local-first architecture, role-based controls, and exportable audit logs.",
    tag: "Governance",
  },
];

const readiness = [
  {
    title: "Deployment model",
    description: "Runs on existing carts and PCs with no specialist hardware procurement.",
    tag: "Fast",
  },
  {
    title: "Compliance posture",
    description: "HIPAA-aligned handling with policy-ready data controls and exportability.",
    tag: "Aligned",
  },
  {
    title: "Operational support",
    description: "Training resources and service pathways for 24/7 clinical units.",
    tag: "Supported",
  },
];

const fit = [
  {
    title: "ICU and step-down",
    description: "Support patient communication during high-acuity decision windows.",
    tag: "ICU",
  },
  {
    title: "Rehab and LTAC",
    description: "Preserve communication continuity as patients transition between units.",
    tag: "Rehab",
  },
  {
    title: "Home transitions",
    description: "Carry the same communication model from discharge to home recovery.",
    tag: "Continuity",
  },
];

export default function ForHospitalsPage() {
  return (
    <div className="page-shell">
      <Section
        kicker="For hospitals"
        title="Hospital-ready communication without $10k hardware dependence"
        subtitle="A practical deployment path for clinicians, IT teams, and administrators."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stakeholders.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <CTAButton href="/how-it-works">Review Technical Flow</CTAButton>
          <CTAButton href="/product" variant="ghost">
            Compare Product Tiers
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Readiness"
        title="What decision-makers need to validate quickly"
        subtitle="Core checks for implementation, compliance, and team adoption."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {readiness.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Care journey fit"
        title="One software path across ICU, rehab, and home"
        subtitle="Consistent interaction model reduces change management burden."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fit.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>
    </div>
  );
}
