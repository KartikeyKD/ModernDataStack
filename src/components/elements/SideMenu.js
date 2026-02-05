import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarParent = styled.div`
  background: #12262e;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: max-content;
  overflow: auto;
`;

function SideMenu(props) {
  const [adminAccess, setAdminAccess] = useState("");
  const admin = () => {
    const userName = localStorage.getItem("name");
    if (userName === "Kartikeya") {
      setAdminAccess("block");
    } else if (userName === "Suraj") {
      setAdminAccess("none");
    }
  };
  useEffect(() => {
    admin();
  }, []);

  return (
    <>
      <div style={{ display: `${props.side}` }}>
        <SidebarParent>
          <div style={{ marginTop: "90px" }}>
            <div className="menuItem">
              <ul style={{ listStyle: "none" }}>
                {/* <Link
                  className="links"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "20px",
                  }}
                  to="/ConfigConnectors"
                >
                  <li
                    className="menulist"
                    style={{ backgroundColor: `${props.color1}` }}
                  >
                    <img
                      src="/logos/configconnectors.png"
                      className="menuIcons"
                      alt=""
                    />
                    Config Table Connector
                  </li>
                </Link> */}
                <Link
                  className="links"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/connectors"
                >
                  <li
                    className="menulist"
                    style={{ backgroundColor: `${props.color1}` }}
                  >
                    <i className="bx bx-plug"></i>
                    Connectors
                  </li>
                </Link>
                <Link
                  className="links"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/DataIngestion"
                >
                  <li
                    className="menulist"
                    style={{ backgroundColor: `${props.color2}` }}
                  >
                    <i className="bx bx-analyse"></i>
                    Data Ingestion
                  </li>
                </Link>
                <Link
                  className="links"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/DatabricksConnection"
                >
                  <li
                    style={{
                      backgroundColor: `${props.color3}`,
                      paddingRight: "25px",
                    }}
                  >
                    <i className="bx bxs-network-chart menuIcons"></i>
                    Databricks Connections
                  </li>
                </Link>
                <div style={{ display: `${adminAccess}` }}>
                  <Link
                    className="links"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/AccessControl"
                  >
                    <li
                      style={{
                        backgroundColor: `${props.color4}`,
                      }}
                    >
                      <i className="bx bx-shield-quarter"></i>
                      Access Controls
                    </li>
                  </Link>
                  <Link
                    className="links"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Infrastructure"
                  >
                    <li
                      style={{
                        backgroundColor: `${props.color5}`,
                      }}
                    >
                      <i className="bx bxs-castle"></i>
                      Infrastructure
                    </li>
                  </Link>
                </div>
              </ul>
            </div>
            <div
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                marginBottom: "20px",
              }}
            >
              <div className="power">
                <h6>Powered By:</h6>
                <img
                  src="/images/dbrcks.png"
                  alt=""
                  style={{ width: "200px", marginLeft: "10px" }}
                />
              </div>
            </div>
          </div>
        </SidebarParent>
      </div>
    </>
  );
}

export default SideMenu;
