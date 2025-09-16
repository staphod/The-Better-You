import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfPunctualityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Punctuality</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be on time. It is a powerful statement of your respect, reliability, and self-discipline.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Punctuality is the thief of time." (Intended ironically)</p>
            <p className="mt-1">"Punctuality is the politeness of kings."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Oscar Wilde / King Louis XVIII</footer>
          </blockquote>
          <p>
            The Law of Punctuality states that being consistently on time is a fundamental habit of successful and respected individuals. Punctuality is not just about timekeeping; it is a form of communication. It signals to others that you value their time, that you are organized and in control of your life, and that you are a reliable person who keeps their commitments. Chronic lateness, conversely, signals disrespect, disorganization, and a lack of integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Professional Reputation:</strong> An employee who is always on time for work and meetings is seen as dependable and professional, making them more likely to be trusted with important responsibilities.
            </li>
            <li>
                <strong>Personal Relationships:</strong> Arriving on time for a date or a gathering with friends shows that you respect and value the people you are meeting. It builds trust and strengthens bonds.
            </li>
            <li>
                <strong>Self-Respect:</strong> Being punctual reduces your own stress. Rushing, worrying about being late, and starting meetings flustered is a significant drain on your mental and emotional energy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Punctuality</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Plan to Be Early:</strong> Don't aim to be on time; aim to be 10-15 minutes early. This builds in a buffer for unexpected delays like traffic or a misplaced set of keys.
            </li>
            <li>
              <strong>Prepare the Night Before:</strong> Much of lateness is caused by morning chaos. Lay out your clothes, pack your bag, and prepare your lunch the night before to ensure a smooth, unhurried start to your day.
            </li>
            <li>
              <strong>Understand the True Duration of Tasks:</strong> We often underestimate how long things take (a cognitive bias known as the "planning fallacy"). Time yourself on your commute or your morning routine for a few days to get a realistic idea of the time required.
            </li>
             <li>
              <strong>Treat Punctuality as a Core Value:</strong> Stop seeing lateness as a minor personality quirk. Make a conscious decision that being on time is part of your identity as a respectful and disciplined person.
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

export default LawOfPunctualityPage;
