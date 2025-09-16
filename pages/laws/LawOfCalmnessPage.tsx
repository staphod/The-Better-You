import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { OceanIcon } from '@/components/icons/ModuleIcons';

const LawOfCalmnessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <OceanIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Calmness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Solve problems calmly. The leader's composure sets the emotional tone for the entire team.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"You don't have to control your thoughts. You just have to stop letting them control you."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Dan Millman</footer>
          </blockquote>
          <p>
            The Law of Calmness states that the ability to remain calm and composed in the face of crisis, pressure, and chaos is a defining characteristic of effective leadership and personal mastery. Panic is contagious, but so is calm. A calm leader thinks more clearly, makes better decisions, and inspires confidence in those around them. Reacting emotionally to a problem only adds a second problem—your own emotional state—to the situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Emergency Responders:</strong> Paramedics, firefighters, and surgeons are trained to operate with a high degree of calmness under extreme pressure. Their ability to remain detached and focused is essential to saving lives.
            </li>
            <li>
                <strong>High-Stakes Negotiation:</strong> The negotiator who can remain calm and patient, without getting emotionally triggered, is the one who holds the power and is more likely to achieve a favorable outcome.
            </li>
            <li>
                <strong>Parenting:</strong> When a child is having a tantrum, a parent who reacts with their own anger only escalates the situation. A parent who can remain a calm, non-anxious presence helps the child regulate their own emotions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Calmness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice the Pause:</strong> When you feel a strong emotional reaction coming on, practice pausing before you speak or act. Take one deep breath. This small gap is often enough to move from a knee-jerk reaction to a considered response.
            </li>
            <li>
              <strong>Focus on What You Can Control:</strong> In a crisis, much is outside your control. Instead of panicking about those things, focus all your energy on the one or two immediate actions you *can* control (see Stoicism).
            </li>
            <li>
              <strong>Prepare for Crises in Advance:</strong> Calmness in a crisis is often a result of preparation. Think through potential problems and have contingency plans in place. This reduces uncertainty and the likelihood of panic.
            </li>
             <li>
              <strong>Develop a Mindfulness Practice:</strong> Regular meditation trains your brain to observe your thoughts and feelings without being controlled by them. This builds the "mental muscle" for remaining calm in difficult situations.
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

export default LawOfCalmnessPage;
