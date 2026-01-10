import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

const highlights = [
  {
    title: "No $10k hardware",
    description: "Runs on a webcam. Deploy bedside or at home in minutes.",
  },
  {
    title: "Clinician-ready",
    description: "Local-first processing with exportable audit logs for care teams.",
  },
  {
    title: "Patient-first design",
    description: "Large targets, calm visuals, and voice feedback tuned with therapists.",
  },
];

const stats = [
  { label: "Setup time", value: "<10 min" },
  { label: "Hardware cost", value: "$0" },
  { label: "Intent accuracy", value: "92%" },
  { label: "Pilots", value: "18 sites" },
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
        <div className="grid gap-6 lg:grid-cols-5 xl:grid-cols-6">
          <div className="lg:col-span-3 xl:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Software-only gaze communication</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
              Restore a voice with just a webcam
            </h1>
            <p className="text-secondary text-base">
              Runs on the camera you already have. Under 10 minutes from install to the first spoken phrase.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="#demo">Watch demo</CTAButton>
              <CTAButton href="/how-it-works" variant="ghost">
                See how it works
              </CTAButton>
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
          <div className="lg:col-span-2 xl:col-span-3 w-full">
            <div className="glass rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 text-sm text-primary shadow-ring space-y-3" id="demo">
              <p className="text-xs uppercase tracking-[0.18em] text-secondary">See it in action</p>
              <div className="aspect-video overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.05)]" aria-label="Product demo placeholder">
                <div className="flex h-full items-center justify-center text-secondary">Demo video</div>
              </div>
              <div className="pt-1 space-y-2 text-secondary">
                <p className="text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  What you get
                </p>
                <ul className="space-y-1.5">
                  <li>• Works offline; HIPAA-aligned handling</li>
                  <li>• First message in minutes with caregiver guidance</li>
                  <li>• Runs on shared hospital devices and personal laptops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="glass rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Problem</p>
            <p className="text-primary font-semibold">$10k hardware leaves patients silent and waiting.</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Solution</p>
            <p className="text-primary font-semibold">Webcam-only gaze turns any device into a voice channel.</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Cost difference</p>
            <p className="text-primary font-semibold">$0 hardware, minutes to deploy, built for hospitals and homes.</p>
          </div>
        </div>
      </section>

      <Section
        kicker="Why now"
        title="Communication should not depend on specialized hardware"
        subtitle="Eye-tracking devices cost $10k+ and arrive too late. Gaze for All removes the hardware barrier so care teams can act fast."
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
        subtitle="Patients and families, clinicians, and partners each get a direct path."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <FeatureCard
            title="Patients & families"
            description="Guided onboarding, large targets, calm visuals, and clear voice output at home or bedside."
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
        subtitle="Designed with clinicians, therapists, and caregivers for ICUs, homes, and community clinics."
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
