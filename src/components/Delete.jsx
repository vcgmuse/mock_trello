import React from 'react'

const Delete = () => {
      const [isVisible, setIsVisible] = useState(true);
    
      const handleDelete = () => {
        setIsVisible(false); // Hides the card when delete is clicked
      };
    
      if (!isVisible) {
        return null; // Render nothing if the card is not visible
      }
  return (
    <div
    style={{
      cursor: "pointer", // Optional: Better UX
      color: "red", // Optional: Indicate delete action visually
    }}
    onClick={handleDelete} // Trigger internal delete logic
  >
    Delete
  </div>  )
}

export default Delete