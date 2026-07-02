import { skills } from "../data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use to build and debug.">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.group} className="rounded-lg border border-white/10 bg-panel p-5">
            <h3 className="text-lg font-semibold text-white">{group.group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-mint/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
