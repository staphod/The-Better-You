import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { CrownIcon } from '@/components/icons/ModuleIcons';

const LawOfReciprocityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <CrownIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Reciprocity (The Golden Rule)</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Treat others how you want to be treated. This principle is the foundation of human cooperation and trust.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Therefore all things whatsoever ye would that men should do to you, do ye even so to them."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- The Bible (Matthew 7:12)</footer>
          </blockquote>
          <p>
            The Law of Reciprocity, often called The Golden Rule, is one of the most ancient and universal ethical principles. It states that you should treat other people with the same kindness, respect, and fairness that you would want for yourself. It is a powerful social lubricant and the bedrock of trust. When you give freely of your help, kindness, or support, you create a social obligation in others to repay you in kind, fostering goodwill and strong relationships.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business and Networking:</strong> If you want to build a strong professional network, the best approach is to be genuinely helpful to others first without expecting an immediate return. Offer introductions, share useful information, and provide support. This builds a "bank" of goodwill that will be reciprocated in the future.
            </li>
            <li>
                <strong>Personal Relationships:</strong> In a friendship or partnership, the person who consistently offers support, listens actively, and shows kindness is more likely to receive the same in return. The relationship flourishes because both parties feel valued.
            </li>
            <li>
                <strong>Marketing:</strong> Companies use this law by offering free samples, helpful content, or free trials. By giving value first, they create a sense of reciprocity that makes customers more likely to buy from them later.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Reciprocity</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Be the First to Give:</strong> Don't wait for others to be kind or helpful to you. Take the initiative. Give a genuine compliment, offer your help on a project, or share a useful resource.
            </li>
            <li>
              <strong>Give Without Keeping Score:</strong> The most powerful form of reciprocity comes from giving without expecting an immediate and direct payback. Trust that your generosity will be returned by the universe in various, often unexpected, ways.
            </li>
            <li>
              <strong>Practice Empathy:</strong> Before you act, put yourself in the other person's shoes. How would you want to be treated in their situation? Use that as your guide.
            </li>
             <li>
              <strong>Receive Graciously:</strong> Part of reciprocity is allowing others to give back to you. When someone offers you help or a compliment, accept it with a simple and sincere "thank you."
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

export default LawOfReciprocityPage;
