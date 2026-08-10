import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="About" title="Get to know me" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:items-start">
        <div className="flex flex-col items-start gap-4">
          <div className="relative size-44 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-700 via-slate-500 to-black p-[3px] shadow-lg shadow-slate-900/20 dark:from-slate-300 dark:via-slate-500 dark:to-white">
            <div className="relative size-full overflow-hidden rounded-[22px] bg-white dark:bg-slate-950">
              <Image src={profile.avatarUrl} alt={profile.name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="size-4 text-slate-500" />
            {profile.location}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
