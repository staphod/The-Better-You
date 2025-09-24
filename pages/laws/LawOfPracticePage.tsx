import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';

const LawOfPracticePage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Practice</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          What you practice, you get good at. Excellence is not an act, but a habit cultivated through deliberate repetition.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"We are what we repeatedly do. Excellence, then, is not an act, but a habit."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Will Durant (summarizing Aristotle)</footer>
          </blockquote>
          <p>
            The Law of Practice states that mastery in any field is the direct result of consistent, focused repetition. Every skill, from playing the piano to public speaking, is built upon neural pathways in the brain. The act of practicing strengthens these pathways, making the skill more automatic, efficient, and refined over time. Simply put, you become good at what you do.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>You Practice Worrying:</strong> If you spend your time rehearsing worst-case scenarios in your mind, you are practicing the skill of anxiety. You will become an expert at finding things to worry about.
            </li>
            <li>
                <strong>You Practice Complaining:</strong> If your default response to a challenge is to complain, you are strengthening the neural pathways for negativity and victimhood. You will get very good at spotting flaws and finding fault.
            </li>
            <li>
                <strong>You Practice Gratitude:</strong> If you consistently take time to notice and appreciate the good in your life, you are practicing the skill of positivity. Your brain will become better at automatically scanning for things to be thankful for.
            </li>
            <li>
                <strong>You Practice a Skill:</strong> When a guitarist practices scales, they are not just moving their fingers; they are making the connection between brain, nerve, and muscle faster and more precise. The same applies to a programmer writing code or a salesperson making calls.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice for Mastery</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Be Intentional:</strong> Be conscious of what you are practicing in your daily thoughts and actions. Are you practicing the habits and mindsets that lead to your desired life?
            </li>
            <li>
              <strong>Embrace Deliberate Practice:</strong> Mastery doesn't come from mindless repetition. It comes from "deliberate practice," which involves focused attention, pushing yourself just beyond your current abilities, and seeking constant feedback to correct errors.
            </li>
            <li>
              <strong>Value Consistency Over Intensity:</strong> One hour of focused practice every day is far more effective than a seven-hour cram session once a week. Consistency is what builds and maintains the neural pathways.
            </li>
             <li>
              <strong>Start Small:</strong> The key to building a practice habit is to make it so easy you can't say no. Want to learn guitar? Practice for five minutes a day. The goal is not to be a rockstar on day one, but to establish the identity of "someone who practices guitar every day."
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

export default LawOfPracticePage;