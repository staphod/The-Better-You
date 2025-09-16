import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfFragilityOfTrustPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Fragility of Trust</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Trust is built slowly, lost quickly. It is the most valuable and fragile asset in any relationship.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Warren Buffett</footer>
          </blockquote>
          <p>
            The Law of the Fragility of Trust states that trust is built in drops and lost in buckets. It is the cumulative result of countless consistent, honorable actions (see Law of Trust, Law of Integrity). However, a single act of dishonesty or betrayal can shatter years of carefully built trust in an instant. This law underscores the immense care required to maintain trust and the devastating consequences of breaking it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Relationships:</strong> Years of a faithful partnership can be destroyed by a single act of infidelity. The trust, once broken, may never be fully restored to its original strength.
            </li>
            <li>
                <strong>Business:</strong> A brand that has built a reputation for quality over decades can see that reputation crumble after a single major product recall or ethical scandal.
            </li>
            <li>
                <strong>Leadership:</strong> A leader who has built trust with their team can lose it instantly by breaking a promise or being caught in a lie. Rebuilding that trust is a long and arduous process.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Protect and Nurture Trust</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Be Consistent:</strong> Trust is the result of consistent, predictable, positive behavior over time. Make reliability and integrity your default settings.
            </li>
            <li>
              <strong>Guard Your Word:</strong> Treat your promises as sacred. Do not make commitments lightly, and do everything in your power to follow through on the ones you make.
            </li>
            <li>
              <strong>Be Transparent:</strong> When in doubt, err on the side of transparency. Hiding information, even with good intentions, can be perceived as a breach of trust if it comes to light later.
            </li>
             <li>
              <strong>When Trust is Broken, Own It Immediately:</strong> If you do make a mistake that breaks trust, the only path to potential recovery is immediate, total ownership and a sincere apology, followed by a long period of consistent, trustworthy behavior.
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

export default LawOfFragilityOfTrustPage;
