import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Business model | Gaze for All",
  description:
    "Freemium for individuals, hospital site licensing, insurance reimbursement pathways, and SDK licensing for partners.",
};

export default function BusinessModelPage() {
  const models = [
    {
      title: "Freemium for individuals",
      description: "Core stays free so patients and families are never priced out.",
      tag: "B2C",
    },
    {
      title: "Hospital & ICU licensing",
      description: "Site licenses with admin controls, SSO, audit exports, and support SLAs.",
      tag: "B2B",
    },
    {
      title: "Insurance & government reimbursement",
      description: "Outcomes reporting and documentation that align with coverage pathways.",
      tag: "Reimbursement",
    },
    {
      title: "SDK licensing",
      description: "Embed gaze intent prediction into partner tools and accessibility platforms.",
      tag: "SDK",
    },
  ];

  return (
    <div className="space-y-8">
      <Section
        kicker="Business model"
        title="Compassionate capitalism: access first, sustainable growth"
        subtitle="Freemium keeps speech accessible; paid tiers fund support, compliance, and scale."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {models.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Why freemium is ethical here"
        title="Those who can pay help those who cannot"
        subtitle="Hospitals, payers, and partners fund the platform so individuals always have a free path."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard title="Equity first" description="Free access for individuals prevents income from blocking speech." tag="Access" />
          <FeatureCard title="Institutional value" description="Hospitals pay for controls, support, and compliance they require." tag="Sustain" />
          <FeatureCard title="Partner ecosystems" description="SDK and licensing extend impact without adding hardware cost." tag="Scale" />
        </div>
      </Section>

      <Section
        kicker="Unit economics"
        title="Sustainable without harming access"
        subtitle="Software margins fund support and research; volume lowers per-site costs over time."
      >
        <div className="glass rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 text-secondary text-sm space-y-2">
          <p className="text-primary text-lg font-semibold">Logic, not just pricing</p>
          <ul className="space-y-1.5">
            <li>• Free users grow usage data and trust, creating demand for paid clinical controls.</li>
            <li>• Site licenses and reimbursements cover support, compliance, and uptime.</li>
            <li>• SDK licensing spreads fixed R&D across partners, lowering marginal costs.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
