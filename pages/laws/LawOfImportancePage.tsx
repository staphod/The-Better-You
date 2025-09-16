import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfImportancePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Importance</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Make people feel important. The deepest human need is the need to be appreciated.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The deepest principle in human nature is the craving to be appreciated."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- William James</footer>
          </blockquote>
          <p>
            The Law of Importance states that every person you meet has an invisible sign around their neck that says, "Make me feel important." Recognizing and honoring this fundamental human craving is a key to influence, leadership, and positive relationships. When you make someone feel genuinely important and appreciated, you earn their goodwill, loyalty, and cooperation. It is one of the most powerful and yet most neglected tools of human relations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Dale Carnegie's "How to Win Friends and Influence People":</strong> A central theme of this classic book is the power of showing genuine interest in others, remembering their names, and making them feel valued.
            </li>
            <li>
                <strong>Effective Management:</strong> A manager who takes the time to listen to their employees' ideas and acknowledge their contributions will have a more motivated and engaged team than a manager who treats them as interchangeable cogs.
            </li>
            <li>
                <strong>Customer Loyalty:</strong> Customers return to businesses where they feel seen and valued, not just as a transaction, but as an important individual. A simple act like remembering a regular's order can create a customer for life.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Make Others Feel Important</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Listen Intently:</strong> Give people your undivided attention when they speak. This is the most powerful way to communicate that you value them and what they have to say (see Law of Attention).
            </li>
            <li>
              <strong>Use Their Name:</strong> A person's name is to that person the sweetest and most important sound in any language. Use it respectfully and often in conversation.
            </li>
            <li>
              <strong>Give Sincere and Specific Praise:</strong> Look for opportunities to compliment people on their work, character, or effort. Make it specific and genuine (see Law of Encouragement).
            </li>
             <li>
              <strong>Ask for Their Advice or Opinion:</strong> Asking someone for their input is a powerful way to show that you respect their knowledge and judgment.
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

export default LawOfImportancePage;
