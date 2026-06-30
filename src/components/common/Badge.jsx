export default function Badge({ children, icon = 'fa-check', tone = 'success' }) {
  const tones = {
    success: 'bg-flame-50 text-flame-600 border-flame-200',
    navy: 'bg-navy-50 text-navy-700 border-navy-200',
    crimson: 'bg-crimson-50 text-crimson-600 border-crimson-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone] || tones.success}`}
    >
      <i className={`fas ${icon}`} aria-hidden="true" />
      {children}
    </span>
  );
}
