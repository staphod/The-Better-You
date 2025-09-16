import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const LawOfConsequencesPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Consequences</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Think about the long-term effects. The mark of a superior thinker is the ability to accurately predict the consequences of their actions.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The ability to think long term is a superpower. The best decision-makers in any field are those who can see the chessboard of life, not just the next move."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Shane Parrish</footer>
          </blockquote>
          <p>
            The Law of Consequences states that every action has both immediate (first-order) and long-term (second- and third-order) effects. While most people only consider the immediate result of a decision, superior thinkers discipline themselves to trace the potential ripple effects far into the future. They understand that a decision that feels good now can lead to pain later, and a decision that is difficult now can lead to immense rewards over time. This is the essence of Second-Order Thinking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Personal Finance:</strong> The first-order consequence of buying on credit is getting what you want now. The second-order consequence is the monthly payment and interest charges, which reduce your future financial freedom.
            </li>
            <li>
                <strong>Health:</strong> The first-order consequence of eating junk food is immediate pleasure. The second- and third-order consequences are weight gain, low energy, and long-term health problems.
            </li>
            <li>
                <strong>Policy Making:</strong> A government might offer a subsidy to a struggling industry (first-order consequence: jobs are saved). The second-order consequence might be that it props up an inefficient business, preventing more innovative companies from emerging.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Think About Consequences</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Ask "And Then What?":</strong> For any major decision, ask this question repeatedly. What is the immediate result? And then what will happen because of that? And then what? Trace the chain of consequences as far as you can.
            </li>
            <li>
              <strong>Consider the 10/10/10 Rule:</strong> Ask yourself: How will I feel about this decision in 10 minutes? In 10 months? In 10 years? This helps you escape the tyranny of short-term emotion.
            </li>
            <li>
              <strong>Look for Unintended Consequences:</strong> Think about who or what else might be affected by your decision, beyond the obvious. Complex systems often have surprising ripple effects.
            </li>
             <li>
              <strong>Optimize for the Long Term:</strong> Develop the habit of choosing the option with the best long-term consequences, even if it involves short-term pain or sacrifice. This is the essence of discipline and wisdom.
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

export default LawOfConsequencesPage;
