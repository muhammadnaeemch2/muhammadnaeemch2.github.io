import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-500 dark:text-slate-400">
      <div className="flex items-center justify-center border-t border-slate-200 pt-8 dark:border-white/10">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
