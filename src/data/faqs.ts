export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'treatment' | 'insurance' | 'admissions' | 'detox' | 'substance';
  pages?: string[];
}

export const faqs: FAQ[] = [
  // ─── General (10) ───────────────────────────────────────────────────────────
  {
    question: 'What is Trust SoCal?',
    answer:
      'Trust SoCal is a licensed addiction treatment center located in Southern California that provides comprehensive substance abuse and mental health services. We offer a full continuum of care including medical detox, residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) programs. Our evidence-based approach combines clinical therapy, holistic wellness, and long-term aftercare planning to support lasting recovery.',
    category: 'general',
    pages: ['home', 'about'],
  },
  {
    question: 'Where is Trust SoCal located?',
    answer:
      'Trust SoCal is located in Southern California, offering clients access to a peaceful, recovery-focused environment with year-round mild weather. Our facility is conveniently situated for residents throughout the greater Los Angeles and Orange County areas. The location provides a serene setting that supports healing while remaining accessible to families for visits and family therapy sessions.',
    category: 'general',
    pages: ['home', 'about', 'contact'],
  },
  {
    question: 'Is Trust SoCal accredited?',
    answer:
      'Yes, Trust SoCal is fully accredited and licensed by the State of California Department of Health Care Services (DHCS). We maintain all required certifications and adhere to the highest standards of clinical care and patient safety. Our staff holds current professional licenses and credentials in their respective fields.',
    category: 'general',
    pages: ['about'],
  },
  {
    question: 'How long has Trust SoCal been operating?',
    answer:
      'Trust SoCal has been providing addiction treatment services in Southern California for several years, building a strong reputation for compassionate, effective care. Our leadership team brings decades of combined experience in behavioral health and substance abuse treatment. We continue to grow and evolve our programs based on the latest clinical research and best practices.',
    category: 'general',
    pages: ['about'],
  },
  {
    question: 'What makes Trust SoCal different from other rehab centers?',
    answer:
      'Trust SoCal stands out through our individualized treatment approach, low client-to-therapist ratios, and a comprehensive continuum of care all under one roof. We combine evidence-based clinical therapies with holistic modalities such as yoga, meditation, and nutrition counseling to treat the whole person. Our dedicated aftercare team also provides ongoing support for up to a year after completing treatment.',
    category: 'general',
    pages: ['home', 'about', 'programs'],
  },
  {
    question: 'Is treatment at Trust SoCal confidential?',
    answer:
      'Absolutely. Trust SoCal adheres to all federal HIPAA regulations and 42 CFR Part 2 confidentiality requirements that specifically protect substance abuse treatment records. Your participation in treatment, medical records, and personal information are never shared without your written consent. We take privacy seriously and maintain strict protocols to safeguard every client\'s information.',
    category: 'general',
    pages: ['about', 'admissions'],
  },
  {
    question: 'What areas does Trust SoCal serve?',
    answer:
      'Trust SoCal serves clients from throughout Southern California, including Los Angeles County, Orange County, San Diego County, the Inland Empire, and Ventura County. We also welcome clients from across the United States who are seeking high-quality addiction treatment in a supportive California environment. Out-of-state clients often benefit from the geographic distance, which helps create a fresh start away from familiar triggers.',
    category: 'general',
    pages: ['about', 'contact'],
  },
  {
    question: 'Does Trust SoCal offer gender-specific treatment?',
    answer:
      'Trust SoCal offers both co-ed and gender-specific programming depending on the level of care and clinical needs of each client. Gender-specific groups address topics such as trauma, relationships, and self-esteem in a safe, supportive environment. Our clinical team evaluates each individual during intake to determine the most appropriate treatment setting.',
    category: 'general',
    pages: ['about', 'programs'],
  },
  {
    question: 'Can I visit a loved one during treatment?',
    answer:
      'Yes, Trust SoCal encourages family involvement in the recovery process and offers designated visitation times during treatment. Family visits are typically scheduled after the client has completed an initial stabilization period, usually within the first week. We also offer family therapy sessions and family education workshops to help loved ones understand addiction and support long-term recovery.',
    category: 'general',
    pages: ['about', 'admissions'],
  },
  {
    question: 'What is the success rate of addiction treatment?',
    answer:
      'Success in addiction treatment depends on many factors, including the length of treatment, level of family support, and participation in aftercare programs. Research consistently shows that individuals who complete a full course of treatment and engage in ongoing recovery support have significantly better outcomes. At Trust SoCal, we measure success not only by sobriety but also by improvements in mental health, relationships, employment, and overall quality of life.',
    category: 'general',
    pages: ['about', 'programs'],
  },

  // ─── Treatment (10) ─────────────────────────────────────────────────────────
  {
    question: 'What types of treatment programs does Trust SoCal offer?',
    answer:
      'Trust SoCal offers a full continuum of care including medical detoxification, residential (inpatient) treatment, partial hospitalization program (PHP), and intensive outpatient program (IOP). Each level of care is designed to meet clients where they are in their recovery journey. Clients may step down through levels of care as they progress, ensuring a smooth transition back to everyday life.',
    category: 'treatment',
    pages: ['home', 'programs'],
  },
  {
    question: 'How long does addiction treatment last?',
    answer:
      'The length of addiction treatment varies based on individual needs, but most treatment programs range from 30 to 90 days. Medical detox typically takes 5 to 10 days, residential treatment is usually 30 to 60 days, and outpatient programs can continue for several months. Trust SoCal creates individualized treatment plans and adjusts the duration based on each client\'s progress and clinical recommendations.',
    category: 'treatment',
    pages: ['programs', 'admissions'],
  },
  {
    question: 'What is the difference between inpatient and outpatient treatment?',
    answer:
      'Inpatient (residential) treatment requires clients to live at the facility full-time, providing 24/7 medical supervision, structured programming, and a substance-free environment. Outpatient treatment allows clients to live at home while attending scheduled therapy sessions and groups several times per week. Trust SoCal offers both options and helps clients determine which level of care best fits their clinical needs and personal circumstances.',
    category: 'treatment',
    pages: ['programs'],
  },
  {
    question: 'What evidence-based therapies are used?',
    answer:
      'Trust SoCal utilizes a range of evidence-based therapies including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Eye Movement Desensitization and Reprocessing (EMDR), Motivational Interviewing (MI), and trauma-informed care approaches. These therapies are proven by clinical research to effectively treat substance use disorders and co-occurring mental health conditions. Our licensed therapists tailor the therapeutic approach to each client\'s unique needs and goals.',
    category: 'treatment',
    pages: ['programs', 'about'],
  },
  {
    question: 'What is dual diagnosis treatment?',
    answer:
      'Dual diagnosis treatment addresses both a substance use disorder and a co-occurring mental health condition, such as depression, anxiety, PTSD, or bipolar disorder, simultaneously. Research shows that treating both conditions together leads to significantly better outcomes than treating them separately. Trust SoCal\'s clinical team includes psychiatrists, therapists, and counselors trained in integrated dual diagnosis care.',
    category: 'treatment',
    pages: ['programs'],
  },
  {
    question: 'Do you offer medication-assisted treatment (MAT)?',
    answer:
      'Yes, Trust SoCal offers medication-assisted treatment (MAT) as part of our comprehensive approach to addiction recovery. MAT combines FDA-approved medications such as buprenorphine (Suboxone), naltrexone (Vivitrol), and others with behavioral therapy and counseling. Our medical team carefully evaluates each client to determine if MAT is appropriate and monitors medication use throughout treatment.',
    category: 'treatment',
    pages: ['programs', 'detox'],
  },
  {
    question: 'What is a typical day like in residential treatment?',
    answer:
      'A typical day at Trust SoCal begins with a morning wellness activity such as yoga or meditation, followed by a nutritious breakfast. The day includes individual therapy, group counseling sessions, educational workshops, and holistic activities, with meals and breaks scheduled throughout. Evenings include 12-step or alternative recovery meetings, recreational time, and reflection before lights out.',
    category: 'treatment',
    pages: ['programs'],
  },
  {
    question: 'Can I continue working during outpatient treatment?',
    answer:
      'Yes, outpatient programs at Trust SoCal are specifically designed to allow clients to maintain their work, school, and family responsibilities while receiving treatment. Our Intensive Outpatient Program (IOP) offers flexible scheduling with sessions typically held in the mornings or evenings. This structure makes it possible to get the help you need without putting your career or education on hold.',
    category: 'treatment',
    pages: ['programs'],
  },
  {
    question: 'What is the difference between IOP and PHP?',
    answer:
      'A Partial Hospitalization Program (PHP) typically involves 5 to 6 hours of structured treatment per day, 5 days per week, and serves as a step down from residential care. An Intensive Outpatient Program (IOP) generally requires 3 to 4 hours of treatment per day, 3 to 5 days per week, offering more flexibility for clients who are further along in recovery. Trust SoCal offers both levels of outpatient care to ensure clients receive the right intensity of treatment at each stage.',
    category: 'treatment',
    pages: ['programs'],
  },
  {
    question: 'Do you provide aftercare support?',
    answer:
      'Yes, Trust SoCal provides comprehensive aftercare planning and alumni support services to promote long-term recovery. Before completing treatment, each client works with their clinical team to develop a personalized aftercare plan that may include ongoing therapy, support group referrals, sober living recommendations, and relapse prevention strategies. Our alumni program offers continued connection through regular events, check-ins, and access to recovery resources.',
    category: 'treatment',
    pages: ['programs', 'about'],
  },

  // ─── Insurance (8) ──────────────────────────────────────────────────────────
  {
    question: 'Does insurance cover addiction treatment?',
    answer:
      'Yes, most health insurance plans are required to cover substance abuse treatment under the Mental Health Parity and Addiction Equity Act and the Affordable Care Act. Coverage levels vary depending on your specific plan, provider network, and the level of care needed. Trust SoCal\'s admissions team will verify your insurance benefits at no cost and explain your coverage before you begin treatment.',
    category: 'insurance',
    pages: ['insurance', 'home'],
  },
  {
    question: 'What insurance plans does Trust SoCal accept?',
    answer:
      'Trust SoCal accepts most major PPO insurance plans including Aetna, Anthem Blue Cross, Blue Shield of California, Cigna, Humana, UnitedHealthcare, and many others. We are continuously expanding our network of accepted insurance providers. Contact our admissions team for a free, confidential insurance verification to confirm your coverage.',
    category: 'insurance',
    pages: ['insurance'],
  },
  {
    question: 'How do I verify my insurance coverage?',
    answer:
      'You can verify your insurance coverage by calling Trust SoCal\'s admissions team or by submitting your insurance information through our secure online verification form on our website. Our team will contact your insurance provider directly, review your benefits, and explain your coverage and any potential out-of-pocket costs. This verification process is completely free and confidential.',
    category: 'insurance',
    pages: ['insurance', 'contact'],
  },
  {
    question: 'What if I don\'t have insurance?',
    answer:
      'If you do not have insurance, Trust SoCal can work with you to explore alternative payment options including private pay arrangements, financing plans, and sliding scale fees based on financial need. Our admissions team can also help you explore whether you qualify for Medicaid, state-funded programs, or other assistance. No one should be turned away from getting help, and we are committed to finding a path to treatment for everyone who needs it.',
    category: 'insurance',
    pages: ['insurance', 'admissions'],
  },
  {
    question: 'Does Trust SoCal offer payment plans?',
    answer:
      'Yes, Trust SoCal offers flexible payment plans for clients who need financial assistance or prefer to spread the cost of treatment over time. Our admissions team will work with you to create a payment arrangement that fits your budget. We believe financial barriers should never prevent someone from accessing life-saving addiction treatment.',
    category: 'insurance',
    pages: ['insurance'],
  },
  {
    question: 'How much does rehab cost without insurance?',
    answer:
      'The cost of rehab without insurance varies depending on the level of care, length of stay, and specific services required. Medical detox and residential treatment are typically more expensive than outpatient programs due to the round-the-clock care provided. Trust SoCal\'s admissions team can provide a detailed cost breakdown and discuss payment options to make treatment accessible and affordable.',
    category: 'insurance',
    pages: ['insurance'],
  },
  {
    question: 'Does PPO insurance cover rehab?',
    answer:
      'Yes, PPO (Preferred Provider Organization) insurance plans generally provide the most comprehensive coverage for addiction treatment, including out-of-network benefits. PPO plans typically cover medical detox, residential treatment, PHP, and IOP at varying levels depending on the specific plan. Trust SoCal works with most major PPO insurance carriers, and our team can verify your specific benefits quickly and at no cost.',
    category: 'insurance',
    pages: ['insurance'],
  },
  {
    question: 'Will my insurance cover the full cost of treatment?',
    answer:
      'Whether your insurance covers the full cost of treatment depends on your specific plan, deductible, co-pay, and the level of care recommended. Many PPO plans cover a significant portion of treatment costs, though some out-of-pocket expenses such as deductibles or co-insurance may apply. Trust SoCal\'s admissions team will verify your benefits upfront so you understand your financial responsibility before beginning treatment.',
    category: 'insurance',
    pages: ['insurance'],
  },

  // ─── Admissions (8) ─────────────────────────────────────────────────────────
  {
    question: 'How do I get started with treatment?',
    answer:
      'Getting started with treatment at Trust SoCal begins with a confidential phone call to our admissions team. During this call, we will gather basic information, verify your insurance benefits, and conduct a brief clinical pre-assessment. In many cases, we can arrange admission within 24 hours of your initial call.',
    category: 'admissions',
    pages: ['admissions', 'contact', 'home'],
  },
  {
    question: 'What should I bring to rehab?',
    answer:
      'We recommend bringing comfortable clothing for 5 to 7 days, personal hygiene items, any prescribed medications in their original containers, a valid photo ID, and your insurance card. Avoid bringing valuables, large amounts of cash, or any items that could be considered contraband. Trust SoCal provides a detailed packing list upon admission to help you prepare.',
    category: 'admissions',
    pages: ['admissions'],
  },
  {
    question: 'Can I bring my phone to rehab?',
    answer:
      'Trust SoCal\'s phone policy varies by program level and stage of treatment. During the initial stabilization phase of residential treatment, phone access may be limited to help clients focus on their recovery without outside distractions. As clients progress, phone privileges are typically expanded, and outpatient clients generally have full access to their personal devices.',
    category: 'admissions',
    pages: ['admissions'],
  },
  {
    question: 'What happens on the first day of treatment?',
    answer:
      'On your first day at Trust SoCal, you will be greeted by our admissions staff and given a tour of the facility. You will undergo a comprehensive medical and clinical assessment conducted by our nursing and therapy teams to develop your individualized treatment plan. The rest of the day focuses on getting settled, meeting staff and peers, and orienting to the daily schedule.',
    category: 'admissions',
    pages: ['admissions'],
  },
  {
    question: 'Do I need a referral to enter treatment?',
    answer:
      'No, you do not need a referral from a doctor or therapist to enter treatment at Trust SoCal. You can contact our admissions team directly to begin the intake process at any time. While referrals from healthcare providers are welcome and appreciated, self-referrals and family-initiated admissions are equally common and fully supported.',
    category: 'admissions',
    pages: ['admissions', 'contact'],
  },
  {
    question: 'Can I choose my own treatment plan?',
    answer:
      'Treatment plans at Trust SoCal are developed collaboratively between the client and our clinical team based on a comprehensive assessment of each individual\'s needs. While clients are encouraged to share their preferences, goals, and concerns, the clinical team provides expert recommendations based on evidence-based best practices. Our goal is to create a treatment plan that each client feels confident in and committed to.',
    category: 'admissions',
    pages: ['admissions', 'programs'],
  },
  {
    question: 'How quickly can I be admitted?',
    answer:
      'Trust SoCal can often arrange same-day or next-day admission depending on bed availability and the urgency of the situation. Our admissions process is designed to be fast and compassionate, removing as many barriers as possible so clients can begin treatment when they are ready. Call our admissions team any time of day to start the process immediately.',
    category: 'admissions',
    pages: ['admissions', 'contact'],
  },
  {
    question: 'What if I need to leave treatment early?',
    answer:
      'Treatment at Trust SoCal is voluntary, and clients have the right to leave at any time. However, our clinical team strongly encourages completing the full recommended course of treatment, as early departure significantly increases the risk of relapse. If you are considering leaving, our staff will work with you to address any concerns and explore options to help you continue your recovery.',
    category: 'admissions',
    pages: ['admissions'],
  },

  // ─── Detox (7) ──────────────────────────────────────────────────────────────
  {
    question: 'How long does detox take?',
    answer:
      'Medical detox typically lasts between 5 and 10 days depending on the substance used, the severity of dependence, and the individual\'s overall health. Alcohol and benzodiazepine detox may take longer due to the risk of serious withdrawal complications. Trust SoCal\'s medical team monitors each client 24/7 and adjusts the detox protocol as needed to ensure safety and comfort.',
    category: 'detox',
    pages: ['detox', 'programs'],
  },
  {
    question: 'Is medical detox safe?',
    answer:
      'Yes, medical detox at Trust SoCal is safe and conducted under the supervision of licensed physicians, nurses, and clinical staff around the clock. Attempting to detox without medical supervision can be dangerous and, in some cases, life-threatening, especially with alcohol, benzodiazepines, and opioids. Our medical team uses proven protocols and medications to manage withdrawal symptoms and ensure the safest possible detox experience.',
    category: 'detox',
    pages: ['detox'],
  },
  {
    question: 'What medications are used during detox?',
    answer:
      'The medications used during detox depend on the substance of abuse and the severity of withdrawal symptoms. Common medications include benzodiazepines for alcohol withdrawal, buprenorphine or methadone for opioid withdrawal, and various comfort medications for symptom management such as anti-nausea, anti-anxiety, and sleep aids. Trust SoCal\'s physicians carefully select and monitor all medications based on each client\'s individual medical needs.',
    category: 'detox',
    pages: ['detox'],
  },
  {
    question: 'Will I experience withdrawal symptoms?',
    answer:
      'Most individuals who are physically dependent on a substance will experience some degree of withdrawal symptoms during detox. The type, severity, and duration of symptoms vary based on the substance, length of use, dosage, and individual physiology. Trust SoCal\'s medical detox program is specifically designed to minimize discomfort and manage symptoms safely with medication-assisted support and around-the-clock nursing care.',
    category: 'detox',
    pages: ['detox'],
  },
  {
    question: 'Can I detox at home?',
    answer:
      'While some people attempt to detox at home, it is generally not recommended due to the risk of severe withdrawal complications, medical emergencies, and a high likelihood of relapse. Withdrawal from alcohol, benzodiazepines, and opioids can be medically dangerous without professional supervision. Trust SoCal strongly recommends medically supervised detox to ensure safety, comfort, and a solid foundation for continued treatment.',
    category: 'detox',
    pages: ['detox'],
  },
  {
    question: 'What happens after detox?',
    answer:
      'After completing medical detox, clients at Trust SoCal typically transition directly into a residential or outpatient treatment program to address the underlying causes of addiction. Detox alone is not considered sufficient treatment for addiction because it only addresses the physical dependence, not the behavioral, psychological, and social factors. Trust SoCal\'s clinical team works with each client during detox to plan a seamless transition into the next appropriate level of care.',
    category: 'detox',
    pages: ['detox', 'programs'],
  },
  {
    question: 'Is detox painful?',
    answer:
      'With proper medical supervision, detox does not have to be a painful experience. While some discomfort may occur as the body adjusts to the absence of a substance, Trust SoCal\'s medical team uses comfort medications and evidence-based protocols to significantly reduce withdrawal symptoms. Our goal is to make the detox process as safe and comfortable as possible so clients can focus on beginning their recovery.',
    category: 'detox',
    pages: ['detox'],
  },

  // ─── Substance (7) ──────────────────────────────────────────────────────────
  {
    question: 'What substances do you treat?',
    answer:
      'Trust SoCal treats addiction to a wide range of substances including alcohol, opioids (heroin, fentanyl, prescription painkillers), benzodiazepines, methamphetamine, cocaine, marijuana, and prescription medications. We also treat individuals struggling with polysubstance use, which involves dependence on multiple substances simultaneously. Our clinical team tailors treatment approaches based on the specific substance or substances involved.',
    category: 'substance',
    pages: ['programs', 'addiction-types', 'home'],
  },
  {
    question: 'Is alcohol considered a drug?',
    answer:
      'Yes, alcohol is classified as a central nervous system depressant and is one of the most commonly abused substances in the United States. Despite being legal and socially accepted, alcohol is highly addictive and can cause severe physical dependence, organ damage, and life-threatening withdrawal symptoms. Trust SoCal provides specialized alcohol addiction treatment including medical detox and comprehensive therapy.',
    category: 'substance',
    pages: ['addiction-types'],
  },
  {
    question: 'How do I know if I\'m addicted?',
    answer:
      'Signs of addiction include an inability to stop using despite negative consequences, increased tolerance requiring more of the substance to achieve the same effect, experiencing withdrawal symptoms when not using, neglecting responsibilities, and continued use despite harm to relationships, health, or finances. If you or a loved one is questioning whether substance use has become a problem, that concern itself is often a meaningful indicator. Trust SoCal offers free, confidential assessments to help you understand your situation.',
    category: 'substance',
    pages: ['addiction-types', 'home'],
  },
  {
    question: 'What are the signs of opioid addiction?',
    answer:
      'Signs of opioid addiction include taking opioids in larger amounts or for longer than prescribed, unsuccessful attempts to cut down, spending significant time obtaining or recovering from opioid use, and experiencing cravings. Physical signs may include drowsiness, constricted pupils, constipation, and slowed breathing. Trust SoCal provides specialized opioid addiction treatment including medication-assisted treatment (MAT) and comprehensive behavioral therapy.',
    category: 'substance',
    pages: ['addiction-types'],
  },
  {
    question: 'Can you become addicted to prescription medications?',
    answer:
      'Yes, many prescription medications, particularly opioid painkillers, benzodiazepines, and stimulants, carry a significant risk of physical dependence and addiction even when taken as prescribed. Prescription drug addiction often develops gradually, making it difficult to recognize until dependence has formed. Trust SoCal treats prescription drug addiction with the same comprehensive, evidence-based approach used for all substance use disorders.',
    category: 'substance',
    pages: ['addiction-types'],
  },
  {
    question: 'Is marijuana addictive?',
    answer:
      'Yes, marijuana can be addictive. Research shows that approximately 9 to 10 percent of people who use marijuana will develop a cannabis use disorder, and the risk increases significantly for those who begin using in adolescence or use daily. Symptoms of marijuana addiction include increased tolerance, withdrawal symptoms such as irritability and insomnia, and continued use despite negative effects on daily life. Trust SoCal offers treatment for cannabis use disorder as part of our substance abuse programs.',
    category: 'substance',
    pages: ['addiction-types'],
  },
  {
    question: 'What is fentanyl and why is it dangerous?',
    answer:
      'Fentanyl is a synthetic opioid that is 50 to 100 times more potent than morphine and is a leading driver of overdose deaths in the United States. It is often mixed into other drugs such as heroin, cocaine, and counterfeit prescription pills without the user\'s knowledge, dramatically increasing the risk of accidental overdose. Trust SoCal provides specialized treatment for fentanyl addiction including medical detox with 24/7 monitoring and medication-assisted treatment to support safe, sustained recovery.',
    category: 'substance',
    pages: ['addiction-types', 'detox'],
  },
];

export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export function getFAQsByPage(page: string): FAQ[] {
  return faqs.filter((faq) => faq.pages?.includes(page));
}
