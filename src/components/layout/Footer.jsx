import { brand, contact, footer, nav, services } from '../../data/siteContent';
import { buildTelLink } from '../../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={brand.logo} alt={brand.fullName} className="h-14 w-auto bg-white rounded p-1.5 mb-5" />
          <p className="text-sm leading-relaxed">{footer.about}</p>
        </div>

        <div>
          <h3 className="font-display text-white uppercase tracking-wide text-sm mb-5">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-flame-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-white uppercase tracking-wide text-sm mb-5">Services</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-flame-400 transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-white uppercase tracking-wide text-sm mb-5">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <i className="fas fa-location-dot mt-1 text-flame-400" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <i className="fas fa-phone text-flame-400" aria-hidden="true" />
              <a href={buildTelLink()} className="hover:text-flame-400 transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <i className="fas fa-envelope text-flame-400" aria-hidden="true" />
              <a href={`mailto:${contact.emailPrimary}`} className="hover:text-flame-400 transition-colors break-all">
                {contact.emailPrimary}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <i className="fas fa-globe text-flame-400" aria-hidden="true" />
              <span>{brand.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-steel-400">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-1.5">
            <i className="fas fa-shield-halved text-flame-500" aria-hidden="true" />
            Government Registered Company — CIN: U35202AS2023PTC025055
          </p>
        </div>
      </div>
    </footer>
  );
}
