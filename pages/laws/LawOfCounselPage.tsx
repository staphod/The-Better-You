import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfCounselPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Counsel</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Ask for advice. Seek input from those with more experience and wisdom than you.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Plans fail for lack of counsel, but with many advisers they succeed."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Proverbs 15:22</footer>
          </blockquote>
          <p>
            The Law of Counsel states that you can dramatically improve the quality of your decisions and avoid costly mistakes by seeking the advice of wise and experienced people. No single person has a monopoly on good ideas or a complete view of a situation. By humbly seeking counsel, you can benefit from the accumulated knowledge, different perspectives, and past mistakes of others.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business Mentorship:</strong> A young entrepreneur who seeks advice from a seasoned business owner can avoid common startup pitfalls related to finance, marketing, and scaling.
            </li>
            <li>
                <strong>Mastermind Groups:</strong> A group of peers who meet regularly to advise each other on their challenges can collectively solve problems that would be insurmountable for an individual.
            </li>
            <li>
                <strong>Personal Decisions:</strong> Before making a major life decision, talking it through with a trusted friend, family member, or therapist can help you see blind spots and consider alternatives you hadn't thought of.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Seek Counsel Effectively</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Choose Your Counselors Wisely:</strong> Seek advice from people who have achieved the results you want to achieve. Don't take financial advice from someone who is broke, or relationship advice from someone in a toxic partnership.
            </li>
            <li>
              <strong>Be Prepared and Specific:</strong> Don't just ask for vague advice. Do your own thinking first, define your problem clearly, and come with specific questions. This shows respect for the other person's time.
            </li>
            <li>
              <strong>Listen with an Open Mind:</strong> When you ask for advice, your goal should be to listen and understand, not to defend your current position. Be genuinely open to hearing things you might not want to hear.
            </li>
             <li>
              <strong>Synthesize, Don't Just Obey:</strong> Gather counsel from multiple sources, but remember that you are ultimately responsible for the final decision. Synthesize the advice you receive with your own judgment and intuition.
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

export default LawOfCounselPage;
