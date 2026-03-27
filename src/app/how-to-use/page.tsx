import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How to use | Gaze for All",
  description: "A practical four-step setup flow for patients, families, and caregivers.",
};

const steps = [
  {
    title: "Position the camera",
    description: "Place the webcam near eye level with soft ambient light.",
    tag: "Step 1",
  },
  {
    title: "Run quick calibration",
    description: "Follow the guided targets for under a minute to map gaze accurately.",
    tag: "Step 2",
  },
  {
    title: "Select key phrases",
    description: "Use core phrases or custom vocabulary. Suggestions help speed selection.",
    tag: "Step 3",
  },
  {
    title: "Confirm spoken output",
    description: "Selections are spoken and shown on-screen for immediate confirmation.",
    tag: "Step 4",
  },
];

export default function HowToUsePage() {
  return (
    <div className="page-shell">
      <Section
        kicker="How to use"
        title="Four steps to a confident first message"
        subtitle="Designed for patients and caregivers with minimal technical friction."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <CTAButton href="/how-it-works">See Technical Flow</CTAButton>
          <CTAButton href="/product" variant="ghost">
            Explore Features
          </CTAButton>
        </div>
      </Section>
    </div>
  );
}
