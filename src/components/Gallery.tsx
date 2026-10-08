import { gallery } from "@/config/site";
import { MediaFrame } from "./MediaFrame";
import { Reveal, SectionHeading } from "./ui";


export function Gallery() {
  return (
    <section id="trabalho" aria-labelledby="trabalho-title" className="section-y relative bg-coal">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="container-x">
        <SectionHeading id="trabalho-title" eyebrow="Portfólio" title="NOSSO TRABALHO" text="Cada detalhe faz parte do seu estilo." />
      </div>

      {/* Mobile: swipeable row · Desktop: editorial grid */}
      <Reveal className="mt-14 sm:mt-20">
        <ul
          role="list"
          aria-label="Galeria de trabalhos"
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-auto md:max-w-[1200px] md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-10 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((item, i) => (
            <li
              key={i}
              className={`group relative aspect-[4/5] w-[78vw] max-w-[360px] shrink-0 snap-center overflow-hidden border border-white/[0.07] md:w-auto md:max-w-none`}
            >
              <MediaFrame
                item={item}
                sizes="(min-width: 768px) 33vw, 80vw"
                className="transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-500 md:opacity-60 md:group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-4 left-4 text-[0.68rem] uppercase tracking-[0.28em] text-gold transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {item.label}
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 border border-gold/0 transition-colors duration-500 group-hover:border-gold/30" />
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-[0.68rem] uppercase tracking-[0.28em] text-smoke md:hidden">Deslize para ver mais</p>
      </Reveal>
    </section>
  );
}
