import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const LawOfFeedbackPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Feedback</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Review your progress often. Accurate feedback is the breakfast of champions.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"We all need people who will give us feedback. That's how we improve."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Bill Gates</footer>
          </blockquote>
          <p>
            The Law of Feedback states that the quality and speed of your progress are directly dependent on the quality and speed of the feedback you receive. Just as an airplane constantly course-corrects based on feedback from its navigation systems, you must constantly adjust your actions based on the results you are getting. Without feedback, you are flying blind, unable to know if your efforts are moving you closer to or further from your goal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Athletics:</strong> A coach provides immediate feedback to an athlete, correcting their form and strategy. This rapid feedback loop accelerates improvement far faster than practicing alone.
            </li>
            <li>
                <strong>Product Development:</strong> Companies release a Minimum Viable Product (MVP) to get early feedback from real users. This feedback is then used to iterate and improve the product, preventing them from wasting years building something nobody wants.
            </li>
            <li>
                <strong>Personal Habits:</strong> Tracking your habits provides direct feedback. Seeing a long streak on your calendar (positive feedback) encourages you to continue. Seeing a missed day (negative feedback) prompts you to get back on track.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Implement the Law of Feedback</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Create Measurable Metrics:</strong> You can't get feedback on what you don't measure. For any important goal, establish key metrics to track. For finances, it's your savings rate. For fitness, it might be your weight or how much you can lift.
            </li>
            <li>
              <strong>Conduct Regular Reviews:</strong> Schedule time weekly or monthly to review your progress. What's working? What isn't? What do the numbers tell you? This is your personal board meeting.
            </li>
            <li>
              <strong>Actively Seek Honest Feedback:</strong> Ask trusted mentors, colleagues, or friends for their honest assessment of your performance. Frame it as a request for help: "I'm trying to improve my presentation skills. What is one thing I could do better?"
            </li>
             <li>
              <strong>Treat Feedback as a Gift, Not a Criticism:</strong> Separate your ego from the feedback. Even if it's delivered poorly, there is often a kernel of truth you can use to improve. Thank the person for their input and focus on the lesson.
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

export default LawOfFeedbackPage;
