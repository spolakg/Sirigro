import {useCallback, useEffect, useState} from 'react';
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {RoutePath} from './data/siteContent';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {ExpertisePage} from './pages/ExpertisePage';
import {HomePage} from './pages/HomePage';

const ROUTE_TITLES: Record<RoutePath, string> = {
  '/': 'SiriGro – Bridging Science and Industry',
  '/expertise': 'Expertise – SiriGro | Seed Technology & Biologicals Consultancy',
  '/about': 'About Andro Tjin – SiriGro | Seed Industry Consultancy',
  '/contact': 'Contact – SiriGro | Bridging Science and Industry',
};

function normalizePath(pathname: string): RoutePath | '404' {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (cleaned === '/' || cleaned === '/home') return '/';
  if (cleaned === '/expertise') return '/expertise';
  if (cleaned === '/about') return '/about';
  if (cleaned === '/contact') return '/contact';
  return '404';
}

export default function App() {
  const [route, setRoute] = useState<RoutePath | '404'>(() =>
    normalizePath(window.location.pathname),
  );

  const navigate = useCallback((path: RoutePath) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setRoute(path);
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title =
      route === '404' ? 'Page Not Found – SiriGro' : ROUTE_TITLES[route];
  }, [route]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0F2419]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-[#1B6B3A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar currentPath={route} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {route === '/' && <HomePage onNavigate={navigate} />}
        {route === '/expertise' && <ExpertisePage onNavigate={navigate} />}
        {route === '/about' && <AboutPage onNavigate={navigate} />}
        {route === '/contact' && <ContactPage />}
        {route === '404' && (
          <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">404</p>
            <h1 className="mt-3 font-display text-4xl font-medium text-[#0F2419]">
              Page not found
            </h1>
            <p className="mt-4 text-base text-[#3E5246]">
              The page you requested could not be found. Return to the SiriGro overview to explore
              our seed technology and biologicals consultancy services.
            </p>
            <div className="mt-8">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="inline-flex min-h-[44px] items-center rounded-lg bg-[#1B6B3A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#14532D]"
              >
                Back to Home
              </a>
            </div>
          </section>
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
