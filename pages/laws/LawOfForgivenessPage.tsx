import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfForgivenessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Forgiveness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Forgive and let go. Holding a grudge is like drinking poison and expecting the other person to die.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The weak can never forgive. Forgiveness is the attribute of the strong."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Mahatma Gandhi</footer>
          </blockquote>
          <p>
            The Law of Forgiveness states that the act of forgiving others is primarily a gift to yourself. It is the conscious decision to release the burden of anger, resentment, and the desire for revenge. Holding onto these negative emotions chains you to the past and harms your mental and physical health. Forgiveness does not mean condoning the hurtful action or necessarily reconciling with the person; it means freeing yourself from its emotional control over you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Mental Health:</strong> Studies have shown that practicing forgiveness can lead to reduced anxiety, depression, and stress, as well as improved self-esteem.
            </li>
            <li>
                <strong>Healing Relationships:</strong> While not always possible, forgiveness is the only path to genuine reconciliation after a deep hurt. It allows both parties to move forward without the weight of the past.
            </li>
            <li>
                <strong>Personal Freedom:</strong> When you forgive someone, you take back your power. You are no longer allowing their past actions to dictate your present emotions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Forgiveness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Acknowledge Your Pain:</strong> Forgiveness does not mean pretending you weren't hurt. Acknowledge the validity of your feelings of anger and pain.
            </li>
            <li>
              <strong>Make a Conscious Decision to Forgive:</strong> Forgiveness is a choice, not a feeling. You may not feel like forgiving someone, but you can make the intellectual decision to begin the process for your own well-being.
            </li>
            <li>
              <strong>Try to Understand, Not Excuse:</strong> Attempt to understand the other person's perspective or what might have led to their actions. This is not about excusing their behavior, but about depersonalizing the hurt.
            </li>
             <li>
              <strong>Release the Hope for a Different Past:</strong> Acknowledge that you cannot change what happened. Forgiveness is about accepting the past as it is and choosing to focus your energy on creating a better present and future.
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

export default LawOfForgivenessPage;
