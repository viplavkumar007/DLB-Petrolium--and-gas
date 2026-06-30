import { motion } from 'framer-motion';
import { staggerItem } from '../../lib/animations';

export default function GalleryCard({ item }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.02 }}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <img
        src={`https://source.unsplash.com/600x450/?${encodeURIComponent(item.query)}`}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 p-5">
        <span className="block h-0.5 w-8 bg-flame-gradient mb-2" />
        <h3 className="font-display text-white text-sm md:text-base font-semibold">{item.title}</h3>
      </div>
    </motion.div>
  );
}
