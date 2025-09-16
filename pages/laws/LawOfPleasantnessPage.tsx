import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfPleasantnessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Pleasantness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Smile—it changes the room. A pleasant and cheerful demeanor is magnetic.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A cheerful look brings joy to the heart, and good news gives health to the bones."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Proverbs 15:30</footer>
          </blockquote>
          <p>
            The Law of Pleasantness states that a positive, cheerful, and agreeable attitude makes you more attractive and influential in all your interactions. People are naturally drawn to those who are pleasant to be around and will go out of their way to help and cooperate with them. Conversely, people will avoid those who are consistently negative, critical, or disagreeable. Your demeanor is a choice, and choosing to be pleasant is one of the simplest and most effective ways to improve your social and professional life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Customer Service:</strong> A friendly and smiling customer service representative can instantly de-escalate a customer's frustration and is far more likely to achieve a positive resolution.
            </li>
            <li>
                <strong>Leadership:</strong> A leader with a positive and pleasant attitude creates a more optimistic and resilient team culture. Their team is more willing to go the extra mile because they enjoy their work environment.
            </li>
            <li>
                <strong>Everyday Interactions:</strong> The barista who greets you with a genuine smile is more likely to get a tip. The neighbor who is always pleasant is more likely to get help when they need it. Pleasantness is a social lubricant that makes life easier.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate a Pleasant Demeanor</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice Smiling:</strong> The physical act of smiling, even when you don't feel like it, can actually improve your mood (a phenomenon known as facial feedback). Make a conscious effort to smile at people you interact with throughout the day.
            </li>
            <li>
              <strong>Look for the Good:</strong> Train yourself to look for the positive aspects of any situation or person. A pleasant person is one who is quick to praise and slow to criticize.
            </li>
            <li>
              <strong>Use an Upbeat Tonality:</strong> Pay attention to your tone of voice. A warm, friendly tone is more inviting and persuasive than a flat or negative one.
            </li>
             <li>
              <strong>Be a Good Finder, Not a Fault Finder:</strong> Instead of looking for what's wrong, make it your mission to find what's right. Compliment people sincerely, appreciate good service, and express gratitude often.
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

export default LawOfPleasantnessPage;
