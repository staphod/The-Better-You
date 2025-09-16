import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfListeningPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Listening</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Listen before you talk. Most people do not listen with the intent to understand; they listen with the intent to reply.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"We have two ears and one mouth so that we can listen twice as much as we speak."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Epictetus</footer>
          </blockquote>
          <p>
            The Law of Listening asserts that true understanding and connection come not from speaking, but from actively and empathetically listening. In a world where everyone is waiting for their turn to talk, the person who truly listens holds immense power. Listening allows you to gather information, understand others' perspectives, build trust, and identify needs and opportunities that are invisible to those who only focus on what they are going to say next.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Sales and Negotiation:</strong> The best salespeople don't persuade with a slick pitch; they listen intently to the customer's problems and then present their product as the solution. They understand the need before offering the answer.
            </li>
            <li>
                <strong>Leadership:</strong> Effective leaders create environments where their team feels heard. By listening to feedback and concerns, they build loyalty, foster innovation, and can address problems while they are still small.
            </li>
            <li>
                <strong>Relationships:</strong> The foundation of any strong personal relationship is feeling understood. Active listening—without judging, interrupting, or problem-solving—is the greatest gift you can give to a friend or partner in distress.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Active Listening</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Listen with the Intent to Understand, Not Reply:</strong> When someone is talking, quiet the voice in your head that is formulating your response. Focus all your mental energy on what the other person is saying and what they mean.
            </li>
            <li>
              <strong>Ask Clarifying Questions:</strong> Use questions to deepen your understanding, not to challenge or redirect. Phrases like "Can you tell me more about that?" or "What did you mean when you said...?" show that you are engaged.
            </li>
            <li>
              <strong>Paraphrase and Reflect:</strong> Summarize what you heard back to the person. "So, if I'm understanding correctly, you're feeling frustrated because..." This confirms your understanding and makes the other person feel validated.
            </li>
             <li>
              <strong>Pay Attention to Non-Verbal Cues:</strong> A significant portion of communication is non-verbal. Pay attention to body language, tone of voice, and eye contact to understand the full emotional context of the message.
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

export default LawOfListeningPage;
