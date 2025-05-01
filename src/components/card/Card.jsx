import React, { useState } from "react";
import Click from "./Click";
import CardText from "./CardText";
import Task from "../task/Task";

const Card = (props) => {
  const { label: initialLabel, deleteCard, id } = props; // Destructure initial label from props
  // ... rest of your Card component

  const [label, setLabel] = useState(initialLabel); // State for the label
  const [isVisible, setIsVisible] = useState(true);
  
  const handleLabelChange = (e) => {
    setLabel(e.target.value); // Update label state
  };

  const handleDelete = () => {
    deleteCard(id); // Call the deleteCard function passed from parent
    // setIsVisible(false); // Hides the card when delete is clicked
  };
  if (!isVisible) {
    return null; // Render nothing if the card is not visible
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: ".25rem",
      }}
    >
      <div style={{ width: '300px', backgroundColor: '#f4f5f7', padding: '10px', borderRadius: '5px' }}>
        <input
          type="text"
          value={label}
          onChange={handleLabelChange}
          style={{
            width: '100%',
            padding: '5px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '3px',
          }}
        />
        <Task label="Task 1" />
      </div>
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#e74c3c',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;