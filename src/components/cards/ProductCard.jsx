import { motion } from 'framer-motion';
import { staggerItem } from '../../lib/animations';

export default function ProductCard({ icon, title }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center text-center gap-4 rounded-xl border border-navy-100 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-flame-300 transition-all duration-300"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-50 group-hover:bg-flame-gradient transition-colors duration-300">
        <i
          className={`fas ${icon} text-2xl text-navy-700 group-hover:text-white transition-colors duration-300`}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-display text-base font-semibold text-navy-800">{title}</h3>
    </motion.div>
  );
}
