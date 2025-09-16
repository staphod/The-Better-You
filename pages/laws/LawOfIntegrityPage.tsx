import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfIntegrityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Integrity</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Integrity is the foundation of self-respect. It is the quality of being honest and having strong moral principles.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Oprah Winfrey</footer>
          </blockquote>
          <p>
            The Law of Integrity states that true peace of mind and self-respect come from the perfect alignment of your values, thoughts, and actions. The word "integrity" comes from the same root as "integer," meaning whole or complete. A person of integrity is whole—there is no gap between the person they claim to be and the person they are in their actions. This internal consistency is the bedrock of character.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Walking the Talk:</strong> A manager with integrity doesn't just talk about the company's values; they live them, especially when it's difficult.
            </li>
            <li>
                <strong>Honesty Under Pressure:</strong> A person of integrity will tell the truth even when a lie would be easier or more profitable.
            </li>
            <li>
                <strong>Keeping Promises to Yourself:</strong> Integrity is not just about how you treat others; it's also about honoring the commitments you make to yourself, like sticking to a diet or a personal goal.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live with Integrity</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Clarify Your Values:</strong> You cannot live in alignment with your values if you don't know what they are. Take the time to write down the principles that are most important to you.
            </li>
            <li>
              <strong>Listen to Your Conscience:</strong> Your conscience is your internal integrity compass. If an action feels wrong, it probably is. Learn to trust that inner voice.
            </li>
            <li>
              <strong>Be the Same Person in All Situations:</strong> Strive to be the same person when you are with your boss, your family, or completely alone. Integrity means being whole and consistent, not wearing different masks for different audiences.
            </li>
             <li>
              <strong>Choose the Hard Right Over the Easy Wrong:</strong> In moments of decision, consciously choose the path that aligns with your values, even if it requires more effort or short-term sacrifice (see Law of Right Action).
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

export default LawOfIntegrityPage;
