import { AnimatePresence, motion } from 'framer-motion';

/**
 * toasts: [{ id, type: 'success' | 'error', message }]
 * onDismiss: (id) => void
 */
export default function Toast({ toasts = [], onDismiss }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 w-[92%] max-w-md pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="status"
            className={`pointer-events-auto flex items-start gap-3 rounded-lg px-4 py-3.5 shadow-card-hover border ${
              toast.type === 'error'
                ? 'bg-crimson-700 border-crimson-800 text-white'
                : 'bg-navy-800 border-navy-900 text-white'
            }`}
          >
            <i
              className={`fas ${
                toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'
              } mt-0.5 ${toast.type === 'error' ? 'text-white' : 'text-flame-400'}`}
              aria-hidden="true"
            />
            <p className="text-sm leading-snug flex-1">{toast.message}</p>
            <button
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss notification"
              className="text-white/60 hover:text-white transition-colors"
            >
              <i className="fas fa-times text-xs" aria-hidden="true" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
