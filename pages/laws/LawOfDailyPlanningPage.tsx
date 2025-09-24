import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';

const LawOfDailyPlanningPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Daily Planning</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Plan your day before it starts. Every minute spent in planning saves ten minutes in execution.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If you fail to plan, you are planning to fail."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Benjamin Franklin</footer>
          </blockquote>
          <p>
            The Law of DailyPlanning states that the simple act of creating a written plan for your day before you begin gives you a massive advantage in productivity and focus. A plan acts as a roadmap, guiding you through the inevitable distractions and interruptions of the day. It allows you to be proactive, working on your priorities, rather than reactive, responding to the demands of others.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why Daily Planning is a Game-Changer</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>It Creates Clarity:</strong> Planning forces you to think about what is truly important for the day ahead, separating the vital few tasks from the trivial many.
            </li>
            <li>
                <strong>It Overcomes "Decision Fatigue":</strong> By making your decisions ahead of time, you conserve your mental energy for executing the tasks themselves, rather than wasting it trying to figure out what to do next.
            </li>
            <li>
                <strong>It Provides a Sense of Control:</strong> Starting your day with a clear plan provides a sense of calm and control. Even if the day doesn't go exactly as planned, you have a framework to return to.
            </li>
            <li>
                <strong>It Increases Your Return on Energy:</strong> The "10-to-1" rule, popularized by Brian Tracy, suggests that the 10-15 minutes you spend planning your day will save you up to two hours of wasted time and unfocused effort.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">A Simple Daily Planning Method</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Do It the Night Before:</strong> The best time to plan your day is the evening before. This allows your subconscious mind to work on the plan while you sleep, and you can wake up ready to execute immediately.
            </li>
            <li>
              <strong>Work from a Master List:</strong> Keep a running master list of all your tasks and projects. Each evening, pull tasks from this list to create your plan for the next day.
            </li>
            <li>
              <strong>Identify Your MIT:</strong> Ask yourself, "If I could only do one thing on this list tomorrow, what is the one task that would have the greatest positive impact on my life and work?" This is your Most Important Task (MIT). Mark it as "1."
            </li>
             <li>
              <strong>Prioritize the Rest:</strong> Use a simple A-B-C-D-E method or 1-2-3 numbering to prioritize the remaining tasks. Always start your day with your #1 task (see Law of Priorities - Hardest First).
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

export default LawOfDailyPlanningPage;