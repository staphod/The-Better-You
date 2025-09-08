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
    scoringThresholds: { moderate: 3, high: 5 },
    questions: [
      { id: 'q1', text: "How often do you have a drink containing alcohol?", options: [{ text: "Never", value: 0 }, { text: "Monthly or less", value: 1 }, { text: "2-4 times a month", value: 2 }, { text: "4+ times a week", value: 3 }] },
      { id: 'q2', text: "Have you ever felt you should cut down on your drinking?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q3', text: "Have people annoyed you by criticizing your drinking?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q4', text: "Have you ever felt bad or guilty about your drinking?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q5', text: "Have you ever had a drink first thing in the morning to steady your nerves (an 'eye-opener')?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q6', text: "As a result of your drinking, did you fail to do what was normally expected of you?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
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
    scoringThresholds: { moderate: 3, high: 5 },
    questions: [
      { id: 'q1', text: "Have you felt the need to bet more and more money to achieve the desired excitement?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q2', text: "Have you become restless or irritable when attempting to cut down or stop gambling?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q3', text: "Have you made repeated unsuccessful efforts to control, cut back, or stop gambling?", options: [{ text: "No", value:0 }, { text: "Yes", value: 1 }] },
      { id: 'q4', text: "After losing money gambling, have you often returned another day to get even ('chasing' one's losses)?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q5', text: "Have you lied to family members or others to conceal the extent of your involvement with gambling?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
      { id: 'q6', text: "Have you jeopardized or lost a significant relationship, job, or educational opportunity because of gambling?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
    ],
    resultTemplate: {
      'low-risk': {
        level: "Low Risk",
        explanation: "Your responses suggest you are not currently at risk for a gambling problem. Responsible gambling means treating it as entertainment, not a way to make money.",
        advice: [
          "Always set a money limit and stick to it.",
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
          "Consider taking a break from gambling for a set period.",
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

  // --- DIGITAL/EMERGING ADDICTIONS ---
  {
    id: 'social-media',
    title: 'Social Media Use Self-Test',
    category: 'Digital/Emerging Addictions',
    description: "This test explores your relationship with social media. It can help identify compulsive usage patterns that negatively impact your well-being, focus, and real-world connections.",
    riskFactors: [
        "Fear of missing out (FOMO)",
        "Low self-esteem or seeking validation from others",
        "Loneliness or lack of offline social support",
        "High levels of boredom or unstructured time",
        "Dopamine-driven feedback loops from likes, shares, and notifications",
    ],
    scoringThresholds: { moderate: 4, high: 7 },
    questions: [
        { id: 'q1', text: "Do you spend a lot of time thinking about social media or planning to use social media?", options: [{ text: "Rarely", value: 0 }, { text: "Sometimes", value: 1 }, { text: "Often", value: 2 }] },
        { id: 'q2', text: "Do you feel urges to use social media more and more?", options: [{ text: "Rarely", value: 0 }, { text: "Sometimes", value: 1 }, { text: "Often", value: 2 }] },
        { id: 'q3', text: "Do you use social media to forget about personal problems?", options: [{ text: "Rarely", value: 0 }, { text: "Sometimes", value: 1 }, { text: "Often", value: 2 }] },
        { id: 'q4', text: "Have you tried to reduce your use of social media without success?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
        { id: 'q5', text: "Do you become restless or troubled if you are unable to use social media?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
        { id: 'q6', text: "Do you use social media so much that it has had a negative impact on your job, relationships, or studies?", options: [{ text: "No", value: 0 }, { text: "Yes", value: 1 }] },
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
];