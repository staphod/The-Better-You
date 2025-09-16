import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfGratitudePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Gratitude</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Say "thank you" often. Gratitude shifts your focus from what you lack to what you have, making you rich in the process.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Gratitude is not only the greatest of virtues, but the parent of all the others."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Marcus Tullius Cicero</footer>
          </blockquote>
          <p>
            The Law of Gratitude states that the conscious practice of thankfulness is a powerful catalyst for happiness and positive change. It is a mental discipline that trains your mind to recognize the abundance that already exists in your life. This shift in perspective away from scarcity and complaint creates a positive feedback loop, improving your mood, strengthening your relationships, and attracting more good into your life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Neuroscience:</strong> Practicing gratitude has been shown to activate regions of the brain associated with dopamine release, the "feel-good" neurotransmitter. It literally changes your brain chemistry for the better.
            </li>
            <li>
                <strong>Relationships:</strong> Regularly expressing genuine appreciation to your partner, friends, and colleagues strengthens those bonds. People who feel appreciated are more likely to be supportive and kind in return.
            </li>
            <li>
                <strong>Resilience:</strong> During difficult times, a gratitude practice can be a powerful anchor. By focusing on what you still have, rather than what you've lost, you can maintain perspective and find the strength to persevere.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Gratitude</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Keep a Gratitude Journal:</strong> Each day, write down three to five specific things you are grateful for. Be specific: instead of "my family," write "the way my daughter laughed at my joke today."
            </li>
            <li>
              <strong>Express Your Thanks Directly:</strong> Don't just feel it, say it. Make a point to thank someone personally every day, whether it's for a small courtesy or a significant act of help.
            </li>
            <li>
              <strong>Practice Gratitude "Reframing":</strong> When you face a challenge, try to find something to be grateful for within the situation. "I'm stuck in traffic, but I'm grateful for this extra time to listen to my favorite podcast."
            </li>
             <li>
              <strong>Use a Gratitude Jar:</strong> Throughout the week, write down moments of gratitude on small slips of paper and put them in a jar. At the end of the week, read them all to appreciate the accumulated good in your life.
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

export default LawOfGratitudePage;
