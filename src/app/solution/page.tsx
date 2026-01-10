import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Solution | Gaze for All",
  description:
    "Gaze for All is software-only webcam eye tracking. No hardware, instant deployment, and clinician-grade reliability for voice restoration.",
};

export default function SolutionPage() {
  const pillars = [
    {
      title: "Webcam-based eye tracking",
      description: "Runs on any modern laptop or bedside PC—no infrared cameras or proprietary rigs required.",
      tag: "Zero hardware",
    },
    {
      title: "Local-first and private",
      description: "Inference happens locally with lightweight ONNX models; network optional for sync and updates.",
      tag: "Secure",
    },
    {
      title: "Human-centered UI",
      description: "Large targets, calming palette, and voice prompts co-designed with speech therapists and caregivers.",
      tag: "Usable",
    },
    {
      title: "Deploy in minutes",
      description: "Guided setup, environment checks, and no admin privileges needed in most clinical environments.",
      tag: "Fast",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Solution"
        title="A software-only communicator that starts with the webcam you already have"
        subtitle="Gaze for All pairs computer vision, gaze mapping, and AI intent prediction to turn any webcam into a reliable communication channel."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CTAButton href="/how-it-works">See how it works</CTAButton>
          <CTAButton href="/product" variant="ghost">
            Explore product tiers
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Why it matters"
        title="Remove the cost barrier, keep clinical trust"
        subtitle="No shipments, no specialized lenses, and fewer IT tickets. Hospitals can serve more patients, insurers see lower device costs, and families get relief sooner."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Cost drops to $0 hardware"
            description="Use existing webcams and monitors; only software licensing remains, with freemium access for individuals."
            tag="Affordable"
          />
          <FeatureCard
            title="Trusted for care"
            description="On-device processing, role-based access, and exportable logs keep clinicians and auditors confident."
            tag="Clinical"
          />
          <FeatureCard
            title="Scales globally"
            description="Works in home care, ICUs, and community clinics where specialized eye-trackers will never arrive in time."
            tag="Global"
          />
        </div>
      </Section>
    </div>
  );
}
