import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import type { DotPuzzle } from '@/types';
import { useTheme } from '@/hooks/useTheme';

interface DotConnectionPuzzleProps {
  puzzle: DotPuzzle;
  onComplete: () => void;
  onReset: () => void;
  onHistoryChange: (state: { canUndo: boolean; canRedo: boolean }) => void;
}

export interface DotConnectionPuzzleRef {
  undo: () => void;
  redo: () => void;
  showHint: () => void;
}

const DotConnectionPuzzle = forwardRef<DotConnectionPuzzleRef, DotConnectionPuzzleProps>(
  ({ puzzle, onComplete, onReset, onHistoryChange }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { mode } = useTheme();
    const [cellSize, setCellSize] = useState(0);
    const [history, setHistory] = useState<Record<string, { x: number; y: number }[]>[]>([{}]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const paths = history[historyIndex];
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentColor, setCurrentColor] = useState<string | null>(null);

    const updatePaths = (newPaths: Record<string, { x: number; y: number }[]>) => {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newPaths);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    };

    useImperativeHandle(ref, () => ({
      undo: () => {
        if (historyIndex > 0) {
          setHistoryIndex(prev => prev - 1);
        }
      },
      redo: () => {
        if (historyIndex < history.length - 1) {
          setHistoryIndex(prev => prev + 1);
        }
      },
      showHint: () => {
        if (!puzzle.solution) return;

        let hintColor: string | null = null;
        for (const pair of puzzle.pairs) {
          const color = pair.color;
          const currentPath = paths[color];
          const solutionPath = puzzle.solution[color];
          if (!solutionPath || solutionPath.length < 2) continue;

          const isSolved = currentPath &&
                           JSON.stringify(currentPath) === JSON.stringify(solutionPath);

          if (!isSolved) {
            hintColor = color;
            break;
          }
        }
        
        if (hintColor) {
          const solutionPath = puzzle.solution[hintColor];
          const solutionCells = new Set(solutionPath.map(p => `${p.x},${p.y}`));
          
          const newPaths = { ...paths };

          // Clear any other paths that occupy the same cells as the hint's solution
          for (const color in newPaths) {
            if (color !== hintColor) {
              const filteredPath = newPaths[color].filter(p => !solutionCells.has(`${p.x},${p.y}`));
              if (filteredPath.length > 0) {
                newPaths[color] = filteredPath;
              } else {
                delete newPaths[color];
              }
            }
          }

          // Set the correct path for the hint color.
          newPaths[hintColor] = solutionPath;
          updatePaths(newPaths);
        }
      }
    }));

    useEffect(() => {
      onHistoryChange({
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1
      });
    }, [history, historyIndex, onHistoryChange]);

    const getGridCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      if ('touches' in e) {
        if (e.touches.length === 0) return null;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      const x = Math.floor((clientX - rect.left) / cellSize);
      const y = Math.floor((clientY - rect.top) / cellSize);
      
      const clampedX = Math.max(0, Math.min(puzzle.size - 1, x));
      const clampedY = Math.max(0, Math.min(puzzle.size - 1, y));

      return { x: clampedX, y: clampedY };
    };

    const isDot = (x: number, y: number) => {
      for (const pair of puzzle.pairs) {
        if (pair.dots.some(dot => dot.x === x && dot.y === y)) {
          return pair.color;
        }
      }
      return null;
    };
    
    const isPath = (x: number, y: number) => {
      for (const color in paths) {
        if (paths[color].some(point => point.x === x && point.y === y)) {
          return color;
        }
      }
      return null;
    };

    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDarkMode = mode === 'dark';
      const gridColor = isDarkMode ? '#334155' : '#E2E8F0'; // --brand-border values
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let i = 1; i < puzzle.size; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
      }

      for (const color in paths) {
        const path = paths[color];
        if (path.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = cellSize * 0.3; // Thinner path
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.moveTo(path[0].x * cellSize + cellSize / 2, path[0].y * cellSize + cellSize / 2);
          for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x * cellSize + cellSize / 2, path[i].y * cellSize + cellSize / 2);
          }
          ctx.stroke();
        }
      }

      puzzle.pairs.forEach(pair => {
        pair.dots.forEach(dot => {
          ctx.beginPath();
          ctx.fillStyle = pair.color;
          ctx.arc(dot.x * cellSize + cellSize / 2, dot.y * cellSize + cellSize / 2, cellSize * 0.35, 0, 2 * Math.PI); // Smaller dot
          ctx.fill();
        });
      });
    };
    
    useEffect(() => {
        onReset();
        setHistory([{}]);
        setHistoryIndex(0);
    }, [puzzle.id, onReset]);

    useEffect(draw, [paths, puzzle, cellSize, mode]);

    useEffect(() => {
      const checkCompletion = () => {
        const totalCells = puzzle.size * puzzle.size;
        let filledCells = 0;
        for (const color in paths) {
          filledCells += paths[color].length;
        }
        if (filledCells === totalCells && Object.keys(paths).length === puzzle.pairs.length) {
          let allPairsConnected = true;
          for (const pair of puzzle.pairs) {
            const path = paths[pair.color];
            if (!path) {
              allPairsConnected = false;
              break;
            }
            const [start, end] = pair.dots;
            const pathStart = path[0];
            const pathEnd = path[path.length - 1];
            const isConnected = (pathStart.x === start.x && pathStart.y === start.y && pathEnd.x === end.x && pathEnd.y === end.y) ||
                                (pathStart.x === end.x && pathStart.y === end.y && pathEnd.x === start.x && pathEnd.y === start.y);
            if (!isConnected) {
              allPairsConnected = false;
              break;
            }
          }
          if (allPairsConnected) {
            onComplete();
          }
        }
      };
      checkCompletion();
    }, [paths, puzzle, onComplete]);

    const handleStart = (coords: {x: number, y: number} | null) => {
      if (!coords || isDrawing) return;

      // Case 1: Click on an original dot. This starts a new path or overwrites an old one.
      const dotColor = isDot(coords.x, coords.y);
      if (dotColor) {
        setIsDrawing(true);
        setCurrentColor(dotColor);
        updatePaths({ ...paths, [dotColor]: [coords] });
        return;
      }

      // Case 2: Click on the end of a partial path to resume drawing.
      for (const color in paths) {
        const path = paths[color];
        if (path.length > 0) {
          const lastPoint = path[path.length - 1];
          if (lastPoint.x === coords.x && lastPoint.y === coords.y) {
            // Check if this path is already complete. If so, do nothing.
            const pair = puzzle.pairs.find(p => p.color === color)!;
            const [startDot, endDot] = pair.dots;
            const pathStart = path[0];
            const isConnected = (pathStart.x === startDot.x && pathStart.y === startDot.y && lastPoint.x === endDot.x && lastPoint.y === endDot.y) ||
                                (pathStart.x === endDot.x && pathStart.y === endDot.y && lastPoint.x === startDot.x && lastPoint.y === startDot.y);
            
            if (!isConnected) {
              setIsDrawing(true);
              setCurrentColor(color);
              return;
            }
          }
        }
      }
    };

    const handleMove = (coords: {x: number, y: number} | null) => {
      if (!isDrawing || !currentColor || !coords) return;
      
      const currentPath = paths[currentColor];
      const lastPoint = currentPath[currentPath.length - 1];

      if (coords.x === lastPoint.x && coords.y === lastPoint.y) return;
      
      const dx = Math.abs(coords.x - lastPoint.x);
      const dy = Math.abs(coords.y - lastPoint.y);

      if (dx + dy !== 1) return;

      const existingPathColor = isPath(coords.x, coords.y);
      if (existingPathColor && existingPathColor !== currentColor) return;

      const dotOnPath = isDot(coords.x, coords.y);
      if (dotOnPath && dotOnPath !== currentColor) return;
      
      const pointIndex = currentPath.findIndex(p => p.x === coords.x && p.y === coords.y);
      if (pointIndex > -1) {
          updatePaths({ ...paths, [currentColor]: currentPath.slice(0, pointIndex + 1) });
      } else {
          const pair = puzzle.pairs.find(p => p.color === currentColor)!;
          const [startDot, endDot] = pair.dots;
          const pathStart = currentPath[0];
          const isEndDot = (pathStart.x === startDot.x && pathStart.y === startDot.y) 
            ? (coords.x === endDot.x && coords.y === endDot.y)
            : (coords.x === startDot.x && coords.y === startDot.y);
          
          if (dotOnPath === currentColor && isEndDot) {
             setIsDrawing(false);
             setCurrentColor(null);
          }
          updatePaths({ ...paths, [currentColor]: [...currentPath, coords] });
      }
    };
    
    const handleEnd = () => {
      // No longer deletes path on mouse up, allowing for partial paths.
      setIsDrawing(false);
      setCurrentColor(null);
    };
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const handleResize = () => {
          const container = canvas.parentElement;
          if (container) {
              const containerWidth = container.clientWidth;
              const newSize = Math.min(containerWidth, 500);
              canvas.width = newSize;
              canvas.height = newSize;
              setCellSize(newSize / puzzle.size);
              draw();
          }
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [puzzle.size]);

    const handleMouseDown = (e: React.MouseEvent) => handleStart(getGridCoordinates(e));
    const handleMouseMove = (e: React.MouseEvent) => handleMove(getGridCoordinates(e));
    const handleMouseUp = () => handleEnd();
    
    const handleTouchStart = (e: React.TouchEvent) => {
      e.preventDefault();
      handleStart(getGridCoordinates(e));
    };
    const handleTouchMove = (e: React.TouchEvent) => {
      e.preventDefault();
      handleMove(getGridCoordinates(e));
    };
    const handleTouchEnd = () => handleEnd();

    return (
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="bg-brand-surface rounded-lg shadow-inner border-2 border-brand-border cursor-pointer touch-none"
      />
    );
  }
);

export default DotConnectionPuzzle;