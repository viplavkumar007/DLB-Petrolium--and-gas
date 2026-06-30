import { motion } from 'framer-motion';
import { testimonials } from '../data/siteContent';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-steel-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Our Business Partners Say"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-xl border border-navy-100 bg-white p-7 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <i className="fas fa-quote-left text-3xl text-flame-200 mb-4" aria-hidden="true" />
              <p className="text-sm md:text-base text-steel-600 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-navy-50">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-gradient text-white font-display font-semibold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-display font-semibold text-navy-800">{t.name}</p>
                  <p className="text-xs text-steel-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
