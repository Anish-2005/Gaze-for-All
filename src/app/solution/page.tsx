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
      title: "Webcam-based eye tracking",
      description: "Runs on modern laptops or bedside PCs with no infrared camera dependency.",
      tag: "Zero hardware",
    },
    {
      title: "Local-first privacy",
      description: "Inference happens locally with lightweight ONNX models; cloud can remain optional.",
      tag: "Secure",
    },
    {
      title: "Human-centered UI",
      description: "Large targets, calm visuals, and voice prompts tuned with therapists and caregivers.",
      tag: "Usable",
    },
    {
      title: "Deploy in minutes",
      description: "Guided setup and practical defaults minimize IT burden for clinical environments.",
      tag: "Fast",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Solution"
        title="A software-first communicator that replaces $10k hardware"
        subtitle="Gaze for All turns any webcam into a reliable voice channel with faster deployment and lower cost."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CTAButton href="/how-it-works">See How It Works</CTAButton>
          <CTAButton href="/product" variant="ghost">
            Explore Product Tiers
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Why it matters"
        title="Remove hardware dependence and keep clinical trust"
        subtitle="Use the webcam already in the room while keeping privacy controls and audit paths clear."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Cost drops to $0 hardware"
            description="Existing webcams replace specialized cameras while preserving patient access."
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
          <FeatureCard title="Not hardware" description="No proprietary cameras or mounts. Use existing webcams." tag="Software" />
          <FeatureCard title="Not experimental" description="Built on proven computer vision and accessibility patterns." tag="Ready" />
          <FeatureCard title="Not hospital-only" description="Runs in homes, hospices, rehab, and community clinics." tag="Flexible" />
        </div>
      </Section>
    </div>
  );
}
