export interface JournalPromptCategory {
  title: string;
  description: string;
  prompts: string[];
}

export const journalPrompts: JournalPromptCategory[] = [
  {
    title: "Gratitude",
    description: "To cultivate positivity and appreciate the good in your life.",
    prompts: [
      "What are three small things that brought me joy today?",
      "Who is someone I am grateful for and why?",
      "What is a skill or quality I have that I am thankful for?",
      "What part of my day am I most grateful for?",
      "What is something beautiful I saw today?",
    ],
  },
  {
    title: "Self-Reflection",
    description: "To understand yourself, your emotions, and your behaviors better.",
    prompts: [
      "When did I feel most alive and engaged today?",
      "What was my biggest challenge today, and how did I handle it?",
      "What is one thing I would like to do differently tomorrow?",
      "What is a limiting belief I hold, and where did it come from?",
      "If I could give my younger self one piece of advice, what would it be?",
      "What am I currently avoiding?",
      "How did I show up for others today?",
    ],
  },
  {
    title: "Problem-Solving",
    description: "To find clarity and break down complex challenges.",
    prompts: [
      "What is the problem I'm facing, stated in a single sentence?",
      "What are 5 potential solutions, no matter how wild?",
      "What is the smallest possible step I can take right now to move forward?",
      "If I had unlimited resources, how would I solve this?",
      "What is the worst-case scenario, and how would I handle it?",
      "Who could I ask for help or advice on this issue?",
    ],
  },
  {
    title: "Future & Goals",
    description: "To envision your ideal future and create a plan to get there.",
    prompts: [
        "What does my ideal day look like from morning to night?",
        "What is one skill I want to learn in the next six months?",
        "If I couldn't fail, what is one big thing I would pursue?",
        "What are three things I can do this week to move closer to my goals?",
        "Who do I want to be one year from now?",
    ]
  }
];
