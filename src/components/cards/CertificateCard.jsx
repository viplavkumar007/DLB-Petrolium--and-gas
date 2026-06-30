import { motion } from 'framer-motion';
import { staggerItem } from '../../lib/animations';

export default function CertificateCard({ cert, onView }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="relative flex flex-col rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-7 shadow-card hover:shadow-card-hover hover:border-flame-400/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-flame-gradient shadow-glow">
          <i className={`fas ${cert.icon} text-white text-xl`} aria-hidden="true" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-flame-400/15 border border-flame-400/40 px-3 py-1 text-[11px] font-semibold text-flame-400">
          <i className="fas fa-circle-check" aria-hidden="true" />
          {cert.badge}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-white mb-1.5">{cert.title}</h3>
      <p className="text-xs uppercase tracking-wide text-flame-400/90 font-semibold mb-3">{cert.issuer}</p>
      <p className="text-sm leading-relaxed text-steel-300 mb-6 flex-1">{cert.description}</p>

      <button
        onClick={() => onView(cert)}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-display font-semibold text-white hover:bg-flame-gradient hover:border-transparent transition-all duration-300"
      >
        <i className="fas fa-file-pdf" aria-hidden="true" />
        {cert.buttonLabel}
      </button>
    </motion.div>
  );
}
