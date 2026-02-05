import React, { useEffect } from "react";

function ApiConnector(props) {
  return (
    <div>
      <div className="input-group mb-4">
        <span className="input-group">
          <label htmlFor="basic-url" className="form-label">
            Your API URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">KEY: </span>
        <input
          type="password"
          className="form-control"
          placeholder="key"
          aria-label="key"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Query Parameter: </span>
        <input
          type="text"
          className="form-control"
          placeholder="Query"
          aria-label="Query"
        />
      </div>
    </div>
  );
}

export default ApiConnector;
