import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfDebtPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Debt</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Avoid consumer debt when possible. It is a mortgage on your future income and freedom.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Debt is the slavery of the free."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Publilius Syrus</footer>
          </blockquote>
          <p>
            The Law of Debt states that borrowing money for consumer goods (things that lose value) is a major obstacle to building wealth. When you take on consumer debt, you are promising to pay your future income to a lender, plus interest. This reduces your ability to save and invest, and traps you in a cycle of payments. While some debt can be a useful tool (like a mortgage for a home or a loan for a business), high-interest consumer debt is a wealth-destroying force.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Good Debt vs. Bad Debt</h2>
          <p>It's important to distinguish between different types of debt:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>"Good" Debt (Potentially):</strong> This is debt used to purchase an asset that is likely to increase in value or generate income, such as a mortgage on a reasonably-priced home or a student loan for a high-return career.
            </li>
            <li>
                <strong>"Bad" Debt:</strong> This is high-interest debt used to purchase depreciating assets or consumables. This includes credit card debt for vacations, car loans for expensive vehicles, and "buy now, pay later" services for consumer goods.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Manage and Avoid Bad Debt</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Live Below Your Means:</strong> The best way to avoid debt is to not need it. By spending less than you earn, you can save for large purchases instead of financing them (see Law of Saving).
            </li>
            <li>
              <strong>Use the "Debt Snowball" or "Debt Avalanche" Method:</strong> If you have existing debt, make a plan to pay it off aggressively. The Snowball method involves paying off the smallest debts first for psychological wins. The Avalanche method involves paying off the highest-interest debts first to save the most money.
            </li>
            <li>
              <strong>Build an Emergency Fund:</strong> A primary reason people go into credit card debt is to cover unexpected expenses. Having 3-6 months of living expenses saved in an emergency fund prevents this.
            </li>
             <li>
              <strong>Practice Delayed Gratification:</strong> Instead of buying something you want immediately on credit, challenge yourself to save up for it. By the time you have the cash, you may find you don't even want it anymore.
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

export default LawOfDebtPage;
