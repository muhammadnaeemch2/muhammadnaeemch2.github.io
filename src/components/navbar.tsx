"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-black text-sm font-bold text-white shadow-md shadow-slate-900/30 dark:from-slate-200 dark:to-white dark:text-slate-950">
            {profile.name.charAt(0)}
          </span>
          {profile.name.split(" ")[0]}
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-slate-800 to-black px-4 py-2 text-sm font-medium text-white shadow-sm shadow-slate-900/30 transition-transform hover:scale-105 sm:inline-block dark:from-slate-200 dark:to-white dark:text-slate-950"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex size-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 px-6 pb-4 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
