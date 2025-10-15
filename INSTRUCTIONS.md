# Instructions for Code Exercise

0. Create a new git branch for your changes.
1. Complete the game logic by implementing the `handleCardClick` function in `MemoryGame.tsx`.

The game should:

- [ ] Allow flipping a maximum of 2 cards at a time
- [ ] Check if flipped cards match and flip non-matches back after a delay
- [ ] Display game over state when all cards are matched

2. Commit your changes and push to the git remote

- The push will fail, that's okay — ignore the error

You will have **20 minutes** to complete this exercise. You may not finish in the time allotted, but **we're most interested in hearing how you think through the problem and explain your approach**.

## Implementation Details

Your task is to implement the core game logic for the Memory Game. The UI components are already created for you, and you need to add the missing functionality to make the game interactive and functional.

https://github.com/user-attachments/assets/fae114f7-d8ad-4a5a-b506-b1de37159bd8

### Tips:

- Use the existing state variables provided in the component
- Make sure to handle the timing of card flips correctly, particularly when cards need to remain visible temporarily before being hidden again
- Test your implementation thoroughly to ensure all game rules are enforced
