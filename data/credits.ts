import type { CreditCategory } from '@/types';

export const credits: CreditCategory[] = [
  {
    title: "Development & Design",
    items: [
      {
        name: "Staphod Cylas",
        description: "Solo team developer for the core concept, development, and design of this application."
      }
    ]
  },
  {
    title: "Key Technologies",
    items: [
      {
        name: "React",
        url: "https://reactjs.org/",
        description: "A JavaScript library for building user interfaces."
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        description: "A utility-first CSS framework for rapid UI development."
      },
      {
        name: "Chart.js",
        url: "https://www.chartjs.org/",
        description: "Simple yet flexible JavaScript charting for designers & developers."
      },
    ]
  },
  {
    title: "Content & Inspiration",
    items: [
      {
        name: "Google Gemini AI & OpenAI ChatGPT",
        description: "For extensive research and writing."
      },
      {
        name: "DSM-5 & ICD-11",
        description: "The diagnostic manuals that provided the framework for the addiction awareness modules."
      },
      {
        name: "James Clear's 'Atomic Habits'",
        url: "https://jamesclear.com/atomic-habits",
        description: "Inspiration for the habit tracker's framework (Cue, Craving, Response, Reward)."
      },
      {
        name: "Various Online Communities",
        description: "For providing valuable insights into self-help, mental models, and addiction recovery, which informed the content throughout the app."
      }
    ]
  },
];
