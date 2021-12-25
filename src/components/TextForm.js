import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearBox = () => {
    setText("");
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
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
        <button className="btn btn-primary btn-sm mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{(0.08 * text.length).toFixed(1)} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
