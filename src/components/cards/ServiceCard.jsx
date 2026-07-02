import { motion } from 'framer-motion';
import { staggerItem } from '../../lib/animations';
import { buildMailtoLink } from '../../lib/whatsapp';

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-tr-3xl overflow-hidden bg-navy-800 p-7 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 clip-corner"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-navy-gradient opacity-90" />
      <div className="absolute top-0 right-0 h-20 w-20 bg-flame-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-flame-gradient mb-5 shadow-glow">
          <i className={`fas ${icon} text-white text-xl`} aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-steel-300">{description}</p>
        <a
          href={buildMailtoLink(
            `Service Enquiry: ${title}`,
            `Hello DLB Petroleum, I want to enquire about ${title}.`
          )}
          className="mt-6 inline-flex w-fit items-center gap-2 bg-white px-4 py-2.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-[#e30613] transition-colors hover:bg-[#e30613] hover:text-white clip-corner-sm"
        >
          Enquire
          <i className="fas fa-arrow-right text-sm" aria-hidden="true" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-flame-gradient group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
