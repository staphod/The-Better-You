import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const LawOfLearningFromExperiencePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Learning from Experience</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Mistakes are teachers. True wisdom comes from reflecting on what you have done.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Experience is what you get when you didn't get what you wanted."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Randy Pausch</footer>
          </blockquote>
          <p>
            The Law of Learning from Experience states that knowledge is not enough; true understanding—wisdom—is forged in the crucible of real-world application and reflection. We learn most deeply not from our successes, but from our failures and mistakes. Experience is inevitable, but learning from it is a choice. This law emphasizes the critical importance of reflecting on your experiences to extract the valuable lessons they contain.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Driving a Car:</strong> You can read the entire driver's manual (knowledge), but you only learn to drive by actually getting behind the wheel (experience). Your first jerky stop is an experience that teaches you how to apply the right amount of pressure to the brake.
            </li>
            <li>
                <strong>Entrepreneurship:</strong> No business plan survives first contact with the customer. An entrepreneur learns more from one month of trying to sell their product and getting feedback (experience) than from six months of theoretical planning.
            </li>
            <li>
                <strong>Personal Growth:</strong> A painful breakup (experience) can teach you more about what you truly need in a relationship than any self-help book, provided you take the time to reflect on what went wrong and what you learned about yourself.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Maximize Learning from Experience</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Embrace Action Over Perfection:</strong> Don't wait until you have all the knowledge to start. Take action, make mistakes, and get real-world feedback. A bias for action accelerates your learning curve.
            </li>
            <li>
              <strong>Practice Deliberate Reflection:</strong> Set aside time to reflect on your experiences. A daily or weekly journal is a powerful tool for this. Ask yourself: "What happened? What went well? What could I have done better? What will I do differently next time?"
            </li>
            <li>
              <strong>Develop a "Growth Mindset":</strong> View challenges and failures not as indictments of your ability, but as opportunities to learn and grow. Believe that your skills can be developed through dedication and hard work.
            </li>
             <li>
              <strong>Seek Feedback:</strong> Your own perspective is limited. Actively seek feedback from others who observed your experience. They can provide insights that you may have missed (see Law of Feedback).
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

export default LawOfLearningFromExperiencePage;
