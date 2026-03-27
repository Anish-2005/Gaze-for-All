import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How to use | Gaze for All",
  description: "A gentle 4-step flow to start using Gaze for All with any webcam for patients and caregivers.",
};

const steps = [
  {
    title: "Position the camera",
    description: "Place the webcam near eye level with soft light. No special mounts are required.",
    tag: "Step 1",
  },
  {
    title: "Quick calibration",
    description: "Follow the dots for under a minute. A nurse or family member can guide the process.",
    tag: "Step 2",
  },
  {
    title: "Pick a phrase",
    description: "Choose a phrase like \"yes\" or \"pain\", or select a custom need. The system suggests likely options.",
    tag: "Step 3",
  },
  {
    title: "Hear your voice",
    description: "The selected message is spoken aloud and shown as text so everyone can confirm it landed.",
    tag: "Step 4",
  },
];

export default function HowToUsePage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="How to use"
        title="Four steps to a reassuring first message"
        subtitle="Designed for patients and caregivers with no technical setup burden."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-primary font-semibold">If eye movement is possible, communication is possible.</p>
          <CTAButton href="/how-it-works">See Technology Details</CTAButton>
        </div>
      </Section>
    </div>
  );
}
