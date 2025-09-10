import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const EntropyPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Second Law of Thermodynamics: Entropy</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The universal tendency for all systems to move from a state of order to disorder.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is Entropy? (The Physics)</h2>
          <p>
            In simple terms, the Second Law of Thermodynamics states that the total entropy (a measure of disorder or randomness) of an isolated system can only increase over time. A hot cup of coffee will always cool to room temperature; it will never spontaneously get hotter. A neat room, left alone, will gather dust and become messy. Order requires energy; disorder is the default state.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Entropy in Life: The Unseen Force</h2>
           <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Left to themselves, things tend to go from bad to worse. Maintenance is not a glamour job, but it is a hero's work."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Stewart Brand</footer>
          </blockquote>
          <p>
            This physical law is a powerful metaphor for nearly every aspect of our lives. Without the consistent input of focused energy (work, effort, attention), our health, relationships, skills, and even our homes will naturally decline into a state of disorder. Growth and success are not accidents; they are the result of actively fighting against the pull of entropy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Examples of Entropy in Daily Life</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Health & Fitness:</strong> Your body's natural state, without effort, is to lose muscle and gain fat. <strong>Exercise and a healthy diet are the energy you must constantly apply</strong> to fight this physical entropy and maintain order (health).
            </li>
            <li>
                <strong>Relationships:</strong> A strong relationship, left unattended, will wither. Misunderstandings accumulate, distance grows. <strong>Communication, shared experiences, and effort are the energy</strong> needed to combat relational entropy.
            </li>
            <li>
                <strong>Knowledge & Skills:</strong> A skill you learned but don't practice will become rusty. <strong>Consistent practice and learning are the energy</strong> required to maintain and sharpen your abilities against the entropy of forgetting.
            </li>
            <li>
                <strong>Your Home:</strong> A clean room will not stay clean on its own. Dust settles, items get misplaced. <strong>Cleaning and organizing are the energy</strong> you input to fight the inevitable march towards messiness.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Fight Entropy and Create Order</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>1. Acknowledge the Default Path is Decay:</strong> Understand that things will not "just work out" on their own. This acceptance removes frustration and replaces it with a realistic understanding that maintenance is a requirement for anything you value.
            </li>
            <li>
              <strong>2. Apply Consistent, Focused Energy:</strong> Identify the key areas of your life (health, career, relationships). What is the "energy" required to maintain order in each? Schedule this work. Make it a non-negotiable part of your routine.
            </li>
            <li>
              <strong>3. Build Systems and Habits:</strong> Good habits are a form of automated energy input. A habit of exercising three times a week automatically fights health entropy. A system for paying bills on time fights financial entropy. Systems are your best weapon against disorder.
            </li>
             <li>
              <strong>4. Conduct Regular Maintenance:</strong> Just as a car needs regular oil changes, your life systems need check-ups. Have a weekly review of your goals. Have a monthly "state of the union" with your partner. These acts of maintenance prevent small bits of disorder from cascading into chaos.
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

export default EntropyPage;