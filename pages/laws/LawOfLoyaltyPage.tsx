import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfLoyaltyPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Loyalty</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be loyal to those who are not present. In doing so, you build the trust of those who are.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Loyalty is a characteristic trait. Those who have it, give it free of charge."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Ellen J. Barrier</footer>
          </blockquote>
          <p>
            The Law of Loyalty states that one of the truest tests of character is how you speak about people who are not in the room. Being loyal means defending the reputation of your friends, family, and colleagues in their absence. When you refuse to participate in gossip and instead speak positively of others, the people who are present learn that you are a trustworthy and honorable person, and they will know you will do the same for them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>In the Workplace:</strong> When a colleague is being unfairly criticized in a meeting, a loyal team member will gently defend them or add positive context. This builds a culture of psychological safety.
            </li>
            <li>
                <strong>In Friendships:</strong> If someone starts to gossip about your friend, a loyal response is to either change the subject or say something positive about that friend. This shows where your allegiance lies.
            </li>
            <li>
                <strong>Leadership:</strong> A loyal leader never complains about their superiors to their subordinates or about one team member to another. They handle disagreements directly and privately.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Loyalty</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Refuse to Gossip:</strong> Make a personal rule to not speak negatively about anyone who is not present. If a conversation turns to gossip, either steer it in a different direction or excuse yourself.
            </li>
            <li>
              <strong>Defend the Absent:</strong> When you hear someone being criticized unfairly, offer a counter-perspective or simply say, "I've had a really positive experience with them."
            </li>
            <li>
              <strong>Give Credit Where It's Due:</strong> If you are praised for work that a colleague contributed to, be loyal to their effort and make sure you give them public credit.
            </li>
             <li>
              <strong>Address Conflict Directly:</strong> If you have an issue with someone, have the courage to address it with them privately and respectfully, rather than complaining about them to others.
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

export default LawOfLoyaltyPage;
