/**
 * ============================================================
 *  CONFIGURAÇÃO DA BARBEARIA ROMAN
 *  Tudo que muda com frequência fica aqui. Edite este arquivo
 *  para atualizar Instagram, endereço, mapa, fotos e vídeos.
 * ============================================================
 */

export const site = {
  name: "Barbearia Roman",
  tagline: "Seu estilo. Sua identidade.",
  url: "https://barbeariaroman.com.br",

  whatsapp: {
    number: "5545991552400",
    display: "(45) 99155-2400",
    defaultMessage: "Olá! Gostaria de agendar um horário na Barbearia Roman.",
  },

  /**
   * Instagram: deixe `null` até ter o perfil oficial.
   * Exemplo: { handle: "barbeariaroman", url: "https://instagram.com/barbeariaroman" }
   */
  instagram: { handle: "barbearia_roman", url: "https://www.instagram.com/barbearia_roman/" } as null | { handle: string; url: string },

  location: {
    /** Endereço completo. Enquanto `null`, o site mostra o campo a preencher. */
    address: "Avenida São Paulo, 377" as null | string,
    /** Cidade/UF opcional, exibida abaixo do endereço. */
    city: "Três Barras do Paraná – PR" as null | string,
    /** Link "Como chegar" (Google Maps). Ex.: https://maps.app.goo.gl/xxxx */
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+S%C3%A3o+Paulo+377%2C+Tr%C3%AAs+Barras+do+Paran%C3%A1+-+PR" as null | string,
    /**
     * URL de incorporação do mapa (Google Maps → Compartilhar → Incorporar
     * um mapa → copie só o valor de src="...").
     */
    mapEmbedUrl: "https://www.google.com/maps?q=Avenida+S%C3%A3o+Paulo+377%2C+Tr%C3%AAs+Barras+do+Paran%C3%A1+-+PR&output=embed" as null | string,
    /** Horário de funcionamento. Deixe [] até confirmar. */
    hours: [
      { days: "Terça a sexta", short: "Ter a sex", time: "9h às 19h", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
      { days: "Sábado", short: "Sáb", time: "9h às 17h", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
    ] as { days: string; short: string; time: string; dayOfWeek: string[]; opens: string; closes: string }[],
  },
} as const;

export const ADDRESS_PLACEHOLDER = "[ENDEREÇO DA BARBEARIA]";

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string = site.whatsapp.defaultMessage) {
  const text = encodeURIComponent(message).replace(/!/g, "%21");
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number; // em reais — NÃO altere sem confirmação da barbearia
  message: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "corte",
    name: "Corte",
    description: "Corte de cabelo",
    price: 35,
    message: "Olá! Gostaria de agendar um Corte de Cabelo na Barbearia Roman.",
  },
  {
    id: "cabelo-barba",
    name: "Cabelo + Barba",
    description: "Corte de cabelo + barba",
    price: 65,
    message: "Olá! Gostaria de agendar Cabelo + Barba na Barbearia Roman.",
  },
  {
    id: "combo",
    name: "Cabelo + Barba + Sobrancelha",
    description: "Combo completo",
    price: 70,
    featured: true,
    message:
      "Olá! Gostaria de agendar o Combo Completo (Cabelo + Barba + Sobrancelha) na Barbearia Roman.",
  },
  {
    id: "barba",
    name: "Barba",
    description: "Barba completa",
    price: 30,
    message: "Olá! Gostaria de agendar uma Barba na Barbearia Roman.",
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    description: "Acabamento de sobrancelha",
    price: 10,
    message: "Olá! Gostaria de agendar um Acabamento de Sobrancelha na Barbearia Roman.",
  },
];

export const formatPrice = (value: number) => `R$ ${value}`;

/**
 * GALERIA — "Nosso Trabalho"
 * Coloque os arquivos em /public/media/ e preencha `src`.
 *  - Fotos:  type "image", src "/media/corte-01.jpg"
 *  - Vídeos: type "video", src "/media/corte-01.mp4", poster "/media/corte-01.jpg"
 *    (vídeos: MP4 H.264, até ~8 MB, 720p, sem áudio — rodam mudos e em loop)
 * Enquanto `src` estiver vazio, o card aparece como espaço reservado.
 */
export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  label: string;
};

export const gallery: MediaItem[] = [
  { type: "video", src: "/media/barba.mp4", poster: "/media/barba.jpg", alt: "Cliente com corte e barba finalizados na Barbearia Roman", label: "Corte e barba" },
  { type: "video", src: "/media/degrade-textura.mp4", poster: "/media/degrade-textura.jpg", alt: "Degradê com topo texturizado feito na Barbearia Roman", label: "Degradê" },
  { type: "video", src: "/media/cabelo-barba.mp4", poster: "/media/cabelo-barba.jpg", alt: "Degradê baixo com barba feito na Barbearia Roman", label: "Cabelo + barba" },
  { type: "video", src: "/media/textura.mp4", poster: "/media/textura.jpg", alt: "Corte com franja texturizada feito na Barbearia Roman", label: "Textura" },
  { type: "video", src: "/media/cabelo-medio.mp4", poster: "/media/cabelo-medio.jpg", alt: "Corte em cabelo médio feito na Barbearia Roman", label: "Cabelo médio" },
  { type: "video", src: "/media/degrade-barba.mp4", poster: "/media/degrade-barba.jpg", alt: "Degradê com barba alinhada feito na Barbearia Roman", label: "Acabamento" },
];

/** Mídia da seção "Sobre" (foto ou vídeo). Deixe src vazio até ter o arquivo. */
export const aboutMedia: MediaItem = {
  type: "video",
  src: "/media/atendimento.mp4",
  poster: "/media/atendimento.jpg",
  alt: "Cliente no salão da Barbearia Roman mostrando o corte finalizado",
  label: "Barbearia Roman",
};

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalho", label: "Nosso Trabalho" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const footerNav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalho", label: "Nosso trabalho" },
  { href: "#agendamento", label: "Agendamento" },
  { href: "#contato", label: "Contato" },
];
