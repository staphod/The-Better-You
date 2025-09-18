import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef, useCallback } from 'react';
import type { OneLinePuzzle } from '@/types';
import { useTheme } from '@/hooks/useTheme';

interface OneLinePuzzleProps {
  puzzle: OneLinePuzzle;
  onComplete: () => void;
  onReset: () => void;
}

export interface OneLinePuzzleRef {
  reset: () => void;
}

const getEdgeId = (n1: number, n2: number) => [n1, n2].sort().join('-');

const OneLinePuzzle = forwardRef<OneLinePuzzleRef, OneLinePuzzleProps>(
  ({ puzzle, onComplete, onReset }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { mode } = useTheme();
    
    const [userPath, setUserPath] = useState<number[]>([]);
    const [drawnEdges, setDrawnEdges] = useState<Set<string>>(new Set());
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastNodeIndex, setLastNodeIndex] = useState<number | null>(null);

    const resetPuzzle = useCallback(() => {
      setUserPath([]);
      setDrawnEdges(new Set());
      setIsDrawing(false);
      setLastNodeIndex(null);
      onReset();
    }, [onReset]);

    useImperativeHandle(ref, () => ({
      reset: resetPuzzle,
    }));
    
    useEffect(() => {
      resetPuzzle();
    }, [puzzle, resetPuzzle]);

    const draw = useCallback(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      const { nodes, edges, startNode } = puzzle;
      const width = canvas.width;
      const padding = width * 0.1;
      const drawArea = width - (padding * 2);
      
      const isDarkMode = mode === 'dark';
      const bgColor = isDarkMode ? '#1E293B' : '#FFFFFF';
      const nodeColor = isDarkMode ? '#94A3B8' : '#64748B';
      const edgeColor = isDarkMode ? '#334155' : '#E2E8F0';
      const pathColor = isDarkMode ? '#FBBF24' : '#F59E0B'; // accent
      const startNodeColor = isDarkMode ? '#34D399' : '#10B981'; // success
      
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, width);

      const toCanvasCoords = (node: { x: number; y: number }) => ({
        x: padding + (node.x / 4) * drawArea,
        y: padding + (node.y / 4) * drawArea,
      });

      // Draw all edges in light gray
      ctx.strokeStyle = edgeColor;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      edges.forEach(([n1, n2]) => {
        const pos1 = toCanvasCoords(nodes[n1]);
        const pos2 = toCanvasCoords(nodes[n2]);
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.stroke();
      });
      
      // Draw user's path
      if (userPath.length > 1) {
        ctx.strokeStyle = pathColor;
        ctx.lineWidth = 8;
        ctx.beginPath();
        const startPos = toCanvasCoords(nodes[userPath[0]]);
        ctx.moveTo(startPos.x, startPos.y);
        for (let i = 1; i < userPath.length; i++) {
            const pos = toCanvasCoords(nodes[userPath[i]]);
            ctx.lineTo(pos.x, pos.y);
        }
        ctx.stroke();
      }

      // Draw all nodes
      nodes.forEach((node, index) => {
        const pos = toCanvasCoords(node);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI);
        const isStartNode = startNode !== undefined && index === startNode;
        const isLastPathNode = index === lastNodeIndex;
        
        if (isStartNode) {
            ctx.fillStyle = startNodeColor;
        } else if (isLastPathNode) {
            ctx.fillStyle = pathColor;
        } else {
            ctx.fillStyle = nodeColor;
        }
        ctx.fill();
      });

    }, [puzzle, mode, userPath, lastNodeIndex]);

    useEffect(draw, [draw]);

    useEffect(() => {
        if (drawnEdges.size === puzzle.edges.length) {
            onComplete();
        }
    }, [drawnEdges, puzzle.edges, onComplete]);

    const getTouchedNode = (canvasX: number, canvasY: number): number | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        
        const width = canvas.width;
        const padding = width * 0.1;
        const drawArea = width - (padding * 2);
        const toCanvasCoords = (node: { x: number; y: number }) => ({
            x: padding + (node.x / 4) * drawArea,
            y: padding + (node.y / 4) * drawArea,
        });

        for (let i = 0; i < puzzle.nodes.length; i++) {
            const nodePos = toCanvasCoords(puzzle.nodes[i]);
            const distance = Math.sqrt(Math.pow(canvasX - nodePos.x, 2) + Math.pow(canvasY - nodePos.y, 2));
            if (distance < 20) { // Clickable radius
                return i;
            }
        }
        return null;
    };

    const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();

        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const touchedNodeIndex = getTouchedNode(clientX - rect.left, clientY - rect.top);

        if (touchedNodeIndex !== null) {
            // Can only start a new path or continue from the last node.
            if (userPath.length === 0 || touchedNodeIndex === userPath[userPath.length - 1]) {
                if (puzzle.startNode !== undefined && userPath.length === 0 && touchedNodeIndex !== puzzle.startNode) {
                    // Enforce start node if specified
                    return;
                }
                 setIsDrawing(true);
                 if (userPath.length === 0) {
                     setUserPath([touchedNodeIndex]);
                 }
                 setLastNodeIndex(touchedNodeIndex);
            }
        }
    };
    
    const handleInteractionMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        e.preventDefault();
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
         
        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const touchedNodeIndex = getTouchedNode(clientX - rect.left, clientY - rect.top);
        const lastNode = userPath[userPath.length - 1];

        if (touchedNodeIndex !== null && touchedNodeIndex !== lastNode) {
            const edgeId = getEdgeId(lastNode, touchedNodeIndex);
            
            // Check if edge exists and is not drawn
            const edgeExists = puzzle.edges.some(e => getEdgeId(e[0], e[1]) === edgeId);

            if (edgeExists && !drawnEdges.has(edgeId)) {
                setUserPath(prev => [...prev, touchedNodeIndex]);
                setDrawnEdges(prev => new Set(prev).add(edgeId));
                setLastNodeIndex(touchedNodeIndex);
            }
        }
    };

    const handleInteractionEnd = () => {
        setIsDrawing(false);
    };
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const resizeObserver = new ResizeObserver(() => {
          const container = canvas.parentElement;
          if (container) {
              const size = Math.min(container.clientWidth, 500);
              if(canvas.width !== size) {
                  canvas.width = size;
                  canvas.height = size;
                  draw();
              }
          }
      });
      
      if(canvas.parentElement) {
          resizeObserver.observe(canvas.parentElement);
      }
      
      return () => resizeObserver.disconnect();
    }, [draw, puzzle]);


    return (
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onMouseDown={handleInteractionStart}
        onMouseMove={handleInteractionMove}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchMove={handleInteractionMove}
        onTouchEnd={handleInteractionEnd}
        className="bg-brand-surface rounded-lg shadow-inner border-2 border-brand-border cursor-pointer touch-none w-full h-full"
      />
    );
  }
);

export default OneLinePuzzle;
