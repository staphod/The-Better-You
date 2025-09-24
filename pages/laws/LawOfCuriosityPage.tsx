import React from 'react';
import { Link } from 'react-router-dom';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const LawOfCuriosityPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LightbulbIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Curiosity</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Ask good questions. An inquisitive mind is a growing mind.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"I have no special talent. I am only passionately curious."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein</footer>
          </blockquote>
          <p>
            The Law of Curiosity states that the desire to know "why" is the fundamental engine of all learning and progress. Curiosity is not a childish trait to be outgrown, but a vital skill to be cultivated. It pushes you to look beyond the surface, challenge assumptions, and explore new territories of knowledge. A curious mind is never bored and is always growing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Innovation:</strong> Every great invention began with a curious question. "Why can't we fly like birds?" (Wright brothers). "What if we could connect all the world's computers?" (The internet). Curiosity sparks the initial inquiry that leads to breakthrough.
            </li>
            <li>
                <strong>Relationships:</strong> A curious person is a great conversationalist. They are genuinely interested in others, ask thoughtful questions, and listen intently. This builds deep and meaningful connections.
            </li>
            <li>
                <strong>Problem-Solving:</strong> When faced with a problem, a curious mind doesn't just look for the first available solution. It asks, "Why is this happening? What is the root cause? Is there a better way to think about this problem?" (see First Principles Thinking).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Your Curiosity</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Ask "Why?" Five Times:</strong> When you encounter a problem, ask "Why?" to understand the surface cause. Then ask "Why?" about that answer, and so on, five times. This helps you drill down to the root of the issue.
            </li>
            <li>
              <strong>Explore Your "Curiosity Rabbit Holes":</strong> When a topic sparks your interest, allow yourself to spend 30 minutes exploring it online without a specific goal. Follow the links and see where they lead.
            </li>
            <li>
              <strong>Read Widely:</strong> Don't just read about your own field. Pick up a book on a completely unrelated topic—history, biology, art. This cross-pollination of ideas is a major source of creativity.
            </li>
             <li>
              <strong>Embrace the Beginner's Mind:</strong> Approach subjects, even familiar ones, with the assumption that you have something new to learn. Don't be afraid to ask "stupid" questions.
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

export default LawOfCuriosityPage;