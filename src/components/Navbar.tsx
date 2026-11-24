import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {NAV_ITEMS, RoutePath} from '../data/siteContent';

interface NavbarProps {
  currentPath: RoutePath | string;
  onNavigate: (path: RoutePath) => void;
}

export function Navbar({currentPath, onNavigate}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (path: RoutePath) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#D6E0D8] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md py-1 pr-2 focus-visible:outline-2"
          aria-label="SiriGro Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-8 w-8 shrink-0"
            aria-hidden="true"
          >
            <rect width="64" height="64" rx="14" fill="#0F2419" />
            <path
              d="M32 13C24.5 18.8 20.5 26.8 20.5 34.8C20.5 42.1 25.6 47.5 32 49.5C38.4 47.5 43.5 42.1 43.5 34.8C43.5 26.8 39.5 18.8 32 13Z"
              fill="#1B6B3A"
            />
            <path
              d="M32 18V51M32 34L40.5 26.5M32 40L23.5 32.5"
              stroke="#E8F5EC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[22px] font-bold tracking-tight text-[#0F2419]">
            Siri<span className="text-[#1B6B3A]">Gro</span>
          </span>
        </a>

        {/* Zone 2: Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative shrink-0 whitespace-nowrap py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#1B6B3A] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:bg-[#1B6B3A]'
                    : 'text-[#3E5246] hover:text-[#0F2419]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action & Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/contact');
            }}
            className="hidden shrink-0 whitespace-nowrap rounded-lg bg-[#1B6B3A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#14532D] md:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D6E0D8] text-[#0F2419] transition-colors hover:bg-[#F6F8F6] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="border-t border-[#D6E0D8] bg-white px-4 pt-3 pb-5 md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.path);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#ECF1ED] text-[#1B6B3A]'
                      : 'text-[#0F2419] hover:bg-[#F6F8F6]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/contact');
                }}
                className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#1B6B3A] px-4 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#14532D]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
