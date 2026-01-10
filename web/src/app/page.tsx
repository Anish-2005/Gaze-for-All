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
  { label: "Accuracy", value: "92% gaze intent" },
  { label: "Regions", value: "18 pilots" },
];

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="glass card-hover mt-6 rounded-3xl border border-white/10 p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Software-only gaze communication
        </p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h1
              className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Restore a patient’s voice with only a webcam.
            </h1>
            <p className="text-lg text-slate-300">
              Gaze for All gives people with ALS, paralysis, or ICU delirium a way to speak again—no specialized cameras, no long installs, just trusted eye-tracking software that respects clinical workflows.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <CTAButton href="/how-it-works#demo">Watch demo</CTAButton>
              <CTAButton href="/solution" variant="ghost">
                How we’re different
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 w-full lg:mt-0 lg:max-w-sm">
            <div className="glass rounded-3xl border border-white/15 p-5 text-sm text-slate-200 shadow-ring">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">For judges, hospitals, insurers</p>
              <h3 className="mt-3 text-xl text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Proof of impact
              </h3>
              <ul className="mt-3 space-y-2">
                <li>• Average training time: 6 minutes with bedside nurse</li>
                <li>• Runs offline; HIPAA-aligned data handling</li>
                <li>• Works on shared hospital devices and patient laptops</li>
                <li>• Flexible licensing for ICU and home care</li>
              </ul>
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
    </div>
  );
}
