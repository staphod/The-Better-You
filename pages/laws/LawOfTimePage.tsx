import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfTimePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Time</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Time is life—use it wisely. It is the one resource you can never get back.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Dost thou love life? Then do not squander time, for that's the stuff life is made of."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Benjamin Franklin</footer>
          </blockquote>
          <p>
            The Law of Time posits that your time is your most precious and finite resource. Unlike money, it cannot be saved, borrowed, or earned back. Every person gets the same 24 hours in a day. How you choose to invest those hours determines the quality and trajectory of your entire life. Mastering your life requires mastering your time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Opportunity Cost:</strong> Every hour you spend on a low-value activity (like mindlessly scrolling social media) is an hour you can't spend on a high-value activity (like learning a skill, exercising, or building a relationship).
            </li>
            <li>
                <strong>Compound Effect:</strong> Small, consistent investments of time in the right areas yield massive returns later. An hour a day dedicated to your most important goal equals 365 hours of focused effort in a year, a formidable advantage.
            </li>
            <li>
                <strong>Respect and Professionalism:</strong> How you manage your time signals your level of respect for yourself and others. Being punctual and prepared shows that you value their time as much as your own.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Become a Master of Your Time</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Conduct a Time Audit:</strong> For one week, track exactly how you spend your time. You will likely be shocked at where your hours actually go. Awareness is the first step to change.
            </li>
            <li>
              <strong>Plan Your Time in Advance:</strong> Don't start your day without a plan. Decide the night before what your most important tasks are and block out time to do them (see Law of Daily Planning).
            </li>
            <li>
              <strong>Set Clear Priorities:</strong> Use frameworks like the 80/20 Rule or the Eisenhower Matrix to differentiate between what is urgent and what is truly important. Invest your best time in your most important tasks (see Law of Priorities).
            </li>
             <li>
              <strong>Protect Your Focus:</strong> In the modern world, managing your time is about managing your distractions. Create blocks of uninterrupted time for deep work.
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/laws" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Laws & Principles
          </Link>
      </div>
    </div>
  );
};

export default LawOfTimePage;
