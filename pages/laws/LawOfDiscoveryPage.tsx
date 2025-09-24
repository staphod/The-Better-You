import React from 'react';
import { Link } from 'react-router-dom';
import { OceanIcon } from '@/components/icons/ModuleIcons';

const LawOfDiscoveryPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <OceanIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Discovery</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Curiosity opens doors. Be willing to explore, experiment, and venture into the unknown.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The important thing is not to stop questioning. Curiosity has its own reason for existing."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Albert Einstein</footer>
          </blockquote>
          <p>
            The Law of Discovery posits that new opportunities, knowledge, and solutions are found not by sticking to the well-trodden path, but by exploring the edges of your understanding. It is a call to embrace experimentation, tolerate ambiguity, and follow your curiosity. Discovery requires a willingness to step outside your comfort zone and try new things without a guaranteed outcome.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Scientific Breakthroughs:</strong> Penicillin was discovered by accident when Alexander Fleming noticed mold contaminating a petri dish. His curiosity about this unexpected observation, rather than simply discarding it, led to one of the most important discoveries in medical history.
            </li>
            <li>
                <strong>Career Development:</strong> Taking on a side project in a new area or volunteering for a task outside your job description can lead to the discovery of a hidden talent or passion, opening up entirely new career possibilities.
            </li>
            <li>
                <strong>Travel:</strong> Traveling to a new country and wandering without a strict itinerary often leads to the most memorable discoveries—a hidden restaurant, a beautiful park, a chance conversation—that you would have missed if you stuck only to the tourist map.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Foster Discovery</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Schedule Time for Exploration:</strong> Dedicate time in your week for unstructured exploration of your interests. This could be reading random articles, trying a new hobby, or learning a tangential skill.
            </li>
            <li>
              <strong>Value "Productive Failure":</strong> Run small experiments in your life or work. Treat failure not as a negative outcome, but as the discovery of something that doesn't work, which is valuable information.
            </li>
            <li>
              <strong>Say "Yes" to New Experiences:</strong> Be open to invitations and opportunities that are outside your normal routine. Attend a lecture on a topic you know nothing about. Try a type of food you've never had.
            </li>
             <li>
              <strong>Ask "What If?":</strong> Regularly challenge the status quo by asking "What if?" questions. "What if we tried a completely different approach?" "What if the common assumption is wrong?" This is the starting point for all discovery.
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

export default LawOfDiscoveryPage;