import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfCautionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Caution</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Protect your money. Be wary of 'get rich quick' schemes and investments that seem too good to be true.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Warren Buffett</footer>
          </blockquote>
          <p>
            The Law of Caution states that the preservation of your capital is more important than the pursuit of spectacular returns. It takes years of diligent saving and investing to build a nest egg, but it can be lost very quickly through a single reckless decision. This law urges you to approach financial decisions with a healthy dose of skepticism, to do your own research, and to avoid situations where a total loss is a likely outcome.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>"Get Rich Quick" Schemes:</strong> Any investment that promises unusually high returns with little or no risk is almost certainly a scam. A cautious investor understands that risk and return are related.
            </li>
            <li>
                <strong>Fad Investments:</strong> A cautious investor avoids pouring all their money into the latest hot trend (like a speculative cryptocurrency or "meme stock") without understanding the underlying fundamentals. They are wary of hype.
            </li>
            <li>
                <strong>Financial Literacy:</strong> Caution involves taking responsibility for your own financial education. It means not blindly trusting a financial advisor or a "guru" without understanding the investments they are recommending for yourself.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Financial Caution</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>If It Sounds Too Good to Be True, It Is:</strong> Make this your default mantra. There is no secret to getting rich overnight.
            </li>
            <li>
              <strong>Understand What You Are Investing In:</strong> Never invest in a business or asset you do not understand. If you can't explain it simply, you shouldn't put your money in it (see Circle of Competence).
            </li>
            <li>
              <strong>Diversify Your Investments:</strong> Spreading your money across a range of different assets is the most effective way to protect yourself from a catastrophic loss in any single one.
            </li>
             <li>
              <strong>Think in Terms of Risk vs. Reward:</strong> Before making any financial decision, ask yourself: "What is the absolute worst-case scenario here? Can I afford to lose my entire investment?" If the answer is no, the risk is too high.
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

export default LawOfCautionPage;
