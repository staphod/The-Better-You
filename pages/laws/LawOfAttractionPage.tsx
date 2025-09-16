import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const LawOfAttractionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Attraction</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Your attitude shapes your life. Positive or negative thoughts bring positive or negative experiences into a person's life.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The greatest discovery of my generation is that a human being can alter his life by altering his attitudes."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- William James</footer>
          </blockquote>
          <p>
            The Law of Attraction is the principle that "like attracts like." It suggests that your dominant thoughts and feelings act as magnets, attracting circumstances, people, and opportunities that are in vibrational harmony with them. A consistently positive, grateful, and optimistic attitude will draw positive experiences, while a consistently negative, fearful, and cynical attitude will draw negative ones.
          </p>
           <p className="mt-2">
            This is not about magical thinking, but about the practical effects of your mindset. Your attitude acts as a filter for your perception and a catalyst for your actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>The Optimist:</strong> Someone with a positive attitude sees a setback as a temporary challenge and an opportunity to learn. This mindset makes them resilient and proactive, which in turn attracts solutions and supportive people.
            </li>
            <li>
                <strong>The Cynic:</strong> Someone with a negative attitude sees the same setback as proof that the world is against them. This mindset leads to passivity and complaint, which repels opportunities and helpful people, thus reinforcing their negative view.
            </li>
            <li>
                <strong>Networking:</strong> A person who genuinely believes in the value they offer and approaches networking with enthusiasm and curiosity will attract opportunities. A person who feels insecure and views networking as a chore will project that energy and struggle to make connections.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Cultivate a Positive Attitude</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice Gratitude:</strong> Start or end your day by listing three things you are grateful for. Gratitude is the fastest way to shift your focus from what you lack to what you have, which immediately raises your emotional state.
            </li>
            <li>
              <strong>Control Your Internal Dialogue:</strong> Pay attention to your self-talk. When you catch yourself in a negative thought loop, consciously interrupt it and reframe it. Instead of "This is too hard," try "This is a challenge, and I can figure it out step by step."
            </li>
            <li>
              <strong>Visualize Your Desired Reality:</strong> Spend a few minutes each day feeling the emotions of having already achieved your goals. This isn't about wishing; it's about aligning your emotional state with your desired outcome, which motivates action.
            </li>
             <li>
              <strong>Act "As If":</strong> If you want to be more confident, act as if you are already confident. If you want to be happier, smile and act as if you are already happy. Your physiology can influence your psychology.
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

export default LawOfAttractionPage;