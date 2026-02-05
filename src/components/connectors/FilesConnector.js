import React, { useRef } from "react";

function FilesConnector(props) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file selection or upload logic here
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
  };
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">File: </span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleButtonClick}
        >
          Upload File
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default FilesConnector;
