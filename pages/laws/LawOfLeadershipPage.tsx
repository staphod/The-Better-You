import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { CrownIcon } from '@/components/icons/ModuleIcons';

const LawOfLeadershipPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <CrownIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Leadership</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Lead by example. Your actions speak so loudly that people cannot hear what you are saying.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A leader is one who knows the way, goes the way, and shows the way."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- John C. Maxwell</footer>
          </blockquote>
          <p>
            The Law of Leadership states that true influence is earned through action, not granted by title. The most effective leaders are those who embody the standards they expect from others. They don't just give orders; they demonstrate the desired behavior. People are far more inspired by what a leader does than by what a leader says. Leading by example builds trust, credibility, and a culture of integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>In the Workplace:</strong> A manager who asks their team to work late but leaves at 5 PM sharp will have a resentful team. A manager who stays in the trenches with their team during a crisis earns their loyalty and respect.
            </li>
            <li>
                <strong>In Parenting:</strong> A parent who tells their children to read more but spends all their free time on their phone will struggle to raise readers. A parent who is seen enjoying books models the desired behavior.
            </li>
            <li>
                <strong>In Personal Development:</strong> If you want to encourage a friend to adopt a healthier lifestyle, the most persuasive argument is for them to see you consistently eating well and exercising, and the positive results it brings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Lead by Example</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Never Ask Someone to Do Something You're Unwilling to Do:</strong> Show that you are willing to get your hands dirty and share in the team's challenges. This demonstrates solidarity and respect.
            </li>
            <li>
              <strong>Embody Your Values:</strong> If you value punctuality, be the first to arrive. If you value hard work, be the hardest worker. If you value honesty, be transparent in your communications.
            </li>
            <li>
              <strong>Be Consistent:</strong> Your example is most powerful when it is consistent over time. People need to see that your actions align with your words day in and day out.
            </li>
             <li>
              <strong>Admit Your Mistakes:</strong> Part of leading by example is showing how to handle failure. When you make a mistake, own it, apologize, and demonstrate how to learn from it (see Law of Responsibility).
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

export default LawOfLeadershipPage;
