'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

const inputStyles =
  'w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus:border-primary focus:ring-2 focus:ring-teal-500/10 outline-none transition';

const labelStyles = 'block text-sm font-medium text-slate-700 mb-1';

const INSURANCE_PROVIDERS = [
  'Aetna',
  'Anthem Blue Cross',
  'Blue Shield of California',
  'Cigna',
  'Humana',
  'Kaiser Permanente',
  'UnitedHealthcare',
  'Other',
] as const;

interface InsuranceFormData {
  fullName: string;
  dateOfBirth: string;
  insuranceProvider: string;
  memberId: string;
  groupNumber: string;
  phone: string;
  email: string;
}

export function InsuranceForm() {
  const [formData, setFormData] = useState<InsuranceFormData>({
    fullName: '',
    dateOfBirth: '',
    insuranceProvider: '',
    memberId: '',
    groupNumber: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InsuranceFormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof InsuranceFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.insuranceProvider) newErrors.insuranceProvider = 'Please select a provider';
    if (!formData.memberId.trim()) newErrors.memberId = 'Member ID is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InsuranceFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    console.log('Insurance Verification Submission:', formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-10 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          Verification Request Received
        </h3>
        <p className="text-slate-600">
          Our team will verify your insurance benefits and contact you within
          one business day. For immediate assistance, call{' '}
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
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelStyles}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={cn(inputStyles, errors.fullName && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label htmlFor="dateOfBirth" className={labelStyles}>
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          required
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={cn(inputStyles, errors.dateOfBirth && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
        />
        {errors.dateOfBirth && (
          <p className="mt-1 text-xs text-red-500">{errors.dateOfBirth}</p>
        )}
      </div>

      {/* Insurance Provider */}
      <div>
        <label htmlFor="insuranceProvider" className={labelStyles}>
          Insurance Provider <span className="text-red-500">*</span>
        </label>
        <select
          id="insuranceProvider"
          name="insuranceProvider"
          required
          value={formData.insuranceProvider}
          onChange={handleChange}
          className={cn(inputStyles, errors.insuranceProvider && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
        >
          <option value="">Select your provider</option>
          {INSURANCE_PROVIDERS.map((provider) => (
            <option key={provider} value={provider}>
              {provider}
            </option>
          ))}
        </select>
        {errors.insuranceProvider && (
          <p className="mt-1 text-xs text-red-500">{errors.insuranceProvider}</p>
        )}
      </div>

      {/* Member ID / Group Number */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="memberId" className={labelStyles}>
            Member ID <span className="text-red-500">*</span>
          </label>
          <input
            id="memberId"
            name="memberId"
            type="text"
            required
            value={formData.memberId}
            onChange={handleChange}
            placeholder="e.g. ABC123456"
            className={cn(inputStyles, errors.memberId && 'border-red-400 focus:border-red-400 focus:ring-red-200')}
          />
          {errors.memberId && (
            <p className="mt-1 text-xs text-red-500">{errors.memberId}</p>
          )}
        </div>

        <div>
          <label htmlFor="groupNumber" className={labelStyles}>
            Group Number
          </label>
          <input
            id="groupNumber"
            name="groupNumber"
            type="text"
            value={formData.groupNumber}
            onChange={handleChange}
            placeholder="Optional"
            className={inputStyles}
          />
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

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Verify My Insurance
      </Button>
    </form>
  );
}
