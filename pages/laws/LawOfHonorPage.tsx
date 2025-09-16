import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { CrownIcon } from '@/components/icons/ModuleIcons';

const LawOfHonorPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <CrownIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Honor</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Your word is your bond. Live in such a way that you are a person of integrity.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The supreme quality for leadership is unquestionably integrity. Without it, no real success is possible, no matter whether it is on a section gang, a football field, in an army, or in an office."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Dwight D. Eisenhower</footer>
          </blockquote>
          <p>
            The Law of Honor states that your reputation is built on the consistency between your words and your actions. To be honorable is to be a person whose word can be trusted completely. It means adhering to a strict moral and ethical code, even when it is difficult or inconvenient. Honor is the foundation of a strong character and the source of deep, lasting respect from others.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Keeping Commitments:</strong> An honorable person does what they say they will do. Their "yes" is a guarantee (see Law of Promise Keeping).
            </li>
            <li>
                <strong>Honesty in All Dealings:</strong> They do not cheat, lie, or deceive, even in small matters. They understand that every action contributes to their reputation.
            </li>
            <li>
                <strong>Taking Responsibility:</strong> An honorable person owns their mistakes and does not try to shift blame. They accept the consequences of their actions.
            </li>
            <li>
                <strong>Loyalty:</strong> They are loyal to their principles and to the people who have earned their trust. They do not speak ill of others behind their backs.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate Honor</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Define Your Code:</strong> What are the non-negotiable principles by which you want to live your life? Write down your personal code of conduct.
            </li>
            <li>
              <strong>Start with Small Promises:</strong> Build the habit of honor by being impeccable with your word in small, everyday situations. Be on time. Return things you borrow. Call when you say you will.
            </li>
            <li>
              <strong>Think Before You Speak:</strong> Before making a commitment, pause and be certain you can honor it. It is more honorable to decline a request than to accept and fail to deliver.
            </li>
             <li>
              <strong>Guard Your Reputation:</strong> Understand that your reputation is your most valuable asset. It takes years to build and can be destroyed in a moment. Make every decision with your long-term honor in mind.
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

export default LawOfHonorPage;
