import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfRightActionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Right Action</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Do what’s right, not what’s easy. Character is forged in the crucible of difficult choices.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The time is always right to do what is right."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Martin Luther King Jr.</footer>
          </blockquote>
          <p>
            The Law of Right Action states that true character is revealed and built by consistently choosing the right and ethical path, especially when it is also the harder path. Life is a series of choices between what is easy and what is right. The easy path often offers short-term comfort or gain, while the right path aligns with your deepest values and builds long-term self-respect and integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business Ethics:</strong> The easy choice might be to cut corners on a product to save money. The right choice is to maintain high quality standards, even at a higher cost, to build a brand trusted for its integrity.
            </li>
            <li>
                <strong>Personal Relationships:</strong> The easy choice when you've made a mistake is to hide it or lie. The right choice is to admit it, apologize, and accept the consequences (see Law of Responsibility).
            </li>
            <li>
                <strong>Speaking Up:</strong> The easy choice when you witness an injustice is to stay silent to avoid conflict. The right choice is to speak up for what is fair, even if it makes you unpopular.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Choose the Right Action</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Define Your Core Values:</strong> You cannot do what is right if you don't know what you stand for. Take time to clearly define your personal values (e.g., honesty, compassion, courage, discipline).
            </li>
            <li>
              <strong>Use the "Regret Minimization Framework":</strong> When facing a difficult choice, project yourself to age 80. Looking back on your life, which decision would you regret more? This framework, popularized by Jeff Bezos, often clarifies the right path.
            </li>
            <li>
              <strong>Listen to Your Conscience:</strong> Often, you intuitively know the right thing to do. The challenge is not in knowing, but in having the courage to act on that knowledge.
            </li>
             <li>
              <strong>Practice on Small Things:</strong> Character is a muscle. Strengthen it by making the right choice in small, daily situations. Be honest when you're given too much change. Do a thorough job on a small task. These small acts of integrity build the strength for bigger choices.
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

export default LawOfRightActionPage;
