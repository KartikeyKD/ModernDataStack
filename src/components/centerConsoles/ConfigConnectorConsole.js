import React, { useEffect, useState } from "react";
import RightActionPane from "../elements/RightActionPane";
import { useNavigate } from "react-router-dom";

function ConfigConnectorConsole(props) {
  const [inspectCanvasShow, setInspectCanvasShow] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [dbType, setType] = useState("");

  const [element, setElement] = useState("");
  useNavigate();
  const showCanvas = (xyz, Type) => {
    setType(Type);
    setElement(xyz);
    // console.log("From Console", dbType);
    if (Type === "oracle") {
      setPlaceholder("Service name");
    } else {
      setPlaceholder("Source DB Name");
    }
    props.setside("block");
    setInspectCanvasShow(true);
  };
  const closeInspectCanvas = (str) => {
    setInspectCanvasShow(false);
  };

  useEffect(() => {
    // Set initial colors using props
    props.setColor1("#23434f");
    props.setColor2("#12262e");
    props.setColor3("#12262e");
    props.setColor4("#12262e");
    props.setColor5("#12262e");
  }, [props]);

  return (
    <>
      <div>
        <div className="heading">
          <h3>SQL Database: </h3>
          <p className="mb-4" style={{ fontSize: "12px" }}>
            JDBC Connector extends generic connectivity to databases that
            Informatica does not have access to through the Informatica Cloud
            Data Integration native connectors. When you use JDBC Connector,
            Informatica does not guarantee that the functionality or performance
            might be equivalent to what you expect when you use the Informatica
            Cloud Data Integration native connectors. The database that you want
            to connect to might not have been tested or certified for use with
            JDBC Connector and you might experience connection or execution
            issues.
          </p>
          <div className="tiles">
            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("SQLConfig", "oracle")}
                id="cards"
              >
                <img
                  src="/images/mssql.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Oracle DB Connector</h5>
                  <p className="card-text">
                    It is a Java-based data access technology used for Java
                    database connectivity. It is part of the Java Standard
                    Edition platform, from Oracle Corporation. It provides
                    methods to query and update data.
                  </p>
                </div>
              </div>
            </div>
            {/* Postgres Card */}
            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("SQLConfig", "postgres")}
                id="cards"
              >
                <img
                  src="/images/postgres.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">PostgreSql Connector</h5>
                  <p className="card-text">
                    PostgreSQL is a powerful, open source object-relational
                    database system that uses and extends the SQL language
                    combined with many features that safely store and scale the
                    most complicated data workloads.
                  </p>
                </div>
              </div>
            </div>
            {/* MySQL Card */}

            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("SQLConfig", "mysql")}
                id="cards"
              >
                <img
                  src="/images/MySql.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">MySQL Connector</h5>
                  <p className="card-text">
                    MySQL Connectors provide connectivity to the MySQL server
                    for client programs. APIs provide low-level access to MySQL
                    resources. Both Connectors and the APIs enable you to
                    connect and execute MySQL.
                  </p>
                </div>
              </div>
            </div>

            {/* end div */}
          </div>
        </div>
        <RightActionPane
          inspectCanvasShow={inspectCanvasShow}
          closeInspectCanvas={closeInspectCanvas}
          item={element}
          type={dbType}
          placeholder={placeholder}
          showAlert={props.showAlert}
        />

        {/* NoSQL CONNECTOR SEGEMENT */}
        <div>
          <h3 className="my-3 mt-5">NoSql Database: </h3>
          <p className="card-text">
            An API (Application Programming Interface) is a bunch of software
            code that allows two applications to communicate with one another to
            access data. Open APIs are available for use by anyone and are
            typically offered as a way to extend services. Obviously, this is
            all done in a secured and controlled manner.An API is the
            infrastructure that creates the potential for applications to share
            data. To actually integrate two applications together, an API
            Connector has to be built between them. To understand this better,
            let’s use the airport analogy.
          </p>
          <div className="tiles">
            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("MongoDB")}
                id="cards"
              >
                <img
                  src="/images/MongoDB.svg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mongo DB</h5>
                  <p className="card-text">
                    It is a Java-based data access technology used for Java
                    database connectivity. It is part of the Java Standard
                    Edition platform, from Oracle Corporation. It provides
                    methods to query and update data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfigConnectorConsole;
