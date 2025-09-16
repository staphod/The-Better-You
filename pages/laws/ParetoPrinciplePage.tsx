import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const ParetoPrinciplePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Pareto Principle (80/20 Rule)</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          For many outcomes, roughly 80% of consequences come from 20% of the causes.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Understanding the Law</h2>
          <p>
            First observed by Italian economist Vilfredo Pareto, who noticed that 80% of the land in Italy was owned by 20% of the population, the 80/20 rule is a principle of unequal distribution. It's not a magic formula but a recurring observation that the relationship between inputs and outputs is rarely balanced. A small number of "vital few" inputs are responsible for the majority of the outputs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The 80/20 Rule in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business:</strong> 80% of your sales often come from 20% of your customers. 80% of complaints come from 20% of your products.
            </li>
            <li>
                <strong>Productivity:</strong> 20% of your tasks will account for 80% of the value you produce. The rest is often "busy work."
            </li>
            <li>
                <strong>Habits:</strong> 20% of your healthy habits (like sleep and a key exercise) likely account for 80% of your well-being.
            </li>
            <li>
                <strong>Software:</strong> 80% of users typically use only 20% of a software's features.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply This Principle</h2>
          <p>The core lesson of the Pareto Principle is to identify and focus on the most important 20%. Stop trying to do everything and start prioritizing the "vital few."</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify Your Most Important Tasks (MITs):</strong> At the start of your day or week, ask yourself: "If I could only accomplish 2-3 things on my to-do list, which ones would create the most value and move me closer to my goals?" These are your 20%. Do them first, with your best energy.
            </li>
            <li>
              <strong>Eliminate or Delegate the Trivial Many:</strong> Look at the 80% of activities that produce little value. Can you stop doing them? Can you delegate them? Can you automate them? Freeing up this time allows you to double down on what truly matters.
            </li>
            <li>
              <strong>Analyze Your Successes and Failures:</strong> When a project succeeds, what were the 20% of actions that led to 80% of the success? When you fail, what were the few key mistakes that caused most of the problems? Learn from this analysis to improve your focus in the future.
            </li>
             <li>
              <strong>Apply it to Learning:</strong> To learn a new language, focus on the 20% of words and grammar rules that are used in 80% of everyday conversations, rather than trying to memorize the entire dictionary.
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

export default ParetoPrinciplePage;
