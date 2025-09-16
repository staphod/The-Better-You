import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartbeatIcon } from '@/components/icons/ModuleIcons';

const LossAversionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <HeartbeatIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Loss Aversion</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Why the pain of losing is psychologically about twice as powerful as the pleasure of gaining.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is Loss Aversion?</h2>
          <p>
            Identified by psychologists Daniel Kahneman and Amos Tversky in their work on Prospect Theory, Loss Aversion is a cognitive bias that describes our tendency to prefer avoiding losses to acquiring equivalent gains. In other words, losing $100 feels much worse than finding $100 feels good. This asymmetry in our emotional response has a profound impact on our decision-making, often leading us to make irrational choices to avoid a potential loss.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Loss Aversion in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Investing:</strong> An investor might hold onto a losing stock for far too long, hoping it will "come back" to what they paid for it. They are trying to avoid crystallizing the loss, even if selling and reinvesting elsewhere would be the rational choice.
            </li>
            <li>
                <strong>"Sunk Cost" Fallacy:</strong> You continue to pour time, money, or effort into a failing project because you've already invested so much. Giving up would mean accepting the "loss" of your past efforts, so you continue, often making the situation worse.
            </li>
            <li>
                <strong>Negotiations:</strong> People will fight harder to keep something they already have (e.g., a current salary or benefit) than they will to gain something new of equal value.
            </li>
            <li>
                <strong>Marketing:</strong> "Don't miss out!" and "Limited time offer!" are phrases that trigger our loss aversion. They frame the choice as avoiding a loss rather than making a gain.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Overcome Loss Aversion</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Reframe the Decision:</strong> Instead of focusing on what you might lose, consciously reframe the situation to focus on what you might gain. Instead of "selling this stock at a loss," think "freeing up this capital for a better opportunity."
            </li>
            <li>
              <strong>Use a "Zero-Based" Approach:</strong> For existing commitments (jobs, investments, projects), ask yourself: "If I weren't already involved in this, would I choose to start it today?" If the answer is no, your loss aversion is likely keeping you stuck. This helps you ignore sunk costs.
            </li>
            <li>
              <strong>Set Pre-Determined Rules:</strong> In volatile situations like investing, set your rules before you start. For example, "I will sell this stock if it drops by 15%." This automates the decision and removes the emotional pain of the moment.
            </li>
             <li>
              <strong>Think in Probabilities:</strong> Instead of focusing on the single outcome of a "loss," consider the range of possible outcomes and their probabilities. This more analytical approach can help temper the emotional reaction to a potential negative result.
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/models" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Mental Models
          </Link>
      </div>
    </div>
  );
};

export default LossAversionPage;
