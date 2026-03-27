import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How it works | Gaze for All",
  description:
    "Eye detection, gaze mapping, AI intent prediction, and voice output on a webcam with lightweight ONNX models and local inference.",
};

const steps = [
  {
    title: "Eye detection",
    description: "Webcam tracking follows eye and face landmarks while adapting to lighting and small movement changes.",
    tag: "Step 1",
  },
  {
    title: "Gaze mapping",
    description: "A fast calibration grid maps gaze to screen targets without specialized hardware.",
    tag: "Step 2",
  },
  {
    title: "Intent prediction",
    description: "On-device models infer likely intent with low latency and patient-specific adaptation.",
    tag: "Step 3",
  },
  {
    title: "Voice confirmation",
    description: "Selections are spoken and displayed so care teams can confirm intent immediately.",
    tag: "Step 4",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="page-shell">
      <Section
        kicker="How it works"
        title="From gaze to voice in four reliable steps"
        subtitle="Computation stays local by default for speed and privacy. Cloud sync remains optional."
        id="demo"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <CTAButton href="/product">View Features</CTAButton>
          <CTAButton href="/how-to-use" variant="ghost">
            See Setup Guide
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Platform characteristics"
        title="Designed for clinical reliability on standard hardware"
        subtitle="Small model footprint and practical interaction defaults help teams deploy consistently."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Local inference" description="Works offline for reliability and data minimization." tag="Private" />
          <FeatureCard title="Adaptive calibration" description="Guided prompts support varied patient mobility and posture." tag="Accessible" />
          <FeatureCard title="Low operational friction" description="No dongles or firmware dependencies for routine usage." tag="Practical" />
        </div>
      </Section>
    </div>
  );
}
