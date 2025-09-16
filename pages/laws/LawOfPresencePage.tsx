import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LeafIcon } from '@/components/icons/ModuleIcons';

const LawOfPresencePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LeafIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Presence</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Be present in the moment. The past is history, the future is a mystery, but today is a gift. That is why it is called the present.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The only thing that is ultimately real about your journey is the step that you are taking at this moment. That's all there ever is."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Eckhart Tolle</footer>
          </blockquote>
          <p>
            The Law of Presence states that the only time you can ever truly live, act, or be happy is in the present moment. Much of human suffering comes from either regretting the past or feeling anxious about the future—two things that do not exist in the here and now. By training your attention to focus on the present, you can reduce stress, increase your effectiveness, and experience a deeper sense of peace and joy in your everyday life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Deep Work:</strong> A state of "flow," where you are fully immersed in a task, is a state of total presence. This is where you produce your most creative and high-quality work.
            </li>
            <li>
                <strong>Relationships:</strong> When you are fully present with another person—listening without distraction, observing without judgment—you create a powerful and authentic connection (see Law of Attention).
            </li>
            <li>
                <strong>Appreciating Life:</strong> The joy of a beautiful sunset, the taste of a delicious meal, or the warmth of a hug can only be experienced when you are fully present. If your mind is elsewhere, the moment is lost.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Presence</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice Mindfulness Meditation:</strong> This is the direct training of your "presence muscle." Spend a few minutes each day focusing on your breath, and gently returning your attention whenever it wanders.
            </li>
            <li>
              <strong>Engage Your Senses:</strong> Anchor yourself in the present by noticing what you can see, hear, smell, taste, and touch. This simple exercise can pull you out of your thoughts and into the reality of the moment.
            </li>
            <li>
              <strong>Single-Task:</strong> Resist the urge to multitask. When you are performing a task, give it your full attention. When you finish, move on to the next thing.
            </li>
             <li>
              <strong>Create "Presence Triggers":</strong> Use a recurring daily event, like drinking your morning coffee or walking through a doorway, as a reminder to pause, take a deep breath, and become fully present for a moment.
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

export default LawOfPresencePage;
