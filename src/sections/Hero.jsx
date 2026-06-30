import { motion } from 'framer-motion';
import { hero } from '../data/siteContent';
import { staggerContainer, staggerItem, heroHeading } from '../lib/animations';
import Button from '../components/common/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-28 pb-20"
    >
      {/* Background imagery + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-crimson-900/40" />
        <div className="absolute inset-0 bg-steel-texture" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-flame-400/40 bg-flame-400/10 px-4 py-1.5 text-xs md:text-sm font-display font-semibold uppercase tracking-widest text-flame-400 mb-6"
          >
            <i className="fas fa-bolt" aria-hidden="true" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={heroHeading}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-steel-200 font-medium mb-8 max-w-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.ul variants={staggerContainer(0.1)} className="flex flex-col gap-3 mb-10">
            {hero.features.map((feature) => (
              <motion.li
                key={feature.text}
                variants={staggerItem}
                className="flex items-start gap-3 text-sm md:text-base text-steel-100"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-flame-gradient mt-0.5 shadow-glow">
                  <i className={`fas ${feature.icon} text-white text-xs`} aria-hidden="true" />
                </span>
                {feature.text}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4">
            <Button href={hero.ctaPrimary.href} variant="primary" icon="fa-arrow-right">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" icon="fa-arrow-right">
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel-300"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <i className="fas fa-chevron-down text-xs animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
