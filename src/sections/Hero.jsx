import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { hero } from '../data/siteContent';
import { staggerContainer, staggerItem, heroHeading } from '../lib/animations';
import { buildWhatsAppLink } from '../lib/whatsapp';

const initialBookForm = {
  name: '',
  address: '',
  phone: '',
  pan: '',
};

export default function Hero() {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [bookForm, setBookForm] = useState(initialBookForm);

  useEffect(() => {
    function openBookModal() {
      setBookModalOpen(true);
    }

    window.addEventListener('open-book-connection', openBookModal);
    return () => window.removeEventListener('open-book-connection', openBookModal);
  }, []);

  function handleBookChange(event) {
    const { name, value } = event.target;
    setBookForm((current) => ({ ...current, [name]: value }));
  }

  function closeBookModal() {
    setBookModalOpen(false);
  }

  function submitBookLead(event) {
    event.preventDefault();
    const message = [
      'Hello DLB Petroleum, I want to book a connection.',
      '',
      `Name: ${bookForm.name}`,
      `Address: ${bookForm.address}`,
      `Phone Number: ${bookForm.phone}`,
      `PAN Number: ${bookForm.pan}`,
    ].join('\n');

    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    setBookForm(initialBookForm);
    closeBookModal();
  }

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#101010] pt-48 pb-16 md:pt-56"
      >
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#b80d17]/85" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <motion.div
            variants={staggerContainer(0.18)}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span
              variants={staggerItem}
              className="mb-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-white/90"
            >
              <i className="fas fa-fire text-white" aria-hidden="true" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={heroHeading}
              className="mb-6 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-[72px]"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mb-8 max-w-2xl text-lg font-semibold text-white md:text-xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.ul variants={staggerContainer(0.1)} className="mb-8 flex flex-col gap-3">
              {hero.features.map((feature) => (
                <motion.li
                  key={feature.text}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-sm font-medium text-white md:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white text-[#e30613]">
                    <i className={`fas ${feature.icon} text-sm`} aria-hidden="true" />
                  </span>
                  {feature.text}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-5">
              <a
                href={hero.ctaPrimary.href}
                className="hero-angle-btn bg-[#e30613] text-white hover:bg-white hover:text-[#e30613]"
              >
                {hero.ctaPrimary.label}
                <i className="fas fa-arrow-right text-lg" aria-hidden="true" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="hero-angle-btn bg-white text-[#e30613] hover:bg-[#5d0207] hover:text-white"
              >
                {hero.ctaSecondary.label}
                <i className="fas fa-arrow-right text-lg" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setBookModalOpen(true)}
                className="hero-angle-btn bg-[#5d0207] text-white hover:bg-white hover:text-[#e30613]"
              >
                Book Connection
                <i className="fas fa-arrow-right text-lg" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel-300"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <i className="fas fa-chevron-down text-xs animate-bounce" aria-hidden="true" />
        </motion.div>
      </section>

      {bookModalOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden bg-white shadow-card">
            <div className="flex items-center justify-between bg-[#bd1b27] px-5 py-4 text-white">
              <h2 className="font-display text-xl font-semibold">Book Connection</h2>
              <button
                type="button"
                onClick={closeBookModal}
                aria-label="Close book connection form"
                className="flex h-9 w-9 items-center justify-center text-white hover:bg-white/10"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={submitBookLead} className="grid gap-4 p-5">
              <label className="grid gap-1.5 text-sm font-semibold text-navy-800">
                Name
                <input
                  name="name"
                  value={bookForm.name}
                  onChange={handleBookChange}
                  required
                  className="border border-steel-200 px-4 py-3 font-body text-sm font-normal text-navy-800 outline-none focus:border-[#bd1b27]"
                  placeholder="Enter full name"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-semibold text-navy-800">
                Address
                <textarea
                  name="address"
                  value={bookForm.address}
                  onChange={handleBookChange}
                  required
                  rows="3"
                  className="resize-none border border-steel-200 px-4 py-3 font-body text-sm font-normal text-navy-800 outline-none focus:border-[#bd1b27]"
                  placeholder="Enter complete address"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-semibold text-navy-800">
                Phone Number
                <input
                  name="phone"
                  type="tel"
                  value={bookForm.phone}
                  onChange={handleBookChange}
                  required
                  className="border border-steel-200 px-4 py-3 font-body text-sm font-normal text-navy-800 outline-none focus:border-[#bd1b27]"
                  placeholder="Enter phone number"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-semibold text-navy-800">
                PAN Number
                <input
                  name="pan"
                  value={bookForm.pan}
                  onChange={handleBookChange}
                  required
                  className="uppercase border border-steel-200 px-4 py-3 font-body text-sm font-normal text-navy-800 outline-none focus:border-[#bd1b27]"
                  placeholder="Enter PAN number"
                />
              </label>

              <button
                type="submit"
                className="hero-angle-btn mt-2 w-fit bg-[#e30613] text-white hover:bg-[#5d0207]"
              >
                Submit Lead
                <i className="fas fa-arrow-right text-lg" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
