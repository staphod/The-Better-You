import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const LawOfThinkingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Thinking</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Think before you act. The quality of your life is determined by the quality of your thinking.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The world we have created is a product of our thinking. It cannot be changed without changing our thinking."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein</footer>
          </blockquote>
          <p>
            The Law of Thinking states that your actions are a direct result of your thoughts, and your results are a direct result of your actions. Therefore, to change your results, you must begin by changing your thinking. Most people live in a state of reactive, automatic thought, responding to external stimuli without deliberation. High achievers, in contrast, engage in proactive, deliberate thinking. They take time to think through their goals, plans, and decisions before they act.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Chess Grandmasters:</strong> A grandmaster doesn't just think about their next move (first-order thinking). They think several moves ahead, considering all possible responses from their opponent (see Second-Order Thinking).
            </li>
            <li>
                <strong>Impulse Purchases:</strong> An unthinking person sees an item, feels a desire, and buys it immediately. A thinking person pauses to ask, "Do I really need this? Does this align with my financial goals? What is the opportunity cost?"
            </li>
            <li>
                <strong>Emotional Reactions:</strong> When insulted, the automatic, unthinking response is to get angry and retaliate. The thinking response is to pause, consider the source, and choose a deliberate reaction that serves your long-term well-being (see Stoicism).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Improve the Quality of Your Thinking</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Schedule Thinking Time:</strong> Dedicate time in your calendar for the sole purpose of thinking without distraction (see 60 Minutes of Silence). Use this time to review your goals, analyze your problems, and plan your strategy.
            </li>
            <li>
              <strong>Learn Mental Models:</strong> Mental models are frameworks for thinking (like Inversion or First Principles). Learning them gives you a toolbox of different ways to look at a problem, leading to better and more creative solutions.
            </li>
            <li>
              <strong>Think on Paper:</strong> The act of writing down your thoughts forces clarity and slows down your thinking process, allowing for deeper and more logical analysis.
            </li>
             <li>
              <strong>Question Your First Conclusion:</strong> Your first idea is often the most conventional one. Before settling on a decision, challenge yourself to come up with at least two alternative solutions.
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

export default LawOfThinkingPage;
