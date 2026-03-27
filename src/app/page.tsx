"use client";

import { useEffect } from "react";
import {
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Clock3,
  Crosshair,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";
import { trackEvent, trackScrollDepth } from "@/lib/analytics";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

const metrics = [
  { label: "Setup Time", value: "<10 min", icon: Clock3 },
  { label: "Hardware Cost", value: "$0", icon: BadgeDollarSign },
  { label: "Intent Accuracy", value: "92%", icon: Crosshair },
  { label: "Pilot Sites", value: "18", icon: Building2 },
];

const pathways = [
  {
    title: "Patients and Families",
    description: "Start communication at home in minutes with guided setup and predictable interaction patterns.",
    cta: "Get Started",
    href: "/how-to-use",
    icon: Users,
  },
  {
    title: "Hospitals and Care Teams",
    description: "Deploy on existing devices with local-first processing and audit-ready controls.",
    cta: "Hospital Readiness",
    href: "/for-hospitals",
    icon: Stethoscope,
  },
  {
    title: "Insurers and Partners",
    description: "Use reporting exports and integration pathways to scale equitable communication access.",
    cta: "View Business Model",
    href: "/business-model",
    icon: Workflow,
  },
];

const trustItems = [
  {
    title: "Local-first privacy",
    description: "Inference runs on-device by default, with cloud sync available only where needed.",
    tag: "Trust",
    icon: ShieldCheck,
  },
  {
    title: "Clinical workflow fit",
    description: "Co-designed with therapists and nurses for bedside and home transitions.",
    tag: "Clinical",
    icon: HeartPulse,
  },
  {
    title: "No procurement delay",
    description: "Works on existing webcams, removing dependency on specialist hardware.",
    tag: "Speed",
    icon: Building2,
  },
];

const faqs = [
  {
    question: "Does it work offline?",
    answer: "Yes. Eye tracking and intent prediction run locally with optional cloud sync.",
  },
  {
    question: "Is patient video stored?",
    answer: "No raw video is stored by default. Logs can be exported for audits with consent controls.",
  },
  {
    question: "Can hospitals deploy quickly?",
    answer: "Most sites can run pilots on existing carts or workstations without hardware procurement.",
  },
];

export default function Home() {
  useEffect(() => {
    trackScrollDepth();
  }, []);

  const trackCta = (label: string) => () => trackEvent("CTA Click", { label });

  return (
    <div className="page-shell">
      <section className="surface-card hero-grid rounded-[var(--radius-xl)] p-[var(--space-section)]">
        <div className="space-y-5">
          <span className="token-pill">Software-only gaze communication</span>
          <div className="space-y-3">
            <h1 className="text-[clamp(1.7rem,1.3rem+2vw,3.25rem)] leading-[1.08] text-primary">
              Restore speech with any webcam in under ten minutes.
            </h1>
            <p className="max-w-2xl text-[clamp(0.95rem,0.9rem+0.35vw,1.12rem)] text-secondary">
              Gaze for All helps ALS, paralysis, and ICU patients communicate without waiting for expensive hardware. It is local-first, fast to deploy, and designed for clinical reliability.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <CTAButton href="#demo" ariaLabel="Watch the Gaze for All demo" onClick={trackCta("Watch demo")}>
              Watch Demo
            </CTAButton>
            <CTAButton href="/how-it-works" variant="ghost" ariaLabel="Learn how Gaze for All works" onClick={trackCta("Learn how it works")}>
              How It Works
            </CTAButton>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="surface-subtle rounded-[var(--radius-lg)] p-3">
                <p className="text-xl font-semibold text-primary">{item.value}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-secondary">
                  <item.icon className="h-3.5 w-3.5" aria-hidden />
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3.5" id="demo">
          <div className="glass rounded-[var(--radius-lg)] p-4 sm:p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-secondary">Demo Preview</p>
            <div className="mt-3 aspect-video rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.08)]">
              <div className="flex h-full items-center justify-center text-sm text-secondary">Product video placeholder</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--success))]" aria-hidden />
                Local inference for low latency and privacy.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--success))]" aria-hidden />
                Guided onboarding for caregivers and nurses.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--success))]" aria-hidden />
                Works on existing hospital carts and personal laptops.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Section
        kicker="Workflow"
        title="A clear communication flow for care teams"
        subtitle="Each phase is designed to reduce setup burden and improve confidence in patient intent."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Calibrate quickly" description="A lightweight setup maps gaze to targets with immediate feedback." tag="Step 1" icon={<Clock3 className="h-5 w-5" aria-hidden />} />
          <FeatureCard title="Select with confidence" description="Large targets and dwell logic reduce fatigue while preserving accuracy." tag="Step 2" icon={<Crosshair className="h-5 w-5" aria-hidden />} />
          <FeatureCard title="Confirm and document" description="Voice output confirms intent in real time with optional audit exports." tag="Step 3" icon={<ShieldCheck className="h-5 w-5" aria-hidden />} />
        </div>
      </Section>

      <Section
        kicker="Stakeholders"
        title="Built for every communication stakeholder"
        subtitle="Each audience gets a focused path, with one primary action and minimal friction."
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {pathways.map((item) => (
            <div key={item.title} className="surface-subtle flex h-full flex-col rounded-[var(--radius-lg)] p-4 sm:p-5">
              <div className="flex items-center gap-2 text-primary">
                <item.icon className="h-5 w-5 text-[rgb(var(--accent))]" aria-hidden />
                <h3 className="text-lg leading-tight">{item.title}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm text-secondary">{item.description}</p>
              <div className="mt-4">
                <CTAButton href={item.href} variant="ghost" onClick={trackCta(item.cta)}>
                  {item.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Proof"
        title="Professional-grade reliability without hardware dependence"
        subtitle="Clinically aligned controls and predictable deployment model keep teams confident."
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {trustItems.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} tag={item.tag} icon={<item.icon className="h-5 w-5" aria-hidden />} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Comparison"
        title="From hardware bottleneck to software speed"
        subtitle="A side-by-side view of deployment realities."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">Traditional model</p>
            <ul className="mt-3 space-y-2">
              <li>- Device cost often reaches $10k-$20k per setup.</li>
              <li>- Procurement cycles delay communication by weeks.</li>
              <li>- Specialized mounts increase operational complexity.</li>
            </ul>
          </div>
          <div className="surface-subtle rounded-[var(--radius-lg)] p-4 text-sm text-secondary">
            <p className="text-lg font-semibold text-primary">Gaze for All model</p>
            <ul className="mt-3 space-y-2">
              <li>- Existing webcams support immediate deployment.</li>
              <li>- First communication can happen within minutes.</li>
              <li>- Same software path works across ICU, rehab, and home care.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        kicker="FAQ"
        title="Common questions from clinical teams"
        subtitle="Concise answers for deployment, privacy, and reliability."
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {faqs.map((item) => (
            <article key={item.question} className="surface-subtle rounded-[var(--radius-lg)] p-4">
              <p className="text-base font-semibold text-primary">{item.question}</p>
              <p className="mt-2 text-sm text-secondary">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="accent-gradient rounded-[var(--radius-xl)] p-5 text-white sm:p-7 lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/80">Next step</p>
            <h2 className="text-[clamp(1.4rem,1.2rem+1.1vw,2.2rem)] text-white">Start a pilot or review implementation details.</h2>
            <p className="max-w-2xl text-sm text-white/90 sm:text-base">
              Choose the route that matches your decision process: experience the workflow or evaluate deployment readiness.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <CTAButton href="#demo" ariaLabel="See demo" onClick={trackCta("See demo from footer CTA")}>
              See Demo
            </CTAButton>
            <CTAButton href="/for-hospitals" variant="ghost" ariaLabel="Review hospital readiness" onClick={trackCta("Hospital readiness CTA")}>
              Hospital Readiness
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
