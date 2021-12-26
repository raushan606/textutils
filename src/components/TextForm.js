import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

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

  const handleCopyClipboard = () => {
    alert("Text Copied to Clipboard");
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("myBox").value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleAlternateCase = () => {
    setText(
      text
        .split("")
        .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    );
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn-outline btn-primary btn-sm mx-2 my-2"
          onClick={handleClearBox}
        >
          Clear Text
        </button>
        <CopyToClipboard text={text}>
          <button
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleCopyClipboard}
          >
            Copy To Clipboard
          </button>
        </CopyToClipboard>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleDownloadText}
        >
          Download Text
        </button>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleAlternateCase}
        >
          aLtErNaTe TeXt
        </button>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Trim Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words | {text.length} characters
        </p>
        <p>{(0.08 * text.length).toFixed(1)} Minutes read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}{" "}
        </p>
      </div>
    </>
  );
}
