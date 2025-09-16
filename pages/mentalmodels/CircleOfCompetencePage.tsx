import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const CircleOfCompetencePage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Circle of Competence</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Know your limits and operate where you have an advantage.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is the Circle of Competence?</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"What an investor needs is the ability to correctly evaluate selected businesses. Note that word 'selected': You don't have to be an expert on every company, or even many. You only have to be able to evaluate companies within your circle of competence. The size of that circle is not very important; knowing its boundaries, however, is vital."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Warren Buffett</footer>
          </blockquote>
          <p>
            Popularized by investors Warren Buffett and Charlie Munger, the Circle of Competence is a simple but powerful mental model. It suggests that each of us, through experience and study, has built up expertise in certain areas. This area is your "Circle of Competence." Inside the circle, you know your stuff. Outside the circle, you don't.
          </p>
          <p className="mt-2">
            The key insight is not how large your circle is, but how well you know its boundaries. People get into trouble when they make decisions outside their circle, where they have no real knowledge or advantage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Dunning-Kruger Effect: The Danger of Being Unaware</h2>
          <p>
            The Circle of Competence is closely related to the Dunning-Kruger effect, a cognitive bias where people with low ability in a task overestimate their ability. They are "unconsciously incompetent"—they don't know what they don't know, so they are unaware of their own circle's boundary. Truly competent people, on the other hand, are more aware of the vastness of what they don't know.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Define and Use Your Circle</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>1. Honestly Assess Your Knowledge:</strong> What topics do you genuinely understand deeply? Not just surface-level knowledge, but a real grasp of the fundamentals. This could be your profession, a long-term hobby, or a subject you've studied extensively. Be brutally honest.
            </li>
            <li>
              <strong>2. Respect the Boundary:</strong> When a decision or problem falls outside your circle, you have three options:
                <ul className="list-disc list-inside mt-2 pl-4 text-sm">
                    <li><strong>Avoid it:</strong> This is often the smartest choice, especially in high-stakes areas like investing. It's okay to say, "I don't know enough to have an opinion here."</li>
                    <li><strong>Consult an Expert:</strong> Find someone whose circle of competence covers this area and learn from them.</li>
                    <li><strong>Expand Your Circle:</strong> If it's an important area, commit to the hard work of learning and practice required to genuinely expand your circle. This takes time and cannot be rushed.</li>
                </ul>
            </li>
            <li>
              <strong>3. Operate with Confidence Inside the Circle:</strong> When a great opportunity appears inside your circle of competence, you can act with speed and confidence because you understand the variables and have a true advantage.
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

export default CircleOfCompetencePage;
