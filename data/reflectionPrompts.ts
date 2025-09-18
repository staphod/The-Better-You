export interface ReflectionPromptCategory {
  title: string;
  prompts: string[];
}

export const reflectionPrompts: ReflectionPromptCategory[] = [
  {
    title: "Daily Review & Gratitude",
    prompts: [
      "What is one thing that went well today and why?",
      "What was a challenge I faced, and how did I handle it?",
      "What am I grateful for in this moment?",
      "What is one small step I can take tomorrow to move closer to my goals?",
      "How did I show kindness to myself or others today?",
      "What made me smile today?",
      "Who am I thankful for today, and why?",
      "What did I learn today?",
      "What was the most peaceful moment of my day?",
    ],
  },
  {
    title: "Self-Discovery",
    prompts: [
      "When do I feel most like myself?",
      "What is a limiting belief I'm ready to let go of?",
      "If I couldn't fail, what would I do?",
      "What does my ideal life look like five years from now?",
      "What are my top 3 core values?",
      "What activities make me lose track of time?",
      "What am I most proud of in my life so far?",
      "What is a fear that is holding me back?",
      "How can I be more compassionate with myself?",
    ],
  },
  {
    title: "Productivity & Goals",
    prompts: [
      "What is the single most important thing I need to accomplish this week?",
      "What is one distraction I can eliminate to be more focused?",
      "What is a skill I want to develop, and what's the first step?",
      "How can I apply the 80/20 rule to my work right now?",
      "What does 'success' truly mean to me?",
      "Am I busy, or am I productive?",
      "What is a 'good enough' version of the task I'm avoiding?",
    ],
  },
  {
    title: "Relationships",
    prompts: [
      "How can I be a better friend/partner/family member this week?",
      "Who in my life do I need to reconnect with?",
      "What is a boundary I need to set or reinforce?",
      "How can I better communicate my needs?",
      "Who has supported me recently that I need to thank?",
      "Am I holding onto any resentments that I could let go of?",
    ],
  },
  {
    title: "Mindfulness & Well-being",
    prompts: [
      "What does my body need today?",
      "What is one thing I can do to reduce my stress levels?",
      "Where in my life can I practice more patience?",
      "What am I feeling right now, and where do I feel it in my body?",
      "What does a truly restful day look like for me?",
      "How can I bring more play and joy into my life?",
    ],
  },
];

export const allPrompts = reflectionPrompts.flatMap(category => category.prompts);
