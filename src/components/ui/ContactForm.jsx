import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { buildMailtoLink } from '../../lib/whatsapp';

const initialState = { name: '', phone: '', email: '', city: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!/^[0-9+\-\s()]{8,15}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please add a short message.';
  return errors;
}

function Field({ label, name, type = 'text', value, error, onChange, as = 'input', required }) {
  const [focused, setFocused] = useState(false);
  const Component = as;
  const showFloat = focused || value.length > 0;

  return (
    <div className="relative">
      <Component
        id={name}
        name={name}
        type={as === 'input' ? type : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={as === 'textarea' ? 4 : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-md border bg-white px-4 pt-5 pb-2 text-sm text-navy-800 placeholder-transparent transition-colors duration-200 focus:outline-none resize-none ${
          error
            ? 'border-crimson-500 focus:border-crimson-600'
            : 'border-navy-200 focus:border-flame-500'
        }`}
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          showFloat ? 'top-1.5 text-[10px] uppercase tracking-wide' : 'top-3.5 text-sm'
        } ${error ? 'text-crimson-600' : showFloat ? 'text-flame-600' : 'text-steel-400'}`}
      >
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-crimson-600">
          <i className="fas fa-circle-exclamation" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ onSuccess }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('loading');

    window.setTimeout(() => {
      setStatus('success');
      const emailBody = [
        'New enquiry from the DLB Petroleum website.',
        '',
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email || 'N/A'}`,
        `City: ${values.city || 'N/A'}`,
        '',
        'Message:',
        values.message,
      ].join('\n');
      window.location.href = buildMailtoLink('Website Enquiry Lead', emailBody);
      onSuccess?.(`New enquiry email prepared for ${values.name} (${values.city || 'N/A'}).`);
      window.setTimeout(() => {
        setValues(initialState);
        setStatus('idle');
      }, 2200);
    }, 1200);
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-xl border border-flame-200 bg-flame-50 px-6 py-16 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flame-gradient shadow-glow">
          <i className="fas fa-check text-white text-2xl" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-navy-800">Message Sent!</h3>
        <p className="text-sm text-steel-600 max-w-sm">
          Thank you for reaching out. Our team will get back to you shortly regarding your enquiry.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Your Name" name="name" value={values.name} error={errors.name} onChange={handleChange} required />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={handleChange} required />
        <Field label="Email Address" name="email" type="email" value={values.email} error={errors.email} onChange={handleChange} />
      </div>
      <Field label="City" name="city" value={values.city} error={errors.city} onChange={handleChange} />
      <Field label="Message" name="message" as="textarea" value={values.message} error={errors.message} onChange={handleChange} required />

      <div className="flex items-center mt-1">
        <Button type="submit" variant="primary" loading={status === 'loading'} className="w-full sm:w-auto" icon="fa-arrow-right">
          {status === 'loading' ? 'Sending' : 'Send Enquiry'}
        </Button>
      </div>
    </form>
  );
}
