import React, { useState, useEffect, useReducer, useRef } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { generateCognitiveClashChallenge } from '@/data/cognitiveClashChallenges';
import type { CognitiveClashChallenge, CognitiveClashChoice } from '@/types';
import { InfoIcon } from '@/components/icons/PuzzleIcons';
import Sparks from '@/components/Sparks';
import HowToPlayModal from '@/components/HowToPlayModal';

const COGNITIVE_CLASH_HIGH_SCORE_KEY = 'cognitiveClashHighScore';
const GAME_TIME_MS = 4000;
const COUNTDOWN_SECONDS = 3;

type GameState = 'idle' | 'countdown' | 'playing' | 'feedback' | 'gameOver';
type GameMode = 'visual' | 'word' | 'mixed';

interface State {
  gameState: GameState;
  score: number;
  highScore: number;
  challenge: CognitiveClashChallenge | null;
  timeLeft: number;
  countdown: number;
  feedback: 'correct' | 'incorrect' | null;
}

type Action =
  | { type: 'START_COUNTDOWN' }
  | { type: 'START_GAME' }
  | { type: 'SET_CHALLENGE'; payload: CognitiveClashChallenge }
  | { type: 'ANSWER'; payload: { correct: boolean } }
  | { type: 'TICK' }
  | { type: 'COUNTDOWN_TICK' }
  | { type: 'GAME_OVER' };

const initialState: State = {
  gameState: 'idle',
  score: 0,
  highScore: 0,
  challenge: null,
  timeLeft: GAME_TIME_MS,
  countdown: COUNTDOWN_SECONDS,
  feedback: null,
};

const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'START_COUNTDOWN':
      return { ...initialState, gameState: 'countdown', highScore: state.highScore };
    case 'START_GAME':
      return { ...state, gameState: 'playing' };
    case 'SET_CHALLENGE':
      return { ...state, challenge: action.payload, timeLeft: GAME_TIME_MS, feedback: null };
    case 'ANSWER':
      return {
        ...state,
        gameState: 'feedback',
        feedback: action.payload.correct ? 'correct' : 'incorrect',
        score: action.payload.correct ? state.score + 1 : state.score,
      };
    case 'TICK':
      return { ...state, timeLeft: state.timeLeft - 100 };
    case 'COUNTDOWN_TICK':
      return { ...state, countdown: state.countdown - 1 };
    case 'GAME_OVER':
      const newHighScore = Math.max(state.score, state.highScore);
      try {
        localStorage.setItem(COGNITIVE_CLASH_HIGH_SCORE_KEY, newHighScore.toString());
      } catch (e) { console.error("Could not save high score to localStorage", e); }
      return { ...state, gameState: 'gameOver', highScore: newHighScore };
    default:
      return state;
  }
};

const CognitiveClashGamePage: React.FC = () => {
  const { Link, useParams } = ReactRouterDom;
  const { mode = 'mixed' } = useParams<{ mode: string }>();
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  useEffect(() => {
    try {
        const storedHighScore = localStorage.getItem(COGNITIVE_CLASH_HIGH_SCORE_KEY);
        if (storedHighScore) {
            initialState.highScore = parseInt(storedHighScore, 10);
        }
    } catch (e) { console.error("Could not read high score from localStorage", e); }
  }, []);

  const loadNextChallenge = () => {
    dispatch({ type: 'SET_CHALLENGE', payload: generateCognitiveClashChallenge(mode as GameMode) });
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (state.gameState === 'countdown') {
      timerRef.current = setInterval(() => dispatch({ type: 'COUNTDOWN_TICK' }), 1000);
    } else if (state.gameState === 'playing') {
      timerRef.current = setInterval(() => dispatch({ type: 'TICK' }), 100);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state.gameState]);

  useEffect(() => {
    if (state.gameState === 'countdown' && state.countdown <= 0) {
      dispatch({ type: 'START_GAME' });
      loadNextChallenge();
    }
  }, [state.countdown, state.gameState]);

  useEffect(() => {
    if (state.gameState === 'playing' && state.timeLeft <= 0) {
      handleAnswer(null); // Timeout is an answer
    }
  }, [state.timeLeft, state.gameState]);
  
  const handleAnswer = (choiceId: string | null) => {
    if (state.gameState !== 'playing' || !state.challenge) return;

    const { type, correctChoiceId } = state.challenge;
    let isCorrect = false;

    switch (type) {
      case 'COMMAND_NOTHING':
        isCorrect = choiceId === null;
        break;
      case 'COMMAND_ANY':
        isCorrect = choiceId !== null;
        break;
      case 'COMMAND_NOT':
        isCorrect = choiceId !== null && choiceId !== correctChoiceId;
        break;
      case 'STROOP':
      case 'COMMAND_DO':
      case 'ASSOCIATION':
      default:
        isCorrect = choiceId === correctChoiceId;
        break;
    }
    
    dispatch({ type: 'ANSWER', payload: { correct: isCorrect } });

    setTimeout(() => {
      if (isCorrect) {
        loadNextChallenge();
        dispatch({ type: 'START_GAME' });
      } else {
        dispatch({ type: 'GAME_OVER' });
      }
    }, 700);
  };

  const renderChoiceButton = (choice: CognitiveClashChoice) => {
    const isWhiteBg = choice.bgColor === 'bg-white';
    const textColor = isWhiteBg ? (choice.color || 'black') : (choice.color || 'white');
    const borderColor = isWhiteBg ? 'border-slate-300' : 'border-transparent';
    const fontSizeClass = choice.isEmoji ? 'text-5xl' : 'text-2xl';

    return (
        <button
          key={choice.id}
          onClick={() => handleAnswer(choice.id)}
          className={`w-full p-4 h-24 sm:h-28 flex items-center justify-center rounded-lg font-bold transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${fontSizeClass} ${choice.bgColor} ${borderColor} border-2`}
          disabled={state.gameState !== 'playing'}
        >
          {choice.icon && <choice.icon className="h-10 w-10" style={{ color: textColor }} />}
          {choice.text && <span style={{ color: textColor }} className={`${!isWhiteBg ? 'text-shadow-sm' : ''}`}>{choice.text}</span>}
        </button>
    );
  };
  
  const renderGame = () => {
    switch (state.gameState) {
      case 'idle':
        return (
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-brand-text mb-2">Welcome to Cognitive Clash!</h2>
            <p className="text-brand-text-muted mb-6">Think fast and follow the instructions. One mistake and the game is over. Good luck!</p>
            <p className="text-lg font-semibold text-brand-text mb-6">High Score: {state.highScore}</p>
            <button
              onClick={() => dispatch({ type: 'START_COUNTDOWN' })}
              className="bg-brand-primary text-white font-bold py-4 px-12 rounded-lg text-xl hover:bg-brand-primary/90 transition-opacity"
            >
              Start Game
            </button>
          </div>
        );
      case 'countdown':
        return <div className="text-7xl font-bold text-brand-accent animate-tada">{state.countdown}</div>;
      case 'playing':
      case 'feedback':
        const progress = (state.timeLeft / GAME_TIME_MS) * 100;
        return (
          <div className="w-full animate-fade-in">
            {state.feedback === 'correct' && <Sparks />}
            <div className="w-full bg-slate-200 rounded-full h-4 mb-6 shadow-inner">
              <div className="bg-brand-primary h-4 rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-3xl font-bold text-brand-text mb-8 min-h-[4rem] flex items-center justify-center">
              {state.challenge?.instruction}
            </p>
            <div className="grid grid-cols-2 gap-4">
                {state.challenge?.choices.map(renderChoiceButton)}
            </div>
          </div>
        );
      case 'gameOver':
        return (
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl font-extrabold text-brand-danger mb-2">Game Over</h2>
            <p className="text-2xl text-brand-text mb-4">Your Score: <span className="font-bold text-brand-primary">{state.score}</span></p>
            <p className="text-lg text-brand-text-muted mb-6">High Score: {state.highScore}</p>
            <button
              onClick={() => dispatch({ type: 'START_COUNTDOWN' })}
              className="bg-brand-primary text-white font-bold py-4 px-12 rounded-lg text-xl hover:bg-brand-primary/90 transition-opacity"
            >
              Play Again
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const modeTitle = mode.charAt(0).toUpperCase() + mode.slice(1);

  return (
    <div className="max-w-2xl mx-auto text-center">
       <HowToPlayModal isOpen={isHowToPlayOpen} onClose={() => setIsHowToPlayOpen(false)} />
       <style>{`.text-shadow-sm { text-shadow: 1px 1px 2px rgba(0,0,0,0.3); }`}</style>
      <Link to="/puzzles/cognitive-clash" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Game Modes</Link>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-brand-text">Clash: {modeTitle}</h1>
             <button onClick={() => setIsHowToPlayOpen(true)} className="text-brand-text-muted hover:text-brand-primary" aria-label="How to play">
                <InfoIcon className="h-6 w-6"/>
            </button>
        </div>
        <div className="text-right">
            <p className="text-sm font-semibold text-brand-text-muted">SCORE</p>
            <p className="text-3xl font-bold text-brand-primary">{state.score}</p>
        </div>
      </div>
       <div className={`bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg min-h-[400px] flex items-center justify-center transition-colors duration-300
        ${state.feedback === 'correct' ? 'bg-green-100' : ''}
        ${state.feedback === 'incorrect' ? 'bg-red-100' : ''}`}>
        {renderGame()}
      </div>
    </div>
  );
};

export default CognitiveClashGamePage;