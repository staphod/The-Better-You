import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfPromiseKeepingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Promise Keeping</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Keep your promises. Your reliability is a direct measure of your character and integrity.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The first step is to be honest, and then to be noble."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Winston Churchill</footer>
          </blockquote>
          <p>
            The Law of Promise Keeping states that your word is your bond. A promise is a personal guarantee, and the habit of consistently following through on your commitments is the fastest way to build a reputation for reliability and trustworthiness. Every promise you keep strengthens your relationships and your self-respect. Every promise you break erodes them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business:</strong> A company that consistently delivers on its promises to customers (e.g., product quality, delivery times, customer service) builds a loyal customer base and a powerful brand reputation.
            </li>
            <li>
                <strong>Leadership:</strong> A leader who follows through on their commitments to their team—whether it's a promise of a promotion or simply to look into an issue—is seen as credible and trustworthy.
            </li>
            <li>
                <strong>Personal Life:</strong> Keeping small promises to friends and family, like calling when you say you will or showing up on time, builds a foundation of trust that is essential for strong, healthy relationships.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Become a Promise Keeper</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Be Careful What You Promise:</strong> Under-promise and over-deliver. Before making a commitment, be certain you can and will follow through. It's better to say "no" upfront than to say "yes" and fail to deliver.
            </li>
            <li>
              <strong>Write It Down:</strong> Don't rely on your memory. If you make a promise, write it down in your calendar or task list with a deadline.
            </li>
            <li>
              <strong>If You Must Break a Promise, Communicate Early:</strong> Life happens, and sometimes circumstances prevent you from keeping a commitment. As soon as you know you cannot deliver, communicate this to the other person, apologize sincerely, and, if possible, offer a new plan.
            </li>
             <li>
              <strong>Keep Promises to Yourself:</strong> The most important promises are the ones you make to yourself. When you set a goal to wake up early or to exercise, you are making a promise. Keeping these promises builds self-discipline and self-respect.
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

export default LawOfPromiseKeepingPage;
