import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "For hospitals | Gaze for All",
  description: "Purpose-built overview for hospital leaders, clinicians, and IT to see how Gaze for All fits bedside workflows.",
};

const stakeholders = [
  {
    title: "Clinical leads",
    description: "Minutes to first message, voice confirmations, and offline mode for ICU and rehab.",
    tag: "Care",
  },
  {
    title: "Nursing & therapy",
    description: "Guided setup, large targets, and low training load for bedside teams.",
    tag: "Workflow",
  },
  {
    title: "IT & security",
    description: "Local-first processing, no special hardware, audit exports, and role-based access.",
    tag: "Trust",
  },
];

const readiness = [
  {
    title: "Deployment",
    description: "Runs on existing carts and PCs; no procurement cycles or new mounts.",
    tag: "Fast",
  },
  {
    title: "Compliance",
    description: "HIPAA-aligned handling, exportable logs, and consent workflows.",
    tag: "Aligned",
  },
  {
    title: "Support",
    description: "Training materials for nurses and therapists; SLAs available for 24/7 units.",
    tag: "Supported",
  },
];

const fit = [
  {
    title: "ICU and step-down",
    description: "Use webcams on shared devices; keep patients communicating during critical windows.",
    tag: "ICU",
  },
  {
    title: "Rehab and LTAC",
    description: "Maintain continuity as patients move units without swapping hardware.",
    tag: "Rehab",
  },
  {
    title: "Home transitions",
    description: "Same software follows the patient home; no new devices to learn.",
    tag: "Home",
  },
];

export default function ForHospitalsPage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="For hospitals"
        title="Is this ready for our hospital?"
        subtitle="Built to fit bedside workflows without $10k hardware or long approvals."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {stakeholders.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CTAButton href="/how-it-works">See how it works</CTAButton>
          <CTAButton href="/product" variant="ghost">
            View tiers
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Readiness"
        title="What hospital teams need to know"
        subtitle="Purpose clarity for clinicians, IT, and administrators."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {readiness.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Where it fits"
        title="Across the patient journey"
        subtitle="Same software from ICU to home minimizes change management."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {fit.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>
    </div>
  );
}
