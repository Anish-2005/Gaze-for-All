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
        title="A software-only communicator that replaces $10k hardware"
        subtitle="Gaze for All turns any webcam into a reliable voice channel—no specialized devices, no procurement lag."
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
        title="Remove hardware, keep trust"
        subtitle="Use the webcam already in the room. Local-first privacy and clear audit trails keep clinicians confident."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Cost drops to $0 hardware"
            description="Existing webcams replace specialized cameras; individuals keep access with freemium."
            tag="Affordable"
          />
          <FeatureCard
            title="Built for care teams"
            description="On-device processing with role-based access and exportable logs for compliance."
            tag="Clinical"
          />
          <FeatureCard
            title="Deploy anywhere"
            description="Works in home care, ICUs, and community clinics where shipments cannot keep up."
            tag="Global"
          />
        </div>
      </Section>

      <Section
        kicker="What Gaze is not"
        title="Clarity builds trust"
        subtitle="Setting expectations keeps clinicians and families aligned."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard title="Not hardware" description="No proprietary cameras or mounts—use the webcams you already own." tag="Software" />
          <FeatureCard title="Not experimental" description="Built from proven CV and accessibility patterns with ongoing pilot data." tag="Ready" />
          <FeatureCard title="Not hospital-only" description="Runs in homes, hospices, rehab, and community clinics." tag="Flexible" />
        </div>
      </Section>
    </div>
  );
}
