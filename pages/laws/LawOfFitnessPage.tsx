import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BicycleIcon } from '@/components/icons/ModuleIcons';

const LawOfFitnessPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BicycleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Fitness</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Exercise your body and mind. A strong body supports a strong mind, and a strong mind supports a strong body.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Movement is a medicine for creating change in a person's physical, emotional, and mental states."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Carol Welch</footer>
          </blockquote>
          <p>
            The Law of Fitness states that regular physical and mental exercise is essential for optimal well-being. The human body and brain are designed for movement and challenge; without them, they atrophy. Physical fitness improves not only your physical health but also your mood, cognitive function, and resilience to stress. Mental fitness, cultivated through learning and problem-solving, keeps your mind sharp and adaptable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Physical Fitness:</strong> Regular exercise releases endorphins, reduces stress hormones like cortisol, improves sleep quality, and has been shown to be as effective as medication for mild to moderate depression.
            </li>
            <li>
                <strong>Mental Fitness:</strong> Engaging in challenging mental activities like learning a new language, playing a musical instrument, or solving puzzles creates new neural pathways and can help protect against age-related cognitive decline.
            </li>
            <li>
                <strong>The Mind-Body Connection:</strong> A hard workout can clear your mind and help you solve a problem you've been stuck on. A focused mind can help you push through a physical barrier in your training. The two are inextricably linked.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice the Law of Fitness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Move Your Body Daily:</strong> Find a form of physical activity you enjoy and make it a non-negotiable part of your day, even if it's just a brisk 20-minute walk.
            </li>
            <li>
              <strong>Challenge Your Muscles:</strong> Incorporate some form of resistance training (weights, bodyweight exercises) into your week. Building and maintaining muscle mass is crucial for long-term health and metabolism.
            </li>
            <li>
              <strong>Challenge Your Brain:</strong> Never stop learning (see Law of Continuous Learning). Read books, do puzzles, take on new challenges at work, and stay curious.
            </li>
             <li>
              <strong>Listen to Your Body:</strong> Fitness is also about knowing when to rest and recover. Pushing through pain can lead to injury, which is the enemy of consistency (see Law of Renewal).
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

export default LawOfFitnessPage;
