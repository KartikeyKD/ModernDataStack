import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("type");
    history("/");
  };


  // const [show, setShow] = useState();
  return (
    <div style={{ display: `${props.nav}` }}>
      <nav
        className="navbar navbar-expand fixed-top"
        style={{ background: "#12262e", borderBottom:"2px solid gray" }}
      >
        <div className="container-fluid">
          <a className="Ltext" href="/">
            <div className="image-container">
              <img
                src="/images/bml.png"
                alt=""
                style={{ height: "55px", marginLeft: "7px" }}
              />
              <div className="separator"></div>
              <img src="/images/2.png" alt="" style={{ height: "35px" }} />
            </div>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
        <div className="btn-group mx-5">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi {localStorage.getItem("name")}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item">
                Update Config
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                Upload Config
              </button>
            </li>
            <li onClick={handleLogout}>
              <button className="dropdown-item">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
