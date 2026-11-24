import {Linkedin, Mail, MapPin, Phone} from 'lucide-react';
import {COMPANY_INFO, NAV_ITEMS, RoutePath} from '../data/siteContent';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export function Footer({onNavigate}: FooterProps) {
  return (
    <footer className="border-t border-[#1D3527] bg-[#08120C] text-[#D1E3D7]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
            >
              <span>
                Siri<span className="text-[#4CA86F]">Gro</span>
              </span>
            </a>
            <p className="mt-2 text-sm font-medium text-[#7FC499]">{COMPANY_INFO.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A7C0B0]">
              {COMPANY_INFO.footerSummary}
            </p>
            <p className="mt-5 text-xs text-[#7D9988]">
              Chamber of Commerce (KvK): {COMPANY_INFO.kvk} &middot; VAT: {COMPANY_INFO.vat}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-[#7FC499] uppercase">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                    className="inline-block py-0.5 text-sm text-[#D1E3D7] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold tracking-wider text-[#7FC499] uppercase">
              Direct Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#D1E3D7]">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#4CA86F]" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#4CA86F]" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#A7C0B0]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4CA86F]" aria-hidden="true" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#7FC499] transition-colors hover:text-white"
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>LinkedIn &mdash; Andro Tjin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#1D3527] pt-6 text-xs text-[#7D9988] sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.brand}. All rights reserved.</p>
          <p>{COMPANY_INFO.founderName} &middot; {COMPANY_INFO.founderRole}</p>
        </div>
      </div>
    </footer>
  );
}
