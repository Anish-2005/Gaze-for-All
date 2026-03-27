import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "The problem | Gaze for All",
  description:
    "Communication loss in ALS, paralysis, and ICU settings is urgent. Specialized eye-tracking hardware costs $10k+ and delays care.",
};

export default function ProblemPage() {
  const barriers = [
    {
      title: "Hardware is unaffordable",
      description: "Dedicated eye-tracking devices often cost $10k-$20k and require procurement cycles patients cannot wait through.",
      tag: "$10k+",
    },
    {
      title: "Access is delayed",
      description: "ICU stays are short and unpredictable. Hardware often arrives after critical communication windows close.",
      tag: "Timing",
    },
    {
      title: "Caregiver strain",
      description: "Complex setup steals time from nurses and families, increasing stress during critical care windows.",
      tag: "Workflow",
    },
    {
      title: "Equity gap widens",
      description: "Low-resource hospitals and home settings rarely receive specialized communication hardware.",
      tag: "Equity",
    },
  ];

  return (
    <div className="page-shell">
      <Section
        kicker="Problem"
        title="When speech stops, waiting for hardware is not an option"
        subtitle="Patients need communication within hours. Traditional device timelines and costs create avoidable silence."
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">Cost and timeline comparison</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.08)] p-3">
                <p className="font-semibold text-primary">Traditional hardware</p>
                <ul className="mt-2 space-y-1.5">
                  <li>$10k-$20k per device setup</li>
                  <li>Procurement cycles measured in weeks</li>
                  <li>Specialized cameras and mounts</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--success),0.12)] p-3">
                <p className="font-semibold text-primary">Gaze for All</p>
                <ul className="mt-2 space-y-1.5">
                  <li>$0 new hardware required</li>
                  <li>Deployment in minutes</li>
                  <li>Runs on current webcams</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {barriers.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
            ))}
          </div>
        </div>
      </Section>

      <Section
        kicker="Clinical impact"
        title="Silence creates risk, delay, and emotional burden"
        subtitle="When communication is delayed, pain reporting, consent clarity, and care planning all suffer."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Delayed decisions" description="Clinicians lose direct patient feedback on pain and discomfort." tag="ICU" />
          <FeatureCard title="Family distress" description="Families cannot quickly validate needs, raising anxiety during recovery." tag="Family" />
          <FeatureCard title="Uneven access" description="Under-resourced settings are least likely to receive specialist hardware." tag="Access" />
        </div>
      </Section>
    </div>
  );
}
