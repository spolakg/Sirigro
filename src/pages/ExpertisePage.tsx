import {Check} from 'lucide-react';
import {CtaBanner} from '../components/CtaBanner';
import {EXPERTISE_CONTENT, RoutePath} from '../data/siteContent';

interface ExpertisePageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ExpertisePage({onNavigate}: ExpertisePageProps) {
  return (
    <>
      {/* Clean Page Intro — No duplicate secondary banner strip below navbar */}
      <section className="border-b border-[#D6E0D8] bg-[#F6F8F6] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              {EXPERTISE_CONTENT.intro.kicker}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-[#0F2419] sm:text-5xl">
              {EXPERTISE_CONTENT.intro.headline}
            </h1>
            <p className="mt-4 text-lg font-medium text-[#1B6B3A] sm:text-xl">
              {EXPERTISE_CONTENT.intro.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#D6E0D8] pt-8 md:grid-cols-2 md:gap-12">
            {EXPERTISE_CONTENT.intro.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What I Offer — Clean responsive alternating sections (mobile always pairs photo above text cleanly) */}
      <section className="border-b border-[#D6E0D8] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              What I offer
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
              Technical depth across three core domains
            </h2>
          </div>

          <div className="mt-14 space-y-16 lg:space-y-20">
            {EXPERTISE_CONTENT.pillars.map((pillar, index) => {
              const imageRightOnDesktop = index % 2 === 0;
              return (
                <article
                  key={pillar.id}
                  className="grid grid-cols-1 items-stretch gap-8 overflow-hidden rounded-2xl border border-[#D6E0D8] bg-[#F6F8F6] p-5 sm:p-8 lg:grid-cols-12 lg:gap-12"
                >
                  {/* Image container: always shown cleanly first on mobile (order-1), alternates on desktop */}
                  <div
                    className={`order-1 overflow-hidden rounded-xl bg-[#ECF1ED] lg:col-span-5 ${
                      imageRightOnDesktop ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={pillar.media.src}
                      alt={pillar.media.alt}
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </div>

                  {/* Text content: always clearly separated below photo on mobile (order-2) */}
                  <div
                    className={`order-2 flex flex-col justify-center lg:col-span-7 ${
                      imageRightOnDesktop ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
                      {pillar.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#0F2419] sm:text-3xl">
                      {pillar.title}
                    </h3>

                    <div className="mt-6 space-y-6 border-t border-[#D6E0D8] pt-6">
                      {pillar.offerings.map((offering) => (
                        <div key={offering.heading}>
                          <h4 className="text-base font-semibold text-[#0F2419] sm:text-lg">
                            {offering.heading}
                          </h4>
                          <p className="mt-1.5 max-w-[65ch] text-sm leading-relaxed text-[#3E5246] sm:text-base">
                            {offering.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multidisciplinary Network Visual Showcase */}
      <section className="border-b border-[#D6E0D8] bg-[#F6F8F6] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
              {EXPERTISE_CONTENT.networkSection.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
              {EXPERTISE_CONTENT.networkSection.headline}
            </h2>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]">
              {EXPERTISE_CONTENT.networkSection.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-[#D6E0D8] bg-white p-4 sm:p-6">
              <img
                src={EXPERTISE_CONTENT.networkSection.media.src}
                alt={EXPERTISE_CONTENT.networkSection.media.alt}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How I Work & Troubleshooting */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {/* Flexible Engagement Row */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="overflow-hidden rounded-2xl border border-[#D6E0D8] bg-[#F6F8F6] lg:col-span-6">
              <img
                src={EXPERTISE_CONTENT.howIWork.media.src}
                alt={EXPERTISE_CONTENT.howIWork.media.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
                {EXPERTISE_CONTENT.howIWork.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419] sm:text-4xl">
                {EXPERTISE_CONTENT.howIWork.headline}
              </h2>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]">
                {EXPERTISE_CONTENT.howIWork.description}
              </p>
            </div>
          </div>

          {/* Troubleshooting & Tailored Services Row */}
          <div className="grid grid-cols-1 gap-10 rounded-2xl border border-[#D6E0D8] bg-[#F6F8F6] p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
                {EXPERTISE_CONTENT.troubleshooting.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#0F2419]">
                {EXPERTISE_CONTENT.troubleshooting.headline}
              </h2>
              <div className="mt-5 space-y-4">
                {EXPERTISE_CONTENT.troubleshooting.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="max-w-[65ch] text-base leading-relaxed text-[#3E5246]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#D6E0D8] bg-white p-6 lg:col-span-5">
              <h3 className="text-lg font-semibold text-[#0F2419]">
                {EXPERTISE_CONTENT.troubleshooting.tailoredTitle}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {EXPERTISE_CONTENT.troubleshooting.tailoredItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#3E5246] sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#ECF1ED] text-[#1B6B3A]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
