// ---------------------------------------------------------------------------
// Trust SoCal -- Treatment Programs Data
// ---------------------------------------------------------------------------

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // lucide-react icon name
  duration: string;
  modalities: string[];
  whoIsItFor: string[];
  whatToExpect: string[];
  benefits: string[];
  relatedPrograms: string[]; // slugs
  faqs: { question: string; answer: string }[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export const programs: Program[] = [
  // -------------------------------------------------------------------------
  // 1. Medical Detox
  // -------------------------------------------------------------------------
  {
    slug: 'detox',
    name: 'Medical Detox',
    shortName: 'Detox',
    tagline: 'A safe, medically supervised first step toward lasting recovery.',
    description:
      'Our medical detox program provides around-the-clock clinical supervision to help you safely manage withdrawal symptoms in a comfortable, supportive environment. Board-certified physicians and experienced nurses use evidence-based protocols, including medication-assisted treatment, to minimize discomfort and reduce medical risk. Detox is the critical first step that prepares your body and mind for the deeper therapeutic work ahead.',
    icon: 'ShieldPlus',
    duration: '5-10 days',
    modalities: [
      'Medication-assisted treatment (MAT)',
      '24/7 vital sign monitoring',
      'Comfort care and symptom management',
      'Nutritional support and hydration therapy',
      'Individualized medical assessments',
    ],
    whoIsItFor: [
      'Individuals physically dependent on alcohol, opioids, benzodiazepines, or other substances',
      'People who have experienced dangerous withdrawal symptoms in the past',
      'Those who need a medically safe environment to stop using substances',
      'Anyone beginning their recovery journey and needing stabilization',
    ],
    whatToExpect: [
      'A comprehensive medical and psychological evaluation upon admission',
      'A personalized detox plan developed by our medical team',
      'Regular check-ins from physicians and nursing staff throughout the day and night',
      'Access to comfort medications to manage symptoms such as nausea, anxiety, and insomnia',
      'A smooth transition plan into residential or outpatient treatment upon completion',
    ],
    benefits: [
      'Medically safe withdrawal with reduced risk of complications',
      'Significant reduction in physical discomfort during detox',
      'Professional support for co-occurring mental health symptoms',
      'A strong clinical foundation for continued treatment',
      'Peace of mind for both clients and their families',
    ],
    relatedPrograms: ['residential', 'dual-diagnosis', 'php'],
    faqs: [
      {
        question: 'How long does medical detox take?',
        answer:
          'The duration of medical detox varies by substance and individual health factors, but most clients complete the process in 5 to 10 days. Alcohol and benzodiazepine detox may require a longer stabilization period due to the risk of seizures, while opioid detox is often shorter. Our medical team continuously evaluates your progress and adjusts the timeline accordingly.',
      },
      {
        question: 'Will I be in pain during detox?',
        answer:
          'Our primary goal is to keep you as comfortable as possible. We use FDA-approved medications and evidence-based comfort care protocols to manage symptoms like nausea, muscle aches, anxiety, and insomnia. While some mild discomfort may occur, our team is trained to respond quickly and adjust your care plan as needed.',
      },
      {
        question: 'Can I detox from multiple substances at the same time?',
        answer:
          'Yes. Many of our clients arrive dependent on more than one substance. Our medical team is experienced in managing complex, poly-substance detox safely. We create an individualized protocol that addresses each substance and monitors for any interactions or compounding withdrawal effects.',
      },
      {
        question: 'What happens after detox is complete?',
        answer:
          'Detox alone is not a complete treatment for addiction. Upon completing detox, our clinical team will recommend the next appropriate level of care, which may include residential treatment, a partial hospitalization program, or an intensive outpatient program. We help coordinate a seamless transition so there is no gap in your care.',
      },
      {
        question: 'Is medical detox covered by insurance?',
        answer:
          'Most major insurance plans cover medical detox as a medically necessary service. Our admissions team will verify your benefits and explain your coverage before you arrive so there are no surprises. We also work with clients who are self-pay to develop manageable payment arrangements.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200',
    metaTitle: 'Medical Detox Program in Orange County | Trust SoCal',
    metaDescription:
      'Safe, 24/7 medically supervised detox in Orange County. Our team uses evidence-based protocols to manage withdrawal and prepare you for lasting recovery.',
  },

  // -------------------------------------------------------------------------
  // 2. Residential Treatment
  // -------------------------------------------------------------------------
  {
    slug: 'residential',
    name: 'Residential Treatment',
    shortName: 'Residential',
    tagline:
      'Immersive, structured care in a healing environment where recovery becomes your full focus.',
    description:
      'Our residential treatment program provides a fully immersive recovery experience in a comfortable, home-like setting in Southern California. Clients live on-site and participate in a structured daily schedule of individual therapy, group sessions, and experiential activities designed to build coping skills and self-awareness. With 24-hour clinical support and a community of peers, residential treatment offers the time and space needed to address the root causes of addiction.',
    icon: 'Home',
    duration: '30-90 days',
    modalities: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)',
      'Group therapy and process groups',
      'Individual counseling sessions',
      'Experiential therapies including art, music, and mindfulness',
    ],
    whoIsItFor: [
      'Individuals who need a structured, substance-free environment to focus on recovery',
      'Those who have not succeeded with outpatient-level care alone',
      'People with moderate to severe substance use disorders',
      'Clients transitioning from medical detox who need continued intensive support',
    ],
    whatToExpect: [
      'A structured daily schedule that includes therapy, wellness activities, and peer support',
      'A private or semi-private room in a comfortable residential facility',
      'Weekly sessions with a licensed individual therapist and a dedicated case manager',
      'Evidence-based group therapy sessions multiple times per week',
      'Gradual reintroduction of life responsibilities through our step-down programming',
    ],
    benefits: [
      'Complete removal from triggers and enabling environments',
      'Deep therapeutic work with consistent clinical support',
      'Development of a strong sober peer network',
      'Comprehensive life-skills training for independent living',
      'Higher long-term sobriety rates compared to outpatient-only treatment',
    ],
    relatedPrograms: ['detox', 'dual-diagnosis', 'php', 'iop'],
    faqs: [
      {
        question: 'How long is the residential treatment program?',
        answer:
          'Our residential program typically ranges from 30 to 90 days, depending on your clinical needs and progress. Research consistently shows that longer stays are associated with better outcomes. Your treatment team will regularly review your progress and recommend an appropriate length of stay.',
      },
      {
        question: 'Can I have visitors during residential treatment?',
        answer:
          'Yes, we encourage family involvement as part of the recovery process. Visiting hours are scheduled to ensure they complement rather than disrupt your treatment. Your therapist may also invite family members to participate in family therapy sessions during your stay.',
      },
      {
        question: 'What does a typical day look like?',
        answer:
          'A typical day includes a morning wellness activity such as yoga or meditation, followed by group therapy, an individual therapy session, lunch, afternoon skill-building workshops, recreational time, and an evening recovery meeting or reflection group. Weekends include more free time and recreational outings.',
      },
      {
        question: 'Will I be able to continue working or attending school?',
        answer:
          'Residential treatment is a full-time commitment that requires stepping away from work and school. However, our team can help you communicate with employers or academic institutions about a medical leave of absence. Many clients find that investing this time leads to dramatically better outcomes in all areas of life.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200',
    metaTitle:
      'Residential Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Immersive 30-90 day residential rehab in Orange County with CBT, DBT, and holistic therapies. Build lasting recovery in a supportive, home-like setting.',
  },

  // -------------------------------------------------------------------------
  // 3. Dual Diagnosis Treatment
  // -------------------------------------------------------------------------
  {
    slug: 'dual-diagnosis',
    name: 'Dual Diagnosis Treatment',
    shortName: 'Dual Diagnosis',
    tagline:
      'Integrated treatment that addresses addiction and mental health together, not separately.',
    description:
      'Dual diagnosis treatment at Trust SoCal recognizes that addiction and mental health conditions such as depression, anxiety, PTSD, and bipolar disorder frequently co-occur and must be treated simultaneously for lasting recovery. Our integrated clinical team includes licensed therapists, psychiatrists, and addiction specialists who collaborate on a unified treatment plan. By addressing both conditions at their roots, we help clients break the cycle of self-medication and build a stable foundation for long-term wellness.',
    icon: 'Brain',
    duration: '30-90 days',
    modalities: [
      'Comprehensive psychiatric evaluation and diagnosis',
      'Cognitive Behavioral Therapy (CBT)',
      'Medication management by board-certified psychiatrists',
      'Trauma-informed individual therapy',
      'Psychoeducation groups on managing co-occurring disorders',
    ],
    whoIsItFor: [
      'Individuals struggling with both a substance use disorder and a mental health condition',
      'People who have been self-medicating depression, anxiety, PTSD, or bipolar disorder with drugs or alcohol',
      'Clients who have relapsed after treatment that only addressed one condition',
      'Anyone who suspects an undiagnosed mental health issue may be fueling their substance use',
    ],
    whatToExpect: [
      'A thorough psychiatric assessment within the first 48 hours of admission',
      'A coordinated treatment plan developed by both addiction and mental health professionals',
      'Regular medication evaluations and adjustments as needed throughout your stay',
      'Specialized therapy groups for anxiety, depression, trauma, and mood disorders',
      'A discharge plan that includes ongoing psychiatric care and relapse prevention strategies',
    ],
    benefits: [
      'Simultaneous treatment of addiction and mental health leads to better long-term outcomes',
      'Accurate diagnosis by psychiatrists who specialize in co-occurring disorders',
      'Reduced risk of relapse caused by untreated mental health symptoms',
      'A unified clinical team that communicates daily about your progress',
      'Development of healthy coping mechanisms that replace substance use',
    ],
    relatedPrograms: ['residential', 'trauma', 'php', 'detox'],
    faqs: [
      {
        question: 'What mental health conditions do you treat alongside addiction?',
        answer:
          'We treat a wide range of co-occurring mental health conditions including major depressive disorder, generalized anxiety disorder, post-traumatic stress disorder (PTSD), bipolar disorder, obsessive-compulsive disorder, and personality disorders. Our psychiatric team conducts a comprehensive evaluation to identify all relevant diagnoses and tailor your treatment plan accordingly.',
      },
      {
        question: 'How is dual diagnosis different from standard addiction treatment?',
        answer:
          'Standard addiction treatment often focuses primarily on substance use and may not adequately address underlying mental health conditions. Dual diagnosis treatment integrates psychiatric care directly into the addiction treatment process, ensuring that both conditions are treated simultaneously by a coordinated team. This integrated approach significantly reduces the risk of relapse.',
      },
      {
        question: 'Will I need to take psychiatric medication?',
        answer:
          'Not necessarily, but many clients benefit from medication as part of their dual diagnosis treatment plan. Our psychiatrists carefully evaluate whether medication is appropriate and, if so, select options with the lowest risk for individuals in recovery. All medication decisions are made collaboratively with you, and your response is monitored closely.',
      },
      {
        question: 'Can I continue dual diagnosis treatment after leaving residential care?',
        answer:
          'Absolutely. We strongly recommend ongoing psychiatric and therapeutic care after completing residential treatment. Our aftercare team will connect you with outpatient psychiatrists, therapists, and support groups in your area. Many clients step down to our PHP or IOP program for continued integrated treatment.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=1200',
    metaTitle:
      'Dual Diagnosis Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Integrated dual diagnosis treatment in Orange County for co-occurring addiction and mental health disorders. Psychiatric care and therapy under one roof.',
  },

  // -------------------------------------------------------------------------
  // 4. Trauma-Informed Care
  // -------------------------------------------------------------------------
  {
    slug: 'trauma',
    name: 'Trauma-Informed Care',
    shortName: 'Trauma Care',
    tagline:
      'Healing the wounds beneath the surface so recovery can truly take hold.',
    description:
      'Our trauma-informed care program is designed for individuals whose substance use is rooted in or complicated by traumatic experiences. Using specialized, evidence-based modalities such as EMDR, somatic experiencing, and trauma-focused CBT, our clinicians help clients safely process painful memories, reduce the intensity of trauma responses, and develop new pathways for emotional regulation. Every aspect of our environment, from staff interactions to program design, is built around principles of safety, trust, and empowerment.',
    icon: 'Heart',
    duration: 'Varies by individual needs',
    modalities: [
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'Somatic experiencing and body-based therapies',
      'Trauma-focused Cognitive Behavioral Therapy (TF-CBT)',
      'Expressive arts therapy for non-verbal processing',
      'Mindfulness-based stress reduction (MBSR)',
    ],
    whoIsItFor: [
      'Individuals with a history of childhood abuse, neglect, or adverse childhood experiences (ACEs)',
      'Veterans and first responders coping with PTSD or operational stress injuries',
      'Survivors of domestic violence, sexual assault, or violent crime',
      'Anyone whose addiction appears connected to unresolved traumatic experiences',
    ],
    whatToExpect: [
      'A trauma-informed intake process that prioritizes your sense of safety and control',
      'Individual therapy sessions with a clinician trained in trauma specialties',
      'Gradual, phased approach to trauma processing that respects your readiness',
      'Body-based practices to help regulate the nervous system and reduce hyperarousal',
      'A supportive peer community of others on a similar healing journey',
    ],
    benefits: [
      'Resolution of trauma responses that have been driving addictive behavior',
      'Reduced symptoms of PTSD including flashbacks, nightmares, and hypervigilance',
      'Improved emotional regulation and distress tolerance',
      'A restored sense of safety and trust in oneself and others',
      'Stronger foundation for sustained, long-term sobriety',
    ],
    relatedPrograms: ['dual-diagnosis', 'residential', 'family', 'iop'],
    faqs: [
      {
        question: 'Do I have to talk about my trauma in group settings?',
        answer:
          'No. The detailed processing of traumatic memories takes place in individual therapy sessions in a safe, private setting. Group sessions focus on shared coping skills, psychoeducation about trauma responses, and building supportive connections with peers. You will never be pressured to disclose trauma details in a group environment.',
      },
      {
        question: 'What is EMDR and how does it work?',
        answer:
          'Eye Movement Desensitization and Reprocessing (EMDR) is a well-researched therapy that helps the brain reprocess traumatic memories so they no longer trigger intense emotional and physical reactions. During an EMDR session, your therapist guides you through a series of bilateral stimulation exercises while you recall the traumatic event. Over time, the memory loses its emotional charge and can be integrated into your life narrative without ongoing distress.',
      },
      {
        question: 'What if I am not sure whether I have experienced trauma?',
        answer:
          'Many people do not recognize certain experiences as traumatic, especially if they occurred in childhood or were normalized in their environment. Our clinical team conducts a thorough assessment that can help identify whether trauma may be playing a role in your addiction. There is no requirement to have a formal PTSD diagnosis to benefit from trauma-informed care.',
      },
      {
        question: 'How long does trauma therapy take?',
        answer:
          'The timeline for trauma therapy varies significantly depending on the nature and extent of your experiences, your current coping resources, and how your nervous system responds to treatment. Some clients experience meaningful relief within weeks, while others benefit from several months of ongoing work. Your therapist will work collaboratively with you to set realistic expectations and adjust the pace as needed.',
      },
      {
        question: 'Can trauma-informed care help with conditions other than PTSD?',
        answer:
          'Yes. Trauma-informed care is beneficial for a wide range of conditions that often accompany unresolved trauma, including depression, anxiety, chronic pain, disordered eating, and relationship difficulties. The skills and insights gained through trauma therapy often have positive ripple effects across many areas of a client\'s life.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200',
    metaTitle:
      'Trauma-Informed Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Specialized trauma therapy including EMDR, somatic experiencing, and TF-CBT at our Orange County treatment center. Heal trauma and addiction together.',
  },

  // -------------------------------------------------------------------------
  // 5. Family Therapy Program
  // -------------------------------------------------------------------------
  {
    slug: 'family',
    name: 'Family Therapy Program',
    shortName: 'Family Therapy',
    tagline:
      'Restoring trust, rebuilding communication, and healing the whole family system.',
    description:
      'Addiction affects everyone in the family, not just the individual using substances. Our family therapy program helps loved ones understand the dynamics of addiction, repair damaged relationships, and develop healthier communication patterns. Through structured family sessions, psychoeducation workshops, and support groups, families learn to set boundaries, process grief and resentment, and create a home environment that supports long-term recovery for everyone involved.',
    icon: 'Users',
    duration: 'Ongoing throughout treatment and beyond',
    modalities: [
      'Structural and systemic family therapy',
      'Psychoeducation workshops on addiction and codependency',
      'Communication and conflict resolution skills training',
      'Multi-family process groups',
      'Individual support sessions for family members',
    ],
    whoIsItFor: [
      'Families and loved ones of individuals in treatment for substance use disorders',
      'Partners and spouses affected by a loved one\'s addiction',
      'Parents seeking guidance on how to support their child\'s recovery without enabling',
      'Adult children of individuals with substance use disorders who need their own healing',
    ],
    whatToExpect: [
      'An initial family assessment to understand relationship dynamics and areas of concern',
      'Regularly scheduled family therapy sessions with a licensed marriage and family therapist',
      'Educational workshops on topics such as addiction science, boundaries, and codependency',
      'A safe, facilitated space for honest dialogue between the client and their loved ones',
      'Aftercare recommendations for continued family support, including Al-Anon and family support groups',
    ],
    benefits: [
      'Restored trust and improved communication within the family unit',
      'Greater understanding of addiction as a medical condition rather than a moral failing',
      'Tools for setting healthy boundaries that support recovery without enabling',
      'Reduced family conflict and emotional volatility',
      'A stronger support system that increases the client\'s chances of lasting sobriety',
    ],
    relatedPrograms: ['residential', 'trauma', 'aftercare', 'iop'],
    faqs: [
      {
        question: 'Do family members have to participate in the program?',
        answer:
          'Family participation is strongly encouraged but not required. Research shows that family involvement significantly improves treatment outcomes and long-term recovery rates. Even if some family members are unable or unwilling to attend, those who do participate often report meaningful improvements in their own well-being and in the family dynamic.',
      },
      {
        question: 'Can family therapy be conducted remotely?',
        answer:
          'Yes. We understand that distance and scheduling can be barriers, so we offer family therapy sessions via secure video conferencing for family members who cannot attend in person. While in-person sessions are ideal, virtual participation is far better than no participation and can be highly effective.',
      },
      {
        question: 'What if there is a lot of anger and resentment in the family?',
        answer:
          'Anger and resentment are normal and expected responses to the impact of addiction on a family. Our therapists are trained to create a safe space where these emotions can be expressed constructively. The therapeutic process helps family members move from blame and defensiveness toward understanding, accountability, and healing.',
      },
      {
        question: 'Is there support specifically for spouses and partners?',
        answer:
          'Yes. We offer dedicated support for spouses and partners, including individual sessions and specialized groups that address the unique challenges of being in a relationship with someone in recovery. Topics include rebuilding trust, managing expectations, processing betrayal, and nurturing a healthy partnership in sobriety.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200',
    metaTitle:
      'Family Therapy for Addiction Recovery in Orange County | Trust SoCal',
    metaDescription:
      'Family therapy and support services at Trust SoCal in Orange County. Heal relationships, improve communication, and build a recovery-supportive home.',
  },

  // -------------------------------------------------------------------------
  // 6. Aftercare & Alumni Program
  // -------------------------------------------------------------------------
  {
    slug: 'aftercare',
    name: 'Aftercare & Alumni Program',
    shortName: 'Aftercare',
    tagline:
      'Recovery does not end at discharge. We walk with you for the long haul.',
    description:
      'The transition from treatment back to everyday life is one of the most vulnerable periods in recovery. Our aftercare and alumni program provides ongoing structure, connection, and support for clients after they complete primary treatment. Through relapse prevention planning, alumni events, sober living referrals, and continued access to clinical resources, we help our graduates navigate early recovery with confidence and stay connected to a community that understands their journey.',
    icon: 'LifeBuoy',
    duration: '12+ months of ongoing support',
    modalities: [
      'Individualized relapse prevention planning',
      'Monthly alumni events and recovery activities',
      'Sober living placement assistance and referrals',
      'Continued access to support groups and recovery meetings',
      'Check-in calls and wellness monitoring from alumni coordinators',
    ],
    whoIsItFor: [
      'Graduates of any Trust SoCal treatment program seeking continued support',
      'Individuals transitioning from residential or outpatient care back to independent living',
      'People in early recovery who need accountability and connection',
      'Alumni who want to give back by mentoring newer clients',
    ],
    whatToExpect: [
      'A comprehensive aftercare plan developed before discharge in collaboration with your treatment team',
      'Regular check-in communications from a dedicated alumni coordinator',
      'Invitations to monthly social events, workshops, and alumni meetings',
      'Assistance finding sober living homes and community recovery resources',
      'A lifelong membership in the Trust SoCal alumni community',
    ],
    benefits: [
      'Continued connection to a sober support network after leaving treatment',
      'Structured accountability during the critical first year of recovery',
      'Access to resources and guidance during challenging moments',
      'Opportunities to build a fulfilling sober social life',
      'A sense of purpose through mentoring and community involvement',
    ],
    relatedPrograms: ['residential', 'iop', 'php', 'family'],
    faqs: [
      {
        question: 'Is the aftercare program free for alumni?',
        answer:
          'Yes. Once you complete treatment at Trust SoCal, you are a member of our alumni community for life at no additional cost. All alumni events, check-in calls, and basic support services are provided free of charge. If additional clinical services are needed, we can help coordinate those through your insurance or on a self-pay basis.',
      },
      {
        question: 'How soon after discharge does aftercare begin?',
        answer:
          'Aftercare planning begins during treatment, typically in the final week before discharge. Your aftercare plan is in place before you leave, and your alumni coordinator will reach out within the first 48 hours after discharge. This ensures there is no gap in support during the critical transition period.',
      },
      {
        question: 'What kind of alumni events do you host?',
        answer:
          'Our alumni events range from casual social gatherings like beach bonfires, hiking trips, and barbecues to more structured activities such as recovery workshops, guest speaker events, and community service projects. These events provide a fun, substance-free environment for our alumni to stay connected and build friendships in recovery.',
      },
      {
        question: 'Can alumni access clinical services if they are struggling?',
        answer:
          'Absolutely. If an alumni member is experiencing difficulties or feels at risk of relapse, they can contact our alumni coordinator or clinical team directly. We can arrange individual counseling sessions, connect them with outpatient services, or facilitate a return to a higher level of care if clinically appropriate. We are always here for our graduates.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200',
    metaTitle:
      'Aftercare & Alumni Recovery Program in Orange County | Trust SoCal',
    metaDescription:
      'Lifelong aftercare and alumni support in Orange County. Relapse prevention, sober living referrals, and community events to sustain your recovery journey.',
  },

  // -------------------------------------------------------------------------
  // 7. Intensive Outpatient Program (IOP)
  // -------------------------------------------------------------------------
  {
    slug: 'iop',
    name: 'Intensive Outpatient Program (IOP)',
    shortName: 'IOP',
    tagline:
      'Effective, flexible treatment that fits into your life while keeping recovery at the center.',
    description:
      'Our Intensive Outpatient Program (IOP) provides a high level of therapeutic care while allowing clients to continue living at home, working, or attending school. Clients attend structured treatment sessions three days per week, engaging in group therapy, individual counseling, and practical skill-building workshops. IOP is ideal for individuals stepping down from residential care or those whose clinical needs can be effectively met without a residential setting.',
    icon: 'CalendarClock',
    duration: '8-12 weeks, 3 days per week',
    modalities: [
      'Process-oriented group therapy',
      'Individual therapy with a licensed clinician',
      'Relapse prevention and coping skills development',
      'Life skills workshops including stress management and communication',
      'Peer support and accountability groups',
    ],
    whoIsItFor: [
      'Individuals stepping down from residential treatment or PHP who need continued structured care',
      'People with work, school, or family commitments who cannot attend full-time treatment',
      'Those with mild to moderate substance use disorders who do not require 24-hour supervision',
      'Clients seeking an alternative to residential care with strong community and family support at home',
    ],
    whatToExpect: [
      'Three treatment sessions per week, typically lasting three to four hours each',
      'A combination of group therapy, individual therapy, and psychoeducational workshops',
      'Regular drug and alcohol testing to support accountability',
      'Ongoing collaboration with your treatment team to adjust your plan as you progress',
      'Flexible scheduling options including morning and evening sessions',
    ],
    benefits: [
      'Ability to maintain employment, school, and family responsibilities during treatment',
      'Continued therapeutic support without the need for residential placement',
      'Real-time application of coping skills in everyday environments',
      'A gradual transition toward fully independent recovery',
      'Lower cost compared to residential or PHP programming',
    ],
    relatedPrograms: ['php', 'residential', 'aftercare', 'family'],
    faqs: [
      {
        question: 'What is the difference between IOP and PHP?',
        answer:
          'The primary difference is the level of intensity and time commitment. PHP, or Partial Hospitalization, typically requires five days per week and includes psychiatric oversight, while IOP meets three days per week and is designed for clients who need less intensive structure. Your clinical team will recommend the appropriate level of care based on your individual needs.',
      },
      {
        question: 'Can I work while attending IOP?',
        answer:
          'Yes, that is one of the primary advantages of IOP. We offer flexible scheduling, including morning and evening session options, so that you can continue working or attending school. Many clients find that maintaining their daily routine while receiving treatment helps them build confidence in their recovery.',
      },
      {
        question: 'How is progress measured in IOP?',
        answer:
          'Your therapist and treatment team track your progress through regular clinical assessments, self-reported outcomes, attendance consistency, drug and alcohol screening results, and your engagement in therapy sessions. Treatment plans are reviewed and adjusted regularly to ensure you are making meaningful progress toward your recovery goals.',
      },
      {
        question: 'Is IOP covered by insurance?',
        answer:
          'Most major insurance plans cover Intensive Outpatient Programs as a recognized level of addiction treatment. Our admissions team will verify your specific benefits and provide a clear explanation of your coverage and any out-of-pocket costs before you begin. We also offer self-pay options and can discuss payment plans.',
      },
      {
        question: 'What happens if I need a higher level of care during IOP?',
        answer:
          'If your clinical team determines that you need more intensive support, we can seamlessly transition you to our PHP or residential program. This flexibility is one of the benefits of receiving care within a comprehensive treatment center that offers multiple levels of care under one organizational umbrella.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200',
    metaTitle:
      'Intensive Outpatient Program (IOP) in Orange County | Trust SoCal',
    metaDescription:
      'Flexible IOP addiction treatment in Orange County, 3 days per week. Continue working while receiving group therapy, counseling, and relapse prevention support.',
  },

  // -------------------------------------------------------------------------
  // 8. Partial Hospitalization Program (PHP)
  // -------------------------------------------------------------------------
  {
    slug: 'php',
    name: 'Partial Hospitalization Program (PHP)',
    shortName: 'PHP',
    tagline:
      'Hospital-level structure and care during the day with the comfort of home at night.',
    description:
      'Our Partial Hospitalization Program (PHP) offers a structured, high-intensity day treatment experience that bridges the gap between residential care and outpatient programming. Clients attend treatment five days per week for approximately six hours per day, receiving psychiatric care, group and individual therapy, and life skills training. PHP is ideal for clients who benefit from robust daily structure but are clinically stable enough to return home or to a sober living residence each evening.',
    icon: 'Building2',
    duration: '2-4 weeks, 5 days per week',
    modalities: [
      'Psychiatric evaluation and ongoing medication management',
      'Daily group therapy sessions',
      'Individual therapy with a licensed therapist',
      'Life skills development and vocational planning',
      'Wellness activities including yoga, meditation, and fitness',
    ],
    whoIsItFor: [
      'Clients transitioning from residential treatment who are not yet ready for IOP',
      'Individuals who need intensive daily treatment but do not require 24-hour residential care',
      'People with co-occurring mental health conditions who benefit from daily psychiatric access',
      'Those in sober living who need a strong clinical foundation during the day',
    ],
    whatToExpect: [
      'Five days per week of structured programming, typically from 9:00 AM to 3:00 PM',
      'Daily group therapy covering topics like relapse prevention, emotion regulation, and interpersonal skills',
      'Weekly individual therapy sessions and regular psychiatric appointments',
      'Nutritious meals provided during the program day',
      'Coordination with sober living homes or family for safe evening and weekend environments',
    ],
    benefits: [
      'High-intensity clinical care without the cost of 24-hour residential placement',
      'Daily access to psychiatric services and medication management',
      'Structured routine that helps clients build healthy daily habits',
      'A smooth clinical step-down from residential care that reduces relapse risk',
      'The opportunity to practice recovery skills in real-world settings each evening',
    ],
    relatedPrograms: ['residential', 'iop', 'dual-diagnosis', 'aftercare'],
    faqs: [
      {
        question: 'How is PHP different from residential treatment?',
        answer:
          'In PHP, you attend treatment during the day and return home or to a sober living residence in the evening, rather than living at the treatment facility full-time. The therapeutic programming is similarly intensive, but PHP allows for more independence and real-world practice of recovery skills. It is often the recommended next step after completing residential treatment.',
      },
      {
        question: 'Do I need to have completed residential treatment before starting PHP?',
        answer:
          'No. While many clients enter PHP after residential treatment, it is also appropriate as a primary level of care for individuals whose clinical needs do not require 24-hour supervision. Our admissions team will conduct a clinical assessment to determine whether PHP is the right fit for you.',
      },
      {
        question: 'Is transportation provided to and from PHP?',
        answer:
          'We do not currently provide daily transportation, but our team can help you develop a transportation plan. Many clients arrange carpools with peers, use rideshare services, or rely on family members. If you are in one of our recommended sober living homes, some offer transportation assistance to and from our facility.',
      },
      {
        question: 'What happens on the days I am not in PHP?',
        answer:
          'On weekends, we encourage clients to attend community recovery meetings such as AA or NA, engage in sober recreational activities, rest, and practice the skills learned during the week. Your treatment team will help you develop a weekend plan that supports your recovery and minimizes unstructured time during early sobriety.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    metaTitle:
      'Partial Hospitalization Program (PHP) in Orange County | Trust SoCal',
    metaDescription:
      'Structured PHP day treatment in Orange County, 5 days per week. Psychiatric care, therapy, and life skills training with the flexibility of returning home nightly.',
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/**
 * Retrieve a single program by its URL slug.
 */
export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}

/**
 * Return an array of all program slugs (useful for static path generation).
 */
export function getAllProgramSlugs(): string[] {
  return programs.map((program) => program.slug);
}
