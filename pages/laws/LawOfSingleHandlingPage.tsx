import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const LawOfSingleHandlingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Single Handling</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          One thing at a time. Handle each task, piece of paper, or email once and only once.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Touching a piece of paper, reading it, and putting it back on the pile is a huge waste of time."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- David Allen</footer>
          </blockquote>
          <p>
            The Law of Single Handling is a powerful productivity principle that combats procrastination and clutter. It states that whenever you pick up an item (be it a physical document, an email, or a task on your list), you should make a decision about it and take the appropriate action immediately. Re-reading the same email multiple times or shuffling tasks on your to-do list without acting on them wastes significant mental energy and time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action (The 4 D's)</h2>
          <p>This law is often implemented through a system known as the "4 D's," popularized by time management experts:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Do It:</strong> If the task takes less than two minutes to complete, do it immediately. Don't defer it. This is David Allen's famous "Two-Minute Rule."
            </li>
            <li>
                <strong>Delegate It:</strong> If the task is not something you must do personally, delegate it to the appropriate person right away.
            </li>
            <li>
                <strong>Defer It:</strong> If the task will take longer than two minutes and you must do it, schedule it. Put it on your calendar or your task list for a specific time. You have now handled it by making a plan.
            </li>
            <li>
                <strong>Delete It (or Archive It):</strong> If the task or information is not important, get rid of it. Delete the irrelevant email, throw away the junk mail. Be ruthless about eliminating clutter.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Single Handling</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Process Your Inbox to Zero:</strong> When you open your email, your goal should be to process every message until your inbox is empty. Apply the 4 D's to each one. Your inbox is a processing station, not a storage unit.
            </li>
            <li>
              <strong>Handle Physical Mail Immediately:</strong> When you bring in the mail, stand by a recycling bin. Immediately discard junk mail and act on bills or important letters.
            </li>
            <li>
              <strong>Commit to a Decision:</strong> When a task comes up, resist the urge to say "I'll think about that later." Make a decision on the spot about what needs to be done with it.
            </li>
             <li>
              <strong>Clear Your Workspace:</strong> At the end of each day, clear your desk, leaving only the one thing you plan to work on first the next morning. This applies the law to your physical environment.
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

export default LawOfSingleHandlingPage;
