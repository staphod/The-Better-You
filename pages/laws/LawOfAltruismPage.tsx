import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LeafIcon } from '@/components/icons/ModuleIcons';

const LawOfAltruismPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LeafIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Altruism</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Help without expecting a return. True generosity is its own reward.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The best way to find yourself is to lose yourself in the service of others."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Mahatma Gandhi</footer>
          </blockquote>
          <p>
            The Law of Altruism states that selfless concern for the well-being of others is a profound source of personal fulfillment and happiness. While reciprocity is a powerful social dynamic, true altruism is about giving and helping without any expectation of a direct reward or payback. This act of unconditional giving connects you to a purpose larger than yourself, reduces focus on your own problems, and creates a deep sense of meaning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Volunteering:</strong> People who volunteer their time for a cause they believe in consistently report higher levels of happiness and life satisfaction, even though they receive no monetary payment.
            </li>
            <li>
                <strong>Anonymous Giving:</strong> Donating to a charity or helping someone in need anonymously is a pure act of altruism. The reward is the internal satisfaction of having made a positive impact.
            </li>
            <li>
                <strong>Mentorship:</strong> A senior professional who takes the time to mentor a junior colleague, sharing their knowledge and experience freely, is practicing altruism. They are investing in someone else's growth without a direct personal gain.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Altruism</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Look for Opportunities to Help:</strong> Train your mind to scan your environment for small opportunities to be of service. Can you help someone carry their groceries? Can you offer your seat on the bus?
            </li>
            <li>
              <strong>Share Your Knowledge:</strong> If you have expertise in an area, find a way to share it freely. Answer questions on an online forum, offer to tutor a student, or simply explain a concept to a curious friend.
            </li>
            <li>
              <strong>Give Without Attachment to the Outcome:</strong> Offer your help, but don't be attached to whether the person accepts it or how they use it. The act of offering is the altruistic part.
            </li>
             <li>
              <strong>Support a Cause You Believe In:</strong> Find an organization whose mission resonates with you and find a way to contribute, whether it's through a small donation or volunteering your time.
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

export default LawOfAltruismPage;
