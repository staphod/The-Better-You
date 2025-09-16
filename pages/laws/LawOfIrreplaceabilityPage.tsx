import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const LawOfIrreplaceabilityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Irreplaceability</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Time lost never comes back. Treat every moment as the precious, irreplaceable asset it is.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"You may delay, but time will not."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Benjamin Franklin</footer>
          </blockquote>
          <p>
            The Law of Irreplaceability is a stark and powerful reminder of the nature of time. It is the only resource in your life that is truly non-renewable. You can always make more money, but you can never make more time. Every second that passes is gone forever. This law urges you to develop a profound respect for time and to be incredibly intentional about how you invest it, because how you spend your moments is how you spend your life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Regret:</strong> The feeling of regret is the emotional consequence of misspent, irreplaceable time. "I wish I had spent more time with my family" is a common regret that stems from understanding this law too late.
            </li>
            <li>
                <strong>Urgency:</strong> This law creates a healthy sense of urgency. It's not about frantic, stressful rushing, but about a focused intensity that comes from knowing that the present moment is the only one you have to act in.
            </li>
            <li>
                <strong>Decision-Making Filter:</strong> When faced with a choice about how to spend your time, asking "Is this the highest and best use of this irreplaceable moment of my life?" can provide immediate clarity and help you eliminate trivialities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live by This Law</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice "Memento Mori":</strong> An ancient Stoic practice of remembering your mortality ("Remember you must die"). This isn't meant to be morbid, but to infuse your current actions with purpose and meaning. It helps you stop postponing your life.
            </li>
            <li>
              <strong>Align Your Time with Your Values:</strong> First, get clear on what is most important to you in life (your health, family, contribution, etc.). Then, examine your calendar. Does how you spend your time reflect your stated values? If not, make changes.
            </li>
            <li>
              <strong>Be Fully Present:</strong> Since time is irreplaceable, don't waste the present by worrying about the past or being anxious about the future. Practice mindfulness to fully experience and utilize the moment you are in.
            </li>
             <li>
              <strong>Eliminate "Time Vampires":</strong> Identify the people, activities, or habits that consistently drain your time and energy with little to no positive return. Make a conscious choice to minimize or eliminate them from your life.
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

export default LawOfIrreplaceabilityPage;
