import React, { useState } from "react";

const ApiIngestion = (props) => {
  const [dbCredentials, setDbCredentials] = useState({
    connectorName: "",
    port: "",
    host: "",
    userName: "",
    password: "",
    srcDb: "",
    srcTable: "",
  });
  const onChange = (e) => {
    setDbCredentials({ ...dbCredentials, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <div className="container pt-2">
        <h5>API Ingestion</h5>
      </div>
      <div className="pt-2">
        <div className="container d-flex">
          <div className="form-floating mb-3 mx-1">
            <input
              type="email"
              className="form-control"
              value={dbCredentials.userName}
              onChange={onChange}
              name="userName"
              id="jdbcUsername"
              placeholder="UserName:"
            />
            <label htmlFor="floatingInput">URL:</label>
          </div>
          <div className="form-floating mb-3 mx-1">
            <input
              type="email"
              className="form-control"
              value={dbCredentials.srcDb}
              onChange={onChange}
              name="srcDb"
              id="source_db_name"
              placeholder="Source DB Name"
            />
            <label htmlFor="floatingInput">Host:</label>
          </div>
        </div>
        <div className="container d-flex">
          <div className="form-floating mb-3 mx-1">
            <input
              type="email"
              className="form-control"
              value={dbCredentials.password}
              onChange={onChange}
              name="password"
              id="jdbcPassword"
              placeholder="Password:"
            />
            <label htmlFor="floatingInput">Key:</label>
          </div>
          <div className="form-floating mb-3 mx-1">
            <input
              type="email"
              className="form-control"
              value={dbCredentials.srcTable}
              onChange={onChange}
              name="srcTable"
              id="source_table_name"
              placeholder="Source Table Name"
            />
            <label htmlFor="floatingInput">Parameter:</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIngestion;
