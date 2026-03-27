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
      title: "Caregivers are overburdened",
      description: "Complex setups steal time from nurses and families, increasing anxiety when tools fail mid-session.",
      tag: "Fatigue",
    },
    {
      title: "Equity gap widens",
      description: "Low-resource hospitals and home settings rarely receive specialized eye-tracking devices.",
      tag: "Equity",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Problem"
        title="When speech stops, waiting for hardware is not an option"
        subtitle="ALS, stroke, paralysis, and ICU patients need a way to speak within hours. Five-figure hardware and procurement timelines block that outcome."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="surface-subtle rounded-2xl p-5 text-secondary">
            <p className="text-xl font-semibold text-primary">Cost comparison</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.06)] p-3">
                <p className="font-semibold text-primary">Traditional</p>
                <ul className="mt-2 space-y-1.5">
                  <li>$10k-$20k hardware</li>
                  <li>Procurement in weeks</li>
                  <li>Specialized cameras</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--success),0.1)] p-3">
                <p className="font-semibold text-primary">Gaze for All</p>
                <ul className="mt-2 space-y-1.5">
                  <li>$0 new hardware</li>
                  <li>Setup in minutes</li>
                  <li>Runs on current PCs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {barriers.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
            ))}
          </div>
        </div>
      </Section>

      <Section
        kicker="What this means"
        title="Silence has clinical and human cost"
        subtitle="Without rapid communication, pain goes unreported, consent is unclear, and care plans slow down."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Delayed decisions"
            description="Clinicians lose direct patient feedback on pain, discomfort, and consent at critical times."
            tag="ICU"
          />
          <FeatureCard
            title="Emotional strain"
            description="Patients feel isolated and families cannot quickly validate needs, increasing stress during recovery."
            tag="Family"
          />
          <FeatureCard
            title="Unequal access"
            description="Rural and underfunded settings are less likely to receive specialized assistive hardware."
            tag="Access"
          />
        </div>
      </Section>

      <Section
        kicker="Why existing solutions fail"
        title="Hardware dependency keeps people silent"
        subtitle="High cost, fragile supply chains, and setup friction block communication when time matters most."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Cost"
            description="$10k-$20k devices remain out of reach for many patients and hospitals."
            tag="Barrier"
          />
          <FeatureCard
            title="Procurement delay"
            description="Special cameras and mounts add approval cycles and logistics overhead."
            tag="Delay"
          />
          <FeatureCard
            title="Deployment friction"
            description="Many setups depend on IT support and vendor coordination before first use."
            tag="Friction"
          />
        </div>
      </Section>
    </div>
  );
}
