import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BookOpenIcon } from '@/components/icons/ModuleIcons';

const LawOfFinancialEducationPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BookOpenIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Financial Education</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Learn how money works. Your financial intelligence is your single greatest asset.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Robert Kiyosaki</footer>
          </blockquote>
          <p>
            The Law of Financial Education states that your ability to build wealth is directly proportional to your understanding of money. Many people work hard for their money, but few take the time to learn how money works. Financial literacy—understanding topics like budgeting, saving, investing, debt, and taxes—is not an optional skill for the wealthy; it is a fundamental requirement for achieving financial security at any income level.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Asset vs. Liability:</strong> A financially educated person understands the difference between an asset (something that puts money in your pocket, like a dividend-paying stock) and a liability (something that takes money out of your pocket, like a car loan). They focus their life on acquiring assets.
            </li>
            <li>
                <strong>Understanding Compound Interest:</strong> They understand that starting to invest early is more important than the amount they invest, because they grasp the power of compounding.
            </li>
            <li>
                <strong>Tax Efficiency:</strong> They learn about tax-advantaged retirement accounts (like a 401(k) or IRA) and use them to maximize their long-term growth.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Increase Your Financial IQ</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Read the Classics:</strong> Start by reading foundational books on personal finance like "The Richest Man in Babylon," "The Total Money Makeover," and "The Simple Path to Wealth."
            </li>
            <li>
              <strong>Follow Reputable Sources:</strong> Follow reputable financial blogs, podcasts, and news sources to stay informed. Be wary of sources that promote hype and "get rich quick" schemes.
            </li>
            <li>
              <strong>Master Your Own Numbers:</strong> The best education starts with your own finances. Create a budget, track your net worth, and understand where your money is going.
            </li>
             <li>
              <strong>Learn by Doing:</strong> Open a low-cost investment account and start investing small, regular amounts into a diversified index fund. The experience of being an investor is a powerful teacher.
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

export default LawOfFinancialEducationPage;
