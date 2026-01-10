import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Product | Gaze for All",
  description:
    "Core and Pro features for gaze-based communication: AI prediction, voice cloning, cloud sync, and clinician-grade controls.",
};

export default function ProductPage() {
  const free = [
    {
      title: "Webcam gaze control",
      description: "Accurate eye tracking on standard webcams with adaptive calibration.",
      tag: "Free",
    },
    {
      title: "On-device privacy",
      description: "Local processing by default with optional encrypted sync for preferences.",
      tag: "Free",
    },
    {
      title: "Large target UI",
      description: "High-contrast buttons, dwell selection, and audio cues that reduce fatigue.",
      tag: "Free",
    },
    {
      title: "Multilingual text-to-speech",
      description: "Clear voice output for patient reassurance and clinician confirmation.",
      tag: "Free",
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

  const enterprise = [
    {
      title: "Site controls",
      description: "SSO, audit exports, and admin policies for hospitals and agencies.",
      tag: "Enterprise",
    },
    {
      title: "Support & SLAs",
      description: "Coverage for 24/7 care teams with escalation and training options.",
      tag: "Enterprise",
    },
    {
      title: "Data residency options",
      description: "Configurable storage regions and retention to align with compliance needs.",
      tag: "Enterprise",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Product"
        title="Choose what you need, start instantly"
        subtitle="Free for individuals. Pro for teams. Enterprise-ready for hospitals and partners."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {free.map((item) => (
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

      <Section
        kicker="Enterprise-ready"
        title="For hospitals, agencies, and payers"
        subtitle="Controls and support needed for continuous clinical use."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {enterprise.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Comparison"
        title="Free vs Pro"
        subtitle="Pick what matches your setting."
      >
        <div className="grid gap-4 sm:grid-cols-2 text-sm text-secondary">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4">
            <p className="text-primary text-lg font-semibold">Free</p>
            <ul className="mt-2 space-y-1.5">
              <li>• Webcam gaze, local processing</li>
              <li>• Large-target UI with voice feedback</li>
              <li>• Multilingual speech</li>
              <li>• Personal use, no cost</li>
            </ul>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4">
            <p className="text-primary text-lg font-semibold">Pro</p>
            <ul className="mt-2 space-y-1.5">
              <li>• Everything in Free</li>
              <li>• AI prediction and personalization</li>
              <li>• Cloud sync and team sharing</li>
              <li>• Analytics and exports for reimbursement</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
