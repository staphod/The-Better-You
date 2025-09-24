import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@/components/icons/ModuleIcons';

const LawOfUtilizationPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BookOpenIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Utilization</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Use waiting time to learn. Turn every spare moment into an opportunity for growth.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"An investment in knowledge pays the best interest."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Benjamin Franklin</footer>
          </blockquote>
          <p>
            The Law of Utilization states that you can reclaim a significant amount of productive time by using the small, scattered moments of "dead time" throughout your day for learning and growth. These moments—commuting, waiting in line, waiting for a meeting to start—typically add up to one or two hours each day. While most people waste this time scrolling through social media, successful people turn it into a mobile classroom.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>"University on Wheels":</strong> A term coined by Brian Tracy for listening to audiobooks and educational podcasts during your commute. An hour of driving each day can translate into 250+ hours of learning per year—the equivalent of several university semesters.
            </li>
            <li>
                <strong>The Five-Minute Rule:</strong> Having a book or e-reader available at all times allows you to read a few pages while waiting for coffee, in a doctor's office, or before an appointment. These small pockets of time accumulate into dozens of books read per year.
            </li>
            <li>
                <strong>Skill Building:</strong> Using language-learning apps, watching short instructional videos, or reviewing flashcards during spare moments can lead to mastery of a new skill over time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Utilize Your Time Effectively</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Prepare in Advance:</strong> The key to utilizing these moments is to be ready for them. Have your audiobook downloaded, your podcast queued up, or your e-book app accessible on your phone's home screen.
            </li>
            <li>
              <strong>Match the Activity to the Time:</strong> Use very short waits (2-5 minutes) for quick tasks like reviewing flashcards or reading a short article. Use longer periods (like a commute) for more immersive learning like audiobooks or podcasts.
            </li>
            <li>
              <strong>Always Be Learning (ABL):</strong> Adopt the mindset that every moment is a potential opportunity for growth. This changes your relationship with waiting; instead of being a source of frustration, it becomes a welcome chance to learn.
            </li>
             <li>
              <strong>Don't Forget to Rest:</strong> This law is not about filling every single second with productivity. It's about being intentional. Sometimes, the best use of a spare moment is to simply be quiet, breathe, and let your mind rest (see Law of Renewal).
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

export default LawOfUtilizationPage;