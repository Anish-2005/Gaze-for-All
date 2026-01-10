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
      description: "Core features free to keep access universal for patients and families.",
      tag: "B2C",
    },
    {
      title: "Hospital & ICU licensing",
      description: "Site licenses with admin controls, SSO, audit exports, and support SLAs.",
      tag: "B2B",
    },
    {
      title: "Insurance & government reimbursement",
      description: "Outcomes reporting, session logs, and documentation to support coverage pathways.",
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
        title="Access for patients, sustainability for partners"
        subtitle="We keep individual use free while offering hospital-grade controls and reimbursement-ready reporting."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {models.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
      </Section>
    </div>
  );
}
