import { useState } from 'react';
import type { Cards } from '../types';
import { createInitialCards } from '../utils';
import { Card } from './Card';
import './MemoryGame.css';

export const MemoryGame = () => {
  const [cards, setCards] = useState<Cards>(createInitialCards());
  const [isGameOver, setIsGameOver] = useState(false);

  const handleCardClick = (id: number) => {
    // TODO: Implement the game logic here
    // Requirements:
    // 1. Handle flipping cards (max 2 at a time)
    // 2. Check for matches and flip non-matches back after a delay
    // 3. Display game over state when all cards matched
  };

  const resetGame = () => {
    setCards(createInitialCards());
    setIsGameOver(false);
  };

  return (
    <div className="memory-game">
      <div className="game-header">
        <div className="game-stats">
          <button className="button" type="button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>
      <div className="game-grid-container">
        <div className="game-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      {isGameOver && (
        <div className="game-over">
          <h2>Congratulations! 🎉</h2>
          <p>You won the game!</p>
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
