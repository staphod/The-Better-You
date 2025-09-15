import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useDiary } from '@/hooks/useDiary';
import { DiaryIcon } from '@/components/icons/ModuleIcons';

const DiaryPage: React.FC = () => {
  const { Link } = ReactRouterDom;
  const { entries, deleteEntry } = useDiary();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this diary entry? This action cannot be undone.")) {
      deleteEntry(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-brand-text">My Diary</h1>
          <p className="mt-2 text-lg text-brand-text-muted">
            A secure and private space for your thoughts. All entries are stored only on this device.
          </p>
        </div>
        <Link
          to="/diary/entry/new"
          className="w-full sm:w-auto bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-primary/90 transition-opacity flex-shrink-0"
        >
          + New Entry
        </Link>
      </div>

      {entries.length > 0 ? (
        <div className="space-y-4">
          {entries.map(entry => (
            <div key={entry.id} className="bg-brand-surface p-4 rounded-lg shadow-sm border border-slate-200 group">
              <div className="flex justify-between items-start">
                <Link to={`/diary/detail/${entry.id}`} className="flex-grow">
                  <h2 className="font-bold text-lg text-brand-primary group-hover:text-brand-accent">{entry.title}</h2>
                  <p className="text-sm text-brand-text-muted mt-1">
                    Last modified: {new Date(entry.modified).toLocaleString()}
                  </p>
                </Link>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="p-2 text-slate-400 hover:text-brand-danger hover:bg-red-50 rounded-full transition-colors ml-4"
                  aria-label="Delete entry"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-brand-surface rounded-lg shadow-sm border border-slate-200">
          <DiaryIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-brand-text">Your diary is empty.</h2>
          <p className="text-brand-text-muted mt-2">Click "New Entry" to write down your first thought.</p>
        </div>
      )}
    </div>
  );
};

export default DiaryPage;