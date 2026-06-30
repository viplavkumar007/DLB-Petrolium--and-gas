import { faqs } from '../data/siteContent';
import SectionHeading from '../components/common/SectionHeading';
import FAQAccordion from '../components/ui/FAQAccordion';

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Have Questions?"
          title="Frequently Asked Questions"
        />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
