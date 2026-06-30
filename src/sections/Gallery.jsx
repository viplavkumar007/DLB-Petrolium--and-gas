import { motion } from 'framer-motion';
import { galleryItems } from '../data/siteContent';
import { staggerContainer, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';
import GalleryCard from '../components/cards/GalleryCard';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Inside Our Industry"
          title="Industrial Gallery"
          description="A look at the infrastructure, logistics, and facilities behind reliable oil and gas distribution."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
