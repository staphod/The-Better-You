import React from 'react';
import { Link } from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfConcentrationPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Concentration</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Focus on what matters. Your power is proportional to your ability to direct your mental forces to a single point.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Alexander Graham Bell</footer>
          </blockquote>
          <p>
            The Law of Concentration states that whatever you dwell upon, grows. The ability to focus your full attention on one thing, to the exclusion of all else, is a prerequisite for high achievement. In a world filled with distractions, concentration is a superpower. Scattered energy produces mediocre results; focused energy produces excellence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Deep Work:</strong> As Cal Newport describes in his book, "Deep Work" is the ability to focus without distraction on a cognitively demanding task. This state of intense concentration is where you produce your best work, learn complex skills, and create the most value.
            </li>
            <li>
                <strong>Problem Solving:</strong> When you hold a single problem in your mind for an extended period (see 60 Minutes of Silence), you allow your subconscious to make connections and deliver insights that are impossible to reach when you are constantly switching contexts.
            </li>
            <li>
                <strong>Relationships:</strong> Being fully present and concentrated on the person you are with is the foundation of a strong connection. Multitasking (e.g., checking your phone during a conversation) fractures the connection and communicates disrespect.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Improve Your Concentration</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice Single-Tasking:</strong> Make a conscious effort to do one thing at a time. When you are writing an email, just write the email. When you are eating, just eat. This retrains your brain's "focus muscle."
            </li>
            <li>
              <strong>Create a Distraction-Free Environment:</strong> Before starting an important task, eliminate potential distractions. Put your phone in another room, close unnecessary browser tabs, and signal to others that you need uninterrupted time.
            </li>
            <li>
              <strong>Use Time Blocking:</strong> Schedule specific blocks of time in your calendar for your most important, concentrated work. During this time, you do nothing else. Protect this time as if it were an important meeting.
            </li>
             <li>
              <strong>Practice Mindfulness and Meditation:</strong> Meditation is a direct workout for your attention. The practice of noticing when your mind has wandered and gently bringing it back to your breath is precisely the skill needed for deep concentration.
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

export default LawOfConcentrationPage;