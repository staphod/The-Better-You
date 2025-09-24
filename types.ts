import React from 'react';

export interface CollectionItem {
  id: string;
  title: string;
  content: string; // HTML content
  dateSaved: string; // ISO string
}

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
  category?: string;
  reverse?: boolean;
}

export interface FullTest {
  id: string;
  title: string;
  questions: Question[];
  result_template: {
    [key: string]: {
      explanation: string;
      strengths?: string[];
      weaknesses?: string[];
      famous?: string[];
      best_work?: string[];
      strategies?: string[];
      advice?: string[];
      nextSteps?: {
          text: string;
          link: string; // Path within the app
      }[];
      level?: string;
      basic_fear?: string;
      basic_desire?: string;
    };
  };
  knowledgeBase: {
    summary: string;
    resultDetails: {
        key: string;
        title: string;
    }[];
  };
  scoringThresholds?: { [key: string]: { low: number; high: number } } | { [level: string]: number };
}

export interface TestHistoryItem {
  id: string; // Unique ID for the history entry
  testId: string;
  testTitle: string;
  dateCompleted: string; // ISO string
  result: any; // The full result object
  summary: string; // A concise summary for display
}


// --- Puzzle Types ---
export interface Puzzle {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface SequencingItem {
  id: string;
  content: string;
}

export interface SequencingPuzzle {
  id: number;
  category: string;
  instruction: string;
  items: string[]; // Items in correct order
}

// --- Dot Connection Puzzle Types ---
export interface DotPuzzle {
  id: number;
  size: number;
  pairs: {
    color: string;
    dots: { x: number; y: number }[];
  }[];
  solution: Record<string, { x: number; y: number }[]>;
}

// --- One Line Drawing Puzzle ---
export interface OneLinePuzzle {
  id: number;
  nodes: { x: number; y: number }[]; // Coordinates on a conceptual grid (e.g., 0-4)
  edges: [number, number][]; // Pairs of node indices
  startNode?: number; // Optional required start node index
}

// --- Cognitive Clash Puzzle Types ---
export type ChallengeType =
  | 'STROOP'          // Tap the word "Red" (text is 'Red', color is blue)
  | 'COMMAND_DO'      // Tap the GREEN button, Tap the UP arrow
  | 'COMMAND_NOT'     // Do NOT tap the RED button, Do NOT tap the DOWN arrow
  | 'COMMAND_ANY'     // Tap ANY button
  | 'COMMAND_NOTHING' // Do NOTHING
  | 'ASSOCIATION';    // "Lion": ["Animal", "Bird"]

export interface WordAssociation {
    prompt: string;
    options: [string, string];
    answer: string;
}

export interface CognitiveClashChoice {
  id: string;
  text?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isEmoji?: boolean;
  // Styling will be handled by the generator
  color?: string; // hex color for text or icon
  bgColor?: string; // tailwind class for bg
}

export interface CognitiveClashChallenge {
  type: ChallengeType;
  instruction: string;
  choices: CognitiveClashChoice[];
  correctChoiceId: string | null; // The `id` of the correct choice. `null` for NOTHING. For NOT, it's the ID to avoid.
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

// --- Habit Tracker Types ---
export const HABIT_CATEGORIES = [
  'Health',
  'Learning',
  'Mindfulness',
  'Fitness',
  'Productivity',
  'Social',
  'Finance',
  'Other',
] as const;

export type HabitCategory = (typeof HABIT_CATEGORIES)[number];

export type MeasurementType = 'daily' | 'reps' | 'duration' | 'count';

export type HabitMeasurement =
  | { type: 'daily' }
  | { type: 'reps'; goal: number }
  | { type: 'duration'; goal: number; unit: 'minutes' | 'hours' }
  | { type: 'count'; goal: number; unit: string };

export interface HabitLog {
  date: string; // YYYY-MM-DD
  value: number;
}

export interface Habit {
  id: string;
  title: string;
  category: HabitCategory;
  isPositive: boolean;
  cue: string;
  craving: string;
  response: string;
  reward: string;
  reminderTime: string | null;
  measurement: HabitMeasurement;
  history: HabitLog[];
}

// --- Credits Page Types ---
export interface CreditItem {
  name: string;
  description: string;
  url?: string;
}

export interface CreditCategory {
  title: string;
  items: CreditItem[];
}

// --- Mood Tracker Types ---
export type Mood = 'Happy' | 'Calm' | 'Neutral' | 'Anxious' | 'Sad';

export interface MoodLog {
  id: string;
  date: string; // ISO string
  mood: Mood;
  note: string;
}

// --- Journaling Types ---
export interface ReflectionPromptCategory {
  title: string;
  description: string;
  prompts: string[];
}
