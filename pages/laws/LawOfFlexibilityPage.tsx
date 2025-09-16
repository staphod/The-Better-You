import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { OceanIcon } from '@/components/icons/ModuleIcons';

const LawOfFlexibilityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <OceanIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Flexibility</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Change your goals if they no longer fit you. The mighty oak fears the wind, while the willow bends and survives.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The measure of intelligence is the ability to change."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein</footer>
          </blockquote>
          <p>
            While persistence is crucial, the Law of Flexibility provides a vital counterbalance. It states that in a changing world, your ability to adapt your plans and even your goals is essential for long-term success. Rigidly clinging to a goal that is no longer relevant, or to a plan that is clearly not working, is a recipe for failure. Flexibility is not about giving up; it's about intelligently pivoting based on new information and changing circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Career Paths:</strong> A person might set a goal to become a lawyer, but after working in a law firm, they realize the reality doesn't align with their values. Flexibility allows them to pivot to a new career that brings more fulfillment, rather than stubbornly sticking with a goal that no longer serves them.
            </li>
            <li>
                <strong>Startups:</strong> Successful startups rarely end up with the product they started with. They launch an initial idea, get feedback from the market (see Law of Feedback), and flexibly pivot their strategy and product to meet a real customer need.
            </li>
            <li>
                <strong>Personal Growth:</strong> The person you are today is not the person you will be in five years. Your values and priorities will evolve. The goals you set today may need to be adjusted to fit the person you are becoming.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Flexibility</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Be Firm on Vision, Flexible on Details:</strong> Have a clear vision for the kind of life you want to live (e.g., "I want to be creative and financially independent"), but be flexible about the exact path you take to get there.
            </li>
            <li>
              <strong>Distinguish Between a Setback and a Dead End:</strong> A setback is a temporary obstacle that requires persistence. A dead end is a sign that your current path is fundamentally flawed and requires a change in direction. Use feedback to tell the difference.
            </li>
            <li>
              <strong>Detach Your Ego from Your Plan:</strong> Don't be married to your plan. Be married to your goal. If the plan isn't working, change the plan. It's not a personal failure; it's a strategic adjustment.
            </li>
             <li>
              <strong>Conduct Regular Goal Reviews:</strong> Periodically (e.g., every quarter or year), review your major goals. Ask yourself: "Is this still what I truly want? Does this goal still align with my core values?" It is a sign of wisdom, not weakness, to change a goal that no longer fits you.
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

export default LawOfFlexibilityPage;
