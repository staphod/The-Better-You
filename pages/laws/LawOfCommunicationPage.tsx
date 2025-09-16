import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';

const LawOfCommunicationPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Communication</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Communicate clearly. Ambiguity is the enemy of execution and the parent of misunderstanding.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The single biggest problem in communication is the illusion that it has taken place."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- George Bernard Shaw</footer>
          </blockquote>
          <p>
            The Law of Communication states that the quality of your relationships and your effectiveness as a leader are directly tied to your ability to communicate with clarity, empathy, and precision. Clear communication prevents misunderstandings, aligns teams, builds trust, and ensures that intentions translate into the correct actions. Vague or poor communication, on the other hand, creates confusion, conflict, and wasted effort.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Project Management:</strong> A project with a clearly communicated brief, defined roles, and specific deadlines is far more likely to succeed than one where team members are unsure of what is expected of them.
            </li>
            <li>
                <strong>Relationships:</strong> Many relationship conflicts stem from unspoken expectations and a failure to clearly communicate needs and feelings. Clear, honest communication is the antidote.
            </li>
            <li>
                <strong>Public Speaking:</strong> A great speaker takes a complex idea and communicates it in simple, clear terms that their audience can understand and act upon.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Become a Clear Communicator</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Know Your Objective:</strong> Before you speak or write, be clear in your own mind what you want to achieve. What is the single most important message you want to convey? What action do you want the other person to take?
            </li>
            <li>
              <strong>Use Simple, Direct Language:</strong> Avoid jargon, corporate-speak, and unnecessarily complex words. The goal is to be understood, not to sound impressive.
            </li>
            <li>
              <strong>Confirm Understanding:</strong> After giving instructions or explaining a concept, ask the other person to summarize it back to you in their own words. This is the best way to ensure your message was received as intended.
            </li>
             <li>
              <strong>Listen First:</strong> Effective communication is a two-way street. Before you can communicate your message clearly, you must first understand the other person's context and perspective (see Law of Listening).
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

export default LawOfCommunicationPage;
