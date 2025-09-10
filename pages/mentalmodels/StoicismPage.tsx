import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { PillarIcon } from '@/components/icons/ModuleIcons';

const StoicismPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <PillarIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Stoicism: The Art of Resilience</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          An ancient philosophy for building an unshakable inner fortress in a chaotic world.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Core Principles of Stoicism</h2>
          <p>
            Stoicism is a practical philosophy founded in ancient Greece and Rome. Its primary goal is not to eliminate emotions, but to minimize negative emotions and cultivate a state of inner peace and resilience (<em>apatheia</em>). It does this by focusing on virtue, reason, and accepting the nature of reality.
          </p>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Some things are within our control, and some things are not. It is only after you have faced up to this fundamental rule and learned to distinguish between what you can and can't control that inner tranquility and outer effectiveness become possible."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Epictetus</footer>
          </blockquote>
          <p>The most foundational principle is the <strong>Dichotomy of Control</strong>: understanding the crucial difference between what you can control (your thoughts, judgments, actions) and what you cannot (external events, other people's opinions, your health). A Stoic focuses all their energy on what they can control and accepts the rest with grace.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Key Figures</h2>
           <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Marcus Aurelius:</strong> Roman Emperor and one of the most famous Stoics. His private journal, now known as "Meditations," is a timeless guide to Stoic practice.</li>
            <li><strong>Epictetus:</strong> Born a slave, he became a renowned philosopher whose teachings emphasize the Dichotomy of Control.</li>
            <li><strong>Seneca the Younger:</strong> A statesman, writer, and advisor to Emperor Nero, his letters offer practical advice on dealing with adversity, anger, and mortality.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Applying Stoicism in Modern Life</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Practice the Dichotomy of Control:</strong> When you feel anxious or frustrated, ask yourself: "Is this thing that's upsetting me within my control?" If yes, take action. If no, practice acceptance and focus your energy elsewhere.
            </li>
            <li>
              <strong>Negative Visualization (<em>Premeditatio Malorum</em>):</strong> Periodically imagine losing the things you value most—your job, your possessions, your loved ones. This practice doesn't make you morbid; it makes you profoundly grateful for what you have right now.
            </li>
            <li>
              <strong>View Obstacles as Opportunities:</strong> The Stoics believed that every obstacle is a chance to practice a virtue: patience, courage, creativity, or resilience. As Marcus Aurelius wrote, "The impediment to action advances action. What stands in the way becomes the way."
            </li>
             <li>
              <strong>Journaling:</strong> Like Marcus Aurelius, use a journal to reflect on your day. Review your actions, prepare for the day ahead, and remind yourself of Stoic principles. This is a form of self-coaching.
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

export default StoicismPage;