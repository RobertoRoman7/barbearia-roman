import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <span className="pointer-events-none hidden translate-x-2 bg-ink/90 px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.22em] text-bone opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Agendar horário
      </span>
      <span className="relative grid size-[60px] place-items-center rounded-full bg-gold text-ink shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8),0_0_0_1px_rgba(226,200,143,0.5)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        <span aria-hidden="true" className="absolute inset-0 rounded-full border border-gold [animation:pulse-ring_2.8s_ease-out_infinite]" />
        <WhatsAppIcon className="size-7" />
      </span>
    </a>
  );
}
