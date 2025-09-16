import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';

const LawOfSmallMattersPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Small Matters</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Take care of the small coins. Seemingly insignificant expenses add up to a fortune over time.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Beware of little expenses. A small leak will sink a great ship."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Benjamin Franklin</footer>
          </blockquote>
          <p>
            The Law of Small Matters states that your financial success is often determined not by the large, obvious expenses, but by your control over the small, recurring, and often unnoticed ones. It's easy to focus on big costs like rent or a car payment, but the cumulative effect of daily coffees, subscription services, and impulse buys can be just as damaging to your budget. This is the Law of Compounding Decisions applied to your spending.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The "Latte Factor":</strong> A term popularized by David Bach, this illustrates how a $5 daily coffee habit costs over $1,800 a year. Invested over 30 years, that small daily expense could be worth over $100,000.
            </li>
            <li>
                <strong>Subscription Creep:</strong> Multiple small monthly subscriptions for streaming, apps, and software can easily add up to a significant annual expense without you realizing it.
            </li>
            <li>
                <strong>Convenience Costs:</strong> Small, regular expenses like food delivery fees, convenience store markups, and ATM charges can silently drain hundreds or thousands of dollars from your budget over time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Master the Small Matters</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Track Your Spending Religiously:</strong> Use a budgeting app or a simple notebook to track every single purchase for a month. This will shine a bright light on where your "small leaks" are.
            </li>
            <li>
              <strong>Conduct a Subscription Audit:</strong> Once a quarter, review all your recurring subscriptions and cancel any that you are not using regularly or that don't provide significant value.
            </li>
            <li>
              <strong>Plan Ahead to Avoid Convenience Costs:</strong> Pack your own lunch, make coffee at home, and plan your errands to avoid last-minute, expensive purchases.
            </li>
             <li>
              <strong>Implement a 24-Hour Rule:</strong> For any non-essential purchase over a certain amount (e.g., $50), wait 24 hours before buying it. This simple rule helps to curb impulse spending on small to medium-sized items.
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

export default LawOfSmallMattersPage;
