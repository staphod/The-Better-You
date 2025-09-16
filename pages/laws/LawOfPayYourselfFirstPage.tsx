import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { TrendingUpIcon } from '@/components/icons/StatusIcons';

const LawOfPayYourselfFirstPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <TrendingUpIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Pay Yourself First</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Save before you spend. Treat your savings as the most important bill you have to pay each month.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A part of all you earn is yours to keep."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- George S. Clason, "The Richest Man in Babylon"</footer>
          </blockquote>
          <p>
            The Law of Pay Yourself First is a simple but revolutionary shift in financial mindset. Most people earn money, pay all their bills and expenses, and then try to save whatever is left over—which is often nothing. This law flips the script: as soon as you receive your income, the very first "bill" you pay is to your future self by transferring a set amount into your savings or investment accounts. You then live on the rest. This guarantees that you are always saving and building wealth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Automated Savings:</strong> Setting up an automatic transfer from your checking account to your savings account on payday is the perfect execution of this law. It happens without any willpower or discipline required from you.
            </li>
            <li>
                <strong>Retirement Contributions:</strong> A 401(k) or similar workplace retirement plan where contributions are deducted from your paycheck before you even see it is a powerful application of paying yourself first.
            </li>
            <li>
                <strong>Adapting Your Lifestyle:</strong> By removing your savings from your spendable income first, you naturally adjust your lifestyle to fit the remaining amount, forcing you to live within your means.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Pay Yourself First</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Determine Your Savings Goal:</strong> Decide on a percentage of your income you want to save (e.g., 10%, 15%, 20%). If you're just starting, even 1% is better than nothing.
            </li>
            <li>
              <strong>Automate the Transfer:</strong> Go to your bank's website and set up a recurring, automatic transfer from your checking account to a separate savings or investment account. Schedule this transfer for payday.
            </li>
            <li>
              <strong>Make It Hard to Access:</strong> Keep your savings in a separate account, ideally at a different bank, to reduce the temptation to dip into it for non-emergencies.
            </li>
             <li>
              <strong>Increase it Over Time:</strong> Every time you get a raise or pay off a debt, increase the amount you are automatically saving.
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

export default LawOfPayYourselfFirstPage;
