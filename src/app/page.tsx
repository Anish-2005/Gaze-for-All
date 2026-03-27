"use client";

import { useEffect } from "react";
import { BadgeDollarSign, Building2, CheckCircle2, Clock3, Crosshair, HeartPulse, Laptop, ShieldCheck, Stethoscope, Users, Workflow } from "lucide-react";
import { trackEvent, trackScrollDepth } from "@/lib/analytics";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";

const metrics = [
  { label: "Setup time", value: "<10 min", icon: Clock3 },
  { label: "Hardware cost", value: "$0", icon: BadgeDollarSign },
  { label: "Intent accuracy", value: "92%", icon: Crosshair },
  { label: "Pilot sites", value: "18", icon: Building2 },
];

const pathways = [
  {
    title: "Patients and families",
    description: "Start communication at home in minutes using any laptop webcam and guided setup.",
    cta: "Get started",
    href: "/how-to-use",
    icon: Users,
  },
  {
    title: "Hospitals and care teams",
    description: "Deploy on existing bedside hardware with local-first processing and compliance-friendly logs.",
    cta: "See hospital fit",
    href: "/for-hospitals",
    icon: Stethoscope,
  },
  {
    title: "Insurers and partners",
    description: "Use outcome exports and integration options to support reimbursement and scale access.",
    cta: "Discuss partnerships",
    href: "/business-model",
    icon: Workflow,
  },
];

const trustItems = [
  {
    title: "Clinical-ready privacy",
    description: "Local-first inference and optional cloud sync keep sensitive patient interactions controlled.",
    tag: "Privacy",
    icon: ShieldCheck,
  },
  {
    title: "Built for real workflows",
    description: "Designed with nurses, therapists, and caregivers for ICU, rehab, and home care settings.",
    tag: "Operations",
    icon: HeartPulse,
  },
  {
    title: "No procurement delay",
    description: "No special cameras or custom hardware, so teams can start with devices they already own.",
    tag: "Speed",
    icon: Laptop,
  },
];

const faqs = [
  {
    question: "Does it work offline?",
    answer: "Yes. Eye tracking and intent prediction run locally, while cloud sync is optional.",
  },
  {
    question: "Is patient video stored?",
    answer: "No raw video is stored. Exportable logs can be enabled for audits and reimbursement support.",
  },
  {
    question: "Can hospitals roll this out quickly?",
    answer: "Yes. Most deployments run on existing carts or workstations with minimal setup time.",
  },
];

const partnerPills = ["Northwell Health", "Partners Health", "ALS Clinics", "ICU Pilot Sites"];

export default function Home() {
  useEffect(() => {
    trackScrollDepth();
  }, []);

  const handleCtaClick = (label: string) => () => trackEvent("CTA Click", { label });

  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="surface-card mt-3 rounded-3xl p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <span className="token-pill">Software-only gaze communication</span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-3xl leading-tight text-primary sm:text-5xl">
                Restore speech with any webcam in under ten minutes.
              </h1>
              <p className="max-w-2xl text-base text-secondary sm:text-lg">
                Gaze for All helps ALS, paralysis, and ICU patients communicate without waiting for expensive hardware. It is local-first, fast to deploy, and built for care teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="#demo" ariaLabel="Watch the Gaze for All demo" onClick={handleCtaClick("Watch demo")}>
                Watch Demo
              </CTAButton>
              <CTAButton href="/how-it-works" variant="ghost" ariaLabel="Learn how Gaze for All works" onClick={handleCtaClick("Learn how it works")}>
                Learn How It Works
              </CTAButton>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="surface-subtle rounded-xl p-3">
                  <p className="text-xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-secondary">
                    <item.icon aria-hidden className="h-3.5 w-3.5" />
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5" id="demo">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-secondary">Demo Preview</p>
              <div className="mt-3 aspect-video rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--accent),0.08)]">
                <div className="flex h-full items-center justify-center text-sm text-secondary">Video demo area</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden className="h-4 w-4 text-[rgb(var(--success))]" />
                  Local inference for privacy and low latency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden className="h-4 w-4 text-[rgb(var(--success))]" />
                  Guided onboarding for caregivers and nurses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden className="h-4 w-4 text-[rgb(var(--success))]" />
                  Works on shared hospital carts and personal laptops
                </li>
              </ul>
            </div>
            <div className="surface-subtle rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Trusted pilots</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-medium text-secondary sm:grid-cols-4 lg:grid-cols-2">
                {partnerPills.map((item) => (
                  <div key={item} className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-2 text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        kicker="Flow"
        title="A clear communication flow for teams and families"
        subtitle="The product flow is designed to reduce onboarding friction while keeping decision moments visible to everyone around the patient."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <FeatureCard
            title="1. Calibrate quickly"
            description="A lightweight setup flow maps gaze to targets with guided prompts and immediate feedback."
            tag="Setup"
            icon={<Clock3 aria-hidden className="h-5 w-5" />}
          />
          <FeatureCard
            title="2. Select with confidence"
            description="Large targets and dwell selection lower fatigue, while intent prediction speeds communication."
            tag="Interaction"
            icon={<Crosshair aria-hidden className="h-5 w-5" />}
          />
          <FeatureCard
            title="3. Confirm and document"
            description="Voice output confirms meaning in real time, with optional logs for clinical and reimbursement review."
            tag="Outcome"
            icon={<ShieldCheck aria-hidden className="h-5 w-5" />}
          />
        </div>
      </Section>

      <Section
        kicker="Choose your path"
        title="Built for every stakeholder in care communication"
        subtitle="Pick the path that matches your setting and move directly to the right workflow."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {pathways.map((item) => (
            <div key={item.title} className="surface-card flex h-full flex-col rounded-2xl p-5">
              <div className="flex items-center gap-2 text-primary">
                <item.icon aria-hidden className="h-5 w-5 text-[rgb(var(--accent))]" />
                <h3 className="text-lg">{item.title}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm text-secondary">{item.description}</p>
              <div className="mt-4">
                <CTAButton href={item.href} variant="ghost" onClick={handleCtaClick(item.cta)}>
                  {item.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Why teams choose us"
        title="Professional-grade reliability without hardware dependence"
        subtitle="The model is simple: keep access free for individuals, and make institutional deployments robust and accountable."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {trustItems.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              tag={item.tag}
              icon={<item.icon aria-hidden className="h-5 w-5 text-[rgb(var(--accent))]" />}
            />
          ))}
        </div>
      </Section>

      <Section
        kicker="Comparison"
        title="From hardware bottleneck to software speed"
        subtitle="A direct side-by-side view of why teams can deploy faster with webcam-first communication."
      >
        <div className="grid gap-4 text-sm text-secondary lg:grid-cols-2">
          <div className="surface-subtle rounded-2xl p-5">
            <p className="text-lg font-semibold text-primary">Traditional hardware model</p>
            <ul className="mt-3 space-y-2">
              <li>- Device cost often reaches $10k to $20k per setup</li>
              <li>- Procurement cycles can delay communication by weeks</li>
              <li>- Specialized cameras and mounts increase operational friction</li>
            </ul>
          </div>
          <div className="surface-subtle rounded-2xl p-5">
            <p className="text-lg font-semibold text-primary">Gaze for All model</p>
            <ul className="mt-3 space-y-2">
              <li>- Existing webcams support immediate deployment</li>
              <li>- First communication can happen within minutes</li>
              <li>- Same software path works across ICU, rehab, and home care</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        kicker="FAQ"
        title="Common questions from clinical and family teams"
        subtitle="Concise answers to the deployment and privacy questions we hear most often."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {faqs.map((item) => (
            <div key={item.question} className="surface-subtle rounded-2xl p-5">
              <p className="text-base font-semibold text-primary">{item.question}</p>
              <p className="mt-2 text-sm text-secondary">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="accent-gradient rounded-3xl p-7 text-white sm:p-9">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Next step</p>
            <h2 className="text-2xl text-white sm:text-3xl">Start a pilot or see the live workflow.</h2>
            <p className="max-w-2xl text-sm text-white/90 sm:text-base">
              Choose the fastest route for your team: watch the product flow, or review implementation details with your stakeholders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="#demo" ariaLabel="See the product demo" onClick={handleCtaClick("See demo")}>
              See Demo
            </CTAButton>
            <CTAButton href="/for-hospitals" variant="ghost" ariaLabel="Review hospital readiness" onClick={handleCtaClick("Hospital readiness")}>
              Hospital Readiness
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
