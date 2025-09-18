import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { dotPuzzles } from '@/data/dotPuzzles';
import type { DotPuzzle } from '@/types';
import DotConnectionPuzzle, { DotConnectionPuzzleRef } from '@/components/DotConnectionPuzzle';
import Sparks from '@/components/Sparks';
import { DotsIcon } from '@/components/icons/PuzzleIcons';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const DotConnectionPage: React.FC = () => {
  const puzzleRef = useRef<DotConnectionPuzzleRef>(null);
  const [currentPuzzle, setCurrentPuzzle] = useState<DotPuzzle | null>(null);
  const [showSparks, setShowSparks] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [historyState, setHistoryState] = useState({ canUndo: false, canRedo: false });

  const loadNextPuzzle = useCallback(() => {
    const puzzlePool = dotPuzzles.filter(p => p.id !== currentPuzzle?.id);
    const nextPuzzle = puzzlePool.length > 0 
        ? puzzlePool[Math.floor(Math.random() * puzzlePool.length)] 
        : dotPuzzles[Math.floor(Math.random() * dotPuzzles.length)];
    
    setCurrentPuzzle(nextPuzzle);
    setIsCompleted(false);
  }, [currentPuzzle]);

  useEffect(() => {
    // Load the first puzzle on initial mount
    setCurrentPuzzle(dotPuzzles[0]);
  }, []);

  const handleComplete = useCallback(() => {
    setShowSparks(true);
    setIsCompleted(true);
    setTimeout(() => setShowSparks(false), 2500);
  }, []);
  
  const handleReset = useCallback(() => {
      setIsCompleted(false);
  }, []);

  const handleForceReset = () => {
    const currentId = currentPuzzle?.id;
    if (currentId) {
        // Force remount by creating a new object reference
        setCurrentPuzzle({ ...dotPuzzles.find(p => p.id === currentId)! });
        setIsCompleted(false);
    }
  };

  const handleHint = () => {
    puzzleRef.current?.showHint();
  }

  if (!currentPuzzle) {
    return <div className="text-center">Loading puzzle...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      {showSparks && <Sparks />}
      <Link to="/puzzles" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Puzzles Menu</Link>
      
      <div className="flex justify-center items-center gap-3 mb-2">
        <DotsIcon className="h-10 w-10 text-brand-primary" />
        <h1 className="text-3xl font-bold text-brand-text">Dot Connection</h1>
      </div>
      <p className="text-lg text-brand-text-muted mb-6">
        Connect matching colored dots without crossing the lines. Fill the entire grid to solve the puzzle!
      </p>

      <div className="relative aspect-square max-w-full w-[500px] mx-auto mb-4">
        <DotConnectionPuzzle 
          ref={puzzleRef}
          key={currentPuzzle.id} 
          puzzle={currentPuzzle} 
          onComplete={handleComplete}
          onReset={handleReset} 
          onHistoryChange={setHistoryState}
        />
        {isCompleted && (
          <div className="absolute inset-0 bg-brand-success/80 flex items-center justify-center rounded-lg animate-fade-in pointer-events-none">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white animate-tada">Solved!</h2>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
        <button
          onClick={() => puzzleRef.current?.undo()}
          disabled={!historyState.canUndo || isCompleted}
          className="bg-slate-200 text-brand-text font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          aria-label="Undo move"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8a5 5 0 015 5v1" /></svg>
          <span className="hidden sm:inline">Undo</span>
        </button>
        <button
          onClick={handleHint}
          disabled={isCompleted}
          className="bg-amber-400 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          aria-label="Get a hint"
        >
          <LightbulbIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Hint</span>
        </button>
        <button
          onClick={() => puzzleRef.current?.redo()}
          disabled={!historyState.canRedo || isCompleted}
          className="bg-slate-200 text-brand-text font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          aria-label="Redo move"
        >
          <span className="hidden sm:inline">Redo</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 15l3-3m0 0l-3-3m3 3H5a5 5 0 00-5 5v1" /></svg>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <button
          onClick={handleForceReset}
          className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors flex-grow sm:flex-grow-0"
          aria-label="Reset puzzle"
        >
          Reset Puzzle
        </button>
        <button
          onClick={loadNextPuzzle}
          className="bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-primary/90 transition-opacity flex-grow sm:flex-grow-0"
        >
          Next Puzzle
        </button>
      </div>
    </div>
  );
};

export default DotConnectionPage;