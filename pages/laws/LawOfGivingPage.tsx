import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfGivingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Giving</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be generous—it multiplies. A mindset of abundance attracts more abundance.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Luke 6:38</footer>
          </blockquote>
          <p>
            The Law of Giving, also known as the Law of Circulation, states that the flow of abundance in your life is directly related to your willingness to give. It is a principle that moves beyond a scarcity mindset (hoarding what you have) to an abundance mindset (trusting that there is always more). By generously giving your time, talent, and resources without expecting an immediate return, you create a vacuum that the universe naturally fills, often from unexpected sources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Mentorship:</strong> A person who generously shares their knowledge and time to mentor others often finds that they receive new ideas, opportunities, and a loyal network in return.
            </li>
            <li>
                <strong>Charitable Giving:</strong> The act of giving money to a cause you believe in shifts your psychological relationship with money from one of fear and scarcity to one of abundance and control.
            </li>
            <li>
                <strong>Kindness and Support:</strong> Giving your time and emotional support to friends in need strengthens your social bonds, which is one of the greatest predictors of happiness and resilience.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice the Law of Giving</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Give What You Wish to Receive:</strong> If you want more appreciation, give more appreciation. If you want more business, help someone else with their business.
            </li>
            <li>
              <strong>Give Cheerfully and Without Expectation:</strong> The power of giving is diminished if it is done grudgingly or with the expectation of a direct, transactional return. The joy and act of giving is its own reward.
            </li>
            <li>
              <strong>Start with a Tithe:</strong> Many traditions advocate for giving away a set percentage (often 10%) of your income. This builds the habit of generosity and the mindset of abundance.
            </li>
             <li>
              <strong>Give More Than Just Money:</strong> You can be generous with your time, your expertise, your attention, your encouragement, and your kindness. These are often more valuable than money.
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

export default LawOfGivingPage;
