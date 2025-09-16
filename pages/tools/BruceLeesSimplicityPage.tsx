import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LeafIcon } from '@/components/icons/ModuleIcons';

const BruceLeesSimplicityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/strategies" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Tools & Strategies</Link>
      
      <div className="text-center mb-8">
        <LeafIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Bruce Lee's Strategy of Simplicity</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          "It's not the daily increase but daily decrease. Hack away at the unessential."
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea: The Art of Subtraction</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Simplicity is the key to brilliance."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Bruce Lee</footer>
          </blockquote>
          <p>
            Bruce Lee's philosophy of "hacking away at the unessential" is a powerful strategy for achieving mastery and clarity in any domain. It argues that true effectiveness comes not from adding more complexity, techniques, or commitments, but from relentlessly subtracting everything that is superfluous. This process of simplification leaves only what is most direct, powerful, and necessary. It is about achieving more by doing less, but doing it better.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Strategy in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Martial Arts (Jeet Kune Do):</strong> Lee developed his own martial art, Jeet Kune Do, by stripping away the rigid forms and impractical movements of traditional styles. He kept only what was proven to be the most direct and effective in a real fight.
            </li>
            <li>
                <strong>Productivity:</strong> An amateur tries to become more productive by adding more apps, systems, and life hacks. A master becomes more productive by eliminating their biggest distractions, saying no to non-essential commitments, and focusing on a single priority.
            </li>
            <li>
                <strong>Design and Writing:</strong> Great design is often about what is removed. A clean, intuitive interface has had every non-essential button and option "hacked away." Similarly, powerful writing is concise; it communicates its message with the fewest possible words. As Antoine de Saint-Exupéry said, "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to "Hack Away at the Unessential"</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Conduct a "Subtraction Audit":</strong> Regularly review your commitments, routines, and even your possessions. For each one, ask: "Does this truly add value to my life? Does it serve my highest goals?" If the answer is no, find a way to eliminate it.
            </li>
            <li>
              <strong>Focus on the Fundamentals:</strong> In any skill you are trying to learn, identify the 20% of fundamental techniques that are used 80% of the time (see the Pareto Principle). Master these before adding complexity.
            </li>
            <li>
              <strong>Simplify Your Environment:</strong> Declutter your physical and digital workspaces. A minimalist environment reduces distractions and promotes clear thinking.
            </li>
             <li>
              <strong>Embrace Constraints:</strong> Use constraints to force simplicity. For example, try to explain a complex idea in a single sentence, or limit a project to only its most essential features. Constraints breed creativity and force you to focus on what truly matters.
            </li>
          </ol>
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

export default BruceLeesSimplicityPage;
