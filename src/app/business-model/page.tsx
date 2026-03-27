import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Business model | Gaze for All",
  description:
    "Freemium for individuals, hospital site licensing, reimbursement pathways, and SDK licensing for partners.",
};

export default function BusinessModelPage() {
  const models = [
    {
      title: "Freemium for individuals",
      description: "Core communication remains free so patients and families are never priced out.",
      tag: "B2C",
    },
    {
      title: "Hospital and ICU licensing",
      description: "Site licenses add admin controls, support, and policy features for institutions.",
      tag: "B2B",
    },
    {
      title: "Reimbursement pathways",
      description: "Outcome reporting aligns with payer and public health documentation needs.",
      tag: "Coverage",
    },
    {
      title: "SDK licensing",
      description: "Partners can embed gaze intent prediction into broader accessibility platforms.",
      tag: "Platform",
    },
  ];

  return (
    <div className="page-shell">
      <Section
        kicker="Business model"
        title="Access-first delivery with sustainable clinical operations"
        subtitle="Freemium protects access while paid tiers fund support, governance, and scale."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {models.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Operating logic"
        title="How sustainability and equity work together"
        subtitle="Institutional value funds platform reliability while maintaining a no-cost individual path."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Equity first" description="Free access removes income barriers to critical communication." tag="Access" />
          <FeatureCard title="Institutional value" description="Hospitals pay for controls and uptime they operationally require." tag="Operations" />
          <FeatureCard title="Partner scale" description="SDK adoption expands impact without adding hardware burden." tag="Scale" />
        </div>
      </Section>

      <Section
        kicker="Unit economics"
        title="Sustainable growth without compromising patient access"
        subtitle="Software margins fund quality, compliance, and ongoing accessibility improvements."
      >
        <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
          <p className="text-lg font-semibold text-primary">Core mechanics</p>
          <ul className="mt-3 space-y-2">
            <li>- Free usage drives adoption and trust in care settings.</li>
            <li>- Site licenses and reimbursement support operational support layers.</li>
            <li>- SDK licensing spreads fixed R&amp;D across partner ecosystems.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
