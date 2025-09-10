import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const CauseAndEffectPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text-primary">The Law of Cause and Effect</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
          Often called the "Iron Law of the Universe," this principle states that every effect has a specific cause.
        </p>
      </div>

      <div className="space-y-6 text-brand-text-secondary">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-3">Understanding the Law</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Shallow men believe in luck or in circumstance. Strong men believe in cause and effect."</p>
            <footer className="text-right text-sm font-semibold mt-2">- Ralph Waldo Emerson</footer>
          </blockquote>
          <p>
            The Law of Cause and Effect is a universal principle found in science, philosophy, and spirituality. It posits that nothing happens by chance. Every single effect in your life—your health, your wealth, your relationships, your happiness—is the result of specific causes. Your thoughts, decisions, and actions are the primary causes you set in motion. To change the effects, you must change the causes.
          </p>
          <p className="mt-2">
            In physics, this is echoed by Newton's Third Law: "For every action, there is an equal and opposite reaction." In agriculture, it's known as the Law of Sowing and Reaping. You cannot sow corn and expect to reap wheat. The seeds you plant (causes) determine the harvest you get (effects).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-3">The Law in Action: Practical Examples</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong className="text-brand-text-primary">Health:</strong> The <span className="font-semibold">causes</span> are diet, exercise, sleep, and stress management. The <span className="font-semibold">effect</span> is your level of physical health and energy. You cannot create the effect of good health with the causes of a poor diet and sedentary lifestyle.
            </li>
            <li>
                <strong className="text-brand-text-primary">Finance:</strong> The <span className="font-semibold">causes</span> are earning, saving, investing, and spending habits. The <span className="font-semibold">effect</span> is your financial situation. Financial freedom is the effect of disciplined financial habits (causes).
            </li>
            <li>
                <strong className="text-brand-text-primary">Relationships:</strong> The <span className="font-semibold">causes</span> are kindness, respect, active listening, and honesty. The <span className="font-semibold">effect</span> is strong, trusting, and supportive relationships.
            </li>
            <li>
                <strong className="text-brand-text-primary">Knowledge:</strong> The <span className="font-semibold">cause</span> is consistent learning—reading, studying, practicing. The <span className="font-semibold">effect</span> is expertise and wisdom in a chosen field.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-3">How to Apply This Law to Your Life</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong className="font-semibold text-brand-text-primary">1. Identify the Effect You Desire:</strong> Be absolutely clear about the result you want. Don't be vague. Instead of "I want to be happy," define what that means: "I want to have a loving relationship," or "I want to feel energetic and healthy." Write it down.
            </li>
            <li>
              <strong className="font-semibold text-brand-text-primary">2. Trace Back to the Causes:</strong> Study people who have already achieved the effect you desire. What did they do? What were their habits, their mindset, their daily actions? These are the causes. Deconstruct their success to find the blueprint.
            </li>
            <li>
              <strong className="font-semibold text-brand-text-primary">3. Control Your Thoughts:</strong> Your thoughts are the very first cause. They lead to feelings, which lead to actions, which lead to results. To control the effects in your life, you must first gain control over your dominant thought patterns. Focus your thoughts on what you want and the actions required, not on what you lack or fear.
            </li>
             <li>
              <strong className="font-semibold text-brand-text-primary">4. Implement the Causes Consistently:</strong> Once you know the causes, you must put them into practice. It is not enough to know that exercise leads to health; you must do the exercise. Consistency is the key that activates the law in your favor.
            </li>
          </ol>
        </section>

        <div className="mt-8 text-center border-t pt-6">
           <Link to="/tools/laws" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Explore Other Laws & Principles
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CauseAndEffectPage;