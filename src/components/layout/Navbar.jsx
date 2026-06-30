import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { brand, nav, contact } from '../../data/siteContent';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { SECTION_IDS } from '../../lib/constants';
import { buildTelLink } from '../../lib/whatsapp';
import Button from '../common/Button';
import MobileOffcanvas from './MobileOffcanvas';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-card py-2'
            : 'bg-white/40 backdrop-blur-sm py-4'
        }`}
      >
        {/* Top contact strip — collapses on scroll */}
        <div
          className={`hidden md:block border-b border-navy-100 overflow-hidden transition-all duration-300 ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100 mb-3'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-xs text-navy-600 pb-2">
            <div className="flex items-center gap-6">
              <a href={`mailto:${contact.emailPrimary}`} className="flex items-center gap-1.5 hover:text-crimson-600 transition-colors">
                <i className="fas fa-envelope" aria-hidden="true" />
                {contact.emailPrimary}
              </a>
              <a href={buildTelLink()} className="flex items-center gap-1.5 hover:text-crimson-600 transition-colors">
                <i className="fas fa-phone" aria-hidden="true" />
                {contact.phone}
              </a>
            </div>
            <span className="flex items-center gap-1.5 font-semibold text-crimson-600">
              <i className="fas fa-earth-asia" aria-hidden="true" />
              PAN India Distribution
            </span>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img src={brand.logo} alt={brand.fullName} className="h-12 md:h-14 w-auto" />
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {nav.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    className={`text-sm font-display font-medium uppercase tracking-wide transition-colors ${
                      isActive ? 'text-crimson-600' : 'text-navy-700 hover:text-crimson-600'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 bg-crimson-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="#contact" variant="primary" className="!px-6 !py-2.5 !text-xs">
              Get a Quote
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-md border border-navy-200 text-navy-800"
          >
            <i className="fas fa-bars text-lg" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileOffcanvas open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
