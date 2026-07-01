// =====================================================================
// DLB PETROLEUM — SITE CONTENT
// Single source of truth for all copy, links, and structured data.
// =====================================================================

import logoImg from '../assets/logo/dlb-logo.png';

export const brand = {
  name: 'DLB Petroleum',
  fullName: 'DLB Petroleum Oil and Gas Corporation Pvt. Ltd.',
  tagline: 'Fuelling Growth. Energizing Tomorrow.',
  shortTagline: 'Trusted Oil & Gas Distribution Across India',
  logo: logoImg,
  website: 'www.dlbpetroleum.online',
};

export const contact = {
  phone: '+91 6289 142 533',
  phoneRaw: '916289142533',
  emailPrimary: 'dlbpetrolium@gmail.com',
  emailSecondary: 'rdaslaskar76@gmail.com',
  website: 'https://www.dlbpetroleum.online',
  address:
    '2nd Floor, Promodh Bhawan, Ambicapatty, Near Durgasankar Patshala, Silchar – 788004, Assam, India',
  whatsappNumber: '916289142533',
  whatsappDefaultMessage:
    'Hello DLB Petroleum, I want to enquire about oil and gas distribution services.',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'COCO Brochure', href: '#coco-brochure' },
  { label: 'DODO Brochure', href: '#dodo-brochure' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'PAN India Oil & Gas Distribution',
  headline: 'DLB Petroleum Oil & Gas Corporation Pvt. Ltd.',
  subheadline: 'Trusted Oil & Gas Distribution Services Across India',
  features: [
    { icon: 'fa-truck-fast', text: 'Reliable oil and gas distribution network' },
    { icon: 'fa-map-location-dot', text: 'PAN India supply and service coverage' },
    {
      icon: 'fa-industry',
      text: 'Professional energy solutions for commercial and industrial needs',
    },
  ],
  ctaPrimary: { label: 'About Us', href: '#about' },
  ctaSecondary: { label: 'Contact Us', href: '#contact' },
};

export const aboutBadge = {
  title: 'DLB Petroleum Oil & Gas Corporation Pvt. Ltd.',
  text: 'DLB Petroleum Oil & Gas Corporation Pvt. Ltd. is dedicated to providing reliable oil and gas distribution services across India with a focus on trust, efficiency, safety, and professional service.',
  linkLabel: 'Read more',
  href: '#about',
};

export const noticeItems = [
  'PAN INDIA OIL & GAS DISTRIBUTION',
  'RELIABLE SUPPLY NETWORK',
  'TRUSTED ENERGY PARTNER',
];

export const about = {
  eyebrow: 'About The Company',
  title: 'Building a Trusted Name in Petroleum & Gas Distribution',
  paragraphs: [
    'DLB Petroleum Oil & Gas Corporation Pvt. Ltd. provides oil and gas distribution services across India. The company focuses on dependable supply, professional coordination, and customer-focused energy distribution solutions.',
    'From Assam to PAN India operations, DLB Petroleum aims to build a strong reputation in the petroleum and gas distribution sector through consistency, safety, and dedicated business partnerships.',
  ],
  bullets: [
    'Oil and gas distribution',
    'PAN India service coverage',
    'Reliable business communication',
    'Professional and timely support',
    'Corporate office in Silchar, Assam',
  ],
};

export const marqueeText =
  'OIL & GAS DISTRIBUTION • PAN INDIA SERVICE • RELIABLE SUPPLY • PROFESSIONAL ENERGY SOLUTIONS • ';

export const services = [
  {
    icon: 'fa-oil-well',
    title: 'Oil Distribution',
    description:
      'Reliable oil distribution solutions for business, industrial, and commercial requirements.',
  },
  {
    icon: 'fa-fire-flame-curved',
    title: 'Gas Distribution',
    description:
      'Professional gas distribution services with focus on safety, availability, and dependable supply.',
  },
  {
    icon: 'fa-route',
    title: 'PAN India Supply Network',
    description: 'Distribution support and business coordination across multiple regions of India.',
  },
  {
    icon: 'fa-building',
    title: 'Commercial Energy Solutions',
    description: 'Oil and gas supply support for commercial and business customers.',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Supply Support',
    description: 'Professional distribution assistance for industrial energy requirements.',
  },
  {
    icon: 'fa-handshake',
    title: 'Business Enquiry & Partnership Support',
    description:
      'Dedicated communication for new enquiries, supply coordination, and business partnerships.',
  },
];

export const productItems = [
  { icon: 'fa-barrel', title: 'Petroleum Products' },
  { icon: 'fa-gas-pump', title: 'Gas Supply Solutions' },
  { icon: 'fa-truck-ramp-box', title: 'Commercial Fuel Distribution' },
  { icon: 'fa-bolt', title: 'Industrial Energy Supply' },
  { icon: 'fa-boxes-stacked', title: 'Bulk Supply Coordination' },
  { icon: 'fa-people-arrows', title: 'Distribution Partnership Support' },
];

export const whyChooseUs = [
  { icon: 'fa-earth-asia', title: 'PAN India Reach' },
  { icon: 'fa-shield-halved', title: 'Trusted Distribution Support' },
  { icon: 'fa-comments', title: 'Professional Communication' },
  { icon: 'fa-lock', title: 'Safe & Reliable Supply' },
  { icon: 'fa-bullseye', title: 'Industry-Focused Solutions' },
  { icon: 'fa-bolt-lightning', title: 'Quick Enquiry Response' },
];

// ---------------------------------------------------------------------
// Certifications & Legal Compliance — sourced from uploaded MCA documents
// ---------------------------------------------------------------------

export const corporateInfo = [
  { label: 'Company Name', value: 'DLB Petroleum Oil & Gas Corporation Pvt. Ltd.' },
  { label: 'Incorporated', value: '14 August 2023' },
  { label: 'Corporate Identity Number', value: 'U35202AS2023PTC025055' },
  { label: 'Registered Office', value: 'Silchar, Assam' },
  { label: 'Business Type', value: 'Private Limited Company' },
  { label: 'Coverage', value: 'PAN India' },
];

export const certificates = [
  {
    id: 'incorporation',
    icon: 'fa-certificate',
    title: 'Certificate of Incorporation',
    issuer: 'Ministry of Corporate Affairs, Government of India',
    description:
      'Incorporated on 14 August 2023 under the Companies Act, 2013. CIN: U35202AS2023PTC025055. Company Limited by Shares.',
    badge: 'Government Registered Company',
    file: '/documents/certificate-of-incorporation.pdf',
    buttonLabel: 'View Certificate of Incorporation',
  },
  {
    id: 'moa',
    icon: 'fa-file-contract',
    title: 'Memorandum of Association (MOA)',
    issuer: 'Registrar of Companies, Assam',
    description:
      "Official Memorandum of Association defining the company's legal objectives, petroleum operations, oil & gas distribution activities, fuel handling, CNG, LNG, LPG, biofuels, lubricants, import/export, transportation, wholesale, retail and industrial energy solutions.",
    badge: 'Official Company Document',
    file: '/documents/memorandum-of-association.pdf',
    buttonLabel: 'View Memorandum of Association',
  },
  {
    id: 'aoa',
    icon: 'fa-scale-balanced',
    title: 'Articles of Association (AOA)',
    issuer: 'Registrar of Companies, Assam',
    description:
      "Official Articles of Association governing the company's corporate structure, management, shareholder rights and operational framework under the Companies Act, 2013.",
    badge: 'Corporate Governance',
    file: '/documents/articles-of-association.pdf',
    buttonLabel: 'View Articles of Association',
  },
];

export const trustCards = [
  { icon: 'fa-circle-check', text: 'Government Registered Company' },
  { icon: 'fa-circle-check', text: 'MCA Incorporated' },
  { icon: 'fa-circle-check', text: 'Private Limited Entity' },
  { icon: 'fa-circle-check', text: 'PAN India Distribution' },
  { icon: 'fa-circle-check', text: 'Corporate Oil & Gas Solutions' },
  { icon: 'fa-circle-check', text: 'Professional Business Operations' },
];

export const trustBanner = {
  text: 'Government Registered • Ministry of Corporate Affairs Incorporated • Trusted Oil & Gas Distribution Partner Across India',
};

// ---------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------

const profileGalleryItems = Array.from({ length: 35 }, (_, index) => {
  const pageNumber = String(index + 1).padStart(2, '0');

  return {
    title: `Company Profile Page ${index + 1}`,
    image: `/gallery/dlb-company-profile-page-${pageNumber}.jpg`,
  };
});

export const galleryItems = [
  {
    title: 'Mission Milestone 20 Days Left',
    image: '/gallery/mission-milestone-20-days-left.png',
  },
  ...profileGalleryItems,
];

export const cocoBrochures = [
  {
    title: 'COCO Low Investment High Profit',
    image: '/coco-brochure/coco-low-investment-high-profit.png',
    downloadName: 'dlb-gas-coco-low-investment-high-profit.png',
  },
  {
    title: 'COCO Distributorship 95 Lakh',
    image: '/coco-brochure/coco-distributorship-95-lakh.png',
    downloadName: 'dlb-gas-coco-distributorship-95-lakh.png',
  },
  {
    title: 'COCO Dealership 35 Lakh',
    image: '/coco-brochure/coco-dealership-35-lakh.png',
    downloadName: 'dlb-gas-coco-dealership-35-lakh.png',
  },
  {
    title: 'COCO Brochure Page 1 - Smart Investment',
    image: '/coco-brochure/coco-model-investment.png',
    downloadName: 'coco-model-investment.png',
  },
  {
    title: 'COCO Brochure Page 2 - Investment Plan Highlights',
    image: '/coco-brochure/coco-investment-plan-highlights.png',
    downloadName: 'dlb-gas-investment-plan-highlights.png',
  },
  {
    title: 'COCO Brochure Page 3 - Build Today Earn Tomorrow',
    image: '/coco-brochure/coco-build-today-earn-tomorrow.png',
    downloadName: 'coco-build-today-earn-tomorrow.png',
  },
];

export const dodoBrochures = [
  {
    title: 'DODO Business Proposal',
    image: '/dodo-brochure/dodo-business-proposal.png',
    downloadName: 'dlb-gas-dodo-business-proposal.png',
  },
  {
    title: 'DODO 2KL Fuel Bowser Quotation',
    image: '/dodo-brochure/dodo-2kl-fuel-bowser-quotation.png',
    downloadName: 'dlb-gas-dodo-2kl-fuel-bowser-quotation.png',
  },
  {
    title: 'DODO Smart Business Bowser System',
    image: '/dodo-brochure/dodo-smart-business-bowser-system.png',
    downloadName: 'dlb-gas-dodo-smart-business-bowser-system.png',
  },
  {
    title: 'DODO Application Fee and Documents',
    image: '/dodo-brochure/dodo-application-fee-documents.png',
    downloadName: 'dlb-gas-dodo-application-fee-documents.png',
  },
];

// ---------------------------------------------------------------------
// Testimonials (realistic placeholder content, Indian business context)
// ---------------------------------------------------------------------

export const testimonials = [
  {
    name: 'Ranjit Sharma',
    role: 'Logistics Manager, Northeast Freight Co.',
    quote:
      'DLB Petroleum has been a dependable supply partner for our fleet operations. Their coordination and timely response have made fuel logistics far easier to manage.',
  },
  {
    name: 'Ayesha Begum',
    role: 'Procurement Head, Industrial Manufacturing Unit',
    quote:
      'Working with DLB Petroleum for our industrial energy requirements has been smooth and professional. Communication is clear and supply has stayed consistent.',
  },
  {
    name: 'Vikram Nair',
    role: 'Business Owner, Commercial Enterprise',
    quote:
      'Their PAN India coverage and responsiveness to enquiries set them apart. A trustworthy distribution partner for growing businesses.',
  },
];

// ---------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------

export const faqs = [
  {
    question: 'What areas does DLB Petroleum serve?',
    answer:
      'DLB Petroleum provides oil and gas distribution services across India, with corporate operations based out of Silchar, Assam, and PAN India coverage for commercial and industrial clients.',
  },
  {
    question: 'What types of products and services does DLB Petroleum offer?',
    answer:
      'We offer oil distribution, gas distribution, PAN India supply network coordination, commercial energy solutions, industrial supply support, and dedicated business partnership assistance.',
  },
  {
    question: 'How can I request a business enquiry or quote?',
    answer:
      'You can reach us directly via WhatsApp, phone, or by submitting the contact form on this website. Our team responds promptly to all distribution and partnership enquiries.',
  },
  {
    question: 'Is DLB Petroleum a registered company?',
    answer:
      'Yes. DLB Petroleum Oil and Gas Corporation Pvt. Ltd. is incorporated under the Ministry of Corporate Affairs, Government of India (CIN: U35202AS2023PTC025055). Our incorporation certificate, MOA, and AOA are available for review in the Certifications section of this website.',
  },
  {
    question: 'Does DLB Petroleum work with industrial and commercial clients?',
    answer:
      'Yes, we support both commercial and industrial energy requirements, including bulk supply coordination and tailored distribution partnerships.',
  },
];

// ---------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------

export const footer = {
  about:
    'DLB Petroleum Oil & Gas Corporation Pvt. Ltd. is a government-registered, PAN India oil and gas distribution company committed to reliable, safe, and professional energy supply solutions.',
  quickLinks: nav,
  servicesLinks: services.map((s) => s.title),
  copyright: '© 2026 DLB Petroleum Oil & Gas Corporation Pvt. Ltd. All Rights Reserved.',
};
