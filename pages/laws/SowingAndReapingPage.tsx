import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const SowingAndReapingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15s4.5-6 9-6s9 6 9 6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10s4.5-6 9-6s9 6 9 6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3m0 12l-4-4m4 4l4-4" />
        </svg>
        <h1 className="text-4xl font-bold text-brand-text-primary">The Law of Sowing and Reaping</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
          Also known as the Law of the Harvest, this principle governs the relationship between what you plant and what you grow.
        </p>
      </div>

      <div className="space-y-6 text-brand-text-secondary">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Do not be deceived: God cannot be mocked. A man reaps what he sows."</p>
            <footer className="text-right text-sm font-semibold mt-2">- Galatians 6:7</footer>
          </blockquote>
          <p>
            While a close relative of the Law of Cause and Effect, the Law of Sowing and Reaping offers a richer, more agricultural metaphor that emphasizes patience, faith, and the compounding nature of our actions. Popularized in wisdom literature, including the teachings of Jesus, it frames our actions not as simple inputs, but as seeds planted for a future harvest. The quality of the seeds (our thoughts, habits, deeds) and the care we give them determines the quality and abundance of our future.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-3">The Three Truths of the Harvest</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
                <strong className="text-brand-text-primary">You Reap <span className="italic">What</span> You Sow:</strong> This is the principle of correspondence. If you plant seeds of kindness, you will harvest friendships. If you plant seeds of laziness, you will harvest failure. If you plant seeds of daily learning, you will harvest wisdom. You cannot expect a harvest you did not plant the seeds for.
            </li>
            <li>
                <strong className="text-brand-text-primary">You Reap <span className="italic">More</span> Than You Sow:</strong> This is the principle of multiplication. You plant one corn kernel, but if nurtured, you harvest a stalk with hundreds of kernels. Actions, both positive and negative, compound. A small daily saving habit (a seed) can grow into a massive financial harvest over time. Likewise, a small daily neglect can compound into a major problem.
            </li>
            <li>
                <strong className="text-brand-text-primary">You Reap <span className="italic">After</span> You Sow:</strong> This is the principle of patience. There is always a delay between planting and harvesting. You cannot plant a seed on Monday and expect a crop on Tuesday. Many people give up because they don't see immediate results. This law teaches that the harvest is guaranteed if you plant the right seeds and tend to them consistently, but it will come in its own season.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text-primary mb-3">How to Plant a Better Harvest</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="font-semibold text-brand-text-primary">Choose Your Seeds Wisely:</strong> Become conscious of the "seeds" you are planting every day through your thoughts, words, and actions. Are they seeds of positivity, discipline, and growth, or seeds of negativity, complaint, and idleness?
            </li>
            <li>
              <strong className="font-semibold text-brand-text-primary">Prepare the Soil:</strong> Your mind and environment are the soil. Cultivate a positive mental attitude and surround yourself with people and information that nourish your goals. Remove the "weeds" of negativity and distraction.
            </li>
            <li>
              <strong className="font-semibold text-brand-text-primary">Water and Nurture Daily:</strong> Consistent action is the water and sunlight for your seeds. A goal without a daily habit is just a wish. Nurture your goals with small, consistent efforts.
            </li>
             <li>
              <strong className="font-semibold text-brand-text-primary">Have Faith in the Harvest:</strong> Trust the process. Do not dig up your seeds every day to see if they are growing. Do the work, be patient, and know that the law is always in effect. The results will come.
            </li>
          </ul>
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

export default SowingAndReapingPage;