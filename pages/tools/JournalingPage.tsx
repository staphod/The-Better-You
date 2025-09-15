import React, { useState } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PencilIcon } from '@/components/icons/ModuleIcons';
import { journalPrompts } from '@/data/journalPrompts';

const JournalingPage: React.FC = () => {
  const { Link } = ReactRouterDom;
  const [activeCategory, setActiveCategory] = useState(journalPrompts[0].title);

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/strategies" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Tools & Strategies</Link>
      
      <div className="text-center mb-8">
        <PencilIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Art of Journaling</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Your private space to declutter your mind, process emotions, and accelerate your growth.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Why Journal? The Science-Backed Benefits</h2>
          <p>
            Journaling is more than just writing down your thoughts; it's a powerful tool for mental clarity and emotional regulation. By translating your abstract thoughts into concrete words, you engage analytical parts of your brain, which helps you gain perspective and manage stress.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Stress Reduction:</strong> Writing about stressful events helps you process them, reducing their emotional impact.</li>
            <li><strong>Self-Discovery:</strong> Journaling helps you identify patterns in your thoughts, feelings, and behaviors that you might otherwise miss.</li>
            <li><strong>Improved Memory:</strong> Writing things down reinforces them in your memory and helps you organize complex information.</li>
            <li><strong>Goal Achievement:</strong> Regularly writing about your goals keeps them top-of-mind and allows you to track progress and overcome obstacles.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Journaling Prompts to Get You Started</h2>
          <p>The blank page can be intimidating. Use these prompts as a starting point. Don't worry about grammar or making it perfect—just write.</p>

          <div className="my-4 border-b border-gray-200">
            <nav className="-mb-px flex space-x-4" aria-label="Tabs">
              {journalPrompts.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(category.title)}
                  className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeCategory === category.title
                      ? 'border-brand-primary text-brand-primary'
                      : 'border-transparent text-brand-text-muted hover:text-brand-text hover:border-gray-300'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-4">
            {journalPrompts.map((category) => (
              <div key={category.title} className={activeCategory === category.title ? 'block' : 'hidden'}>
                <p className="text-sm italic text-brand-text-muted mb-3">{category.description}</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  {category.prompts.map((prompt, index) => (
                    <li key={index}>{prompt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/strategies" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Tools
          </Link>
      </div>
    </div>
  );
};

export default JournalingPage;
