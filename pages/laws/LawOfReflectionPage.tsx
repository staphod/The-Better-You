import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const LawOfReflectionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Reflection</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Learn from bad decisions. An unexamined life is not worth living.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Experience is not what happens to you; it's what you do with what happens to you."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Aldous Huxley</footer>
          </blockquote>
          <p>
            The Law of Reflection states that experience alone is not a good teacher; evaluated experience is. Simply going through life and making decisions is not enough to guarantee growth or wisdom. It is the act of deliberately pausing, reflecting on your decisions and their outcomes, and extracting the lessons that leads to improvement. Reflection turns experience into insight.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>After-Action Reviews (AARs):</strong> The military uses AARs after every mission. They review what was supposed to happen, what actually happened, what went well, and what could be improved. This process of structured reflection is key to their continuous improvement.
            </li>
            <li>
                <strong>Journaling:</strong> A daily journaling practice is a form of personal reflection. It allows you to review your day's decisions, celebrate your wins, and learn from your mistakes.
            </li>
            <li>
                <strong>Athletic Performance:</strong> Elite athletes and their coaches spend hours reviewing game footage. They don't just play the game; they reflect on their performance to identify weaknesses and refine their strategy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Reflection</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Schedule Time for Reflection:</strong> Just as you schedule important tasks, schedule time for thinking. This could be 15 minutes at the end of each day or a longer session at the end of each week.
            </li>
            <li>
              <strong>Ask Good Questions:</strong> Guide your reflection with powerful questions. Some examples include: "What was my biggest win this week and why?", "What was my biggest mistake and what can I learn from it?", "What should I start doing, stop doing, and continue doing?"
            </li>
            <li>
              <strong>Be Honest with Yourself:</strong> Reflection requires radical honesty. It's easy to blame external factors for our failures. True reflection involves examining your own role in the outcome.
            </li>
             <li>
              <strong>Turn Insights into Action:</strong> Reflection is only useful if it leads to a change in future behavior. For every lesson you learn, create a specific action item to implement it.
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

export default LawOfReflectionPage;
