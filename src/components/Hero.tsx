import { ArrowDownIcon } from "./icons";
import { ButtonLink, WhatsAppButton } from "./ui";
import { formatPrice, services } from "@/config/site";

const priceOf = (id: string) => services.find((s) => s.id === id)!.price;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Backdrop: warm glow + architectural lines + monogram */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_35%,rgba(198,166,99,0.13),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,rgba(198,166,99,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <span className="display pointer-events-none absolute -right-[8vw] top-1/2 -translate-y-1/2 select-none text-[min(78vw,720px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(198,166,99,0.16)]">
          R
        </span>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x flex flex-1 flex-col justify-center pb-16 pt-[calc(var(--header-h)+48px)]">
        <div className="hero-in flex max-w-3xl flex-col items-start">
          <span className="eyebrow mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            Barbearia masculina
          </span>

          <h1 id="hero-title" className="display text-[clamp(2.6rem,11vw,6.4rem)] leading-[0.98] tracking-[0.04em]">
            <span className="block text-bone">BARBEARIA</span>
            <span className="block text-gold-sheen">ROMAN</span>
          </h1>

          <p className="mt-7 font-display text-[clamp(1.05rem,3.4vw,1.45rem)] tracking-[0.06em] text-bone/90">
            Seu estilo. Seu corte. Sua identidade.
          </p>

          <p className="mt-4 max-w-[40ch] text-[1rem] leading-relaxed text-mist sm:text-[1.06rem]">
            Um espaço pensado para quem valoriza estilo, qualidade e um bom atendimento.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <WhatsAppButton size="lg" className="w-full sm:w-auto">
              Agendar horário
            </WhatsAppButton>
            <ButtonLink href="#servicos" variant="outline" size="lg" className="w-full sm:w-auto">
              Ver serviços
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="container-x relative pb-8">
        <div className="flex items-end justify-between gap-6 border-t border-white/[0.07] pt-6 text-[0.72rem] uppercase tracking-[0.22em] text-smoke">
          <p>
            Corte <span className="text-bone">{formatPrice(priceOf("corte"))}</span>
            <span className="mx-3 text-gold/50">◆</span>
            Barba <span className="text-bone">{formatPrice(priceOf("barba"))}</span>
          </p>
          <a href="#servicos" aria-label="Rolar até serviços" className="hidden items-center gap-2 transition-colors hover:text-gold sm:flex">
            Role
            <ArrowDownIcon className="size-4 animate-bounce [animation-duration:2.4s]" />
          </a>
        </div>
      </div>
    </section>
  );
}
