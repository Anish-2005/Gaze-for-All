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
        title="When speech stops, waiting for hardware is not an option"
        subtitle="ALS, stroke, paralysis, and ICU patients need a way to speak within hours, not weeks. Dedicated devices cost five figures and arrive after the critical window."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5 text-secondary">
            <p className="text-primary text-xl" style={{ fontFamily: "var(--font-heading)" }}>
              Cost comparison
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="space-y-2 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.04)] p-3">
                <p className="text-primary font-semibold">Traditional</p>
                <p>$10k–$20k hardware</p>
                <p>Procurement weeks</p>
                <p>Specialized cameras</p>
              </div>
              <div className="space-y-2 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--success),0.07)] p-3">
                <p className="text-primary font-semibold">Gaze for All</p>
                <p>$0 existing webcam</p>
                <p>Under 10 minutes</p>
                <p>Runs on current PCs</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {barriers.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
            ))}
          </div>
        </div>
      </Section>

      <Section
        kicker="What this means"
        title="Silence has clinical and human costs"
        subtitle="Without rapid communication, pain goes unreported, consent is unclear, and care plans slow down."
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

      <Section
        kicker="Why existing solutions fail"
        title="Hardware dependency keeps people silent"
        subtitle="High cost, fragile supply chains, and setup friction block communication when time matters."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Cost"
            description="$10k–$20k devices are out of reach for most patients and many hospitals."
            tag="Barrier"
          />
          <FeatureCard
            title="Hardware dependency"
            description="Special cameras and mounts add procurement delays and maintenance overhead."
            tag="Delay"
          />
          <FeatureCard
            title="Deployment friction"
            description="Installations often need IT approvals, vendor support, and staff training that slow first use."
            tag="Friction"
          />
        </div>
      </Section>
    </div>
  );
}
