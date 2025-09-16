import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfTrustPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Trust</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Build trust above all else. It is the foundation of all meaningful influence and relationships.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Trust is the glue of life. It’s the most essential ingredient in effective communication. It’s the foundational principle that holds all relationships."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Stephen Covey</footer>
          </blockquote>
          <p>
            The Law of Trust states that the level of trust you command determines the speed and effectiveness of your interactions. When trust is high, communication is easy, collaboration is seamless, and progress is fast. When trust is low, every action is second-guessed, communication is guarded, and progress grinds to a halt. Trust is the emotional currency of all relationships, both personal and professional.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business:</strong> A customer who trusts a brand will buy from them repeatedly without hesitation. A team that trusts its leader will be more engaged and innovative.
            </li>
            <li>
                <strong>Relationships:</strong> In a friendship or marriage, trust allows for vulnerability and intimacy. Without it, the relationship is superficial and fragile.
            </li>
            <li>
                <strong>"The Speed of Trust":</strong> As Stephen M.R. Covey explains, high trust creates a "dividend." Things get done faster and cheaper. Low trust imposes a "tax." Everything takes longer and requires more verification and oversight.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Build and Maintain Trust</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Behave with Integrity:</strong> Do what you say you will do. Your actions must be consistent with your words. This is the absolute foundation (see Law of Promise Keeping).
            </li>
            <li>
              <strong>Demonstrate Competence:</strong> People trust those who are good at what they do. Consistently deliver high-quality results in your area of responsibility.
            </li>
            <li>
              <strong>Be Transparent and Honest:</strong> Communicate openly. Don't hide bad news or spin the truth. People trust the truth, even when it's difficult.
            </li>
             <li>
              <strong>Show You Care:</strong> Genuinely care about the well-being of others. Listen to them, support them, and act in their best interests. Trust is built on the belief that you have their back.
            </li>
             <li>
              <strong>Extend Trust to Others:</strong> To be trusted, you must be willing to trust others. Empower your team and avoid micromanaging. This shows you have confidence in them, which encourages them to be trustworthy in return.
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

export default LawOfTrustPage;
