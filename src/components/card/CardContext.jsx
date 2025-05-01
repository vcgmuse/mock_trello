// CardContext.js
import { createContext } from 'react';

const CardContext = createContext({
  cards: [], // Optional: Provide initial value
  removeCard: (id) => {}, // Provide a no-op function as initial value
});

export const CardProvider = CardContext.Provider;
export default CardContext;