import { galleryItems } from '../data/siteContent';
import SectionHeading from '../components/common/SectionHeading';
import GalleryCard from '../components/cards/GalleryCard';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-steel-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Company Profile"
          title="DLB Group Profile Gallery"
          description="Browse each page from the DLB Group company profile."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
