'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

const inputStyles =
  'w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus:border-primary focus:ring-2 focus:ring-teal-500/10 outline-none transition';

const labelStyles = 'block text-sm font-medium text-slate-700 mb-1';

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'email' | 'either';
  hasInsurance: 'yes' | 'no' | 'not-sure';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    preferredContact: 'either',
    hasInsurance: 'not-sure',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    console.log('Contact Form Submission:', formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-10 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          Thank You for Reaching Out
        </h3>
        <p className="text-slate-600">
          Our admissions team will be in touch shortly. If you need immediate
          assistance, please call{' '}
          <a href="tel:9492808360" className="font-semibold text-primary">
            (949) 280-8360
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* First Name / Last Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelStyles}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className={cn(inputStyles, errors.firstName && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className={labelStyles}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className={cn(inputStyles, errors.lastName && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Phone / Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={cn(inputStyles, errors.phone && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={cn(inputStyles, errors.email && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Preferred Contact Method */}
      <fieldset>
        <legend className={labelStyles}>Preferred Contact Method</legend>
        <div className="mt-1 flex flex-wrap gap-4">
          {(['phone', 'email', 'either'] as const).map((method) => (
            <label key={method} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={handleChange}
                className="h-4 w-4 border-slate-300 text-primary focus:ring-primary/20"
              />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Insurance */}
      <fieldset>
        <legend className={labelStyles}>Do you have insurance?</legend>
        <div className="mt-1 flex flex-wrap gap-4">
          {([
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'not-sure', label: 'Not Sure' },
          ] as const).map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="hasInsurance"
                value={option.value}
                checked={formData.hasInsurance === option.value}
                onChange={handleChange}
                className="h-4 w-4 border-slate-300 text-primary focus:ring-primary/20"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelStyles}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your situation or any questions you have..."
          className={inputStyles}
        />
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
