import React from 'react';
import { Link } from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const LawOfApplicationPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Application</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Knowledge grows when you use it. Knowledge is potential power; applied knowledge is real power.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Knowing is not enough; we must apply. Willing is not enough; we must do."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Johann Wolfgang von Goethe</footer>
          </blockquote>
          <p>
            The Law of Application states that the true value of knowledge is only unlocked when it is put into practice. You can read every book on a subject, but until you apply what you have learned, it remains theoretical and inert. Application is the bridge between knowing and doing, between information and transformation. It is through action that ideas are tested, skills are built, and results are created.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Health and Fitness:</strong> Knowing the principles of healthy eating and exercise is useless if you don't apply them by choosing healthy foods and going to the gym. The application is what produces the health benefits.
            </li>
            <li>
                <strong>Business:</strong> An entrepreneur can read dozens of books on marketing, but their business will only grow when they apply those principles by creating and launching an actual marketing campaign.
            </li>
            <li>
                <strong>Relationships:</strong> Reading about how to be a better listener (knowledge) has no effect on your relationships. Actually practicing active listening in your next conversation (application) is what strengthens the connection.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Master the Law of Application</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Adopt a "Just-in-Time" Learning Approach:</strong> Instead of trying to learn everything about a topic at once, learn what you need for the immediate next step and then apply it right away. This creates a tight loop between learning and doing.
            </li>
            <li>
              <strong>End Every Learning Session with an Action Step:</strong> When you finish reading a chapter, listening to a podcast, or watching a tutorial, ask yourself: "What is one small action I can take in the next 24 hours to apply this?"
            </li>
            <li>
              <strong>Embrace Imperfect Action:</strong> Don't wait until you "know enough" to get started. The conditions will never be perfect. Start with what you have and where you are. You will learn more from imperfect action than from perfect inaction.
            </li>
             <li>
              <strong>Teach What You Learn:</strong> The need to apply your knowledge is a core part of teaching. Explaining a concept to someone else forces you to use and apply it in a new context, deepening your mastery (see Law of Teaching).
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

export default LawOfApplicationPage;