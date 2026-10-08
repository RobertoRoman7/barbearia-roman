import { ADDRESS_PLACEHOLDER, site, whatsappLink } from "@/config/site";
import { ArrowIcon, ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./icons";
import { ButtonLink, Reveal, SectionHeading } from "./ui";

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 border-b border-white/[0.07] py-6 first:pt-0">
      <span className="mt-0.5 grid size-10 shrink-0 place-items-center border border-gold/30 text-gold">{icon}</span>
      <div className="min-w-0">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-smoke">{label}</p>
        <div className="mt-2 text-[1.02rem] text-bone">{children}</div>
      </div>
    </div>
  );
}

export function Contact() {
  const { location, instagram, whatsapp } = site;

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-y relative">
      <div className="container-x">
        <SectionHeading id="contato-title" eyebrow="Contato" title="ONDE ESTAMOS" />

        <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col">
            <Row icon={<PinIcon className="size-5" />} label="Endereço">
              <address className="not-italic">
                {location.address ?? <span className="text-mist">{ADDRESS_PLACEHOLDER}</span>}
                {location.city && <span className="mt-1 block text-mist">{location.city}</span>}
              </address>
            </Row>

            {location.hours.length > 0 && (
              <Row icon={<ClockIcon className="size-5" />} label="Horários">
                <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                  {location.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt className="text-mist">{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </Row>
            )}

            <Row icon={<WhatsAppIcon className="size-5" />} label="WhatsApp">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-bright">
                {whatsapp.display}
              </a>
            </Row>

            <Row icon={<InstagramIcon className="size-5" />} label="Instagram">
              {instagram ? (
                <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-bright">
                  @{instagram.handle}
                </a>
              ) : (
                <span className="text-mist">Em breve</span>
              )}
            </Row>

            <div className="mt-8">
              {location.mapsUrl ? (
                <ButtonLink href={location.mapsUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="lg" className="w-full sm:w-auto">
                  Como chegar
                  <ArrowIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </ButtonLink>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center gap-2.5 border border-white/10 px-8 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-smoke sm:w-auto"
                >
                  Como chegar
                  <ArrowIcon className="size-4" />
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="relative min-h-[320px] overflow-hidden border border-white/[0.08] lg:min-h-[440px]">
            {location.mapEmbedUrl ? (
              <iframe
                title="Mapa — Barbearia Roman"
                src={location.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
              />
            ) : (
              <div className="grain absolute inset-0 flex flex-col items-center justify-center gap-4 bg-coal text-center">
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                <span className="relative grid size-14 place-items-center rounded-full border border-gold/40 text-gold">
                  <PinIcon className="size-6" />
                </span>
                <p className="relative text-[0.68rem] uppercase tracking-[0.3em] text-smoke">Mapa em breve</p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
