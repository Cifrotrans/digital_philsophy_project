import React, { useRef, useEffect } from 'react';

const GameOfLifeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 12;
    const aliveColor = 'rgba(0, 130, 255, 0.7)';
    const deadColor = 'rgba(13, 17, 23, 1)';

    let grid: boolean[][];
    let cols: number, rows: number;
    let animationFrameId: number;

    const createGrid = (cols: number, rows: number) => {
      let arr = new Array(cols);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = Math.random() > 0.8; // 20% alive
        }
      }
      return arr;
    };

    const countNeighbors = (grid: boolean[][], x: number, y: number) => {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) continue;
          const col = (x + i + cols) % cols;
          const row = (y + j + rows) % rows;
          sum += grid[col][row] ? 1 : 0;
        }
      }
      return sum;
    };
    
    const update = () => {
      let nextGrid = createGrid(cols, rows);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const state = grid[i][j];
          const neighbors = countNeighbors(grid, i, j);
          if (state && (neighbors < 2 || neighbors > 3)) {
            nextGrid[i][j] = false;
          } else if (!state && neighbors === 3) {
            nextGrid[i][j] = true;
          } else {
            nextGrid[i][j] = state;
          }
        }
      }
      grid = nextGrid;
    };
    
    const draw = () => {
      ctx.fillStyle = deadColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = aliveColor;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j]) {
            ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
          }
        }
      }
    };

    let lastTime = 0;
    const fps = 10;
    const interval = 1000 / fps;

    const animate = (timestamp: number) => {
      if (timestamp - lastTime > interval) {
        lastTime = timestamp;
        update();
        draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const setup = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      const parent = canvas.parentElement;
      if (parent) {
          canvas.width = parent.offsetWidth;
          canvas.height = parent.offsetHeight;
          cols = Math.ceil(canvas.width / cellSize);
          rows = Math.ceil(canvas.height / cellSize);
          grid = createGrid(cols, rows);
          animate(0);
      }
    };

    setup();
    window.addEventListener('resize', setup);
    
    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default GameOfLifeCanvas;
