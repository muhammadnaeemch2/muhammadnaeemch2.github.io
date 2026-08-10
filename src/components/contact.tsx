import { ArrowUpRight, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialIcon } from "@/components/social-icon";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-10 dark:border-white/10 dark:from-white/[0.03] dark:to-white/[0.06] sm:p-16">
        <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-gradient-to-br from-slate-400/30 to-slate-600/20 blur-[90px] dark:from-slate-400/10 dark:to-slate-200/10" />

        <div className="relative flex flex-col items-start gap-6">
          <span className="rounded-full bg-gradient-to-r from-slate-800 to-black px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white dark:from-slate-200 dark:to-white dark:text-slate-950">
            Contact
          </span>

          <h3 className="max-w-lg text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Have a project in mind? <span className="text-gradient">Let&apos;s talk.</span>
          </h3>

          <p className="max-w-lg text-slate-600 dark:text-slate-400">
            I&apos;m currently open to new opportunities and freelance work. Reach out and I&apos;ll get back
            to you as soon as I can.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-800 via-black to-slate-800 bg-[length:200%_100%] bg-left px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-all hover:bg-right dark:from-slate-200 dark:via-white dark:to-slate-200 dark:text-slate-950"
            >
              {profile.email}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition-colors hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Phone className="size-4" />
              {profile.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-950 dark:border-white/10 dark:bg-transparent dark:text-slate-400 dark:hover:text-white"
              >
                <SocialIcon icon={social.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
