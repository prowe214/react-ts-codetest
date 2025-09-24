import type { Card as CardType } from '../types';
import './Card.css';

interface CardProps {
  card: CardType;
  onClick: (id: number) => void;
}

export const Card = ({ card, onClick }: CardProps) => {
  const handleClick = () => {
    if (!card.isMatched && !card.isFlipped) {
      onClick(card.id);
    }
  };

  return (
    <button
      className={`card ${card.isFlipped ? 'flipped' : ''} ${
        card.isMatched ? 'matched' : ''
      }`}
      onClick={handleClick}
      type="button"
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.emoji}</div>
      </div>
    </button>
  );
};
