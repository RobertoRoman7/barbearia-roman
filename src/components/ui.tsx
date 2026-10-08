import type { ReactNode, AnchorHTMLAttributes } from "react";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/config/site";

type Variant = "gold" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 select-none whitespace-nowrap font-medium uppercase tracking-[0.18em] transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-soft)] active:scale-[0.98]";

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 text-[0.72rem]",
  lg: "min-h-14 px-8 text-[0.78rem]",
};

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-ink hover:bg-gold-bright shadow-[0_0_0_1px_rgba(198,166,99,0.4),0_10px_30px_-12px_rgba(198,166,99,0.55)] hover:shadow-[0_0_0_1px_rgba(226,200,143,0.6),0_14px_36px_-12px_rgba(198,166,99,0.7)]",
  outline:
    "border border-white/15 text-bone hover:border-gold/70 hover:text-gold-bright bg-white/[0.02]",
  ghost: "text-mist hover:text-gold-bright",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({ variant = "gold", size = "md", className = "", children, ...rest }: ButtonLinkProps) {
  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

/** Any WhatsApp CTA. Opens in a new tab with the pre-filled message. */
export function WhatsAppButton({
  message,
  children,
  icon = true,
  ...rest
}: Omit<ButtonLinkProps, "href"> & { message?: string; icon?: boolean }) {
  return (
    <ButtonLink href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" {...rest}>
      {icon && <WhatsAppIcon className="size-[1.15em] shrink-0" />}
      {children}
    </ButtonLink>
  );
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "article" | "section" | "header";
  className?: string;
}) {
  return (
    <Tag data-reveal="" className={className} style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
  id?: string;
}) {
  const center = align === "center";
  return (
    <Reveal as="header" className={`flex flex-col gap-5 ${center ? "items-center text-center" : "items-start"}`}>
      {eyebrow && <span className={center ? "rule-gold eyebrow" : "eyebrow"}>{eyebrow}</span>}
      <h2 id={id} className="display text-[clamp(1.9rem,6vw,3.4rem)] text-bone text-balance">
        {title}
      </h2>
      {text && <p className="max-w-[46ch] text-[1.02rem] leading-relaxed text-mist text-pretty">{text}</p>}
    </Reveal>
  );
}
