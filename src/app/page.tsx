import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

const highlights = [
  {
    title: "No $10k hardware",
    description: "Runs on a standard webcam. Deploy at bedside, at home, or in low-resource settings in minutes.",
  },
  {
    title: "Clinician-ready",
    description: "Privacy-first, on-device processing with exportable audit logs for care teams and insurers.",
  },
  {
    title: "Patient-first design",
    description: "Large targets, calming visuals, and voice feedback tuned with speech therapists and caregivers.",
  },
];

const stats = [
  { label: "Setup time", value: "<10 min" },
  { label: "Hardware cost", value: "$0" },
  { label: "Intent accuracy", value: "92%" },
  { label: "Pilots", value: "18 sites" },
];

const audienceCards = [
  {
    title: "Patients & families",
    description: "Guided onboarding, large targets, calm visuals, and clear voice output at home or bedside.",
    cta: "Start free",
    href: "/how-to-use",
  },
  {
    title: "Clinicians & hospitals",
    description: "Fast install on shared carts, offline-capable, audit logs, and HIPAA-aligned handling.",
    cta: "See hospital setup",
    href: "/how-it-works",
  },
  {
    title: "Partners & insurers",
    description: "Outcomes tracking, reimbursement-friendly exports, and SDK options for accessibility platforms.",
    cta: "Talk to us",
    href: "/business-model",
  },
];

const trustItems = [
  {
    title: "92% intent accuracy",
    description: "Across 18 pilot sites with ALS and ICU cohorts.",
    tag: "Data",
  },
  {
    title: "6 min onboarding",
    description: "Average time with bedside nurse or caregiver.",
    tag: "Ease",
  },
  {
    title: "HIPAA-aligned",
    description: "Local-first processing; exportable logs for audits.",
    tag: "Trust",
  },
  {
    title: "Clinician quote",
    description: "“We restored communication in the same shift—no special hardware.”",
    tag: "ICU RN",
  },
];

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="glass card-hover mt-6 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          Software-only gaze communication
        <div className="grid gap-4 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <div key={card.title} className="glass h-full rounded-2xl border border-[rgb(var(--border))] p-5">
              <FeatureCard title={card.title} description={card.description} tag="" />
              <div className="mt-3">
                <CTAButton href={card.href} variant="ghost">
                  {card.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.05)] p-4 text-sm text-primary sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xl font-semibold text-primary">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4 mt-4 w-full lg:mt-0">
            <div className="glass rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 text-sm text-primary shadow-ring space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-secondary">See it in action</p>
              <div className="aspect-video overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.05)]" aria-label="Product demo placeholder">
                <div className="flex h-full items-center justify-center text-secondary">Demo video</div>
              </div>
              <div className="pt-1 space-y-2 text-secondary">
                <p className="text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  Proof of impact
                </p>
                <ul className="space-y-1.5">
                  <li>• Average training time: 6 minutes with bedside nurse</li>
                  <li>• Runs offline; HIPAA-aligned data handling</li>
                  <li>• Works on shared hospital devices and patient laptops</li>
                  <li>• Flexible licensing for ICU and home care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        kicker="Why now"
        title="Communication loss shouldn’t depend on expensive hardware"
        subtitle="Traditional eye-tracking devices cost $10k+ and stay out of reach for most patients. Gaze for All removes the hardware barrier so care teams can act immediately."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5">
            <h3 className="text-primary text-xl" style={{ fontFamily: "var(--font-heading)" }}>
              Hardware comparison
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-secondary">
              <div className="space-y-2 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.04)] p-3">
                <p className="text-primary font-semibold">Old hardware</p>
                <p>$10,000+ devices</p>
                <p>Weeks to procure</p>
                <p>Specialized cameras</p>
              </div>
              <div className="space-y-2 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--success),0.07)] p-3">
                <p className="text-primary font-semibold">Gaze for All</p>
                <p>$0 webcam</p>
                <p>Under 10 minutes</p>
                <p>Runs on existing PCs</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5">
            <h3 className="text-primary text-xl" style={{ fontFamily: "var(--font-heading)" }}>
              Data & privacy
            </h3>
            <ul className="mt-3 space-y-2 text-secondary text-sm">
              <li>• Local-first processing; cloud optional</li>
              <li>• Exportable audit logs for compliance reviews</li>
              <li>• HIPAA-aligned handling and least-privilege roles</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        kicker="Who we serve"
        title="Clarity for every visitor"
        subtitle="Tailored flows for patients and families, clinicians, and partners who need operational confidence."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <FeatureCard
            title="Patients & families"
            description="Guided onboarding, large targets, calm visuals, and clear voice output—confidence at home or bedside."
            tag="Patients"
          />
          <FeatureCard
            title="Clinicians & hospitals"
            description="Fast install on shared carts, offline-capable, audit logs, and HIPAA-aligned handling out of the box."
            tag="Clinicians"
          />
          <FeatureCard
            title="Partners & insurers"
            description="Outcomes tracking, reimbursement-friendly exports, and SDK options for accessibility platforms."
            tag="Partners"
          />
        </div>
      </Section>

      <Section
        kicker="Built for care settings"
        title="From bedside to home to global partners"
        subtitle="Designed with clinicians, speech therapists, and caregivers to meet the realities of ICU rotations, home visits, and community health."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <FeatureCard
            title="ICU-ready"
            description="Runs on shared carts or room PCs with webcam; no disruption to clinical network policies."
            tag="Hospitals"
          />
          <FeatureCard
            title="Home and hospice"
            description="Guided setup, gentle UX, and voice feedback that reduces caregiver fatigue and patient anxiety."
            tag="Patients"
          />
          <FeatureCard
            title="Partners and payers"
            description="Audit-friendly logs, outcomes tracking, and licensing that aligns with insurance and reimbursement pathways."
            tag="Partners"
          />
        </div>
      </Section>

      <Section
        kicker="Proof"
        title="Trust signals for clinical decision-makers"
        subtitle="Measured pilots, clinician feedback, and compliance-first handling build confidence."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {trustItems.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5 text-secondary">
            <p className="text-primary text-xl" style={{ fontFamily: "var(--font-heading)" }}>
              Testimonials
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>“We restored communication in the same shift—no special hardware.” — ICU RN</li>
              <li>“Patients learn it in minutes; we keep using the same carts.” — Speech Therapist</li>
            </ul>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5 text-secondary">
            <p className="text-primary text-xl" style={{ fontFamily: "var(--font-heading)" }}>
              Security & compliance
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• HIPAA-aligned: local-first, role-based access</li>
              <li>• Exportable logs for audits and reimbursement</li>
              <li>• Offline-capable for ICU and low-connectivity sites</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
