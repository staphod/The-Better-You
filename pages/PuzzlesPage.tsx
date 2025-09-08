import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { puzzles } from '@/data/puzzles';
import type { Puzzle } from '@/types';
import { FireIcon } from '@/components/icons/StatusIcons';
import Sparks from '@/components/Sparks';

// --- LocalStorage Helper Functions ---

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


// --- Utility Functions ---

const shuffleArray = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);


// --- Component ---

const PuzzlesPage: React.FC = () => {
    const [solvedIds, setSolvedIds] = useState<number[]>([]);
    const [streak, setStreak] = useState<number>(0);
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [showSparks, setShowSparks] = useState(false);
    
    // Derived state, memoized for performance
    const unsolvedPuzzles = useMemo(() => puzzles.filter(p => !solvedIds.includes(p.id)), [solvedIds]);

    const loadNextPuzzle = useCallback(() => {
        setSelectedAnswer(null);
        
        let nextPuzzle: Puzzle | undefined;
        // Re-check unsolved puzzles within this function to ensure it has the latest `solvedIds`
        const currentUnsolved = puzzles.filter(p => !getSolvedPuzzles().includes(p.id));

        if (currentUnsolved.length > 0) {
            const randomIndex = Math.floor(Math.random() * currentUnsolved.length);
            nextPuzzle = currentUnsolved[randomIndex];
        } else {
            // Endless mode: All puzzles solved once, now pick any puzzle randomly.
            const randomIndex = Math.floor(Math.random() * puzzles.length);
            nextPuzzle = puzzles[randomIndex];
        }
        
        if (nextPuzzle) {
            setCurrentPuzzle(nextPuzzle);
            setShuffledOptions(shuffleArray(nextPuzzle.options));
        }
    }, []);

    // Load initial state from localStorage on mount
    useEffect(() => {
        setSolvedIds(getSolvedPuzzles());
        setStreak(getStreak());
        setIsInitialized(true);
    }, []);

    // Load the first puzzle once state is initialized
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
            // Reset streak on incorrect answer
            setStreak(0);
            saveStreak(0);
        }
    };
    
    const getButtonClass = (option: string) => {
        if (!selectedAnswer) {
            return 'bg-brand-surface hover:bg-gray-100 text-brand-text-primary transform hover:scale-105';
        }
        const isCorrectAnswer = option === currentPuzzle?.answer;
        const isSelectedAnswer = option === selectedAnswer;

        if (isCorrectAnswer) {
            // Always highlight correct answer in green after selection
            return 'bg-green-500 text-white shadow-lg animate-tada';
        }
        if (isSelectedAnswer) { // This means it's the incorrect user choice
            // Highlight user's incorrect choice in red
            return 'bg-red-500 text-white animate-shake';
        }
        // Fade out other incorrect options
        return 'bg-brand-surface opacity-50';
    };

    const isCorrect = selectedAnswer === currentPuzzle?.answer;

    return (
        <div className="max-w-2xl mx-auto text-center">
            {showSparks && <Sparks />}
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl font-bold text-brand-text-primary text-left">Mind Puzzles</h1>
                <div className="flex items-center space-x-2 bg-brand-surface px-4 py-2 rounded-full shadow-sm">
                    <FireIcon className={`h-6 w-6 ${streak > 0 ? 'text-orange-500' : 'text-gray-400'}`} />
                    <span className="text-xl font-bold text-brand-text-primary">{streak}</span>
                    <span className="text-sm text-brand-text-secondary">Streak</span>
                </div>
            </div>
            <p className="text-lg text-brand-text-secondary text-left">
                Solved: {solvedIds.length}
            </p>

            {currentPuzzle ? (
                <div key={currentPuzzle.id} className="mt-6 bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-puzzle-enter">
                    <p className="text-xl sm:text-2xl font-medium text-brand-text-primary mb-6 min-h-[6rem] flex items-center justify-center">
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
                             <p className={`font-bold text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                {isCorrect ? 'Correct!' : 'Not quite!'}
                            </p>
                            {!isCorrect && (
                                <p className="text-brand-text-secondary mt-1">The correct answer was: <span className="font-semibold">{currentPuzzle.answer}</span></p>
                            )}
                            <button
                                onClick={loadNextPuzzle}
                                className="mt-4 bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Next Puzzle
                            </button>
                        </div>
                    )}
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