import { motion } from 'framer-motion';
import { productItems } from '../data/siteContent';
import { staggerContainer, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/cards/ProductCard';

export default function Products() {
  return (
    <section id="products" className="relative bg-steel-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Offerings"
          title="Our Reliable Oil & Gas Products"
          description="A focused range of petroleum and gas distribution solutions for commercial and industrial businesses across India."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6"
        >
          {productItems.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
