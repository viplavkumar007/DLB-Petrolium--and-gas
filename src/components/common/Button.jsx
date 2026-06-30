import { motion } from 'framer-motion';

/**
 * Industrial clipped-corner button.
 * variants: primary (flame gradient), secondary (navy outline), ghost (white/transparent)
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  loading = false,
  icon,
  className = '',
  ...props
}) {
  const base =
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display font-semibold uppercase tracking-wide text-sm clip-corner-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-400 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-flame-gradient text-white shadow-card hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:shadow-card',
    secondary:
      'bg-transparent text-white border-2 border-white/70 hover:bg-white hover:text-navy-800 hover:-translate-y-0.5 active:translate-y-0',
    navy: 'bg-navy-700 text-white hover:bg-navy-600 hover:-translate-y-0.5 active:translate-y-0 shadow-card',
    outline:
      'bg-transparent text-navy-700 border-2 border-navy-700 hover:bg-navy-700 hover:text-white hover:-translate-y-0.5 active:translate-y-0',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {loading ? (
        <span
          className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
          aria-hidden="true"
        />
      ) : (
        <>
          <span>{children}</span>
          {icon && <i className={`fas ${icon} text-xs`} aria-hidden="true" />}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      disabled={loading}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  );
}
