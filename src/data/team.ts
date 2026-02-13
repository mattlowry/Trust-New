export interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Michael Navarro',
    title: 'Medical Director',
    credentials: 'MD, ABAM',
    bio: 'Dr. Navarro is a board-certified addiction medicine physician with over 15 years of experience treating substance use disorders and co-occurring mental health conditions. He oversees all medical programming at Trust SoCal, including detoxification protocols and medication-assisted treatment. His patient-centered approach prioritizes safety, comfort, and evidence-based care at every stage of recovery.',
    image: '/images/generated/team_michael_navarro.png',
    specialties: [
      'Addiction Medicine',
      'Medical Detoxification',
      'Medication-Assisted Treatment (MAT)',
      'Co-Occurring Disorders',
    ],
  },
  {
    name: 'Sarah Ellison',
    title: 'Clinical Director',
    credentials: 'LMFT, CADC',
    bio: 'Sarah Ellison brings over 12 years of clinical leadership experience in residential and outpatient addiction treatment settings. She is responsible for the design and implementation of all therapeutic programming at Trust SoCal, ensuring that every client receives individualized, trauma-informed care. Her dual background in marriage and family therapy and addiction counseling allows her to address the complex relational dynamics that often accompany substance use disorders.',
    image: '/images/generated/team_sarah_ellison.png',
    specialties: [
      'Clinical Program Development',
      'Trauma-Informed Care',
      'Family Systems Therapy',
      'Dual Diagnosis Treatment',
    ],
  },
  {
    name: 'Jennifer Tran',
    title: 'Director of Nursing',
    credentials: 'RN, BSN',
    bio: 'Jennifer Tran has spent over a decade in behavioral health nursing, specializing in medical detox and psychiatric stabilization. She leads Trust SoCal\'s nursing team in providing 24/7 clinical monitoring, medication administration, and compassionate patient care. Her expertise ensures that every client\'s medical needs are met safely and effectively throughout the treatment process.',
    image: '/images/generated/team_jennifer_tran.png',
    specialties: [
      'Medical Detox Nursing',
      'Psychiatric Nursing',
      'Patient Safety Protocols',
      'Withdrawal Management',
    ],
  },
  {
    name: 'David Reeves',
    title: 'Primary Therapist',
    credentials: 'LCSW',
    bio: 'David Reeves is a licensed clinical social worker with extensive experience in evidence-based addiction and mental health treatment. He specializes in Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT), helping clients develop practical coping skills and emotional regulation strategies. David is passionate about helping individuals uncover the root causes of their addiction and build a meaningful life in recovery.',
    image: '/images/generated/team_david_reeves.png',
    specialties: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Relapse Prevention',
      'Grief and Loss Counseling',
    ],
  },
  {
    name: 'Amanda Castillo',
    title: 'Primary Therapist',
    credentials: 'LPCC',
    bio: 'Amanda Castillo is a licensed professional clinical counselor who brings a warm, empathetic approach to addiction treatment. She has specialized training in EMDR and trauma-focused therapies, which she uses to help clients process past experiences that contribute to substance use. Amanda believes that healing is possible for everyone and works collaboratively with clients to set and achieve their personal recovery goals.',
    image: '/images/generated/team_amanda_castillo.png',
    specialties: [
      'EMDR Therapy',
      'Trauma-Focused Treatment',
      'Motivational Interviewing',
      'Young Adult Addiction',
    ],
  },
  {
    name: 'Robert Kim',
    title: 'Family Therapist',
    credentials: 'LMFT',
    bio: 'Robert Kim is a licensed marriage and family therapist who specializes in rebuilding family relationships damaged by addiction. He facilitates family therapy sessions, multi-family groups, and educational workshops that help loved ones understand the disease of addiction and develop healthy communication patterns. Robert believes that strong family involvement is one of the most powerful predictors of long-term recovery success.',
    image: '/images/generated/team_robert_kim.png',
    specialties: [
      'Family Therapy',
      'Codependency Education',
      'Communication Skills Training',
      'Family Recovery Planning',
    ],
  },
  {
    name: 'Christina Morales',
    title: 'Admissions Director',
    credentials: 'CADC',
    bio: 'Christina Morales is a certified alcohol and drug counselor with firsthand knowledge of the recovery journey. She leads Trust SoCal\'s admissions team, ensuring that every individual who reaches out for help receives a compassionate, efficient, and barrier-free path to treatment. Christina and her team handle insurance verification, clinical pre-assessments, and logistics so that clients and families can focus on what matters most: getting well.',
    image: '/images/generated/team_christina_morales.png',
    specialties: [
      'Admissions Coordination',
      'Insurance Verification',
      'Crisis Intervention',
      'Client Advocacy',
    ],
  },
];
