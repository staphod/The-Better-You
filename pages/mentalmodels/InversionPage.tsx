import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const InversionPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Inversion</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Avoiding stupidity is easier than seeking brilliance.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Invert, always invert: Turn a situation or problem upside down. Look at it backward. What happens if all our plans go wrong? Where don't we want to go, and how do you get there? Instead of looking for success, make a list of how to fail instead."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Charlie Munger</footer>
          </blockquote>
          <p>
            Inversion is a powerful mental model popularized by investor Charlie Munger. Instead of thinking forward about what you want to achieve, you think backward about what you want to avoid. It shifts the focus from the complex, often unpredictable path to success to the much clearer, more defined paths to failure. By identifying and avoiding these paths to failure, you dramatically increase your chances of success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Inversion in Action: Practical Examples</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Goal:</strong> "How can I be more productive?" <br/>
                <strong>Inverted:</strong> "What would make me the most unproductive person possible?" <br/>
                <strong>Answer:</strong> Procrastinate, work without a plan, get distracted by social media, never get enough sleep, say yes to every request. <br/>
                <strong>Path Forward:</strong> Avoid these behaviors.
            </li>
            <li>
                <strong>Goal:</strong> "How can I have a happy, long-lasting marriage?" <br/>
                <strong>Inverted:</strong> "What would absolutely guarantee my marriage fails?" <br/>
                <strong>Answer:</strong> Be selfish, lie, never listen, be disrespectful, hold grudges, break trust. <br/>
                <strong>Path Forward:</strong> Rigorously avoid these things.
            </li>
            <li>
                <strong>Goal:</strong> "How can I be a successful investor?" <br/>
                <strong>Inverted:</strong> "What would guarantee I lose all my money?" <br/>
                <strong>Answer:</strong> Make emotional decisions, follow hype without research, use money I can't afford to lose, never diversify. <br/>
                <strong>Path Forward:</strong> Avoid these mistakes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Inversion</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>1. Define Your Goal:</strong> Clearly state what you are trying to achieve. (e.g., "I want to deliver a great presentation.")
            </li>
            <li>
              <strong>2. Invert the Problem:</strong> Restate the goal in reverse. Ask yourself, "What would guarantee the worst possible outcome?" (e.g., "How could I deliver a truly terrible presentation?")
            </li>
            <li>
              <strong>3. Brainstorm Paths to Failure:</strong> List all the things that would lead to this negative outcome. Don't hold back. (e.g., Don't prepare, don't practice, use tiny fonts, read directly from the slides, don't check the tech beforehand, speak in a monotone voice.)
            </li>
             <li>
              <strong>4. Create a Plan to Avoid Failure:</strong> Review your list of failure points and create a clear plan of action to avoid every single one of them. This list often becomes a surprisingly effective and comprehensive to-do list for achieving success.
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

export default InversionPage;