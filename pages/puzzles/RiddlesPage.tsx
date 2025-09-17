import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { puzzles } from '@/data/puzzles';
import type { Puzzle } from '@/types';
import { FireIcon } from '@/components/icons/StatusIcons';
import Sparks from '@/components/Sparks';

const SOLVED_PUZZLES_KEY = 'solvedPuzzles';
const PUZZLE_STREAK_KEY = 'puzzleStreak';

const getFromStorage = <T,>(key: string, defaultValue: T): T => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error(`Failed to parse ${key} from localStorage`, e);
        return defaultValue;
    }
};

const saveToStorage = <T,>(key: string, value: T) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(`Failed to save ${key} to localStorage`, e);
    }
};

const getSolvedPuzzles = (): number[] => getFromStorage(SOLVED_PUZZLES_KEY, []);
const saveSolvedPuzzle = (id: number) => {
    const solved = getSolvedPuzzles();
    if (!solved.includes(id)) {
        saveToStorage(SOLVED_PUZZLES_KEY, [...solved, id]);
    }
};
const getStreak = (): number => getFromStorage(PUZZLE_STREAK_KEY, 0);
const saveStreak = (streak: number) => saveToStorage(PUZZLE_STREAK_KEY, streak);

const shuffleArray = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

const RiddlesPage: React.FC = () => {
    const { Link } = ReactRouterDom;
    const [solvedIds, setSolvedIds] = useState<number[]>([]);
    const [streak, setStreak] = useState<number>(0);
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [showSparks, setShowSparks] = useState(false);
    
    const unsolvedPuzzles = useMemo(() => puzzles.filter(p => !solvedIds.includes(p.id)), [solvedIds]);

    const loadNextPuzzle = useCallback(() => {
        setSelectedAnswer(null);
        
        let nextPuzzle: Puzzle | undefined;
        const currentUnsolved = puzzles.filter(p => !getSolvedPuzzles().includes(p.id));

        if (currentUnsolved.length > 0) {
            const randomIndex = Math.floor(Math.random() * currentUnsolved.length);
            nextPuzzle = currentUnsolved[randomIndex];
        } else {
            const randomIndex = Math.floor(Math.random() * puzzles.length);
            nextPuzzle = puzzles[randomIndex];
        }
        
        if (nextPuzzle) {
            setCurrentPuzzle(nextPuzzle);
            setShuffledOptions(shuffleArray(nextPuzzle.options));
        }
    }, []);

    useEffect(() => {
        setSolvedIds(getSolvedPuzzles());
        setStreak(getStreak());
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if(isInitialized) {
            loadNextPuzzle();
        }
    }, [isInitialized, loadNextPuzzle]);
    
    const handleAnswer = (option: string) => {
        if (selectedAnswer || !currentPuzzle) return;

        setSelectedAnswer(option);
        const isCorrect = option === currentPuzzle.answer;

        if (isCorrect) {
            const newStreak = streak + 1;
            setStreak(newStreak);
            saveStreak(newStreak);

            if (!solvedIds.includes(currentPuzzle.id)) {
                saveSolvedPuzzle(currentPuzzle.id);
                setSolvedIds(prev => [...prev, currentPuzzle.id!]);
            }
            setShowSparks(true);
            setTimeout(() => setShowSparks(false), 2500);
        } else {
            setStreak(0);
            saveStreak(0);
        }
    };
    
    const getButtonClass = (option: string) => {
        if (!selectedAnswer) {
            return 'bg-brand-surface hover:bg-slate-100 text-brand-text transform hover:scale-105 border border-slate-200';
        }
        const isCorrectAnswer = option === currentPuzzle?.answer;
        const isSelectedAnswer = option === selectedAnswer;

        if (isCorrectAnswer) {
            return 'bg-brand-success text-white shadow-lg animate-tada border-brand-success';
        }
        if (isSelectedAnswer) {
            return 'bg-brand-danger text-white animate-shake border-brand-danger';
        }
        return 'bg-brand-surface opacity-50 border border-slate-200';
    };

    const isCorrect = selectedAnswer === currentPuzzle?.answer;

    return (
        <div className="max-w-2xl mx-auto text-center">
            {showSparks && <Sparks />}
             <Link to="/puzzles" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Puzzles Menu</Link>
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl font-bold text-brand-text text-left">Logic & Riddles</h1>
                <div className="flex items-center space-x-2 bg-brand-surface px-4 py-2 rounded-full shadow-sm border border-slate-200">
                    <FireIcon className={`h-6 w-6 ${streak > 0 ? 'text-brand-accent' : 'text-slate-400'}`} />
                    <span className="text-xl font-bold text-brand-text">{streak}</span>
                    <span className="text-sm text-brand-text-muted">Streak</span>
                </div>
            </div>
            <p className="text-lg text-brand-text-muted text-left">
                Solved: {solvedIds.length}
            </p>

            {currentPuzzle ? (
                <div key={currentPuzzle.id} className="mt-6 bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-puzzle-enter">
                    <p className="text-xl sm:text-2xl font-medium text-brand-text mb-6 min-h-[6rem] flex items-center justify-center">
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

                    {selectedAnswer && (
                        <div className="mt-6 text-center animate-fade-in">
                             <p className={`font-bold text-lg ${isCorrect ? 'text-brand-success' : 'text-brand-danger'}`}>
                                {isCorrect ? 'Correct!' : 'Not quite!'}
                            </p>
                            {!isCorrect && (
                                <p className="text-brand-text-muted mt-1">The correct answer was: <span className="font-semibold">{currentPuzzle.answer}</span></p>
                            )}
                            <button
                                onClick={loadNextPuzzle}
                                className="mt-4 bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-primary/90 transition-opacity"
                            >
                                Next Puzzle
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="mt-8 bg-brand-surface p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-brand-primary">Loading Puzzles...</h2>
                    <p className="mt-2 text-brand-text-muted">Getting your next challenge ready!</p>
                </div>
            )}
        </div>
    );
};

export default RiddlesPage;
