import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfResponsibilityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Responsibility</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Apologize when you are wrong. It shows strength and builds trust, not weakness.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A genuine apology is one of the most direct and powerful forms of communication. It is a sign of strength and character."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Jocko Willink</footer>
          </blockquote>
          <p>
            The Law of Responsibility states that taking full ownership of your mistakes is a hallmark of maturity and a critical component of healthy relationships. A sincere apology is not an admission of weakness; it is a demonstration of strength, integrity, and respect for the other person. It communicates that you value the relationship more than your ego. By taking responsibility, you stop the cycle of blame and open the door to resolution and trust.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Anatomy of a Good Apology</h2>
          <p>A true apology contains several key elements:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>It is Specific:</strong> It clearly states what you are sorry for. Vague apologies like "I'm sorry if you were offended" are not real apologies; they shift the blame. A real apology says, "I am sorry for being late."
            </li>
            <li>
                <strong>It Expresses Remorse:</strong> It acknowledges the hurt or inconvenience you caused. "I know that my being late was disrespectful of your time, and I feel bad about that."
            </li>
            <li>
                <strong>It Takes Full Responsibility:</strong> It does not include excuses or blame. It avoids phrases like "but you..." or "if only..."
            </li>
            <li>
                <strong>It Includes a Commitment to Change:</strong> It outlines what you will do differently in the future. "From now on, I will set an alarm 15 minutes earlier to make sure I am on time."
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Responsibility</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Swallow Your Pride:</strong> Recognize that the temporary discomfort of admitting you were wrong is far less damaging than the long-term erosion of trust caused by defensiveness.
            </li>
            <li>
              <strong>Apologize Quickly:</strong> Once you realize you've made a mistake, apologize as soon as possible. Letting resentment fester makes the situation worse.
            </li>
            <li>
              <strong>Focus on the Impact, Not the Intent:</strong> Your intention may have been good, but if the impact of your actions was negative, that is what you need to apologize for.
            </li>
             <li>
              <strong>Follow Through on Your Commitment:</strong> The most important part of an apology is your changed behavior. If you repeatedly apologize for the same mistake, your words become meaningless.
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

export default LawOfResponsibilityPage;
