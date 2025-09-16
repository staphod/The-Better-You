import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfFairnessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Fairness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be fair always. Consistent and impartial judgment earns lasting respect and trust.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Fairness is what justice really is."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Potter Stewart</footer>
          </blockquote>
          <p>
            The Law of Fairness states that treating people equitably and without favoritism is essential for building trust and maintaining healthy, functional relationships and systems. People have an innate sense of justice and will quickly lose respect for a leader, parent, or institution they perceive as unfair. Fairness does not necessarily mean treating everyone exactly the same, but it does mean applying the same rules and standards consistently to all.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>In the Workplace:</strong> A manager who enforces company policy for some employees but not for their favorites will destroy team morale. A fair manager applies standards consistently, ensuring that rewards and consequences are based on performance, not personality.
            </li>
            <li>
                <strong>In the Family:</strong> Parents who consistently show favoritism to one child can create lasting resentment and sibling rivalry. Fair parents strive to meet each child's unique needs while maintaining consistent rules and expectations for behavior.
            </li>
            <li>
                <strong>In Society:</strong> A just legal system is one where the law is applied equally to all citizens, regardless of their wealth or status. The perception of unfairness in a society's institutions can lead to civil unrest.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Fairness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Establish Clear Standards:</strong> Make sure the rules, expectations, and criteria for success are clearly communicated and understood by everyone. Ambiguity is a breeding ground for perceived unfairness.
            </li>
            <li>
              <strong>Be Consistent:</strong> Apply your standards consistently over time and across all people. Avoid making exceptions based on your mood or your personal feelings about an individual.
            </li>
            <li>
              <strong>Separate the Person from the Behavior:</strong> When addressing a problem, focus on the specific action or behavior, not on the person's character. This allows for objective and fair correction.
            </li>
             <li>
              <strong>Listen to All Sides:</strong> Before making a judgment or decision involving a conflict, make a genuine effort to hear and understand the perspectives of all parties involved.
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

export default LawOfFairnessPage;
