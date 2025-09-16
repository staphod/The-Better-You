import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';

const LawOfAttentionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Attention</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Listen with care. Giving someone your full, undivided attention is one of the greatest gifts you can offer.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The most basic and powerful way to connect to another person is to listen. Just listen. Perhaps the most important thing we ever give each other is our attention."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Rachel Naomi Remen</footer>
          </blockquote>
          <p>
            The Law of Attention states that where you direct your focus, you direct your energy and influence. In the context of relationships, giving someone your full attention is a powerful act of respect and validation. In an age of constant distraction, focused attention has become a scarce and valuable resource. The ability to truly listen, without interrupting or waiting for your turn to speak, is a skill that builds deep trust and connection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Deep Conversation:</strong> When you put your phone away, make eye contact, and listen intently to a friend, you are communicating that they matter. This allows for vulnerability and genuine connection.
            </li>
            <li>
                <strong>Effective Learning:</strong> A student who gives their full attention in class will learn far more than a student who is multitasking on their laptop, even if they are both physically present.
            </li>
            <li>
                <strong>Mindfulness:</strong> The practice of mindfulness is the art of paying attention, on purpose, to the present moment without judgment. This focused attention can reduce stress and increase appreciation for the small details of life.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice the Law of Attention</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice Active Listening:</strong> Focus completely on what the other person is saying. Hear their words, their tone, and their body language. Resist the urge to formulate your reply while they are still speaking.
            </li>
            <li>
              <strong>Eliminate Distractions:</strong> When you are in a conversation, put your phone on silent and out of sight. Turn away from your computer screen. Give the person in front of you the gift of your undivided focus.
            </li>
            <li>
              <strong>Be Present in Daily Activities:</strong> Try doing one thing at a time. When you eat, just eat and savor the food. When you walk, just walk and notice your surroundings. This trains your "attention muscle."
            </li>
             <li>
              <strong>Ask Open-Ended Questions:</strong> Encourage others to share more by asking questions that can't be answered with a simple "yes" or "no." Questions like "How did that make you feel?" or "What was that like?" show you are paying attention and want to understand more deeply.
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

export default LawOfAttentionPage;
