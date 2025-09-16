import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartbeatIcon } from '@/components/icons/ModuleIcons';

const LawOfBeliefPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartbeatIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Belief</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Believe you can and you’re halfway there. Whatever you believe with feeling, becomes your reality.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Norman Vincent Peale</footer>
          </blockquote>
          <p>
            The Law of Belief states that your deeply held beliefs are a primary creative force in your life. They act as a filter through which you see the world and a governor on what you are capable of achieving. If you have an unshakeable belief that you can achieve a goal, you will unconsciously tap into your inner resources, resilience, and creativity to make it happen. Conversely, a limiting belief will cause you to give up at the first sign of trouble.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The Four-Minute Mile:</strong> For decades, the world believed it was physiologically impossible for a human to run a mile in under four minutes. In 1954, Roger Bannister broke this barrier. His achievement shattered the collective limiting belief, and in the year that followed, over a dozen other runners did the same. The physical barrier was real, but the mental barrier was greater.
            </li>
            <li>
                <strong>Public Speaking:</strong> If you believe you are a "bad public speaker," you will approach the stage with anxiety. Your body language will be defensive, your voice will tremble, and you will interpret every neutral face in the audience as a sign of judgment—thus fulfilling your own belief.
            </li>
            <li>
                <strong>Learning a New Skill:</strong> A person who believes "I'm just not a tech person" will get frustrated and give up easily when learning new software. A person who believes "I can figure anything out with enough time" will persist through the initial difficulty and eventually master it.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Empowering Beliefs</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify Your Limiting Beliefs:</strong> What are the "I can't," "I'm not," or "I always" statements that you tell yourself? Write them down. Acknowledging them is the first step to changing them.
            </li>
            <li>
              <strong>Challenge Them with Evidence:</strong> For each limiting belief, find evidence from your past that contradicts it. Have you ever succeeded at something difficult? Have you ever learned a new skill? This weakens the old belief's hold on you.
            </li>
            <li>
              <strong>Create and Affirm New Beliefs:</strong> Write down a new, empowering belief. For example, change "I'm bad at math" to "I am capable of learning and improving my math skills." Repeat this new belief to yourself daily, especially in the morning and evening.
            </li>
             <li>
              <strong>Build a "Belief Bank" with Small Wins:</strong> Belief is built on evidence. Set and achieve small, manageable goals. Each success is a "deposit" in your belief bank, giving you the confidence to tackle larger goals.
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

export default LawOfBeliefPage;