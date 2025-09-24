import { useEffect, useState } from 'react';
import './Instructions.css';

const STORAGE_KEY = 'memoryGameInstructions';

const defaultSteps = {
  flipCards: false,
  checkMatch: false,
  trackMoves: false,
  detectEnd: false,
  handleGameOver: false
};

export const Instructions = () => {
  const [steps, setSteps] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultSteps;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(steps));
  }, [steps]);

  const handleStepChange = (stepId: string) => {
    setSteps((prevSteps) => ({
      ...prevSteps,
      [stepId]: !prevSteps[stepId]
    }));
  };

  return (
    <div className="instructions">
      <details open>
        <summary className="instructions-heading">Instructions</summary>
        <p>
          Complete the game logic by implementing the{' '}
          <code>handleCardClick</code> function in <code>MemoryGame.tsx</code>.
          The game should:
        </p>
        <div className="instruction-list">
          <label>
            <input
              type="checkbox"
              checked={steps.flipCards}
              onChange={() => handleStepChange('flipCards')}
            />
            Allow flipping a maximum of 2 cards at a time
          </label>
          <label>
            <input
              type="checkbox"
              checked={steps.checkMatch}
              onChange={() => handleStepChange('checkMatch')}
            />
            Check if flipped cards match and flip non-matches back after a delay
          </label>
          <label>
            <input
              type="checkbox"
              checked={steps.trackMoves}
              onChange={() => handleStepChange('trackMoves')}
            />
            Track the number of moves (a move is when 2 cards are flipped)
          </label>
          <label>
            <input
              type="checkbox"
              checked={steps.detectEnd}
              onChange={() => handleStepChange('detectEnd')}
            />
            Detect when all cards are matched to end the game
          </label>
          <label>
            <input
              type="checkbox"
              checked={steps.handleGameOver}
              onChange={() => handleStepChange('handleGameOver')}
            />
            Display game over state with final move count
          </label>
        </div>
        <p>
          You may not finish in the time allotted, and that's okay —{' '}
          <strong>
            we're most interested in hearing how you think through the problem
            and explain your approach
          </strong>
          .
        </p>
      </details>
    </div>
  );
};
