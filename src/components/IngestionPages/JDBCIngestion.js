import React, { useEffect, useState } from "react";

import AdvanceContainer from "../advanceControls/AdvanceContainer";
const JDBCIngestion = (props) => {
  const [connectorNames, setConnectorNames] = useState([]);
  const [dbType, setDbType] = useState("");
  const [dbSelected, setDbSelected] = useState("");
  const [jdbcUrl, setJdbcUrl] = useState("");
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
  useEffect(() => {
    // Fetch connectors when the component mounts
    getConnectors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbType]);

  const handleEdit = async (connectorName) => {
    const response = await fetch("/getConnectorDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        connectorName: connectorName,
      }),
    });

    const json1 = await response.json();
    if (json1.success) {
      const connectorDetails = json1.connectorDetails;
      setDbCredentials({
        connectorName: connectorDetails.connectorName,
        host: connectorDetails.host,
        port: connectorDetails.port,
        userName: connectorDetails.userName,
        password: connectorDetails.password,
        srcDb: connectorDetails.srcDb,
        srcTable: connectorDetails.srcTable,
      });
      setJdbcUrl(
        "http://" + connectorDetails.host + ":" + connectorDetails.port
      );
    }
  };

  const getConnectors = async (e) => {
    // e.preventDefault();
    const response = await fetch(
      "/getConnectors",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      []
    );
    const json1 = await response.json();
    console.log("sqlDBconfig", json1);
    console.log("fliteradded", dbType);
    const filteredConnectors = json1.documents.filter(
      (connector) => connector.dbType === dbType
    );

    const names = filteredConnectors.map(
      (connector) => connector.connectorName
    );
    setConnectorNames(names);
    // console.log("Connector Names:", names);
  };

  const handleSelect = (selectedDbType, dbSelected) => {
    setDbType(selectedDbType);
    setDbSelected(dbSelected);
  };

  return (
    <div className="view">
      <div className="d-flex dropdownviews pt-3">
        <div className="dropdown mb-3 mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {dbSelected || "Select Database"}
          </button>
          <ul className="dropdown-menu">
            <li
              className="dropdown-item"
              onClick={() => handleSelect("oracle", "Oracle")}
            >
              Oracle
            </li>

            <li
              className="dropdown-item"
              onClick={() => handleSelect("mysql", "MySql")}
            >
              MySql
            </li>

            <li
              className="dropdown-item"
              onClick={() => handleSelect("postgresql", "PostgreSql")}
            >
              PostgreSql
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={getConnectors}
          >
            {dbCredentials.connectorName || "Saved Connectors"}
          </button>
          <ul className="dropdown-menu">
            {connectorNames.length === 0 ? (
              <li className="dropdown-item" style={{ textDecoration: "none" }}>
                No saved connectors
              </li>
            ) : (
              connectorNames.map((connectorName) => (
                <li
                  className="dropdown-item"
                  style={{ textDecoration: "none" }}
                  key={connectorName}
                  onClick={() => handleEdit(connectorName)}
                >
                  {connectorName}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="form-floating mb-3 m-2">
          <input
            type="text"
            className="form-control"
            value={jdbcUrl}
            id="Jdbc_Url"
            placeholder="JDBC URL"
            disabled
          />
          <label htmlFor="floatingInput">JDBC URL</label>
        </div>
      </div>
      <div className="container d-flex">
        <div className="form-floating mb-3 mx-1">
          <input
            type="text"
            className="form-control"
            value={dbCredentials.userName}
            onChange={onChange}
            name="userName"
            id="jdbcUsername"
            placeholder="UserName:"
            disabled
          />
          <label htmlFor="floatingInput">UserName:</label>
        </div>
        <div className="form-floating mb-3 mx-1">
          <input
            type="text"
            className="form-control"
            value={dbCredentials.srcDb}
            onChange={onChange}
            name="srcDb"
            id="source_db_name"
            placeholder="Source DB Name"
            disabled
          />
          <label htmlFor="floatingInput">Source DB Name:</label>
        </div>
      </div>
      <div className="container d-flex">
        <div className="form-floating mb-3 mx-1">
          <input
            type="password"
            className="form-control"
            value={dbCredentials.password}
            onChange={onChange}
            name="password"
            id="jdbcPassword"
            placeholder="Password:"
            disabled
          />
          <label htmlFor="floatingInput">Password:</label>
        </div>
        <div className="form-floating mb-3 mx-1">
          <input
            type="text"
            className="form-control"
            value={dbCredentials.srcTable}
            onChange={onChange}
            name="srcTable"
            id="source_table_name"
            placeholder="Source Table Name"
            disabled
          />
          <label htmlFor="floatingInput">Source Table Name:</label>
        </div>
      </div>
      <p style={{ color: "#000" }}>
        *Use <strong>'Full Load'</strong> Option for the table which needs Full
        Load. Use <strong>'Incremental'</strong> Option for the table where data
        is comming incremantally.
      </p>
      <AdvanceContainer/>
    </div>
  );
};

export default JDBCIngestion;





























