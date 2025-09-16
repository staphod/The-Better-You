import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { OceanIcon } from '@/components/icons/ModuleIcons';

const LawOfEmotionalControlPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <OceanIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Emotional Control</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Don’t decide when you are emotional. Make major decisions only when you are in a calm, objective state.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Never make a permanent decision based on a temporary emotion."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Unknown</footer>
          </blockquote>
          <p>
            The Law of Emotional Control states that your ability to make rational, long-term decisions is severely impaired when you are in a state of high emotion, whether positive (excitement, euphoria) or negative (anger, fear, sadness). Strong emotions hijack the logical centers of your brain, leading to impulsive and often regrettable choices. The wisest decisions are always made from a place of calmness and objectivity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Angry Emails:</strong> Firing off an angry email in the heat of the moment almost always makes a situation worse and can cause irreparable damage to relationships and your career.
            </li>
            <li>
                <strong>"Fear of Missing Out" (FOMO) Investing:</strong> Making a large investment during a period of market euphoria, driven by the fear of missing out, often leads to buying at the top of a bubble.
            </li>
            <li>
                <strong>Relationship Decisions:</strong> Making a major relationship decision, like breaking up, in the middle of a heated argument is rarely a good idea. Decisions that affect your life so profoundly should be made after a period of calm reflection.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Emotional Control in Decision-Making</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Implement a "Cooling-Off" Period:</strong> For any important decision, especially one that has you feeling emotional, enforce a mandatory 24-hour waiting period before you act. The issue will almost always look different after a night of sleep.
            </li>
            <li>
              <strong>Recognize Your Emotional Triggers:</strong> Become aware of the situations or people that tend to trigger a strong emotional response in you. When these triggers are present, be extra cautious about making decisions.
            </li>
            <li>
              <strong>"Name It to Tame It":</strong> Simply acknowledging and naming the emotion you are feeling ("I am feeling very angry right now") can create a small amount of psychological distance, allowing your rational mind to re-engage.
            </li>
             <li>
              <strong>Never Reply Immediately to a Provocative Message:</strong> When you receive an email or text that makes you angry, follow a simple rule: never reply right away. Step away, calm down, and draft your response later when you are objective.
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

export default LawOfEmotionalControlPage;
