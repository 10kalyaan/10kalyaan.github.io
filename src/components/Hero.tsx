import { profile } from "../data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(116,242,206,0.12),transparent_32%),radial-gradient(circle_at_90%_30%,rgba(246,193,119,0.08),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-mint">
            {profile.location}
          </p>
          <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-slate-100 sm:text-3xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
