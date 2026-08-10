import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialIcon } from "@/components/social-icon";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-[60%] animate-float rounded-full bg-slate-400/25 blur-[110px] dark:bg-slate-600/25" />
      <div className="pointer-events-none absolute -top-10 right-0 -z-10 h-[380px] w-[380px] translate-x-[30%] animate-float-delayed rounded-full bg-slate-300/25 blur-[110px] dark:bg-slate-700/20" />

      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-24 pt-24 md:pt-32">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <Sparkles className="size-3.5" />
          Available for new opportunities
        </div>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
          I&apos;m {profile.name.split(" ")[0]}, a{" "}
          <span className="text-gradient">{profile.role}</span>.
        </h1>

        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-800 via-black to-slate-800 bg-[length:200%_100%] bg-left px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-all hover:bg-right dark:from-slate-200 dark:via-white dark:to-slate-200 dark:text-slate-950 dark:shadow-white/10"
          >
            View my work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition-colors hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <Download className="size-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-4 pt-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-950 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
            >
              <SocialIcon icon={social.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
