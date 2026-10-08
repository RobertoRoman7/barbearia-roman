import { formatPrice, services, type Service } from "@/config/site";
import { WhatsAppButton, Reveal, SectionHeading } from "./ui";

const priceOf = (id: string) => services.find((s) => s.id === id)?.price ?? 0;

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group relative flex h-full flex-col justify-between gap-8 border border-white/[0.08] bg-coal p-6 transition-[transform,border-color,background-color] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-gold/35 hover:bg-graphite sm:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-bright to-transparent transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-x-100"
      />
      <div>
        <span className="text-[0.7rem] tracking-[0.3em] text-gold/70">{String(index).padStart(2, "0")}</span>
        <h3 className="display mt-4 text-[1.25rem] tracking-[0.1em] text-bone">{service.name.toUpperCase()}</h3>
        <p className="mt-2 text-[0.95rem] text-mist">{service.description}</p>
      </div>
      <div className="flex items-end justify-between gap-4">
        <p className="leading-none">
          <span className="sr-only">Preço: </span>
          <span className="mr-1 align-top text-sm text-gold">R$</span>
          <span className="display text-[2.4rem] tracking-normal text-bone">{service.price}</span>
        </p>
        <WhatsAppButton message={service.message} variant="outline" icon={false} aria-label={`Agendar ${service.name} pelo WhatsApp`}>
          Agendar
        </WhatsAppButton>
      </div>
    </article>
  );
}

function ComboCard({ service }: { service: Service }) {
  const separate = priceOf("cabelo-barba") + priceOf("sobrancelha");
  const saving = separate - service.price;
  const items = ["Corte de cabelo", "Barba", "Sobrancelha"];

  return (
    <article className="group relative h-full p-px transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1">
      {/* thin gradient border */}
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-gold/70 via-gold/15 to-gold/40" />
      <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden bg-[linear-gradient(160deg,#17140f_0%,#0e0e0e_45%,#0b0b0b_100%)] p-7 sm:p-10">
        <span aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 border border-gold/40 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="size-1 rotate-45 bg-gold" />
            Combo completo
          </span>
          <h3 className="display mt-7 text-[clamp(1.35rem,5.6vw,2rem)] leading-tight tracking-[0.06em] text-bone lg:text-[1.45rem] xl:text-[1.6rem]">
            <span className="block whitespace-nowrap">CABELO + BARBA</span>
            <span className="block whitespace-nowrap">+ SOBRANCELHA</span>
          </h3>
          <p className="mt-3 text-mist">{service.description}</p>

          <ul className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-6">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[0.95rem] text-bone/85">
                <span aria-hidden="true" className="size-1.5 rotate-45 border border-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4">
            <p className="leading-none">
              <span className="sr-only">Preço: </span>
              <span className="mr-1 align-top text-base text-gold">R$</span>
              <span className="display text-[3.6rem] tracking-normal text-gold-sheen">{service.price}</span>
            </p>
            {saving > 0 && (
              <p className="pb-2 text-right text-[0.72rem] uppercase leading-relaxed tracking-[0.16em] text-smoke">
                Separado
                <br />
                <span className="text-mist line-through decoration-gold/60">{formatPrice(separate)}</span>
              </p>
            )}
          </div>
          <WhatsAppButton message={service.message} size="lg" className="w-full" aria-label="Agendar Combo Completo pelo WhatsApp">
            Agendar combo
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const combo = services.find((s) => s.featured)!;
  const others = services.filter((s) => !s.featured);

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="section-y relative">
      <div className="container-x">
        <SectionHeading id="servicos-title" eyebrow="Preços" title="SERVIÇOS" text="Cuidado, estilo e precisão em cada detalhe." />

        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <ComboCard service={combo} />
          </Reveal>
          <ul className="contents" role="list">
            {others.map((service, i) => (
              <Reveal as="li" key={service.id} delay={(i % 2) * 90}>
                <ServiceCard service={service} index={i + 1} />
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-smoke">
            Toque em <span className="text-mist">Agendar</span> e a mensagem do serviço já vai pronta no WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
