import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon } from '@/components/icons/ModuleIcons';

const LawOfContinuousLearningPage: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <BrainIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Continuous Learning</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Never stop learning. Your growth stops the moment you believe you know enough.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Live as if you were to die tomorrow. Learn as if you were to live forever."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Mahatma Gandhi</footer>
          </blockquote>
          <p>
            The Law of Continuous Learning posits that in a constantly evolving world, your greatest asset is your ability to learn, unlearn, and relearn. Formal education gives you a foundation, but self-education is a lifelong commitment that keeps you adaptable, relevant, and growing. Those who are most successful are often the most dedicated students of their craft and of life itself.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Technology:</strong> A software developer who stops learning new programming languages and frameworks will find their skills obsolete within a few years. Continuous learning is a requirement for survival in the field.
            </li>
            <li>
                <strong>Leadership:</strong> The most effective leaders are voracious readers and learners. They constantly seek new ideas on management, psychology, and industry trends to better guide their teams.
            </li>
            <li>
                <strong>Personal Finance:</strong> The financial landscape is always changing. Someone who continuously learns about investing, taxes, and economic trends is better equipped to build and protect their wealth than someone who relies on outdated knowledge.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Become a Lifelong Learner</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Read Voraciously:</strong> Make reading a non-negotiable daily habit. Read both within your field to develop depth and outside of it to develop breadth and creativity.
            </li>
            <li>
              <strong>Adopt a "Student" Mindset:</strong> Approach every situation and every person with the belief that they have something to teach you. Be humble and open to new perspectives.
            </li>
            <li>
              <strong>Embrace Formal and Informal Learning:</strong> Take online courses, attend seminars, listen to educational podcasts, and watch documentaries. Learning doesn't have to be expensive or time-consuming.
            </li>
             <li>
              <strong>Apply What You Learn:</strong> Knowledge is useless without application (see Law of Application). Actively look for ways to use your new knowledge. This solidifies your understanding and turns information into wisdom.
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

export default LawOfContinuousLearningPage;