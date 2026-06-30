import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloatButton from './components/common/WhatsAppFloatButton';
import Toast from './components/common/Toast';
import { useToast } from './hooks/useToast';

import Hero from './sections/Hero';
import QualityBadgeStrip from './sections/QualityBadgeStrip';
import NoticeMarquee from './sections/NoticeMarquee';
import About from './sections/About';
import Services from './sections/Services';
import Products from './sections/Products';
import WhyChooseUs from './sections/WhyChooseUs';
import Certifications from './sections/Certifications';
import TrustBanner from './sections/TrustBanner';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import CTA from './components/CTA';

export default function App() {
  const { toasts, push, dismiss } = useToast();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <QualityBadgeStrip />
        <NoticeMarquee />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Certifications />
        <TrustBanner />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact onToast={(msg) => push(msg, 'success')} />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFloatButton />
      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
