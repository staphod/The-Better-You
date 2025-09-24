import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@/components/icons/ModuleIcons';

const LawOfReadingPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BookOpenIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Reading</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Read every day. A reader lives a thousand lives before he dies. The man who doesn't read lives only one.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"In my whole life, I have known no wise people (over a broad subject matter area) who didn't read all the time – none, zero."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Charlie Munger</footer>
          </blockquote>
          <p>
            The Law of Reading states that a daily habit of reading is the most effective and efficient way to acquire new knowledge, gain different perspectives, and learn from the greatest minds in history. Books are a condensed source of wisdom, offering years of experience and research in a matter of hours. By making reading a non-negotiable part of your life, you tap into a limitless well of ideas that can accelerate your personal and professional growth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Warren Buffett:</strong> The legendary investor famously spends up to 80% of his day reading. He attributes his success to this constant accumulation of knowledge, which allows him to make better-informed decisions.
            </li>
            <li>
                <strong>Empathy and Understanding:</strong> Reading fiction allows you to step into the minds and lives of others, fostering empathy and a deeper understanding of the human condition.
            </li>
            <li>
                <strong>Problem Solving:</strong> When you're facing a challenge, it's highly likely that someone has already faced and overcome a similar problem and written about it. Reading allows you to learn from their mistakes and successes without having to make them all yourself.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Build a Reading Habit</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start Small:</strong> Don't try to read a book a day. Start with a goal of reading just one page, or for five minutes, every day. The goal is to build the habit first (see Law of Accumulation).
            </li>
            <li>
              <strong>Schedule It:</strong> Treat reading like an important appointment. Block out time in your calendar, whether it's first thing in the morning, during your lunch break, or before bed.
            </li>
            <li>
              <strong>Always Carry a Book:</strong> Have a physical book, e-book, or audiobook with you at all times. You can turn "dead time" (waiting in line, commuting) into productive reading time.
            </li>
             <li>
              <strong>Quit Books You Don't Enjoy:</strong> Life is too short to finish bad books. If a book isn't grabbing you after 50-100 pages, give yourself permission to quit and find one that does. The goal is to love reading, not to see it as a chore.
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

export default LawOfReadingPage;