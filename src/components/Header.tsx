"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/config/site";
import { RomanMark, WhatsAppIcon } from "./icons";
import { WhatsAppButton } from "./ui";
import { whatsappLink } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 text-gold sm:gap-3" aria-label={`${site.name} — início`} onClick={() => setOpen(false)}>
          <RomanMark className="size-8 shrink-0 sm:size-9" />
          <span className="display whitespace-nowrap text-[0.8rem] leading-none tracking-[0.14em] text-bone min-[400px]:text-[0.9rem] min-[400px]:tracking-[0.18em] sm:text-[0.95rem] sm:tracking-[0.2em]">
            BARBEARIA <span className="text-gold">ROMAN</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-[0.72rem] uppercase tracking-[0.22em] text-mist transition-colors duration-300 hover:text-bone after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppButton icon={false}>Agendar</WhatsAppButton>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="relative grid size-12 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-gold transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

    </header>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-[45] overflow-y-auto bg-ink/[0.97] backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Menu" className="container-x flex min-h-full flex-col pb-10 pt-6">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-white/[0.06]" style={{ animation: `rise .6s var(--ease-out-soft) ${i * 50}ms both` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 display text-[1.35rem] tracking-[0.12em] text-bone"
                >
                  {item.label}
                  <span className="text-xs text-gold/70">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-4 pt-10">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 bg-gold text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <WhatsAppIcon className="size-5" />
              Agendar horário
            </a>
            <p className="text-center text-sm text-smoke">WhatsApp {site.whatsapp.display}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
