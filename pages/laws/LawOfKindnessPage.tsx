import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfKindnessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Kindness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be kind—it always pays off in ways you can't measure.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Three things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Henry James</footer>
          </blockquote>
          <p>
            The Law of Kindness states that the act of being kind, without expectation of reward, is one of the most powerful forces for positive change in your life and the lives of others. Kindness reduces stress, improves mood, and strengthens social bonds. It is a choice to act with compassion, generosity, and consideration, and this choice creates a ripple effect of positivity that benefits both the giver and the receiver.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The "Helper's High":</strong> Scientific studies show that acts of kindness release endorphins in the brain, producing a positive feeling known as the "helper's high." Being kind is biochemically rewarding.
            </li>
            <li>
                <strong>De-escalating Conflict:</strong> A kind and empathetic response can often de-escalate a tense or angry situation far more effectively than aggression or defensiveness.
            </li>
            <li>
                <strong>Building Trust:</strong> Consistent kindness is a cornerstone of trust in any relationship. It signals that you are a safe and supportive person.
            </li>
            <li>
                <strong>The Ripple Effect:</strong> A simple act of kindness—letting someone merge in traffic, giving a genuine compliment—can improve that person's day, making them more likely to be kind to someone else.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Kindness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start with Small, Daily Acts:</strong> Hold the door for someone. Smile at a stranger. Let a car go ahead of you. These small acts build the habit of kindness.
            </li>
            <li>
              <strong>Give Genuine Compliments:</strong> Look for the good in others and tell them what you see. A sincere compliment can make someone's entire day.
            </li>
            <li>
              <strong>Practice Self-Kindness:</strong> Be as kind to yourself as you would be to a good friend. Forgive your own mistakes and speak to yourself with compassion. This is the foundation for being kind to others.
            </li>
             <li>
              <strong>Assume Good Intentions:</strong> When someone does something that upsets you, start by assuming they didn't mean to cause harm (see Hanlon's Razor). This allows you to respond with curiosity and kindness rather than anger.
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

export default LawOfKindnessPage;
