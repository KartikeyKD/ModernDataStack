import React from "react";

const FilesIngestion = (props) => {
  return (
    <div>
      <div className="container pt-2">
        <h5>File Ingestion</h5>
      </div>
      <div className="container d-flex">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Folder Name:</label>
        </div>
        <div className="dropdown mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            style={{ height: "55px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">
                CSV
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="input-group mb-3 w-50">
          <span className="input-group-text" id="basic-addon1">
            Source Path:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Source Path:"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
};

export default FilesIngestion;
