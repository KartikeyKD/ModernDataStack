import React from "react";

function SearchOption(props) {
  const handleSearchChange = (event) => {
    props.setSearchText(event.target.value);
  };
  const handlesearch = (xyz) => {
    if (xyz === "JDBC") {
      props.setJDBC("block");
      props.setAPI("none");
      props.setFile("none");
      props.setBi("none");
      props.setMon("none");
    } else if (xyz === "API") {
      props.setJDBC("none");
      props.setAPI("block");
      props.setFile("none");
      props.setBi("none");
      props.setMon("none");
    } else if (xyz === "BI") {
      props.setJDBC("none");
      props.setAPI("none");
      props.setFile("none");
      props.setBi("block");
      props.setMon("none");
    } else if (xyz === "Files") {
      props.setJDBC("none");
      props.setAPI("none");
      props.setFile("block");
      props.setBi("none");
      props.setMon("none");
    } else if (xyz === "Mon") {
      props.setJDBC("none");
      props.setAPI("none");
      props.setFile("none");
      props.setBi("none");
      props.setMon("block");
    } else if (xyz === "ALL") {
      props.setJDBC("block");
      props.setAPI("block");
      props.setFile("block");
      props.setBi("block");
      props.setMon("block");
    }
  };
  return (
    <>
      <div className="searchbox">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ float: "left", width: "250px" }}
          onChange={handleSearchChange}
        />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle mx-10"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ float: "right" }}
          >
            All Categories
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => handlesearch("ALL")}>
              All Categories
            </li>
            <li className="dropdown-item" onClick={() => handlesearch("JDBC")}>
              JDBC Connectors
            </li>

            <li className="dropdown-item" onClick={() => handlesearch("BI")}>
              BI and Visualization
            </li>

            <li className="dropdown-item" onClick={() => handlesearch("API")}>
              API Connectors
            </li>

            <li className="dropdown-item" onClick={() => handlesearch("Files")}>
              Upload Files
            </li>

            <li className="dropdown-item" onClick={() => handlesearch("Mon")}>
              Monitoring Tools
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchOption;
