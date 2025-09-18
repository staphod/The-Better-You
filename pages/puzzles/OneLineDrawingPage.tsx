import React, { useState, useEffect, useCallback, useRef } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { oneLinePuzzles } from '@/data/oneLinePuzzles';
import type { OneLinePuzzle } from '@/types';
import OneLinePuzzleComponent, { OneLinePuzzleRef } from '@/components/OneLinePuzzle';
import Sparks from '@/components/Sparks';
import { OneLineIcon } from '@/components/icons/PuzzleIcons';

const OneLineDrawingPage: React.FC = () => {
  const { Link } = ReactRouterDom;
  const puzzleRef = useRef<OneLinePuzzleRef>(null);
  const [currentPuzzle, setCurrentPuzzle] = useState<OneLinePuzzle | null>(null);
  const [showSparks, setShowSparks] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const loadNextPuzzle = useCallback(() => {
    const puzzlePool = oneLinePuzzles.filter(p => p.id !== currentPuzzle?.id);
    const pool = puzzlePool.length > 0 ? puzzlePool : oneLinePuzzles;
    const nextPuzzle = pool[Math.floor(Math.random() * pool.length)];
    
    setCurrentPuzzle(nextPuzzle);
    setIsCompleted(false);
  }, [currentPuzzle]);

  useEffect(() => {
    // Load the first puzzle on initial mount
    setCurrentPuzzle(oneLinePuzzles[0]);
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
    puzzleRef.current?.reset();
  };

  if (!currentPuzzle) {
    return <div className="text-center">Loading puzzle...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      {showSparks && <Sparks />}
      <Link to="/puzzles" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Puzzles Menu</Link>
      
      <div className="flex justify-center items-center gap-3 mb-2">
        <OneLineIcon className="h-10 w-10 text-brand-primary" />
        <h1 className="text-3xl font-bold text-brand-text">One-Line Drawing</h1>
      </div>
      <p className="text-lg text-brand-text-muted mb-6">
        Trace the entire shape with a single line without lifting your finger or retracing a path.
      </p>
      {currentPuzzle.startNode !== undefined && (
          <p className="text-sm font-semibold text-brand-success mb-4">You must start at the green dot!</p>
      )}

      <div className="relative aspect-square max-w-full w-[500px] mx-auto mb-4">
        <OneLinePuzzleComponent 
          ref={puzzleRef}
          key={currentPuzzle.id} 
          puzzle={currentPuzzle} 
          onComplete={handleComplete}
          onReset={handleReset} 
        />
        {isCompleted && (
          <div className="absolute inset-0 bg-brand-success/80 flex items-center justify-center rounded-lg animate-fade-in pointer-events-none">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white animate-tada">Solved!</h2>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <button
          onClick={handleForceReset}
          className="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors flex-grow sm:flex-grow-0"
          aria-label="Reset puzzle"
        >
          Reset
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

export default OneLineDrawingPage;
