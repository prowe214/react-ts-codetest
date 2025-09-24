import type { Card } from './types';

const EMOJIS = ['🎨', '🎮', '🎲', '🎯', '🎸', '🎭'];

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const createInitialCards = (): Card[] => {
  const cards: Card[] = [];
  EMOJIS.forEach((emoji, index) => {
    // Create pairs of cards
    cards.push(
      {
        id: index * 2,
        emoji,
        isFlipped: false,
        isMatched: false
      },
      {
        id: index * 2 + 1,
        emoji,
        isFlipped: false,
        isMatched: false
      }
    );
  });
  return shuffleArray(cards);
};
