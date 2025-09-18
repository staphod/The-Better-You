import React from 'react';
import { Link } from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const DiminishingReturnsPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ScaleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Diminishing Returns</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Beyond a certain point, more input yields progressively less output.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Understanding the Law</h2>
          <p>
            The Law of Diminishing Returns is a fundamental principle in economics, but its application extends to nearly every area of life. It states that as you add more of one input to a system while keeping other inputs constant, the marginal benefit you gain from each additional unit of input will eventually start to decrease.
          </p>
          <p className="mt-2">
            Think of watering a plant. The first bit of water is crucial for life. A little more helps it grow strong. But after a certain point, adding more water doesn't help—it can even drown the plant. The return on your effort diminishes and eventually becomes negative.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action: Practical Examples</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Studying:</strong> The first hour of studying for an exam is highly productive. The second and third hours are still useful. By the eighth consecutive hour, you are likely exhausted, and the additional knowledge gained per hour (the return) is minimal.
            </li>
            <li>
                <strong>Exercise:</strong> Working out three times a week brings significant health benefits. Increasing to five times a week brings more, but perhaps not proportionally so. Training seven days a week without rest might lead to injury, a negative return.
            </li>
            <li>
                <strong>Work:</strong> Working 40 hours might produce 40 units of value. Working 60 hours will not produce 60 units; fatigue and burnout decrease your efficiency, so you might only produce 50 units. The return on those extra 20 hours is much lower.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Use This Law to Your Advantage</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify the Point of Diminishing Returns:</strong> In your key activities, try to notice where your effort stops producing significant results. When does "one more hour" of work start to feel draining instead of productive?
            </li>
            <li>
              <strong>Prioritize "Good Enough":</strong> Perfectionism is the enemy of this law. Often, getting a task to 80% completion takes a reasonable amount of effort. The final 20% might take just as long. Ask yourself if that extra effort is truly worth the return.
            </li>
            <li>
              <strong>Diversify Your Efforts:</strong> Once you've hit the point of diminishing returns in one area, your time and energy are better spent on another high-impact activity. Instead of a ninth hour of studying, perhaps one hour of sleep would provide a better return for your exam performance.
            </li>
             <li>
              <strong>Embrace Rest and Recovery:</strong> This law proves that "more" is not always "better." Rest is not laziness; it's a strategic necessity that allows you to reset and make your next period of effort more productive.
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

export default DiminishingReturnsPage;