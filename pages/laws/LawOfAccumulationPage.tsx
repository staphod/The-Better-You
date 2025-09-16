import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfAccumulationPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Accumulation</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Little steps every day create big changes. Small, consistent efforts compound into massive results over time.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The journey of a thousand miles begins with a single step."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Lao Tzu</footer>
          </blockquote>
          <p>
            The Law of Accumulation, also known as the Compound Effect, states that great achievements are rarely the result of a single, heroic action. Instead, they are the product of countless small, seemingly insignificant choices and actions, repeated consistently over a long period. Just as drops of water can fill a bucket, small daily efforts accumulate to create extraordinary outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Compound Interest:</strong> The most famous example. A small amount of money, invested consistently, grows exponentially over time because the interest earns interest on itself. The biggest gains come at the end.
            </li>
            <li>
                <strong>Health:</strong> You don't get healthy from one workout or one salad. You get healthy by accumulating the effects of thousands of small choices: taking the stairs, drinking water, choosing the salad over the fries, getting 15 extra minutes of sleep.
            </li>
            <li>
                <strong>Learning:</strong> You don't master a language by cramming for 12 hours. You master it by practicing for 20 minutes every single day for two years. Each session builds upon the last, accumulating into fluency.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Leverage the Law of Accumulation</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Focus on the Process, Not the Results:</strong> The results are a lagging measure of your habits. Don't get discouraged by the lack of immediate change. Fall in love with the process of showing up every day. The accumulation will take care of the results.
            </li>
            <li>
              <strong>Break Big Goals into Tiny Habits:</strong> A goal like "write a book" is intimidating. A habit of "write 100 words a day" is manageable. That small daily habit, accumulated over a year, results in 36,500 words.
            </li>
            <li>
              <strong>Be Patient:</strong> The Law of Accumulation requires time. The most significant rewards are often invisible for a long time and then appear to happen "all at once." You have to be patient enough to get through the early, slow part of the curve.
            </li>
             <li>
              <strong>Never Miss Twice:</strong> Consistency is key. Everyone makes mistakes and misses a day. The key is to get back on track immediately. As James Clear says, "Never miss twice." Missing once is an accident. Missing twice is the start of a new habit.
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

export default LawOfAccumulationPage;