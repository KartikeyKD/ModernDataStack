import React, { useState } from "react";
import { saveAs } from "file-saver";

function PowerbiConnector() {
  const [text, setText] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(text); // Replace with the URL of your API
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();

      // Save the JSON data to a file
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, "data.pdids");
    } catch (error) {
      console.error("Error fetching and saving data:", error);
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h4>Click to Download your Connector File</h4>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          API URL
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Username"
          onChange={handleOnChange}
          value={text}
          placeholder="Your API URL"
          id="apiUrlInput"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={fetchData}>
        Download File
      </button>
    </div>
  );
}

export default PowerbiConnector;
