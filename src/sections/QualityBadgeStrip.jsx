import { motion } from 'framer-motion';
import { aboutBadge } from '../data/siteContent';
import { fadeUp, viewportOnce } from '../lib/animations';

export default function QualityBadgeStrip() {
  return (
    <section className="relative -mt-px">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative bg-crimson-700 clip-badge"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-800 via-crimson-700 to-crimson-600" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-5">
          <span className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-lg bg-white/15">
            <i className="fas fa-award text-3xl text-white" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-lg md:text-2xl font-semibold text-white mb-2">
              {aboutBadge.title}
            </h2>
            <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-3xl">
              {aboutBadge.text}
            </p>
          </div>
          <a
            href={aboutBadge.href}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-display font-semibold uppercase tracking-wide text-white border-b-2 border-flame-400 pb-1 hover:gap-3 transition-all duration-200"
          >
            {aboutBadge.linkLabel}
            <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
