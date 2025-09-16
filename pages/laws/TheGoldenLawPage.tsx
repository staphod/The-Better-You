import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { CrownIcon } from '@/components/icons/ModuleIcons';

const TheGoldenLawPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <CrownIcon className="h-16 w-16 text-amber-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-amber-600">The Golden Law</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Do unto others as you would have them do unto you.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea: A Universal Ethic</h2>
          <blockquote className="border-l-4 border-amber-400 pl-4 italic my-4 bg-amber-50/50 p-4 rounded-r-lg">
            <p>"This is the sum of duty: do naught unto others which would cause you pain if done to you."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- The Mahabharata (Hinduism)</footer>
             <p className="mt-2">"What is hateful to you, do not do to your fellow: this is the whole Torah; the rest is the explanation."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- The Talmud (Judaism)</footer>
             <p className="mt-2">"Therefore all things whatsoever ye would that men should do to you, do ye even so to them."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- The Bible (Christianity)</footer>
          </blockquote>
          <p>
            The Golden Law, or the ethic of reciprocity, is the most universally recognized moral principle in history. It appears in nearly every religion, philosophy, and culture. Its power lies in its simplicity and its profound depth. It is a direct call to empathy—to place yourself in another's position before you act, speak, or judge. It is the foundation of trust, compassion, fairness, and a harmonious society.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Three Dimensions of Application</h2>
          <p>While the core idea is simple, it can be applied with increasing levels of empathy and understanding:</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
                <strong>The Silver Rule (Avoid Harm):</strong> "Do <strong>not</strong> do to others what you would not want them to do to you." This is the foundational level, focused on restraint. It asks you to avoid causing pain, disrespect, or injustice because you yourself would not want to experience it. It is the baseline for a civil society.
            </li>
            <li>
                <strong>The Golden Rule (Proactive Goodness):</strong> "Do to others what you <strong>would want</strong> them to do to you." This moves beyond just avoiding harm into the realm of proactive kindness. It compels you to offer help, show compassion, give encouragement, and be generous, because that is what you would appreciate in their situation.
            </li>
            <li>
                <strong>The Platinum Rule (Empathetic Action):</strong> "Treat others the way <strong>they want</strong> to be treated." This is the highest level of application. It recognizes that not everyone has the same preferences, needs, or communication styles as you. It requires you to listen, observe, and understand another person's unique perspective, and then act according to their needs, not just your own projected desires.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live by The Golden Law</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Practice the Empathetic Pause:</strong> Before reacting to a situation, especially a difficult one, pause and ask yourself: "How would I want to be treated if I were in their shoes?" or better yet, "Based on what I know about them, how would they want to be treated?"
            </li>
            <li>
                <strong>Listen to Understand:</strong> The Platinum Rule is impossible without deep, active listening. Seek to understand another's feelings and perspective before offering your own.
            </li>
            <li>
                <strong>Act with Integrity:</strong> Let this principle be your guide in all interactions—with your family, your colleagues, and strangers. It is the simplest and most powerful tool for building a life of character and strong relationships.
            </li>
             <li>
                <strong>Assume Good Intent:</strong> Start with the assumption that others are operating from a place of good intention, even if their actions seem misguided. This approach opens the door for constructive dialogue rather than conflict.
            </li>
          </ul>
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

export default TheGoldenLawPage;
