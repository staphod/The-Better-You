import React, { useState, useEffect, useCallback } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { sequencingPuzzles } from '@/data/sequencingPuzzles';
import type { SequencingPuzzle, SequencingItem } from '@/types';
import Sparks from '@/components/Sparks';

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const SequencingPage: React.FC = () => {
    const { Link } = ReactRouterDom;
    const [currentPuzzle, setCurrentPuzzle] = useState<SequencingPuzzle | null>(null);
    const [userOrder, setUserOrder] = useState<SequencingItem[]>([]);
    const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
    const [draggedItem, setDraggedItem] = useState<SequencingItem | null>(null);
    const [showSparks, setShowSparks] = useState(false);

    const loadNextPuzzle = useCallback(() => {
        setGameState('playing');
        setShowSparks(false);
        const unsolvedPuzzles = sequencingPuzzles.filter(p => p.id !== currentPuzzle?.id);
        const puzzlePool = unsolvedPuzzles.length > 0 ? unsolvedPuzzles : sequencingPuzzles;
        const nextPuzzle = puzzlePool[Math.floor(Math.random() * puzzlePool.length)];
        
        setCurrentPuzzle(nextPuzzle);
        
        const itemsWithIds = nextPuzzle.items.map(content => ({
            id: crypto.randomUUID(),
            content,
        }));
        
        let shuffled;
        do {
            shuffled = shuffleArray(itemsWithIds);
        } while (JSON.stringify(shuffled) === JSON.stringify(itemsWithIds)); // Ensure it's actually shuffled

        setUserOrder(shuffled);
    }, [currentPuzzle]);

    useEffect(() => {
        loadNextPuzzle();
    }, []);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: SequencingItem) => {
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetItem: SequencingItem) => {
        e.preventDefault();
        if (!draggedItem || draggedItem.id === targetItem.id) return;

        const draggedIndex = userOrder.findIndex(item => item.id === draggedItem.id);
        const targetIndex = userOrder.findIndex(item => item.id === targetItem.id);
        
        const newUserOrder = [...userOrder];
        const [removed] = newUserOrder.splice(draggedIndex, 1);
        newUserOrder.splice(targetIndex, 0, removed);

        setUserOrder(newUserOrder);
        setDraggedItem(null);
    };

    const handleCheckAnswer = () => {
        if (!currentPuzzle) return;
        const userSequence = userOrder.map(item => item.content);
        const correctSequence = currentPuzzle.items;
        const isCorrect = JSON.stringify(userSequence) === JSON.stringify(correctSequence);
        
        setGameState(isCorrect ? 'correct' : 'incorrect');
        if (isCorrect) {
            setShowSparks(true);
        }
    };
    
    const getItemClass = (item: SequencingItem) => {
        let baseClass = 'p-4 rounded-lg font-semibold text-left transition-all duration-300 shadow-sm border cursor-grab';

        if (gameState === 'playing') {
             return `${baseClass} bg-brand-surface hover:bg-slate-100 text-brand-text border-slate-300`;
        }
        
        const itemIndex = userOrder.findIndex(i => i.id === item.id);
        const isCorrectPosition = currentPuzzle?.items[itemIndex] === item.content;

        if (gameState === 'correct') {
            return `${baseClass} bg-brand-success text-white border-brand-success animate-tada`;
        }
        
        if (gameState === 'incorrect') {
            return `${baseClass} ${isCorrectPosition ? 'bg-brand-success/80 text-white' : 'bg-brand-danger text-white'} border-transparent animate-shake`;
        }
        
        return baseClass;
    }

    if (!currentPuzzle) {
        return <div className="text-center">Loading puzzle...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto text-center">
            {showSparks && <Sparks />}
            <Link to="/puzzles" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Puzzles Menu</Link>
            <h1 className="text-3xl font-bold text-brand-text text-center">Sequencing Puzzle</h1>
            <p className="text-lg text-brand-text-muted text-center mt-2">{currentPuzzle.category}</p>

            <div className="mt-6 bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-puzzle-enter">
                <p className="text-xl sm:text-2xl font-medium text-brand-text mb-6 min-h-[3rem] flex items-center justify-center">
                    {currentPuzzle.instruction}
                </p>
                <div className="space-y-3">
                    {userOrder.map(item => (
                        <div
                            key={item.id}
                            draggable={gameState === 'playing'}
                            onDragStart={(e) => handleDragStart(e, item)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, item)}
                            className={getItemClass(item)}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
                {gameState !== 'playing' && (
                    <div className="mt-6 text-center animate-fade-in">
                        <p className={`font-bold text-lg ${gameState === 'correct' ? 'text-brand-success' : 'text-brand-danger'}`}>
                           {gameState === 'correct' ? 'Correct! Well done!' : 'Not quite right. Try again!'}
                        </p>
                         {gameState === 'incorrect' && (
                            <button
                                onClick={() => setGameState('playing')}
                                className="mt-4 bg-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors mr-2"
                            >
                                Reset
                            </button>
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
             {gameState === 'playing' && (
                <button
                    onClick={handleCheckAnswer}
                    className="mt-6 bg-brand-primary text-white font-bold py-3 px-12 rounded-lg hover:bg-brand-primary/90 transition-opacity text-lg"
                >
                    Check Answer
                </button>
            )}
        </div>
    );
};

export default SequencingPage;
