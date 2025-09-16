import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfFocusPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Focus</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          One goal at a time is easier. The main thing is to keep the main thing the main thing.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If you chase two rabbits, you will not catch either one."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Russian Proverb</footer>
          </blockquote>
          <p>
            The Law of Focus states that you can achieve almost anything you want, but you cannot achieve everything you want. Our energy, time, and attention are finite resources. When you try to pursue multiple important goals simultaneously, you divide your resources, leading to mediocre results across the board. By focusing on one primary objective at a time, you can apply your full power to it, leading to faster progress and a higher likelihood of success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Myth of Multitasking</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The Cost of Context Switching:</strong> Neurologically, humans are incapable of true multitasking. What we call multitasking is actually rapid "context switching"—your brain jumping from one task to another. Each switch incurs a cognitive cost, wasting time and mental energy, and increasing the chance of errors.
            </li>
            <li>
                <strong>Diluted Effort:</strong> Imagine your effort is a hose. If you put one nozzle on it, you get a powerful, focused stream. If you put a sprinkler head with ten nozzles on it, you get a weak spray in every direction. Focusing on one goal is like using a single, powerful nozzle.
            </li>
            <li>
                <strong>The "One Thing":</strong> In his book "The ONE Thing," Gary Keller advocates for finding the one most important activity that, by doing it, will make everything else easier or unnecessary. This is the essence of the Law of Focus.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply the Law of Focus</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Choose Your "One Thing":</strong> For any given period (a year, a quarter, a week), decide on your single most important goal. This doesn't mean you do nothing else, but it means this goal gets your prime time and energy.
            </li>
            <li>
              <strong>Say "Not Now" to Good Ideas:</strong> You will have many good ideas and opportunities. The challenge is to say "not now" to most of them to protect your focus on the great one. Keep an "ideas parking lot" to capture them for later.
            </li>
            <li>
              <strong>Use Time Blocking for Your #1 Priority:</strong> Schedule a non-negotiable block of time for your most important goal every day, preferably when your energy is highest. This ensures it gets done before the day's distractions take over.
            </li>
             <li>
              <strong>Eliminate Distractions:</strong> Create an environment that supports focus. Turn off notifications, close unnecessary tabs, and let others know when you are in a focus block.
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

export default LawOfFocusPage;
