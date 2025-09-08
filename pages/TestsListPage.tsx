
import React from 'react';
import { Link } from 'react-router-dom';
import { testListings } from '../data/tests';
import type { TestListing } from '../types';

const TestItem: React.FC<{ test: TestListing }> = ({ test }) => {
  return (
    <Link to={`/test/${test.id}`} className="block hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center p-4 sm:p-6 border rounded-lg bg-brand-surface shadow-sm">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-brand-secondary text-white rounded-lg p-3">
            <test.icon className="h-6 w-6" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-semibold text-brand-primary truncate">{test.title}</p>
          <p className="text-sm text-brand-text-secondary">{test.summary}</p>
        </div>
        <div className="ml-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const TestsListPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <h1 className="text-3xl font-bold text-brand-text-primary">Discovery Tests</h1>
        <p className="mt-2 text-lg text-brand-text-secondary">
          Select a test below to begin. An internet connection is required to load the test questions.
        </p>
      </div>
      <div className="space-y-4">
        {testListings.map((test) => (
          <TestItem key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default TestsListPage;
