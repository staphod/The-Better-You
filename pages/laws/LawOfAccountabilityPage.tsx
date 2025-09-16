import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfAccountabilityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Accountability</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Take responsibility. Great leaders take ownership of the outcomes, both good and bad.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The price of greatness is responsibility."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Winston Churchill</footer>
          </blockquote>
          <p>
            The Law of Accountability states that you are fully responsible for your life, your actions, and your results. It is the opposite of a victim mentality. An accountable person does not make excuses or blame external circumstances; they take ownership. In leadership, accountability is the bedrock of trust and high performance. When a leader is accountable, it empowers their team to be accountable as well.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>"Extreme Ownership":</strong> A concept from Jocko Willink, where a leader takes full responsibility for everything that happens in their team. If a team member fails, the leader examines how their own instructions, training, or support were insufficient. This creates a culture where problems are solved, not blamed.
            </li>
            <li>
                <strong>Personal Finance:</strong> An accountable person doesn't blame the economy for their debt; they analyze their own spending and earning habits and take responsibility for changing them.
            </li>
            <li>
                <strong>Project Management:</strong> When a project misses a deadline, an accountable project manager doesn't blame their team members. They accept responsibility for the failure of the overall plan and work to create a better one.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Accountability</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Stop the Blame Game:</strong> Make a conscious decision to stop blaming other people or external factors for your problems. Focus only on what you can control and influence.
            </li>
            <li>
              <strong>Own Your Mistakes:</strong> When you make a mistake, admit it quickly, clearly, and without excuses (see Law of Responsibility). Focus on the solution, not the problem.
            </li>
            <li>
              <strong>Focus on Response, Not Reaction:</strong> You may not be responsible for what happens to you, but you are 100% responsible for how you choose to respond.
            </li>
             <li>
              <strong>Find an Accountability Partner:</strong> Share your goals with a trusted friend or mentor and ask them to hold you accountable. The simple act of knowing you have to report your progress to someone can be a powerful motivator.
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

export default LawOfAccountabilityPage;
