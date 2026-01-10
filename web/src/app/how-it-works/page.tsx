import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How it works | Gaze for All",
  description:
    "Eye detection, gaze mapping, AI intent prediction, and voice output—all on a webcam with lightweight ONNX models and local inference.",
};

const steps = [
  {
    title: "Eye detection",
    description: "The webcam tracks eyes and face landmarks, adjusting for lighting and head movement.",
    tag: "Step 1",
  },
  {
    title: "Gaze mapping",
    description: "A calibration-light grid maps gaze to screen targets without special hardware.",
    tag: "Step 2",
  },
  {
    title: "AI prediction",
    description: "ONNX models run locally to predict intent with minimal latency, learning user patterns over time.",
    tag: "Step 3",
  },
  {
    title: "Voice output",
    description: "Predicted intent turns into spoken audio or text—audible confirmation reduces anxiety for patients and caregivers.",
    tag: "Step 4",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="How it works"
        title="From gaze to voice in four steps"
        subtitle="Gaze for All keeps computation local for speed and privacy, with optional cloud sync for preferences and shared care notes."
        id="demo"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CTAButton href="/product">View features</CTAButton>
          <CTAButton href="/how-to-use" variant="ghost">
            Setup in 4 steps
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Technology"
        title="Lightweight by design"
        subtitle="We use small ONNX models that run on CPUs to keep it reliable on standard hospital and home devices."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Local inference"
            description="Works offline for reliability and privacy; optional sync when connectivity is available."
            tag="Private"
          />
          <FeatureCard
            title="Adaptive calibration"
            description="Guided prompts help patients or nurses calibrate quickly, even with limited head mobility."
            tag="Easy"
          />
          <FeatureCard
            title="Low friction"
            description="No dongles, no firmware. A browser-like experience with clear voice confirmations for every action."
            tag="Practical"
          />
        </div>
      </Section>
    </div>
  );
}
