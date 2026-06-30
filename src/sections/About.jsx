import { motion } from 'framer-motion';
import { about } from '../data/siteContent';
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative clip-corner overflow-hidden shadow-card-hover">
            <img
              src="https://images.unsplash.com/photo-1565514020179-026b92b2a0b3?auto=format&fit=crop&w=1000&q=80"
              alt="Industrial petroleum storage facility"
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/20" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex h-28 w-28 items-center justify-center rounded-lg bg-flame-gradient shadow-glow">
            <div className="text-center text-white">
              <p className="font-display text-2xl font-bold leading-none">PAN</p>
              <p className="text-[10px] uppercase tracking-widest mt-1">India Coverage</p>
            </div>
          </div>
          <span className="absolute top-6 left-0 h-16 w-1.5 bg-crimson-600" aria-hidden="true" />
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display font-semibold uppercase tracking-[0.2em] text-crimson-600 mb-3">
            <span className="h-px w-6 bg-current" />
            {about.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800 leading-tight mb-5">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="text-sm md:text-base text-steel-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          <motion.ul
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6"
          >
            {about.bullets.map((bullet) => (
              <motion.li
                key={bullet}
                variants={staggerItem}
                className="flex items-center gap-2.5 text-sm text-navy-700 font-medium"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame-50 text-flame-600">
                  <i className="fas fa-check text-[10px]" aria-hidden="true" />
                </span>
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
