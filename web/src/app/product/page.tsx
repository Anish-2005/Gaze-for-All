import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Product | Gaze for All",
  description:
    "Core and Pro features for gaze-based communication: AI prediction, voice cloning, cloud sync, and clinician-grade controls.",
};

export default function ProductPage() {
  const core = [
    {
      title: "Webcam gaze control",
      description: "Accurate eye tracking on standard webcams with adaptive calibration.",
      tag: "Core",
    },
    {
      title: "On-device privacy",
      description: "Local processing by default with optional encrypted sync for preferences.",
      tag: "Core",
    },
    {
      title: "Large target UI",
      description: "High-contrast buttons, dwell selection, and audio cues that reduce fatigue.",
      tag: "Core",
    },
    {
      title: "Multilingual text-to-speech",
      description: "Clear voice output for patient reassurance and clinician confirmation.",
      tag: "Core",
    },
  ];

  const pro = [
    {
      title: "AI intent prediction",
      description: "Predicts likely words and phrases to reduce dwell time, personalized per patient.",
      tag: "Pro",
    },
    {
      title: "Voice cloning",
      description: "Optional personal voice recreation with consent, keeping the patient’s identity present.",
      tag: "Pro",
    },
    {
      title: "Cloud sync",
      description: "Sync vocabulary, care notes, and access controls across hospital devices and home use.",
      tag: "Pro",
    },
    {
      title: "Analytics & export",
      description: "Session summaries and outcomes for reimbursement submissions and quality reporting.",
      tag: "Pro",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Product"
        title="Choose what you need, start instantly"
        subtitle="Core is free for individuals. Pro unlocks AI prediction, voice cloning, and cloud sync for teams, hospitals, and partners."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {core.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Pro"
        title="Advanced capabilities for clinicians and partners"
        subtitle="Built for ICU site licenses, home health agencies, and payers who need secure data handling."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {pro.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>
    </div>
  );
}
