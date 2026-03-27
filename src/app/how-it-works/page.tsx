import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How it works | Gaze for All",
  description:
    "Eye detection, gaze mapping, AI intent prediction, and voice output on a webcam with lightweight ONNX models and local inference.",
};

const steps = [
  {
    title: "Eye detection",
    description: "The webcam tracks eyes and face landmarks while adjusting for lighting and head movement.",
    tag: "Step 1",
  },
  {
    title: "Gaze mapping",
    description: "A quick calibration grid maps gaze to screen targets without special hardware.",
    tag: "Step 2",
  },
  {
    title: "AI prediction",
    description: "Lightweight models run locally to predict intent with low latency and adapt to each user.",
    tag: "Step 3",
  },
  {
    title: "Voice output",
    description: "Predicted intent turns into spoken audio or text so teams can confirm meaning immediately.",
    tag: "Step 4",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <Section
        kicker="How it works"
        title="From gaze to voice in four steps"
        subtitle="Computation stays local for speed and privacy. Cloud is optional for preferences and care notes."
        id="demo"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} tag={step.tag} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CTAButton href="/product">View Features</CTAButton>
          <CTAButton href="/how-to-use" variant="ghost">
            Setup In 4 Steps
          </CTAButton>
        </div>
      </Section>

      <Section
        kicker="Technology"
        title="Lightweight by design"
        subtitle="Small ONNX models run on CPUs to keep the experience reliable on standard hospital and home devices."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Local inference"
            description="Works offline for reliability and privacy, with optional sync when connectivity is available."
            tag="Private"
          />
          <FeatureCard
            title="Adaptive calibration"
            description="Guided prompts help patients or nurses calibrate quickly, even with limited head mobility."
            tag="Easy"
          />
          <FeatureCard
            title="Low friction"
            description="No dongles or firmware. The flow keeps interactions clear for patients and caregivers."
            tag="Practical"
          />
        </div>
      </Section>

      <Section
        kicker="Privacy and safety"
        title="Protect patients while they speak"
        subtitle="Local inference, no raw video storage, and clear consent controls keep data handling dependable."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Local by default"
            description="Eye tracking and intent prediction run on-device, with network use optional."
            tag="Private"
          />
          <FeatureCard
            title="No raw video stored"
            description="The platform does not store or stream raw video by default."
            tag="Safe"
          />
          <FeatureCard
            title="Consent-first controls"
            description="Role-based access and export controls keep clinicians, patients, and families aligned."
            tag="Clear"
          />
        </div>
      </Section>
    </div>
  );
}
