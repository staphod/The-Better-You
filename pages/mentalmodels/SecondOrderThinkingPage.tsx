import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const SecondOrderThinkingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Second-Order Thinking</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The art of thinking through the consequences of your consequences.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">First-Order vs. Second-Order Thinking</h2>
          <p>
            Everyone can engage in first-order thinking. It's easy and superficial. It's the process of considering only the immediate, obvious consequence of an action. Second-order thinking is the practice of asking, "And then what?" It involves thinking through the chain of effects over time, considering not just the immediate result, but the results of that result.
          </p>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"First-level thinking is simplistic and superficial, and just about everyone can do it... Second-level thinking is deep, complex and convoluted."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Howard Marks</footer>
          </blockquote>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>First-Order Thinking:</strong> I want to eat a cookie because it will taste good and satisfy my craving.</li>
            <li><strong>Second-Order Thinking:</strong> If I eat the cookie, I will satisfy my craving (1st order). But then, I will have consumed extra sugar, which might lead to an energy crash later (2nd order). If I do this every day, it will contribute to weight gain and poor health (3rd order).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why Second-Order Thinking is Crucial</h2>
          <p>
            Often, actions that feel good in the short term (first-order positive) have negative long-term consequences (second-order negative). Conversely, actions that are difficult or painful in the short term (first-order negative) often lead to the best long-term outcomes (second-order positive).
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Example 1 (Prohibition):</strong> Banning alcohol seems like a good idea to reduce drunkenness (1st order). But it creates a black market, empowers criminals, and leads to more dangerous, unregulated substances being consumed (2nd and 3rd order consequences).
            </li>
            <li>
                <strong>Example 2 (Exercise):</strong> Going to the gym is tiring and uncomfortable (1st order negative). But it leads to better health, more energy, and increased confidence (2nd order positive).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Second-Order Thinking</h2>
          <p>Before making a significant decision, pause and run through this simple exercise:</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>1. Ask "And then what?":</strong> Take your potential action and ask what the immediate consequence will be. Then, take that consequence and ask, "And then what?" Repeat this 5-6 times to map out the potential chain of events.
            </li>
            <li>
              <strong>2. Consider the Full Range of Outcomes:</strong> Don't just think about what you *expect* to happen. What are the possible positive, negative, and neutral second-order effects?
            </li>
            <li>
              <strong>3. Think in Timeframes:</strong> How will this decision affect me in 10 minutes? 10 months? 10 years? This helps you escape the trap of prioritizing short-term gratification.
            </li>
             <li>
              <strong>4. Involve Others:</strong> Discuss your decision with someone who has a different perspective. They may see second-order consequences that are invisible to you.
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

export default SecondOrderThinkingPage;
