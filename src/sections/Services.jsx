import { motion } from 'framer-motion';
import { services } from '../data/siteContent';
import { staggerContainer, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/cards/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-steel-texture opacity-50" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Oil & Gas Distribution Services"
          description="From oil and gas supply to industrial energy support, our services are built around reliability, safety, and PAN India coordination."
          light
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
