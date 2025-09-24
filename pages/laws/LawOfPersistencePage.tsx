import React from 'react';
import { Link } from 'react-router-dom';
import { HeartbeatIcon } from '@/components/icons/ModuleIcons';

const LawOfPersistencePage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartbeatIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Persistence</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Keep trying until it works. Persistence is the vehicle you arrive in.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Nothing in this world can take the place of persistence. Talent will not... Genius will not... Education will not... Persistence and determination alone are omnipotent."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Calvin Coolidge</footer>
          </blockquote>
          <p>
            The Law of Persistence states that your ability to continue in the face of setbacks, discouragement, and failure is the single greatest determinant of your success. Many people have talent, great ideas, and good intentions, but they give up at the first major obstacle. Persistence is the iron quality that allows you to outlast your challenges and your competition. It is self-discipline in action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Abraham Lincoln:</strong> He failed in business, suffered a nervous breakdown, and was defeated in eight different elections before finally being elected President of the United States and becoming one of history's most revered leaders.
            </li>
            <li>
                <strong>J.K. Rowling:</strong> The manuscript for "Harry Potter" was rejected by 12 different publishers before one finally took a chance on it. Her persistence in the face of repeated rejection led to one of the most successful book series of all time.
            </li>
            <li>
                <strong>Any difficult skill:</strong> Learning to code, play an instrument, or speak a new language involves long periods of frustration and slow progress (the "plateau of latent potential"). Persistence is what carries you through these plateaus to the breakthrough moments.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Persistence</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Have a Burning "Why":</strong> Persistence is fueled by desire. Your reason for pursuing a goal must be so strong that it outweighs the inevitable pain and difficulty of the journey.
            </li>
            <li>
              <strong>Expect Obstacles:</strong> Don't be surprised by setbacks. Expect them as a natural part of any worthwhile pursuit. When they arrive, see them as tests of your commitment, not as signs to quit.
            </li>
            <li>
              <strong>Focus on the Next Step:</strong> When facing a huge challenge, don't think about the entire mountain you have to climb. Just focus on taking the very next step. This makes the journey feel manageable.
            </li>
             <li>
              <strong>Celebrate Your Grit:</strong> When you push through a tough day and stick to your plan even when you don't feel like it, acknowledge and celebrate that act of persistence. You are strengthening your character, which is a victory in itself.
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

export default LawOfPersistencePage;