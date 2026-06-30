export default function Marquee({ text, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-navy-900 py-4 ${className}`}>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <span
            key={copy}
            className="flex shrink-0 items-center font-display text-lg md:text-2xl font-semibold uppercase tracking-wide text-white/90 pr-8"
            aria-hidden={copy === 1}
          >
            {text}
            <i className="fas fa-circle text-flame-500 text-[6px] mx-6" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
