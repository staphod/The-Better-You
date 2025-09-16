import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfPrioritiesPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Priorities</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Do first things first. Effective people don't just manage time, they manage their priorities.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The key is not to prioritize what's on your schedule, but to schedule your priorities."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Stephen Covey</footer>
          </blockquote>
          <p>
            The Law of Priorities asserts that your effectiveness is determined not by how busy you are, but by how well you focus on the most important tasks. Many people spend their days reacting to urgent but unimportant demands, leaving their most significant goals untouched. This law, closely related to the Pareto Principle (80/20 Rule), urges you to identify the "vital few" activities that produce the greatest results and to build your schedule around them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Eisenhower Matrix</h2>
          <p>A simple but powerful tool for prioritizing is the Eisenhower Matrix, which divides tasks into four quadrants:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Quadrant 1: Urgent & Important (Crises, Deadlines):</strong> Do these immediately. The goal is to minimize the time spent here by planning ahead.
            </li>
            <li>
                <strong>Quadrant 2: Not Urgent & Important (Planning, Relationship Building, Exercise):</strong> This is the quadrant of high-leverage activities that lead to long-term success. You must be proactive to schedule time for these.
            </li>
            <li>
                <strong>Quadrant 3: Urgent & Not Important (Some meetings, interruptions, other people's minor issues):</strong> Delegate or say no to these. They feel important because they are urgent, but they don't move you toward your goals.
            </li>
            <li>
                <strong>Quadrant 4: Not Urgent & Not Important (Trivial tasks, time wasters):</strong> Eliminate these.
            </li>
          </ul>
           <p className="mt-2">Most people live in Quadrants 1 and 3. Successful people live in Quadrant 2.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Master Your Priorities</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Define Your "Big Rocks":</strong> Identify your 2-3 most important long-term goals. These are your "big rocks." All your priorities should align with making progress on these.
            </li>
            <li>
              <strong>Plan Your Day the Night Before:</strong> Before you finish work, identify the single most important task (MIT) you need to accomplish the next day. This is your top priority.
            </li>
            <li>
              <strong>Eat the Frog:</strong> A concept from Brian Tracy, this means tackling your most important—and often most difficult—task first thing in the morning. This builds momentum and ensures that even if the rest of the day gets derailed, you've made meaningful progress.
            </li>
             <li>
              <strong>Learn to Say "No":</strong> Every time you say "yes" to a low-priority task, you are saying "no" to a high-priority one. Saying no is a critical skill for protecting your time and focus.
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

export default LawOfPrioritiesPage;