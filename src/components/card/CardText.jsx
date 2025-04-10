import React, { useState } from 'react';

const CardText = () => {
  const [text, setText] = useState("--");

  const editText = (event) => {
    let value = event.target.value;

    // Remove "--" if it appears at the start of the text
    if (value.startsWith("--")) {
      value = value.substring(2);
    }

    // Set state to "--" only if the input is empty (we skip trimming here)
    setText(value === "" ? "--" : value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={editText}
      style={{
        border: "transparent",
        padding: "8px",
        fontSize: "14px",
        outline: "none",
      }}
    />
  );
};

export default CardText;