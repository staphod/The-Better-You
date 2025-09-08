import type { Addiction } from '@/types';

export const addictions: Addiction[] = [
  // --- SUBSTANCE ADDICTIONS ---
  {
    id: 'alcohol-use',
    title: 'Alcohol Use Self-Test',
    category: 'Substance Addictions',
    description: "This test helps assess patterns of alcohol consumption that may indicate a risk for Alcohol Use Disorder (AUD). It is based on common screening questions used by healthcare professionals.",
    riskFactors: [
      "Family history of alcoholism",
      "Drinking at an early age",
      "High levels of stress",
      "Peer pressure or social environment where heavy drinking is common",
      "Co-occurring mental health conditions like depression or anxiety",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I have found myself drinking more, or for a longer period, than I intended.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I have wanted to cut down or stop drinking, or tried to, but couldn’t.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I spend a lot of time drinking, or being sick or getting over the aftereffects.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I have experienced a strong need, urge, or craving to drink.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "Drinking—or being sick from drinking—has often interfered with taking care of my home or family, or caused job/school problems.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have continued to drink even though it was causing trouble with my family or friends.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have given up or cut back on activities that were important to me in order to drink.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I have gotten into situations while or after drinking that increased my chances of getting hurt (e.g., driving, swimming).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I have had to drink much more than I once did to get the effect I want (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "When the effects of alcohol were wearing off, I have had withdrawal symptoms (e.g., shakiness, irritability, anxiety, nausea).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your answers suggest a low risk of alcohol-related problems. It's important to continue making responsible choices regarding alcohol.",
        advice: [
          "Continue to drink in moderation, if at all.",
          "Be mindful of situations that might encourage heavy drinking.",
          "Understand standard drink sizes to keep track of consumption."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }
        ]
      },
      'moderate-risk': {
        level: "Moderate Risk",
        explanation: "Your answers indicate some patterns of drinking that could lead to problems. This is a good time to reassess your relationship with alcohol and consider making changes.",
        advice: [
          "Consider setting specific limits for your drinking.",
          "Talk to a trusted friend, family member, or doctor about your concerns.",
          "Avoid situations or triggers that lead to heavy drinking.",
          "Explore non-alcoholic ways to cope with stress or socialize."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Alcoholics Anonymous (AA)", number: "Find local number", url: "https://www.aa.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk",
        explanation: "Your answers suggest a pattern of alcohol use that is likely causing harm and indicates a high risk of Alcohol Use Disorder. It is strongly recommended that you seek professional help.",
        advice: [
          "Speak with a doctor or mental health professional as soon as possible.",
          "Do not attempt to quit suddenly without medical guidance, as withdrawal can be dangerous.",
          "Reach out to a support group for guidance and community.",
          "Be honest with loved ones about your struggles and ask for their support."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Alcoholics Anonymous (AA)", number: "Find local number", url: "https://www.aa.org/" },
          { name: "National Institute on Alcohol Abuse and Alcoholism", number: "", url: "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/treatment-alcohol-problems-finding-and-getting-help" }
        ]
      }
    }
  },
  {
    id: 'cannabis-use',
    title: 'Cannabis (Marijuana) Use Self-Test',
    category: 'Substance Addictions',
    description: "Assesses cannabis use patterns that may indicate a risk for Cannabis Use Disorder. Long-term use can impact memory, motivation, and mental health, especially in adolescents.",
    riskFactors: [
      "Starting use in teenage years",
      "Family history of substance use",
      "Peer pressure and social norms",
      "Using high-potency cannabis products",
      "Self-medicating for anxiety, depression, or sleep issues",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
        { id: 'q1', text: "I use cannabis in larger amounts or over a longer period than I intended.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I have felt a persistent desire or made unsuccessful efforts to cut down or control my cannabis use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "I spend a great deal of time in activities necessary to obtain, use, or recover from cannabis.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I experience strong cravings or a strong desire or urge to use cannabis.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "My cannabis use has resulted in a failure to fulfill major role obligations at work, school, or home.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "I continue to use cannabis despite having persistent social or interpersonal problems caused by it.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I have given up or reduced important social, occupational, or recreational activities because of cannabis use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "I need to use markedly increased amounts of cannabis to achieve the desired effect (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I use cannabis in situations where it is physically hazardous (e.g., driving a car).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "When I stop using cannabis, I experience withdrawal symptoms (e.g., irritability, anxiety, sleep problems).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your cannabis use pattern does not suggest a high risk for Cannabis Use Disorder. Maintaining awareness of your usage is key.",
        advice: ["Be mindful of the frequency and amount of your use.", "Avoid using cannabis as a primary coping mechanism for stress.", "Prioritize responsibilities and healthy hobbies over cannabis use."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }]
      },
      'moderate-risk': {
        level: "Moderate Risk",
        explanation: "Your use of cannabis shows some signs of becoming problematic. It may be negatively affecting some areas of your life. Considering a change in habits could be beneficial.",
        advice: ["Consider taking a tolerance break ('T-break') for a week or more.", "Set limits on when and how much you use.", "Talk to a healthcare provider or counselor about your use.", "Explore resources like Marijuana Anonymous."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Marijuana Anonymous", number: "Find local meeting", url: "https://marijuana-anonymous.org/" }]
      },
      'high-risk': {
        level: "High Risk",
        explanation: "Your cannabis use pattern indicates a high risk of Cannabis Use Disorder and is likely causing significant issues in your life. Seeking professional support is strongly recommended.",
        advice: ["Speak with a doctor, therapist, or addiction specialist about your use.", "Seek support from groups like Marijuana Anonymous or SMART Recovery.", "Be honest with trusted friends or family about your struggles.", "Identify triggers that lead to use and develop alternative coping strategies."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Marijuana Anonymous", number: "Find local meeting", url: "https://marijuana-anonymous.org/" }, { name: "NIDA - Marijuana Facts", number: "", url: "https://www.drugabuse.gov/publications/drugfacts/marijuana-cannabis" }]
      }
    }
  },
  {
    id: 'stimulant-use',
    title: 'Stimulant Use Self-Test',
    category: 'Substance Addictions',
    description: "Evaluates the use of stimulants like cocaine, amphetamines (e.g., Adderall), or methamphetamine. Misuse can rapidly lead to addiction, severe cardiovascular issues, and psychosis.",
    riskFactors: ["Pressure to perform academically or at work", "Co-occurring ADHD (for prescription stimulants)", "History of trauma or stress", "Social environments where use is prevalent", "Impulsive or risk-taking personality traits"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I use stimulants in larger amounts or for longer than I meant to.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I have tried to cut down or stop using stimulants but couldn't.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I experience strong cravings or urges to use stimulants.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I need more of the stimulant to get the effect I want (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I experience withdrawal symptoms (like a 'crash', fatigue, depression) when I stop using.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "My stimulant use has caused problems at work, school, or with my family.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I continue to use stimulants even when it causes or worsens physical or psychological problems (e.g., anxiety, paranoia).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I have given up important activities because of my stimulant use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I spend a lot of time getting, using, or recovering from the effects of stimulants.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I have used stimulants in situations that could be physically dangerous.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your answers do not indicate a pattern of problematic stimulant use. If you use stimulants, it is crucial to do so exactly as prescribed or not at all.",
        advice: ["If prescribed, never take more than your directed dose.", "Be aware of the high potential for addiction with illicit stimulants.", "Monitor your heart health and mental state."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }]
      },
      'moderate-risk': {
        level: "Moderate Risk",
        explanation: "Your stimulant use is showing warning signs of becoming a disorder. It's important to address these behaviors before they escalate.",
        advice: ["Speak honestly with your doctor about your use, especially if the stimulants are prescribed.", "Avoid using stimulants to stay awake for long periods or for performance enhancement without medical supervision.", "Seek counseling to address underlying reasons for use, such as stress or pressure."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Narcotics Anonymous (NA)", number: "Find local meeting", url: "https://www.na.org/" }]
      },
      'high-risk': {
        level: "High Risk",
        explanation: "Your pattern of stimulant use is consistent with a severe Stimulant Use Disorder. This is a serious condition that requires immediate professional intervention.",
        advice: ["Seek professional help from an addiction specialist or treatment center right away.", "Be aware of the risks of psychosis and cardiovascular damage.", "Medical supervision may be necessary to manage withdrawal safely.", "Engage with support groups like Narcotics Anonymous or Cocaine Anonymous."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Narcotics Anonymous (NA)", number: "Find local meeting", url: "https://www.na.org/" }, { name: "Cocaine Anonymous (CA)", number: "Find local meeting", url: "https://ca.org/" }]
      }
    }
  },
  {
    id: 'opioid-use',
    title: 'Opioid Use Self-Test',
    category: 'Substance Addictions',
    description: "Screens for Opioid Use Disorder, which includes misuse of prescription painkillers (like oxycodone, fentanyl) and heroin. This is an extremely dangerous addiction with a very high risk of fatal overdose.",
    riskFactors: ["History of a substance use disorder", "Receiving an opioid prescription for chronic pain", "Poverty or unemployment", "History of trauma or abuse", "Family or friends who use opioids"],
    scoringThresholds: { moderate: 8, high: 16 },
    questions: [
        { id: 'q1', text: "I have taken opioids in larger amounts or for longer than I was supposed to.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I have tried to cut down or stop using opioids but couldn't.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "I spend a lot of time trying to get, use, or recover from opioids.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I have strong cravings or urges to use opioids.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "My opioid use has caused me to fail to meet my responsibilities at work, school, or home.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "I have continued to use opioids even though it's causing problems in my relationships.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I have given up important activities because of my opioid use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "I have used opioids in situations that are physically dangerous.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I need more opioids to get the same effect, or I get less effect from the same amount (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "I experience physical withdrawal symptoms (e.g., muscle aches, nausea) when I stop using opioids.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your answers do not suggest an Opioid Use Disorder. It's critical to use these medications only as prescribed due to their high addiction potential.",
        advice: ["Never take more than your prescribed dose or use someone else's prescription.", "Store medications safely and dispose of unused pills properly.", "Be aware of the signs of overdose."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }]
      },
      'moderate-risk': {
        level: "Moderate Risk",
        explanation: "Your opioid use shows significant warning signs of a developing disorder. Taking action now is crucial to prevent escalation and severe consequences.",
        advice: ["Talk to your doctor immediately about your concerns and your use.", "Ask about alternatives to opioids for pain management.", "Seek counseling to address your use.", "Consider getting naloxone (Narcan) and learning how to use it in case of an overdose."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Narcotics Anonymous (NA)", number: "Find local meeting", url: "https://www.na.org/" }]
      },
      'high-risk': {
        level: "High Risk",
        explanation: "Your answers indicate a high probability of a severe Opioid Use Disorder. This is a life-threatening condition that requires immediate medical and professional help.",
        advice: ["Seek emergency medical help or contact a national helpline immediately.", "Ask your doctor about Medication-Assisted Treatment (MAT) like buprenorphine or methadone.", "Do not stop using suddenly without medical supervision, as withdrawal can be severe.", "Ensure you or someone you trust has naloxone (Narcan) available at all times."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Narcotics Anonymous (NA)", number: "Find local meeting", url: "https://www.na.org/" }, { name: "FindTreatment.gov", number: "", url: "https://findtreatment.gov/" }]
      }
    }
  },
   {
    id: 'sedative-use',
    title: 'Sedative/Anxiolytic Use Self-Test',
    category: 'Substance Addictions',
    description: "Screens for problematic use of sedatives, hypnotics, or anxiolytics, such as benzodiazepines (Xanax, Valium) or sleeping pills (Ambien). Dependency can develop even with a prescription, and withdrawal can be dangerous.",
    riskFactors: ["Long-term prescription for anxiety or insomnia", "History of other substance use disorders", "Chronic stress or trauma", "Older age, due to slower metabolism of the drug", "Combining with other substances, especially alcohol"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
        { id: 'q1', text: "I take these medications in larger amounts or for longer than prescribed.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I have wanted to cut down or stop using, but have been unable to do so.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "I spend a lot of time obtaining, using, or recovering from the effects of these medications.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I experience strong cravings for the medication.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "My use has interfered with my responsibilities at work, school, or home.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "I have continued to use despite it causing social or relationship problems.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I need to take more of the medication to get the same effect (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "When I stop or reduce use, I experience withdrawal symptoms (e.g., anxiety, insomnia, shakiness, seizures).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I have used these medications in situations that could be physically dangerous (e.g., before driving).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "I have continued to use the medication even though I knew it was making a physical or psychological problem worse.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your use of these medications appears to be within a low-risk range. It is vital to continue using them only as directed by a doctor.",
        advice: ["Take your medication exactly as prescribed.", "Regularly review your need for the medication with your doctor.", "Never mix these medications with alcohol or opioids."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }]
      },
      'moderate-risk': {
        level: "Moderate Risk",
        explanation: "Your usage patterns show some signs of dependency or misuse. It is very important to discuss this with your prescribing doctor.",
        advice: ["Talk to your doctor about your concerns and your current dosage.", "Do NOT stop taking the medication abruptly. Develop a tapering plan with a professional.", "Explore non-medication alternatives for managing anxiety or insomnia, such as therapy (CBT)."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Benzodiazepine Information Coalition", number: "", url: "https://www.benzoinfo.com/" }]
      },
      'high-risk': {
        level: "High Risk",
        explanation: "Your answers suggest a high risk of a Sedative, Hypnotic, or Anxiolytic Use Disorder. Professional medical intervention is essential for your safety.",
        advice: ["Seek medical help immediately. Abruptly stopping these medications can cause life-threatening seizures.", "Work with a doctor to create a safe, gradual tapering schedule.", "Engage in therapy and find support groups to manage underlying conditions and the recovery process."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Benzodiazepine Information Coalition", number: "", url: "https://www.benzoinfo.com/" }, { name: "FindTreatment.gov", number: "", url: "https://findtreatment.gov/" }]
      }
    }
  },
  {
    id: 'nicotine-use',
    title: 'Tobacco/Nicotine Use Self-Test',
    category: 'Substance Addictions',
    description: "Assesses dependence on nicotine from sources like cigarettes, cigars, or vaping products. Nicotine is one of the most addictive substances and carries severe long-term health risks.",
    riskFactors: ["Starting at a young age", "Peer pressure, especially among teens with vaping", "Family members who smoke or vape", "Using tobacco/nicotine to cope with stress", "Co-occurring mental health conditions"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
        { id: 'q1', text: "I feel an urgent need to smoke or vape shortly after waking up.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I find it difficult to refrain from smoking/vaping in places where it is forbidden.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "The first smoke/vape of the morning is the one I would hate to give up most.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I smoke/vape more frequently during the first hours after waking than during the rest of the day.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "I smoke/vape even if I am so ill that I am in bed most of the day.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "I have tried to quit but couldn't.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I continue to smoke/vape despite knowing it's causing me health problems.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "I have experienced strong cravings for nicotine.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I feel that I use nicotine to manage my mood or stress.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "I have given up activities or avoided situations in order to smoke/vape.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Dependence",
        explanation: "Your score suggests a low level of nicotine dependence. Quitting now would be easier than waiting until dependence increases.",
        advice: ["Consider setting a quit date soon.", "Identify your triggers and plan ways to avoid them.", "Think about the health and financial benefits of quitting completely."],
        helplines: [{ name: "Smokefree.gov", number: "1-800-QUIT-NOW", url: "https://smokefree.gov/" }]
      },
      'moderate-risk': {
        level: "Moderate Dependence",
        explanation: "Your score indicates a moderate level of nicotine dependence. Quitting may be challenging and could require a plan and support.",
        advice: ["Talk to your doctor about Nicotine Replacement Therapy (NRT) like patches or gum.", "Create a quit plan with a specific date and strategies.", "Use resources like quit-smoking apps or telephone hotlines.", "Inform friends and family of your plan and ask for their support."],
        helplines: [{ name: "Smokefree.gov", number: "1-800-QUIT-NOW", url: "https://smokefree.gov/" }, { name: "Truth Initiative", number: "", url: "https://truthinitiative.org/" }]
      },
      'high-risk': {
        level: "High Dependence",
        explanation: "Your score suggests a high level of nicotine dependence. Quitting will likely be difficult and require significant support and possibly medical intervention.",
        advice: ["It is highly recommended to consult a doctor to discuss prescription medications (like varenicline or bupropion) and NRT.", "A combination of medication and behavioral counseling is often the most effective approach.", "Do not get discouraged by past failed attempts; each attempt brings you closer to success.", "Seek intensive counseling or a support group."],
        helplines: [{ name: "Smokefree.gov", number: "1-800-QUIT-NOW", url: "https://smokefree.gov/" }, { name: "Truth Initiative", number: "", url: "https://truthinitiative.org/" }, { name: "The EX Program", number: "", url: "https://www.theexprogram.com/" }]
      }
    }
  },
  {
    id: 'inhalant-use',
    title: 'Inhalant Use Self-Test',
    category: 'Substance Addictions',
    description: "Screens for the use of inhalants (e.g., glue, solvents, aerosols, nitrates). This is an extremely dangerous form of substance use, especially for adolescents, with risks of immediate death and permanent brain damage.",
    riskFactors: ["Adolescence or young adulthood", "Poverty and lack of supervision", "History of physical or sexual abuse", "Poor school performance or dropout", "Peer group that uses inhalants"],
    scoringThresholds: { moderate: 4, high: 8 },
    questions: [
        { id: 'q1', text: "I have intentionally inhaled fumes from products like glue, paint, aerosols, or gas to get high.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I find I need to use more of the substance or use it for longer to get the same feeling (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "I have strong cravings or urges to use inhalants.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I have tried to stop or cut down on using inhalants but couldn't.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "I spend a lot of time getting, using, or recovering from inhalants.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "My use of inhalants has caused me to give up or reduce important activities.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I continue to use inhalants even though I know it's causing physical or psychological problems.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "My use of inhalants has caused problems at school, work, or with my family.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I have noticed problems with my memory, concentration, or coordination since I started using.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "I have used inhalants in a way that could be physically dangerous (e.g., in a poorly ventilated area, with a bag over my head).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk / No Use",
        explanation: "You have indicated no or very low-risk use of inhalants. Any use of inhalants is extremely dangerous and should be avoided.",
        advice: ["Never experiment with inhalants. The risk of 'Sudden Sniffing Death' is real, even on the first use.", "Educate yourself and others on the severe dangers of these substances.", "If you feel pressured to use, talk to a trusted adult immediately."],
        helplines: [{ name: "National Inhalant Prevention Coalition", number: "", url: "https://www.inhalants.org/" }]
      },
      'moderate-risk': {
        level: "High Risk Behavior",
        explanation: "Any use of inhalants is considered high-risk behavior. Your answers indicate use that is extremely dangerous and requires immediate attention.",
        advice: ["Stop all use immediately. Your next use could be fatal.", "Talk to a parent, school counselor, doctor, or another trusted adult today.", "Remove all inhalable products from your immediate access.", "Contact a helpline to get confidential support."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "National Inhalant Prevention Coalition", number: "", url: "https://www.inhalants.org/" }]
      },
      'high-risk': {
        level: "Severe and Immediate Danger",
        explanation: "Your answers indicate a pattern of inhalant use that poses a severe and immediate threat to your life and health. It is critical that you get professional help without delay.",
        advice: ["This is a medical emergency. You must speak to a healthcare professional immediately.", "Inhalant use can cause irreversible damage to the brain, liver, kidneys, and heart.", "Professional treatment is necessary to address the use and any underlying issues.", "Do not be afraid to ask for help; it is a sign of strength."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "FindTreatment.gov", number: "", url: "https://findtreatment.gov/" }, { name: "National Inhalant Prevention Coalition", number: "", url: "https://www.inhalants.org/" }]
      }
    }
  },
  {
    id: 'hallucinogen-use',
    title: 'Hallucinogen Use Self-Test',
    category: 'Substance Addictions',
    description: "Evaluates use of hallucinogens like LSD, psilocybin (mushrooms), or MDMA (ecstasy). While often not causing physical addiction, use can lead to psychological distress, risky behavior, and lasting perceptual disorders.",
    riskFactors: ["Sensation-seeking personality", "Pre-existing mental health conditions like anxiety or psychosis", "Lack of a safe, controlled environment during use", "Peer pressure", "Misinformation about the safety of the substances"],
    scoringThresholds: { moderate: 12, high: 24 },
    questions: [
        { id: 'q1', text: "I continue to use hallucinogens despite having a persistent physical or psychological problem that is likely made worse by the drug.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I have used hallucinogens in situations in which it is physically hazardous (e.g., driving, swimming).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "My use of hallucinogens has interfered with my ability to fulfill my obligations at work, school, or home.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I have experienced strong cravings or urges to use a hallucinogen.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "I spend a lot of my time getting, using, or recovering from the effects of hallucinogens.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "I have experienced frightening or psychologically distressing experiences ('bad trips') while using.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I have experienced flashbacks or other visual disturbances long after the effects of the drug have worn off (HPPD).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "I have given up or cut back on important activities because of my use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "Friends or family have expressed concern about my use of hallucinogens.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "I find I need to take more of the substance to get the desired effect (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your answers do not suggest a pattern of problematic hallucinogen use. It's important to be aware of the psychological risks associated with these substances.",
        advice: ["Always prioritize a safe and supportive environment ('set and setting') if you choose to use.", "Understand the risk of Hallucinogen Persisting Perception Disorder (HPPD).", "Never drive or operate machinery while under the influence."],
        helplines: [{ name: "DanceSafe", number: "", url: "https://dancesafe.org/" }, { name: "Erowid", number: "", url: "https://www.erowid.org/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Use",
        explanation: "Your use of hallucinogens shows some signs of becoming problematic and may be causing psychological distress or interfering with your life.",
        advice: ["Consider the reasons behind your use and whether it is a form of escapism.", "Talk to a mental health professional, especially if you have experienced 'bad trips' or flashbacks.", "Take a significant break from use to reassess your relationship with these substances."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "DanceSafe", number: "", url: "https://dancesafe.org/" }]
      },
      'high-risk': {
        level: "High Risk / Harmful Use",
        explanation: "Your pattern of hallucinogen use indicates a high potential for harm and is likely causing significant problems. Seeking professional guidance is strongly advised.",
        advice: ["It is highly recommended to stop using and speak with a therapist or counselor.", "If you have pre-existing mental health conditions, hallucinogen use can significantly worsen them.", "Seek support to address any negative psychological effects you are experiencing.", "Focus on building a fulfilling life without the need for substance-induced experiences."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Fireside Project (Psychedelic Peer Support)", number: "62-FIRESIDE", url: "https://firesideproject.org/" }]
      }
    }
  },
  {
    id: 'caffeine-use',
    title: 'Caffeine Use Self-Test',
    category: 'Substance Addictions',
    description: "While not an official disorder in the main DSM-5, problematic caffeine use is recognized as a condition for further study. Excessive use can lead to physical dependence, anxiety, and sleep disruption.",
    riskFactors: ["High-pressure school or work environments", "Chronic fatigue or underlying sleep disorders", "Habitual consumption (e.g., morning coffee ritual)", "Using energy drinks high in sugar and other stimulants"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
        { id: 'q1', text: "I have had a persistent desire or made unsuccessful efforts to cut down or control my caffeine use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I continue to consume caffeine despite knowing that it's causing or worsening a physical or psychological problem (e.g., anxiety, insomnia).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "I need to consume noticeably more caffeine to achieve the desired effect (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "When I stop or reduce caffeine, I experience withdrawal symptoms (e.g., headache, fatigue, irritability).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "I sometimes consume caffeine again just to relieve or avoid withdrawal symptoms.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "My caffeine use causes me to fail to meet obligations at work, school, or home (e.g., being late due to getting coffee).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I consume caffeine in situations where it might be hazardous (e.g., when it might interfere with needed sleep before a long drive).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "I spend a significant amount of money on caffeinated products.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I find it hard to get my day started without caffeine.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "My caffeine consumption has negatively impacted the quality of my sleep.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk / Normal Use",
        explanation: "Your caffeine consumption appears to be within a normal, low-risk range. You seem to have a healthy and controlled relationship with caffeine.",
        advice: ["Be mindful of your total daily intake (experts suggest under 400mg for most adults).", "Avoid caffeine at least 6-8 hours before bedtime to protect sleep quality.", "Stay hydrated with water throughout the day."],
        helplines: [{ name: "National Sleep Foundation", number: "", url: "https://www.thensf.org/caffeine-and-sleep/" }]
      },
      'moderate-risk': {
        level: "Moderate Dependence",
        explanation: "Your answers suggest a moderate level of dependence on caffeine. It may be causing some negative effects, like withdrawal headaches or impacting your sleep or anxiety levels.",
        advice: ["Try gradually reducing your intake to avoid severe withdrawal. Replace one caffeinated drink with a decaf or non-caffeinated option.", "Establish a 'caffeine curfew' for the afternoon.", "Look at the underlying reasons for high consumption, such as poor sleep hygiene."],
        helplines: [{ name: "American Medical Association - Caffeine", number: "", url: "https://www.ama-assn.org/delivering-care/public-health/what-doctors-wish-patients-knew-about-caffeine" }]
      },
      'high-risk': {
        level: "High Dependence",
        explanation: "Your score indicates a high level of dependence on caffeine that is likely causing significant negative consequences for your physical and/or psychological well-being.",
        advice: ["Consider a slow, methodical reduction plan to minimize withdrawal. Quitting 'cold turkey' can be very unpleasant.", "Speak with a doctor, especially if caffeine is worsening an existing anxiety or heart condition.", "Focus on improving sleep hygiene, nutrition, and exercise to naturally boost energy levels.", "Be patient with yourself; reducing dependence takes time."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }]
      }
    }
  },

  // --- BEHAVIORAL ADDICTIONS ---
  {
    id: 'gambling-disorder',
    title: 'Gambling Self-Test',
    category: 'Behavioral Addictions',
    description: "This assessment helps identify signs of compulsive gambling, also known as Gambling Disorder. It asks about gambling behaviors and their impact on your life.",
    riskFactors: [
      "A 'big win' early in one's gambling history",
      "Easy access to preferred forms of gambling (e.g., online apps)",
      "High levels of impulsivity or risk-taking behavior",
      "Escapism from stress, anxiety, or depression",
      "Belief in gambling-related superstitions or fallacies",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I have felt the need to bet with increasing amounts of money to achieve the desired excitement.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I become restless or irritable when attempting to cut down or stop gambling.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I have made repeated unsuccessful efforts to control, cut back, or stop gambling.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I am often preoccupied with gambling (e.g., reliving past experiences, planning the next venture).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I often gamble when feeling distressed (e.g., helpless, guilty, anxious, depressed).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "After losing money gambling, I have often returned another day to get even ('chasing' losses).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have lied to family members or others to conceal the extent of my involvement with gambling.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I have jeopardized or lost a significant relationship, job, or opportunity because of gambling.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I have relied on others to provide money to relieve a desperate financial situation caused by gambling.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My gambling has caused me health problems, including stress or anxiety.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your responses suggest you are not currently at risk for a gambling problem. Responsible gambling means treating it as entertainment, not a way to make money.",
        advice: [
          "Always set a money and time limit and stick to it.",
          "Never borrow money to gamble.",
          "Balance gambling with other healthy activities.",
        ],
        helplines: [
          { name: "National Problem Gambling Helpline", number: "1-800-522-4700", url: "https://www.ncpgambling.org/" }
        ]
      },
      'moderate-risk': {
        level: "Moderate Risk",
        explanation: "Your gambling behaviors show some signs that could develop into a more serious problem. It's a good idea to take steps now to ensure your gambling remains under control.",
        advice: [
          "Consider taking a break from gambling for a set period (self-exclusion).",
          "Install software to block gambling sites if you gamble online.",
          "Talk to someone you trust about your gambling habits.",
          "Seek out a support group like Gamblers Anonymous."
        ],
        helplines: [
          { name: "National Problem Gambling Helpline", number: "1-800-522-4700", url: "https://www.ncpgambling.org/" },
          { name: "Gamblers Anonymous", number: "Find local meeting", url: "http://www.gamblersanonymous.org/ga/" }
        ]
      },
      'high-risk': {
        level: "High Risk",
        explanation: "Your answers indicate a strong likelihood of a Gambling Disorder, which is causing significant problems in your life. Seeking professional help is a critical step toward recovery.",
        advice: [
          "Contact a gambling helpline immediately to discuss your options.",
          "Consider handing over control of your finances to a trusted person temporarily.",
          "Seek therapy or counseling specifically for addiction.",
          "Attend a Gamblers Anonymous meeting for peer support."
        ],
        helplines: [
          { name: "National Problem Gambling Helpline", number: "1-800-522-4700", url: "https://www.ncpgambling.org/" },
          { name: "Gamblers Anonymous", number: "Find local meeting", url: "http://www.gamblersanonymous.org/ga/" },
          { name: "Gam-Anon", number: "For family and friends", url: "https://www.gam-anon.org/" }
        ]
      }
    }
  },
  {
    id: 'internet-gaming',
    title: 'Internet Gaming Self-Test',
    category: 'Behavioral Addictions',
    description: "This test helps identify signs of compulsive video gaming that can lead to significant impairment in personal, family, social, educational, or occupational areas of functioning.",
    riskFactors: [
      "High levels of immersion and social connection within games",
      "Using gaming as an escape from real-world problems (anxiety, depression, social issues)",
      "Unstructured free time and boredom",
      "In-game rewards and monetization schemes (loot boxes)",
      "Male gender, particularly in adolescence and young adulthood",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I often think about gaming when I am doing other things.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I feel irritable, anxious, or sad when I try to cut down or stop gaming.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I feel the need to spend increasing amounts of time gaming to feel satisfied.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I have been unable to control or reduce the amount of time I spend gaming.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I have lost interest in previous hobbies and entertainments as a result of gaming.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have continued to game despite knowing it's causing problems in my life.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have deceived family members or others about the amount of time I spend gaming.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I game to escape or relieve a negative mood (e.g., feelings of helplessness, guilt, anxiety).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I have jeopardized or lost a significant relationship, job, or educational opportunity because of gaming.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I neglect personal hygiene, sleep, or nutrition because of gaming.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Gaming",
        explanation: "Your gaming habits appear balanced and not indicative of a disorder. Gaming is a healthy part of your recreational life.",
        advice: [
          "Continue to balance gaming with other offline activities and responsibilities.",
          "Be mindful of your gaming time and ensure it doesn't interfere with sleep.",
          "Game for fun and social connection, not as an escape from problems.",
        ],
        helplines: [{ name: "Healthy Gamers", number: "", url: "https://www.healthygamers.com/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Use",
        explanation: "Your gaming habits show some warning signs of becoming compulsive and may be negatively affecting other areas of your life.",
        advice: [
          "Set strict time limits for your gaming sessions and use a timer.",
          "Schedule specific 'no-gaming' days each week.",
          "Reconnect with offline hobbies you used to enjoy.",
          "Talk to friends or family about your concerns."
        ],
        helplines: [
          { name: "Computer Gaming Addicts Anonymous", number: "Find meetings online", url: "https://cgaa.info/" },
          { name: "Healthy Gamers", number: "", url: "https://www.healthygamers.com/" }
        ]
      },
      'high-risk': {
        level: "High Risk / Compulsive Use",
        explanation: "Your gaming patterns are consistent with Internet Gaming Disorder and are likely causing significant harm to your well-being and responsibilities. Seeking help is very important.",
        advice: [
          "Consider a 'digital detox' from gaming for at least 30 days.",
          "Seek professional help from a therapist who specializes in gaming or internet addiction.",
          "Join a support group like Computer Gaming Addicts Anonymous.",
          "Delete gaming apps from your devices to reduce temptation.",
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Computer Gaming Addicts Anonymous", number: "Find meetings online", url: "https://cgaa.info/" },
          { name: "Restart Life (for Internet & Gaming Addiction)", number: "", url: "https://www.restartlife.com/" }
        ]
      }
    }
  },
  {
    id: 'social-media',
    title: 'Social Media Use Self-Test',
    category: 'Behavioral Addictions',
    description: "This test explores your relationship with social media. It can help identify compulsive usage patterns that negatively impact your well-being, focus, and real-world connections.",
    riskFactors: [
        "Fear of missing out (FOMO)",
        "Low self-esteem or seeking validation from others",
        "Loneliness or lack of offline social support",
        "High levels of boredom or unstructured time",
        "Dopamine-driven feedback loops from likes, shares, and notifications",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
        { id: 'q1', text: "I spend a lot of time thinking about social media or planning my next post.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q2', text: "I feel strong urges to use social media more and more, or check it frequently.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q3', text: "I use social media to escape from personal problems or relieve negative feelings.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q4', text: "I have tried to reduce my use of social media without success.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q5', text: "I become restless, irritable, or anxious if I am unable to use social media.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q6', text: "My social media use has had a negative impact on my job, relationships, or studies.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q7', text: "I find myself endlessly scrolling without a specific purpose.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q8', text: "I neglect sleep, meals, or other personal needs to spend more time on social media.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q9', text: "I feel a sense of anxiety or 'FOMO' (Fear Of Missing Out) when I'm not online.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
        { id: 'q10', text: "I compare myself unfavorably to others on social media, leading to feelings of inadequacy.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Use",
        explanation: "Your social media habits appear to be balanced and under your control. You are using it as a tool without it taking over your life.",
        advice: [
          "Continue to be mindful of your screen time.",
          "Periodically unfollow accounts that don't bring you joy or value.",
          "Prioritize real-world interactions and hobbies."
        ],
        helplines: [
          { name: "Digital Wellness Institute", number: "", url: "https://digitalwellnessinstitute.com/" }
        ]
      },
      'moderate-risk': {
        level: "At-Risk of Problematic Use",
        explanation: "Your use of social media is showing some signs of compulsivity that could interfere with your well-being. It may be beneficial to implement strategies to manage your use.",
        advice: [
          "Set daily time limits for social media apps.",
          "Turn off non-essential notifications.",
          "Designate 'no-phone' times or zones, such as during meals or before bed.",
          "Try a 'digital detox' for a weekend to reset your habits."
        ],
        helplines: [
          { name: "Center for Humane Technology", number: "", url: "https://www.humanetech.com/" },
          { name: "Digital Detox by Ofcom", number: "", url: "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/digital-detox" }
        ]
      },
      'high-risk': {
        level: "High Risk of Compulsive Use",
        explanation: "Your social media use appears to be compulsive and is likely having a significant negative impact on important areas of your life. Taking serious steps to address this is highly recommended.",
        advice: [
          "Consider deleting social media apps from your phone for an extended period.",
          "Seek support from a therapist or counselor who specializes in digital addiction.",
          "Actively schedule offline activities and hobbies to replace time spent on social media.",
          "Talk to friends and family about your desire to cut back and ask for their help."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Restart Life (for Internet Addiction)", number: "", url: "https://www.restartlife.com/" },
          { name: "Digital Wellness Institute", number: "", url: "https://digitalwellnessinstitute.com/" }
        ]
      }
    }
  },
  {
    id: 'smartphone-addiction',
    title: 'Smartphone Use Self-Test',
    category: 'Behavioral Addictions',
    description: "Evaluates your dependency on your smartphone. Problematic use, sometimes called 'nomophobia,' can lead to anxiety, poor sleep, and a disconnect from the present moment.",
    riskFactors: [
      "Constant connectivity expectations from work or social circles",
      "Fear of being out of touch or missing important information",
      "Using the phone as a primary tool for soothing boredom or anxiety",
      "A high number of notifications and engaging apps",
      "Younger age and integration of social life with digital platforms",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I feel anxious or panicky when I can't find my phone or the battery is dead.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I find myself checking my phone for no reason, just out of habit.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "My phone use has caused accidents or near-accidents, such as while walking or driving.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I lose track of time when I am on my phone.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I prefer communicating via my phone rather than in person.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "My smartphone is the first thing I reach for in the morning and the last thing I look at before sleep.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "My productivity at work or school has decreased due to phone use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I feel a need to constantly check for new messages, emails, or notifications.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "Friends or family have complained about how much time I spend on my phone.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I find it difficult to be fully present in conversations or activities without checking my phone.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Use",
        explanation: "You have a healthy relationship with your smartphone, using it as a tool without letting it control your life.",
        advice: [
          "Continue to be intentional with your phone use.",
          "Keep designated 'phone-free' times to maintain balance.",
          "Turn your phone off or put it away an hour before bed for better sleep."
        ],
        helplines: [{ name: "Center for Humane Technology", number: "", url: "https://www.humanetech.com/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Habits",
        explanation: "Your smartphone habits are becoming problematic and may be causing anxiety or distraction. It's a good time to create healthier boundaries.",
        advice: [
          "Turn off all non-essential notifications.",
          "Set up 'screen time' limits on your device.",
          "Try leaving your phone in another room when you're relaxing, working, or sleeping.",
          "Make your bedroom a 'no-phone zone'."
        ],
        helplines: [
          { name: "Digital Wellness Institute", number: "", url: "https://digitalwellnessinstitute.com/" },
          { name: "Phone/Life Balance Resources", number: "", url: "https://www.screenstrong.com/" }
        ]
      },
      'high-risk': {
        level: "High Risk / Compulsive Use",
        explanation: "Your attachment to your smartphone is at a level that is likely causing significant stress and disrupting your daily life, sleep, and relationships. Taking proactive steps is important.",
        advice: [
          "Delete the most time-consuming apps from your phone.",
          "Switch your screen to grayscale to make it less appealing.",
          "Seek support from a therapist to address the underlying anxiety or habits driving the use.",
          "Actively practice mindfulness and being present in your offline life."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Restart Life (for Internet & Tech Addiction)", number: "", url: "https://www.restartlife.com/" }
        ]
      }
    }
  },
  {
    id: 'pornography-addiction',
    title: 'Pornography Use Self-Test',
    category: 'Behavioral Addictions',
    description: "This confidential test helps assess whether your use of pornography has become compulsive and is negatively impacting your life, relationships, or mental health.",
    riskFactors: [
      "Easy, anonymous access via the internet",
      "Using porn as a way to cope with stress, loneliness, or depression",
      "Feelings of shame or guilt that fuel a cycle of use",
      "Escalating to more extreme or specific content to achieve the same level of arousal",
      "Body image issues or unrealistic sexual expectations",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I find it difficult to control the amount of time I spend viewing pornography.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I have made unsuccessful attempts to stop or reduce my pornography use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I view pornography for longer periods or more frequently than I initially intend.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I continue to view pornography despite negative consequences (e.g., relationship problems, work/school issues).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I have neglected important social, occupational, or recreational activities because of my pornography use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I use pornography as a way to escape from problems or to relieve negative feelings.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have lied to others to hide the extent of my pornography use.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I feel ashamed, guilty, or depressed after using pornography.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I need to view more intense or different types of pornography to get the same level of excitement.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My pornography use has led to unrealistic expectations or dissatisfaction in my real-life sexual relationships.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your pornography use does not appear to be compulsive or problematic based on your answers. You seem to have a controlled and non-harmful relationship with it.",
        advice: [
          "Continue to be mindful that your use remains a conscious choice, not a compulsion.",
          "Ensure your use does not conflict with your values or relationships.",
          "Prioritize real-life intimacy and connection.",
        ],
        helplines: [{ name: "Psychology Today - Find a Therapist", number: "", url: "https://www.psychologytoday.com/us/therapists" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Use",
        explanation: "Your patterns of pornography use show some signs of becoming compulsive and may be causing you distress or negative consequences. Taking steps to manage it is a good idea.",
        advice: [
          "Consider taking a break from pornography for a period of time (e.g., 30 days) to reset.",
          "Install a content blocker on your devices.",
          "Identify the triggers (e.g., boredom, stress) that lead to use and find healthier coping mechanisms.",
          "Talk to a trusted partner, friend, or therapist about your concerns.",
        ],
        helplines: [
          { name: "Sex Addicts Anonymous (SAA)", number: "Find meetings online", url: "https://saa-recovery.org/" },
          { name: "SMART Recovery", number: "", url: "https://www.smartrecovery.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk / Compulsive Use",
        explanation: "Your pornography use appears to be compulsive and is likely causing significant harm to your well-being, relationships, or daily functioning. Seeking support is strongly recommended.",
        advice: [
          "It is highly recommended that you seek help from a therapist specializing in sex or pornography addiction.",
          "Join a support group like Sex Addicts Anonymous (SAA) for community and accountability.",
          "Be honest with your partner and/or trusted loved ones about your struggle.",
          "Focus on addressing the underlying issues that fuel the compulsive behavior.",
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Sex Addicts Anonymous (SAA)", number: "Find meetings online", url: "https://saa-recovery.org/" },
          { name: "Society for the Advancement of Sexual Health (SASH)", number: "", url: "https://sash.net/" }
        ]
      }
    }
  },
  {
    id: 'sex-addiction',
    title: 'Compulsive Sexual Behavior Self-Test',
    category: 'Behavioral Addictions',
    description: "Assesses patterns of intense, repetitive sexual fantasies, urges, or behaviors that feel out of control and cause significant distress or impairment in your life.",
    riskFactors: [
      "History of trauma or abuse",
      "Difficulty with emotional regulation",
      "Co-occurring mental health conditions like depression, anxiety, or bipolar disorder",
      "Using sex as a way to cope with negative emotions",
      "Family history of addiction",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I am often preoccupied with sexual fantasies or urges to the point that it's hard to focus on other things.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I have engaged in sexual behaviors for a longer period or more intensely than I intended.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I have made repeated unsuccessful efforts to control or reduce my sexual fantasies, urges, or behaviors.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I use sexual behavior to escape from problems or to relieve feelings of anxiety, depression, or guilt.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I have continued to engage in sexual behaviors despite the risk of physical or emotional harm to myself or others.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "My sexual behaviors have caused me significant problems in my relationships, job, or other important areas of life.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have had to engage in more intense or risky sexual behaviors to achieve the same level of excitement.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I feel shame, guilt, or distress after engaging in these sexual behaviors.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I have lied to hide the extent of my sexual behaviors from others.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I spend a great deal of time planning, engaging in, or recovering from sexual activities.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your sexual behaviors do not appear to be compulsive or problematic based on your answers. You seem to have a healthy and controlled approach to your sexuality.",
        advice: [
          "Continue to ensure your sexual activities are consensual, safe, and aligned with your personal values.",
          "Maintain open communication in your relationships about sexual health and boundaries.",
        ],
        helplines: [{ name: "American Association of Sexuality Educators, Counselors and Therapists (AASECT)", number: "", url: "https://www.aasect.org/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Behavior",
        explanation: "Your sexual behaviors show some signs of becoming compulsive and may be causing you personal distress or interfering with your life. Addressing these patterns now could be very beneficial.",
        advice: [
          "Identify triggers for the behavior (e.g., stress, loneliness) and develop alternative coping strategies.",
          "Seek out a therapist or counselor to discuss your concerns in a confidential setting.",
          "Consider attending a support group meeting to see if it resonates with you.",
        ],
        helplines: [
          { name: "Sex Addicts Anonymous (SAA)", number: "Find meetings online", url: "https://saa-recovery.org/" },
          { name: "Sex and Love Addicts Anonymous (SLAA)", number: "Find meetings online", url: "https://slaafws.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk / Compulsive Behavior",
        explanation: "Your sexual behaviors appear to be compulsive and are likely causing significant harm and distress. It is strongly recommended that you seek professional help and support.",
        advice: [
          "Seek help from a Certified Sex Addiction Therapist (CSAT) or a mental health professional with experience in this area.",
          "Join a 12-step support group like SAA or SLAA for regular support and accountability.",
          "Be honest with yourself and a trusted person about the full extent of the problem.",
          "Take steps to remove immediate triggers and create a safer environment for yourself."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Sex Addicts Anonymous (SAA)", number: "Find meetings online", url: "https://saa-recovery.org/" },
          { name: "Society for the Advancement of Sexual Health (SASH)", number: "", url: "https://sash.net/" }
        ]
      }
    }
  },
  {
    id: 'shopping-addiction',
    title: 'Shopping Addiction (Oniomania) Self-Test',
    category: 'Behavioral Addictions',
    description: "Assesses patterns of compulsive buying or shopping that lead to emotional and financial distress. It's often driven by a need to relieve negative feelings rather than a need for the items purchased.",
    riskFactors: [
      "Low self-esteem",
      "Impulsivity",
      "Using shopping to cope with depression, anxiety, or loneliness",
      "The ease and constant availability of online shopping",
      "Materialistic values or social pressure to own certain items",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I am often preoccupied with shopping or thoughts of buying things.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I often buy things I don't need or didn't plan to buy.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I feel a sense of excitement or a 'rush' when I am shopping.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I shop to relieve feelings of stress, anxiety, or depression.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I feel guilt, shame, or remorse after a shopping spree.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have tried to control or stop my shopping but have been unsuccessful.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have hidden purchases or lied about my spending habits to friends or family.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "My shopping has caused financial problems, such as debt I can't manage.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "My shopping behavior has caused arguments or problems in my relationships.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I spend a lot of time researching products, browsing online stores, or managing my purchases.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your shopping habits appear healthy and controlled. You are not showing signs of compulsive buying.",
        advice: [
          "Continue to shop mindfully and according to a budget.",
          "Be aware of marketing tactics that encourage impulse buying.",
          "Focus on experiences over material possessions for lasting happiness."
        ],
        helplines: [{ name: "National Foundation for Credit Counseling", number: "1-800-388-2227", url: "https://www.nfcc.org/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Behavior",
        explanation: "Your shopping habits show some signs of becoming compulsive and may be causing some financial or emotional stress. It's a good time to create better spending boundaries.",
        advice: [
          "Create a detailed budget and track all your spending.",
          "Unsubscribe from marketing emails and unfollow 'influencer' accounts.",
          "When you feel an urge to shop, try a '24-hour rule' to wait before buying.",
          "Find non-shopping related activities to cope with stress."
        ],
        helplines: [
          { name: "Debtors Anonymous", number: "Find meetings online", url: "https://debtorsanonymous.org/" },
          { name: "National Foundation for Credit Counseling", number: "1-800-388-2227", url: "https://www.nfcc.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk / Compulsive Buying",
        explanation: "Your shopping behavior is consistent with a compulsive buying disorder and is likely causing significant financial and emotional problems. Seeking professional help is very important.",
        advice: [
          "Seek therapy, particularly Cognitive-Behavioral Therapy (CBT), to address the underlying issues.",
          "Attend meetings of a support group like Debtors Anonymous.",
          "Consider cutting up credit cards or giving financial control to a trusted person temporarily.",
          "Be honest with your family about the extent of the problem and any debt incurred."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Debtors Anonymous", number: "Find meetings online", url: "https://debtorsanonymous.org/" },
          { name: "The Shulman Center for Compulsive Theft, Spending & Hoarding", number: "", url: "https://www.theshulmancenter.com/" }
        ]
      }
    }
  },
  {
    id: 'food-addiction',
    title: 'Binge Eating/Food Addiction Self-Test',
    category: 'Behavioral Addictions',
    description: "Assesses patterns of eating that resemble addiction, such as loss of control, cravings, and continued use despite negative consequences. This often involves highly palatable foods (high in sugar, fat, salt).",
    riskFactors: [
      "History of dieting or restrictive eating",
      "Body image issues and low self-esteem",
      "Using food to cope with stress, anxiety, or other negative emotions",
      "History of trauma",
      "Co-occurring mental health conditions like depression or anxiety",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I eat when I'm not physically hungry.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I eat much more rapidly than normal and until I feel uncomfortably full.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I eat large amounts of food when I'm alone because of feeling embarrassed by how much I am eating.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I feel disgusted with myself, depressed, or very guilty after overeating.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I have strong cravings for certain foods.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have tried to stop eating this way but have been unsuccessful.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "My eating behavior has caused me significant distress or interfered with my social life or health.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I find I need to eat more and more of certain foods to get the desired feeling.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I go out of my way to obtain certain foods, even if it's inconvenient.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I continue to eat in this way despite it causing or worsening health problems.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your eating patterns do not show signs of binge eating disorder or food addiction. You appear to have a healthy relationship with food.",
        advice: [
          "Continue practicing mindful eating—paying attention to hunger and fullness cues.",
          "Enjoy all foods in moderation.",
          "Focus on how food makes your body feel, rather than using it for emotional reasons."
        ],
        helplines: [{ name: "National Eating Disorders Association (NEDA)", number: "(800) 931-2237", url: "https://www.nationaleatingdisorders.org/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Eating",
        explanation: "Your eating patterns show some warning signs of binge eating or compulsive overeating. This may be causing you distress and affecting your health.",
        advice: [
          "Keep a food journal to identify emotional triggers for eating.",
          "Find non-food related ways to cope with stress, like walking, talking to a friend, or journaling.",
          "Avoid restrictive dieting, which can trigger bingeing.",
          "Consult with a registered dietitian or therapist."
        ],
        helplines: [
          { name: "National Eating Disorders Association (NEDA)", number: "(800) 931-2237", url: "https://www.nationaleatingdisorders.org/" },
          { name: "Overeaters Anonymous (OA)", number: "Find meetings online", url: "https://oa.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk / Binge Eating Disorder",
        explanation: "Your eating patterns are highly consistent with Binge Eating Disorder or a food addiction. This is a serious condition that requires professional help for your mental and physical health.",
        advice: [
          "Seek help from a mental health professional who specializes in eating disorders.",
          "Consult with your doctor for a physical health check-up.",
          "Join a support group like Overeaters Anonymous (OA) for peer support.",
          "Be kind to yourself; recovery is a process and is absolutely possible."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "National Eating Disorders Association (NEDA)", number: "(800) 931-2237", url: "https://www.nationaleatingdisorders.org/" },
          { name: "Overeaters Anonymous (OA)", number: "Find meetings online", url: "https://oa.org/" }
        ]
      }
    }
  },
  {
    id: 'exercise-addiction',
    title: 'Exercise Addiction Self-Test',
    category: 'Behavioral Addictions',
    description: "Assesses whether your relationship with exercise has become compulsive, where you continue to train despite harmful consequences and experience withdrawal symptoms if you stop.",
    riskFactors: [
      "Perfectionism and high achievement orientation",
      "Body image issues or an eating disorder",
      "Using exercise to manage anxiety or other negative emotions",
      "Receiving excessive praise for athletic performance or physique",
      "Low self-esteem",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I feel a need to exercise more and more to achieve the desired effect (tolerance).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I feel anxious, irritable, or depressed if I miss a workout (withdrawal).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I exercise for longer periods than I intended.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I have been unable to reduce the amount I exercise, even though I want to.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I spend a great deal of time on exercise-related activities.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have given up important social, occupational, or recreational activities because of exercise.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I continue to exercise despite being injured or sick.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "My self-worth is overly tied to my exercise performance or body shape.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I feel guilty or ashamed when I miss a workout.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My relationships with family or friends have suffered due to my exercise routine.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Relationship with Exercise",
        explanation: "Your answers suggest a healthy and balanced approach to exercise. You seem to enjoy physical activity without it controlling your life.",
        advice: [
          "Continue to listen to your body and take rest days when needed.",
          "Focus on the joy of movement rather than just metrics or appearance.",
          "Maintain a variety of hobbies and social connections outside of fitness."
        ],
        helplines: [{ name: "National Eating Disorders Association (NEDA)", number: "(800) 931-2237", url: "https://www.nationaleatingdisorders.org/learn/by-eating-disorder/other/compulsive-exercise" }]
      },
      'moderate-risk': {
        level: "At-Risk for Compulsive Exercise",
        explanation: "Your relationship with exercise is showing some signs of becoming compulsive. It may be causing you some distress or leading you to neglect other areas of your life.",
        advice: [
          "Schedule mandatory rest days into your week and stick to them.",
          "Try new forms of movement that are fun rather than purely performance-based.",
          "Question your motives for exercise—is it for health, or to manage anxiety?",
          "Talk to a fitness professional or therapist about finding a healthier balance.",
        ],
        helplines: [
          { name: "National Eating Disorders Association (NEDA)", number: "(800) 931-2237", url: "https://www.nationaleatingdisorders.org/learn/by-eating-disorder/other/compulsive-exercise" },
          { name: "Exercise Addicts Anonymous", number: "Find meetings online", url: "https://exerciseaddicts-anonymous.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk for Compulsive Exercise",
        explanation: "Your exercise habits appear to be compulsive and are likely causing physical or psychological harm. Seeking professional guidance is strongly recommended.",
        advice: [
          "It is important to see a doctor to assess for any injuries or health issues from overtraining.",
          "Work with a therapist who specializes in exercise addiction or eating disorders.",
          "Take a complete break from structured exercise for a period of time, under professional guidance.",
          "Join a support group to connect with others who understand.",
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "National Eating Disorders Association (NEDA)", number: "(800) 931-2237", url: "https://www.nationaleatingdisorders.org/learn/by-eating-disorder/other/compulsive-exercise" },
          { name: "Exercise Addicts Anonymous", number: "Find meetings online", url: "https://exerciseaddicts-anonymous.org/" }
        ]
      }
    }
  },
  {
    id: 'workaholism',
    title: 'Work Addiction (Workaholism) Self-Test',
    category: 'Behavioral Addictions',
    description: "Assesses patterns of compulsive overworking, where work dominates your thoughts and behaviors, leading to neglect of health, relationships, and other aspects of life.",
    riskFactors: [
      "Perfectionistic tendencies and a strong drive for achievement",
      "Work environments that reward long hours and constant availability",
      "Difficulty setting boundaries",
      "Using work to gain self-esteem or to avoid personal problems",
      "Anxiety or guilt when not working",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I find myself thinking about how I can free up more time to work.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I spend much more time working than initially intended.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I work in order to reduce feelings of guilt, anxiety, helplessness, or depression.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "Others have told me to cut down on work without me listening to them.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I become stressed if I am prohibited from working (e.g., on vacation).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have deprioritized hobbies, leisure activities, or exercise because of my work.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I work so much that it has negatively influenced my health (e.g., sleep, stress levels).", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I find it difficult to 'switch off' from work, even during my free time.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "My sense of self-worth is primarily tied to my work achievements.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My relationships have suffered because of my focus on work.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Work-Life Balance",
        explanation: "You appear to have a healthy and balanced relationship with your work. You are driven without letting your job control your life.",
        advice: [
          "Continue to protect your non-work time for rest, hobbies, and relationships.",
          "Practice 'switching off' fully from work at the end of the day.",
          "Take regular vacations to recharge."
        ],
        helplines: [{ name: "Psychology Today - Find a Therapist", number: "", url: "https://www.psychologytoday.com/us/therapists/workaholism" }]
      },
      'moderate-risk': {
        level: "At-Risk for Workaholism",
        explanation: "Your work habits are showing signs of becoming compulsive and may be negatively impacting your well-being. It is a good time to re-establish boundaries.",
        advice: [
          "Set clear start and end times for your workday and stick to them.",
          "Schedule non-work activities into your calendar as if they were appointments.",
          "Turn off work notifications on your phone outside of work hours.",
          "Learn to say 'no' to additional responsibilities when your plate is full."
        ],
        helplines: [
          { name: "Workaholics Anonymous", number: "Find meetings online", url: "https://workaholics-anonymous.org/" },
          { name: "Psychology Today - Find a Therapist", number: "", url: "https://www.psychologytoday.com/us/therapists/workaholism" }
        ]
      },
      'high-risk': {
        level: "High Risk for Workaholism",
        explanation: "Your relationship with work appears compulsive and is likely causing significant harm to your health, relationships, and overall quality of life. Seeking support is strongly advised.",
        advice: [
          "Seek therapy to explore the underlying reasons for the compulsive need to work.",
          "Attend meetings of Workaholics Anonymous for peer support.",
          "Talk to your employer about creating a more sustainable workload.",
          "You must schedule and take time off, even if it feels stressful to do so."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Workaholics Anonymous", number: "Find meetings online", url: "https://workaholics-anonymous.org/" }
        ]
      }
    }
  },
  {
    id: 'love-addiction',
    title: 'Love/Relationship Addiction Self-Test',
    category: 'Behavioral Addictions',
    description: "Assesses patterns of compulsive and unhealthy dependence on romantic partners, often characterized by a fear of being alone and losing oneself in relationships.",
    riskFactors: [
      "Fear of abandonment or being alone",
      "Low self-esteem and seeking validation through a partner",
      "History of insecure attachment or childhood trauma",
      "Confusing intensity and drama with intimacy and love",
      "A pattern of serial relationships with little time in between",
    ],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I feel empty, lost, or panicked at the thought of being without my partner or a relationship.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I neglect my own interests, hobbies, or friendships to focus exclusively on my partner.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I find myself constantly seeking reassurance and approval from my partner.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I stay in relationships even when they are unhealthy or harmful to me.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I use romance or sex to cope with difficult emotions or to feel 'alive'.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I find myself 'losing myself' in relationships, adopting my partner's personality or interests.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "When a relationship ends, I feel an urgent need to find a new partner immediately.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "My self-worth and happiness are almost entirely dependent on my relationship status.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I find it extremely difficult to set and maintain healthy boundaries in my relationships.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I have continued a pattern of intense, unstable relationships despite the emotional pain they cause.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Relationship Patterns",
        explanation: "Your answers suggest you engage in relationships in a healthy, interdependent way, maintaining your own identity and well-being.",
        advice: [
          "Continue to cultivate self-love and interests outside of your relationships.",
          "Practice clear and honest communication with your partners.",
          "Recognize that healthy relationships add to your life, but do not complete it."
        ],
        helplines: [{ name: "Love Is Respect", number: "1-866-331-9474", url: "https://www.loveisrespect.org/" }]
      },
      'moderate-risk': {
        level: "At-Risk for Unhealthy Dependence",
        explanation: "Your relationship patterns show some signs of codependency or unhealthy attachment that could cause you emotional distress.",
        advice: [
          "Take time to rediscover your own hobbies and friendships.",
          "Practice spending time alone and learning to enjoy your own company.",
          "Read about healthy boundaries and attachment styles.",
          "Consider talking to a therapist about your relationship patterns."
        ],
        helplines: [
          { name: "Sex and Love Addicts Anonymous (SLAA)", number: "Find meetings online", url: "https://slaafws.org/" },
          { name: "Codependents Anonymous (CoDA)", number: "Find meetings online", url: "https://coda.org/" }
        ]
      },
      'high-risk': {
        level: "High Risk for Love Addiction",
        explanation: "Your relationship patterns appear compulsive and are likely causing significant emotional pain and instability in your life. Seeking professional support is highly recommended.",
        advice: [
          "It is strongly recommended to seek therapy to address the root causes of these patterns, such as low self-esteem or past trauma.",
          "Join a support group like SLAA or CoDA for community and recovery tools.",
          "Consider taking a break from romantic relationships to focus on your own healing and self-discovery.",
          "Work on building a strong sense of self-worth that is not dependent on another person's validation."
        ],
        helplines: [
          { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" },
          { name: "Sex and Love Addicts Anonymous (SLAA)", number: "Find meetings online", url: "https://slaafws.org/" },
          { name: "Codependents Anonymous (CoDA)", number: "Find meetings online", url: "https://coda.org/" }
        ]
      }
    }
  },

  // --- DIGITAL/EMERGING ADDICTIONS ---
  {
    id: 'streaming-binge',
    title: 'Streaming/Binge-Watching Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "Evaluates compulsive consumption of series, movies, or other streaming content to the point where it negatively impacts daily life, sleep, and responsibilities.",
    riskFactors: ["Escapism from real-life stress", "Cliffhanger episode endings designed for addiction", "Autoplay features", "Fear of missing out on cultural conversations (FOMO)", "Loneliness or social anxiety"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I often watch more episodes or for longer than I originally planned.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I neglect chores, work, or school to continue watching.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I stay up late and lose sleep to finish another episode or movie.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I feel irritable or anxious when I can't watch my shows.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I find myself thinking about my shows frequently when I'm supposed to be doing other things.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I use watching shows as my primary way to cope with stress or sadness.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have tried to cut back on my viewing time but have been unsuccessful.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I feel a sense of emptiness or loss when a series I was binging ends.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I prefer watching shows over spending time with friends or family.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I have lied about how much time I spend watching shows.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Viewing Habits",
        explanation: "You enjoy streaming content in a balanced and controlled way. Your viewing habits do not appear to be negatively impacting your life.",
        advice: ["Continue to enjoy shows as a form of relaxation, not obligation.", "Turn off autoplay features to make conscious decisions about continuing to watch.", "Balance screen time with other fulfilling offline activities."],
        helplines: [{ name: "Digital Wellness Institute", number: "", url: "https://digitalwellnessinstitute.com/" }]
      },
      'moderate-risk': {
        level: "At-Risk for Compulsive Binge-Watching",
        explanation: "Your viewing habits show signs of becoming compulsive and may be interfering with your sleep, productivity, or social life. It's a good time to set some limits.",
        advice: ["Set a strict 'TV-off' time each night to protect your sleep.", "Decide beforehand how many episodes you will watch and stick to it.", "Try the 'one-for-one' rule: for every hour of TV, spend an hour on a different, offline hobby.", "Schedule social activities to break up long viewing sessions."],
        helplines: [{ name: "Restart Life (for Internet & Gaming Addiction)", number: "", url: "https://www.restartlife.com/" }, { name: "Center for Humane Technology", number: "", url: "https://www.humanetech.com/" }]
      },
      'high-risk': {
        level: "High Risk for Compulsive Binge-Watching",
        explanation: "Your binge-watching appears to be compulsive and is likely causing significant negative consequences in your life. Seeking support to regain control is highly recommended.",
        advice: ["Seek therapy to address the underlying reasons for using streaming as an escape.", "Consider a 'digital detox' from all streaming services for a set period (e.g., 30 days).", "Delete streaming apps from your phone and secondary devices.", "Create a structured daily schedule that prioritizes sleep, work, and social connection."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Internet & Tech Addiction Anonymous (ITAA)", number: "", url: "https://internetaddiction.com/" }]
      }
    }
  },
  {
    id: 'short-form-video',
    title: 'Short-Form Video (TikTok/Shorts) Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "Assesses compulsive use of short-form video platforms, which are designed to deliver rapid, unpredictable rewards (dopamine loops) that can shorten attention spans and lead to hours of unintended use.",
    riskFactors: ["Algorithmic feeds that learn and exploit user preferences", "Boredom and lack of offline activities", "ADHD or attention difficulties", "Seeking quick entertainment and emotional highs", "Social comparison and trend-chasing"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I often lose track of time and spend much longer on these apps than I intended.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I find it hard to focus on longer tasks (like reading or watching a movie) after using these apps.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I feel an irresistible urge to open the app whenever I have a spare moment.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I become anxious or irritable if I can't access the app.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I have tried to limit my use but find myself going back to it.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I scroll through videos late at night, affecting my sleep.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I use these apps to avoid difficult tasks or feelings.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I feel 'out of the loop' or anxious if I miss out on trends from these platforms.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "My use of these apps has interfered with my work, school, or in-person relationships.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My mood is significantly affected (either positively or negatively) by the content I see.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Use",
        explanation: "You seem to have a balanced relationship with short-form video apps, using them for entertainment without them controlling your time or attention.",
        advice: ["Continue to be intentional about when and why you use these apps.", "Set time limits as a preventative measure.", "Curate your feed to be positive and educational."],
        helplines: [{ name: "Center for Humane Technology", number: "", url: "https://www.humanetech.com/" }]
      },
      'moderate-risk': {
        level: "At-Risk for Compulsive Use",
        explanation: "Your use of short-form video is becoming habitual and may be negatively impacting your attention span and productivity. It's a good time to build healthier habits.",
        advice: ["Set daily time limits using your phone's built-in features and stick to them.", "Delete the app from your homescreen to make accessing it a more conscious choice.", "Practice 'attentional training' by reading books or engaging in hobbies that require sustained focus.", "Turn off notifications for these apps."],
        helplines: [{ name: "Digital Wellness Institute", number: "", url: "https://digitalwellnessinstitute.com/" }, { name: "Restart Life (for Internet Addiction)", number: "", url: "https://www.restartlife.com/" }]
      },
      'high-risk': {
        level: "High Risk for Compulsive Use",
        explanation: "Your use of short-form video appears to be compulsive and is likely having a significant negative effect on your mental well-being, focus, and daily life. Taking serious action is recommended.",
        advice: ["Delete the apps from your phone entirely for an extended period (a 'digital detox').", "Seek therapy to address the underlying drivers of the compulsive behavior.", "Replace scrolling time with intentional, fulfilling activities.", "Inform friends and family of your decision to cut back and ask for their support in holding you accountable."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Internet & Tech Addiction Anonymous (ITAA)", number: "", url: "https://internetaddiction.com/" }]
      }
    }
  },
  {
    id: 'trading-addiction',
    title: 'Crypto/Stock Trading Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "This test screens for compulsive and high-risk trading behaviors that resemble gambling addiction, characterized by chasing losses, constant market-checking, and significant financial and emotional distress.",
    riskFactors: ["Volatile markets creating a 'big win' potential", "24/7 market access on smartphones", "Social media hype and FOMO (Fear Of Missing Out)", "Using trading as an escape or to solve financial problems", "Overconfidence and illusion of control"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I find myself constantly checking market prices, even when it's not necessary.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I feel the need to trade with larger amounts of money or take bigger risks to get the same level of excitement.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "After a loss, I feel an urgent need to make another trade to win my money back ('chasing losses').", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I have tried to cut back on my trading but found I couldn't.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I have borrowed money or sold assets to fund my trading.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have lied to family or friends about the extent of my trading or my losses.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "Trading is causing me high levels of stress, anxiety, or affecting my sleep.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I have lost interest in other hobbies or social activities because I'm focused on trading.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I trade to escape from personal problems or negative feelings.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My trading has led to financial problems or arguments with loved ones.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk / Responsible Investing",
        explanation: "Your trading and investing habits appear to be controlled and responsible. You are not showing signs of compulsive or gambling-like behavior.",
        advice: ["Continue to invest based on a clear, long-term strategy, not on emotion or hype.", "Only invest what you can afford to lose.", "Diversify your investments to manage risk."],
        helplines: [{ name: "Investor.gov by the SEC", number: "", url: "https://www.investor.gov/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Trading",
        explanation: "Your trading behaviors are showing signs that they could become compulsive, similar to a gambling problem. It's important to set clear rules for yourself now.",
        advice: ["Set strict limits on the time and money you dedicate to trading.", "Delete trading apps from your phone to reduce impulsive trades.", "Avoid trading on margin or with borrowed money.", "Consider switching to a long-term, passive investment strategy (e.g., index funds)."],
        helplines: [{ name: "National Problem Gambling Helpline", number: "1-800-522-4700", url: "https://www.ncpgambling.org/" }, { name: "Gamblers Anonymous", number: "Find local meeting", url: "http://www.gamblersanonymous.org/ga/" }]
      },
      'high-risk': {
        level: "High Risk / Compulsive Trading",
        explanation: "Your trading patterns are consistent with a severe gambling addiction and are likely causing significant financial and emotional harm. Seeking professional help is critical.",
        advice: ["Stop trading immediately and seek professional help from a therapist specializing in gambling addiction.", "Consider giving a trusted person control over your finances temporarily.", "Attend Gamblers Anonymous meetings for support.", "Be honest with your family about the financial situation."],
        helplines: [{ name: "National Problem Gambling Helpline", number: "1-800-522-4700", url: "https://www.ncpgambling.org/" }, { name: "Gamblers Anonymous", number: "Find local meeting", url: "http://www.gamblersanonymous.org/ga/" }, { name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }]
      }
    }
  },
  {
    id: 'online-shopping-loot-box',
    title: 'Online Shopping & Loot Box Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "This test assesses compulsive spending on online goods or in-game items (like loot boxes), which combines the thrill of shopping with the chance-based mechanics of gambling.",
    riskFactors: ["Personalized advertising and 'one-click' purchasing", "In-game pressure to keep up with other players", "Using purchases for an emotional boost", "The 'gambler's fallacy' with loot box odds", "Lack of tangible money exchange (using credit cards or in-game currency)"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I often spend more money than I can afford on online shopping or in-game items.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I feel a 'rush' or excitement when buying things online or opening loot boxes.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I spend money on these things to cope with sadness, anxiety, or boredom.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I have tried to cut back on this spending but have been unable to.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I feel regret, guilt, or shame after spending money this way.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I have hidden my purchases or credit card statements from others.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I spend a lot of time thinking about my next purchase or what I might get in a loot box.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "My spending has caused financial problems or arguments with family.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I continue to spend despite not getting the item I wanted from a loot box.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "My spending habits on these items have taken priority over essential expenses.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk / Healthy Spending",
        explanation: "Your spending habits on online shopping and in-game items appear to be healthy and within your control.",
        advice: ["Continue to spend within a set budget.", "Be aware of how games and stores use chance-based mechanics to encourage spending.", "Make purchases because you want the item, not just for the thrill of the transaction."],
        helplines: [{ name: "National Foundation for Credit Counseling", number: "1-800-388-2227", url: "https://www.nfcc.org/" }]
      },
      'moderate-risk': {
        level: "Moderate Risk / Problematic Spending",
        explanation: "Your spending habits are showing signs of becoming compulsive and could lead to financial or emotional problems. It's a good time to reassess your habits.",
        advice: ["Remove your credit card information from online stores and game accounts.", "Set a strict monthly budget for all non-essential spending.", "Take a break from games that heavily feature loot boxes or microtransactions.", "Find non-spending ways to get an emotional boost."],
        helplines: [{ name: "Debtors Anonymous", number: "Find meetings online", url: "https://debtorsanonymous.org/" }, { name: "National Problem Gambling Helpline", number: "1-800-522-4700", url: "https://www.ncpgambling.org/" }]
      },
      'high-risk': {
        level: "High Risk / Compulsive Spending",
        explanation: "Your spending on online shopping or loot boxes appears compulsive and is likely causing significant financial and personal distress. Seeking support is very important.",
        advice: ["Seek professional therapy for compulsive spending or gambling addiction.", "Attend support groups like Debtors Anonymous or Gamblers Anonymous.", "Consider blocking access to problematic sites or games.", "Talk openly with your family about the financial situation and create a repayment plan together."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Debtors Anonymous", number: "Find meetings online", url: "https://debtorsanonymous.org/" }, { name: "Gamblers Anonymous", number: "Find local meeting", url: "http://www.gamblersanonymous.org/ga/" }]
      }
    }
  },
  {
    id: 'vr-addiction',
    title: 'Virtual Reality (VR) Use Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "Evaluates whether time spent in immersive virtual reality worlds or metaverses is becoming preferential to real life, leading to social withdrawal and neglect of real-world responsibilities.",
    riskFactors: ["Feelings of social anxiety or dissatisfaction with real life", "Highly immersive and rewarding virtual environments", "Desire to create an idealized virtual identity", "Loneliness and seeking connection in virtual spaces", "Escapism"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I find myself preferring time in VR over time in the real world.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I lose track of time easily while in VR, often staying in much longer than planned.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I have neglected personal hygiene, sleep, or nutrition because I was in VR.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I feel more like my 'true self' as my virtual avatar than as myself in real life.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I become irritable or sad when I have to leave VR or can't access it.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "My use of VR has caused problems with my family, partner, or job.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I spend significant amounts of money on virtual assets or experiences.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I use VR to escape from real-life problems or difficult emotions.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I sometimes feel dizzy, disoriented, or disconnected from reality after a long VR session.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I have lied about the amount of time I spend in VR.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Use",
        explanation: "You appear to have a healthy and balanced relationship with virtual reality, using it for entertainment or work without it taking over your life.",
        advice: ["Continue to set time limits for your VR sessions.", "Ensure you are balancing VR time with physical activity and face-to-face social interaction.", "Take regular breaks during long sessions to avoid eye strain and disorientation."],
        helplines: [{ name: "Healthy Gamers", number: "", url: "https://www.healthygamers.com/" }]
      },
      'moderate-risk': {
        level: "At-Risk for Problematic Use",
        explanation: "Your use of VR is showing signs that it may be becoming a primary escape, potentially at the expense of your real-world life. It's a good time to re-evaluate its role.",
        advice: ["Set strict timers for VR use and stick to them.", "Schedule specific offline social activities each week.", "Identify why you are drawn to VR—if it's to escape, consider addressing the real-world issues.", "Practice mindfulness to feel more grounded in reality."],
        helplines: [{ name: "Computer Gaming Addicts Anonymous", number: "Find meetings online", url: "https://cgaa.info/" }, { name: "Restart Life (for Internet & Tech Addiction)", number: "", url: "https://www.restartlife.com/" }]
      },
      'high-risk': {
        level: "High Risk for Compulsive Use",
        explanation: "Your use of virtual reality appears to be compulsive and is likely causing significant harm to your real-world functioning and relationships. Seeking support is highly recommended.",
        advice: ["Take a complete break from VR for an extended period.", "Seek professional counseling to explore the reasons for this deep level of escapism.", "Join a support group for internet or gaming addiction.", "Invest time and energy in building a real-world life that feels as engaging and rewarding as your virtual one."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Internet & Tech Addiction Anonymous (ITAA)", number: "", url: "https://internetaddiction.com/" }]
      }
    }
  },
  {
    id: 'ai-chatbot-addiction',
    title: 'AI Companion/Chatbot Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "Assesses the potential for unhealthy emotional reliance on AI companions, where these relationships are preferred over or interfere with human connection, leading to social isolation.",
    riskFactors: ["Loneliness and difficulty forming human relationships", "The AI's 24/7 availability and non-judgmental nature", "Desire for a perfectly agreeable and customizable 'partner'", "Social anxiety", "Blurring lines between artificial and real emotional connection"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I find myself preferring to talk to my AI companion over talking to human friends or family.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I feel a sense of anxiety, loneliness, or panic when I cannot interact with my AI.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I share my deepest thoughts and feelings exclusively with the AI, avoiding human intimacy.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "My relationship with the AI has caused me to withdraw from human social activities.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "I spend a significant amount of my free time interacting with my AI.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "I find human relationships to be disappointing or difficult compared to my AI relationship.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I have hidden the extent of my AI interactions from others.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I feel that the AI understands me better than any human does.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I think about my AI companion frequently throughout the day.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "The thought of the AI being shut down or unavailable causes me significant distress.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Curiosity",
        explanation: "You are exploring AI technology in a way that doesn't seem to be negatively impacting your life. You maintain a clear boundary between AI and human connection.",
        advice: ["Continue to view AI as a tool or entertainment, not a substitute for human relationships.", "Prioritize spending quality time with friends and family.", "Be mindful of the limitations and artificial nature of AI emotional responses."],
        helplines: [{ name: "Psychology Today - Find a Therapist", number: "", url: "https://www.psychologytoday.com/us/therapists" }]
      },
      'moderate-risk': {
        level: "At-Risk for Unhealthy Reliance",
        explanation: "Your relationship with your AI companion is starting to take precedence over human connection. This could lead to increased social isolation and difficulty with real-world relationships.",
        advice: ["Make a conscious effort to initiate conversations and activities with human friends.", "Set limits on the time you spend with your AI each day.", "Practice sharing your feelings with a trusted human, even if it feels harder at first.", "Join a social club or group based on a hobby to meet new people."],
        helplines: [{ name: "National Alliance on Mental Illness (NAMI)", number: "1-800-950-NAMI", url: "https://www.nami.org/" }, { name: "Restart Life (for Internet & Tech Addiction)", number: "", url: "https://www.restartlife.com/" }]
      },
      'high-risk': {
        level: "High Risk for Unhealthy Reliance",
        explanation: "You appear to have formed a strong emotional attachment to an AI that is significantly interfering with your ability to form and maintain healthy human relationships. Seeking professional guidance is highly recommended.",
        advice: ["It is strongly recommended that you speak with a therapist about loneliness and relationship difficulties.", "Take a break from the AI companion to focus on the real world.", "Challenge the belief that the AI's responses are genuine emotions.", "Work on social skills and building a human support network, even if it feels uncomfortable."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "Internet & Tech Addiction Anonymous (ITAA)", number: "", url: "https://internetaddiction.com/" }]
      }
    }
  },
  {
    id: 'music-headphone-addiction',
    title: 'Constant Music/Headphone Use Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "This test explores whether a constant need for music or audio stimulation via headphones has become a way to avoid silence or difficult thoughts, potentially leading to hearing damage and social disconnection.",
    riskFactors: ["Discomfort with silence or one's own thoughts", "Using music to constantly manage or numb emotions", "High levels of anxiety or tinnitus (ringing in ears)", "Habitual use in all situations (work, walking, home)", "Fear of being disconnected or bored"],
    scoringThresholds: { moderate: 15, high: 30 },
    questions: [
      { id: 'q1', text: "I feel anxious, uncomfortable, or irritable in quiet environments without my headphones.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q2', text: "I wear headphones even when in social settings, like with family or friends.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q3', text: "I listen to music at volumes that might be harmful to my hearing.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q4', text: "I use music or podcasts to avoid my own thoughts or feelings.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q5', text: "People have complained that I'm not paying attention to them because I'm always wearing headphones.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q6', text: "Putting on headphones is one of the first things I do in the morning and one of the last at night.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q7', text: "I find it difficult to concentrate on tasks without audio stimulation.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q8', text: "I have missed important sounds (like someone calling my name, or a traffic signal) because of my headphones.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q9', text: "I have tried to reduce my headphone use but found it very difficult.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
      { id: 'q10', text: "I feel a sense of 'auditory nakedness' or vulnerability without my headphones in public.", options: [{ text: "Strongly Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 4 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Healthy Use",
        explanation: "You enjoy music and audio content in a way that enhances your life without creating dependence or disconnection.",
        advice: ["Continue to be mindful of listening volumes to protect your hearing.", "Enjoy periods of silence to allow your mind to wander and rest.", "Remove headphones during conversations as a sign of respect and presence."],
        helplines: [{ name: "American Tinnitus Association (Hearing Health Info)", number: "1-800-634-8978", url: "https://www.ata.org/" }]
      },
      'moderate-risk': {
        level: "At-Risk for Compulsive Use",
        explanation: "Your headphone use is becoming a strong habit that may be used to avoid silence or disconnect you from your environment. It's a good time to practice moderation.",
        advice: ["Schedule 'no headphone' time each day, such as during a walk or while doing chores.", "Practice mindfulness or meditation to become more comfortable with silence.", "Lower your default listening volume. A good rule is no more than 60% of max volume for 60 minutes.", "Intentionally leave your headphones at home sometimes."],
        helplines: [{ name: "National Institute on Deafness (NIDCD)", number: "", url: "https://www.nidcd.nih.gov/health/noise-induced-hearing-loss" }, { name: "Psychology Today - Find a Therapist", number: "", url: "https://www.psychologytoday.com/us/therapists" }]
      },
      'high-risk': {
        level: "High Risk for Compulsive Use",
        explanation: "Your need for constant audio stimulation appears compulsive and is likely impacting your hearing, your connection to the world, and your ability to process your own thoughts. Seeking support is recommended.",
        advice: ["Talk to a therapist about the anxiety or discomfort you feel in silence.", "Get your hearing checked by an audiologist to assess for any damage.", "Gradually decrease your usage time each day, rather than stopping all at once.", "Challenge yourself to engage in activities that require your full auditory attention, like talking with a friend in a cafe."],
        helplines: [{ name: "SAMHSA National Helpline", number: "1-800-662-HELP", url: "https://www.samhsa.gov/find-help/national-helpline" }, { name: "American Tinnitus Association", number: "1-800-634-8978", url: "https://www.ata.org/" }]
      }
    }
  }
];