import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@/components/icons/ModuleIcons';

const AvailabilityHeuristicPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Availability Heuristic</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          If you can think of it, it must be important. Or so our brains tell us.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is the Availability Heuristic?</h2>
          <p>
            The Availability Heuristic is a mental shortcut our brains use to judge the likelihood of an event. We tend to believe that if something can be recalled easily, it must be more probable or more important than things that are harder to recall. This shortcut is often useful, but it can lead to significant errors in judgment because our memory is not a perfect record of statistical reality.
          </p>
          <p className="mt-2">
            Events that are recent, vivid, emotionally charged, or frequently repeated are more "available" in our minds, and we therefore overestimate their frequency.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Heuristic in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Fear of Flying:</strong> After a major plane crash receives widespread media coverage, people often become more afraid of flying, even though the statistical risk remains incredibly low. The vivid, emotional memory of the crash is more "available" than the millions of safe flights that occur.
            </li>
            <li>
                <strong>Performance Reviews:</strong> Managers often fall prey to this by giving more weight to an employee's performance in the weeks leading up to a review (recent) than their performance over the entire year.
            </li>
            <li>
                <strong>Medical Diagnoses:</strong> A doctor who has just diagnosed a rare disease may be more likely to see that same disease in their next patient with similar, vague symptoms, simply because the diagnosis is fresh in their mind.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Counteract the Availability Heuristic</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Seek Out Base Rates:</strong> When making a judgment, actively look for the actual statistics or "base rates." Don't rely on your gut feeling or what you've seen in the news. Ask: "How often does this event actually happen?"
            </li>
            <li>
              <strong>Keep Detailed Records:</strong> To avoid recency bias in evaluations (of yourself or others), keep a journal or log of performance over time. This provides a more balanced data set than relying on memory alone.
            </li>
            <li>
              <strong>Consider the Opposite:</strong> When you have a strong initial judgment, deliberately try to recall examples that contradict it. If you think your favorite team "always" loses in clutch moments, force yourself to remember the times they won.
            </li>
             <li>
              <strong>Expand Your Information Diet:</strong> If your news and social media feeds are constantly showing you one type of story, it will become overly "available." Expose yourself to a wider range of sources and perspectives to create a more balanced mental database.
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

export default AvailabilityHeuristicPage;