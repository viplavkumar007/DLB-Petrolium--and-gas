import { motion } from 'framer-motion';
import { trustBanner } from '../data/siteContent';
import { fadeUp, viewportOnce } from '../lib/animations';

export default function TrustBanner() {
  return (
    <section className="relative overflow-hidden bg-flame-gradient py-8 md:py-10">
      <div className="absolute inset-0 bg-steel-texture opacity-20" aria-hidden="true" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center"
      >
        <motion.i
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="fas fa-shield-halved text-white text-xl md:text-2xl"
          aria-hidden="true"
        />
        <p className="font-display text-sm md:text-lg font-semibold uppercase tracking-wide text-white">
          {trustBanner.text}
        </p>
      </motion.div>
    </section>
  );
}
