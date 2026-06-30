import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/siteContent';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-navy-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-steel-texture" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="Why Businesses Choose DLB Petroleum"
          light
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm px-6 py-5 hover:border-flame-400/40 transition-all duration-300"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-flame-gradient shadow-glow">
                <i className={`fas ${item.icon} text-white`} aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
