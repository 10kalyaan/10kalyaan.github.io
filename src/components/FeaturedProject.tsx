import { featuredProject } from "../data/projects";
import { Section } from "./Section";

export function FeaturedProject() {
  return (
    <Section id="featured" eyebrow="Featured Project" title={featuredProject.title}>
      <div className="rounded-lg border border-mint/30 bg-gradient-to-br from-mint/10 via-panel to-ink p-6 shadow-glow sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {featuredProject.categories.map((category) => (
                <span key={category} className="badge border-mint/30 bg-mint/10 text-mint">
                  {category}
                </span>
              ))}
            </div>
            <p className="text-lg leading-8 text-slate-200">{featuredProject.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
            <a
              className="btn-primary mt-7 inline-flex"
              href={featuredProject.link}
              target="_blank"
              rel="noreferrer"
            >
              View Repo
            </a>
          </div>
          <div className="rounded-lg border border-white/10 bg-ink/60 p-5">
            <h3 className="text-lg font-semibold text-white">System highlights</h3>
            <ul className="mt-5 space-y-3">
              {featuredProject.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
