import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AiIcon } from '@/components/icons/SocialIcons';

const PurposeAiPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      <Link to="/" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Home</Link>
      <div className="flex items-center gap-3">
        <AiIcon className="h-10 w-10 text-brand-primary"/>
        <h1 className="text-3xl font-bold text-brand-text">Purpose AI</h1>
      </div>
      <p className="text-lg text-brand-text-muted">
        An AI-powered tool to help you find your purpose and achieve personal growth.
      </p>
      <div className="w-full h-[calc(100vh-300px)] min-h-[500px] bg-slate-100 flex items-center justify-center rounded-md overflow-hidden border border-brand-border shadow-lg">
        <iframe
          src="https://purposeai.vercel.app/"
          title="Purpose AI"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
      </div>
    </div>
  );
};

export default PurposeAiPage;
