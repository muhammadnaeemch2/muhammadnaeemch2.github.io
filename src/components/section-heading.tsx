export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="rounded-full bg-gradient-to-r from-slate-800 to-black px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white dark:from-slate-200 dark:to-white dark:text-slate-950">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-white/10" />
    </div>
  );
}
