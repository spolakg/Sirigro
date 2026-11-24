import {ArrowRight} from 'lucide-react';
import {CTA_BANNER, RoutePath, SITE_MEDIA} from '../data/siteContent';

interface CtaBannerProps {
  onNavigate: (path: RoutePath) => void;
}

export function CtaBanner({onNavigate}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#08120C] py-20 sm:py-24">
      <img
        src={SITE_MEDIA.seedlingsHero.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#08120C] via-[#08120C]/90 to-[#08120C]/75"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-[#7FC499] uppercase">
            Start a conversation
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {CTA_BANNER.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#D1E3D7] sm:text-lg">
            {CTA_BANNER.subcopy}
          </p>
        </div>

        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/contact');
          }}
          className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-lg bg-[#1B6B3A] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#238248]"
        >
          <span>{CTA_BANNER.buttonLabel}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
