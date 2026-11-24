import {ArrowRight, Compass, Layers, Wrench} from 'lucide-react';
import {CtaBanner} from '../components/CtaBanner';
import {HOME_CONTENT, RoutePath, SITE_MEDIA} from '../data/siteContent';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

const HOW_I_WORK_ICONS = [Compass, Wrench, Layers] as const;

export function HomePage({onNavigate}: HomePageProps) {
  return (
    <>
      {/* Hero Section — Pure black canvas seamlessly merges with studio seedlings artwork */}
      <section className="bg-[#000000] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-[#7FC499] uppercase">
              {HOME_CONTENT.hero.kicker}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {HOME_CONTENT.hero.headline}{' '}
              <span className="text-[#7FC499]">{HOME_CONTENT.hero.subheadlineHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D1E3D7] sm:text-lg">
              {HOME_CONTENT.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[#1B6B3A] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#238248]"
              >
                <span>{HOME_CONTENT.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/expertise"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/expertise');
                }}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg border border-[#2F523D] px-5 py-3 text-base font-medium text-[#E8F5EC] transition-colors hover:border-[#7FC499] hover:text-white"
              >
                <span>{HOME_CONTENT.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-[#000000]">
              <img
                src={SITE_MEDIA.seedlingsHero.src}
                alt={SITE_MEDIA.seedlingsHero.alt}
                className="aspect-[4/3] w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SiriGro Editorial Split */}
      <section className="border-b border-[#D6E0D8] bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
                {HOME_CONTENT.whySirigro.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-snug font-medium tracking-tight text-[#0F2419] sm:text-4xl">
                {HOME_CONTENT.whySirigro.headline}
              </h2>
            </div>

            <div className="mt-8 rounded-xl border border-[#D6E0D8] bg-[#F6F8F6] p-6">
              <p className="font-display text-4xl font-semibold text-[#1B6B3A]">
                {HOME_CONTENT.whySirigro.experienceYears}
              </p>
              <p className="mt-2 text-sm leading-relaxed font-medium text-[#3E5246]">
                {HOME_CONTENT.whySirigro.experienceLabel}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-5 lg:col-span-7">
            {HOME_CONTENT.whySirigro.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/about');
                }}
                className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#1B6B3A] transition-colors hover:text-[#14532D]"
              >
                <span>{HOME_CONTENT.whySirigro.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Preview Grid */}
      <section className="border-b border-[#D6E0D8] bg-[#F6F8F6] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              {HOME_CONTENT.capabilities.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
              {HOME_CONTENT.capabilities.headline}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOME_CONTENT.capabilities.items.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#D6E0D8] bg-white transition-colors hover:border-[#1B6B3A]"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#ECF1ED]">
                  <img
                    src={item.media.src}
                    alt={item.media.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#0F2419]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#3E5246] sm:text-base">
                      {item.summary}
                    </p>
                  </div>
                  <div className="mt-6 pt-2">
                    <a
                      href="/expertise"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/expertise');
                      }}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#1B6B3A] transition-colors hover:text-[#14532D]"
                    >
                      <span>View expertise</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              {HOME_CONTENT.howIWork.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
              {HOME_CONTENT.howIWork.headline}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOME_CONTENT.howIWork.items.map((item, idx) => {
              const Icon = HOW_I_WORK_ICONS[idx % HOW_I_WORK_ICONS.length];
              return (
                <div key={item.title} className="border-t-2 border-[#1B6B3A] pt-6">
                  <Icon className="h-6 w-6 text-[#1B6B3A]" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0F2419]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3E5246] sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
