import { aboutMedia } from "@/config/site";
import { MediaFrame } from "./MediaFrame";
import { Reveal, WhatsAppButton } from "./ui";

const pillars = [
  { title: "Estilo", text: "Corte pensado para o seu rosto e a sua rotina." },
  { title: "Qualidade", text: "Técnica e acabamento em cada detalhe." },
  { title: "Satisfação", text: "Você sai da cadeira no seu melhor." },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-y relative overflow-hidden">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[460px] lg:mx-0">
          <span aria-hidden="true" className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold/30 sm:block" />
          <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.08]">
            <MediaFrame item={aboutMedia} sizes="(min-width: 1024px) 40vw, 90vw" />
          </div>
          <span className="display absolute -left-px top-8 bg-ink px-4 py-2 text-[0.7rem] tracking-[0.3em] text-gold">
            ROMAN
          </span>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              Sobre
            </span>
            <h2 id="sobre-title" className="display mt-6 text-[clamp(1.8rem,5.6vw,3.2rem)] text-bone text-balance">
              MAIS QUE UM CORTE.
              <br />
              <span className="text-gold">UMA EXPERIÊNCIA.</span>
            </h2>
            <p className="mt-7 max-w-[52ch] text-[1.04rem] leading-[1.8] text-mist text-pretty">
              Na Barbearia Roman, cada atendimento é pensado para deixar você no seu melhor. Do corte ao acabamento,
              cuidamos de cada detalhe para entregar estilo, qualidade e satisfação.
            </p>
          </Reveal>

          <ul role="list" className="mt-12 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="bg-ink p-6">
                <span className="text-[0.68rem] tracking-[0.3em] text-gold/70">0{i + 1}</span>
                <h3 className="display mt-3 text-[1.02rem] tracking-[0.14em] text-bone">{p.title.toUpperCase()}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-smoke">{p.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10">
            <WhatsAppButton variant="outline">Agendar horário</WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
