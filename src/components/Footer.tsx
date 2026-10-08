import { footerNav, site, whatsappLink } from "@/config/site";
import { InstagramIcon, RomanMark, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink pb-28 pt-16 sm:pb-12">
      <div className="container-x">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#inicio" className="flex items-center gap-3 text-gold">
              <RomanMark className="size-10" />
              <span className="display text-[1.05rem] tracking-[0.2em] text-bone">
                BARBEARIA <span className="text-gold">ROMAN</span>
              </span>
            </a>
            <p className="mt-5 font-display text-[1rem] tracking-[0.06em] text-mist">{site.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-bone transition-colors hover:text-gold-bright"
              >
                <WhatsAppIcon className="size-5 text-gold" />
                {site.whatsapp.display}
              </a>
              {site.instagram && (
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Barbearia Roman"
                  className="ml-3 grid size-10 place-items-center border border-white/10 text-mist transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <InstagramIcon className="size-5" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-10">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[0.72rem] uppercase tracking-[0.22em] text-mist transition-colors hover:text-gold-bright">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-[0.78rem] text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Barbearia Roman. Todos os direitos reservados.</p>
          <span aria-hidden="true" className="h-px w-12 bg-gold/40" />
        </div>
      </div>
    </footer>
  );
}
