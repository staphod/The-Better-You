import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const LawOfClarityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LightbulbIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Clarity</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Clear goals guide your life. The clearer you are about what you want, the faster you will achieve it.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Clarity is power. The clearer you are about exactly what it is you want, the more your brain knows how to get there."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Tony Robbins</footer>
          </blockquote>
          <p>
            The Law of Clarity states that your brain is a goal-seeking mechanism. When you give it a clear, specific target, it activates your subconscious mind (specifically the Reticular Activating System) to notice opportunities, people, and resources that align with that target, which you would otherwise ignore. Vague goals like "I want to be successful" are impossible for your brain to act on. Clear goals like "I will increase my income by 20% in the next 12 months by acquiring X skill" provide a precise destination.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Navigation:</strong> A GPS needs a specific address to calculate a route. It can't navigate to "somewhere nice." Clear goals are your mental GPS coordinates.
            </li>
            <li>
                <strong>Business:</strong> A company with a clear mission and specific quarterly objectives (e.g., "increase user retention by 5%") is far more likely to succeed than one with a vague desire to "grow the business."
            </li>
            <li>
                <strong>Fitness:</strong> "I want to get in shape" is a wish. "I will lose 10 pounds in 3 months by walking 10,000 steps a day and cutting out sugary drinks" is a clear goal that guides daily actions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply the Law of Clarity</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Think on Paper:</strong> The act of writing down your goals forces you to translate vague thoughts into concrete words, which is the first step to clarity.
            </li>
            <li>
              <strong>Use the SMART Framework:</strong> Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound. This framework is a machine for creating clarity.
            </li>
            <li>
              <strong>Define Your "Why":</strong> Understand the deep emotional reason behind your goal. Why do you really want it? This provides the motivation to pursue it with focus.
            </li>
             <li>
              <strong>Break It Down:</strong> A clear, large goal can be broken down into smaller, clearer steps. This transforms an overwhelming objective into a manageable plan (see Law of Planning).
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

export default LawOfClarityPage;
