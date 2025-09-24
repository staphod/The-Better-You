import React from 'react';
import { Link } from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfTeachingPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Teaching</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Share what you learn. To teach is to learn twice.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"While we teach, we learn."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Seneca the Younger</footer>
          </blockquote>
          <p>
            The Law of Teaching, often summarized by the phrase "to teach is to learn twice," posits that one of the deepest and most effective ways to solidify your own knowledge is to explain it to someone else. The act of teaching forces you to organize your thoughts, simplify complex ideas, and identify the gaps in your own understanding. It moves you from passive consumption of information to active mastery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action (The Feynman Technique)</h2>
          <p>This law is famously embodied in the Feynman Technique, a learning method developed by the Nobel prize-winning physicist Richard Feynman:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Step 1: Choose a Concept.</strong> Pick a topic you want to understand.
            </li>
            <li>
                <strong>Step 2: Teach it to a Child.</strong> Write down an explanation of the topic as if you were teaching it to a 12-year-old. Use simple language and analogies.
            </li>
            <li>
                <strong>Step 3: Identify Gaps and Simplify.</strong> When you get stuck or find yourself using complex jargon, you've found a gap in your own understanding. Go back to the source material to fill that gap. Then, simplify your explanation further.
            </li>
             <li>
                <strong>Step 4: Organize and Review.</strong> Organize your simplified notes into a clear, narrative explanation. Read it aloud. If it's not simple and clear, you don't understand it well enough yet.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply the Law of Teaching</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Share Your Knowledge Freely:</strong> When you learn something new, find someone to share it with. This could be a colleague, a friend, or a family member. The act of explaining it will deepen your own understanding.
            </li>
            <li>
              <strong>Write About What You're Learning:</strong> Start a blog, a newsletter, or even just a private document. Writing is a form of teaching. It forces you to structure your knowledge in a coherent way.
            </li>
            <li>
              <strong>Mentor Someone:</strong> Take on a mentee in your field of expertise. Guiding someone else will force you to revisit and articulate the fundamentals of your craft, leading to new insights for yourself.
            </li>
             <li>
              <strong>Volunteer to Present:</strong> Offer to give a short presentation at work or in a community group on a topic you're passionate about. The preparation process is an intense and effective form of learning.
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

export default LawOfTeachingPage;