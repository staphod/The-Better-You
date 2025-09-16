import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfServicePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Service</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Wealth comes from service. Your income is directly proportional to the value you provide to others.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Strive not to be a success, but rather to be of value."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein</footer>
          </blockquote>
          <p>
            The Law of Service states that your financial compensation is a direct reflection of the value of your service to others. Money is a medium of exchange; it flows to where value is created. Instead of asking, "How can I make more money?", a more powerful question is, "How can I be of more service?" By focusing on solving problems, meeting needs, and adding value to the lives of others, financial success becomes a natural byproduct.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Successful Businesses:</strong> The most successful companies are those that solve a significant problem for a large number of people. Their profit is a measure of the value they have created in the marketplace.
            </li>
            <li>
                <strong>Career Advancement:</strong> The employee who gets promoted is the one who consistently goes above and beyond, solves problems for their boss and their team, and makes themselves indispensable. They focus on serving the goals of the organization.
            </li>
            <li>
                <strong>The Value Equation:</strong> Your value is determined by the quality of your work, the quantity of your work, and the irreplaceability of your contribution. To earn more, you must increase one or more of these factors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Increase Your Service</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Always Add More Value Than You Take in Payment:</strong> Make it your mission to over-deliver in every transaction. This builds a reputation for excellence and attracts more opportunities.
            </li>
            <li>
              <strong>Focus on the Customer/Employer:</strong> Constantly think about the needs of your customers or your employer. How can you make their life easier? What is their biggest problem, and how can you help solve it?
            </li>
            <li>
              <strong>Improve Your Skills:</strong> The more skilled you are, the more value you can provide. Commit to continuous learning and mastery in your chosen field (see Law of Continuous Learning).
            </li>
             <li>
              <strong>Look for Bigger Problems to Solve:</strong> The size of your reward is determined by the size of the problem you solve. If you want to make a bigger impact (and a bigger income), look for bigger, more challenging problems to work on.
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

export default LawOfServicePage;
