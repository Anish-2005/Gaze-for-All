import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How to use | Gaze for All",
  description: "A gentle 4-step flow to start using Gaze for All with any webcam—patient-friendly and quick for caregivers.",
};

const steps = [
  {
    title: "Position the camera",
    description: "Place the webcam at eye level and ensure soft, even lighting. No special mounts needed.",
    tag: "Step 1",
  },
  {
    title: "Quick calibration",
    description: "Follow the on-screen dots for under a minute. A nurse or family member can guide if needed.",
    tag: "Step 2",
  },
  {
    title: "Pick a phrase",
    description: "Choose simple phrases or custom needs; Gaze for All predicts likely intent to speed selection.",
    tag: "Step 3",
  },
  {
    title: "Hear your voice",
    description: "The system speaks aloud and shows text so patients and caregivers know it landed.",
    tag: "Step 4",
  },
];

export default function HowToUsePage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="How to use"
        title="Four steps to a reassuring first message"
        subtitle="Designed for patients and caregivers—no technical background required."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="mt-4">
          <CTAButton href="/how-it-works">See technology details</CTAButton>
        </div>
      </Section>
    </div>
  );
}
