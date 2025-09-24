import { useState } from 'react';
import type { GameState } from '../types';
import { createInitialCards } from '../utils';
import { Card } from './Card';
import './MemoryGame.css';

export const MemoryGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    cards: createInitialCards(),
    moves: 0,
    isGameOver: false
  });

  const handleCardClick = (id: number) => {
    // TODO: Implement the game logic here
    // Requirements:
    // 1. Handle flipping cards (max 2 at a time)
    // 2. Check for matches
    // 3. Track moves (a move is when 2 cards are flipped)
    // 4. Determine win condition (all cards matched)
    // 5. Handle game over state
  };

  const resetGame = () => {
    setGameState({
      cards: createInitialCards(),
      moves: 0,
      isGameOver: false
    });
  };

  return (
    <div className="memory-game">
      <div className="game-header">
        <div className="game-stats">
          <span>Moves: {gameState.moves}</span>
          <button className="button" type="button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>
      <div className="game-grid-container">
        <div className="game-grid">
          {gameState.cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      {gameState.isGameOver && (
        <div className="game-over">
          <h2>Congratulations! 🎉</h2>
          <p>You won in {gameState.moves} moves!</p>
          <button
            className="button button--success"
            type="button"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};
