import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Impact | Gaze for All",
  description:
    "Social, economic, and healthcare impact with UN SDG alignment for accessible communication worldwide.",
};

export default function ImpactPage() {
  const impacts = [
    {
      title: "Social",
      description: "Restores connection for patients and families, reducing isolation and anxiety.",
      tag: "SDG 10",
    },
    {
      title: "Economic",
      description: "Avoids $10k+ device costs and reduces length of stay linked to communication delays.",
      tag: "SDG 8",
    },
    {
      title: "Healthcare",
      description: "Better pain reporting and consent clarity improve care decisions and safety.",
      tag: "SDG 3",
    },
    {
      title: "Equity",
      description: "Software-only approach reaches rural and low-resource clinics where hardware will not arrive.",
      tag: "SDG 9",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Impact"
        title="Measurable benefits for patients, clinicians, and payers"
        subtitle="Gaze for All advances UN SDGs by expanding equitable access to assistive communication and reducing avoidable healthcare costs."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {impacts.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Metrics"
        title="What we measure"
        subtitle="We track adoption and outcomes with care teams, patients, and insurers to keep improving."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Time to first message"
            description="Minutes from install to successful patient communication."
            tag="Access"
          />
          <FeatureCard
            title="Training load"
            description="Minutes of clinician or caregiver time required per patient."
            tag="Usability"
          />
          <FeatureCard
            title="Voice success rate"
            description="Accuracy of predicted intent and voice output confirmation."
            tag="Quality"
          />
        </div>
      </Section>
    </div>
  );
}
