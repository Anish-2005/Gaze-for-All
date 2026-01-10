import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Roadmap | Gaze for All",
  description: "Three-year roadmap across clinical validation, reimbursement, and global access for gaze communication.",
};

const milestones = [
  {
    title: "Year 1",
    description: "Pilot in 10 ICUs and 500 home users; validate accuracy, clinician satisfaction, and patient-reported outcomes.",
    tag: "Validation",
  },
  {
    title: "Year 2",
    description: "Insurance and government reimbursement pathways; site licenses with analytics; SDK for partner apps.",
    tag: "Scale",
  },
  {
    title: "Year 3",
    description: "Global expansion with language packs, offline-first bundles, and community health deployments.",
    tag: "Impact",
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="Roadmap"
        title="Building toward equitable communication everywhere"
        subtitle="Clear milestones guide product maturity, reimbursement readiness, and global reach."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {milestones.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>
    </div>
  );
}
