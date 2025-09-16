import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const LawOfHopePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LightbulbIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Hope</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Hope makes life brighter. It is the belief that things can and will get better, and it is the fuel for resilience.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Emily Dickinson</footer>
          </blockquote>
          <p>
            The Law of Hope states that a positive expectation for the future is one of the most powerful psychological forces for human well-being and achievement. Hope is not passive wishing; it is an active belief in the possibility of a better future, combined with the conviction that you have a role to play in creating it. It is the antidote to despair and the essential fuel for persistence in the face of adversity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Overcoming Adversity:</strong> In stories of survival, from prisoners of war to individuals battling serious illness, hope is consistently cited as the critical factor that kept them going when all seemed lost.
            </li>
            <li>
                <strong>Innovation and Progress:</strong> Every entrepreneur, scientist, and social reformer is fundamentally an agent of hope. They believe in a future that does not yet exist and work tirelessly to bring it into being.
            </li>
            <li>
                <strong>Mental Health:</strong> Hope is a key component of psychological resilience. Believing that your struggles are temporary and that you have the capacity to overcome them is essential for recovery from setbacks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Hope</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Focus on What You Can Control:</strong> In difficult times, focus your energy on the small actions you can take, rather than dwelling on the large problems you cannot solve. Agency is the bedrock of hope.
            </li>
            <li>
              <strong>Celebrate Small Wins:</strong> Actively look for and celebrate small signs of progress. This provides evidence that your efforts are making a difference and that a better future is possible.
            </li>
            <li>
              <strong>Surround Yourself with Hopeful People:</strong> Hope, like despair, is contagious. Spend time with optimistic and resilient individuals who believe in a positive future (see Law of Association).
            </li>
             <li>
              <strong>Have a Compelling Vision for the Future:</strong> Create a clear and inspiring vision of the future you want to create. A powerful "why" can help you endure almost any "how."
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

export default LawOfHopePage;
