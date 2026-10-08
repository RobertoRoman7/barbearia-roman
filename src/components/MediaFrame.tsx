"use client";

import { useEffect, useRef } from "react";
import type { MediaItem } from "@/config/site";
import { ImageIcon, PlayIcon } from "./icons";

/**
 * Renders a photo, a muted looping video, or — while `src` is empty —
 * an elegant reserved slot. Videos only load and play while on screen.
 */
export function MediaFrame({ item, className = "", sizes = "100vw" }: { item: MediaItem; className?: string; sizes?: string }) {
  if (!item.src) return <Placeholder item={item} className={className} />;
  if (item.type === "video") return <LazyVideo item={item} className={className} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      decoding="async"
      sizes={sizes}
      className={`h-full w-full object-cover object-[50%_38%] ${className}`}
    />
  );
}

function LazyVideo({ item, className }: { item: MediaItem; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.controls = true;
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload === "none") video.preload = "metadata";
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={item.src}
      poster={item.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={item.alt}
      className={`h-full w-full object-cover object-[50%_38%] ${className}`}
    />
  );
}

function Placeholder({ item, className }: { item: MediaItem; className: string }) {
  const Icon = item.type === "video" ? PlayIcon : ImageIcon;
  return (
    <div
      role="img"
      aria-label={`${item.label} — ${item.type === "video" ? "vídeo" : "foto"} em breve`}
      className={`grain relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,#1d1a14_0%,#121212_45%,#0c0c0c_100%)] ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(198,166,99,0.035)_0_1px,transparent_1px_14px)]" />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <Icon className="size-8 text-gold/60" />
        <span className="display text-[0.9rem] tracking-[0.24em] text-bone/70">{item.label.toUpperCase()}</span>
        <span className="text-[0.62rem] uppercase tracking-[0.3em] text-smoke">Em breve</span>
      </div>
    </div>
  );
}
