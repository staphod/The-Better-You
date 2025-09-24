import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const LawOfVisualizationPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Visualization</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Imagine success before you do it. See it, feel it, believe it, and your mind will work to achieve it.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The mind is everything. What you think you become."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Buddha</footer>
          </blockquote>
          <p>
            The Law of Visualization states that your subconscious mind cannot distinguish between a real experience and one that is vividly imagined. When you consistently visualize a desired outcome with clarity and emotion, you are creating new neural pathways and programming your mind for success. This mental rehearsal prepares you for actual performance, boosts confidence, and activates your brain to notice the resources needed to achieve your goal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Elite Athletes:</strong> Top athletes, from Olympic skiers to professional golfers, use visualization extensively. They mentally rehearse their performance flawlessly, imagining every movement, every turn, and the feeling of victory. This builds muscle memory and mental confidence.
            </li>
            <li>
                <strong>Public Speakers:</strong> Anxious speakers can visualize themselves on stage, speaking calmly and confidently to an engaged and appreciative audience. This reduces performance anxiety by creating a positive mental blueprint.
            </li>
            <li>
                <strong>Sales Professionals:</strong> A salesperson can visualize a successful meeting: shaking hands, building rapport, handling objections smoothly, and closing the deal. This mental preparation increases their confidence and effectiveness during the actual meeting.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Visualization Effectively</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Be Specific and Detailed:</strong> Don't just see a vague image of success. In your mind's eye, see the colors, hear the sounds, and feel the textures of your desired outcome. The more vivid the image, the more real it is to your subconscious.
            </li>
            <li>
              <strong>Engage Your Emotions:</strong> This is the crucial step. It's not enough to just see it; you must *feel* the emotions of success. Feel the pride, the joy, the relief, the confidence. Emotion is the fuel that makes visualization powerful.
            </li>
            <li>
              <strong>Focus on the Process, Not Just the Outcome:</strong> Visualize yourself performing the necessary actions perfectly. See yourself overcoming challenges and sticking to your plan. This builds confidence in your abilities.
            </li>
             <li>
              <strong>Practice Consistently:</strong> Make visualization a daily habit. A few minutes each morning or before an important event can have a significant cumulative effect on your mindset and performance.
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

export default LawOfVisualizationPage;