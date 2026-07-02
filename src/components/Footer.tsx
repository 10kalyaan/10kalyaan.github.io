import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Built with React, Vite, TypeScript, and Tailwind CSS.</p>
        <p>{profile.name} | Bengaluru, India</p>
      </div>
    </footer>
  );
}
