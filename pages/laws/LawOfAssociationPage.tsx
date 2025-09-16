import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const LawOfAssociationPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Association</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Choose good friends. You are the average of the five people you spend the most time with.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"You are the average of the five people you spend the most time with."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Jim Rohn</footer>
          </blockquote>
          <p>
            The Law of Association states that you are profoundly influenced by the people with whom you regularly associate. Their attitudes, habits, beliefs, and expectations will inevitably rub off on you over time. This influence can either lift you up or drag you down. Therefore, one of the most important decisions you can make for your personal growth is to be highly intentional about the company you keep.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Health and Fitness:</strong> If your closest friends are active and eat healthy, you are far more likely to adopt similar habits. Conversely, if your social circle revolves around sedentary activities and unhealthy food, it will be much harder to maintain a healthy lifestyle.
            </li>
            <li>
                <strong>Income and Career:</strong> Your income and level of ambition will often gravitate toward the average of your peer group. Surrounding yourself with ambitious, successful people will raise your own standards and expose you to new opportunities.
            </li>
            <li>
                <strong>Mindset:</strong> If you associate with optimistic, growth-oriented people, you will start to adopt a more positive outlook. If you spend your time with cynical and complaining individuals, their negativity will inevitably affect you.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Curate Your Inner Circle</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Conduct an Association Audit:</strong> Make a list of the five people you spend the most time with. For each person, consider: Do they inspire you? Do they challenge you to be better? Are they positive and supportive?
            </li>
            <li>
              <strong>Seek Out Positive Associations:</strong> Intentionally join groups, clubs, or communities where you can meet people who embody the qualities you wish to develop. This could be a mastermind group, a gym, a book club, or an online community.
            </li>
            <li>
              <strong>Limit Negative Associations:</strong> You may need to lovingly create distance from people who consistently drain your energy, belittle your ambitions, or are mired in negativity. This doesn't have to be a dramatic confrontation, but a gradual reallocation of your time and energy.
            </li>
             <li>
              <strong>Find Mentors and Role Models:</strong> You don't have to know people personally to associate with them. You can "associate" with the greatest minds in history by reading their books and studying their lives (see Law of Modeling).
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

export default LawOfAssociationPage;
