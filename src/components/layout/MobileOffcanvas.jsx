import { AnimatePresence, motion } from 'framer-motion';
import { brand, nav, contact, footer } from '../../data/siteContent';
import { buildTelLink, buildWhatsAppLink } from '../../lib/whatsapp';

export default function MobileOffcanvas({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed top-0 right-0 z-50 h-full w-[88%] max-w-sm bg-navy-900 text-white overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <img src={brand.logo} alt={brand.fullName} className="h-10 w-auto bg-white rounded p-1" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            </div>

            <p className="px-6 py-5 text-sm text-steel-300 leading-relaxed border-b border-white/10">
              {footer.about}
            </p>

            <nav className="px-6 py-5 border-b border-white/10">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-3 text-base font-display font-medium uppercase tracking-wide text-white/90 hover:text-flame-400 transition-colors border-b border-white/5"
                    >
                      {item.label}
                      <i className="fas fa-chevron-right text-xs opacity-50" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 py-6 flex flex-col gap-4">
              <a href={buildTelLink()} className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame-gradient">
                  <i className="fas fa-phone text-white text-xs" aria-hidden="true" />
                </span>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.emailPrimary}`} className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame-gradient">
                  <i className="fas fa-envelope text-white text-xs" aria-hidden="true" />
                </span>
                {contact.emailPrimary}
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 text-sm font-display font-semibold uppercase tracking-wide"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
