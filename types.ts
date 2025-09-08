

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

// A log entry for a specific day in a habit's history.
export interface HabitLog {
  date: string; // 'YYYY-MM-DD'
  status: 'completed' | 'missed';
}

// The main Habit structure, designed for flexibility.
export interface Habit {
  id: string;
  title: string;
  isPositive: boolean; // True for building a habit, false for breaking one.
  cue: string;
  craving: string;
  response: string;
  reward: string;
  reminderTime: string | null;
  // Defines how the habit is measured. Currently supports daily completion.
  measurement: {
    type: 'daily'; // Future types: 'reps', 'duration'
  };
  // A record of all completions and misses.
  history: HabitLog[];
}
