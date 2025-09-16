import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfTruthPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Truth</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Always tell the truth. It simplifies your life and is the foundation of trust and self-respect.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If you tell the truth, you don't have to remember anything."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Mark Twain</footer>
          </blockquote>
          <p>
            The Law of Truth states that living a life of honesty and integrity is the most efficient and effective path to long-term success and peace of mind. Every lie, no matter how small, creates a mental burden—you have to remember the lie, who you told it to, and maintain the false reality. A commitment to truth, even when it is difficult, frees you from this cognitive load and builds a reputation for rock-solid reliability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Relationships:</strong> Trust is the cornerstone of any healthy relationship. A single lie can inflict damage that takes years to repair, if it can be repaired at all. Consistent honesty builds an unbreakable bond.
            </li>
            <li>
                <strong>Business:</strong> A company that is transparent and truthful with its customers, employees, and investors, especially during difficult times, builds a level of trust that becomes a powerful competitive advantage.
            </li>
            <li>
                <strong>Self-Respect:</strong> When you are honest with others, you are also honest with yourself. This alignment between your actions and your values is the foundation of genuine self-esteem.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live in Truth</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Commit to Radical Honesty:</strong> Make a personal commitment to tell the truth in all situations. This doesn't mean being brutally tactless, but it does mean avoiding deception, exaggeration, and "white lies."
            </li>
            <li>
              <strong>Be Truthful with Yourself:</strong> The most important person to be honest with is yourself. Be honest about your strengths, your weaknesses, your fears, and your desires. Self-deception is the greatest barrier to personal growth.
            </li>
            <li>
              <strong>Face Difficult Truths Early:</strong> If there is bad news to deliver, deliver it promptly and truthfully. Delaying or sugarcoating the truth almost always makes the situation worse.
            </li>
             <li>
              <strong>Practice Tact and Kindness:</strong> Honesty does not require cruelty. You can learn to speak the truth with kindness and compassion, focusing on the issue at hand rather than attacking the person.
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

export default LawOfTruthPage;
