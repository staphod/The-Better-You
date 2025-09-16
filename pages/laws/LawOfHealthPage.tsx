import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { HeartbeatIcon } from '@/components/icons/ModuleIcons';

const LawOfHealthPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <HeartbeatIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Health</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Health is wealth. Your physical well-being is the foundation for everything else in your life.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The first wealth is health."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Ralph Waldo Emerson</footer>
          </blockquote>
          <p>
            The Law of Health states that your physical vitality is your most precious asset. Without good health, all other forms of wealth—money, relationships, success—are diminished or meaningless. Your body is the vehicle through which you experience life, and caring for it through proper nutrition, exercise, and rest is not a luxury but a fundamental responsibility. It is an investment that pays the highest dividends in energy, clarity, and longevity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Energy and Productivity:</strong> A healthy, well-rested person has the physical and mental energy to be more focused, creative, and productive than someone who is constantly fatigued or ill.
            </li>
            <li>
                <strong>Mental Clarity:</strong> There is a powerful connection between the gut and the brain. A healthy diet and regular exercise have been shown to reduce symptoms of depression and anxiety and improve cognitive function.
            </li>
            <li>
                <strong>Long-Term Well-being:</strong> The small, daily choices you make regarding your health compound over time, determining your quality of life in your later years.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Invest in Your Health</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Prioritize Sleep:</strong> Aim for 7-9 hours of quality sleep per night. It is the single most effective thing you can do for your physical and mental health.
            </li>
            <li>
              <strong>Move Your Body:</strong> Find a form of exercise you enjoy and make it a consistent part of your routine. A combination of cardiovascular, strength, and flexibility training is ideal (see Law of Fitness).
            </li>
            <li>
              <strong>Eat Real Food:</strong> Focus on a diet rich in whole, unprocessed foods like vegetables, fruits, lean proteins, and healthy fats. Minimize your intake of processed foods, sugar, and industrial seed oils.
            </li>
             <li>
              <strong>Manage Stress:</strong> Chronic stress is toxic to your body. Incorporate stress-management practices like mindfulness, meditation, or spending time in nature into your daily life.
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

export default LawOfHealthPage;
