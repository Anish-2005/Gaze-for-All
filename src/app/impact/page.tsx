import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Impact | Gaze for All",
  description:
    "Social, economic, and healthcare impact with UN SDG alignment for accessible communication worldwide.",
};

export default function ImpactPage() {
  const human = [
    { title: "Voice restored", description: "Patients speak within minutes, lowering anxiety for families.", tag: "Human" },
    { title: "Dignity preserved", description: "Patients can confirm needs and consent with their own voice output.", tag: "Trust" },
    { title: "Inclusive access", description: "Works in homes, hospices, and rural clinics without specialized devices.", tag: "Access" },
  ];

  const system = [
    { title: "Faster decisions", description: "Clear feedback reduces delays in pain management and care plans.", tag: "Care" },
    { title: "Lower friction", description: "No hardware procurement or special carts to manage.", tag: "Ops" },
    { title: "Staff relief", description: "Guided flows reduce training load for nurses and therapists.", tag: "Teams" },
  ];

  const economic = [
    { title: "$0 hardware", description: "Avoid $10k–$20k device purchases per patient.", tag: "Savings" },
    { title: "Shorter stays", description: "Communication reduces avoidable ICU and rehab days tied to silence.", tag: "Efficiency" },
    { title: "Reimbursable data", description: "Exports support coverage without extra equipment line items.", tag: "Value" },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Human impact"
        title="People regain a voice"
        subtitle="Immediate communication reduces fear and restores agency."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {human.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="System impact"
        title="Care teams move faster"
        subtitle="Operational friction drops when no hardware stands in the way."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {system.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Economic impact"
        title="Access without the $10k price tag"
        subtitle="Software-first delivery avoids capital spend and supports reimbursement."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {economic.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Before vs after"
        title="What changes when hardware is removed"
        subtitle="A simple shift: same webcams, new voice."
      >
        <div className="grid gap-4 sm:grid-cols-2 text-secondary text-sm">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4">
            <p className="text-primary text-lg font-semibold">Before</p>
            <ul className="mt-2 space-y-1.5">
              <li>• Weeks waiting for specialized devices</li>
              <li>• Silence during critical consent moments</li>
              <li>• High capital cost blocks low-resource sites</li>
            </ul>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4">
            <p className="text-primary text-lg font-semibold">After</p>
            <ul className="mt-2 space-y-1.5">
              <li>• Minutes to first message on existing webcams</li>
              <li>• Clear pain, consent, and needs voiced early</li>
              <li>• Same software works in home, ICU, and rural clinics</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        kicker="UN SDGs"
        title="Aligned with global goals"
        subtitle="Access, health, and reduced inequalities."
      >
        <div className="grid gap-4 sm:grid-cols-4">
          <FeatureCard title="SDG 3" description="Good health and well-being via faster, safer care decisions." tag="Health" />
          <FeatureCard title="SDG 8" description="Decent work through reduced caregiver burden and time savings." tag="Work" />
          <FeatureCard title="SDG 9" description="Industry, innovation, and infrastructure without hardware lock-in." tag="Innovation" />
          <FeatureCard title="SDG 10" description="Reduced inequalities by reaching low-resource settings with software." tag="Equity" />
        </div>
      </Section>
    </div>
  );
}
