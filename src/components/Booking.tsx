import { site } from "@/config/site";
import { Reveal, WhatsAppButton } from "./ui";

export function Booking() {
  return (
    <section id="agendamento" aria-labelledby="agendamento-title" className="relative px-4 py-6 sm:px-6">
      <div className="grain relative mx-auto max-w-[1280px] overflow-hidden border border-gold/20 bg-[radial-gradient(ellipse_70%_90%_at_50%_0%,rgba(198,166,99,0.16),transparent_70%),linear-gradient(#111,#0b0b0b)]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center px-6 py-20 text-center sm:py-28">
          <span className="rule-gold eyebrow">Agendamento</span>
          <h2 id="agendamento-title" className="display mt-6 text-[clamp(1.8rem,6vw,3.4rem)] text-bone text-balance">
            PRONTO PARA RENOVAR O VISUAL?
          </h2>
          <p className="mt-5 max-w-[42ch] text-[1.04rem] leading-relaxed text-mist">
            Escolha seu serviço e fale com a Barbearia Roman pelo WhatsApp.
          </p>
          <WhatsAppButton size="lg" className="mt-10 w-full max-w-sm sm:min-h-16 sm:text-[0.82rem]">
            Agendar pelo WhatsApp
          </WhatsAppButton>
          <p className="mt-5 text-sm tracking-[0.12em] text-smoke">
            WhatsApp <span className="text-bone">{site.whatsapp.display}</span>
          </p>
          {site.location.hours.length > 0 && (
            <p className="mt-3 flex flex-col items-center gap-1 text-[0.72rem] uppercase tracking-[0.2em] text-smoke sm:flex-row sm:gap-0">
              {site.location.hours.map((h, i) => (
                <span key={h.days} className="whitespace-nowrap">
                  {i > 0 && <span aria-hidden="true" className="mx-2.5 hidden text-gold/50 sm:inline">◆</span>}
                  {h.short} <span className="text-mist">{h.time}</span>
                </span>
              ))}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
