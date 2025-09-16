import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const LawOfDefinitionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LightbulbIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Definition</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Define the problem clearly. A problem well-stated is a problem half-solved.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein (attributed)</footer>
          </blockquote>
          <p>
            The Law of Definition states that the most critical step in solving any problem is to first define it with absolute clarity. Many people jump immediately to brainstorming solutions before they fully understand the true nature of the problem they are facing. This often leads to solving the wrong problem or only addressing a symptom rather than the root cause. Investing time upfront to accurately and precisely define the problem saves enormous amounts of wasted effort later.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Medicine:</strong> A doctor spends most of their initial consultation asking questions and running tests (defining the problem) before they even consider prescribing a treatment (the solution). A wrong diagnosis leads to an ineffective treatment.
            </li>
            <li>
                <strong>Business:</strong> A team might complain that "sales are down" (a symptom). A good leader will dig deeper to define the real problem. Is it a product issue? A marketing issue? A problem with the sales team's training? Each definition points to a completely different solution.
            </li>
            <li>
                <strong>Personal Development:</strong> A person might say, "I'm unhappy" (a vague symptom). Defining the problem requires more precision. Is the problem a lack of meaningful work? A lonely social life? Poor health habits? You can't solve "unhappiness," but you can solve those specific, well-defined problems.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Clearly Define a Problem</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Write It Down:</strong> The act of writing forces you to clarify your thoughts. Try to state the problem in a single, clear sentence.
            </li>
            <li>
              <strong>Ask "Why?" Repeatedly:</strong> Use the "Five Whys" technique. Start with the surface-level problem and ask "Why is this happening?" five times to drill down to the root cause.
            </li>
            <li>
              <strong>Quantify the Problem:</strong> Whenever possible, use numbers. "Sales are down" is vague. "Sales of Product X are down 15% this quarter compared to last year" is a well-defined problem.
            </li>
             <li>
              <strong>Reframe the Problem:</strong> Try stating the problem in different ways. This can reveal new angles and potential solutions. For example, instead of "How can we make our meetings shorter?", try "How can we make our meetings so effective that people are excited to attend?"
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

export default LawOfDefinitionPage;
