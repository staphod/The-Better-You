import React from 'react';

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
// FIX: Add DotPuzzle interface for dot connection game
export interface DotPuzzle {
  id: number;
  size: number;
  pairs: {
    color: string;
    dots: { x: number; y: number }[];
  }[];
  solution: Record<string, { x: number; y: number }[]>;
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

// --- Diary Types ---
export interface DiaryEntry {
  id: string;
  title: string;
  content: string; // HTML content from the editor
  modified: string; // ISO string
}

// --- Mood Tracker Types ---
export type Mood = 'Happy' | 'Calm' | 'Neutral' | 'Anxious' | 'Sad';

export interface MoodLog {
  id: string;
  mood: Mood;
  note: string;
  date: string; // ISO string
}