import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfCharacterPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Character</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Character is what you do when no one is watching. It is your true self.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Abraham Lincoln</footer>
          </blockquote>
          <p>
            The Law of Character states that who you are in your innermost self—your integrity, courage, and compassion when no one is looking—is the ultimate determinant of your destiny. Your reputation is what others think you are; your character is what you truly are. While you can fake a reputation for a while, your true character will inevitably reveal itself through your actions, especially under pressure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Private Actions, Public Results:</strong> An athlete who trains diligently in the off-season when no one is watching is building the character that leads to victory when the spotlight is on.
            </li>
            <li>
                <strong>Honesty in Small Things:</strong> The person who returns a lost wallet is demonstrating a character of integrity. This same character will guide them in larger, more complex ethical decisions.
            </li>
            <li>
                <strong>Crisis and Adversity:</strong> A person's true character is not revealed in times of comfort, but in times of crisis. It is when you are tested that your foundational values and principles show through.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Build Strong Character</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Live by a Code:</strong> Define your personal values and make a conscious commitment to live by them every day, in every decision (see Law of Integrity).
            </li>
            <li>
              <strong>Practice Small Acts of Discipline:</strong> Character is built through small, daily choices. Make your bed. Keep your promises to yourself. Do the hard thing even when you don't feel like it.
            </li>
            <li>
              <strong>Choose Your Role Models Wisely:</strong> Surround yourself with and study people of high character. Their example will inspire and guide you (see Law of Modeling).
            </li>
             <li>
              <strong>Take Responsibility:</strong> A person of strong character does not make excuses or blame others. They take ownership of their actions and their life (see Law of Accountability).
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

export default LawOfCharacterPage;
