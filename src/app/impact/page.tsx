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
    { title: "Voice restored", description: "Patients can communicate needs in minutes, reducing uncertainty and fear.", tag: "Human" },
    { title: "Dignity preserved", description: "Patients confirm intent and consent directly through their own selections.", tag: "Trust" },
    { title: "Inclusive access", description: "Works in homes, hospices, and rural clinics without specialist devices.", tag: "Access" },
  ];

  const system = [
    { title: "Faster care decisions", description: "Clinicians receive timely feedback for pain and treatment planning.", tag: "Care" },
    { title: "Lower operational friction", description: "No hardware procurement and fewer setup dependencies.", tag: "Ops" },
    { title: "Reduced team burden", description: "Guided workflows shorten training time for nursing and therapy staff.", tag: "Teams" },
  ];

  const economic = [
    { title: "$0 new hardware", description: "Avoid repeated specialist device spending per deployment.", tag: "Savings" },
    { title: "Potential length-of-stay reduction", description: "Earlier communication can reduce avoidable care delay.", tag: "Efficiency" },
    { title: "Reimbursement-aligned exports", description: "Outcome reporting supports payer and compliance pathways.", tag: "Value" },
  ];

  return (
    <div className="page-shell">
      <Section kicker="Human impact" title="Patients regain communication agency" subtitle="Immediate intent expression lowers emotional and clinical risk.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {human.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section kicker="System impact" title="Care teams move with more confidence" subtitle="Communication reliability improves planning speed and care coordination.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {system.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section kicker="Economic impact" title="Access improves without capital-heavy hardware" subtitle="Software-first delivery changes the cost profile and deployment velocity.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {economic.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section kicker="Before vs after" title="What changes when hardware is removed" subtitle="The same care settings, with a faster path to communication.">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">Before</p>
            <ul className="mt-3 space-y-2">
              <li>- Weeks waiting for specialized devices.</li>
              <li>- Silence during critical consent moments.</li>
              <li>- High capital cost blocking low-resource access.</li>
            </ul>
          </div>
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">After</p>
            <ul className="mt-3 space-y-2">
              <li>- Minutes to first message on existing webcams.</li>
              <li>- Clear needs voiced earlier in the care window.</li>
              <li>- Consistent path across ICU, rehab, and home.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
