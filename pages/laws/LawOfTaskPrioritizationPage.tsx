import React from 'react';
import { Link } from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const LawOfTaskPrioritizationPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Priorities (Hardest First)</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Do the hardest thing first. "Eat that frog" to build unstoppable momentum for your day.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If it's your job to eat a frog, it's best to do it first thing in the morning. And if it's your job to eat two frogs, it's best to eat the biggest one first."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Mark Twain (popularized by Brian Tracy)</footer>
          </blockquote>
          <p>
            This specific application of the Law of Priorities, often called the "Eat That Frog" method, states that you should tackle your most important and challenging task (your "frog") first thing in the morning. This task is typically the one you are most likely to procrastinate on, but it is also the one that will have the greatest positive impact on your life. By doing it first, you ensure it gets done and create a powerful sense of accomplishment that builds momentum for the rest of the day.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why "Eating the Frog" Works</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Peak Energy:</strong> For most people, willpower and cognitive function are at their highest in the morning. By allocating your best energy to your hardest task, you increase your chances of completing it successfully.
            </li>
            <li>
                <strong>Momentum and Motivation:</strong> Completing your most dreaded task gives you a significant psychological boost. The rest of the day feels easier by comparison, and you are motivated by the feeling of accomplishment.
            </li>
            <li>
                <strong>Defeats Procrastination:</strong> The longer you put off an important task, the more mental energy it consumes through stress and guilt. Eating the frog removes this burden immediately.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Identify and Eat Your Frog</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify Your Frog:</strong> At the end of each day, look at your task list for tomorrow and ask: "Which one of these tasks, if I did it, would have the greatest positive impact?" That's your frog.
            </li>
            <li>
              <strong>Prepare the Night Before:</strong> Get everything ready to work on your frog. If it's writing a report, open the document and have your research handy. If it's a workout, lay out your gym clothes. Reduce the friction to getting started.
            </li>
            <li>
              <strong>Take the First Bite:</strong> The moment you start your workday, before checking email or social media, take the first action on your frog. Don't think, just begin.
            </li>
             <li>
              <strong>Work Until It's Done:</strong> Commit to working on your frog without interruption until it is complete. If the task is too large for one session, break it down and commit to finishing a significant chunk of it.
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

export default LawOfTaskPrioritizationPage;