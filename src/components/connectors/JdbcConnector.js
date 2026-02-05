import React, { useEffect, useState } from "react";

function JdbcConnector(props) {
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [connectorNames, setConnectorNames] = useState([]);
  const [alert, setAlert] = useState(null);
  const [disabled, setDisabled] = useState("");
  const [saveButton, setSaveButton] = useState(true);
  const [editButton, setEditButton] = useState("none");
  const [buttonText, setButtonText] = useState("Create Connector Table");

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
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
    // console.log(json1);
    if (json1.success) {
      // console.log("fliteradded", props.dbtype);
      const filteredConnectors = json1.documents.filter(
        (connector) => connector.dbType === props.dbtype
      );

      const names = filteredConnectors.map(
        (connector) => connector.connectorName
      );
      setConnectorNames(names);
      // console.log("Connector Names:", names);
    }
  };

  useEffect(() => {
    // Fetch connectors when the component mounts
    getConnectors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dbtype]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleSwitchChange = async (connectorName) => {
    setIsSwitchChecked((prevChecked) => !prevChecked);
    setDisabled(isSwitchChecked ? true : "");
    setButtonText(
      isSwitchChecked ? "Create Connector Table" : "Update Connector Table"
    );
  };

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
    setDbCredentials({ ...dbCredentials, [e.target.name]: e.target.value });
  };

  const saveConfig = async (e, saveButton) => {
    props.setProgress(10);
    e.preventDefault();
    if (saveButton === "Create Connector Table") {
      const response = await fetch("/saveConnector", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          connectorName: dbCredentials.connectorName,
          host: dbCredentials.host,
          port: dbCredentials.port,
          userName: dbCredentials.userName,
          password: dbCredentials.password,
          srcDb: dbCredentials.srcDb,
          srcTable: dbCredentials.srcTable,
          dbType: props.dbtype,
          token: localStorage.getItem("token"),
        }),
      });
      props.setProgress(50);
      // eslint-disable-next-line no-unused-vars
      const saved = await response.json();
      props.setProgress(70);
      if (response.status === 200) {
        showAlert("connection saved successfully", "success");
        setSaveButton("");
      } else {
        showAlert("connection save failed", "danger");
      }
      // console.log(saved);
      props.setProgress(100);
    } else if (saveButton === "Update Connector Table") {
      updateConnectorDetails();
    }
  };

  const handleTest = async (e) => {
    props.setProgress(10);
    e.preventDefault();
    const response = await fetch("/checkConnector", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        connectorName: dbCredentials.connectorName,
        port: dbCredentials.port,
        host: dbCredentials.host,
        userName: dbCredentials.userName,
        password: dbCredentials.password,
        srcDb: dbCredentials.srcDb,
        srcTable: dbCredentials.srcTable,
        dbType: props.dbtype,
        authToken: localStorage.getItem("token"),
      }),
    });
    props.setProgress(50);
    // eslint-disable-next-line no-unused-vars
    const json = await response.json();
    props.setProgress(70);
    if (response.status === 200) {
      showAlert("connection Successful", "success");
      setSaveButton("");
    } else {
      showAlert("connection unsuccessful", "danger");
    }
    // console.log(json);
    props.setProgress(100);
  };

  const handleEdit = async (connectorName) => {
    setEditButton("block");
    setDisabled(true);
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
    }
  };

  const updateConnectorDetails = async () => {
    try {
      const response = await fetch("/updateConnectorDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          connectorName: dbCredentials.connectorName,
          host: dbCredentials.host,
          port: dbCredentials.port,
          userName: dbCredentials.userName,
          password: dbCredentials.password,
          srcDb: dbCredentials.srcDb,
          srcTable: dbCredentials.srcTable,
        }),
      });

      const json = await response.json();

      if (response.status === 200 && json.success) {
        showAlert("Connector details updated successfully", "success");
      } else {
        showAlert("Failed to update connector details", "danger");
      }
    } catch (error) {
      console.error("Error updating connector details:", error);
      showAlert("Failed to update connector details", "danger");
    }
  };

  return (
    <div>
      <div>
        <div className="abc" style={{ display: "flex" }}>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={getConnectors}
            >
              Saved Connectors
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
          <div
            className="form-check form-switch"
            style={{ display: `${editButton}` }}
          >
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Edit
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={isSwitchChecked}
              onChange={handleSwitchChange}
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <input
        type="text"
        className="form-control my-2"
        value={dbCredentials.connectorName}
        onChange={onChange}
        id="connectorName"
        name="connectorName"
        disabled={disabled}
        placeholder="Config Connector Name"
        aria-label="Config Connector Name"
      />
      <h5>{capitalize(props.dbtype)} Connection Details:</h5>
      <div>
        <input
          type="text"
          className="form-control my-2"
          value={dbCredentials.host}
          onChange={onChange}
          id="host"
          name="host"
          disabled={disabled}
          placeholder="Host Name"
          aria-label="Host Name"
        />
        <input
          type="text"
          className="form-control"
          value={dbCredentials.port}
          onChange={onChange}
          disabled={disabled}
          id="port"
          name="port"
          placeholder="Port-Number"
          aria-label="Port-Number"
        />
      </div>

      <div className="my-3">
        <h5>User Credentials:</h5>
        <div>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Username"
            value={dbCredentials.userName}
            onChange={onChange}
            disabled={disabled}
            id="userName"
            name="userName"
            aria-label="Username"
          />
          <input
            type="password"
            className="form-control"
            value={dbCredentials.password}
            onChange={onChange}
            disabled={disabled}
            id="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
          />
        </div>
      </div>
      <div className="my-3">
        <h5>Database Credentials:</h5>
        <div>
          <input
            type="text"
            disabled={disabled}
            className="form-control mt-2"
            placeholder={props.placeholder}
            value={dbCredentials.srcDb}
            onChange={onChange}
            id="srcDb"
            name="srcDb"
            aria-label={props.placeholder}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Source Table Name"
            value={dbCredentials.srcTable}
            onChange={onChange}
            id="srcTable"
            name="srcTable"
            disabled={disabled}
            aria-label="Source Table Name"
          />
        </div>
        <div
          className="container mt-2"
          style={{
            display: "flex",
            padding: "0, 25px, 0, 25px",
          }}
        >
          <button
            type="button"
            className="btn btn-primary mx-1 nowrap-button"
            onClick={handleTest}
          >
            Test Connection
          </button>
          <button
            type="button"
            disabled={saveButton}
            onClick={() => saveConfig(saveButton)}
            className="btn btn-primary mx-1 nowrap-button"
          >
            {buttonText}
          </button>
          {/* <button
            type="button"
            disabled={saveButton}
            onClick={updateConnectorDetails}
            className="btn btn-primary nowrap-button"
          >
            Update Connector Table
          </button> */}
        </div>
        <div style={{ marginTop: "10px", width: "auto" }}>
          {alert && (
            <div
              className={`alert alert-${alert.type} alert-dismissible fade show`}
              role="alert"
            >
              <strong>{capitalize(alert.msg)}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JdbcConnector;
