import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartIcon } from '@/components/icons/StatusIcons';

const LawOfLovePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Love</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Love is the greatest power. It is the ultimate force for connection, healing, and good in the world.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Martin Luther King Jr.</footer>
          </blockquote>
          <p>
            The Law of Love states that love, in its broadest sense—encompassing compassion, kindness, empathy, and connection—is the most powerful and transformative force in the universe. It is the antidote to fear, hatred, and separation. A life guided by the principle of love is one that seeks to understand rather than judge, to heal rather than harm, and to unite rather than divide. It is the foundation of the most profound human experiences and the highest expression of our character.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Self-Love and Acceptance:</strong> The journey of love begins within. Practicing self-compassion and accepting yourself, flaws and all, is the foundation for being able to genuinely love others.
            </li>
            <li>
                <strong>Empathetic Connection:</strong> Love allows you to see the world from another's perspective, to feel their joy and their pain. This empathetic connection is the basis of all deep and meaningful relationships.
            </li>
            <li>
                <strong>Unconditional Positive Regard:</strong> In parenting, therapy, and friendship, the act of offering unconditional love and support, regardless of mistakes or failures, creates a safe space for growth and healing.
            </li>
            <li>
                <strong>Service and Contribution:</strong> The desire to contribute to the well-being of others is an expression of love for humanity.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Live a Life of Love</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Start with Self-Compassion:</strong> Treat yourself with the same kindness you would offer to a good friend. Forgive your mistakes and celebrate your strengths.
            </li>
            <li>
              <strong>Practice Active Kindness:</strong> Make a daily, conscious effort to perform small acts of kindness for others without expecting anything in return (see Law of Kindness).
            </li>
            <li>
              <strong>Seek to Understand:</strong> Before you judge or condemn, seek to understand. Listen with an open heart and try to see the shared humanity in everyone.
            </li>
             <li>
              <strong>Choose Love Over Fear:</strong> In moments of decision, ask yourself: "Is this choice coming from a place of love, or a place of fear?" Consistently choosing love will lead you toward connection, growth, and fulfillment.
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

export default LawOfLovePage;
