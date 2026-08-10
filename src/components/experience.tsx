import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Career" title="Where I've worked" />

      <div className="relative flex flex-col gap-10 pl-8">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-slate-800 via-slate-400 to-transparent dark:from-slate-200 dark:via-slate-600" />

        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute -left-8 top-1.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black ring-4 ring-slate-50 dark:from-slate-200 dark:to-white dark:ring-slate-950" />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-950 dark:text-white">
                  {job.role} · <span className="text-slate-600 dark:text-slate-300">{job.company}</span>
                </h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-400">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.location}</p>

              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {job.description.map((point, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-slate-500">▸</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
