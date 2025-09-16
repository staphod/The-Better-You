import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const LawOfDecisivenessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Decisiveness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Decide quickly, change slowly. Be decisive once you have the necessary facts.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Analysis of several hundred people who had accumulated fortunes well beyond the million dollar mark disclosed the fact that every one of them had the habit of reaching decisions promptly."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Napoleon Hill</footer>
          </blockquote>
          <p>
            The Law of Decisiveness states that successful individuals have a habit of making decisions promptly once they have sufficient information. Indecision, or "analysis paralysis," is a major thief of time and opportunity. A good decision made today is often better than a perfect decision made next week. This law doesn't advocate for recklessness, but for a bias toward action after a reasonable period of deliberation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Military Leadership:</strong> In battle, a commander often has to make critical decisions with incomplete information. A good-enough plan executed with speed and conviction is superior to a perfect plan that arrives too late.
            </li>
            <li>
                <strong>Business:</strong> Jeff Bezos has a "disagree and commit" principle at Amazon. It means that even if team members disagree with a decision, once it is made, they are expected to commit to it fully. This allows the organization to move forward without being bogged down by endless debate.
            </li>
            <li>
                <strong>Personal Productivity:</strong> The person who spends 30 minutes deliberating on which task to do first often gets less done than the person who simply picks the most important one and starts immediately.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Become More Decisive</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Gather Information, Then Set a Deadline:</strong> Do your research, but give yourself a firm deadline for making the decision. This prevents endless analysis.
            </li>
            <li>
              <strong>Trust Your Intuition on Reversible Decisions:</strong> For small, easily reversible decisions, don't overthink. Make a quick choice and move on. Save your deep analytical energy for major, irreversible decisions.
            </li>
            <li>
              <strong>Understand That There is No Perfect Decision:</strong> Most decisions involve trade-offs and uncertainty. The goal is not to find a perfect option, but to choose the best option available based on the current information and then commit to making it work.
            </li>
             <li>
              <strong>Embrace Action:</strong> A decision has no value until it is acted upon. Once you've decided, take the first step immediately to build momentum.
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

export default LawOfDecisivenessPage;
