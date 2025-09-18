import type { OneLinePuzzle } from '@/types';

// Coordinates are on a conceptual 5x5 grid (0-4) for consistent spacing.
export const oneLinePuzzles: OneLinePuzzle[] = [
  // 1. House (5 nodes, 6 edges)
  {
    id: 1,
    nodes: [{x: 2, y: 0}, {x: 0, y: 2}, {x: 4, y: 2}, {x: 0, y: 4}, {x: 4, y: 4}],
    edges: [[0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4]],
    startNode: 1, // Must start at 1 or 2
  },
  // 2. A chair-like shape
  {
    id: 2,
    nodes: [{x: 0, y: 0}, {x: 2, y: 0}, {x: 0, y: 2}, {x: 2, y: 2}, {x: 0, y: 4}, {x: 2, y: 4}],
    edges: [[0, 1], [0, 2], [2, 3], [1, 3], [2, 4], [3, 5]],
    startNode: 4, // Odd nodes are 4 and 5
  },
   // 3. A letter 'S' shape
  {
    id: 3,
    nodes: [{x: 4, y: 0}, {x: 0, y: 0}, {x: 0, y: 2}, {x: 4, y: 2}, {x: 4, y: 4}, {x: 0, y: 4}],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
    startNode: 0, // Odd nodes are 0 and 5
  },
  // 4. A simple "fish"
  {
    id: 4,
    nodes: [{x: 0, y: 2}, {x: 2, y: 0}, {x: 2, y: 4}, {x: 4, y: 2}],
    edges: [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3]],
    startNode: 0, // All nodes have even degree. Can start anywhere.
  },
   // 5. A diamond with a line through it
  {
    id: 5,
    nodes: [{x: 2, y: 0}, {x: 0, y: 2}, {x: 4, y: 2}, {x: 2, y: 4}],
    edges: [[0, 1], [0, 2], [1, 3], [2, 3], [1, 2]],
    startNode: 0, // Odd nodes are 0 and 3
  }
];
