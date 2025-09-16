import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawOfBalancePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Balance</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Balance work and play. A truly successful life requires harmony between effort and ease, between ambition and contentment.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Never get so busy making a living that you forget to make a life."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Dolly Parton</footer>
          </blockquote>
          <p>
            The Law of Balance states that a fulfilling and sustainable life is achieved not by maximizing one area at the expense of all others, but by finding a dynamic harmony between the key dimensions of life: work, health, relationships, and personal renewal. Relentless focus on a single area, such as a career, can lead to impressive results in that domain, but often results in burnout and regret in the areas that were neglected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Work-Life Integration:</strong> Instead of seeing work and life as opposing forces, a balanced person sees them as interconnected parts of a whole. They understand that rest and strong relationships make them more effective at work, and meaningful work contributes to a fulfilling life.
            </li>
            <li>
                <strong>The Four Burners Theory:</strong> This analogy suggests your life is like a stove with four burners: family, friends, health, and work. To be truly successful, you have to cut off one of the burners. To be *really* successful, you have to cut off two. The Law of Balance challenges this, suggesting that true success is about learning to keep all four burners at a sustainable flame.
            </li>
            <li>
                <strong>The Seasons of Life:</strong> Balance is not about giving equal time to every area every single day. It's about recognizing that life has seasons. There may be a season of intense work on a project, followed by a season of focusing on family and travel. The key is to be intentional about these shifts.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Balance</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Define Your "Big Rocks":</strong> Identify the 3-5 most important areas of your life (e.g., career, health, family, learning). These are your non-negotiables.
            </li>
            <li>
              <strong>Schedule Your Priorities:</strong> Schedule time for all your big rocks in your weekly calendar, not just your work tasks. Block out time for exercise, date nights, and personal learning as if they are unbreakable appointments.
            </li>
            <li>
              <strong>Practice Presence:</strong> When you are at work, be fully at work. When you are with your family, be fully with your family. Balance is improved not just by managing your time, but by managing your attention (see Law of Presence).
            </li>
             <li>
              <strong>Set Boundaries:</strong> Learn to say "no" to things that are not aligned with your priorities. Have clear start and end times for your workday. Protect your time for rest and renewal.
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

export default LawOfBalancePage;
