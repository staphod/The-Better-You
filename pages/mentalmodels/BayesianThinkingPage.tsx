import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const BayesianThinkingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Bayesian Thinking</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          A framework for rationally updating your beliefs in the face of new evidence.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is Bayesian Thinking?</h2>
          <p>
            At its core, Bayesian thinking is a systematic way to move from a state of less certainty to a state of more certainty. It's about treating beliefs not as fixed truths, but as probabilities that you should update as you gather new information. Instead of thinking in black-and-white terms ("I'm right" or "I'm wrong"), a Bayesian thinker thinks in shades of gray ("I'm about 70% sure of this, but new data could change my mind").
          </p>
          <p className="mt-2">The process involves three key parts:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Prior Belief (Prior):</strong> Your initial confidence in a hypothesis before seeing new evidence.</li>
            <li><strong>New Evidence (Likelihood):</strong> The strength of the new data you encounter.</li>
            <li><strong>Updated Belief (Posterior):</strong> Your revised confidence in the hypothesis after considering the new evidence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Bayesian Thinking in Action</h2>
          <p>Imagine you hear a rustle in the bushes at night.</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Prior Belief:</strong> You live in a quiet suburb, so your prior belief is that it's probably a cat (maybe 80% confidence) and very unlikely to be a lion (maybe 0.1% confidence).
            </li>
            <li>
                <strong>New Evidence:</strong> You hear a loud roar. This new evidence is highly consistent with the "lion" hypothesis and very inconsistent with the "cat" hypothesis.
            </li>
            <li>
                <strong>Updated Belief:</strong> You dramatically update your beliefs. Your confidence in it being a lion skyrockets, and your confidence in it being a cat plummets. You went from near certainty of safety to near certainty of danger based on the new data. This is Bayesian updating in action.
            </li>
          </ul>
           <p className="mt-2">This seems obvious, but people often fail to update their beliefs rationally, especially when it comes to long-held convictions about politics, health, or themselves.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Think Like a Bayesian</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Acknowledge Uncertainty:</strong> Start by admitting that you don't know things with 100% certainty. Try to assign a rough probability to your beliefs (e.g., "I'm about 60% sure this project will succeed").
            </li>
            <li>
              <strong>Actively Seek New Evidence:</strong> Look for information that both supports and challenges your beliefs. A key part of Bayesian thinking is being open to being wrong. Don't fall into confirmation bias.
            </li>
            <li>
              <strong>Update Your Beliefs Proportionally:</strong> When you encounter new evidence, adjust your confidence level. Strong, credible evidence should shift your belief more than weak, anecdotal evidence. The goal is not to abandon your beliefs at every turn, but to refine them over time.
            </li>
             <li>
              <strong>Remember: Truth is a Process, Not a Destination:</strong> Bayesian thinking is a continuous process of getting "less wrong" over time. It's a mindset of intellectual humility and a commitment to aligning your view of the world more closely with reality.
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

export default BayesianThinkingPage;
