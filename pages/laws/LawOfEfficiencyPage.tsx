import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfEfficiencyPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Efficiency</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Don’t waste time on little things. Focus your energy on high-value activities.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"There is nothing so useless as doing efficiently that which should not be done at all."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Peter Drucker</footer>
          </blockquote>
          <p>
            The Law of Efficiency states that your results are not just a product of how hard you work, but where you apply that work. Being efficient is not about doing more things; it's about doing the right things. This law is a direct application of the Pareto Principle (80/20 Rule), which suggests that 20% of your activities will account for 80% of your results. The key to massive productivity is to identify that vital 20% and ruthlessly eliminate or minimize the rest.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>"Busy Work" vs. "High-Value Work":</strong> An inefficient person might spend three hours perfectly formatting a report that few people will read. An efficient person spends 30 minutes writing a concise, one-page summary that delivers the key information and moves on to the next important task.
            </li>
            <li>
                <strong>Outsourcing and Delegation:</strong> An efficient entrepreneur knows that their time is best spent on strategy and sales, not on bookkeeping or administrative tasks. They delegate low-value tasks to free up their time for high-value ones.
            </li>
            <li>
                <strong>Studying:</strong> An inefficient student re-reads every chapter of a textbook. An efficient student identifies the key concepts likely to be on the exam and focuses their study time on mastering those.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Become More Efficient</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify Your High-Value Activities:</strong> For your job or goals, make a list of all your typical tasks. Then, circle the 2-3 activities that generate the most significant results. This is your 20%.
            </li>
            <li>
              <strong>Apply the "Stop Doing" List:</strong> It's more powerful than a to-do list. What are the low-value activities, habits, or meetings that consume your time with little return? Make a conscious decision to stop doing them.
            </li>
            <li>
              <strong>Use Leverage:</strong> Look for tools, systems, or people that can multiply your effort. Can a piece of software automate a repetitive task? Can you create a template to speed up a common process?
            </li>
             <li>
              <strong>Batch Similar Tasks:</strong> Group similar, low-value tasks together and do them all at once. For example, answer all your emails in one or two dedicated blocks per day rather than responding as they come in. This minimizes context-switching.
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

export default LawOfEfficiencyPage;
