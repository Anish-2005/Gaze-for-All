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
    description: "Put the webcam near eye level with gentle light. No special mounts.",
    tag: "Step 1",
  },
  {
    title: "Quick calibration",
    description: "Follow the dots for under a minute. A nurse or family member can guide.",
    tag: "Step 2",
  },
  {
    title: "Pick a phrase",
    description: "Choose a phrase like “yes,” “pain,” or a custom need. The system suggests likely options.",
    tag: "Step 3",
  },
  {
    title: "Hear your voice",
    description: "It speaks aloud and shows text so everyone knows it landed.",
    tag: "Step 4",
  },
];

export default function HowToUsePage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="How to use"
        title="Four steps to a reassuring first message"
        subtitle="Designed for patients and caregivers—no technical words needed."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-primary font-semibold">If eye movement is possible, communication is possible.</p>
          <CTAButton href="/how-it-works">See technology details</CTAButton>
        </div>
      </Section>
    </div>
  );
}
