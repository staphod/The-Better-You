import React from 'react';
import { Link } from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const ConfirmationBiasPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Confirmation Bias</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The tendency to search for, interpret, favor, and recall information that confirms or supports one's prior beliefs.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why We Do It</h2>
          <p>
            Our brains are wired to be efficient, not necessarily to be accurate. It is mentally easier to process information that fits with our existing worldview than it is to re-evaluate our beliefs in the face of new, contradictory evidence. Confirmation bias acts like a filter, letting in data that supports our views and blocking out or downplaying data that challenges them. This feels good and protects our ego, but it can be a major obstacle to clear thinking and learning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Confirmation Bias in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Politics:</strong> People tend to consume news from sources that align with their political views. They interpret neutral events in a way that supports their party and dismiss information from opposing sources as "biased" or "fake news."
            </li>
            <li>
                <strong>Investing:</strong> An investor who is bullish on a particular stock will actively seek out articles and opinions that support their thesis, while unconsciously ignoring warning signs or negative reports about the company.
            </li>
            <li>
                <strong>Personal Beliefs:</strong> If you believe you are "bad at math," you will remember every time you struggled with a problem (confirming evidence) and forget the times you succeeded.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Fight Confirmation Bias</h2>
          <p>You can never eliminate this bias completely, but you can build systems and habits to mitigate its effects.</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Actively Seek Disconfirming Evidence:</strong> This is the most powerful tool. Instead of asking, "What shows I'm right?" ask, "What could prove me wrong?" Make it a game to find the best arguments against your own position. This is what scientists and great detectives do.
            </li>
            <li>
              <strong>Consume Diverse Information:</strong> Intentionally read articles, books, and opinions from people you disagree with. Try to understand their reasoning without immediately judging it.
            </li>
            <li>
              <strong>"Consider the Opposite":</strong> Before making a big decision, take a few minutes to genuinely consider the reasons why the opposite choice might be the better one. Write them down.
            </li>
             <li>
              <strong>Separate Your Identity from Your Beliefs:</strong> If you tie your identity to being "right," you will find it very hard to change your mind. Instead, tie your identity to being a "curious learner" or a "truth-seeker." This makes it easier to update your beliefs when new evidence emerges without feeling like a personal failure.
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/models" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Mental Models
          </Link>
      </div>
    </div>
  );
};

export default ConfirmationBiasPage;