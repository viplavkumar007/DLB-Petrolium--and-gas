import { motion } from 'framer-motion';
import { contact } from '../data/siteContent';
import { slideInLeft, slideInRight, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import { buildTelLink, buildWhatsAppLink } from '../lib/whatsapp';

const infoCards = [
  { icon: 'fa-phone', label: 'Phone', value: contact.phone, href: buildTelLink() },
  { icon: 'fa-envelope', label: 'Email', value: contact.emailPrimary, href: `mailto:${contact.emailPrimary}` },
  { icon: 'fa-envelope-open-text', label: 'Alternate Email', value: contact.emailSecondary, href: `mailto:${contact.emailSecondary}` },
  { icon: 'fa-globe', label: 'Website', value: contact.website.replace('https://', ''), href: contact.website },
];

export default function Contact({ onToast }) {
  return (
    <section id="contact" className="relative bg-navy-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-steel-texture opacity-40" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Request a Quote or Business Enquiry"
          description="Reach out for distribution coordination, partnership opportunities, or general enquiries — our team responds promptly."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3 rounded-xl clip-corner bg-white p-7 md:p-9 shadow-card-hover"
          >
            <ContactForm onSuccess={(msg) => onToast?.(msg)} />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {infoCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 hover:border-flame-400/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-flame-gradient shadow-glow">
                  <i className={`fas ${card.icon} text-white text-sm`} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-steel-400 mb-1">{card.label}</p>
                  <p className="text-sm md:text-base font-medium text-white break-all group-hover:text-flame-400 transition-colors">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-flame-gradient shadow-glow">
                <i className="fas fa-location-dot text-white text-sm" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-steel-400 mb-1">Office Address</p>
                <p className="text-sm md:text-base font-medium text-white leading-relaxed">
                  {contact.address}
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-4 text-sm font-display font-semibold uppercase tracking-wide text-white hover:brightness-110 transition-all duration-200"
            >
              <i className="fab fa-whatsapp text-lg" aria-hidden="true" />
              Chat with Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
