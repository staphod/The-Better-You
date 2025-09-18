import React from 'react';
import { Link } from 'react-router-dom';
import { NetworkIcon } from '@/components/icons/ModuleIcons';

const FeedbackLoopsPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <NetworkIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Feedback Loops</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The engine of all systems, driving everything from growth and collapse to stability.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is a Feedback Loop?</h2>
          <p>
            A feedback loop is a core concept in systems thinking. It occurs when the output of a system circles back to become one of the inputs, influencing future outputs. Understanding feedback loops allows you to see the hidden forces that shape your life, businesses, and the world. There are two main types: Reinforcing (Positive) and Balancing (Negative).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Reinforcing (Positive) Loops: The Snowball Effect</h2>
          <p>
            Reinforcing loops amplify change in one direction. They are the engines of growth, but also of collapse. More of something leads to even more of that same thing.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Positive Example (Growth):</strong> The more money you have in a savings account, the more interest it earns. That interest is added to the principal, which then earns even more interest. This is the power of compound interest.
            </li>
            <li>
                <strong>Negative Example (Collapse):</strong> A stock market panic. A few people sell, causing prices to drop. This drop scares more people, who also sell, causing prices to drop further. The output (lower prices) feeds back to cause more of the same action (selling).
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Balancing (Negative) Loops: The Thermostat Effect</h2>
          <p>
            Balancing loops are stabilizing and goal-seeking. They work to keep a system within a desired range, resisting change and maintaining equilibrium.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Simple Example (Thermostat):</strong> A thermostat is set to 70°F. If the room gets hotter, the balancing loop kicks in the air conditioning to cool it down. If it gets colder, it turns on the heat. It always works to return the system to its target.
            </li>
            <li>
                <strong>Life Example (Hunger):</strong> The hungrier you get, the stronger the signal to eat. Once you eat, your hunger subsides, bringing your body back to a state of balance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Applying This Knowledge</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify the Loops Around You:</strong> When you see a situation, ask: "What are the feedback loops at play?" Is a habit getting stronger every day (reinforcing)? Is a system in your life constantly returning to an unwanted state (balancing)?
            </li>
            <li>
              <strong>Create Positive Reinforcing Loops:</strong> To build a new skill, find a way to make progress visible. Seeing progress (output) motivates you to practice more (input), which creates more progress. This is a virtuous cycle.
            </li>
            <li>
              <strong>Interrupt Negative Reinforcing Loops:</strong> To break a bad habit, find the "link" in the chain and break it. If stress (input) leads to overeating (output), which leads to guilt and more stress (input), the loop is reinforcing. You must introduce a new response to the initial stress to break the cycle.
            </li>
             <li>
              <strong>Adjust Your "Thermostat":</strong> If you're stuck in a balancing loop (e.g., your weight always returns to a certain number), you can't fight it with willpower alone. You must change the system's goal—the "thermostat setting"—through fundamental changes in diet, exercise, and environment.
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

export default FeedbackLoopsPage;