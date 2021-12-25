import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
  };

  const handleClearBox = () => {
    setText("");
  }
  const [text, setText] = useState("Enter Text Here");
  return (
    <div>
      <div>{props.heading}</div>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          onClick={handleClearBox}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary btn-sm" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
