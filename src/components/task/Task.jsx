import React from 'react'
import Click from '../card/Click'
import { useState } from 'react'

const Task = (props) => {
    const { label } = props; // Destructure task from props
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
      setIsVisible(false); // Hides the card when delete is clicked
    };
  
    const [editableLabel, setEditableLabel] = useState(label);

    const handleLabelChange = (event) => {
      setEditableLabel(event.target.value); // Update the label as the user types
    };

    if (!isVisible) {
      return null; // Render nothing if the card is not visible
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: 'black', backgroundColor: '#fff', padding: '10px', margin: '10px 0', borderRadius: '3px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
        <Click />
        <input
          type="text"
          value={editableLabel}
          onChange={handleLabelChange}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: 'black',
            outline: 'none',
            flex: 1,
            marginRight: '10px',
          }}
        />
        <div
          style={{
            cursor: "pointer", // Optional: Better UX
            color: "red", // Optional: Indicate delete action visually
          }}
          onClick={handleDelete} // Trigger internal delete logic
        >
          Delete
        </div>
      </div>
    )
}

export default Task