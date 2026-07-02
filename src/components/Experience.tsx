import { experience } from "../data/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internship experience.">
      <div className="relative border-l border-white/15 pl-6">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="relative mb-9 last:mb-0">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-ink bg-mint" />
            <div className="rounded-lg border border-white/10 bg-panel p-5 transition hover:border-mint/40">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-mint">{item.company}</p>
                </div>
                <div className="text-sm text-slate-400 sm:text-right">
                  <p>{item.dates}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
