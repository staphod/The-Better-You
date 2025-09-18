import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BookOpenIcon } from '@/components/icons/ModuleIcons';

const MasteryJournalPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      <Link to="/" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Home</Link>
      <div className="flex items-center gap-3">
        <BookOpenIcon className="h-10 w-10 text-brand-primary"/>
        <h1 className="text-3xl font-bold text-brand-text">Staphod's Diary - Mastery Journal</h1>
      </div>
      <p className="text-lg text-brand-text-muted">
        An all-in-one, offline-first private journal. Includes a diary, habit tracker, mood log, and daily reflections to accelerate your journey to self-mastery.
      </p>
      <div className="w-full h-[calc(100vh-300px)] min-h-[500px] bg-slate-100 flex items-center justify-center rounded-md overflow-hidden border border-brand-border shadow-lg">
        <iframe
          src="https://staphod-s-diary.vercel.app/"
          title="Staphod's Diary - Mastery Journal"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
      </div>
    </div>
  );
};

export default MasteryJournalPage;
