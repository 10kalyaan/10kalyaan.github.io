import { profile } from "../data/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Practical systems, clear boundaries.">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-lg border border-white/10 bg-panel p-6 shadow-glow">
          <p className="text-lg leading-8 text-slate-300">{profile.bio}</p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">Education</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{profile.education.school}</h3>
            <p className="mt-2 text-slate-300">{profile.education.degree}</p>
            <p className="mt-2 text-sm text-slate-400">
              CGPA {profile.education.cgpa} | {profile.education.dates}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
              Certification
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{profile.certification.title}</h3>
            <p className="mt-2 text-slate-300">{profile.certification.issuer}</p>
            <p className="mt-2 text-sm text-slate-400">{profile.certification.dates}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
