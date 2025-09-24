import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';

const LawOfWritingPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Writing</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Write it down. The simple act of writing transforms a wish into a tangible objective.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A goal that is not in writing is not a goal at all. It is a mere fantasy."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Brian Tracy</footer>
          </blockquote>
          <p>
            The Law of Writing states that the physical act of writing down your goals dramatically increases the likelihood of achieving them. This process engages multiple senses and deeper levels of consciousness, moving a goal from an abstract idea in your mind to a concrete commitment in the physical world. A written goal is a contract with yourself—a tangible reminder that you can see, review, and hold yourself accountable to.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why Writing is So Powerful</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Psychological Commitment:</strong> Writing solidifies your intent. Dr. Gail Matthews, a psychology professor at Dominican University, found that you are 42% more likely to achieve your goals simply by writing them down.
            </li>
            <li>
                <strong>Clarity and Focus:</strong> The act of writing forces you to think through the specifics of what you want (see Law of Clarity). It crystallizes a vague desire into a concrete statement.
            </li>
            <li>
                <strong>Activates Your Subconscious:</strong> When you write a goal, you send a powerful message to your subconscious mind to get to work on it. Your brain begins to look for solutions and opportunities, even when you're not consciously thinking about it.
            </li>
            <li>
                <strong>Motivation and Accountability:</strong> Reviewing your written goals regularly, especially when you feel discouraged, can reignite your motivation and remind you why you started.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply the Law of Writing</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Get a Dedicated Goal Notebook:</strong> Have one physical place where you write, plan, and track your goals. This makes the process a focused ritual.
            </li>
            <li>
              <strong>Write in the Present Tense:</strong> Frame your goals as if they have already been achieved (e.g., "I earn $X per year" or "I am in excellent physical health"). This positive framing programs your subconscious for success.
            </li>
            <li>
              <strong>Be Specific:</strong> Include details, numbers, and deadlines. The more specific the goal, the more real it becomes.
            </li>
             <li>
              <strong>Review Daily:</strong> The magic is in the repetition. Read your list of goals every morning and every evening to keep them at the forefront of your mind.
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

export default LawOfWritingPage;