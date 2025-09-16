import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartbeatIcon } from '@/components/icons/ModuleIcons';

const LawOfRenewalPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartbeatIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Renewal</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Rest is part of work. You must regularly "sharpen the saw" to maintain your effectiveness.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Give me six hours to chop down a tree and I will spend the first four sharpening the axe."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Abraham Lincoln</footer>
          </blockquote>
          <p>
            The Law of Renewal states that sustained high performance requires regular periods of rest, recovery, and recreation. Many people believe that the path to success is a relentless, non-stop grind. This law argues the opposite: without deliberate renewal, your physical, mental, and creative energies will deplete, leading to burnout and diminished returns (see Law of Diminishing Returns). Rest is not a luxury; it is a strategic necessity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Four Dimensions of Renewal</h2>
          <p>Stephen Covey, in "The 7 Habits of Highly Effective People," outlines four key dimensions that require regular renewal:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Physical:</strong> This includes proper sleep, nutrition, and exercise. It's the foundation of your energy.
            </li>
            <li>
                <strong>Mental:</strong> This involves learning, reading, planning, and writing. It keeps your mind sharp and engaged.
            </li>
            <li>
                <strong>Social/Emotional:</strong> This is about connecting with others, practicing empathy, and building strong relationships.
            </li>
            <li>
                <strong>Spiritual:</strong> This relates to your connection to your values, purpose, and inner peace. It can be cultivated through meditation, prayer, time in nature, or reflection.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Renewal</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Prioritize Sleep:</strong> Sleep is the most powerful performance-enhancing activity available. Consistently getting 7-9 hours of quality sleep is non-negotiable for long-term effectiveness.
            </li>
            <li>
              <strong>Schedule Downtime:</strong> Just as you schedule important meetings, schedule time for rest and recreation in your calendar. This includes daily breaks, weekly time off, and regular vacations.
            </li>
            <li>
              <strong>Engage in "Active Recovery":</strong> Renewal doesn't always mean doing nothing. Activities like a walk in nature, a hobby unrelated to your work, or quality time with loved ones can be more restorative than passively watching TV.
            </li>
             <li>
              <strong>Practice Detachment:</strong> Learn to mentally "switch off" from work. When you are not working, be fully present in your leisure. This allows your subconscious mind to rest and solve problems in the background.
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

export default LawOfRenewalPage;
