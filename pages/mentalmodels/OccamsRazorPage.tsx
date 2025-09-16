import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const OccamsRazorPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <ToolsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Occam's Razor</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          "Entities should not be multiplied without necessity."
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <p>
            Named after the 14th-century philosopher William of Ockham, Occam's Razor is a problem-solving principle that suggests when presented with competing hypotheses about the same phenomenon, one should select the solution with the fewest assumptions. In simpler terms, <strong>the simplest explanation is usually the right one.</strong>
          </p>
          <p className="mt-2">
            This doesn't mean the world is always simple. It means we should not invent complex explanations when a simpler one will suffice. Each assumption you add to a theory is another point where it could be wrong.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Occam's Razor in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Medicine:</strong> A doctor is taught, "When you hear hoofbeats, think horses, not zebras." This means to first consider the most common and simple diagnoses before jumping to rare, exotic diseases.
            </li>
            <li>
                <strong>Troubleshooting:</strong> If your lamp isn't working, the simplest explanations are that it's unplugged or the bulb is burnt out. You should check these before assuming there's a complex wiring problem in your house.
            </li>
            <li>
                <strong>Conspiracy Theories:</strong> Conspiracy theories are often the opposite of Occam's Razor. They require a huge number of assumptions to be true (e.g., hundreds of people flawlessly keeping a secret for decades, intricate coordination between rival groups). The simpler explanation is usually that the official story, while perhaps imperfect, is broadly correct.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Wield the Razor</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>List Your Assumptions:</strong> When evaluating a theory or plan, write down all the things that must be true for it to work. The hypothesis with the shortest list of assumptions is often the strongest starting point.
            </li>
            <li>
              <strong>Favor Simple Systems:</strong> When designing a solution, whether it's a piece of software, a workout routine, or a business process, prioritize simplicity. Complex systems have more points of failure.
            </li>
            <li>
              <strong>Cut the Jargon:</strong> If you can't explain something in simple terms, you might not understand it well enough. Using complex language can often hide a lack of clear thinking. Force yourself to be simple and direct.
            </li>
             <li>
              <strong>Remember it's a Heuristic, Not a Law:</strong> The simplest explanation is not *always* right, but it is the most probable starting point. Use Occam's Razor as a tool to guide your initial investigation, not as the final word.
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

export default OccamsRazorPage;
