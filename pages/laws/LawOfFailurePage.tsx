import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const LawOfFailurePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Failure</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Learn from mistakes. Failure is not the opposite of success, it is an essential part of it.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"I have not failed. I've just found 10,000 ways that won't work."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Thomas A. Edison</footer>
          </blockquote>
          <p>
            The Law of Failure teaches that setbacks, mistakes, and failures are not endpoints but data points. Every failure contains a valuable lesson on how to improve. Those who achieve great success are not those who never fail, but those who fail, learn, and adapt the fastest. An intelligent approach to failure is the quickest path to success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The Scientific Method:</strong> Science advances through a process of hypothesis, experimentation, and failure. A failed experiment is not a worthless result; it disproves a hypothesis, which is a critical step toward finding the correct one.
            </li>
            <li>
                <strong>Learning to Walk:</strong> A toddler does not learn to walk on their first try. They fall hundreds of times. Each fall is a data point that teaches their brain about balance and coordination, leading to eventual mastery.
            </li>
            <li>
                <strong>Venture Capital:</strong> Successful venture capitalists know that the vast majority of their investments will fail. They rely on one or two massive successes to cover all the losses and generate a return. They embrace a high failure rate as part of their model.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Use Failure to Your Advantage</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Reframe Failure as Feedback:</strong> Stop seeing failure as a reflection of your self-worth. It is simply a result. It is neutral information telling you that your current approach is not working.
            </li>
            <li>
              <strong>Conduct a Post-Mortem:</strong> After a setback, ask constructive questions: "What exactly went wrong? What was my role in it? What can I do differently next time? What did I learn from this?"
            </li>
            <li>
              <strong>Take Calculated Risks:</strong> Don't be reckless, but understand that avoiding all risk of failure also means avoiding all possibility of great success. The goal is to take small, intelligent risks where the potential upside is large and the downside is manageable.
            </li>
             <li>
              <strong>Separate Your Ego from the Outcome:</strong> Don't tie your identity to being "right." Tie your identity to being a learner. This makes it much easier to admit when you're wrong and pivot to a better strategy.
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

export default LawOfFailurePage;