import SectionHeading from '../components/common/SectionHeading';

export default function PriceList() {
  return (
    <section id="price-list" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Price List"
          title="DLB Gas Franchisee Price List"
          description="Review the latest franchisee, dealership, GST, service charge, and total cost details."
        />

        <figure className="overflow-hidden rounded-lg border border-navy-100 bg-steel-50 p-2 shadow-card md:p-4">
          <img
            src="/dodo-brochure/dlb-price-list.png"
            alt="DLB Gas franchisee price list"
            loading="lazy"
            decoding="async"
            className="block h-auto w-full rounded-sm bg-white"
          />
        </figure>
      </div>
    </section>
  );
}
