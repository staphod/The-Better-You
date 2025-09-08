import React from 'react';
import { credits } from '@/data/credits';
import { HeartIcon } from '@/components/icons/StatusIcons';

const CreditsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text-primary">Credits & Acknowledgements</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
          This application was made possible by the following incredible people, projects, and resources. We are deeply grateful for their contributions.
        </p>
      </div>

      <div className="space-y-8">
        {credits.map((category) => (
          <div key={category.title} className="bg-brand-surface p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-brand-primary border-b pb-3 mb-4">{category.title}</h2>
            <ul className="space-y-4">
              {category.items.map((item) => (
                <li key={item.name}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-600 hover:underline">
                      {item.name}
                    </a>
                  ) : (
                    <h3 className="text-lg font-bold text-brand-text-primary">{item.name}</h3>
                  )}
                  <p className="text-brand-text-secondary mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditsPage;
