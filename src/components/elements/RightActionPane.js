import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import JdbcConnector from "../connectors/JdbcConnector";
import ApiConnector from "../connectors/ApiConnector";
import FilesConnector from "../connectors/FilesConnector";
import PowerbiConnector from "../connectors/PowerbiConnector";
import NoSqlDbConfig from "../configConnectors/NoSqlDbConfig";
import SQLdbConfig from "../configConnectors/SQLdbConfig";
import LoadingBar from "react-top-loading-bar";

function RightActionPane(props) {
  let [progress, setProgress] = useState(0);

  return (
    <Offcanvas
      className="cst-side-drawer"
      placement="end"
      style={{ width: "30%" }}
      show={props.inspectCanvasShow}
      onHide={props.closeInspectCanvas}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Configure your {props.item} Connector</Offcanvas.Title>
      </Offcanvas.Header>
      <div className="container overflow-auto">
        <LoadingBar height={4} color="#800907" progress={progress} />
        {(() => {
          if (props.item === "API") {
            return <ApiConnector />;
          } else if (props.item === "JDBC") {
            return (
              <JdbcConnector
                dbtype={props.dbtype}
                setProgress={setProgress}
                showAlert={props.showAlert}
                placeholder={props.placeholder}
              />
            );
          } else if (props.item === "Files") {
            return <FilesConnector />;
          } else if (props.item === "PowerBI") {
            return <PowerbiConnector />;
          } else if (props.item === "MongoDB") {
            return <NoSqlDbConfig />;
          } else if (props.item === "SQLConfig") {
            return (
              <SQLdbConfig
                dbType={props.type}
                setProgress={setProgress}
                showAlert={props.showAlert}
                placeholder={props.placeholder}
              />
            );
          }
        })()}
      </div>
    </Offcanvas>
  );
}

export default RightActionPane;
