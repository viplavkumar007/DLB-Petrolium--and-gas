import { useEffect, useState } from 'react';
import { brand, contact, nav } from '../../data/siteContent';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { SECTION_IDS } from '../../lib/constants';
import { buildTelLink } from '../../lib/whatsapp';
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

  function openBookConnection() {
    window.dispatchEvent(new CustomEvent('open-book-connection'));
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-[#bd1b27] transition-shadow duration-300 ${
          scrolled ? 'shadow-card' : ''
        }`}
      >
        <div className="hidden md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white md:px-8">
            <div className="flex items-center gap-8 text-sm font-bold lg:text-base">
              <a href={`mailto:${contact.emailPrimary}`} className="flex items-center gap-2 hover:text-white/80">
                <i className="fas fa-envelope" aria-hidden="true" />
                <span>Email. {contact.emailPrimary}</span>
              </a>
              <a href={buildTelLink()} className="flex items-center gap-2 hover:text-white/80">
                <i className="fas fa-mobile-alt" aria-hidden="true" />
                <span>Call. {contact.phone}</span>
              </a>
            </div>
            <div className="flex items-center gap-8 text-sm font-bold lg:text-base">
              <button type="button" onClick={openBookConnection} className="flex items-center gap-2 hover:text-white/80">
                <i className="fas fa-fire" aria-hidden="true" />
                <span>Book Connection</span>
              </button>
              <a href="#contact" className="flex items-center gap-2 hover:text-white/80">
                <i className="fas fa-user-tie" aria-hidden="true" />
                <span>Become a Business Partner</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="mx-auto mb-3 flex max-w-7xl items-center justify-between bg-white px-5 py-5 md:px-8 lg:py-7">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img src={brand.logo} alt={brand.fullName} className="h-14 md:h-20 w-auto" />
          </a>

          <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
            {nav.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <li key={item.href} className="group relative">
                  <a
                    href={item.href}
                    className={`whitespace-nowrap text-sm xl:text-base font-display font-medium transition-colors ${
                      isActive ? 'text-[#bd1b27]' : 'text-black hover:text-[#bd1b27]'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#bd1b27] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="border-l border-steel-200 pl-8 font-display text-base font-medium text-black transition-colors hover:text-[#bd1b27]"
            >
              Apply Now
            </a>
            <button
              type="button"
              aria-label="Account"
              className="ml-5 flex h-10 w-10 items-center justify-center border-l border-steel-200 pl-5 text-black transition-colors hover:text-[#bd1b27]"
            >
              <i className="fas fa-circle-user text-2xl" aria-hidden="true" />
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden flex h-11 w-11 items-center justify-center text-black"
          >
            <i className="fas fa-bars text-lg" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileOffcanvas open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
