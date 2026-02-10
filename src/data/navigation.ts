// ---------------------------------------------------------------------------
// Trust SoCal -- Centralized Navigation Data
// ---------------------------------------------------------------------------

export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

// ---------------------------------------------------------------------------
// Main Navigation (Header)
// ---------------------------------------------------------------------------

export const mainNavigation: NavItem[] = [
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Treatment Programs',
    href: '/programs',
    children: [
      { name: 'Detox', href: '/programs/detox' },
      { name: 'Residential', href: '/programs/residential' },
      { name: 'Dual Diagnosis', href: '/programs/dual-diagnosis' },
      { name: 'Trauma-Informed Care', href: '/programs/trauma' },
      { name: 'Family Support', href: '/programs/family' },
      { name: 'Aftercare', href: '/programs/aftercare' },
      { name: 'IOP', href: '/programs/iop' },
      { name: 'PHP', href: '/programs/php' },
    ],
  },
  {
    name: 'Addiction Types',
    href: '/addiction-types',
    children: [
      { name: 'Alcohol', href: '/addiction-types/alcohol' },
      { name: 'Opioids', href: '/addiction-types/opioids' },
      { name: 'Heroin', href: '/addiction-types/heroin' },
      { name: 'Fentanyl', href: '/addiction-types/fentanyl' },
      { name: 'Methamphetamine', href: '/addiction-types/methamphetamine' },
      { name: 'Cocaine', href: '/addiction-types/cocaine' },
      { name: 'Benzodiazepines', href: '/addiction-types/benzodiazepines' },
      { name: 'Prescription Drugs', href: '/addiction-types/prescription-drugs' },
      { name: 'Marijuana', href: '/addiction-types/marijuana' },
    ],
  },
  {
    name: 'Areas Served',
    href: '/areas-served',
    children: [
      { name: 'Orange County', href: '/areas-served' },
      { name: 'Los Angeles County', href: '/areas-served' },
      { name: 'San Diego County', href: '/areas-served' },
    ],
  },
  {
    name: 'Insurance',
    href: '/insurance',
  },
  {
    name: 'Admissions',
    href: '/admissions',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

// ---------------------------------------------------------------------------
// Footer -- Programs Column
// ---------------------------------------------------------------------------

export const footerPrograms: { name: string; href: string }[] = [
  { name: 'Drug & Alcohol Detox', href: '/programs/detox' },
  { name: 'Residential Treatment', href: '/programs/residential' },
  { name: 'Dual Diagnosis Treatment', href: '/programs/dual-diagnosis' },
  { name: 'IOP', href: '/programs/iop' },
  { name: 'PHP', href: '/programs/php' },
  { name: 'Mental Health Treatment', href: '/programs/dual-diagnosis' },
];

// ---------------------------------------------------------------------------
// Footer -- Company Column
// ---------------------------------------------------------------------------

export const footerCompany: { name: string; href: string }[] = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];
