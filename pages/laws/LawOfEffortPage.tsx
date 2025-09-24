import React from 'react';
import { Link } from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const LawOfEffortPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Effort</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Hard work brings results. Success is not an accident; it is the direct result of focused, persistent effort.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Thomas A. Edison</footer>
          </blockquote>
          <p>
            The Law of Effort states that achievement is directly proportional to the amount of focused work you put in. While luck and talent play a role, they are unreliable and often overrated. Consistent, intelligent effort is the one variable you can control, and it is the most dependable path to achieving any goal. This law is the foundation of all personal and professional success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Athletics:</strong> The world-class athlete is not just the one with the most natural talent, but the one who shows up for grueling practice sessions day after day, year after year. Their victory is the visible result of thousands of hours of invisible effort.
            </li>
            <li>
                <strong>Musicians:</strong> A virtuoso musician makes playing look effortless, but this "effortlessness" is the product of countless hours of deliberate practice, repeating scales and difficult passages until they become second nature.
            </li>
            <li>
                <strong>Business:</strong> A successful business is rarely an overnight success. It is built upon years of effort: developing the product, understanding the customer, managing finances, and navigating setbacks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply the Law of Effort</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Define "Work" Clearly:</strong> Identify the specific, high-leverage activities that produce results in your chosen field. Effort is not just about being busy; it's about doing the right things.
            </li>
            <li>
              <strong>Embrace Consistency:</strong> Small, daily efforts compound into massive results over time (see the Law of Accumulation). It's more effective to work for one focused hour every day than for seven hours once a week.
            </li>
            <li>
              <strong>Work Smart, Not Just Hard:</strong> Combine your effort with learning and strategy. Continuously ask yourself, "Is there a better, more efficient way to do this?" Use feedback to refine your approach so your hard work is applied effectively.
            </li>
             <li>
              <strong>Develop Grit:</strong> "Stick-to-itiveness" or grit is the ability to persist in the face of boredom, frustration, and setbacks. Cultivate the mindset that challenges are part of the process and that your effort, over time, will overcome them.
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

export default LawOfEffortPage;