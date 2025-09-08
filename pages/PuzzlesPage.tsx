
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { puzzles } from '../data/puzzles';
import type { Puzzle } from '../types';

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

const PuzzlesPage: React.FC = () => {
    const [solvedIds, setSolvedIds] = useState<number[]>(getSolvedPuzzles);
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    
    const unsolvedPuzzles = useMemo(() => puzzles.filter(p => !solvedIds.includes(p.id)), [solvedIds]);
    
    const loadNextPuzzle = useCallback(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        if (unsolvedPuzzles.length > 0) {
            const randomIndex = Math.floor(Math.random() * unsolvedPuzzles.length);
            setCurrentPuzzle(unsolvedPuzzles[randomIndex]);
        } else {
            setCurrentPuzzle(null); // All puzzles solved
        }
    },[unsolvedPuzzles]);

    useEffect(() => {
        loadNextPuzzle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [solvedIds]);
    
    const handleAnswer = (option: string) => {
        if (selectedAnswer) return; // Prevent changing answer

        setSelectedAnswer(option);
        const correct = option === currentPuzzle?.answer;
        setIsCorrect(correct);

        if (correct && currentPuzzle) {
            saveSolvedPuzzle(currentPuzzle.id);
            setTimeout(() => {
                setSolvedIds(prev => [...prev, currentPuzzle.id]);
            }, 1500); // Wait before loading next
        }
    };
    
    const resetProgress = () => {
        localStorage.removeItem('solvedPuzzles');
        setSolvedIds([]);
    }

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
                Solved: {solvedIds.length} / {puzzles.length}
            </p>
             {unsolvedPuzzles.length === 0 && (
                <button onClick={resetProgress} className="mt-4 text-sm text-brand-primary hover:underline">
                    Reset Progress
                </button>
            )}

            {currentPuzzle ? (
                <div className="mt-8 bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                    <p className="text-xl sm:text-2xl font-medium text-brand-text-primary mb-6">
                        {currentPuzzle.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentPuzzle.options.map(option => (
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
                    <h2 className="text-2xl font-bold text-green-500">Congratulations!</h2>
                    <p className="mt-2 text-brand-text-secondary">You have solved all the puzzles!</p>
                </div>
            )}
        </div>
    );
};

export default PuzzlesPage;
