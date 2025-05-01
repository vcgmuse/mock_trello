// OnDelete.jsx
import React, { useContext } from 'react';
import CardContext from '../contexts/CardContext'; // Adjust path

const OnDelete = ({ cardId }) => {
  const { removeCard } = useContext(CardContext);

  const handleDelete = () => {
    removeCard(cardId);
  };

  return (
    <button
      onClick={handleDelete}
      style={{ position: 'absolute', top: '5px', right: '5px', border: 'none', background: 'none', cursor: 'pointer', color: 'red', fontSize: '16px' }}
    >
      X
    </button>
  );
};

export default OnDelete;