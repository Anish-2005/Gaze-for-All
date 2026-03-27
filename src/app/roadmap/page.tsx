import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Roadmap | Gaze for All",
  description: "Three-year roadmap across clinical validation, reimbursement, and global access for gaze communication.",
};

const milestones = [
  {
    title: "Year 1: Validation",
    description: "Pilot in ICU and home settings; validate accuracy, satisfaction, and patient outcomes.",
    tag: "Validation",
  },
  {
    title: "Year 2: Scale",
    description: "Expand reimbursement pathways, site licensing, and partner SDK integration.",
    tag: "Scale",
  },
  {
    title: "Year 3: Access expansion",
    description: "Roll out language packs, offline bundles, and community health deployment options.",
    tag: "Impact",
  },
];

export default function RoadmapPage() {
  return (
    <div className="page-shell">
      <Section
        kicker="Roadmap"
        title="Building toward equitable communication across care environments"
        subtitle="Milestones are designed around validation, operational scale, and broad access."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Risk management"
        title="What we are actively managing during rollout"
        subtitle="Safety and reliability stay ahead of growth."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Accuracy improvement" description="Calibration and bias checks across diagnoses, posture, and lighting." tag="Quality" />
          <FeatureCard title="Regulatory alignment" description="Proactive documentation for assistive and medical workflow requirements." tag="Compliance" />
          <FeatureCard title="Accessibility assurance" description="Continuous testing with patients, caregivers, and therapy teams." tag="Access" />
        </div>
      </Section>
    </div>
  );
}
