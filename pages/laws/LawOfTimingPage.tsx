import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const LawOfTimingPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Timing</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Big goals need patience. There is a right season for every action and every outcome.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"To everything there is a season, and a time to every purpose under the heaven."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Ecclesiastes 3:1</footer>
          </blockquote>
          <p>
            The Law of Timing suggests that success is not just about doing the right things, but about doing them at the right time. Just like a farmer who must plant in the spring and harvest in the fall, our efforts are subject to natural cycles and seasons. Forcing an outcome before its time can lead to failure, while waiting too long can mean missing an opportunity. This law requires both patience and decisiveness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Business:</strong> Many failed companies had brilliant ideas but were simply too early for the market (e.g., social media platforms before widespread internet access). Conversely, many successful companies caught a wave of technology or culture at precisely the right moment.
            </li>
            <li>
                <strong>Relationships:</strong> Proposing on the first date is a matter of bad timing. The relationship needs a season of growth and nurturing before it's ready for that level of commitment.
            </li>
            <li>
                <strong>Personal Growth:</strong> You may not be ready to start a business in your early twenties while you still need to build skills and capital. The "season" for that venture might be in your thirties, after a period of preparation. Pushing too soon can lead to unnecessary failure.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Work with the Law of Timing</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Prepare While You Wait:</strong> Patience is not passive. While waiting for the right opportunity, you should be actively preparing—sharpening your skills, building your network, saving your money. When the time is right, you'll be ready to act.
            </li>
            <li>
              <strong>Study the Seasons of Your Field:</strong> Every industry and area of life has cycles. Understand the trends. Is it a time for aggressive growth or for conservative stability? Align your actions with the prevailing conditions.
            </li>
            <li>
              <strong>Develop Your Intuition:</strong> Sometimes, timing is a matter of gut feeling. This intuition isn't magic; it's the result of your subconscious processing vast amounts of information and experience. The more you learn and prepare, the more reliable your intuition becomes.
            </li>
             <li>
              <strong>Be Ready to Act Decisively:</strong> When the window of opportunity opens, you must be ready to act with speed and confidence. Hesitation can be just as costly as acting too soon.
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

export default LawOfTimingPage;