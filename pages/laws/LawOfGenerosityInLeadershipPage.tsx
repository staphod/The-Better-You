import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfGenerosityInLeadershipPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Generosity in Leadership</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Share the credit, take the blame. This single habit builds a loyal and high-performing team.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A good leader takes a little more than his share of the blame, a little less than his share of the credit."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Arnold H. Glasow</footer>
          </blockquote>
          <p>
            The Law of Generosity in Leadership is a powerful principle that flips the natural human tendency to seek credit and avoid blame. An effective leader understands that their role is to elevate their team. When things go well, they shine the spotlight on their team members, publicly giving them credit for the success. When things go wrong, they step forward and take responsibility (see Law of Accountability). This creates deep psychological safety, fostering loyalty, and encouraging risk-taking and innovation within the team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Team Success:</strong> When a project succeeds, a generous leader says, "My team did an incredible job." An insecure leader says, "I led my team to success." The former builds a confident team that wants to succeed again; the latter builds a team that feels like cogs in a machine.
            </li>
            <li>
                <strong>Project Failure:</strong> When a project fails, a generous leader says, "This was my responsibility; I should have provided better guidance." An insecure leader says, "The team didn't execute properly." The former inspires loyalty; the latter creates a culture of fear.
            </li>
            <li>
                <strong>Motivation:</strong> Team members who know their hard work will be recognized and that they won't be thrown under the bus if they make a mistake are far more motivated to give their best effort.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Generous Leadership</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Use "We" for Success, "I" for Failure:</strong> Make this your default language. When talking about successes, always use "we" or name specific team members. When talking about failures, use "I."
            </li>
            <li>
              <strong>Praise Publicly, Correct Privately:</strong> Make a habit of publicly acknowledging the contributions of your team members in meetings or emails. Any corrective feedback should always be given in a private, one-on-one setting.
            </li>
            <li>
              <strong>See Yourself as a Shield:</strong> Your job as a leader is to shield your team from external blame, allowing them the space to do their best work. You absorb the pressure from above and pass down only constructive guidance.
            </li>
             <li>
              <strong>Focus on Growth:</strong> Frame failures not as blame-worthy events, but as learning opportunities for the entire team, starting with yourself.
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

export default LawOfGenerosityInLeadershipPage;
