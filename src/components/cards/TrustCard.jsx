import { motion } from 'framer-motion';
import { staggerItem } from '../../lib/animations';

export default function TrustCard({ icon, text }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4 hover:border-flame-400/40 transition-all duration-300"
    >
      <i className={`fas ${icon} text-flame-400 text-lg shrink-0`} aria-hidden="true" />
      <span className="text-sm font-medium text-white">{text}</span>
    </motion.div>
  );
}
