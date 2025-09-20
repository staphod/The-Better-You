import React from 'react';
import { Link } from 'react-router-dom';
import { TargetIcon } from '@/components/icons/ModuleIcons';

const Buffetts525StrategyPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/strategies" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Tools & Strategies</Link>
      
      <div className="text-center mb-8">
        <TargetIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Warren Buffett's 5/25 Strategy</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          A ruthless prioritization method for achieving extreme focus and avoiding distraction.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The difference between successful people and really successful people is that really successful people say no to almost everything."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Warren Buffett</footer>
          </blockquote>
          <p>
            The 5/25 Strategy is a simple but profound exercise for identifying your true priorities. It forces you to confront the reality that you cannot do everything. The power of the strategy lies not in what you choose, but in what you consciously choose to eliminate. The goals you discard are not "second-tier" goals to be worked on later; they become your "Avoid-At-All-Cost" list, because they are the most seductive and dangerous distractions from your true priorities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Strategy in 3 Simple Steps</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
                <strong>Step 1: Write Down Your Top 25 Goals.</strong>
                Take a piece of paper and list the 25 most important things you want to accomplish in your career and life. These can be short-term or long-term. Don't hold back.
            </li>
            <li>
                <strong>Step 2: Circle Your Top 5 Goals.</strong>
                Carefully review your list. Take your time. After deep consideration, circle the five goals that are most important to you. These are your non-negotiable, highest priorities. This is now List A.
            </li>
            <li>
                <strong>Step 3: Eliminate the Other 20.</strong>
                Look at the 20 goals you did not circle. This is List B. Your first instinct might be to work on these when you have spare time. This is wrong. According to the strategy, this is now your <strong>Avoid-At-All-Cost List</strong>. You must actively avoid putting any time or energy into these goals until you have achieved your top 5.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why This Strategy is So Effective</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>It Combats the "Good is the Enemy of Great" Problem:</strong> The 20 goals on List B are not bad goals. They are often good, interesting, and tempting. That's what makes them so dangerous. They are interesting enough to distract you, but not important enough to produce the results you truly want.
            </li>
            <li>
                <strong>It Forces Radical Clarity:</strong> This exercise forces you to make hard choices and get brutally honest about what you value most. This clarity is the foundation of focused action.
            </li>
            <li>
                <strong>It Protects Your Most Valuable Resource:</strong> Your time and attention are finite. This strategy builds a powerful defense system around them, ensuring they are allocated to the activities with the highest possible return.
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/strategies" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Tools
          </Link>
      </div>
    </div>
  );
};

export default Buffetts525StrategyPage;