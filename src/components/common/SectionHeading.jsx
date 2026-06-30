import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/animations';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col ${alignClass} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs md:text-sm font-display font-semibold uppercase tracking-[0.2em] mb-3 ${
            light ? 'text-flame-400' : 'text-crimson-600'
          }`}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight max-w-3xl ${
          light ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${
            light ? 'text-steel-300' : 'text-steel-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
