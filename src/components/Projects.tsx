import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

type Filter = (typeof projectFilters)[number];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <Section id="projects" eyebrow="Projects" title="Backend, AI, and systems work.">
      <div className="mb-8 flex flex-wrap gap-2" role="list" aria-label="Project filters">
        {projectFilters.map((filter) => {
          const selected = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              className={`rounded border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-mint/60 ${
                selected
                  ? "border-mint bg-mint text-ink"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-mint/60 hover:text-white"
              }`}
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
