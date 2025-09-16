import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfCompoundingDecisionsPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Compounding Decisions</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Small decisions add up. Your life today is the sum of all the choices you have made.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"It's not the big things that add up in the end; it's the hundreds, thousands, or millions of little things that separate the ordinary from the extraordinary."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Darren Hardy, "The Compound Effect"</footer>
          </blockquote>
          <p>
            The Law of Compounding Decisions, also known as The Compound Effect, states that the small, seemingly insignificant choices you make every day accumulate over time to produce massive results. A single good or bad decision is unlikely to change your life. But a thousand of those small decisions, repeated consistently, will absolutely determine your destiny. This law is the force behind the Law of Accumulation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Health:</strong> The choice to take the stairs instead of the elevator is insignificant on its own. But compounded over ten years, that small decision can result in a significant difference in cardiovascular health and weight.
            </li>
            <li>
                <strong>Wealth:</strong> The decision to save an extra $5 a day seems small. But compounded with interest over 40 years, that decision can be worth hundreds of thousands of dollars.
            </li>
            <li>
                <strong>Relationships:</strong> The small decision to send a thoughtful text, give a compliment, or put your phone away during dinner, when compounded daily, builds a deeply trusting and loving relationship.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Make Compounding Work for You</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Focus on "1% Better":</strong> Don't try to make huge, drastic changes. Focus on making a tiny, 1% improvement in your key habits each day. The compounding effect of these small gains over a year is staggering.
            </li>
            <li>
              <strong>Be Patient:</strong> The biggest results from compounding come at the end. The process is slow and boring at the beginning. You must have the patience to stick with your small, good decisions long enough to see them bear fruit.
            </li>
            <li>
              <strong>Be Aware of Negative Compounding:</strong> This law works in both directions. A small, seemingly harmless bad habit—like one sugary drink a day—can compound into significant health problems over time. Be vigilant about eliminating these small negative choices.
            </li>
             <li>
              <strong>Track Your Progress:</strong> Tracking your small, daily decisions makes the invisible visible. It helps you stay motivated during the long, flat part of the compounding curve before the results become obvious.
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

export default LawOfCompoundingDecisionsPage;
