import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfHappinessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Happiness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Happiness comes from within. It is a choice you make, not a condition you arrive at.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Marcus Aurelius</footer>
          </blockquote>
          <p>
            The Law of Happiness states that genuine, lasting happiness is not a result of external circumstances, possessions, or achievements. It is an internal state, a product of your mindset, your choices, and your perspective. While external events can certainly bring fleeting pleasure or pain, your baseline level of happiness is determined by your inner world, which you have the power to cultivate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The Hedonic Treadmill:</strong> Psychology shows that people quickly return to a relatively stable level of happiness despite major positive or negative life events. Winning the lottery brings a temporary spike in joy, but people often return to their previous baseline. This proves happiness is not in the "having."
            </li>
            <li>
                <strong>Gratitude Practice:</strong> A person who consciously practices gratitude for what they have will often be happier than a wealthy person who is constantly focused on what they lack.
            </li>
            <li>
                <strong>Meaning and Purpose:</strong> People who have a strong sense of purpose—a reason to get up in the morning that is bigger than themselves—report the highest levels of life satisfaction, regardless of their material circumstances.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Happiness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice Gratitude Daily:</strong> Make it a habit to focus on what is good in your life. This is the single most powerful happiness practice (see Law of Gratitude).
            </li>
            <li>
              <strong>Find Meaning in Contribution:</strong> Shift your focus from "what can I get?" to "what can I give?" Happiness is often a byproduct of making a positive contribution to the lives of others (see Law of Contribution).
            </li>
            <li>
              <strong>Live in the Present Moment:</strong> Much of our unhappiness comes from ruminating on the past or worrying about the future. Practice mindfulness to anchor yourself in the here and now (see Law of Presence).
            </li>
             <li>
              <strong>Take Care of Your Physical Self:</strong> Your mind and body are connected. Regular exercise, good nutrition, and adequate sleep are foundational to a happy state of mind (see Law of Health).
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

export default LawOfHappinessPage;
