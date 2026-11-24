import {Linkedin} from 'lucide-react';
import {CtaBanner} from '../components/CtaBanner';
import {ABOUT_CONTENT, COMPANY_INFO, RoutePath, SITE_MEDIA} from '../data/siteContent';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function AboutPage({onNavigate}: AboutPageProps) {
  return (
    <>
      {/* Intro Split */}
      <section className="border-b border-[#D6E0D8] bg-[#F6F8F6] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              {ABOUT_CONTENT.intro.kicker}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-[#0F2419] sm:text-5xl">
              {ABOUT_CONTENT.intro.headline}
            </h1>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-lg">
              {ABOUT_CONTENT.intro.lead}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#D6E0D8] bg-[#ECF1ED]">
              <img
                src={ABOUT_CONTENT.intro.media.src}
                alt={ABOUT_CONTENT.intro.media.alt}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="border-b border-[#D6E0D8] bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-[#D6E0D8] bg-[#F6F8F6]">
              <img
                src={SITE_MEDIA.androPortrait.src}
                alt={SITE_MEDIA.androPortrait.alt}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#D6E0D8] pt-4">
              <div>
                <p className="font-semibold text-[#0F2419]">{ABOUT_CONTENT.founder.name}</p>
                <p className="text-sm text-[#3E5246]">{ABOUT_CONTENT.founder.kicker}</p>
              </div>
              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#D6E0D8] px-3.5 py-2 text-sm font-medium text-[#1B6B3A] transition-colors hover:border-[#1B6B3A] hover:bg-[#F6F8F6]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              {ABOUT_CONTENT.founder.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
              {ABOUT_CONTENT.founder.name}
            </h2>

            <div className="mt-6 space-y-5">
              {ABOUT_CONTENT.founder.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-[#D6E0D8] pt-8">
              <p className="text-xs font-semibold tracking-widest text-[#5A6F62] uppercase">
                International seed industry track record includes
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ABOUT_CONTENT.founder.organisations.map((org) => (
                  <div
                    key={org}
                    className="rounded-xl border border-[#D6E0D8] bg-[#F6F8F6] px-4 py-3.5 text-sm font-semibold text-[#0F2419]"
                  >
                    {org}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Multidisciplinary Network */}
      <section className="bg-[#F6F8F6] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 border-b border-[#D6E0D8] pb-16 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
                {ABOUT_CONTENT.approach.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
                {ABOUT_CONTENT.approach.headline}
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-7">
              {ABOUT_CONTENT.approach.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
                {ABOUT_CONTENT.network.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419]">
                {ABOUT_CONTENT.network.headline}
              </h2>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]">
                {ABOUT_CONTENT.network.description}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[#D6E0D8] bg-white p-4 sm:p-6">
                <img
                  src={ABOUT_CONTENT.network.media.src}
                  alt={ABOUT_CONTENT.network.media.alt}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
