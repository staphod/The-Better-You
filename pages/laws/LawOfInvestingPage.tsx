import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfInvestingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Investing</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Invest for the future. Put your money to work for you so that you don't have to work for money forever.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Someone's sitting in the shade today because someone planted a tree a long time ago."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Warren Buffett</footer>
          </blockquote>
          <p>
            The Law of Investing states that the path to true financial independence is not just saving money, but putting that saved money to work. Saving protects your money from being spent, but investing allows it to grow. By purchasing assets (like stocks, bonds, or real estate) that have the potential to increase in value or produce income, you are essentially buying a piece of the future economy. Over time, the growth of these assets can far outpace your ability to save through your labor alone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Fighting Inflation:</strong> Money kept in a simple savings account loses purchasing power over time due to inflation. Investing in assets that grow faster than the rate of inflation is essential to building real wealth.
            </li>
            <li>
                <strong>Compound Growth:</strong> Investing is the primary vehicle for the Law of Compounding. The returns your investments generate are reinvested, and then those returns start generating their own returns, leading to exponential growth.
            </li>
            <li>
                <strong>Passive Income:</strong> Some investments, like dividend-paying stocks or rental properties, can generate a stream of income that is not dependent on your active work. This is a key component of financial freedom.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Prudent Investing</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start Early:</strong> Because of the power of compounding, the most important factor in investing is time. The earlier you start, even with small amounts, the more time your money has to grow.
            </li>
            <li>
              <strong>Be Consistent:</strong> Make investing a regular, automatic habit, just like paying yourself first. Consistently investing a set amount each month (a strategy known as dollar-cost averaging) is more effective than trying to "time the market."
            </li>
            <li>
              <strong>Diversify:</strong> Don't put all your eggs in one basket. Spread your investments across different types of assets (stocks, bonds) and industries to reduce risk. For most people, a low-cost, diversified index fund is an excellent starting point.
            </li>
             <li>
              <strong>Think Long-Term:</strong> Do not invest money you will need in the next five years. The stock market is volatile in the short term but has historically trended upward over the long term. A long time horizon allows you to ride out the ups and downs.
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

export default LawOfInvestingPage;
