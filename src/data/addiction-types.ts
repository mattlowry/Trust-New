// ---------------------------------------------------------------------------
// Trust SoCal -- Addiction Types Data
// ---------------------------------------------------------------------------

export interface AddictionType {
  slug: string;
  name: string;
  substanceName: string;
  description: string;
  signs: string[];
  healthEffects: string[];
  withdrawalInfo: string;
  treatmentApproach: string;
  statistics: string[];
  faqs: { question: string; answer: string }[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  relatedTypes: string[]; // slugs
}

// ---------------------------------------------------------------------------
// Addiction Types
// ---------------------------------------------------------------------------

export const addictionTypes: AddictionType[] = [
  // -------------------------------------------------------------------------
  // 1. Alcohol Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'alcohol',
    name: 'Alcohol Addiction',
    substanceName: 'Alcohol',
    description:
      'Alcohol addiction, clinically known as alcohol use disorder (AUD), is a chronic medical condition characterized by an inability to control drinking despite negative consequences. Because alcohol is legal and socially normalized, many people struggle to recognize when casual drinking has crossed the line into dependence. Alcohol affects virtually every organ system in the body, and withdrawal from heavy, prolonged use can be life-threatening without medical supervision. At Trust SoCal, we provide medically supervised detox and comprehensive treatment tailored to the unique challenges of alcohol recovery.',
    signs: [
      'Drinking more or for longer periods than originally intended',
      'Unsuccessful attempts to cut down or control alcohol consumption',
      'Spending significant time obtaining, drinking, or recovering from alcohol',
      'Continuing to drink despite relationship, work, or health problems caused by alcohol',
      'Needing to drink increasing amounts to achieve the same effect (tolerance)',
    ],
    healthEffects: [
      'Liver disease including fatty liver, hepatitis, and cirrhosis',
      'Increased risk of cardiovascular disease, stroke, and high blood pressure',
      'Damage to the brain and nervous system, including cognitive impairment and peripheral neuropathy',
      'Weakened immune system leading to increased susceptibility to infections',
      'Elevated risk of several cancers including liver, breast, esophageal, and colorectal cancer',
    ],
    withdrawalInfo:
      'Alcohol withdrawal can begin within 6 to 24 hours after the last drink and ranges from mild symptoms such as anxiety, tremors, and insomnia to severe and potentially fatal complications including seizures and delirium tremens (DTs). The severity of withdrawal depends on the duration and quantity of use, previous withdrawal history, and individual health factors. Medical detox is strongly recommended for anyone with a history of heavy or prolonged alcohol use, as supervised withdrawal with appropriate medications can prevent dangerous complications and significantly reduce discomfort.',
    treatmentApproach:
      'Treatment for alcohol addiction at Trust SoCal begins with medically supervised detox to ensure safe withdrawal. Clients then transition into a comprehensive treatment program that may include residential care, PHP, or IOP depending on their clinical needs. Evidence-based therapies such as Cognitive Behavioral Therapy (CBT), Motivational Enhancement Therapy (MET), and 12-step facilitation form the core of treatment. Medication-assisted treatment with FDA-approved medications like naltrexone, acamprosate, or disulfiram may be incorporated to reduce cravings and support abstinence. Family therapy and aftercare planning are integral components of every alcohol recovery plan.',
    statistics: [
      'Approximately 29.5 million Americans aged 12 and older had alcohol use disorder in the past year, according to the 2022 National Survey on Drug Use and Health.',
      'Alcohol is the third leading preventable cause of death in the United States, contributing to approximately 178,000 deaths per year.',
      'Only about 7.6% of individuals with alcohol use disorder receive any form of treatment in a given year.',
    ],
    faqs: [
      {
        question: 'How do I know if I have an alcohol problem?',
        answer:
          'If you find yourself unable to control how much or how often you drink, if you experience withdrawal symptoms when you stop, or if alcohol is causing problems in your relationships, work, or health, these are strong indicators of alcohol use disorder. A professional assessment can provide clarity and help determine the appropriate level of care for your situation.',
      },
      {
        question: 'Is alcohol withdrawal dangerous?',
        answer:
          'Yes. Alcohol withdrawal can be medically dangerous and, in severe cases, life-threatening. Seizures and delirium tremens are the most serious risks and can occur 48 to 72 hours after the last drink. This is why medical detox under professional supervision is critically important for anyone with a history of heavy or prolonged alcohol use.',
      },
      {
        question: 'How long does it take to recover from alcohol addiction?',
        answer:
          'Recovery is a lifelong process, but the acute phase of treatment typically involves 5 to 10 days of detox followed by 30 to 90 days of primary treatment. The brain continues to heal for months and even years after stopping drinking. Ongoing participation in aftercare, support groups, and healthy lifestyle practices is essential for maintaining long-term sobriety.',
      },
      {
        question: 'Can I learn to drink moderately instead of quitting completely?',
        answer:
          'For individuals diagnosed with moderate to severe alcohol use disorder, clinical research strongly supports complete abstinence as the most effective and safest goal. The neurological changes caused by addiction make controlled drinking extremely difficult and risky. Your treatment team will discuss goals and expectations with you as part of your personalized care plan.',
      },
      {
        question: 'Are medications used to treat alcohol addiction?',
        answer:
          'Yes. Several FDA-approved medications can help support alcohol recovery. Naltrexone reduces cravings and the rewarding effects of alcohol, acamprosate helps stabilize brain chemistry after withdrawal, and disulfiram causes unpleasant reactions when alcohol is consumed as a deterrent. Your physician will determine whether medication is appropriate as part of your overall treatment plan.',
      },
    ],
    heroImage: '/images/addiction-types/alcohol.jpg',
    metaTitle:
      'Alcohol Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Evidence-based alcohol addiction treatment in Orange County. Medical detox, therapy, and aftercare to help you achieve lasting sobriety at Trust SoCal.',
    relatedTypes: ['benzodiazepines', 'prescription-drugs', 'opioids'],
  },

  // -------------------------------------------------------------------------
  // 2. Opioid Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'opioids',
    name: 'Opioid Addiction',
    substanceName: 'Opioids (Prescription Painkillers)',
    description:
      'Opioid addiction encompasses dependence on prescription painkillers such as oxycodone, hydrocodone, morphine, and codeine. These medications are highly effective for managing acute pain but carry a significant risk of physical dependence and addiction, even when taken as prescribed. Opioids work by binding to receptors in the brain and spinal cord, producing pain relief and intense feelings of euphoria that drive continued use. The opioid epidemic has devastated communities across the United States, and effective, compassionate treatment is more critical than ever.',
    signs: [
      'Taking opioid medications in higher doses or more frequently than prescribed',
      'Visiting multiple doctors or fabricating symptoms to obtain additional prescriptions',
      'Continuing to use opioids after the medical condition they were prescribed for has resolved',
      'Experiencing withdrawal symptoms such as muscle aches, restlessness, and anxiety when not using',
      'Neglecting responsibilities at work, school, or home due to opioid use',
    ],
    healthEffects: [
      'Respiratory depression, which can lead to fatal overdose',
      'Chronic constipation and gastrointestinal dysfunction',
      'Hormonal imbalances including reduced testosterone and disrupted menstrual cycles',
      'Increased sensitivity to pain over time (opioid-induced hyperalgesia)',
      'Weakened immune function and increased susceptibility to infections',
    ],
    withdrawalInfo:
      'Opioid withdrawal typically begins 8 to 24 hours after the last dose of short-acting opioids and may be delayed up to 36 hours for longer-acting formulations. Symptoms include intense muscle aches, abdominal cramping, diarrhea, nausea and vomiting, severe anxiety, insomnia, and intense cravings. While opioid withdrawal is rarely life-threatening in otherwise healthy individuals, it is extremely uncomfortable and is one of the primary drivers of relapse. Medication-assisted treatment with buprenorphine or other FDA-approved medications can dramatically reduce withdrawal severity and improve treatment retention.',
    treatmentApproach:
      'Opioid addiction treatment at Trust SoCal begins with medically supervised detox using comfort medications and, when appropriate, medication-assisted treatment (MAT) with buprenorphine or naltrexone. Following detox, clients engage in a comprehensive treatment program that addresses the psychological, behavioral, and social dimensions of addiction. Cognitive Behavioral Therapy, Motivational Interviewing, and group process therapy are core components. We also address common co-occurring issues such as chronic pain management, depression, and anxiety. Relapse prevention planning and long-term aftercare are prioritized to support sustained recovery.',
    statistics: [
      'Opioids were involved in over 80,000 overdose deaths in the United States in 2022, according to the CDC.',
      'Approximately 2.1 million Americans had an opioid use disorder involving prescription opioids in the past year.',
      'Medication-assisted treatment (MAT) has been shown to reduce opioid overdose deaths by approximately 50%.',
    ],
    faqs: [
      {
        question: 'Can someone become addicted to opioids even when taking them as prescribed?',
        answer:
          'Yes. Physical dependence can develop within just a few weeks of regular opioid use, even at prescribed doses. Dependence means the body has adapted to the presence of the drug and withdrawal symptoms will occur if it is stopped suddenly. Addiction involves compulsive use despite harmful consequences and often develops from dependence, but the two are distinct clinical conditions.',
      },
      {
        question: 'What is medication-assisted treatment (MAT) for opioid addiction?',
        answer:
          'MAT combines FDA-approved medications such as buprenorphine (Suboxone), naltrexone (Vivitrol), or methadone with behavioral therapy to treat opioid use disorder. These medications reduce cravings, prevent withdrawal symptoms, and block the euphoric effects of opioids. Research consistently shows that MAT significantly improves treatment outcomes, reduces overdose risk, and increases long-term recovery rates.',
      },
      {
        question: 'How long does opioid withdrawal last?',
        answer:
          'Acute opioid withdrawal symptoms typically peak within 2 to 3 days and significantly improve within 5 to 7 days. However, some individuals experience post-acute withdrawal symptoms (PAWS) including mood disturbances, sleep difficulties, and cravings that can persist for weeks or months. Medical supervision and MAT can manage both acute and prolonged withdrawal effectively.',
      },
      {
        question: 'Is opioid addiction treatment confidential?',
        answer:
          'Absolutely. Federal regulations under 42 CFR Part 2 provide additional privacy protections for substance use disorder treatment records beyond standard HIPAA requirements. Your treatment information cannot be disclosed without your written consent. We take confidentiality seriously and ensure your privacy is protected throughout every stage of care.',
      },
    ],
    heroImage: '/images/addiction-types/opioids.jpg',
    metaTitle:
      'Opioid Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Comprehensive opioid addiction treatment in Orange County with medical detox, MAT, and evidence-based therapy. Start your recovery at Trust SoCal today.',
    relatedTypes: ['heroin', 'fentanyl', 'prescription-drugs'],
  },

  // -------------------------------------------------------------------------
  // 3. Heroin Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'heroin',
    name: 'Heroin Addiction',
    substanceName: 'Heroin',
    description:
      'Heroin is a highly addictive illegal opioid derived from morphine that produces an intense rush of euphoria followed by a prolonged state of drowsiness and relaxation. Because of its potency and rapid onset of action, heroin creates a powerful cycle of dependence that is extremely difficult to break without professional help. The modern heroin supply is increasingly contaminated with fentanyl and other synthetic opioids, making every use potentially fatal. Treatment for heroin addiction requires a comprehensive approach that addresses physical dependence, psychological patterns, and the social factors that sustain the addiction.',
    signs: [
      'Track marks, bruising, or collapsed veins at injection sites',
      'Alternating between alertness and a drowsy, nodding-off state',
      'Possession of drug paraphernalia such as needles, spoons, lighters, or small bags of white or brown powder',
      'Dramatic changes in social circles, abandoning long-time friends for new, unknown associates',
      'Severe financial difficulties or engaging in illegal activities to fund heroin use',
    ],
    healthEffects: [
      'Fatal overdose due to respiratory depression, often compounded by fentanyl contamination',
      'Bloodborne infections including HIV and hepatitis C from needle sharing',
      'Bacterial infections of the heart valves (endocarditis) and soft tissue abscesses',
      'Collapsed veins, scarring, and chronic circulatory problems from injection use',
      'Severe constipation, malnutrition, and significant weight loss',
    ],
    withdrawalInfo:
      'Heroin withdrawal typically begins 6 to 12 hours after the last dose and peaks in intensity between 24 and 72 hours. Symptoms include severe muscle and bone pain, uncontrollable diarrhea and vomiting, cold flashes with goosebumps, involuntary leg movements, intense cravings, and profound insomnia. While heroin withdrawal is seldom directly fatal, the extreme discomfort drives many people back to use, which is particularly dangerous because tolerance drops rapidly during withdrawal, dramatically increasing overdose risk. Medically supervised detox with comfort medications and MAT is the safest and most effective approach.',
    treatmentApproach:
      'Heroin addiction treatment at Trust SoCal begins with medically supervised detox, often incorporating medication-assisted treatment with buprenorphine or naltrexone to ease withdrawal and reduce cravings. Once stabilized, clients enter a residential or structured outpatient program that uses evidence-based therapies including CBT, contingency management, and trauma-informed care to address the behavioral and psychological aspects of heroin addiction. Many heroin users have significant trauma histories and co-occurring mental health conditions that must be addressed concurrently. Comprehensive aftercare planning, including MAT maintenance and community support connections, is essential for long-term recovery from heroin addiction.',
    statistics: [
      'Heroin-involved overdose deaths reached approximately 9,000 in the United States in 2022, though many heroin deaths now also involve fentanyl.',
      'Nearly 80% of people who use heroin report that their opioid use began with prescription painkillers before transitioning to heroin.',
      'The average time between first heroin use and seeking treatment is approximately 5 years, though early intervention dramatically improves outcomes.',
    ],
    faqs: [
      {
        question: 'Why do people switch from prescription opioids to heroin?',
        answer:
          'As tolerance to prescription opioids increases, obtaining sufficient quantities becomes increasingly difficult and expensive. Heroin produces similar effects at a fraction of the cost and is often more readily available. This economic reality drives many people with prescription opioid dependence to heroin, which is one of the most well-documented pathways in the opioid epidemic.',
      },
      {
        question: 'Is heroin addiction treatable?',
        answer:
          'Yes. Heroin addiction is a treatable medical condition, and many people achieve lasting recovery with appropriate professional help. Treatment that combines medication-assisted therapy, behavioral therapy, and long-term support produces the best outcomes. Recovery requires ongoing commitment, but millions of people have successfully overcome heroin addiction and rebuilt their lives.',
      },
      {
        question: 'How dangerous is fentanyl-contaminated heroin?',
        answer:
          'Extremely dangerous. Fentanyl is 50 to 100 times more potent than morphine, and even a tiny amount can cause a fatal overdose. Because fentanyl is often mixed unevenly into the heroin supply, users have no way to know how much they are consuming. This contamination has driven a dramatic increase in overdose deaths and makes every use of street heroin potentially lethal.',
      },
      {
        question: 'What support is available for families of heroin users?',
        answer:
          'Trust SoCal offers a comprehensive family therapy program that helps loved ones understand heroin addiction, establish healthy boundaries, and process the emotional toll of the disease. We also connect families with community resources such as Nar-Anon, family support groups, and educational workshops. Family involvement in treatment has been shown to significantly improve recovery outcomes.',
      },
      {
        question: 'How long does heroin treatment take?',
        answer:
          'Detox typically takes 5 to 7 days, followed by a recommended minimum of 30 to 90 days of primary treatment. However, heroin addiction recovery is a long-term process. Many clients benefit from ongoing medication-assisted treatment, continued outpatient therapy, and participation in aftercare programs for a year or more after completing primary treatment.',
      },
    ],
    heroImage: '/images/addiction-types/heroin.jpg',
    metaTitle:
      'Heroin Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Specialized heroin addiction treatment in Orange County with medical detox, MAT, and trauma-informed therapy. Reclaim your life at Trust SoCal.',
    relatedTypes: ['fentanyl', 'opioids', 'cocaine'],
  },

  // -------------------------------------------------------------------------
  // 4. Fentanyl Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'fentanyl',
    name: 'Fentanyl Addiction',
    substanceName: 'Fentanyl',
    description:
      'Fentanyl is a synthetic opioid that is 50 to 100 times more potent than morphine and has become the leading driver of overdose deaths in the United States. Originally developed for severe pain management in clinical settings, illicitly manufactured fentanyl now permeates the illegal drug supply and is found in counterfeit pills, heroin, cocaine, and methamphetamine. Its extraordinary potency means that a dose as small as two milligrams can be fatal, and many users are unaware that the substance they are consuming contains fentanyl. Addiction to fentanyl develops rapidly and requires specialized, medically intensive treatment.',
    signs: [
      'Extreme drowsiness, confusion, or loss of consciousness',
      'Pinpoint pupils even in low-light conditions',
      'Significant respiratory depression, including slow, shallow, or labored breathing',
      'Rapid escalation in opioid tolerance and needing increasingly larger doses',
      'Possession of pressed pills, patches, or powders of unknown origin',
    ],
    healthEffects: [
      'Fatal respiratory depression and overdose, the leading cause of fentanyl-related death',
      'Severe oxygen deprivation (hypoxia) causing permanent brain damage in non-fatal overdoses',
      'Profound physical dependence that develops within days to weeks of regular use',
      'Chest wall rigidity (wooden chest syndrome) at high doses, which can prevent breathing',
      'Cardiovascular complications including irregular heart rhythm and cardiac arrest',
    ],
    withdrawalInfo:
      'Fentanyl withdrawal is similar to other opioid withdrawal syndromes but is often described as more intense and longer-lasting due to the drug\'s high potency and the way synthetic opioids accumulate in body tissues. Symptoms can begin within 8 to 24 hours after the last dose and include severe muscle pain, profuse sweating, uncontrollable diarrhea, vomiting, extreme restlessness, and overwhelming cravings. A complication known as precipitated withdrawal can occur if buprenorphine-based medications are started too soon, causing sudden and severe symptoms. Medical detox with careful, individualized medication protocols is essential for safe fentanyl withdrawal.',
    treatmentApproach:
      'Fentanyl addiction treatment at Trust SoCal requires careful medical management due to the drug\'s extreme potency and the complexity of its withdrawal. Our medical team uses specialized detox protocols, including micro-dosing strategies for buprenorphine induction, to minimize the risk of precipitated withdrawal. Long-acting injectable naltrexone (Vivitrol) may be offered after detox for clients who prefer a non-opioid medication approach. Comprehensive behavioral treatment follows, incorporating CBT, contingency management, and trauma-informed therapy. Given the high relapse and overdose risk associated with fentanyl, our program places strong emphasis on overdose prevention education, naloxone (Narcan) training, and robust aftercare planning.',
    statistics: [
      'Synthetic opioids, primarily illicitly manufactured fentanyl, were involved in nearly 74,000 overdose deaths in the United States in 2022.',
      'Fentanyl is now the leading cause of death for Americans aged 18 to 45, surpassing car accidents, suicide, and all other causes.',
      'DEA laboratory testing found that 7 out of every 10 seized fentanyl-containing pills contain a potentially lethal dose.',
    ],
    faqs: [
      {
        question: 'How does fentanyl differ from other opioids?',
        answer:
          'Fentanyl is dramatically more potent than other opioids. While heroin is approximately 2 to 3 times stronger than morphine, fentanyl is 50 to 100 times more potent. This means the margin between a dose that produces a high and a dose that causes death is extremely narrow. Additionally, illicitly manufactured fentanyl is often inconsistently mixed, making it impossible for users to gauge how much they are taking.',
      },
      {
        question: 'What is precipitated withdrawal and why is it a concern with fentanyl?',
        answer:
          'Precipitated withdrawal occurs when a partial opioid agonist like buprenorphine displaces a full opioid agonist from brain receptors, causing sudden and intense withdrawal symptoms. Because fentanyl is stored in body fat and released slowly, traditional buprenorphine induction timelines can trigger precipitated withdrawal even days after last use. Our medical team uses specialized micro-dosing protocols to safely initiate buprenorphine treatment and avoid this complication.',
      },
      {
        question: 'Can someone overdose on fentanyl by touching it?',
        answer:
          'Incidental skin contact with fentanyl is extremely unlikely to cause overdose based on current scientific evidence. Fentanyl is not efficiently absorbed through intact skin without the special formulations used in pharmaceutical patches. However, fentanyl can be absorbed through mucous membranes, and any contact with the substance should be treated with appropriate caution. The primary overdose risk comes from ingestion, inhalation, or injection.',
      },
      {
        question: 'Should my family have Narcan (naloxone) available?',
        answer:
          'Absolutely. Naloxone is a life-saving medication that can reverse an opioid overdose within minutes. We strongly recommend that every family dealing with opioid addiction keep naloxone readily accessible and that multiple family members be trained in its use. At Trust SoCal, naloxone training is a standard part of our discharge planning process for all opioid-related treatment.',
      },
      {
        question: 'Is long-term recovery from fentanyl addiction possible?',
        answer:
          'Yes, though fentanyl addiction is among the most challenging substance use disorders to treat due to its potency and the intensity of cravings. Long-term recovery is absolutely achievable with comprehensive treatment that includes medical stabilization, behavioral therapy, medication-assisted treatment, and sustained aftercare. Many of our alumni have successfully maintained long-term sobriety after fentanyl addiction.',
      },
    ],
    heroImage: '/images/addiction-types/fentanyl.jpg',
    metaTitle:
      'Fentanyl Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Specialized fentanyl addiction treatment in Orange County. Medical detox with advanced protocols, MAT, and comprehensive therapy at Trust SoCal.',
    relatedTypes: ['heroin', 'opioids', 'prescription-drugs'],
  },

  // -------------------------------------------------------------------------
  // 5. Methamphetamine Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'methamphetamine',
    name: 'Methamphetamine Addiction',
    substanceName: 'Methamphetamine (Meth)',
    description:
      'Methamphetamine is a powerful, highly addictive stimulant that affects the central nervous system by flooding the brain with dopamine, producing an intense rush of euphoria, energy, and confidence. Chronic methamphetamine use causes severe neurological damage, dramatically altering brain structure and function in ways that impair decision-making, emotional regulation, and impulse control. The physical, psychological, and social devastation caused by meth addiction is profound, but recovery is possible with sustained, evidence-based treatment that addresses the extensive damage this drug inflicts on the brain and body.',
    signs: [
      'Extended periods of wakefulness lasting days, followed by prolonged crash and sleep',
      'Significant and rapid weight loss with decreased appetite',
      'Severe dental deterioration commonly known as "meth mouth"',
      'Skin picking leading to open sores, scabs, and scarring',
      'Paranoia, agitation, erratic behavior, or hallucinations during use or after binges',
    ],
    healthEffects: [
      'Severe neurotoxicity and damage to dopamine-producing neurons in the brain',
      'Cardiovascular damage including elevated blood pressure, irregular heartbeat, and increased stroke risk',
      'Extensive dental decay and gum disease from dry mouth, teeth grinding, and poor hygiene',
      'Psychotic symptoms including paranoia, visual and auditory hallucinations, and delusions',
      'Cognitive impairment affecting memory, attention, and executive function that may persist months into recovery',
    ],
    withdrawalInfo:
      'Methamphetamine withdrawal is primarily psychological rather than physically dangerous, but it is intensely uncomfortable and can be emotionally overwhelming. Symptoms begin within 24 hours of last use and include extreme fatigue, increased appetite, vivid and disturbing dreams, profound depression, anxiety, irritability, and intense cravings. The depression and anhedonia (inability to feel pleasure) associated with meth withdrawal can last for weeks or months as the brain slowly rebuilds its depleted dopamine system. Suicidal ideation is a serious risk during this period, making professional supervision and psychiatric support critical.',
    treatmentApproach:
      'There are currently no FDA-approved medications specifically for methamphetamine addiction, making behavioral therapies the cornerstone of treatment. At Trust SoCal, our meth treatment program emphasizes Cognitive Behavioral Therapy (CBT) to identify and change thought patterns that drive use, contingency management to reinforce positive behaviors, and the Matrix Model, a structured outpatient approach specifically developed for stimulant addiction. Psychiatric support is essential to manage the severe depression and potential psychosis associated with meth recovery. Physical health restoration, nutritional rehabilitation, and sleep hygiene are prioritized alongside therapeutic work. Long-term treatment engagement is particularly important for meth addiction due to the extended neurological recovery timeline.',
    statistics: [
      'Approximately 2.5 million Americans aged 12 and older reported using methamphetamine in the past year, according to the 2022 NSDUH.',
      'Methamphetamine-involved overdose deaths have tripled since 2015, reaching approximately 34,000 in 2022, often in combination with fentanyl.',
      'Brain imaging studies show that while methamphetamine causes significant neurological damage, many brain functions can recover substantially after 14 or more months of sustained abstinence.',
    ],
    faqs: [
      {
        question: 'How long does it take for the brain to recover from meth use?',
        answer:
          'Brain recovery from methamphetamine use is a gradual process. Research using neuroimaging has shown that damaged dopamine receptors can begin to recover after about 12 to 18 months of sustained abstinence, with significant improvements in cognitive function observed after 14 months or more. Some individuals experience faster recovery, while others may have longer-lasting effects depending on the duration and severity of their use.',
      },
      {
        question: 'Is there medication for meth addiction?',
        answer:
          'Currently, there are no FDA-approved medications specifically for methamphetamine use disorder, though several promising candidates are in clinical trials. However, medications may be prescribed to manage specific symptoms such as depression, anxiety, insomnia, or psychosis during recovery. Behavioral therapies remain the most effective treatment approach and form the foundation of our meth addiction program.',
      },
      {
        question: 'Can meth-induced psychosis be permanent?',
        answer:
          'In most cases, meth-induced psychosis resolves within days to weeks after stopping use, though some individuals may experience symptoms for several months. A small percentage of heavy, long-term users may develop a vulnerability to psychotic episodes that can recur even in sobriety, particularly during periods of high stress or sleep deprivation. Psychiatric medication and ongoing monitoring can effectively manage these symptoms.',
      },
      {
        question: 'Why is meth addiction considered so difficult to treat?',
        answer:
          'Methamphetamine causes extensive damage to the brain\'s reward system by depleting dopamine and damaging dopamine receptors. This results in a prolonged period during early recovery where clients experience severe depression, inability to feel pleasure, fatigue, and intense cravings. The lack of FDA-approved pharmacological aids and the long neurological recovery timeline make sustained treatment engagement critical. However, with comprehensive, long-term treatment, many people achieve lasting recovery.',
      },
    ],
    heroImage: '/images/addiction-types/methamphetamine.jpg',
    metaTitle:
      'Methamphetamine Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Comprehensive meth addiction treatment in Orange County. CBT, psychiatric care, and long-term recovery support at Trust SoCal. Start healing today.',
    relatedTypes: ['cocaine', 'fentanyl', 'alcohol'],
  },

  // -------------------------------------------------------------------------
  // 6. Cocaine Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'cocaine',
    name: 'Cocaine Addiction',
    substanceName: 'Cocaine',
    description:
      'Cocaine is a powerful stimulant drug that produces short-lived feelings of intense euphoria, energy, and mental alertness by blocking the reabsorption of dopamine in the brain. Whether snorted as powder or smoked as crack cocaine, its short duration of action drives a pattern of repeated, escalating use that quickly leads to addiction. Cocaine use places enormous stress on the cardiovascular system and can cause sudden cardiac events even in young, otherwise healthy individuals. The psychological grip of cocaine addiction is formidable, driven by powerful cravings and the deceptive belief that one can control their use.',
    signs: [
      'Frequent nosebleeds, runny nose, or loss of smell from snorting cocaine',
      'Dilated pupils, excessive talkativeness, and inflated confidence during use',
      'Financial difficulties or unexplained spending despite adequate income',
      'Rapid mood swings between euphoric highs and irritable, depressive crashes',
      'Withdrawal from previously enjoyed activities and social isolation between binges',
    ],
    healthEffects: [
      'Heart attack, stroke, and sudden cardiac death, even in first-time or young users',
      'Damage to nasal septum and sinus cavities from chronic snorting',
      'Severe anxiety, panic attacks, and cocaine-induced paranoia',
      'Significant risk of seizures, particularly with high doses or prolonged binges',
      'Sexual dysfunction and reproductive health problems with chronic use',
    ],
    withdrawalInfo:
      'Cocaine withdrawal is primarily psychological and does not produce the physically dangerous symptoms seen with alcohol or benzodiazepine withdrawal. However, the crash following cocaine use can be severe, characterized by extreme fatigue, increased appetite, vivid and unpleasant dreams, psychomotor retardation, and profound depression that can include suicidal thoughts. Cravings for cocaine can be intense and are often triggered by environmental cues associated with past use. The withdrawal timeline typically involves a crash phase lasting 1 to 3 days, followed by weeks of depressed mood, irritability, and intermittent cravings. Professional treatment provides the structure and psychiatric support needed to manage these symptoms safely.',
    treatmentApproach:
      'Like methamphetamine, there are no FDA-approved medications specifically for cocaine addiction, though research into several candidates is ongoing. Treatment at Trust SoCal relies on evidence-based behavioral therapies as the primary intervention. Cognitive Behavioral Therapy helps clients identify and avoid triggers, contingency management provides tangible reinforcement for maintaining sobriety, and community reinforcement approaches help clients rebuild a rewarding, drug-free lifestyle. Group therapy and peer support play an important role in addressing the social dimensions of cocaine use. Psychiatric management of co-occurring depression and anxiety is integral, and comprehensive aftercare planning helps clients maintain gains beyond primary treatment.',
    statistics: [
      'Approximately 1.4 million Americans aged 12 and older had a cocaine use disorder in the past year, according to the 2022 NSDUH.',
      'Cocaine-involved overdose deaths exceeded 27,000 in the United States in 2022, with the majority also involving synthetic opioids like fentanyl.',
      'The combination of cocaine and fentanyl, sometimes called a "speedball," has become one of the fastest-growing causes of drug overdose death in the country.',
    ],
    faqs: [
      {
        question: 'Is cocaine physically addictive?',
        answer:
          'Cocaine produces powerful psychological dependence driven by its intense effect on the brain\'s dopamine system. While it does not cause the classic physical withdrawal syndrome seen with opioids or alcohol, the neurological changes from chronic cocaine use create intense cravings and a compulsive drive to use that meets every clinical definition of addiction. The distinction between physical and psychological addiction is less meaningful than commonly believed; both involve real changes in brain chemistry.',
      },
      {
        question: 'Is crack cocaine more addictive than powder cocaine?',
        answer:
          'Crack and powder cocaine are the same chemical compound. The primary difference is the route of administration: crack is smoked and reaches the brain within seconds, producing a more intense but shorter-lived high. This rapid onset and offset cycle makes the pattern of compulsive re-dosing more pronounced, which can accelerate the development of addiction. Both forms carry serious addiction risk.',
      },
      {
        question: 'Can cocaine cause a heart attack?',
        answer:
          'Yes. Cocaine is one of the most common illicit drug causes of heart attack, and it can trigger cardiac events in otherwise healthy young adults with no prior heart disease. Cocaine constricts blood vessels, accelerates heart rate, and raises blood pressure, creating conditions that can lead to heart attack, stroke, aortic dissection, or fatal arrhythmia. This risk exists with every use, regardless of dose or frequency.',
      },
      {
        question: 'How long does cocaine addiction treatment take?',
        answer:
          'Treatment duration varies by individual, but a minimum of 90 days of engaged treatment is associated with significantly better outcomes for stimulant use disorders. Many clients benefit from 30 to 90 days of residential or PHP care followed by several months of IOP and ongoing aftercare. The key is sustained engagement; early dropout is the greatest predictor of relapse for cocaine addiction.',
      },
    ],
    heroImage: '/images/addiction-types/cocaine.jpg',
    metaTitle:
      'Cocaine Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Expert cocaine addiction treatment in Orange County with CBT, group therapy, and psychiatric care. Begin recovery at Trust SoCal. Call today.',
    relatedTypes: ['methamphetamine', 'alcohol', 'opioids'],
  },

  // -------------------------------------------------------------------------
  // 7. Benzodiazepine Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'benzodiazepines',
    name: 'Benzodiazepine Addiction',
    substanceName: 'Benzodiazepines (Xanax, Valium, Klonopin, Ativan)',
    description:
      'Benzodiazepines are a class of prescription sedatives commonly prescribed for anxiety disorders, insomnia, seizures, and muscle spasms. While effective for short-term use, benzodiazepines carry a high risk of physical dependence that can develop within just a few weeks of regular use. Common benzodiazepines include alprazolam (Xanax), diazepam (Valium), clonazepam (Klonopin), and lorazepam (Ativan). Benzodiazepine addiction is particularly dangerous because withdrawal can cause life-threatening seizures, making medical detox not just recommended but essential for safe discontinuation.',
    signs: [
      'Taking higher doses or using benzodiazepines more frequently than prescribed',
      'Excessive drowsiness, slurred speech, and impaired coordination',
      'Memory problems, confusion, and difficulty concentrating',
      'Anxiety that worsens significantly whenever the medication begins to wear off (rebound anxiety)',
      'Doctor shopping or obtaining benzodiazepines from multiple prescribers or non-medical sources',
    ],
    healthEffects: [
      'Severe cognitive impairment including memory loss and difficulty with learning and concentration',
      'Increased risk of falls, fractures, and motor vehicle accidents due to sedation and impaired coordination',
      'Respiratory depression and fatal overdose, especially when combined with opioids or alcohol',
      'Long-term neurological changes that may persist for months or years after discontinuation',
      'Paradoxical reactions including increased anxiety, agitation, aggression, and insomnia',
    ],
    withdrawalInfo:
      'Benzodiazepine withdrawal is medically serious and can be life-threatening. Symptoms range from rebound anxiety, insomnia, tremors, and sensory disturbances to seizures, psychosis, and, in rare cases, death. The severity depends on the specific benzodiazepine, dose, duration of use, and individual factors. Short-acting benzodiazepines like Xanax tend to produce more intense withdrawal, while long-acting formulations may have a delayed onset. Safe discontinuation requires a medically supervised taper, typically converting the patient to a long-acting benzodiazepine and gradually reducing the dose over days to weeks. Abrupt cessation of benzodiazepines is dangerous and should never be attempted without medical supervision.',
    treatmentApproach:
      'Benzodiazepine addiction treatment at Trust SoCal centers on a carefully managed medical taper as the foundation of safe detox. Our physicians use evidence-based tapering protocols, often cross-titrating to a long-acting benzodiazepine like diazepam and gradually reducing the dose to minimize withdrawal severity. Adjunctive medications may be used to manage specific symptoms. Once medically stable, clients engage in behavioral therapy focused on developing non-pharmacological coping strategies for the anxiety or insomnia that originally led to benzodiazepine use. CBT for insomnia (CBT-I) and CBT for anxiety are particularly effective. Addressing the underlying condition that prompted benzodiazepine prescribing is essential for preventing relapse.',
    statistics: [
      'Benzodiazepines were involved in approximately 14,000 overdose deaths in the United States in 2022, most commonly in combination with opioids.',
      'Approximately 30% of opioid overdose deaths also involve benzodiazepines, highlighting the extreme danger of combined use.',
      'An estimated 5.3 million Americans misused prescription benzodiazepines in the past year, according to the 2022 NSDUH.',
    ],
    faqs: [
      {
        question: 'Why is benzodiazepine withdrawal so dangerous?',
        answer:
          'Benzodiazepines enhance the effect of GABA, the brain\'s primary inhibitory neurotransmitter. With chronic use, the brain reduces its own GABA production and increases excitatory activity to compensate. When the drug is suddenly removed, the brain is left in a hyperexcitable state that can trigger seizures, which are potentially fatal. This is why a gradual, medically supervised taper is essential and why benzodiazepines should never be stopped abruptly.',
      },
      {
        question: 'How long does benzodiazepine withdrawal take?',
        answer:
          'The acute withdrawal phase typically lasts 1 to 4 weeks, depending on the specific benzodiazepine and the tapering protocol used. However, a protracted withdrawal syndrome can occur in some individuals, producing symptoms such as anxiety, insomnia, cognitive difficulties, and sensory disturbances that fluctuate for months or even up to a year. Our treatment team monitors for protracted withdrawal and provides ongoing support throughout the recovery process.',
      },
      {
        question: 'Can I become addicted to benzodiazepines even if I take them as prescribed?',
        answer:
          'Yes. Physical dependence on benzodiazepines can develop within 2 to 4 weeks of daily use, even at therapeutic doses prescribed by a physician. Dependence means your body has adapted to the drug and you will experience withdrawal symptoms without it. This is why current medical guidelines generally recommend benzodiazepines only for short-term use and emphasize the importance of having a clear discontinuation plan.',
      },
      {
        question: 'What alternatives exist for managing anxiety without benzodiazepines?',
        answer:
          'Several effective alternatives exist, including non-addictive medications like SSRIs, SNRIs, and buspirone for ongoing anxiety management, as well as evidence-based psychotherapies such as CBT, which has been shown to be as effective as benzodiazepines for many anxiety disorders with more lasting benefits. Mindfulness-based stress reduction, regular exercise, and sleep hygiene practices are also powerful complementary approaches that we teach as part of our treatment program.',
      },
    ],
    heroImage: '/images/addiction-types/benzodiazepines.jpg',
    metaTitle:
      'Benzodiazepine Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Safe, medically supervised benzodiazepine detox and addiction treatment in Orange County. Expert tapering protocols and CBT therapy at Trust SoCal.',
    relatedTypes: ['alcohol', 'opioids', 'prescription-drugs'],
  },

  // -------------------------------------------------------------------------
  // 8. Prescription Drug Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'prescription-drugs',
    name: 'Prescription Drug Addiction',
    substanceName: 'Prescription Medications',
    description:
      'Prescription drug addiction encompasses the misuse of and dependence on any medication obtained through legitimate medical channels, including opioid painkillers, benzodiazepine sedatives, stimulants such as Adderall and Ritalin, and sleep aids like Ambien. Because these drugs are prescribed by physicians and manufactured by pharmaceutical companies, many people underestimate their addiction potential and believe they are inherently safer than illicit drugs. In reality, prescription drug misuse is one of the most common and fastest-growing forms of substance use disorder in the United States. Treatment requires addressing both the addiction itself and the underlying medical condition that originally prompted the prescription.',
    signs: [
      'Taking medications in ways not prescribed, such as higher doses, more frequent dosing, or crushing and snorting pills',
      'Requesting early refills, reporting lost prescriptions, or visiting multiple doctors to obtain more medication',
      'Continuing to use the medication after the medical condition it was prescribed for has resolved',
      'Preoccupation with obtaining and using the medication, including anxiety about running out',
      'Changes in mood, behavior, or personality that coincide with medication use patterns',
    ],
    healthEffects: [
      'Organ damage including liver toxicity from acetaminophen-containing painkillers and kidney damage from chronic NSAID use',
      'Respiratory depression and overdose death, particularly with opioids and sedatives',
      'Cardiovascular complications including irregular heartbeat and elevated blood pressure from stimulant misuse',
      'Cognitive impairment, memory problems, and reduced executive function',
      'Development of tolerance requiring escalating doses to achieve the same effect, increasing all health risks',
    ],
    withdrawalInfo:
      'Withdrawal from prescription drugs varies significantly depending on the class of medication involved. Opioid painkiller withdrawal produces severe flu-like symptoms, muscle pain, and intense cravings. Benzodiazepine and sleep aid withdrawal can cause seizures and requires careful medical tapering. Stimulant withdrawal primarily manifests as severe fatigue, depression, and cognitive impairment. In all cases, medical supervision ensures safety and comfort during the withdrawal process. Our medical team develops individualized detox protocols based on the specific medications, doses, and duration of use for each client.',
    treatmentApproach:
      'Prescription drug addiction treatment at Trust SoCal begins with a thorough medical evaluation to understand the full scope of medication use and any underlying health conditions. Detox is tailored to the specific class of drug and may include tapering protocols, medication-assisted treatment, or symptom management as appropriate. Following stabilization, clients engage in a comprehensive treatment program that addresses the psychological patterns of prescription drug misuse, including the tendency to view medication as the solution to all discomfort. CBT, motivational interviewing, and relapse prevention therapy help clients develop alternative coping strategies. We also coordinate with prescribing physicians to ensure appropriate management of any legitimate medical conditions.',
    statistics: [
      'An estimated 14.3 million Americans aged 12 and older misused prescription psychotherapeutic drugs in the past year, according to the 2022 NSDUH.',
      'Prescription opioids remain the initial point of exposure for approximately 75% of individuals who eventually develop an opioid use disorder.',
      'Emergency department visits related to prescription drug misuse exceed 1 million annually in the United States.',
    ],
    faqs: [
      {
        question: 'Is it possible to become addicted to a medication my doctor prescribed?',
        answer:
          'Absolutely. Many prescription medications, particularly opioids, benzodiazepines, and stimulants, carry significant addiction potential even when used as directed. Physical dependence can develop within weeks, and the line between therapeutic use and misuse can blur gradually. This is not a reflection of personal weakness; it is a consequence of how these medications interact with brain chemistry. If you are concerned about your medication use, speaking with a treatment professional is an important first step.',
      },
      {
        question: 'What are the most commonly abused prescription drugs?',
        answer:
          'The most commonly misused prescription drugs fall into three categories: opioid painkillers (oxycodone, hydrocodone, codeine), benzodiazepine sedatives (Xanax, Valium, Klonopin), and central nervous system stimulants (Adderall, Ritalin, Vyvanse). Sleep medications like Ambien and muscle relaxants like Soma are also frequently misused. Each class carries unique risks and requires specific treatment approaches.',
      },
      {
        question: 'How is prescription drug addiction different from street drug addiction?',
        answer:
          'Pharmacologically, the addiction mechanisms are the same whether a drug is obtained by prescription or on the street. However, prescription drug addiction often carries unique psychological barriers to recognition and treatment. Many people believe that because a doctor prescribed the medication, their use cannot be problematic. Stigma may also differ, as prescription drug misuse is sometimes perceived differently than illicit drug use. Regardless of the source, addiction is a medical condition that responds to evidence-based treatment.',
      },
      {
        question: 'Will my underlying medical condition be addressed during treatment?',
        answer:
          'Yes. We understand that many clients began using prescription medications for legitimate medical reasons, and addressing the underlying condition is an essential part of treatment. Our medical team works to identify non-addictive alternatives for pain management, anxiety, ADHD, insomnia, or other conditions. This may include non-opioid pain therapies, non-benzodiazepine anxiety treatments, or comprehensive behavioral interventions.',
      },
      {
        question: 'Can I bring my other prescription medications to treatment?',
        answer:
          'Yes. Our medical team will review all of your current medications upon admission. Medications that are medically necessary and do not pose addiction risk will be continued under our medical supervision. Medications that may be contributing to your addiction or that interact with your treatment will be evaluated, and safe alternatives will be provided when needed.',
      },
    ],
    heroImage: '/images/addiction-types/prescription-drugs.jpg',
    metaTitle:
      'Prescription Drug Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Comprehensive prescription drug addiction treatment in Orange County. Safe detox, therapy, and alternative pain management at Trust SoCal.',
    relatedTypes: ['opioids', 'benzodiazepines', 'alcohol'],
  },

  // -------------------------------------------------------------------------
  // 9. Marijuana Addiction
  // -------------------------------------------------------------------------
  {
    slug: 'marijuana',
    name: 'Marijuana Addiction',
    substanceName: 'Marijuana (Cannabis)',
    description:
      'While marijuana is often perceived as harmless, cannabis use disorder is a recognized medical diagnosis that affects millions of Americans. Modern marijuana products are significantly more potent than those available even a decade ago, with THC concentrations in some concentrates exceeding 90%. Chronic, heavy use can lead to physical dependence, withdrawal symptoms upon cessation, and significant impairment in motivation, cognitive function, and mental health. Marijuana addiction is particularly prevalent among young adults and adolescents, and its normalization in popular culture often makes it difficult for individuals to recognize when their use has become problematic.',
    signs: [
      'Using marijuana daily or nearly daily, often starting first thing in the morning',
      'Inability to reduce or stop use despite wanting to, or repeated failed attempts to quit',
      'Spending increasing amounts of time and money obtaining and using marijuana',
      'Loss of motivation, declining academic or work performance, and reduced interest in previously enjoyed activities',
      'Continued use despite negative effects on relationships, mental health, or daily functioning',
    ],
    healthEffects: [
      'Respiratory problems including chronic bronchitis, lung irritation, and increased risk of respiratory infections from smoking',
      'Impaired memory, attention, learning, and decision-making, particularly with adolescent use during brain development',
      'Increased risk of anxiety disorders, depression, and psychotic symptoms, especially in predisposed individuals',
      'Cannabis hyperemesis syndrome causing cyclic severe nausea, vomiting, and abdominal pain in heavy, long-term users',
      'Reduced motivation and engagement (amotivational syndrome) affecting academic, professional, and personal achievement',
    ],
    withdrawalInfo:
      'Cannabis withdrawal is now well-established in clinical literature and recognized in the DSM-5. Symptoms typically begin within 1 to 3 days of cessation and peak during the first week, lasting approximately 1 to 2 weeks in most cases. Common withdrawal symptoms include irritability, anxiety, difficulty sleeping, decreased appetite, restlessness, depressed mood, and physical symptoms such as abdominal pain and sweating. While not medically dangerous, cannabis withdrawal can be intensely uncomfortable and is a primary driver of relapse in those attempting to quit. The severity of withdrawal correlates with the frequency and duration of use as well as the potency of the products consumed.',
    treatmentApproach:
      'Marijuana addiction treatment at Trust SoCal focuses on behavioral therapies that have been shown to be effective for cannabis use disorder. Cognitive Behavioral Therapy helps clients identify the thought patterns and situations that trigger use and develop effective coping alternatives. Motivational Enhancement Therapy addresses the ambivalence that many marijuana users feel about quitting, helping them build intrinsic motivation for change. Contingency management provides concrete rewards for maintaining abstinence. We also address common co-occurring conditions such as anxiety, depression, and ADHD that often underlie marijuana dependence. For younger clients, our program emphasizes developmental considerations and building a social network that does not revolve around cannabis use.',
    statistics: [
      'Approximately 16.3 million Americans aged 12 and older had a cannabis use disorder in the past year, making it the most prevalent illicit drug use disorder in the country.',
      'THC potency in marijuana products has increased from an average of approximately 4% in 1995 to over 15% in flower and up to 90% in concentrates today.',
      'Only about 7% of individuals with cannabis use disorder receive treatment, suggesting significant under-recognition of marijuana as an addictive substance.',
    ],
    faqs: [
      {
        question: 'Is marijuana really addictive?',
        answer:
          'Yes. Approximately 9% of people who use marijuana will develop dependence, and this rises to about 17% for those who begin using in adolescence and 25 to 50% for daily users. The DSM-5 recognizes cannabis use disorder as a legitimate substance use disorder with defined diagnostic criteria. Withdrawal symptoms, tolerance, and compulsive use despite negative consequences are all well-documented features of marijuana addiction.',
      },
      {
        question: 'Does marijuana cause mental health problems?',
        answer:
          'Research demonstrates a clear association between heavy marijuana use and increased risk of several mental health conditions, including anxiety disorders, depression, and psychotic disorders such as schizophrenia, particularly in individuals with genetic predisposition. High-potency cannabis products appear to carry the greatest risk. While marijuana use alone may not cause these conditions in everyone, it can trigger or worsen them significantly, especially when use begins during adolescence while the brain is still developing.',
      },
      {
        question: 'If marijuana is legal, why would I need treatment?',
        answer:
          'Legality does not determine whether a substance is addictive or harmful. Alcohol and tobacco are also legal and are among the leading causes of preventable death. Legal status means marijuana is regulated and taxed, not that it is free from health risks. If marijuana use is negatively affecting your relationships, work, mental health, or quality of life, those consequences are real regardless of the legal status of the substance.',
      },
      {
        question: 'Is marijuana withdrawal real?',
        answer:
          'Absolutely. Cannabis withdrawal syndrome is a recognized clinical diagnosis in the DSM-5. Symptoms can include significant irritability, sleep disturbances, decreased appetite, anxiety, restlessness, and physical discomfort. While not medically dangerous, these symptoms can be sufficiently distressing to drive relapse. Our treatment program helps clients manage withdrawal symptoms and build the skills needed to maintain long-term abstinence.',
      },
      {
        question: 'Do I need residential treatment for marijuana addiction, or is outpatient enough?',
        answer:
          'The appropriate level of care depends on the severity of your cannabis use disorder, your living environment, and whether you have co-occurring conditions. Many individuals with marijuana addiction respond well to outpatient treatment such as IOP. However, if you have been unable to stop in an outpatient setting, if your home environment is not supportive of recovery, or if you have significant co-occurring mental health conditions, residential treatment may be recommended. Our clinical team will help determine the most appropriate level of care during your assessment.',
      },
    ],
    heroImage: '/images/addiction-types/marijuana.jpg',
    metaTitle:
      'Marijuana Addiction Treatment in Orange County | Trust SoCal',
    metaDescription:
      'Professional marijuana addiction treatment in Orange County. CBT, motivational therapy, and support for cannabis use disorder at Trust SoCal.',
    relatedTypes: ['alcohol', 'prescription-drugs', 'cocaine'],
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/**
 * Retrieve a single addiction type by its URL slug.
 */
export function getAddictionTypeBySlug(
  slug: string,
): AddictionType | undefined {
  return addictionTypes.find((type) => type.slug === slug);
}

/**
 * Return an array of all addiction type slugs (useful for static path generation).
 */
export function getAllAddictionTypeSlugs(): string[] {
  return addictionTypes.map((type) => type.slug);
}
