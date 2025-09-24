import React from 'react';
import { Link } from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfModelingPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Modeling</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Learn from smart people. Success leaves clues, and you can accelerate your own success by following them.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If I have seen further it is by standing on the shoulders of Giants."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Isaac Newton</footer>
          </blockquote>
          <p>
            The Law of Modeling states that one of the fastest and most effective ways to achieve a goal is to find someone who has already achieved it and model their behavior, mindset, and strategies. Instead of trying to reinvent the wheel through trial and error, you can learn from the successes and failures of those who have gone before you. This allows you to compress decades of experience into a much shorter timeframe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Apprenticeship:</strong> The traditional model of apprenticeship is based on this law. A young craftsman learns by watching, imitating, and receiving guidance from a master.
            </li>
            <li>
                <strong>Biographies:</strong> Reading biographies of successful people is a form of modeling. You can learn about their habits, their thought processes, how they overcame adversity, and the principles that guided them.
            </li>
            <li>
                <strong>Mentorship:</strong> Having a mentor provides a direct line to someone who has already navigated the path you are on. They can offer personalized advice, help you avoid common pitfalls, and open doors to new opportunities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Effectively Model Others</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify Your Role Models:</strong> For each major goal in your life, identify 2-3 people who have achieved outstanding success in that area. They can be living or dead, famous or someone you know personally.
            </li>
            <li>
              <strong>Study Them Deeply:</strong> Don't just look at their surface-level success. Study their journey. Read their books, listen to their interviews, and understand their daily habits. What do they believe? How do they think? What did they do when they failed?
            </li>
            <li>
              <strong>Adopt, Don't Just Copy:</strong> The goal is not to become a clone of your role model. It's to understand the principles behind their success and adapt them to your own personality and circumstances.
            </li>
             <li>
              <strong>Seek Proximity:</strong> If possible, find ways to get closer to your role models. This could mean seeking a formal mentorship, joining a community they are part of, attending their seminars, or even just engaging with their work on a deeper level.
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

export default LawOfModelingPage;