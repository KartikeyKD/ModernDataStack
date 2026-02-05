import React, { useEffect, useState } from "react";
import RightActionPane from "../elements/RightActionPane";
import SearchOption from "../elements/SearchOption";
import { useNavigate } from "react-router-dom";

function ConnectorConsole(props) {
  let history = useNavigate();
  const [inspectCanvasShow, setInspectCanvasShow] = useState(false);
  const [element, setElement] = useState("");
  const [searchText, setSearchText] = useState("");
  const [displayjdbc, setDisplayjdbc] = useState("block");
  const [displayapi, setDisplayapi] = useState("block");
  const [displayfiles, setDisplayfiles] = useState("block");
  const [displaybi, setDisplaybi] = useState("block");
  const [displaymon, setDisplaymon] = useState("block");
  const [dbType, setDbType] = useState();
  const [placeholder, setPlaceholder] = useState("");
  const showCanvas = (xyz, type) => {
    props.setside("block");
    setDbType(type);
    // console.log("You clicked", dbtype);
    setElement(xyz);
    if (type === "oracle") {
      setPlaceholder("Service name");
    } else {
      setPlaceholder("Source DB Name");
    }
    setInspectCanvasShow(true);
  };
  const closeInspectCanvas = (str) => {
    setInspectCanvasShow(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/");
    }

    // Set initial colors using props

    props.setside("block");
    props.setNav("block");
    props.setColor1("#23434f");
    props.setColor2("#12262e");
    props.setColor3("#12262e");
    props.setColor4("#12262e");
    props.setColor5("#12262e");
    if (localStorage.getItem("name") === "Kartikeya") {
      setDisplaymon("block");
    } else if (localStorage.getItem("name") === "Suraj") {
      setDisplaymon("none");
    }
  }, []);

  const filterCards = (card) => {
    const cardTitle = card.props.children[1].props.children;
    return cardTitle.toLowerCase().includes(searchText.toLowerCase());
  };

  return (
    <>
      <div className="searcher">
        <SearchOption
          setJDBC={setDisplayjdbc}
          setAPI={setDisplayapi}
          setFile={setDisplayfiles}
          setBi={setDisplaybi}
          setMon={setDisplaymon}
          setSearchText={setSearchText}
        />
      </div>
      <div className="console">
        <div style={{ display: `${displayjdbc}` }}>
          <h3 className="my-3">JDBC Connectors: </h3>
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
            {React.Children.toArray(props.children).filter(filterCards)}

            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("JDBC", "oracle")}
                id="cards"
              >
                <img
                  src="/images/mssql.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">SQL Connector</h5>
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
                id="cards"
                onClick={() => showCanvas("JDBC", "postgres")}
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
                onClick={() => showCanvas("JDBC", "mysql")}
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
          dbtype={dbType}
          placeholder={placeholder}
          showAlert={props.showAlert}
        />

        {/* API CONNECTOR SEGEMENT */}
        <div style={{ display: `${displayapi}` }}>
          <h3 className="my-3 mt-5">API Connector : </h3>
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
                onClick={() => showCanvas("API")}
                id="cards"
              >
                <img
                  src="/images/rest.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Spark API Connector</h5>
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
                onClick={() => showCanvas("API")}
                id="cards"
              >
                <img
                  src="/images/httpx.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Request API Connector</h5>
                  <p className="card-text">
                    PostgreSQL is a powerful, open source object-relational
                    database system that uses and extends the SQL language
                    combined with many features that safely store and scale the
                    most complicated data workloads.
                  </p>
                </div>
              </div>
            </div>

            {/* end div */}
          </div>
        </div>
        {/* Files CONNECTOR SEGEMENT */}
        <div style={{ display: `${displayfiles}` }}>
          <h3 className="my-3 mt-5">Connection via File : </h3>
          <div className="tiles">
            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("Files")}
                id="cards"
              >
                <img
                  src="/images/upload.png"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Upload Connector File</h5>
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
        {/* Power BI Connector Segement */}
        <div style={{ display: `${displaybi}` }}>
          <h3 className="my-3 mt-5">Power BI config : </h3>
          <p className="card-text">Somwthing about Power BI</p>

          <div>
            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("PowerBI")}
                id="cards"
              >
                <img
                  src="/images/powerbi.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Power BI</h5>
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
        {/* Monitoring Tools Segement  */}
        <div style={{ display: `${displaymon}` }}>
          <h3 className="my-3 mt-5">Monitoring Tools : </h3>
          <p className="card-text">Somwthing about Power BI</p>

          <div>
            <div>
              <div
                className="card neumorphic-card"
                onClick={() => showCanvas("PowerBI")}
                id="cards"
              >
                <img
                  src="/images/newrelic.svg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">New Relic</h5>
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
        {/* end div */}
      </div>
    </>
  );
}

export default ConnectorConsole;
