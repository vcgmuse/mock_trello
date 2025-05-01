import React, { useState } from 'react'

const Click = () => {
    const [isActive, setIsActive] = useState(true);
    const handleClick = ()=> {
        setIsActive(!isActive);
    }
  return (
    <div onClick={handleClick}  style={{
        background: isActive? "green" : "",
        color: isActive ? "white" : "black",
        height: "1rem",
        aspectRatio: "1/1",
        borderRadius: "100%",
        border: ".0625rem solid black",
        
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
        // padding: ".0625rem"
    }}>{isActive ? "✓" : ""}</div>
  )
}

export default Click