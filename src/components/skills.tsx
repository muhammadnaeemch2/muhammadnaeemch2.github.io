import { Cloud, Code2, Database, Server, type LucideIcon } from "lucide-react";
import { skills } from "@/data/portfolio";
import { skillIcons } from "@/data/skill-icons";
import { SectionHeading } from "@/components/section-heading";

const categoryStyle: Record<string, { icon: LucideIcon; className: string }> = {
  Frontend: { icon: Code2, className: "from-slate-800 to-black dark:from-slate-100 dark:to-white dark:text-slate-950" },
  Backend: { icon: Server, className: "from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 dark:text-slate-950" },
  Database: { icon: Database, className: "from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 dark:text-slate-950" },
  "DevOps & Tools": { icon: Cloud, className: "from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-600 dark:text-slate-950" },
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((group) => {
          const style = categoryStyle[group.category] ?? {
            icon: Code2,
            className: "from-slate-700 to-black dark:from-slate-200 dark:to-white dark:text-slate-950",
          };
          const Icon = style.icon;

          return (
            <div
              key={group.category}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className={`mb-4 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${style.className}`}>
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold text-slate-950 dark:text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const skillIcon = skillIcons[item];
                  const SkillIcon = skillIcon?.icon;

                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                    >
                      {SkillIcon && (
                        <SkillIcon className="size-3.5" style={{ color: skillIcon.color }} />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
