import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BicycleIcon } from '@/components/icons/ModuleIcons';

const LawOfMomentumPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BicycleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Momentum (The Bicycle Principle)</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          A bicycle maintains its balance as long as it's in motion. Stability and progress in life come from continuous action.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Life is like riding a bicycle. To keep your balance, you must keep moving."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein</footer>
          </blockquote>
          <p>
            The Law of Momentum uses the powerful metaphor of a bicycle to explain a fundamental truth about progress. A bicycle is inherently unstable; it's only when you start pedaling and moving forward that it becomes a stable and efficient mode of transport. Similarly, in our lives, careers, and personal growth, balance and stability are not static states to be achieved and then held. They are the dynamic results of consistent, forward action. Inertia is the enemy of balance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Principle in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Career Development:</strong> A professional who is actively learning new skills, taking on challenging projects, and networking (pedaling) feels more secure and finds more opportunities than someone who is passively coasting in their role (stopped). The one who stops moving is the first to become obsolete.
            </li>
            <li>
                <strong>Habit Formation:</strong> The hardest part of a new habit, like going to the gym, is getting started. Once you're in motion, the momentum from previous workouts makes it easier to keep going. But if you stop for a week, the bike "wobbles," and it becomes hard to start again.
            </li>
            <li>
                <strong>Mental Health:</strong> When feeling stuck in a rut or a depressive state, the most common advice is to take one small action—go for a walk, wash one dish. This is the first push of the pedal. The motion itself, however small, can help break the inertia of stagnation and begin to restore mental balance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Keep Your Bicycle Moving</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Focus on Starting, Not Finishing:</strong> The biggest hurdle is the first push of the pedal. Don't worry about the entire journey. Just focus on taking the first small, manageable step.
            </li>
            <li>
              <strong>Embrace Consistency Over Intensity:</strong> Gentle, consistent pedaling is more effective for long-term travel than occasional, frantic sprints followed by long periods of stopping. Small, daily actions build unstoppable momentum.
            </li>
            <li>
              <strong>When You Feel Wobbly, Pedal:</strong> When you feel stuck, anxious, or unstable, the solution is almost always action. Don't overthink it. Take a small step related to your goals. The feeling of motion is often enough to restore your sense of balance.
            </li>
             <li>
              <strong>Understand that Progress is a Direction, Not a Destination:</strong> You never "arrive" at a state of perfect balance. Balance is something you create every day through your forward motion. The goal is to keep pedaling in the right direction.
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

export default LawOfMomentumPage;
