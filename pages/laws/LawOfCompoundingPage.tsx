import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfCompoundingPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Compounding</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Money (and effort) grows with patience. Compound interest is the eighth wonder of the world.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein (attributed)</footer>
          </blockquote>
          <p>
            The Law of Compounding states that growth is not linear, but exponential. It is the process where the earnings from an asset, from either capital gains or interest, are reinvested to generate additional earnings over time. This growth occurs because the investment will generate earnings from both its initial principal and the accumulated earnings from preceding periods. Compounding is the engine that drives the Law of Accumulation and the Law of Investing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Retirement Savings:</strong> A 25-year-old who invests $300 a month could have over a million dollars by age 65, while a 35-year-old who invests the same amount will have less than half of that. The first ten years of compounding did most of the heavy lifting.
            </li>
            <li>
                <strong>Knowledge:</strong> The knowledge you gain on a subject compounds. The more you know, the easier it is to learn new things in that area because you have a larger base of existing knowledge to connect it to.
            </li>
            <li>
                <strong>Debt (Negative Compounding):</strong> Credit card debt is a powerful example of compounding working against you. The interest charges are added to your balance, and then you pay interest on the interest, making it incredibly difficult to pay off.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Harness the Power of Compounding</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start as Early as Possible:</strong> Time is the most critical ingredient for compounding. The longer your money or effort has to grow, the more dramatic the results will be.
            </li>
            <li>
              <strong>Be Unbreakably Consistent:</strong> Make regular, automatic contributions to your investments or your learning habits. Consistency feeds the compounding machine.
            </li>
            <li>
              <strong>Be Patient and Don't Interrupt It:</strong> The most significant growth from compounding happens in the later years. Avoid the temptation to withdraw your investments during market downturns or to give up on a habit before you see results. Let the process work.
            </li>
             <li>
              <strong>Avoid Negative Compounding:</strong> Be ruthless about eliminating high-interest debt and small, daily bad habits. They are compounding against you and silently destroying your future.
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

export default LawOfCompoundingPage;
