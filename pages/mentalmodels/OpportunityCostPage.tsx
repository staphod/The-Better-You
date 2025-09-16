import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const OpportunityCostPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Opportunity Cost</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The unseen cost of every decision: the value of the next-best alternative you gave up.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Opportunity cost is a huge filter in life. If you've got two suitors who are really eager to have you and one is way the hell better than the other, you do not have to spend much time with the other. And that's the way we filter out opportunities."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Charlie Munger</footer>
          </blockquote>
          <p>
            Every time you make a choice, you are not just choosing one thing; you are simultaneously choosing *not* to do countless other things. Opportunity cost is the value of the best option you didn't take. It's the invisible price tag on every decision.
          </p>
          <p className="mt-2">
            Thinking in terms of opportunity cost forces you to compare your chosen path not against nothing, but against the best available alternative. This simple shift in perspective can dramatically improve your decision-making.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Opportunity Cost in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Your Time:</strong> The two hours you spend watching a mediocre movie isn't "free." The opportunity cost is what you could have done with those two hours: reading a book, exercising, spending time with family, or working on a side project.
            </li>
            <li>
                <strong>Your Money:</strong> The cost of a $100 pair of shoes is not just the $100. It's also the future value that $100 could have generated if you had invested it instead.
            </li>
            <li>
                <strong>Your Career:</strong> Staying in a comfortable but dead-end job for five years has an opportunity cost: the skills, experience, and fulfillment you might have gained in a more challenging role elsewhere.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply This Model</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Ask "What am I giving up?":</strong> Before making any significant commitment of time, money, or energy, explicitly ask yourself this question.
            </li>
            <li>
              <strong>Compare Your Options:</strong> Don't just evaluate a choice on its own merits ("Is this a good idea?"). Evaluate it against your next-best alternative ("Is this a better use of my resources than my other top priority?").
            </li>
            <li>
              <strong>Recognize the Cost of "Yes":</strong> Every time you say yes to something (a project, a social event, a request for your time), you are implicitly saying no to everything else you could be doing in that time. Make your "yeses" count.
            </li>
             <li>
              <strong>Use it to Overcome Procrastination:</strong> The cost of procrastinating on an important task is not zero. The opportunity cost is the progress you've forfeited and the peace of mind you've given up by letting it hang over your head.
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

export default OpportunityCostPage;
