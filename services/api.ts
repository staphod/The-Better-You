import type { FullTest, Question, Addiction } from '@/types';
import { addictions } from '@/data/addictions';

const mockTestDb: FullTest[] = [
  {
    id: 'mbti-architect',
    title: "MBTI Personality: The Architect",
    questions: [
      { id: 'q1', text: "You enjoy spending time alone.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q2', text: "You prefer to plan things out rather than be spontaneous.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q3', text: "You are more interested in abstract ideas than practical matters.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q4', text: "Your decisions are driven more by logic than emotion.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q5', text: "You find it easy to introduce yourself to other people.", type: 'likert', options: [{text: "Agree", value: -1}, {text: "Neutral", value: 0}, {text: "Disagree", value: 1}] },
    ],
    result_template: {
      "high-score": {
        explanation: "As an Architect, you are a strategic thinker with a plan for everything. You are imaginative, decisive, and ambitious, always driven by a thirst for knowledge.",
        best_work: ["Software Developer", "Scientist", "Engineer", "Strategic Planner"],
        strengths: ["Rationality", "Independence", "Quick-thinking", "Determination"],
        weaknesses: ["Arrogance", "Overly critical", "Clueless in romance"],
        famous: ["Elon Musk", "Friedrich Nietzsche", "Michelle Obama"]
      },
      "low-score": {
        explanation: "Your results suggest a more spontaneous and people-oriented personality. You likely thrive in social situations and prefer to go with the flow rather than stick to a rigid plan.",
        best_work: ["Sales Representative", "Event Planner", "HR Manager"],
        strengths: ["Adaptability", "Empathy", "Sociability"],
        weaknesses: ["Can be disorganized", "May avoid long-term planning"],
        famous: ["Bill Clinton", "Marilyn Monroe"]
      }
    }
  },
   {
    id: 'big-five-ocean',
    title: "Big Five Personality Test (OCEAN)",
    questions: [
      { id: 'o1', text: "I am always open to new experiences and ideas.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'c1', text: "I am a very organized and disciplined person.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'e1', text: "I am outgoing and sociable.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'a1', text: "I am compassionate and cooperative.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'n1', text: "I tend to be anxious and easily upset.", type: 'likert', options: [{text: "Agree", value: -1}, {text: "Neutral", value: 0}, {text: "Disagree", value: 1}] },
    ],
    result_template: {
        "high-score": {
            explanation: "You score high in the Big Five traits, indicating a personality that is open, conscientious, extraverted, agreeable, and emotionally stable. This combination suggests a well-rounded individual who is both creative and reliable.",
            best_work: ["Leader", "Project Manager", "Therapist"],
            strengths: ["Adaptable", "Organized", "Sociable", "Empathetic"],
            weaknesses: ["Can be overextended", "May struggle to say no"],
            famous: ["Oprah Winfrey", "Barack Obama"]
        },
        "low-score": {
            explanation: "Your results suggest a more reserved and cautious personality. You might prefer routine, be more introverted, and prioritize your own needs. This can make you a very focused and independent individual.",
            best_work: ["Analyst", "Researcher", "Writer"],
            strengths: ["Focused", "Independent", "Realistic"],
            weaknesses: ["Resistant to change", "Can seem distant"],
            famous: ["Isaac Newton", "Clint Eastwood"]
        }
    }
  }
];

export const fetchTestById = (id: string): Promise<FullTest> => {
  console.log(`Fetching test with id: ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const test = mockTestDb.find(t => t.id === id);
      if (test) {
        resolve(test);
      } else {
        reject(new Error("Test not found"));
      }
    }, 1000); // Simulate network delay
  });
};

export const fetchAddictionById = (id: string): Promise<Addiction> => {
  console.log(`Fetching addiction with id: ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addiction = addictions.find(a => a.id === id);
      if (addiction) {
        resolve(addiction);
      } else {
        reject(new Error("Addiction assessment not found"));
      }
    }, 1000); // Simulate network delay
  });
};