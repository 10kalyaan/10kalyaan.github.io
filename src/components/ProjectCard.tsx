import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-panel p-5 transition duration-200 hover:-translate-y-1 hover:border-mint/50 hover:shadow-glow">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-mint">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      <p className="flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>
      {project.link ? (
        <a
          className="mt-6 text-sm font-semibold text-white underline decoration-mint/40 underline-offset-4 transition group-hover:text-mint"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View repository
        </a>
      ) : null}
    </article>
  );
}
