import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "The problem | Gaze for All",
  description:
    "Communication loss in ALS, paralysis, and ICU settings is urgent. Specialized eye-tracking hardware costs $10k+, leaving patients without a voice.",
};

export default function ProblemPage() {
  const barriers = [
    {
      title: "Hardware is unaffordable",
      description:
        "Dedicated eye-tracking devices cost $10k–$20k and require procurement cycles many patients cannot access in time.",
      tag: "$10k+",
    },
    {
      title: "Access is delayed",
      description:
        "ICU stays are short and unpredictable. By the time hardware arrives, the window to engage the patient can be gone.",
      tag: "Timing",
    },
    {
      title: "Caregivers are overburdened",
      description:
        "Complex setups steal time from nurses and families. Anxiety rises when communication tools are hard to start or fail mid-session.",
      tag: "Fatigue",
    },
    {
      title: "Equity gap widens",
      description:
        "Low-resource hospitals and home settings rarely see specialized eye-trackers, leaving many communities without a voice.",
      tag: "Equity",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Problem"
        title="Patients lose their voice when specialized hardware isn’t reachable"
        subtitle="People with ALS, paralysis, stroke, or ICU delirium can lose the ability to speak within days. Traditional eye-tracking devices are expensive, scarce, and slow to deploy. Families and clinicians are left improvising while patients remain unheard."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {barriers.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="What this means"
        title="Silence has clinical and human costs"
        subtitle="Without rapid communication, pain goes unreported, consent is unclear, and care plans slow down. Anxiety increases for patients, families, and care teams." 
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Delayed decisions"
            description="Clinicians lack patient feedback on pain, discomfort, or consent, slowing interventions and increasing risk."
            tag="ICU"
          />
          <FeatureCard
            title="Emotional toll"
            description="Patients feel isolated; families can’t confirm needs. Morale drops during critical recovery moments."
            tag="Family"
          />
          <FeatureCard
            title="Inequitable access"
            description="Rural, low-income, and understaffed hospitals rarely receive specialized devices, deepening disparities."
            tag="Access"
          />
        </div>
      </Section>
    </div>
  );
}
