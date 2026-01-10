"use client";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";
import { ArrowDown, BadgeDollarSign, Building2, Crosshair, Laptop, ShieldCheck, Smile, Timer } from "lucide-react";
import { useEffect } from "react";
import { trackScrollDepth, trackEvent } from "@/lib/analytics";

const highlights = [
  {
    title: "No $10k hardware",
    description: "Runs on a webcam. Deploy bedside or at home in minutes.",
    icon: Laptop,
  },
  {
    title: "Clinician-ready",
    description: "Local-first processing with exportable audit logs for care teams.",
    icon: ShieldCheck,
  },
  {
    title: "Patient-first design",
    description: "Large targets, calm visuals, and voice feedback tuned with therapists.",
    icon: Smile,
  },
];

const stats = [
  { label: "Setup time", value: "<10 min", icon: Timer },
  { label: "Hardware cost", value: "$0", icon: BadgeDollarSign },
  { label: "Intent accuracy", value: "92%", icon: Crosshair },
  { label: "Pilots", value: "18 sites", icon: Building2 },
];

const logos = ["Northwell Health", "Partners Health", "ALS Clinic", "ICU Pilot Sites"];

const faqs = [
  {
    question: "Does it work offline?",
    answer: "Yes. Eye tracking and intent prediction run locally; cloud is optional for sync.",
  },
  {
    question: "Is data stored?",
    answer: "We do not store raw video. Logs are exportable with consent for audits and reimbursement.",
  },
  {
    question: "Can it run on tablets?",
    answer: "Works on modern laptops and tablets with a webcam; no special cameras required.",
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
  useEffect(() => {
    trackScrollDepth();
  }, []);
  const handleCtaClick = (label: string) => () => trackEvent("CTA Click", { label });
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="glass card-hover mt-6 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-5 xl:grid-cols-6">
          <div className="lg:col-span-3 xl:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Software-only gaze communication</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Restore speech using any webcam
            </h1>
            <p className="text-secondary text-base">
              AI-powered eye tracking for people who cannot speak. One webcam, first message in minutes.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <CTAButton href="#demo" ariaLabel="Watch the Gaze for All demo" onClick={handleCtaClick("Watch demo")}>Watch demo</CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.05)] p-3 sm:p-4 text-sm text-primary sm:grid-cols-4" id="proof">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xl font-semibold text-primary">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-secondary flex items-center gap-1">
                    <item.icon aria-hidden className="h-3.5 w-3.5" />
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary">
              <ArrowDown aria-hidden className="h-4 w-4" />
              <a className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--surface))] rounded-md px-1" href="#trust">
                Scroll to proof
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-3 w-full">
            <div className="glass rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 text-sm text-primary shadow-ring space-y-3" id="demo">
              <p className="text-xs uppercase tracking-[0.18em] text-secondary">See it in action</p>
              <div
                className="aspect-video overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.05)]"
                aria-label="Product demo video placeholder"
                role="img"
              >
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

      <section className="glass rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 sm:p-5">
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center gap-2">
            <Crosshair aria-hidden className="h-6 w-6 text-secondary" />
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Problem</p>
            <p className="text-primary font-semibold text-base sm:text-lg">$10k hardware leaves patients silent and waiting.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Laptop aria-hidden className="h-6 w-6 text-secondary" />
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Solution</p>
            <p className="text-primary font-semibold text-base sm:text-lg">Webcam-only gaze turns any device into a voice channel.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <BadgeDollarSign aria-hidden className="h-6 w-6 text-secondary" />
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Cost difference</p>
            <p className="text-primary font-semibold text-base sm:text-lg">$0 hardware, minutes to deploy, built for hospitals and homes.</p>
          </div>
        </div>
      </section>

      <Section
        kicker="Why now"
        title="Why Gaze for All, now?"
        subtitle="Communication should not depend on specialized hardware."
      >
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={<item.icon aria-hidden className="h-5 w-5 text-secondary" />}
            />
          ))}
        </div>
        <div className="flex justify-center py-3 sm:py-4">
          <ArrowDown aria-hidden className="h-7 w-7 text-accent animate-bounce" />
        </div>
        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-2">
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
        kicker="Who is Gaze for?"
        title="Find your path"
        subtitle="Choose the journey that matches your needs."
      >
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Smile className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="text-lg font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Patients & Caregivers</h3>
            </div>
            <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4 sm:p-5">
              <p className="text-secondary mb-2">Guided onboarding, large targets, calm visuals, and clear voice output at home or bedside.</p>
              <CTAButton href="/how-to-use" ariaLabel="See how to use Gaze for All" variant="ghost" onClick={handleCtaClick("See how to use it")}>See how to use it</CTAButton>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="text-lg font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Clinicians & Hospitals</h3>
            </div>
            <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4 sm:p-5">
              <p className="text-secondary mb-2">Fast install on shared carts, offline-capable, audit logs, and HIPAA-aligned handling out of the box.</p>
              <CTAButton href="/for-hospitals" ariaLabel="View hospital readiness" variant="ghost" onClick={handleCtaClick("View hospital readiness")}>View hospital readiness</CTAButton>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BadgeDollarSign className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="text-lg font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Insurance & Partners</h3>
            </div>
            <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4 sm:p-5">
              <p className="text-secondary mb-2">Outcomes tracking, reimbursement-friendly exports, and SDK options for accessibility platforms.</p>
              <CTAButton href="/business-model" ariaLabel="See partnership options" variant="ghost" onClick={handleCtaClick("See partnership options")}>See partnership options</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section
        kicker="Built for care settings"
        title="From bedside to home to global partners"
        subtitle="Designed with clinicians, therapists, and caregivers for ICUs, homes, and community clinics."
      >
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
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
        title="Trusted by clinicians, partners, and families"
        subtitle="Pilots, testimonials, and compliance-first handling build confidence."
        id="trust"
      >
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-4">
          {trustItems.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} />
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5 text-secondary flex flex-col gap-3 justify-between">
            <div>
              <p className="text-primary text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Testimonials
              </p>
              <ul className="mt-3 space-y-3 text-sm">
                <li>“We restored communication in the same shift—no special hardware.”<br /><span className="text-xs text-secondary">ICU RN, pilot hospital</span></li>
                <li>“Patients learn it in minutes; we keep using the same carts.”<br /><span className="text-xs text-secondary">Speech Therapist</span></li>
                <li>“Our families heard their loved ones again without waiting for devices.”<br /><span className="text-xs text-secondary">Caregiver</span></li>
              </ul>
            </div>
            <div className="flex gap-2 mt-2">
              <img src="/hospital-logo1.svg" alt="Logo: Northwell Health, clinical pilot partner" className="h-7" role="img" />
              <img src="/hospital-logo2.svg" alt="Logo: Partners Health, clinical pilot partner" className="h-7" role="img" />
              <img src="/hospital-logo3.svg" alt="Logo: ALS Clinic, clinical pilot partner" className="h-7" role="img" />
            </div>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5 text-secondary flex flex-col gap-3 justify-between">
            <div>
              <p className="text-primary text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Endorsed by
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• ALS Clinic pilot program</li>
                <li>• ICU/rehab hospital partners</li>
                <li>• Accessibility platform partners</li>
              </ul>
            </div>
            <div className="flex gap-2 mt-2">
              <img src="/partner-logo1.svg" alt="Logo: Accessibility Partner" className="h-7" role="img" />
              <img src="/partner-logo2.svg" alt="Logo: ICU Partner" className="h-7" role="img" />
            </div>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-5 text-secondary flex flex-col gap-3 justify-between">
            <div>
              <p className="text-primary text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Security & compliance
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" aria-hidden /> HIPAA-aligned: local-first, role-based access</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" aria-hidden /> Exportable logs for audits and reimbursement</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" aria-hidden /> Offline-capable for ICU and low-connectivity sites</li>
              </ul>
              <div className="flex gap-2 mt-2">
                <img src="/badge-hipaa.svg" alt="Badge: HIPAA compliant" className="h-7" role="img" />
                <img src="/badge-data.svg" alt="Badge: Data security" className="h-7" role="img" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="glass rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Partners and pilots</p>
            <p className="text-primary text-lg font-semibold">Trusted across clinical pilots</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm text-secondary sm:grid-cols-4">
            {logos.map((logo) => (
              <div key={logo} className="rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.04)] px-3 py-2 text-center">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        kicker="FAQ"
        title="Frequently asked questions"
        subtitle="Quick answers to common questions."
      >
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-3 text-sm text-secondary" role="list" aria-label="Frequently asked questions">
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4 space-y-2" role="listitem" tabIndex={0} aria-label="Does this work offline?">
            <p className="text-primary font-semibold">Does this work offline?</p>
            <p>Yes. Eye tracking and intent prediction run locally; cloud is optional for sync.</p>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4 space-y-2" role="listitem" tabIndex={0} aria-label="How is data protected?">
            <p className="text-primary font-semibold">How is data protected?</p>
            <p>We do not store raw video. Logs are exportable with consent for audits and reimbursement. HIPAA-aligned by design.</p>
          </div>
          <div className="glass rounded-2xl border border-[rgb(var(--border))] p-4 space-y-2" role="listitem" tabIndex={0} aria-label="Which devices support Gaze?">
            <p className="text-primary font-semibold">Which devices support Gaze?</p>
            <p>Works on modern laptops and tablets with a webcam; no special cameras required.</p>
          </div>
        </div>
      </Section>

      <section className="glass rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-secondary">Next step</p>
            <p className="text-primary text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
              See the demo or learn how it works
            </p>
            <p className="text-secondary">Choose the fastest path for you—demo or step-by-step walkthrough.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="#demo" ariaLabel="See the Gaze for All demo" onClick={handleCtaClick("See demo")}>See demo</CTAButton>
            <CTAButton href="/how-it-works" variant="ghost" ariaLabel="Learn how Gaze for All works" onClick={handleCtaClick("Learn how it works")}>Learn how it works</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
