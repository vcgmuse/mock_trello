import React, { useState } from 'react';
import Card from '../components/card/Card.jsx';

const Landing = () => {
    const [currentId, setCurrentId] = useState(3); // Initialize with the next potential ID
    const [cards, setCards] = useState([
        { id: 1, label: "To Do" },
        { id: 2, label: "In Progress" },
        { id: 3, label: "Done" }
    ]);

    const addCard = () => {
        const newId = currentId + 1;
        setCurrentId(newId);
        const newCard = { id: newId, label: `New Card` };
        setCards([...cards, newCard]);
    };

    const deleteCard = (idToDelete) => {
        const updatedCards = cards.filter(card => card.id !== idToDelete);
        setCards(updatedCards);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Mock Trello</h1>
            <div
                style={{ backgroundColor: 'silver', maxWidth: '8rem', borderRadius: '15%', cursor: 'pointer', textAlign: 'center', padding: '5px' }}
                onClick={addCard}
            >
                Add a Card
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                {cards.map(card => (
                    <Card
                        key={card.id} // Unique key for React
                        id={card.id}   // The specific ID of this card
                        label={card.label}
                        deleteCard={deleteCard}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default Landing;