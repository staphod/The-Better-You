import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfPunctualityPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Punctuality</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be on time. It is a powerful statement of your respect, reliability, and self-discipline.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Punctuality is the thief of time." (Intended ironically)</p>
            <p className="mt-1">"Punctuality is the politeness of kings."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Oscar Wilde / King Louis XVIII</footer>
          </blockquote>
          <p>
            The Law of Punctuality states that being consistently on time is a fundamental habit of successful and respected individuals. Punctuality is not just about timekeeping; it is a form of communication. It signals to others that you value their time, that you are organized and in control of your life, and that you are a reliable person who keeps their commitments. Chronic lateness, conversely, signals disrespect, disorganization, and a lack of integrity.
          </p>
        