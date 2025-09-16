import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const LawOfTippingPointPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of the Tipping Point (The Titration Principle)</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          In any process of change, there comes a moment where one small addition creates a massive, sudden transformation. Every drop matters.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea: The Titration Analogy</h2>
          <p>
            In a chemistry titration experiment, you slowly add drops of one solution to another. For a long time, nothing seems to happen as each drop is added. The solution remains clear. Then, suddenly, a single, final drop causes the entire mixture to instantly and dramatically change color. That final drop was no more powerful than any of the hundreds that came before it, but it was the one that pushed the system past its tipping point.
          </p>
          <p className="mt-2">
            This law, an extension of the Law of Accumulation, teaches us that change is often not linear. We can put in consistent effort for long periods with little visible result, until one final push creates a breakthrough. It also warns that small negative actions can accumulate silently until one last misstep causes a sudden collapse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Positive View: The Power of Persistence</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"When nothing seems to help, I go and look at a stonecutter hammering away at his rock, perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it will split in two, and I know it was not that last blow that did it—but all that had gone before."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Jacob Riis</footer>
          </blockquote>
          <p>
            This principle is a powerful antidote to discouragement. Every time you practice a skill, save a dollar, or make a healthy choice, you are adding a "drop" to the beaker. You may not see any change, but you are moving the system closer to its tipping point. The breakthrough moment—mastering the skill, reaching a savings goal, seeing health results—is not the result of the last action, but the sum of all the consistent actions that preceded it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Negative View: The Straw that Broke the Camel's Back</h2>
          <p>
            The titration principle also works in reverse. Small, repeated negative actions can accumulate without apparent consequence until a final, seemingly minor event causes a catastrophic failure.
          </p>
           <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Relationships:</strong> A series of small neglects, broken promises, and unkind words (the drops) may be tolerated for a long time. Then, one final, minor slight (the tipping point) causes the relationship to end suddenly.
            </li>
            <li>
                <strong>Health:</strong> Years of small, unhealthy choices (a daily soda, skipping exercise) add up silently. Then, one day, a doctor's visit reveals a serious health condition that seems to have appeared "out of nowhere."
            </li>
            <li>
                <strong>Trust:</strong> Trust is eroded by a series of small deceptions or letdowns, until one final broken promise causes a complete loss of faith (see Law of Fragility of Trust).
            </li>
          </ul>
        </section>

         <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Use This Law</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Trust the Process:</strong> When you are working toward a positive goal, have faith that your small, daily efforts are adding up, even when you can't see the results yet. Don't give up before the final drop.
            </li>
            <li>
              <strong>Be Vigilant About Small Negatives:</strong> Pay attention to the small, repeated negative habits in your life. Understand that they are not harmless; they are silently moving you toward a negative tipping point.
            </li>
            <li>
              <strong>Celebrate Consistency:</strong> Acknowledge and reward yourself for the act of adding another "drop," not just for the final color change. This reinforces the consistent behavior that leads to breakthroughs.
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

export default LawOfTippingPointPage;
