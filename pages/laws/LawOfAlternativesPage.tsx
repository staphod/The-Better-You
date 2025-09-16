import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfAlternativesPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Alternatives</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Look at all options. Never make an important decision with only one choice.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"To try and fail is at least to learn; to fail to try is to suffer the inestimable loss of what might have been."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Chester W. Nimitz</footer>
          </blockquote>
          <p>
            The Law of Alternatives states that the quality of your decisions is dramatically improved by the quantity and quality of the options you consider. When you are faced with a choice between "Option A" and "doing nothing," you are trapped in a narrow frame that often leads to poor outcomes. By forcing yourself to generate multiple, diverse alternatives, you expand your perspective, reduce the risk of bias, and increase the probability of finding a truly optimal solution.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Career Decisions:</strong> When considering a new job offer, don't just compare it to your current job. Actively explore at least one or two other potential roles or even alternative paths like starting a business or going back to school. This gives you a much richer basis for comparison.
            </li>
            <li>
                <strong>Strategic Planning:</strong> A business that only considers one strategy is brittle. A robust strategic plan involves brainstorming multiple possible futures and developing a range of strategic options to deal with them.
            </li>
            <li>
                <strong>Negotiation:</strong> In negotiation, your power is determined by your BATNA (Best Alternative to a Negotiated Agreement). If you have a strong alternative, you can walk away from a bad deal. If you have no alternatives, you are forced to accept whatever is offered.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Generate Better Alternatives</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Brainstorm Without Judgment:</strong> When generating options, the goal is quantity, not quality. Write down every idea that comes to mind, no matter how impractical it seems. You can evaluate and filter them later.
            </li>
            <li>
              <strong>Use the "Vanishing Options" Test:</strong> As described by the Heath brothers in "Decisive," ask yourself: "If I couldn't choose any of my current options, what else could I do?" This forces you to break out of a narrow frame.
            </li>
            <li>
              <strong>Seek Outside Perspectives:</strong> Talk to people who are not directly involved in the problem, especially those with different backgrounds and expertise. They will often see alternatives that are invisible to you (see Law of Counsel).
            </li>
             <li>
              <strong>Think in Parallel, Not Sequentially:</strong> Instead of evaluating one option at a time, lay out several options side-by-side. This allows you to compare their features and trade-offs more objectively.
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

export default LawOfAlternativesPage;
