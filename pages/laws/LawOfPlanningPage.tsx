import React from 'react';
import { Link } from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfPlanningPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Planning</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Break big dreams into small steps. A good plan is the bridge between your goals and your reality.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A goal without a plan is just a wish."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Antoine de Saint-Exupéry</footer>
          </blockquote>
          <p>
            The Law of Planning states that the act of thinking through and organizing the steps required to achieve a goal drastically increases your chances of success. A plan demystifies a large, intimidating goal by breaking it down into a sequence of small, manageable actions. It transforms a dream into a project. The very process of planning forces you to think about potential obstacles, required resources, and a logical sequence of events.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Power of a Plan</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>It Overcomes Procrastination:</strong> The main reason we procrastinate on big goals is that we feel overwhelmed and don't know where to start. A plan tells you exactly what the first, small step is, making it easy to begin.
            </li>
            <li>
                <strong>It Reduces Risk:</strong> Planning forces you to think ahead, anticipating potential problems and developing contingency plans before they arise.
            </li>
            <li>
                <strong>It Measures Progress:</strong> A plan with clear steps and milestones allows you to track your progress. Seeing how far you've come is a powerful motivator to keep going.
            </li>
            <li>
                <strong>It Saves Time and Energy:</strong> As Brian Tracy says, every minute spent in planning saves ten minutes in execution. A clear plan prevents wasted effort on low-priority or incorrect tasks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Create an Effective Plan</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start with the End in Mind:</strong> Begin with your clearly defined, written goal.
            </li>
            <li>
              <strong>Brainstorm All Possible Steps:</strong> On a piece of paper, list every single thing you can think of that you will have to do to achieve your goal. Don't worry about order at this stage; just get it all out of your head.
            </li>
            <li>
              <strong>Organize by Sequence and Priority:</strong> Now, rearrange your list into a logical sequence. What needs to happen first? What is most important? Create a checklist, ordered from the first step to the last.
            </li>
             <li>
              <strong>Identify Your Next Action:</strong> Look at your plan. What is the very next physical action you can take to move forward? Your plan is only useful if it leads to immediate action.
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

export default LawOfPlanningPage;