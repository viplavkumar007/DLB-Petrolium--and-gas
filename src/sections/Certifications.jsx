import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates, corporateInfo, trustCards } from '../data/siteContent';
import { staggerContainer, viewportOnce } from '../lib/animations';
import SectionHeading from '../components/common/SectionHeading';
import CertificateCard from '../components/cards/CertificateCard';
import TrustCard from '../components/cards/TrustCard';
import DocumentModal from '../components/ui/DocumentModal';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="relative bg-navy-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-steel-texture opacity-40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Trust & Transparency"
          title="Government Registration & Corporate Compliance"
          description="DLB Petroleum is officially incorporated under the Ministry of Corporate Affairs, Government of India, with full corporate governance documentation available for review."
          light
        />

        {/* Certificate cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onView={setActiveCert} />
          ))}
        </motion.div>

        {/* Corporate info panel */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-10 mb-14"
        >
          <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-2.5">
            <i className="fas fa-building-columns text-flame-400" aria-hidden="true" />
            Corporate Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateInfo.map((info) => (
              <div key={info.label} className="border-l-2 border-flame-500/50 pl-4">
                <p className="text-xs uppercase tracking-wide text-steel-400 mb-1">{info.label}</p>
                <p className="text-sm md:text-base font-semibold text-white">{info.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why clients trust us */}
        <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-6 text-center">
          Why Clients Trust Us
        </h3>
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {trustCards.map((card) => (
            <TrustCard key={card.text} {...card} />
          ))}
        </motion.div>
      </div>

      <DocumentModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}
