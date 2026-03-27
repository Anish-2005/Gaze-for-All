import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Solution | Gaze for All",
  description:
    "Gaze for All is software-only webcam eye tracking with instant deployment and clinician-grade reliability for voice restoration.",
};

export default function SolutionPage() {
  const pillars = [
    {
      title: "Webcam-native tracking",
      description: "Runs on modern laptops and bedside PCs with no proprietary camera dependency.",
      tag: "Zero Hardware",
    },
    {
      title: "Local-first privacy",
      description: "Inference happens locally using lightweight ONNX models with optional cloud sync.",
      tag: "Secure",
    },
    {
      title: "Patient-centered UI",
      description: "Large targets, calm visuals, and clear prompts reduce fatigue and uncertainty.",
      tag: "Usability",
    },
    {
      title: "Deploy in minutes",
      description: "Guided setup and practical defaults keep IT lift low for clinical teams.",
      tag: "Speed",
    },
  ];

  return (
    <div className="page-shell">
      <Section
        kicker="Solution"
        title="A software-first communicator that replaces five-figure hardware"
        subtitle="Gaze for All turns any webcam into a dependable voice channel with faster rollout and lower risk."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {pillars.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <CTAButton href="/how-it-works">See How It Works</CTAButton>
          <CTAButton href="/product" variant="ghost">
            View Product Tiers
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Why this model works"
        title="Remove hardware dependence without reducing clinical confidence"
        subtitle="Teams keep privacy controls and audit pathways while eliminating procurement delay."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Cost drops to $0 hardware" description="Existing webcams replace specialized device procurement." tag="Affordable" />
          <FeatureCard title="Clinical controls included" description="Role-based access and exportable logs support compliance workflows." tag="Clinical" />
          <FeatureCard title="Works across settings" description="Deploy consistently in ICU, rehab, home care, and community clinics." tag="Flexible" />
        </div>
      </Section>
    </div>
  );
}
