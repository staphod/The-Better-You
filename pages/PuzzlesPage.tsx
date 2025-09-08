import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { puzzles } from '@/data/puzzles';
import type { Puzzle } from '@/types';

const getSolvedPuzzles = (): number[] => {
    try {
        const solved = localStorage.getItem('solvedPuzzles');
        return solved ? JSON.parse(solved) : [];
    } catch (e) {
        console.error("Failed to parse solved puzzles from localStorage", e);
        return [];
    }
};

const saveSolvedPuzzle = (id: number) => {
    const solved = getSolvedPuzzles();
    if (!solved.includes(id)) {
        localStorage.setItem('solvedPuzzles', JSON.stringify([...solved, id]));
    }
};

// Utility to shuffle an array
const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const PuzzlesPage: React.FC = () => {
    const [solvedIds, setSolvedIds] = useState<number[]>(getSolvedPuzzles);
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    
    const unsolvedPuzzles = useMemo(() => puzzles.filter(p => !solvedIds.includes(p.id)), [solvedIds]);
    
    const loadNextPuzzle = useCallback(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        
        let nextPuzzle: Puzzle;

        if (unsolvedPuzzles.length > 0) {
            const randomIndex = Math.floor(Math.random() * unsolvedPuzzles.length);
            nextPuzzle = unsolvedPuzzles[randomIndex];
        } else {
            // Endless mode: All puzzles solved once, now pick any puzzle randomly.
            const randomIndex = Math.floor(Math.random() * puzzles.length);
            nextPuzzle = puzzles[randomIndex];
        }
        
        if (nextPuzzle) {
            setCurrentPuzzle(nextPuzzle);
            setShuffledOptions(shuffleArray(nextPuzzle.options));
        }
    },[unsolvedPuzzles]);

    // This effect runs on mount and whenever loadNextPuzzle function changes (i.e., when unsolvedPuzzles changes)
    useEffect(() => {
        loadNextPuzzle();
    }, [loadNextPuzzle]);
    
    const handleAnswer = (option: string) => {
        if (selectedAnswer || !currentPuzzle) return;

        setSelectedAnswer(option);
        const correct = option === currentPuzzle.answer;
        setIsCorrect(correct);

        if (correct) {
            const isNewSolve = !solvedIds.includes(currentPuzzle.id);
            if (isNewSolve) {
                saveSolvedPuzzle(currentPuzzle.id);
            }
            
            setTimeout(() => {
                if (isNewSolve) {
                    setSolvedIds(prev => [...prev, currentPuzzle.id]);
                } else {
                    // It's a repeat solve in endless mode, just load the next puzzle
                    loadNextPuzzle();
                }
            }, 1500); // Wait before loading next
        }
    };
    
    const getButtonClass = (option: string) => {
        if (!selectedAnswer) {
            return 'bg-brand-surface hover:bg-gray-100';
        }
        if (option === currentPuzzle?.answer) {
            return 'bg-green-500 text-white';
        }
        if (option === selectedAnswer) {
            return 'bg-red-500 text-white';
        }
        return 'bg-brand-surface opacity-60';
    };

    return (
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-brand-text-primary">Mind Puzzles</h1>
            <p className="mt-2 text-lg text-brand-text-secondary">
                Solved: {solvedIds.length}
            </p>

            {currentPuzzle ? (
                <div className="mt-8 bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
                    <p className="text-xl sm:text-2xl font-medium text-brand-text-primary mb-6">
                        {currentPuzzle.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {shuffledOptions.map(option => (
                            <button
                                key={option}
                                onClick={() => handleAnswer(option)}
                                disabled={!!selectedAnswer}
                                className={`p-4 rounded-lg font-semibold text-left transition-all duration-300 disabled:cursor-not-allowed ${getButtonClass(option)}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="mt-8 bg-brand-surface p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-brand-primary">Loading Puzzles...</h2>
                    <p className="mt-2 text-brand-text-secondary">Getting your next challenge ready!</p>
                </div>
            )}
        </div>
    );
};

export default PuzzlesPage;
