import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const NewtonsLawsOfMotionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Newton's Laws of Motion as Life Principles</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Applying the fundamental laws of physics to understand the dynamics of personal growth and success.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">1. The Law of Inertia</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force."</p>
          </blockquote>
          <p>
            <strong>Life Lesson:</strong> The hardest part of any new venture is getting started. A life stuck in a rut (at rest) will remain stuck unless you apply a strong, deliberate force—like a new habit, a bold decision, or a change of environment. Conversely, once you build positive momentum (in motion), it becomes easier to keep going. This law teaches us to respect the power of momentum and the initial effort required to overcome inertia.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Positive View:</strong> A small daily habit, once established, creates a momentum that makes it easier to continue than to stop.</li>
            <li><strong>Negative View:</strong> A bad habit or a state of procrastination will persist indefinitely until a conscious, forceful effort is made to change course.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">2. The Law of Acceleration (F=ma)</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object."</p>
          </blockquote>
          <p>
            <strong>Life Lesson:</strong> The amount of progress (acceleration) you make toward a goal is directly proportional to the focused effort (force) you apply. A small, inconsistent effort will produce slow, small results. A massive, focused effort will produce rapid, significant results. Furthermore, the size of your goal (mass) matters. Changing a small habit requires less force than changing your entire career path. To achieve great things, you must apply a correspondingly great force.
          </p>
           <ul className="list-disc list-inside space-y-2">
            <li><strong>Positive View:</strong> By concentrating your efforts (applying a large force) on your most important goal (a specific mass), you can achieve a dramatic acceleration in your progress.</li>
            <li><strong>Negative View:</strong> Trying to change too many big things (high mass) at once with limited energy (low force) will result in negligible progress (low acceleration) in all of them.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">3. The Law of Action and Reaction</h2>
           <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"For every action, there is an equal and opposite reaction."</p>
          </blockquote>
          <p>
            <strong>Life Lesson:</strong> This is the physical equivalent of the Law of Cause and Effect or Sowing and Reaping. Every action you take in the world creates a corresponding result. The kindness you put out into your relationships (action) creates a reaction of trust and warmth. The effort you put into your work (action) creates a reaction of progress and opportunity. This law reminds us that we are constantly interacting with the world and that the results we get back are a direct mirror of the actions we initiate.
          </p>
           <ul className="list-disc list-inside space-y-2">
            <li><strong>Positive View:</strong> Consistently taking positive actions—being helpful, working diligently, being kind—will generate a flow of positive reactions back into your life.</li>
            <li><strong>Negative View:</strong> Negative actions—gossip, laziness, dishonesty—will inevitably produce an equal and opposite negative reaction, damaging your reputation and relationships.</li>
          </ul>
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

export default NewtonsLawsOfMotionPage;
