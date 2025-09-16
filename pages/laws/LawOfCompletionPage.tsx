import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { TrendingUpIcon } from '@/components/icons/StatusIcons';

const LawOfCompletionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <TrendingUpIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Completion</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          What you start, finish. Closing open loops frees up your mental and emotional energy.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and starting on the first one."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Mark Twain</footer>
          </blockquote>
          <p>
            The Law of Completion states that finishing tasks, especially important ones, provides a powerful psychological boost that builds momentum and self-confidence. Unfinished tasks and projects create "open loops" in our minds. These open loops consume mental energy as they constantly remind us of what we haven't done, leading to stress and a feeling of being overwhelmed. The habit of seeing tasks through to completion is a cornerstone of personal effectiveness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Psychology of Completion (The Zeigarnik Effect)</h2>
          <p>
            The Zeigarnik effect is a psychological phenomenon where people remember uncompleted or interrupted tasks better than completed tasks. This is your brain's way of nagging you to finish what you started. While useful, this can lead to persistent, intrusive thoughts about everything you have left undone. Completing a task provides a sense of closure, which silences the "nagging" and frees up your cognitive resources for the next challenge. Each completed task releases a small hit of endorphins, creating a positive feedback loop.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice the Law of Completion</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start Smaller:</strong> The main reason tasks go unfinished is that they were too big to begin with. Break down large projects into small, clearly defined tasks that you can complete in a single session.
            </li>
            <li>
              <strong>Finish One Thing Before Starting Another:</strong> Resist the urge to jump between tasks. Practice single-handling and focus on one task until it is 100% done before moving to the next.
            </li>
            <li>
              <strong>Use the Two-Minute Rule:</strong> If a task appears that will take less than two minutes to complete, do it immediately. This prevents small tasks from piling up and creating mental clutter.
            </li>
             <li>
              <strong>Schedule Completion Time:</strong> For larger tasks, don't just schedule time to "work on" them. Schedule a specific block of time with the explicit goal of finishing it. This changes your mindset from "making progress" to "getting it done."
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

export default LawOfCompletionPage;
