import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const LawOfExpectationsPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Expectations</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          You become what you think about. Your expectations of yourself and others often become self-fulfilling prophecies.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Whether you think you can, or you think you can't—you're right."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Henry Ford</footer>
          </blockquote>
          <p>
            The Law of Expectations suggests that what you expect to happen, with confidence, has a powerful tendency to become your reality. Your expectations shape your attitude, which in turn influences your actions and how others respond to you. If you expect to succeed, you will act in ways that support success. If you expect to fail, you will subconsciously sabotage yourself.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The Placebo Effect:</strong> In medicine, patients who are given a sugar pill (a placebo) but expect it to be a powerful drug often experience real physiological improvements. Their expectation of getting better helps make it so.
            </li>
            <li>
                <strong>The Pygmalion Effect:</strong> In management and education, leaders' expectations of their subordinates can influence their performance. If a teacher expects a student to excel, they often give them more attention and challenging work, and the student rises to meet those expectations.
            </li>
            <li>
                <strong>Personal Confidence:</strong> If you expect to be awkward in a social situation, you will likely act reserved and anxious, creating the awkwardness you feared. If you expect to be friendly and well-received, you will project warmth and confidence, drawing others to you.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Harness the Law of Expectations</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Expect the Best from Yourself:</strong> Set high, positive, and realistic expectations for your own performance. Act "as if" you are already the person you want to become. This doesn't mean being arrogant; it means having quiet confidence in your ability to learn, adapt, and succeed.
            </li>
            <li>
              <strong>Expect the Best from Others:</strong> Assume people have good intentions (see Hanlon's Razor). When you expect the best from others, you treat them with more respect and trust, which often encourages them to live up to your positive expectations.
            </li>
            <li>
              <strong>Visualize Success:</strong> Spend time vividly imagining your desired outcomes. This trains your brain to recognize the opportunities and resources that will lead you there. Your subconscious mind will start working to align your actions with the image you've created.
            </li>
             <li>
              <strong>Guard Your Mental Diet:</strong> Just as your body is affected by the food you eat, your expectations are shaped by the information you consume. Surround yourself with positive, success-oriented people, books, and media.
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

export default LawOfExpectationsPage;