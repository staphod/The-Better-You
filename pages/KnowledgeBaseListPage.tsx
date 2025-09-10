import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { testListings } from '@/data/tests';
import type { TestListing } from '@/types';
import { BookOpenIcon } from '@/components/icons/ModuleIcons';

const KnowledgeBaseItem: React.FC<{ test: TestListing }> = ({ test }) => {
  const { Link } = ReactRouterDom;
  return (
    <Link to={`/tests/knowledge-base/${test.id}`} className="block group">
        <div className="flex items-center p-4 sm:p-6 border border-slate-200 rounded-lg bg-brand-surface shadow-sm transition-all duration-200 group-hover:border-brand-primary group-hover:shadow-md">
            <div className="flex-shrink-0 mr-4">
                <div className="bg-brand-accent/10 text-brand-accent rounded-lg p-3">
                    <test.icon className="h-6 w-6" />
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-lg font-semibold text-brand-primary truncate group-hover:text-brand-accent transition-colors">About: {test.title}</p>
                <p className="text-sm text-brand-text-muted">Learn the theory and explore all outcomes for this test.</p>
            </div>
            <div className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </Link>
  );
};

const KnowledgeBaseListPage: React.FC = () => {
  const { Link } = ReactRouterDom;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
            <BookOpenIcon className="h-10 w-10 text-brand-primary"/>
            <h1 className="text-3xl font-bold text-brand-text">Knowledge Base</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Select a test below to learn about the theory behind it and explore detailed explanations of all possible results.
        </p>
         <Link to="/tests" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to Discovery Tests Home</Link>
      </div>
      <div className="space-y-4">
        {testListings.map((test) => (
          <KnowledgeBaseItem key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBaseListPage;