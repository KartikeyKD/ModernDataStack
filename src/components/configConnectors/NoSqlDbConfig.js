import React from "react";

function NoSqlDbConfig() {
  return (
    <div>
      <div className="input-group mb-4">
        <span className="input-group">
          <label htmlFor="basic-url" className="form-label">
            Your Database URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              mongodb:
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
        <span className="input-group-text">Database: </span>
        <input
          type="text"
          className="form-control"
          placeholder="Database"
          aria-label="Database"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Collection: </span>
        <input
          type="text"
          className="form-control"
          placeholder="Collection"
          aria-label="Collection"
        />
      </div>
      <div className="container mt-2">
        <button type="button" className="btn btn-primary mx-2">
          Test Configuration
        </button>
        <button type="button" className="btn btn-primary">
          Save Configuration
        </button>
      </div>
    </div>
  );
}

export default NoSqlDbConfig;
