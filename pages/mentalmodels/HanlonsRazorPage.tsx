import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const HanlonsRazorPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Hanlon's Razor</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          "Never attribute to malice that which is adequately explained by stupidity."
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <p>
            Hanlon's Razor is a mental model that serves as a powerful antidote to paranoia, anger, and negative assumptions about others. It suggests that when someone does something that negatively affects you, your default assumption should be that they acted out of ignorance, incompetence, or carelessness, rather than a deliberate intention to harm you.
          </p>
          <p className="mt-2">
            While people certainly can act with malice, it's far less common than simple human error. By assuming the less sinister explanation first, you save yourself a tremendous amount of emotional energy and are more likely to react to situations constructively.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Hanlon's Razor in Daily Life</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The "Malicious" Interpretation:</strong> "My coworker didn't send me the report on time because they want to sabotage my presentation." <br/>
                <strong>The Hanlon's Razor Interpretation:</strong> "My coworker forgot, got overwhelmed with other tasks, or didn't realize how urgent it was."
            </li>
            <li>
                <strong>The "Malicious" Interpretation:</strong> "That driver cut me off on purpose because they're a jerk." <br/>
                <strong>The Hanlon's Razor Interpretation:</strong> "That driver was distracted, didn't see me, or is rushing to an emergency."
            </li>
            <li>
                <strong>The "Malicious" Interpretation:</strong> "My friend didn't reply to my text because they're ignoring me." <br/>
                <strong>The Hanlon's Razor Interpretation:</strong> "My friend is busy, their phone died, or they saw the text and forgot to reply."
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why This Razor is So Useful</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>It Preserves Relationships:</strong> Reacting with anger to perceived malice can destroy trust. Reacting with patience to a mistake preserves it. Hanlon's Razor gives others the benefit of the doubt, which is essential for healthy relationships.
            </li>
            <li>
              <strong>It Reduces Negative Emotions:</strong> Assuming malice creates feelings of anger, resentment, and victimhood. Assuming incompetence or error leads to more manageable feelings like frustration or even compassion, which are easier to resolve.
            </li>
            <li>
              <strong>It Leads to Better Problem-Solving:</strong> If you assume malice, your solution is to attack or defend. If you assume incompetence, your solution is to clarify, educate, or create a better system. The second approach is almost always more productive.
            </li>
            <li>
              <strong>A Note of Caution:</strong> Hanlon's Razor is a guideline, not an absolute law. If there is repeated behavior and clear evidence of malicious intent, you should not ignore it. The key phrase is "adequately explained."
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/models" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Mental Models
          </Link>
      </div>
    </div>
  );
};

export default HanlonsRazorPage;