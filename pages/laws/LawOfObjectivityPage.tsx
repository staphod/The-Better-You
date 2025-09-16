import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfObjectivityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Objectivity</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Trust facts more than feelings. Make important decisions based on verifiable data, not on emotion or opinion.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The first principle is that you must not fool yourself and you are the easiest person to fool."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Richard Feynman</footer>
          </blockquote>
          <p>
            The Law of Objectivity states that clear, rational decision-making requires you to separate verifiable facts from your own feelings, biases, and interpretations. Our emotions are powerful and important, but they can be unreliable guides when making high-stakes decisions. An objective thinker actively seeks out the cold, hard data and uses it as the foundation for their choices, even when that data contradicts their preferred narrative or gut feeling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Investing:</strong> An emotional investor buys a stock because of hype and a "good feeling" (subjective). An objective investor analyzes the company's financial statements, market position, and valuation (objective facts) before making a decision.
            </li>
            <li>
                <strong>Performance Reviews:</strong> A subjective manager gives feedback based on their personal liking of an employee. An objective manager gives feedback based on pre-defined, measurable performance metrics.
            </li>
            <li>
                <strong>Health Decisions:</strong> A subjective person might try a fad diet they saw on social media. An objective person consults scientific studies and a qualified doctor to make decisions about their health.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Objectivity</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Question Your Assumptions:</strong> For any belief or opinion you hold, ask yourself: "What is the actual evidence for this? How do I know this is true?"
            </li>
            <li>
              <strong>Seek Out the Numbers:</strong> Whenever possible, find quantitative data to inform your decision. Instead of "our marketing is working well," look at the numbers: "our marketing campaign has increased leads by 20% this month."
            </li>
            <li>
              <strong>Fight Confirmation Bias:</strong> Actively look for evidence that *disproves* your initial hypothesis. A truly objective thinker tries to prove themselves wrong, not right (see Confirmation Bias).
            </li>
             <li>
              <strong>Create Psychological Distance:</strong> Before making a big decision, imagine you are giving advice to a friend in the same situation. This helps to remove your personal emotions from the equation and allows for a more rational perspective.
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

export default LawOfObjectivityPage;
