import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { DotsIcon } from '@/components/icons/PuzzleIcons';

const DotConnectionPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-2xl mx-auto text-center">
        <Link to="/puzzles" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Puzzles Menu</Link>
        <div className="mt-8 bg-brand-surface p-8 rounded-lg shadow-lg">
            <DotsIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-brand-text">Dot Connection Puzzle</h1>
            <p className="mt-4 text-xl text-brand-text-muted">
                Coming Soon!
            </p>
            <p className="mt-2 text-brand-text-muted">
                This challenging spatial reasoning game is currently under development. Get ready to connect the dots!
            </p>
        </div>
    </div>
  );
};

export default DotConnectionPage;
