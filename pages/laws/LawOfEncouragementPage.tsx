import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { TrendingUpIcon } from '@/components/icons/StatusIcons';

const LawOfEncouragementPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <TrendingUpIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Encouragement</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Encourage others. Your words can be the wind in someone else's sails.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"A word of encouragement during a failure is worth more than an hour of praise after success."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Unknown</footer>
          </blockquote>
          <p>
            The Law of Encouragement states that sincere praise and support are powerful motivators that can unlock potential in others. People tend to live up to the belief that others have in them. When you encourage someone, you are not just being nice; you are actively strengthening their self-belief and giving them the courage to persist through challenges. Criticism often makes people defensive, while encouragement makes them receptive and inspired.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Leadership:</strong> A manager who constantly criticizes their team creates a culture of fear and risk-aversion. A manager who looks for opportunities to praise effort and progress fosters a culture of confidence and innovation.
            </li>
            <li>
                <strong>Parenting:</strong> A child who is encouraged for their effort, regardless of the outcome, develops a growth mindset and a love of learning. A child who is only praised for their innate talent may become afraid to try things they are not immediately good at.
            </li>
            <li>
                <strong>Friendship:</strong> Being the friend who believes in your friends' dreams, especially when they doubt themselves, is one of the most valuable roles you can play. Your encouragement can provide the fuel they need to keep going.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Be an Encourager</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Praise the Effort, Not Just the Talent:</strong> Instead of "You're so smart," say "I was so impressed with how hard you worked on that problem." This reinforces the value of effort, which is within a person's control.
            </li>
            <li>
              <strong>Be Specific:</strong> Vague praise like "good job" is less impactful than specific praise. "I really admired how you handled that difficult question in the meeting; you were so calm and articulate."
            </li>
            <li>
              <strong>Encourage Potential:</strong> See the potential in people and speak to it. "You have a real talent for connecting with people. I could see you being a great leader one day."
            </li>
             <li>
              <strong>Listen and Validate:</strong> Sometimes, the best encouragement is simply to listen to someone's struggles and validate their feelings. Saying "That sounds really tough, and it's amazing that you're still pushing through" can be incredibly powerful.
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

export default LawOfEncouragementPage;
