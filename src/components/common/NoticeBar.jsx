import { motion } from 'framer-motion';

export default function NoticeBar({ items = [] }) {
  return (
    <div className="bg-navy-800 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center gap-x-8 gap-y-2 overflow-x-auto">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 text-xs md:text-sm font-display font-medium uppercase tracking-wider text-flame-400 whitespace-nowrap"
          >
            <i className="fas fa-bolt text-[10px]" aria-hidden="true" />
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
