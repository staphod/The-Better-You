import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const LawOfAdmissionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Admission</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Admit mistakes fast. Honesty about your failures builds trust and accelerates learning.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"When you make a mistake, there are only three things you should ever do about it: admit it, learn from it, and don't repeat it."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Paul "Bear" Bryant</footer>
          </blockquote>
          <p>
            The Law of Admission states that the fastest way to recover from a mistake is to admit it immediately and take responsibility. Hiding or blaming others for a mistake only compounds the problem, erodes trust, and prevents you from learning the lesson it contains. People are surprisingly forgiving of mistakes, but they are far less forgiving of the dishonesty that often follows. Admitting fault quickly is a sign of confidence and integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>In Business:</strong> When a company makes a mistake (e.g., a data breach, a faulty product), the companies that communicate the problem quickly and honestly to their customers often recover their reputation faster than those who try to cover it up.
            </li>
            <li>
                <strong>In Science:</strong> A scientist who discovers an error in their previous research and publicly retracts or corrects it demonstrates a high level of scientific integrity, strengthening their credibility in the long run.
            </li>
            <li>
                <strong>In Relationships:</strong> Admitting you were wrong in an argument ("You were right, I overreacted") can instantly de-escalate a conflict and open the door to reconciliation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Quick Admission</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Separate Your Action from Your Identity:</strong> Making a mistake does not make you a bad person. Decouple the specific action from your sense of self-worth. This makes it easier to admit the error without feeling like a personal failure.
            </li>
            <li>
              <strong>Act Fast:</strong> The moment you realize you've made a mistake that affects others, address it. The longer you wait, the worse the situation becomes.
            </li>
            <li>
              <strong>State the Facts, Not Excuses:</strong> When admitting a mistake, simply state what happened and that you were wrong. Avoid long, defensive explanations or attempts to justify your actions.
            </li>
             <li>
              <strong>Focus on the Solution:</strong> After admitting the mistake, immediately pivot to what you will do to fix it or ensure it doesn't happen again. This shows that you are proactive and solution-oriented.
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

export default LawOfAdmissionPage;
