import React, { useState, useMemo } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { addictions } from '@/data/addictions';
import type { Addiction, AddictionCategory } from '@/types';
import { AddictionIcon } from '@/components/icons/ModuleIcons';

const Accordion: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }> = ({ title, children, isOpen, onToggle }) => (
  <div className="border border-slate-200 rounded-lg bg-brand-surface shadow-sm">
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-left text-brand-text bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg className={`w-6 h-6 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
    </h2>
    {isOpen && (
      <div className="p-5 border-t border-slate-200 bg-white">
        {children}
      </div>
    )}
  </div>
);

const AddictionItem: React.FC<{ addiction: Addiction }> = ({ addiction }) => {
  const { Link } = ReactRouterDom;
  return (
    <Link to={`/addiction/${addiction.id}`} className="block p-4 -mx-4 rounded-lg hover:bg-brand-bg transition-colors">
      <h3 className="font-semibold text-brand-primary">{addiction.title}</h3>
      <p className="text-sm text-brand-text-muted mt-1">{addiction.description.split('.')[0]}.</p>
    </Link>
  );
};


const AddictionsPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<AddictionCategory | null>('Substance Addictions');

  const groupedAddictions = useMemo(() => {
    return addictions.reduce((acc, addiction) => {
      (acc[addiction.category] = acc[addiction.category] || []).push(addiction);
      return acc;
    }, {} as Record<AddictionCategory, Addiction[]>);
  }, []);

  const toggleAccordion = (category: AddictionCategory) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  const categories: AddictionCategory[] = ["Substance Addictions", "Behavioral Addictions", "Digital/Emerging Addictions"];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
           <AddictionIcon className="h-10 w-10 text-brand-primary"/>
           <h1 className="text-3xl font-bold text-brand-text">Addiction Awareness</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Take a confidential self-assessment to better understand your habits. These tests are for educational purposes and are not a substitute for professional medical advice.
          <span className="block text-sm mt-2">An internet connection is required to load individual assessments.</span>
        </p>
      </div>
      
      <div className="space-y-4">
        {categories.map(category => (
          groupedAddictions[category] && (
            <Accordion 
              key={category}
              title={category}
              isOpen={openAccordion === category}
              onToggle={() => toggleAccordion(category)}
            >
              <div className="space-y-2">
                {groupedAddictions[category].map(addiction => (
                  <AddictionItem key={addiction.id} addiction={addiction} />
                ))}
              </div>
            </Accordion>
          )
        ))}
      </div>
    </div>
  );
};

export default AddictionsPage;