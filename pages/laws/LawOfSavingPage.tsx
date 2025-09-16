import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfSavingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Saving</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Spend less than you earn. This simple habit is the non-negotiable foundation of financial freedom.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Annual income twenty pounds, annual expenditure nineteen nineteen and six, result happiness. Annual income twenty pounds, annual expenditure twenty pounds ought and six, result misery."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Charles Dickens, "David Copperfield"</footer>
          </blockquote>
          <p>
            The Law of Saving is the first and most fundamental principle of personal finance. It states that you must live on less than you make and save the difference. It doesn't matter how high your income is; if your expenses are higher, you will always be in a state of financial stress. Creating a gap between your income and your expenses is the only way to build wealth, achieve financial security, and gain control over your life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Building an Emergency Fund:</strong> Saving allows you to build a cash cushion to handle unexpected expenses (like a car repair or medical bill) without going into debt.
            </li>
            <li>
                <strong>Investing for the Future:</strong> The money you save is the raw material for your investments. You cannot invest what you do not save.
            </li>
            <li>
                <strong>Reducing Financial Stress:</strong> Knowing you have savings provides a profound sense of security and peace of mind. It frees you from living paycheck to paycheck.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice the Law of Saving</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Track Your Spending:</strong> You cannot control what you don't measure. For one month, track every single dollar you spend. This awareness is the first step to identifying areas where you can cut back.
            </li>
            <li>
              <strong>Create a Budget:</strong> A budget is not a restriction; it's a plan for your money. Allocate your income to different categories (needs, wants, savings) to ensure you are spending less than you earn.
            </li>
            <li>
              <strong>Pay Yourself First:</strong> Before you pay any bills or spend on anything else, set aside a portion of your income for savings. The best way to do this is to automate it (see Law of Pay Yourself First).
            </li>
             <li>
              <strong>Distinguish Between Needs and Wants:</strong> Be honest with yourself about what is a genuine need and what is a discretionary want. Consciously reduce your spending on wants to increase your savings rate.
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

export default LawOfSavingPage;
