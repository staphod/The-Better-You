

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
  knowledgeBase: {
    summary: string;
    resultDetails: {
        key: string;
        title: string;
    }[];
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
  value: number; // The amount completed (e.g., 1 for daily, 20 for reps, 30 for minutes)
}

// --- New Flexible Habit Measurement Types ---

export type MeasurementType = 'daily' | 'reps' | 'duration' | 'count';

export interface MeasurementDaily {
  type: 'daily';
}
export interface MeasurementReps {
  type: 'reps';
  goal: number;
}
export interface MeasurementDuration {
  type: 'duration';
  goal: number;
  unit: 'minutes' | 'hours';
}
export interface MeasurementCount {
  type: 'count';
  goal: number;
  unit: string; // e.g., 'pages', 'glasses'
}

export type HabitMeasurement = MeasurementDaily | MeasurementReps | MeasurementDuration | MeasurementCount;

// --- Habit Categories ---
export const HABIT_CATEGORIES = ['Health', 'Learning', 'Mindfulness', 'Fitness', 'Productivity', 'Social', 'Finance', 'Other'] as const;
export type HabitCategory = typeof HABIT_CATEGORIES[number];


// The main Habit structure, designed for flexibility.
export interface Habit {
  id: string;
  title: string;
  category: HabitCategory;
  isPositive: boolean; // True for building a habit, false for breaking one.
  cue: string;
  craving: string;
  response: string;
  reward: string;
  reminderTime: string | null;
  measurement: HabitMeasurement;
  // A record of all completions and misses.
  history: HabitLog[];
}

// --- Addiction Module Types ---
export type AddictionCategory = 'Substance Addictions' | 'Behavioral Addictions' | 'Digital/Emerging Addictions';

export interface AddictionQuestion {
  id: string;
  text: string;
  options: { text: string; value: number }[];
}

export interface AddictionResultTemplate {
    [key: string]: { // e.g., 'low-risk', 'moderate-risk', 'high-risk'
      level: string; // "Low Risk", "Moderate Risk", "High Risk"
      explanation: string;
      advice: string[];
      helplines: { name: string; number: string; url: string }[];
    };
}

export interface Addiction {
  id: string;
  title: string;
  category: AddictionCategory;
  description: string;
  riskFactors: string[];
  questions: AddictionQuestion[];
  resultTemplate: AddictionResultTemplate;
  scoringThresholds: { moderate: number; high: number }; // moderate score >= moderate, high score >= high
}

// --- Credits Page Types ---
export interface CreditCategory {
  title: string;
  items: {
    name: string;
    url?: string;
    description: string;
  }[];
}