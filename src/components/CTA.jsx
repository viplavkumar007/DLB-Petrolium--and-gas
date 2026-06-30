import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../lib/animations';
import Button from './common/Button';
import { buildWhatsAppLink } from '../lib/whatsapp';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-20">
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-flame-500/30 blur-3xl animate-pulse-glow" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-crimson-600/25 blur-3xl animate-pulse-glow" aria-hidden="true" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6"
      >
        <h2 className="font-display text-2xl md:text-4xl font-semibold text-white leading-tight">
          Need a Reliable Oil & Gas Distribution Partner?
        </h2>
        <p className="text-steel-300 max-w-2xl text-sm md:text-base">
          Reach out today for PAN India supply coordination, business partnerships, and dependable
          energy solutions tailored to your requirements.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Button href="#contact" variant="primary" icon="fa-arrow-right">
            Request a Quote
          </Button>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[#25D366] px-7 py-3.5 text-sm font-display font-semibold uppercase tracking-wide text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
