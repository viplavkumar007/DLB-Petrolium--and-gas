import { cocoBrochures } from '../data/siteContent';
import SectionHeading from '../components/common/SectionHeading';

export default function CocoBrochure() {
  return (
    <section id="coco-brochure" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="COCO Brochure"
          title="DLB Gas COCO Investment Brochure"
          description="View and download the latest COCO model investment brochure pages."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cocoBrochures.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-navy-100 bg-steel-50 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="bg-navy-950 p-2 md:p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full rounded-sm bg-white"
                />
              </div>

              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-navy-800">
                  {item.title}
                </h3>
                <a
                  href={item.image}
                  download={item.downloadName}
                  className="inline-flex items-center justify-center gap-2 bg-crimson-600 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-crimson-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500"
                >
                  <span>Download</span>
                  <i className="fas fa-download text-xs" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
