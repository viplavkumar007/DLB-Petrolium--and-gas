import { contact } from '../data/siteContent';

/**
 * Builds a wa.me deep link with an optional custom message.
 * Falls back to the brand default enquiry message.
 */
export function buildWhatsAppLink(customMessage) {
  const message = customMessage || contact.whatsappDefaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`;
}

export function buildMailtoLink(subject, body) {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  return `mailto:${contact.emailPrimary}?${params.toString()}`;
}

export function buildTelLink() {
  return `tel:${contact.phone.replace(/\s+/g, '')}`;
}
