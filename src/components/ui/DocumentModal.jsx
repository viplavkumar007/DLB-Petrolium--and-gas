import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function DocumentModal({ cert, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (cert) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/85 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={cert.title}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl h-[85vh] bg-white rounded-lg overflow-hidden shadow-card-hover flex flex-col"
          >
            <div className="flex items-center justify-between bg-navy-800 px-5 py-4">
              <h3 className="font-display text-white text-sm md:text-base font-semibold truncate pr-4">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Open in new tab"
                >
                  <i className="fas fa-up-right-from-square text-xs" aria-hidden="true" />
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close document preview"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <i className="fas fa-times text-sm" aria-hidden="true" />
                </button>
              </div>
            </div>
            <iframe src={cert.file} title={cert.title} className="flex-1 w-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
