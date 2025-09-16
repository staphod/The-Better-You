import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfLivingInTheNowPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Living in the Now</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Live today fully—it won’t return. The present moment is the only reality you will ever experience.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Eckhart Tolle</footer>
          </blockquote>
          <p>
            The Law of Living in the Now, a central tenet of mindfulness and many spiritual traditions, asserts that life is a series of present moments. Your power, your joy, and your very existence are only ever found in the "Now." By obsessing over the past (which cannot be changed) or worrying about the future (which does not yet exist), we sacrifice the only thing that is real: this present moment. This law is an urgent call to awaken to the fullness of your life as it is happening.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Combating Anxiety:</strong> Anxiety is almost always future-oriented. By bringing your attention back to your breath and your immediate sensory experience, you can anchor yourself in the present and calm an anxious mind.
            </li>
            <li>
                <strong>Deepening Experience:</strong> The difference between merely eating a meal and truly tasting it is presence. The same applies to conversations, walks in nature, and listening to music. Presence turns mundane activities into rich experiences.
            </li>
            <li>
                <strong>Ultimate Reality:</strong> You cannot "do" anything tomorrow. You can only do something *now*. All action, all change, all life happens in the present moment.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live in the Now</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Focus on Your Breath:</strong> Your breath is your constant anchor to the present moment. Whenever you feel your mind drifting, gently guide your attention back to the sensation of your breath entering and leaving your body.
            </li>
            <li>
              <strong>Engage Your Senses:</strong> Pause and ask yourself: What are five things I can see right now? Four things I can feel? Three things I can hear? This simple exercise grounds you in your immediate environment.
            </li>
            <li>
              <strong>Accept the Moment as It Is:</strong> Stop arguing with reality. If you are stuck in traffic, you are stuck in traffic. Resisting the present moment is the source of much frustration. Acceptance of what *is* allows you to respond to it with clarity and peace.
            </li>
             <li>
              <strong>Do One Thing at a Time:</strong> Give your full, undivided attention to the task at hand, whether it's washing the dishes or writing an important email. When you are all there, the quality of your action and your experience of it are transformed (see Law of Presence).
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

export default LawOfLivingInTheNowPage;
