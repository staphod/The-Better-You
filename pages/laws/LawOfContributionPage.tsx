import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfContributionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Contribution</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Give more than you take. The secret to living is giving.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"We make a living by what we get, but we make a life by what we give."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Winston Churchill</footer>
          </blockquote>
          <p>
            The Law of Contribution states that a deep sense of purpose and fulfillment comes from focusing on what you can give to the world rather than what you can get from it. A life focused on "getting" often leads to a feeling of emptiness, as there is never enough. A life focused on "giving"—contributing your unique talents and energy to a cause larger than yourself—creates a lasting sense of meaning, connection, and joy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Meaningful Work:</strong> People who feel their work makes a positive contribution to the lives of others report the highest levels of job satisfaction, regardless of their salary.
            </li>
            <li>
                <strong>Volunteering and Service:</strong> Engaging in acts of service for your community is a direct application of this law and has been scientifically linked to increased happiness and longevity.
            </li>
            <li>
                <strong>Leaving a Legacy:</strong> The desire to leave the world a better place than you found it—whether through raising good children, creating a beautiful piece of art, or building a valuable business—is the law of contribution at its grandest scale.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Contribution</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify Your Unique Gifts:</strong> What are the talents and skills that you can offer to the world? What problems do you feel uniquely equipped to solve?
            </li>
            <li>
              <strong>Find Your "Why":</strong> Connect your daily actions to a larger purpose. Ask yourself, "Who am I helping with this work? What positive impact am I making?"
            </li>
            <li>
              <strong>Start Small and Local:</strong> Contribution doesn't have to be about saving the world. It can be as simple as being a supportive friend, a good neighbor, or a mentor to a younger colleague.
            </li>
             <li>
              <strong>Shift Your Focus in Every Interaction:</strong> In your conversations, try to shift your focus from "What can I get out of this?" to "How can I add value to this person's life?"
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

export default LawOfContributionPage;
