export interface Testimonial {
  quote: string;
  name: string;
  relation: string;
  program?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Trust SoCal gave me my life back. The therapists genuinely cared about my recovery, and the structure of the residential program helped me build the habits I needed to stay sober. I am over a year clean now and have never felt more hopeful about my future.',
    name: 'James R.',
    relation: 'Alumni',
    program: 'Residential Treatment',
    rating: 5,
  },
  {
    quote:
      'When our son entered Trust SoCal, we were desperate and terrified. The family therapy program helped us understand addiction in a way we never had before, and we learned how to support his recovery without enabling him. We are so grateful for the entire team.',
    name: 'Linda M.',
    relation: 'Family Member',
    program: 'Family Program',
    rating: 5,
  },
  {
    quote:
      'The IOP program at Trust SoCal allowed me to get the help I needed while still keeping my job. The evening sessions fit my schedule perfectly, and the coping skills I learned have been life-changing. I would recommend this program to anyone who needs flexible, high-quality treatment.',
    name: 'Samantha T.',
    relation: 'Alumni',
    program: 'Intensive Outpatient Program',
    rating: 5,
  },
  {
    quote:
      'I was terrified of detox, but the medical team at Trust SoCal made me feel safe and cared for from the moment I arrived. They managed my withdrawal symptoms so well that the process was far more comfortable than I ever expected. That experience gave me the confidence to continue into residential treatment.',
    name: 'Marcus D.',
    relation: 'Alumni',
    program: 'Medical Detox',
    rating: 5,
  },
  {
    quote:
      'Watching my wife go through treatment at Trust SoCal was the most hopeful experience of the hardest time in our lives. The staff kept me informed, included me in the process, and treated our family with dignity and respect. She completed the program and is thriving today.',
    name: 'Brian K.',
    relation: 'Family Member',
    rating: 5,
  },
  {
    quote:
      'Trust SoCal treated my addiction and my depression at the same time, which no other program had done before. The dual diagnosis approach finally addressed the root causes of my substance use. For the first time in years, I feel like myself again.',
    name: 'Angela W.',
    relation: 'Alumni',
    program: 'Dual Diagnosis Treatment',
    rating: 5,
  },
  {
    quote:
      'The PHP program was exactly the level of support I needed after completing residential treatment. It gave me the structure and accountability to stay on track while I transitioned back into daily life. The staff truly goes above and beyond for every client.',
    name: 'Daniel P.',
    relation: 'Alumni',
    program: 'Partial Hospitalization Program',
    rating: 5,
  },
  {
    quote:
      'As a mother, calling Trust SoCal was the hardest and best decision I have ever made for my daughter. The admissions team walked me through every step, answered all of my questions, and made the process as smooth as possible. My daughter is now six months sober and rebuilding her life.',
    name: 'Patricia S.',
    relation: 'Family Member',
    rating: 5,
  },
];
