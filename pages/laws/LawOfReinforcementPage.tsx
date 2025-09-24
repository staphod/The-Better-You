import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUpIcon } from '@/components/icons/StatusIcons';

const LawOfReinforcementPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <TrendingUpIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Reinforcement</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Celebrate small wins. A behavior that is rewarded is a behavior that is repeated.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Behavior that is reinforced tends to be repeated. Behavior that is not reinforced tends to die out or be extinguished."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- B.F. Skinner</footer>
          </blockquote>
          <p>
            A foundational principle of behavioral psychology, the Law of Reinforcement states that when a behavior is followed by a satisfying consequence (a reward), it is more likely to be repeated in the future. This is the mechanism behind habit formation. To build a new, difficult habit, you must find a way to reward yourself immediately after performing the action. This creates a positive feedback loop that makes you want to do it again.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Habit Formation:</strong> James Clear's "Atomic Habits" emphasizes making habits satisfying. If you want to build an exercise habit, the reward isn't the long-term health benefit (which is too delayed), but an immediate, satisfying ritual afterward, like a delicious protein shake or a relaxing hot shower.
            </li>
            <li>
                <strong>Dog Training:</strong> When training a dog, you give it a treat (a reinforcer) immediately after it performs the desired command. The dog quickly learns to associate the action with the reward and repeats it.
            </li>
            <li>
                <strong>Video Games:</strong> Games are masters of reinforcement. They provide a constant stream of rewards—points, badges, new items, leveling up—for taking small actions, which keeps players engaged and wanting to continue.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Use Reinforcement for Your Goals</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Reward the Effort, Not Just the Outcome:</strong> Don't wait until you've lost 20 pounds to celebrate. Reward yourself for completing each workout. The reward should reinforce the *behavior* you want to repeat.
            </li>
            <li>
              <strong>Make the Reward Immediate:</strong> The reinforcement must come immediately after the desired behavior. The brain needs to form a tight connection between the action and the reward.
            </li>
            <li>
              <strong>Choose Rewards that Align with Your Goals:</strong> Don't reward a workout with a donut, as this undermines your larger goal. Reward it with something that supports your identity as a healthy person, like a new piece of workout gear or a healthy meal you love.
            </li>
             <li>
              <strong>Track Your Progress:</strong> The simple act of tracking a habit and seeing a streak form can be a powerful reinforcer in itself. Each checkmark on the calendar provides a small hit of satisfaction that encourages you to keep going.
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

export default LawOfReinforcementPage;