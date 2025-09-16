import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfInactionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Inaction</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          No decision is also a decision. Choosing not to act is a choice with its own set of consequences.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Theodore Roosevelt</footer>
          </blockquote>
          <p>
            The Law of Inaction states that failing to make a decision is, in itself, a decision—it is the decision to let external forces or the passage of time determine your outcome. People often choose inaction to avoid the risk of making the "wrong" choice, but they fail to realize that inaction carries its own risks and consequences, chief among them being the opportunity cost of what could have been.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Career Stagnation:</strong> An employee who is unhappy in their job but chooses not to look for a new one is making a decision to remain unhappy. The inaction preserves the status quo.
            </li>
            <li>
                <strong>Investing:</strong> Someone who is afraid of market volatility and chooses to keep all their savings in cash is making a decision. The consequence is that their money will lose purchasing power over time due to inflation.
            </li>
            <li>
                <strong>Health:</strong> Ignoring a persistent health symptom and choosing not to see a doctor is a decision. The potential consequence is that a treatable condition could become much more serious.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Overcome Inaction</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Recognize Inaction as a Choice:</strong> The first step is to be aware that when you defer a decision, you are actively choosing the path of least resistance, and that path has its own destination.
            </li>
            <li>
              <strong>Consider the Cost of Inaction:</strong> When weighing a decision, don't just consider the risks of acting. Explicitly ask yourself: "What is the cost if I do nothing? What will my life look like in one year or five years if I let this situation continue?"
            </li>
            <li>
              <strong>Embrace Imperfect Action:</strong> A good plan violently executed now is better than a perfect plan next week. Often, taking a small, imperfect step is enough to break the paralysis of inaction and provide the feedback you need to course-correct.
            </li>
             <li>
              <strong>Set Deadlines for Decisions:</strong> For important choices, give yourself a specific deadline to decide. This prevents you from endlessly deferring and letting the opportunity pass you by (see Law of Decisiveness).
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

export default LawOfInactionPage;
