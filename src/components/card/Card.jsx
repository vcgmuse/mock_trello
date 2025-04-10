import React, { useState } from "react";
import Click from "./Click";
import CardText from "./CardText";

const Card = () => {
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: ".25rem",
      }}
    >
      <Click />
      <CardText />
      <div
        style={{
          cursor: "pointer", // Optional: Better UX
          color: "red", // Optional: Indicate delete action visually
        }}
        onClick={handleDelete} // Trigger internal delete logic
      >
        Delete
      </div>
      {/* Will be implemented later */}
      {/* <div>Edit</div> */}
    </div>
  );
};

export default Card;