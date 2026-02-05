import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JDBCIngestion from "../IngestionPages/JDBCIngestion";
import ApiIngestion from "../IngestionPages/ApiIngestion";
import FilesIngestion from "../IngestionPages/FilesIngestion";

const DataIngestion = (props) => {
  const [item, setItem] = useState("");
  const [inputBoxes, setInputBoxes] = useState([]);
  let history = useNavigate();
  const [dbDetailsInput, setDbDetailsInput] = useState({
    Project_ID: "",
    Project_Name: "",
    Target_Database: "",
    Target_Table: "",
  });

  const handleInputChange = (index, value) => {
    const updatedInputBoxes = [...inputBoxes];
    updatedInputBoxes[index] = value;
    setInputBoxes(updatedInputBoxes);
  };
  const handleRemoveInputBox = () => {
    if (inputBoxes.length > 0) {
      const updatedInputBoxes = [...inputBoxes];
      updatedInputBoxes.pop();
      setInputBoxes(updatedInputBoxes);
    }
  };
  const onChange = (e) => {
    setDbDetailsInput({ ...dbDetailsInput, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/");
    }
    // Set initial colors using props
    setItem("JDBC")
    props.setside("block");
    props.setNav("block");
    props.setColor1("#12262e");
    props.setColor2("#23434f");
    props.setColor3("#12262e");
    props.setColor4("#12262e");
    props.setColor5("#12262e");
  }, [history, props]);
  const handleAddInputBox = () => {
    setInputBoxes([...inputBoxes, ""]);
  };
  return (
    <>
      <div className="dbInputBox d-flex">
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            value={dbDetailsInput.Project_ID}
            onChange={onChange}
            id="Project_ID"
            placeholder="Project ID:"
          />
          <label htmlFor="floatingInput">Project ID:</label>
        </div>
        <div className="form-floating mb-3 mx-2">
          <input
            type="text"
            className="form-control"
            value={dbDetailsInput.Project_Name}
            onChange={onChange}
            id="Project_Name"
            placeholder="Project Name:"
          />
          <label htmlFor="floatingInput">Project Name:</label>
        </div>
        <div className="form-floating mb-3 mx-2">
          <input
            type="text"
            className="form-control"
            value={dbDetailsInput.Target_Database}
            onChange={onChange}
            id="Target_Database"
            placeholder="Target Database:"
          />
          <label htmlFor="floatingInput">Target Database:</label>
        </div>
        <div className="form-floating mb-3 mx-2">
          <input
            type="text"
            className="form-control"
            value={dbDetailsInput.Target_Table}
            onChange={onChange}
            id="Target_Table"
            placeholder="Target Table:"
          />
          <label htmlFor="floatingInput">Target Table:</label>
        </div>
      </div>
      <h5>Select DataBase Source:</h5>
      <nav className="navjdb pt-2">
        <ul className="nav mx-2" style={{ cursor: "pointer" }}>
          <li
            className={`nav-item ${
              item === "JDBC" ? `navjdbcactive` : `navjdb`
            }`}
            onClick={() => setItem("JDBC")}
          >
            JDBC
          </li>
          <li
            className={`nav-item ${
              item === "API" ? "navjdbcactive" : "navjdb"
            } mx-2`}
            onClick={() => setItem("API")}
          >
            API
          </li>
          <li
            className={`nav-item ${
              item === "Files" ? "navjdbcactive" : "navjdb"
            } mx-2`}
            onClick={() => setItem("Files")}
          >
            File
          </li>
        </ul>
      </nav>
      <div className="viewIngestion">
        {(() => {
          if (item === "API") {
            return <ApiIngestion />;
          } else if (item === "JDBC") {
            return <JDBCIngestion />;
          } else if (item === "Files") {
            return <FilesIngestion />;
          }
        })()}
        <div className="qcinputs pt-1" style={{ marginLeft: "45px" }}>
          <p style={{ color: "#000" }}>
            <strong>Data Quality Checks:</strong>
          </p>
          <button className="btn btn-primary mx-2 tabbuttons" onClick={handleAddInputBox}>
            Add Field +
          </button>
          <button className="btn btn-primary tabbuttons" onClick={handleRemoveInputBox}>
            Remove Field -
          </button>

          {inputBoxes.map((value, index) => (
            <div className="d-flex" key={index}>
              <div>
                <div class="dropdown mx-2 mt-2">
                  <button
                    class="btn btn-secondary dropdown-toggle tabbuttons`"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">Action</li>

                    <li class="dropdown-item">Another action</li>

                    <li class="dropdown-item">Something else here</li>
                  </ul>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  style={{ width: "250px" }}
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="container pb-5" style={{ marginLeft: "45px" }}>
          <button className="btn btn-primary mt-2 tabbuttons">Save Config</button>
        </div>
      </div>
    </>
  );
};

export default DataIngestion;
