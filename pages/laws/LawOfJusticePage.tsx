import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfJusticePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Justice</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Stand up for what’s fair, especially for those who cannot stand for themselves.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Injustice anywhere is a threat to justice everywhere."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Martin Luther King Jr.</footer>
          </blockquote>
          <p>
            The Law of Justice is the principle of upholding fairness and moral rightness in your actions and in the world around you. It is a commitment to do the right thing, to treat people equitably, and to defend those who are being treated unfairly. While related to the Law of Fairness, which focuses on impartiality, the Law of Justice has a more active component—it is about not just being fair yourself, but actively standing against unfairness where you see it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Speaking Truth to Power:</strong> An employee who respectfully points out an unethical practice to their superiors, even at personal risk, is acting on the principle of justice.
            </li>
            <li>
                <strong>Advocacy:</strong> People who volunteer their time or resources to advocate for marginalized or disadvantaged groups are living the Law of Justice.
            </li>
            <li>
                <strong>Standing Up to Bullying:</strong> A student who intervenes when another student is being bullied, rather than being a passive bystander, is choosing justice over the easy path of inaction.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live a Just Life</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Develop Your Moral Compass:</strong> Be clear on your own principles of right and wrong. This provides the foundation for your actions.
            </li>
            <li>
              <strong>Be an "Upstander," Not a Bystander:</strong> When you witness an act of unfairness or cruelty, make the choice to do something. This doesn't always mean a direct confrontation; it can be as simple as supporting the victim or reporting the incident.
            </li>
            <li>
              <strong>Use Your Privilege to Help Others:</strong> Recognize the areas in your life where you have advantages—be it financial, social, or otherwise—and look for ways to use that advantage to lift up those with less.
            </li>
             <li>
              <strong>Educate Yourself on Issues of Injustice:</strong> Take the time to learn about the systemic and personal injustices that exist in your community and the world. Awareness is the first step toward meaningful action.
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

export default LawOfJusticePage;
