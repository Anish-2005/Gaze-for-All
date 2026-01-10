import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Roadmap | Gaze for All",
  description: "Three-year roadmap across clinical validation, reimbursement, and global access for gaze communication.",
};

const milestones = [
  {
    title: "Year 1",
    description: "Pilot in ICUs and homes; validate accuracy, clinician satisfaction, and patient-reported outcomes.",
    tag: "Validation",
  },
  {
    title: "Year 2",
    description: "Reimbursement pathways; site licenses with analytics; SDK for partner apps.",
    tag: "Scale",
  },
  {
    title: "Year 3",
    description: "Global rollout with language packs, offline-first bundles, and community health deployments.",
    tag: "Impact",
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="Roadmap"
        title="Building toward equitable communication everywhere"
        subtitle="Grounded milestones across validation, reimbursement, and access."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {milestones.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Risk awareness"
        title="What we are actively managing"
        subtitle="Realism over hype keeps patients and clinicians safe."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Accuracy improvements"
            description="Ongoing calibration refinements and bias checks across diagnoses and lighting."
            tag="Quality"
          />
          <FeatureCard
            title="Regulation"
            description="Monitoring assistive tech and medical device guidance to align documentation early."
            tag="Compliance"
          />
          <FeatureCard
            title="Accessibility testing"
            description="Continuous testing with caregivers and patients for motor, vision, and cognitive needs."
            tag="Access"
          />
        </div>
      </Section>
    </div>
  );
}
