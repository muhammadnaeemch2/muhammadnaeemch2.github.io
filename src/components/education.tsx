import { Award, GraduationCap } from "lucide-react";
import { certificates, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Education" title="Education & certifications" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.school}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-black text-white dark:from-slate-200 dark:to-white dark:text-slate-950">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-950 dark:text-white">{item.school}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.degree}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                {item.start} — {item.end}
              </p>
            </div>
          </div>
        ))}

        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-black text-white dark:from-slate-200 dark:to-white dark:text-slate-950">
              <Award className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-950 dark:text-white">{cert.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{cert.description}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
