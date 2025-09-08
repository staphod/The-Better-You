

export interface TestListing {
  id: string;
  title: string;
  summary: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  requires_online: boolean;
}

export interface Question {
  id: string;
  text: string;
  type: 'likert';
  options: { text: string; value: number }[];
}

export interface FullTest {
  id: string;
  title: string;
  questions: Question[];
  result_template: {
    [key: string]: {
      explanation: string;
      best_work: string[];
      strengths: string[];
      weaknesses: string[];
      famous: string[];
    };
  };
}

export interface Puzzle {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface Habit {
  id: string;
  title: string;
  isPositive: boolean;
  cue: string;
  craving: string;
  response: string;
  reward: string;
  streak: number;
  lastCompleted: string | null; // ISO date string YYYY-MM-DD
  reminderTime: string | null; // e.g., "14:30"
}