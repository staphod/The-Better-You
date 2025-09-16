import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { OceanIcon } from '@/components/icons/ModuleIcons';

const SurvivorshipBiasPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <OceanIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Survivorship Bias</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The mistake of focusing on the winners while ignoring the losers, who are often invisible.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is Survivorship Bias?</h2>
          <p>
            Survivorship bias is a logical error where we concentrate on the people or things that "survived" a process and inadvertently overlook those that did not because of their lack of visibility. This can lead to false conclusions because we are only looking at a biased sample of the data. The failures are silent, while the successes are celebrated and studied.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Classic Example: Abraham Wald's Bombers</h2>
          <p>
            During World War II, statistician Abraham Wald was tasked with helping the US military decide where to add more armor to their bomber planes. The military had analyzed the planes that returned from missions and found that they were most frequently hit on the wings, tail, and fuselage. Their initial conclusion was to reinforce these areas.
          </p>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>Wald's brilliant insight was that the military was only looking at the planes that *survived*. The bullet holes on the returning planes represented the areas where a plane could be hit and still make it back. The missing data was from the planes that were shot down. Wald reasoned that the armor should be added where the returning planes had *no* bullet holes—the cockpit and the engines. These were the vulnerable spots, and hits there were catastrophic. This is a perfect illustration of survivorship bias.</p>
          </blockquote>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Survivorship Bias in Modern Life</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Entrepreneurship:</strong> We read inspiring stories about college dropouts like Bill Gates and Mark Zuckerberg who became billionaires. This creates a perception that dropping out is a viable path to success. We don't see the thousands of other dropouts whose companies failed.
            </li>
            <li>
                <strong>Architecture:</strong> We admire beautiful, old buildings that have stood for centuries, leading us to believe that old construction methods were superior. We forget that all the poorly constructed buildings from that era have long since collapsed and disappeared.
            </li>
            <li>
                <strong>Career Advice:</strong> "Follow your passion" is often advice given by highly successful people who were able to make a living from their passion. We don't hear from the vast majority who followed their passion into financial hardship.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Avoid This Trap</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Actively Look for the Missing Data:</strong> When analyzing a situation, always ask: "What am I not seeing? Who are the failures in this story, and what can I learn from them?" Studying failure is often more instructive than studying success.
            </li>
            <li>
              <strong>Be Skeptical of "Best Practices" from Survivors:</strong> When you hear advice from a "survivor," remember that their success might be due to luck, timing, or other factors they aren't even aware of, not just the habits they preach.
            </li>
            <li>
              <strong>Consider the Base Rate:</strong> Before starting a new venture (like opening a restaurant), don't just look at the successful ones. Look at the "base rate" of failure. What percentage of new restaurants fail in the first five years? This gives you a more realistic picture of the odds.
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/models" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Mental Models
          </Link>
      </div>
    </div>
  );
};

export default SurvivorshipBiasPage;
