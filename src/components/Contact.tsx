import { useState } from "react";
import { profile } from "../data/profile";
import { Section } from "./Section";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Open to backend, AI systems, and LLM tooling roles.">
      <div className="rounded-lg border border-white/10 bg-panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-lg leading-8 text-slate-300">
              Reach out for AI Engineer, Backend Engineer, Agentic Automation, or LLM tooling
              opportunities.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block text-xl font-semibold text-white underline decoration-mint/50 underline-offset-4 transition hover:text-mint"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <button type="button" className="btn-primary" onClick={copyEmail}>
              {copied ? "Copied" : "Copy Email"}
            </button>
            <a className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
